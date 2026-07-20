from typing import List

from pydantic import BaseModel


class CategorySummary(BaseModel):
    category: str
    total: float


class MonthlyReportResponse(BaseModel):
    month: int
    year: int
    total_expense: float
    total_transactions: int
    categories: List[CategorySummary]


class MonthlyBreakdown(BaseModel):
    month: int
    total: float


class YearlyReportResponse(BaseModel):
    year: int
    total_expense: float
    total_transactions: int
    monthly_breakdown: List[MonthlyBreakdown]