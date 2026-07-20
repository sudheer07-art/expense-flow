from fastapi import APIRouter, Depends
from fastapi.responses import StreamingResponse
from sqlalchemy.orm import Session

from app.auth.jwt_handler import get_current_user
from app.database.session import get_db

from app.schemas.report import (
    MonthlyReportResponse,
    YearlyReportResponse,
)

from app.services.report_service import ReportService


router = APIRouter(
    prefix="/reports",
    tags=["Reports"],
)


# --------------------------------
# Monthly Report
# --------------------------------

@router.get(
    "/monthly",
    response_model=MonthlyReportResponse,
)
def get_monthly_report(
    month: int,
    year: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):

    return ReportService.get_monthly_report(
        db=db,
        user_id=current_user.id,
        month=month,
        year=year,
    )


# --------------------------------
# Yearly Report
# --------------------------------

@router.get(
    "/yearly",
    response_model=YearlyReportResponse,
)
def get_yearly_report(
    year: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):

    return ReportService.get_yearly_report(
        db=db,
        user_id=current_user.id,
        year=year,
    )


# --------------------------------
# Monthly PDF Export
# --------------------------------

@router.get(
    "/monthly/pdf",
)
def download_monthly_pdf(
    month: int,
    year: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):

    pdf_file = ReportService.generate_monthly_pdf(
        db=db,
        user_id=current_user.id,
        month=month,
        year=year,
    )

    return StreamingResponse(
        pdf_file,
        media_type="application/pdf",
        headers={
            "Content-Disposition":
            f"attachment; filename=monthly_report_{month}_{year}.pdf"
        },
    )


# --------------------------------
# Monthly Excel Export
# --------------------------------

@router.get(
    "/monthly/excel",
)
def download_monthly_excel(
    month: int,
    year: int,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):

    excel_file = ReportService.generate_monthly_excel(
        db=db,
        user_id=current_user.id,
        month=month,
        year=year,
    )

    return StreamingResponse(
        excel_file,
        media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        headers={
            "Content-Disposition":
            f"attachment; filename=monthly_report_{month}_{year}.xlsx"
        },
    )