from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.auth.jwt_handler import get_current_user
from app.database.session import get_db

from app.schemas.analytics import (
    CategoryAnalyticsResponse,
    MonthlyAnalyticsResponse,
)

from app.services.analytics_service import AnalyticsService

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)


# ----------------------------------------
# Category Analytics
# ----------------------------------------
@router.get(
    "/category",
    response_model=list[CategoryAnalyticsResponse]
)
def get_category_summary(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return AnalyticsService.get_category_summary(
        db=db,
        user_id=current_user.id
    )


# ----------------------------------------
# Monthly Analytics
# ----------------------------------------
@router.get(
    "/monthly",
    response_model=list[MonthlyAnalyticsResponse]
)
def get_monthly_summary(
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user)
):
    return AnalyticsService.get_monthly_summary(
        db=db,
        user_id=current_user.id
    )