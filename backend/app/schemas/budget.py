
from pydantic import BaseModel, Field, ConfigDict


class BudgetBase(BaseModel):
    amount: float = Field(..., gt=0)
    month: int = Field(..., ge=1, le=12)
    year: int = Field(..., ge=2024)


class BudgetCreate(BudgetBase):
    pass


class BudgetUpdate(BaseModel):
    amount: float = Field(..., gt=0)


class BudgetResponse(BudgetBase):
    id: int
    user_id: int

    model_config = ConfigDict(
        from_attributes=True
    )


class CurrentBudgetResponse(BaseModel):
    budget_id: int | None
    amount: float
    spent: float
    remaining: float
    used_percentage: float
    status: str
    month: int
    year: int