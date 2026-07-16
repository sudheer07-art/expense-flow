from pydantic import BaseModel
from datetime import date, datetime


class ExpenseCreate(BaseModel):
    title: str
    amount: float
    category: str
    description: str | None = None
    expense_date: date


class ExpenseUpdate(BaseModel):
    title: str
    amount: float
    category: str
    description: str | None = None
    expense_date: date


class ExpenseResponse(BaseModel):
    id: int
    title: str
    amount: float
    category: str
    description: str | None = None
    expense_date: date
    created_at: datetime
    user_id: int

    class Config:
        from_attributes = True