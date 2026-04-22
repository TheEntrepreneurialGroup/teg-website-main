import { useIntl } from "react-intl";
import { useState } from "react";

interface SemesterData {
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
  subBullets?: string[];
  isInfinity?: boolean;
}

const semesterData: SemesterData[] = [
  {
    number: "1",
    title: "1. Semester",
    subtitle: "Grundlagen & Managementverständnis",
    bullets: [
      "Onboarding in deine Fachrolle innerhalb eines TEG Departments",
      "Coaching & Mentoring in deiner Department Aufgabe",
      "Eigeninitiativische KPI Erhöhung innerhalb TEG Initiative",
      "C-Level Workshop Schulung im Semester: z.B.",
    ],
    subBullets: [
      "Teamdynamik & Mitarbeiterführung durch ex VP-Finance Airbus Uli Beck",
      "Aus Krisenmanagement zu Chancenboom trotz Deutschlands Konjunktur: CEO Horbach",
      "Interne- und externe Kommunikation in Geschäftsleitung",
    ],
  },
  {
    number: "2",
    title: "2. Semester",
    subtitle: "Anwendung in realer Projektleitung",
    bullets: [
      "Leitung und vollständige Planung einer Fachkonferenz, zwei C-Level Workshops oder einem Management TEG Talk",
      "Du erlernst Kompetenzen zu: Ziel-Setzung, Teamleitung, Verkauf- & Vermarktungs-Strategien",
      "Bei erreichten KPIs: Projektleitung-Zertifikat",
    ],
  },
  {
    number: "3",
    title: "3. Semester",
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

/**
 * Desktop: Full-width 4-column layout.
 * Active card has gold left border + full content.
 * Inactive cards show large number + rotated vertical text.
 */
function DesktopLayout({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="w-full">
      {/* Card row */}
      <div className="w-full flex">
        {semesterData.map((data, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              onClick={() => onSelect(index)}
              className={`
                relative cursor-pointer transition-all duration-500 ease-out
                ${isActive ? "flex-[3]" : "flex-1"}
              `}
              style={{ minHeight: 280 }}
            >
              {/* Gold left border for active card */}
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-[1.5px] bg-accent-light z-10" />
              )}

              <div className="h-full flex flex-col">
                {isActive ? (
                  /* ─── ACTIVE CARD ─── */
                  <div className="h-full flex pl-6 pr-4 lg:pl-8 lg:pr-6 py-5 lg:py-6">
                    {/* Large ghost number */}
                    <div className="shrink-0 mr-3 lg:mr-4">
                      <span
                        className="font-serif italic font-bold text-accent-light/20 select-none"
                        style={{
                          fontSize: "clamp(4rem, 8vw, 7rem)",
                          lineHeight: 0.85,
                        }}
                      >
                        {data.number}
                      </span>
                    </div>

                    {/* Text content */}
                    <div className="flex flex-col flex-1 min-w-0">
                      <h4 className="text-primary font-semibold text-lg lg:text-xl leading-tight">
                        {data.title}
                      </h4>
                      <p className="text-muted-foreground text-sm lg:text-base mt-0.5 italic">
                        {data.subtitle}
                      </p>

                      <ul className="mt-4 space-y-2 flex-1">
                        {data.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-foreground text-sm lg:text-base leading-relaxed"
                          >
                            <span
                              className="mt-[0.5rem] shrink-0 rounded-full bg-accent-light"
                              style={{ width: 5, height: 5 }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                        {data.subBullets?.map((bullet, idx) => (
                          <li
                            key={`sub-${idx}`}
                            className="flex items-start gap-2 text-muted-foreground text-xs lg:text-sm leading-relaxed ml-4"
                          >
                            <span
                              className="mt-[0.45rem] shrink-0 rounded-full bg-accent-light/50"
                              style={{ width: 4, height: 4 }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  /* ─── INACTIVE CARD ─── */
                  <div className="h-full flex flex-col items-center justify-between py-5 lg:py-6 px-2">
                    {/* Large ghost number */}
                    <span
                      className="font-serif italic font-bold text-primary/10 select-none"
                      style={{
                        fontSize: "clamp(3rem, 5vw, 4.5rem)",
                        lineHeight: 0.9,
                      }}
                    >
                      {data.number}
                    </span>

                    {/* Rotated vertical text */}
                    <div
                      className="flex flex-col items-center gap-1 flex-1 justify-center"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        transform: "rotate(180deg)",
                      }}
                    >
                      <span className="text-primary font-semibold text-sm lg:text-base whitespace-nowrap">
                        {data.isInfinity
                          ? "Alumni"
                          : `${data.number}. Semester`}
                      </span>
                      <span className="text-muted-foreground text-xs lg:text-sm italic whitespace-nowrap">
                        {data.subtitle}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress bar — full width, segmented */}
      <div className="w-full flex mt-0">
        {semesterData.map((_, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              className={`
                h-[1.5px] transition-colors duration-300
                ${isActive ? "bg-accent-light" : "bg-secondary-dark"}
                ${index === activeIndex ? "flex-[3]" : "flex-1"}
              `}
              aria-label={`Schritt ${index + 1} anzeigen`}
            />
          );
        })}
      </div>
    </div>
  );
}

/**
 * Mobile: Static vertical timeline.
 * All content visible, no accordion.
 * Large gold numbers on left with connecting line.
 */
function MobileLayout() {
  return (
    <div className="flex flex-col w-full">
      {semesterData.map((data, index) => {
        const isLast = index === TOTAL - 1;

        return (
          <div key={index} className="flex">
            {/* Left column: number + connecting line */}
            <div
              className="flex flex-col items-center shrink-0"
              style={{ width: 48 }}
            >
              {/* Large number */}
              <span
                className="font-serif italic font-bold text-accent-light select-none"
                style={{ fontSize: "2.5rem", lineHeight: 1 }}
              >
                {data.number}
              </span>

              {/* Connecting line */}
              {!isLast && (
                <div
                  className="w-[1.5px] flex-1 bg-accent-light/40"
                  style={{ minHeight: 20 }}
                />
              )}
            </div>

            {/* Right column: content */}
            <div className="flex-1 pl-3 pb-6">
              <h4 className="text-primary font-semibold text-base leading-tight">
                {data.isInfinity ? "Alumni" : `${data.number}. Semester`}
              </h4>
              <p className="text-muted-foreground text-sm italic mt-0.5">
                {data.subtitle}
              </p>

              <ul className="mt-3 space-y-2">
                {data.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-foreground text-sm leading-relaxed"
                  >
                    <span
                      className="mt-[0.45rem] shrink-0 rounded-full bg-accent-light"
                      style={{ width: 5, height: 5 }}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
                {data.subBullets?.map((bullet, idx) => (
                  <li
                    key={`sub-${idx}`}
                    className="flex items-start gap-2 text-muted-foreground text-xs leading-relaxed ml-4"
                  >
                    <span
                      className="mt-[0.4rem] shrink-0 rounded-full bg-accent-light/50"
                      style={{ width: 4, height: 4 }}
                    />
                    <span>{bullet}</span>
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

export default function MemberProcessSection() {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white py-8 md:py-12 lg:py-16">
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-6 md:mb-8 lg:mb-10">
        <h3 className="text-2xl md:text-3xl font-bold text-primary">
          {intl.formatMessage({ id: "student.memberProcess.title" })}
        </h3>
      </div>

      {/* Desktop layout */}
      <div className="hidden md:block w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <DesktopLayout activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden w-full px-4 sm:px-6">
        <MobileLayout />
      </div>
    </section>
  );
}
