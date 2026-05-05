from typing import Literal

from pydantic import BaseModel, ConfigDict, EmailStr, field_validator


class ContactRequest(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    name: str
    email: EmailStr
    message: str
    category: Literal["dunhuagroup", "tungkongchuen"]

    @field_validator("name")
    @classmethod
    def validate_name(cls, value: str) -> str:
        if not value:
            raise ValueError("Name is required")
        if len(value) > 120:
            raise ValueError("Name is too long")
        return value

    @field_validator("message")
    @classmethod
    def validate_message(cls, value: str) -> str:
        if not value:
            raise ValueError("Message is required")
        if len(value) > 5000:
            raise ValueError("Message is too long")
        return value
