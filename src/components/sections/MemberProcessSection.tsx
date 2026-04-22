import { useIntl } from "react-intl";
import { useState } from "react";

interface SemesterData {
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
  isInfinity?: boolean;
}

const semesterData: SemesterData[] = [
  {
    number: "1",
    title: "Semester",
    subtitle: "Grundlagen & Managementverständnis",
    bullets: [
      "Onboarding in deine Fachrolle innerhalb eines TEG Departments",
      "Coaching & Mentoring in deiner Department Aufgabe",
      "Eigeninitiativische KPI Erhöhung innerhalb TEG Initiative",
      "C-Level Workshop Schulung im Semester",
    ],
  },
  {
    number: "2",
    title: "Semester",
    subtitle: "Anwendung in realer Projektleitung",
    bullets: [
      "Leitung und vollständige Planung einer Fachkonferenz, zwei C-Level Workshops oder einem Management TEG Talk",
      "Du erlernst Kompetenzen zu: Ziel-Setzung, Teamleitung, Verkauf- & Vermarktungs-Strategien",
      "Bei erreichten KPIs: Projektleitung-Zertifikat",
    ],
  },
  {
    number: "3",
    title: "Semester",
    subtitle: "Eigeninitiative",
    bullets: [
      "Leitung eines TEG Departments",
      "Exklusive Praktika und Werkstudenten-Jobs",
      "Coach Zertifikat",
    ],
  },
  {
    number: "∞",
    title: "Alumni",
    subtitle: "Nach 3 erfolgreichen Semestern",
    bullets: [
      "1:1 Mentoring mit TEG-Alumnis",
      "Professional-Zertifikat",
      "Placement für eine Führungskarriere",
    ],
    isInfinity: true,
  },
];

const TOTAL = semesterData.length;

// ─── DESKTOP ──────────────────────────────────────────────────────────────────

function DesktopLayout({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="w-full flex flex-col">
      {/* Card row */}
      <div className="w-full flex" style={{ minHeight: 300 }}>
        {semesterData.map((data, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => onSelect(index)}
              className={`
                relative cursor-pointer transition-all duration-500 ease-in-out overflow-hidden
                ${isActive ? "flex-[3]" : "flex-1"}
                ${index > 0 ? "border-l border-secondary-dark/30" : ""}
              `}
            >
              {/* Gold left accent line — active only */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-accent-light z-10" />
              )}

              {isActive ? (
                // ── ACTIVE CARD ──
                <div className="h-full flex flex-col pl-6 lg:pl-8 pr-4 lg:pr-6 pt-5 lg:pt-6 pb-5 lg:pb-6">
                  {/* Number + heading row */}
                  <div className="flex items-baseline gap-3 lg:gap-4 mb-1">
                    <span
                      className="font-bold text-accent-light select-none shrink-0 leading-none"
                      style={{ fontSize: "clamp(3.5rem, 6vw, 5.5rem)" }}
                    >
                      {data.number}
                    </span>
                    <div className="flex flex-col">
                      <h4
                        className="font-semibold text-primary leading-tight"
                        style={{ fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
                      >
                        {data.isInfinity
                          ? "Alumni"
                          : `${data.number}. ${data.title}`}
                      </h4>
                      <p
                        className="text-muted-foreground font-normal"
                        style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)" }}
                      >
                        {data.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Bullet list */}
                  <ul className="mt-4 space-y-2 flex-1">
                    {data.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-foreground leading-relaxed"
                        style={{ fontSize: "clamp(0.8rem, 1.1vw, 0.95rem)" }}
                      >
                        <span
                          className="shrink-0 rounded-full bg-accent-light mt-[0.45em]"
                          style={{ width: 5, height: 5 }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                // ── INACTIVE CARD ──
                <div className="h-full flex flex-col items-center pt-5 lg:pt-6 pb-5 lg:pb-6 px-1">
                  {/* Ghost number — top */}
                  <span
                    className="font-bold text-primary/[0.08] select-none leading-none"
                    style={{ fontSize: "clamp(3rem, 4.5vw, 4.5rem)" }}
                  >
                    {data.number}
                  </span>

                  {/* Spacer pushes text to bottom */}
                  <div className="flex-1" />

                  {/* Rotated vertical text — bottom, reads bottom-to-top */}
                  <div
                    className="flex flex-col items-start gap-[2px]"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      maxHeight: 160,
                    }}
                  >
                    <span
                      className="font-semibold text-primary whitespace-nowrap leading-tight"
                      style={{ fontSize: "clamp(0.7rem, 1vw, 0.875rem)" }}
                    >
                      {data.isInfinity ? "Alumni" : `${data.number}. Semester`}
                    </span>
                    <span
                      className="text-muted-foreground font-normal whitespace-nowrap"
                      style={{ fontSize: "clamp(0.65rem, 0.9vw, 0.8rem)" }}
                    >
                      {data.subtitle}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Full-width segmented progress bar */}
      <div className="w-full flex">
        {semesterData.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              aria-label={`Schritt ${index + 1} anzeigen`}
              className={`
                h-[1.5px] transition-all duration-500 ease-in-out
                ${isActive ? "flex-[3] bg-accent-light" : "flex-1 bg-secondary-dark/40"}
              `}
            />
          );
        })}
      </div>
    </div>
  );
}

// ─── MOBILE ───────────────────────────────────────────────────────────────────

function MobileLayout() {
  return (
    <div className="flex flex-col w-full">
      {semesterData.map((data, index) => {
        const isLast = index === TOTAL - 1;

        return (
          <div key={index} className="flex">
            {/* Left: number + connecting line */}
            <div className="flex flex-col items-center shrink-0 w-10 sm:w-12">
              <span
                className="font-bold text-accent-light select-none leading-none"
                style={{ fontSize: "2.25rem" }}
              >
                {data.number}
              </span>
              {!isLast && (
                <div
                  className="flex-1 bg-accent-light/35"
                  style={{ width: 1.5, minHeight: 16 }}
                />
              )}
            </div>

            {/* Right: content */}
            <div className="flex-1 pl-3 sm:pl-4 pb-6 sm:pb-8">
              <h4 className="font-semibold text-primary text-sm sm:text-base leading-tight">
                {data.isInfinity ? "Alumni" : `${data.number}. ${data.title}`}
              </h4>
              <p className="text-muted-foreground font-normal text-xs sm:text-sm mt-0.5 leading-snug">
                {data.subtitle}
              </p>

              <ul className="mt-2 sm:mt-3 space-y-1.5 sm:space-y-2">
                {data.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-foreground text-xs sm:text-sm leading-relaxed"
                  >
                    <span
                      className="shrink-0 rounded-full bg-accent-light mt-[0.4em]"
                      style={{ width: 5, height: 5 }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── SECTION ──────────────────────────────────────────────────────────────────

export default function MemberProcessSection() {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16">
      {/* Section heading — constrained + padded like rest of page */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-primary">
          {intl.formatMessage({ id: "student.memberProcess.title" })}
        </h3>
      </div>

      {/* Desktop: full-width (no max-w cap, no horizontal padding — cards bleed edge-to-edge) */}
      <div className="hidden md:block w-full">
        <DesktopLayout activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>

      {/* Mobile: padded */}
      <div className="md:hidden w-full px-4 sm:px-6">
        <MobileLayout />
      </div>
    </section>
  );
}
