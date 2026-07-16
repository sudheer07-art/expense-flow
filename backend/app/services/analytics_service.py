import calendar
from sqlalchemy.orm import Session

from app.repositories.analytics_repository import AnalyticsRepository


class AnalyticsService:

    @staticmethod
    def get_category_summary(
        db: Session,
        user_id: int
    ):

        data = AnalyticsRepository.get_category_summary(
            db,
            user_id
        )

        return [
            {
                "category": row.category,
                "total": float(row.total)
            }
            for row in data
        ]

    @staticmethod
    def get_monthly_summary(
        db: Session,
        user_id: int
    ):

        data = AnalyticsRepository.get_monthly_summary(
            db,
            user_id
        )

        return [
            {
                "month": calendar.month_abbr[int(row.month)],
                "total": float(row.total)
            }
            for row in data
        ]