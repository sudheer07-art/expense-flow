from pydantic import BaseModel


class BudgetCreate(BaseModel):
    amount: float
    month: int
    year: int


class BudgetUpdate(BaseModel):
    amount: float


class BudgetResponse(BaseModel):
    id: int
    amount: float
    month: int
    year: int
    user_id: int

    class Config:
        from_attributes = True