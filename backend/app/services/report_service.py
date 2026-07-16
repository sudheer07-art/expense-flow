from sqlalchemy.orm import Session

from app.repositories.report_repository import ReportRepository
from app.utils.pdf_generator import PDFGenerator
from app.utils.excel_generator import ExcelGenerator

class ReportService:

    @staticmethod
    def get_monthly_report(
        db: Session,
        user_id: int,
        month: int,
        year: int
    ):

        total_expense = ReportRepository.get_total_expense(
            db,
            user_id,
            month,
            year
        )

        total_transactions = ReportRepository.get_total_transactions(
            db,
            user_id,
            month,
            year
        )

        category_data = ReportRepository.get_category_summary(
            db,
            user_id,
            month,
            year
        )

        categories = []

        for category, total in category_data:
            categories.append(
                {
                    "category": category,
                    "total": total
                }
            )

        return {
            "month": month,
            "year": year,
            "total_expense": total_expense,
            "total_transactions": total_transactions,
            "categories": categories
        }
    @staticmethod
    def generate_monthly_pdf(
        db: Session,
        user_id: int,
        month: int,
        year: int
    ):

        report = ReportService.get_monthly_report(
            db=db,
            user_id=user_id,
            month=month,
            year=year
        )

        return PDFGenerator.generate_monthly_report(
            report
        )
    @staticmethod
    def generate_monthly_excel(
        db: Session,
        user_id: int,
        month: int,
        year: int
    ):

        report = ReportService.get_monthly_report(
            db=db,
            user_id=user_id,
            month=month,
            year=year
        )

        return ExcelGenerator.generate_monthly_report(
            report
        )
    @staticmethod
    def get_yearly_report(
    db: Session,
    user_id: int,
    year: int
):

        total_expense = ReportRepository.get_year_total(
        db,
        user_id,
        year
    )

        total_transactions = ReportRepository.get_year_transaction_count(
        db,
        user_id,
        year
    )

        monthly_data = ReportRepository.get_yearly_summary(
        db,
        user_id,
        year
    )

        breakdown = []

        for month, total in monthly_data:
            breakdown.append(
            {
                "month": int(month),
                "total": total
            }
        )

        return {
        "year": year,
        "total_expense": total_expense,
        "total_transactions": total_transactions,
        "monthly_breakdown": breakdown
    }