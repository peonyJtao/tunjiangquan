'''
Date: 2026-04-25 17:52:50
LastEditors: peonyJtao
LastEditTime: 2026-04-25 18:01:09
FilePath: /敦华集团/backend/mailer.py
description:
'''
import smtplib
from email.message import EmailMessage

try:
    from .config import settings
    from .schemas import ContactRequest
except ImportError:
    from config import settings
    from schemas import ContactRequest


def send_contact_email(payload: ContactRequest, recipient: str) -> None:
    message = EmailMessage()
    message["Subject"] = f"{payload.name} {payload.email}"
    message["From"] = settings.mail_from
    message["To"] = recipient
    message["Reply-To"] = str(payload.email)
    message.set_content(
        "\n".join(
            [
                f"来源: {payload.category}",
                f"姓名: {payload.name}",
                f"邮箱: {payload.email}",
                "",
                "留言内容:",
                payload.message,
            ]
        )
    )

    if settings.smtp_port == 465:
        with smtplib.SMTP_SSL(settings.smtp_host, settings.smtp_port, timeout=30) as server:
            server.login(settings.smtp_username, settings.smtp_password)
            server.send_message(message)
        return

    with smtplib.SMTP(settings.smtp_host, settings.smtp_port, timeout=30) as server:
        server.ehlo()
        if settings.smtp_use_tls:
            server.starttls()
            server.ehlo()
        server.login(settings.smtp_username, settings.smtp_password)
        server.send_message(message)
