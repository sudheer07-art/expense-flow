from pydantic import BaseModel


class CategoryAnalyticsResponse(BaseModel):
    category: str
    total: float


class MonthlyAnalyticsResponse(BaseModel):
    month: str
    total: float