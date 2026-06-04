from reportlab.lib.colors import HexColor, black
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


OUT = "CV_Lennart_Klemm_EN.pdf"
W, H = letter
LEFT = 90
RIGHT = 90
WIDTH = W - LEFT - RIGHT
TEAL = HexColor("#15546d")

FONT = "/System/Library/Fonts/Supplemental/Arial.ttf"
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
pdfmetrics.registerFont(TTFont("Arial", FONT))
pdfmetrics.registerFont(TTFont("Arial-Bold", FONT_BOLD))


def wrap_text(text, font, size, max_width):
    words = text.split()
    lines = []
    current = ""
    for word in words:
        candidate = word if not current else current + " " + word
        if pdfmetrics.stringWidth(candidate, font, size) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


class CV:
    def __init__(self):
        self.c = canvas.Canvas(OUT, pagesize=letter)
        self.y = H - 82

    def text(self, text, x=LEFT, size=10, font="Arial", color=black):
        self.c.setFont(font, size)
        self.c.setFillColor(color)
        self.c.drawString(x, self.y, text)

    def para(self, text, x=LEFT, size=10, font="Arial", leading=13, max_width=WIDTH):
        for line in wrap_text(text, font, size, max_width):
            self.text(line, x=x, size=size, font=font)
            self.y -= leading

    def section(self, title):
        self.y -= 27
        self.text(title, size=15, font="Arial", color=TEAL)
        self.y -= 22

    def bullet(self, text, indent=0, size=10, leading=14):
        bx = LEFT + indent
        tx = bx + 18
        self.text(u"\u2022", x=bx, size=size, font="Arial")
        lines = wrap_text(text, "Arial", size, WIDTH - indent - 18)
        for i, line in enumerate(lines):
            self.text(line, x=tx, size=size, font="Arial")
            self.y -= leading if i < len(lines) - 1 else 0
        self.y -= leading

    def label(self, text):
        self.para(text, size=10, leading=12)

    def finish(self):
        self.c.save()


cv = CV()
cv.text("Lennart Paul Klemm", font="Arial-Bold")
cv.y -= 25
cv.text("Paul-Hindemith-Allee 6, 80939 Munich | lepakl97@gmail.com | +49 178 9125663")

cv.section("Education")
cv.label("08/2017 - 06/2025: Angergymnasium Jena")
cv.y -= 6
cv.bullet("Abitur, final grade: 1.2")
cv.bullet("Advanced courses in mathematics and computer science with very good grades")
cv.bullet('Seminar paper: "AI Goes to School" - didactic preparation of the topic of AI for students, incl. statistical survey of teacher and student knowledge')
cv.y -= 6
cv.label("Since 10/2025: B.Sc. Computer Science at Technical University of Munich, GPA: 1.7")

cv.section("Practical Experience")
cv.label("06/2022 - 07/2022: Internship at Zollsoft GmbH, Jena")
cv.y -= 6
cv.bullet("Insights into various business areas, focus: software development and product management")
cv.label("Since 02/2026: Campus Ambassador at JetBrains GmbH, Munich")
cv.y -= 4
cv.bullet("Event organization for students")
cv.label("8/2026-10/2026 (confirmed): Software Development Internship at SAP")

cv.section("Competitions & Awards")
cv.bullet("1st prize (round 1) & 2nd prize (round 2) - German Youth Computer Science Competition 2022")
cv.bullet("1st prize - State round of the Mathematics Olympiad")

cv.section("Engagement")
cv.bullet("TEG e.V. (The Entrepreneurial Group)")
cv.bullet("Team lead of the website team with 3 members", indent=18)
cv.bullet("Organization and execution of workshops and conferences", indent=18)

cv.section("Skills")
cv.label("Languages")
cv.y -= 12
cv.bullet("German (native), English (C1), French (B2), Spanish (A1)")
cv.y -= 4
cv.label("IT Skills")
cv.y -= 12
cv.bullet("Programming languages: Java, Python, JavaScript, OCaml")
cv.bullet("Tools & technologies: HTML/CSS/PHP, Excel, PowerPoint, prompt engineering")

cv.finish()
print(OUT)
