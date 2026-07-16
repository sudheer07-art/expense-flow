from typing import Optional

from pydantic import BaseModel


class ExpenseFilter(BaseModel):

    category: Optional[str] = None

    month: Optional[int] = None

    year: Optional[int] = None

    min_amount: Optional[float] = None

    max_amount: Optional[float] = None

    search: Optional[str] = None

    page: int = 1

    size: int = 10