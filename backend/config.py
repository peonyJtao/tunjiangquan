import os
from dataclasses import dataclass


@dataclass(frozen=True)
class Settings:
    smtp_host: str
    smtp_port: int
    smtp_username: str
    smtp_password: str
    smtp_use_tls: bool
    mail_from: str
    cors_allow_origins: tuple[str, ...]
    recipient_map: dict[str, str]


def _require_env(name: str) -> str:
    value = os.getenv(name)
    if value is None or not value.strip():
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value.strip()


def _get_bool(name: str, default: bool = False) -> bool:
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


def _get_origins() -> tuple[str, ...]:
    value = os.getenv("CORS_ALLOW_ORIGINS", "*").strip()
    if value == "*":
        return ("*",)
    origins = tuple(origin.strip() for origin in value.split(",") if origin.strip())
    return origins or ("*",)


def load_settings() -> Settings:
    return Settings(
        smtp_host='smtp.qq.com',
        smtp_port=465,
        smtp_username='1336211195@qq.com',
        smtp_password='lqdpaezuramigabd',
        smtp_use_tls=_get_bool("SMTP_USE_TLS", default=True),
        mail_from='1336211195@qq.com',
        cors_allow_origins=_get_origins(),
        recipient_map={
            "dunhuagroup": 'peonyfoals@gmail.com',
            "tungkongchuen": 'peonyfoals@gmail.com',
        },
    )


settings = load_settings()
