from io import BytesIO

from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer


class PDFGenerator:

    @staticmethod
    def generate_monthly_report(report: dict):

        buffer = BytesIO()

        doc = SimpleDocTemplate(buffer)

        styles = getSampleStyleSheet()

        elements = []

        elements.append(
            Paragraph("<b>ExpenseFlow Monthly Report</b>", styles["Title"])
        )

        elements.append(Spacer(1, 20))

        elements.append(
            Paragraph(
                f"Month: {report['month']}",
                styles["Normal"]
            )
        )

        elements.append(
            Paragraph(
                f"Year: {report['year']}",
                styles["Normal"]
            )
        )

        elements.append(
            Paragraph(
                f"Total Expense: ₹{report['total_expense']}",
                styles["Normal"]
            )
        )

        elements.append(
            Paragraph(
                f"Transactions: {report['total_transactions']}",
                styles["Normal"]
            )
        )

        elements.append(Spacer(1, 20))

        elements.append(
            Paragraph(
                "<b>Category Summary</b>",
                styles["Heading2"]
            )
        )

        for item in report["categories"]:

            elements.append(
                Paragraph(
                    f"{item['category']} : ₹{item['total']}",
                    styles["Normal"]
                )
            )

        doc.build(elements)

        buffer.seek(0)

        return buffer