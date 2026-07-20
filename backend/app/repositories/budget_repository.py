
from datetime import datetime

from sqlalchemy.orm import Session

from app.models.budget import Budget


class BudgetRepository:

    @staticmethod
    def create(
        db: Session,
        budget: Budget,
    ) -> Budget:
        db.add(budget)
        db.commit()
        db.refresh(budget)
        return budget

    @staticmethod
    def get_all(
        db: Session,
        user_id: int,
    ) -> list[Budget]:
        return (
            db.query(Budget)
            .filter(
                Budget.user_id == user_id
            )
            .order_by(
                Budget.year.desc(),
                Budget.month.desc(),
            )
            .all()
        )

    @staticmethod
    def get_by_id(
        db: Session,
        budget_id: int,
        user_id: int,
    ) -> Budget | None:
        return (
            db.query(Budget)
            .filter(
                Budget.id == budget_id,
                Budget.user_id == user_id,
            )
            .first()
        )

    @staticmethod
    def get_by_user_month_year(
        db: Session,
        user_id: int,
        month: int,
        year: int,
    ) -> Budget | None:
        return (
            db.query(Budget)
            .filter(
                Budget.user_id == user_id,
                Budget.month == month,
                Budget.year == year,
            )
            .first()
        )

    @staticmethod
    def get_current_month_budget(
        db: Session,
        user_id: int,
    ) -> Budget | None:
        today = datetime.now()

        return (
            db.query(Budget)
            .filter(
                Budget.user_id == user_id,
                Budget.month == today.month,
                Budget.year == today.year,
            )
            .first()
        )

    @staticmethod
    def update(
        db: Session,
        budget: Budget,
    ) -> Budget:
        db.commit()
        db.refresh(budget)
        return budget

    @staticmethod
    def delete(
        db: Session,
        budget: Budget,
    ) -> None:
        db.delete(budget)
        db.commit()