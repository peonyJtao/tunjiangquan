import json
import logging
from datetime import datetime
from pathlib import Path

import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

try:
    from .config import settings
    from .mailer import send_contact_email
    from .schemas import ContactRequest
except ImportError:
    from config import settings
    from mailer import send_contact_email
    from schemas import ContactRequest


logger = logging.getLogger(__name__)
app = FastAPI()
messages_dir = Path(__file__).resolve().parent / "messages"

app.add_middleware(
    CORSMiddleware,
    allow_origins=list(settings.cors_allow_origins),
    allow_credentials=False,
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["*"],
)


def save_message(payload: ContactRequest, status: str, error_message: str | None = None) -> None:
    messages_dir.mkdir(parents=True, exist_ok=True)
    now = datetime.now()
    file_path = messages_dir / f"{now.strftime('%Y-%m')}.json"
    record = {
        "created_at": now.strftime("%Y-%m-%d %H:%M:%S"),
        "status": status,
        "category": payload.category,
        "name": payload.name,
        "email": str(payload.email),
        "message": payload.message,
        "error": error_message,
    }

    if file_path.exists():
        records = json.loads(file_path.read_text(encoding="utf-8"))
    else:
        records = []

    records.append(record)
    file_path.write_text(
        json.dumps(records, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


@app.post("/contact")
async def create_contact_message(payload: ContactRequest) -> dict[str, bool]:
    recipient = settings.recipient_map.get(payload.category)
    if recipient is None:
        raise HTTPException(status_code=400, detail="Invalid category")

    try:
        send_contact_email(payload, recipient)
    except Exception as exc:
        save_message(payload, status="failed", error_message=str(exc))
        logger.exception("Failed to send contact message")
        raise HTTPException(status_code=500, detail="Failed to send message")

    save_message(payload, status="sent")
    return {"ok": True}


if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=True)
