from __future__ import annotations

import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer


PRIMARY = colors.HexColor("#0F2B57")
PRIMARY_DARK = colors.HexColor("#091C3A")
ACCENT = colors.HexColor("#B7860B")
TEXT = colors.HexColor("#243447")
MUTED = colors.HexColor("#5E6B7A")
DISPLAY_TITLE = "Bestandsaufnahme des Brandings der aktuell deployten TEG-Website"
DOCUMENT_TITLE = "Branding-Bestandsaufnahme der aktuell deployten TEG-Website"


def build_styles():
    base = getSampleStyleSheet()

    return {
        "title": ParagraphStyle(
            "TitleCustom",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=20,
            leading=25,
            textColor=PRIMARY_DARK,
            alignment=TA_CENTER,
            spaceAfter=6 * mm,
        ),
        "heading": ParagraphStyle(
            "HeadingCustom",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=15,
            leading=19,
            textColor=PRIMARY,
            spaceBefore=6 * mm,
            spaceAfter=2.5 * mm,
        ),
        "body": ParagraphStyle(
            "BodyCustom",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=TEXT,
            spaceAfter=2.5 * mm,
        ),
        "bullet": ParagraphStyle(
            "BulletCustom",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=10.5,
            leading=15,
            textColor=TEXT,
            leftIndent=5 * mm,
            firstLineIndent=0,
            bulletIndent=0,
            spaceAfter=1.5 * mm,
        ),
    }


def escape_text(text: str) -> str:
    return (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )


def add_page_decoration(canvas, doc):
    canvas.saveState()
    width, height = A4

    canvas.setStrokeColor(colors.HexColor("#D9E2F0"))
    canvas.setLineWidth(0.6)
    canvas.line(doc.leftMargin, height - 16 * mm, width - doc.rightMargin, height - 16 * mm)

    canvas.setFillColor(MUTED)
    canvas.setFont("Helvetica", 8.5)
    canvas.drawString(doc.leftMargin, 10 * mm, "Aktuelle Branding-Bestandsaufnahme")
    canvas.drawRightString(width - doc.rightMargin, 10 * mm, f"Seite {canvas.getPageNumber()}")
    canvas.restoreState()


def markdown_to_story(markdown_text: str):
    styles = build_styles()
    story = []
    title_rendered = False

    for raw_line in markdown_text.splitlines():
        line = raw_line.strip()

        if not line:
            story.append(Spacer(1, 1.5 * mm))
            continue

        if line.startswith("# "):
            if title_rendered:
                continue

            story.append(Paragraph(escape_text(DISPLAY_TITLE), styles["title"]))
            story.append(
                HRFlowable(
                    width="28%",
                    thickness=2,
                    color=ACCENT,
                    spaceBefore=0,
                    spaceAfter=5 * mm,
                    hAlign="CENTER",
                )
            )
            title_rendered = True
            continue

        if line.startswith("## "):
            story.append(Paragraph(escape_text(line[3:].strip()), styles["heading"]))
            story.append(
                HRFlowable(
                    width="100%",
                    thickness=0.8,
                    color=colors.HexColor("#D9E2F0"),
                    spaceBefore=0,
                    spaceAfter=2 * mm,
                    hAlign="LEFT",
                )
            )
            continue

        if line.startswith("- "):
            story.append(
                Paragraph(
                    escape_text(line[2:].strip()),
                    styles["bullet"],
                    bulletText="•",
                )
            )
            continue

        story.append(Paragraph(escape_text(line), styles["body"]))

    return story


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: python scripts/export_branding_report_pdf.py <input.md> <output.pdf>")
        return 1

    input_path = Path(sys.argv[1])
    output_path = Path(sys.argv[2])

    if not input_path.exists():
        print(f"Input file not found: {input_path}")
        return 1

    output_path.parent.mkdir(parents=True, exist_ok=True)
    markdown_text = input_path.read_text(encoding="utf-8")

    document = SimpleDocTemplate(
        str(output_path),
        pagesize=A4,
        leftMargin=22 * mm,
        rightMargin=22 * mm,
        topMargin=24 * mm,
        bottomMargin=18 * mm,
        title=DOCUMENT_TITLE,
        author="GitHub Copilot",
    )
    story = markdown_to_story(markdown_text)
    document.build(story, onFirstPage=add_page_decoration, onLaterPages=add_page_decoration)

    print(f"Created PDF: {output_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())