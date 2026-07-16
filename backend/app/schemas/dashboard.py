from pydantic import BaseModel


class DashboardSummary(BaseModel):
    total_expense: float
    total_transactions: int
    today_expense: float
    this_month_expense: float

    budget: float
    remaining_budget: float
    budget_used_percentage: float
    budget_status: str