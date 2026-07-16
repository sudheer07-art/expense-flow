from sqlalchemy.orm import Session

from app.repositories.dashboard_repository import DashboardRepository
from app.repositories.budget_repository import BudgetRepository


class DashboardService:

    @staticmethod
    def get_dashboard_summary(
        db: Session,
        user_id: int
    ):

        total_expense = DashboardRepository.get_total_expense(
            db,
            user_id
        )

        total_transactions = DashboardRepository.get_total_transactions(
            db,
            user_id
        )

        today_expense = DashboardRepository.get_today_expense(
            db,
            user_id
        )

        this_month_expense = DashboardRepository.get_this_month_expense(
            db,
            user_id
        )

                # -----------------------------
        # Current Month Budget
        # -----------------------------
        budget = BudgetRepository.get_current_month_budget(
            db,
            user_id
        )

        budget_amount = budget.amount if budget else 0

        remaining_budget = budget_amount - this_month_expense

        if budget_amount > 0:
            budget_used_percentage = (
                this_month_expense / budget_amount
            ) * 100
        else:
            budget_used_percentage = 0

        # -----------------------------
        # Budget Status
        # -----------------------------
        if budget_used_percentage >= 100:
            budget_status = "Over Budget"
        elif budget_used_percentage >= 80:
            budget_status = "Warning"
        else:
            budget_status = "On Track"

        return {
            "total_expense": total_expense,
            "total_transactions": total_transactions,
            "today_expense": today_expense,
            "this_month_expense": this_month_expense,

            "budget": budget_amount,
            "remaining_budget": remaining_budget,
            "budget_used_percentage": round(
                budget_used_percentage,
                2
            ),
            "budget_status": budget_status
        }