from sqlalchemy.orm import Session

from app.repositories.report_repository import ReportRepository

from app.schemas.report import (
    CategorySummary,
    MonthlyBreakdown,
    MonthlyReportResponse,
    YearlyReportResponse,
)

from app.utils.pdf_generator import PDFGenerator
from app.utils.excel_generator import ExcelGenerator


class ReportService:

    @staticmethod
    def get_monthly_report(
        db: Session,
        user_id: int,
        month: int,
        year: int,
    ) -> MonthlyReportResponse:

        total_expense = ReportRepository.get_total_expense(
            db,
            user_id,
            month,
            year,
        )

        total_transactions = ReportRepository.get_total_transactions(
            db,
            user_id,
            month,
            year,
        )

        category_data = ReportRepository.get_category_summary(
            db,
            user_id,
            month,
            year,
        )

        categories = [
            CategorySummary(
                category=category,
                total=float(total),
            )
            for category, total in category_data
        ]

        return MonthlyReportResponse(
            month=month,
            year=year,
            total_expense=float(total_expense),
            total_transactions=total_transactions,
            categories=categories,
        )


    @staticmethod
    def get_yearly_report(
        db: Session,
        user_id: int,
        year: int,
    ) -> YearlyReportResponse:

        total_expense = ReportRepository.get_year_total(
            db,
            user_id,
            year,
        )

        total_transactions = ReportRepository.get_year_transaction_count(
            db,
            user_id,
            year,
        )

        monthly_data = ReportRepository.get_yearly_summary(
            db,
            user_id,
            year,
        )

        breakdown = [
            MonthlyBreakdown(
                month=int(month),
                total=float(total),
            )
            for month, total in monthly_data
        ]

        return YearlyReportResponse(
            year=year,
            total_expense=float(total_expense),
            total_transactions=total_transactions,
            monthly_breakdown=breakdown,
        )


    @staticmethod
    def generate_monthly_pdf(
        db: Session,
        user_id: int,
        month: int,
        year: int,
    ):

        report = ReportService.get_monthly_report(
            db=db,
            user_id=user_id,
            month=month,
            year=year,
        )

        return PDFGenerator.generate_monthly_report(
            report.model_dump()
        )


    @staticmethod
    def generate_monthly_excel(
        db: Session,
        user_id: int,
        month: int,
        year: int,
    ):

        report = ReportService.get_monthly_report(
            db=db,
            user_id=user_id,
            month=month,
            year=year,
        )

        return ExcelGenerator.generate_monthly_report(
            report.model_dump()
        )