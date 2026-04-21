import { useIntl } from "react-intl";
import { useState } from "react";

interface SemesterData {
  number: string;
  title: string;
  subtitle: string;
  bullets: string[];
  isInfinity?: boolean;
}

const GOLD = "#DAA520";
const BLUE = "hsl(217, 71%, 20%)";

const semesterData: SemesterData[] = [
  {
    number: "1",
    title: "1. Semester",
    subtitle: "Grundlagen & Managementverständnis",
    bullets: [
      "Onboarding in deine Fachrolle innerhalb eines TEG Departments",
      "Coaching & Mentoring in deiner Department Aufgabe",
      "Eigeninitiativische KPI Erhöhung innerhalb TEG Initiative",
      "C-Level Workshop Schulung im Semester: z.B. Teamdynamik & Mitarbeiterführung, Krisenmanagement, interne & externe Kommunikation",
    ],
  },
  {
    number: "2",
    title: "2. Semester",
    subtitle: "Anwendung in realen Projektleitung",
    bullets: [
      "Zugang zu Fachkonferenzen, zwei C-Level Workshops oder einem Management TEG Talk",
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
    title: "TEG-Alumni",
    subtitle: "Nach erfolgreicher Absolvierung des 3. Semesters",
    bullets: [
      "1:1 Mentoring mit TEG-Alumnis",
      "Professional-Zertifikat",
      "Placement für eine Führungskarriere",
    ],
    isInfinity: true,
  },
];

// ─── Desktop stacked layout ──────────────────────────────────────────────────
// Active: 2/3 width  |  Left inactive: 1/6  |  Right inactive: 1/6
// Cards are absolutely positioned and transition via `left` + `width`.

function DesktopStack({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const total = semesterData.length;

  // Build display order: [left-inactive(s)... | active | right-inactive(s)...]
  // We always show: one slot on the left, active in the middle, two slots on the right
  // For 4 cards in a cycle we map positions relative to activeIndex:
  // position -1 (left):  (activeIndex - 1 + total) % total
  // position  0 (active): activeIndex
  // position +1 (right1): (activeIndex + 1) % total
  // position +2 (right2): (activeIndex + 2) % total

  const slots = [
    (activeIndex - 1 + total) % total, // left 1/6
    activeIndex, // active 2/3  (index 1)
    (activeIndex + 1) % total, // right 1/6
    (activeIndex + 2) % total, // far right 1/6
  ];

  // left offsets as fractions of container width (using calc strings)
  // slot 0 → 0%
  // slot 1 → 1/6
  // slot 2 → 1/6 + 2/3 = 5/6
  // slot 3 → hidden / overflow-hidden clips it
  const slotLeft = [
    "0%",
    "calc(100% / 6)",
    "calc(100% / 6 + 100% * 2 / 3)",
    "100%",
  ];
  const slotWidth = [
    "calc(100% / 6)",
    "calc(100% * 2 / 3)",
    "calc(100% / 6)",
    "0%",
  ];

  return (
    <div className="relative w-full overflow-hidden" style={{ height: 480 }}>
      {slots.map((dataIndex, slotPos) => {
        const data = semesterData[dataIndex];
        const isActive = slotPos === 1;
        const isLeft = slotPos === 0;
        const isHidden = slotPos === 3;

        return (
          <div
            key={dataIndex}
            onClick={() => !isActive && onSelect(dataIndex)}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: slotLeft[slotPos],
              width: slotWidth[slotPos],
              transition:
                "left 0.5s cubic-bezier(0.4, 0, 0.2, 1), width 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease",
              cursor: isActive ? "default" : "pointer",
              opacity: isHidden ? 0 : 1,
              zIndex: isActive ? 2 : 1,
              overflow: "hidden",
            }}
          >
            {isActive ? (
              /* ── Active panel: open, no box ── */
              <div className="h-full flex flex-col justify-between py-10 px-10 xl:px-16">
                {/* Giant number */}
                <div className="flex items-start gap-6">
                  <span
                    className="font-sans font-bold leading-none select-none"
                    style={{
                      fontSize: "clamp(7rem, 14vw, 12rem)",
                      color: GOLD,
                      lineHeight: 0.85,
                    }}
                  >
                    {data.number}
                    {!data.isInfinity && (
                      <span
                        style={{
                          fontSize: "0.35em",
                          verticalAlign: "super",
                          color: GOLD,
                        }}
                      >
                        .
                      </span>
                    )}
                  </span>

                  {/* Title alongside number */}
                  <div className="pt-4 flex flex-col justify-center">
                    <p
                      className="text-xs font-semibold tracking-[0.2em] uppercase mb-1"
                      style={{ color: GOLD }}
                    >
                      {data.isInfinity ? "Alumni" : `Schritt ${data.number}`}
                    </p>
                    <h4
                      className="font-bold text-xl xl:text-2xl leading-tight"
                      style={{ color: BLUE }}
                    >
                      {data.subtitle}
                    </h4>
                  </div>
                </div>

                {/* Thin gold rule */}
                <div
                  className="my-6"
                  style={{ height: 1, backgroundColor: GOLD, opacity: 0.25 }}
                />

                {/* Bullets */}
                <ul className="flex flex-col gap-3 flex-1">
                  {data.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                      style={{ color: BLUE, opacity: 0.8 }}
                    >
                      <span
                        className="shrink-0 mt-1.5"
                        style={{
                          width: 5,
                          height: 5,
                          backgroundColor: GOLD,
                          display: "inline-block",
                        }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Square step indicators — bottom right */}
                <div className="flex items-center justify-end gap-1.5 mt-8">
                  {semesterData.map((_, dotIdx) => {
                    const isCurrentDot = dotIdx === activeIndex;
                    return (
                      <button
                        key={dotIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(dotIdx);
                        }}
                        aria-label={`Gehe zu ${semesterData[dotIdx].title}`}
                        style={{
                          width: isCurrentDot ? 24 : 8,
                          height: 8,
                          backgroundColor: isCurrentDot
                            ? GOLD
                            : `hsl(217, 71%, 20%, 0.18)`,
                          borderRadius: 0,
                          border: "none",
                          cursor: "pointer",
                          transition:
                            "width 0.35s ease, background-color 0.35s ease",
                          padding: 0,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              /* ── Inactive panel: minimal, full-height click target ── */
              <div
                className="h-full flex flex-col items-center justify-center gap-4 select-none"
                style={{
                  borderLeft: isLeft
                    ? "none"
                    : `1px solid hsl(217, 71%, 20%, 0.08)`,
                  borderRight: isLeft
                    ? `1px solid hsl(217, 71%, 20%, 0.08)`
                    : "none",
                }}
              >
                {/* Faint giant number */}
                <span
                  className="font-sans font-bold leading-none"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    color: `hsl(217, 71%, 20%, 0.12)`,
                    lineHeight: 1,
                  }}
                >
                  {data.number}
                  {!data.isInfinity && (
                    <span style={{ fontSize: "0.4em", verticalAlign: "super" }}>
                      .
                    </span>
                  )}
                </span>

                {/* Rotated label */}
                <p
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                    color: `hsl(217, 71%, 20%, 0.3)`,
                    letterSpacing: "0.15em",
                  }}
                >
                  {data.subtitle}
                </p>

                {/* Gold square accent dot */}
                <span
                  style={{
                    width: 6,
                    height: 6,
                    backgroundColor: GOLD,
                    opacity: 0.45,
                    display: "inline-block",
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Mobile vertical layout ───────────────────────────────────────────────────
function MobileTimeline({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex flex-col w-full">
      {semesterData.map((data, index) => {
        const isActive = activeIndex === index;
        const isLast = index === semesterData.length - 1;

        return (
          <div key={index} className="flex gap-5">
            {/* Left: number + connector */}
            <div
              className="flex flex-col items-center"
              style={{ width: 48, flexShrink: 0 }}
            >
              <button
                onClick={() => onSelect(index)}
                aria-label={`${data.title} auswählen`}
                className="font-bold font-sans transition-all duration-300 shrink-0 flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  fontSize: data.isInfinity ? "1.4rem" : "1.6rem",
                  lineHeight: 1,
                  color: isActive ? GOLD : `hsl(217, 71%, 20%, 0.22)`,
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                {data.number}
              </button>
              {!isLast && (
                <div
                  style={{
                    width: 1,
                    flex: 1,
                    minHeight: 24,
                    backgroundColor: isActive
                      ? GOLD
                      : `hsl(217, 71%, 20%, 0.1)`,
                    transition: "background-color 0.4s ease",
                  }}
                />
              )}
            </div>

            {/* Right: content */}
            <div
              className="flex-1 pb-6 cursor-pointer"
              onClick={() => onSelect(index)}
            >
              <div className="pt-2 pb-1">
                <p
                  className="text-xs font-semibold tracking-[0.18em] uppercase mb-1"
                  style={{
                    color: isActive ? GOLD : `hsl(217, 71%, 20%, 0.35)`,
                  }}
                >
                  {data.isInfinity ? "Alumni" : `Schritt ${data.number}`}
                </p>
                <h4
                  className="font-bold text-base leading-tight"
                  style={{ color: BLUE }}
                >
                  {data.subtitle}
                </h4>
              </div>

              {/* Expandable bullets */}
              <div
                style={{
                  maxHeight: isActive ? 400 : 0,
                  opacity: isActive ? 1 : 0,
                  overflow: "hidden",
                  transition:
                    "max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
                  marginTop: isActive ? 12 : 0,
                }}
              >
                <ul className="flex flex-col gap-2.5">
                  {data.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm leading-relaxed"
                      style={{ color: BLUE, opacity: 0.75 }}
                    >
                      <span
                        className="shrink-0 mt-1.5"
                        style={{
                          width: 5,
                          height: 5,
                          backgroundColor: GOLD,
                          display: "inline-block",
                        }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Square step indicators — bottom right */}
                <div
                  className="flex items-center justify-end gap-1.5 mt-5 pt-4"
                  style={{ borderTop: `1px solid hsl(217, 71%, 20%, 0.08)` }}
                >
                  {semesterData.map((_, dotIdx) => {
                    const isCurrentDot = dotIdx === index;
                    return (
                      <button
                        key={dotIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(dotIdx);
                        }}
                        aria-label={`Gehe zu ${semesterData[dotIdx].title}`}
                        style={{
                          width: isCurrentDot ? 20 : 7,
                          height: 7,
                          backgroundColor: isCurrentDot
                            ? GOLD
                            : `hsl(217, 71%, 20%, 0.15)`,
                          borderRadius: 0,
                          border: "none",
                          cursor: "pointer",
                          transition:
                            "width 0.35s ease, background-color 0.35s ease",
                          padding: 0,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function MemberProcessSection() {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full bg-white">
      {/* Header — contained */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20 pt-14 md:pt-20 pb-8 md:pb-10">
        <h3 className="text-3xl font-semibold text-primary">
          {intl.formatMessage({ id: "student.memberProcess.title" })}
        </h3>
        <p className="text-xl text-muted-foreground mt-2">
          Dein Weg zur Führungspersönlichkeit in 3 Semestern
        </p>
      </div>

      {/* Desktop: full-bleed stacked layout */}
      <div className="hidden md:block w-full">
        <DesktopStack activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>

      {/* Mobile: vertical timeline, contained */}
      <div className="md:hidden w-full px-4 sm:px-8 pb-14">
        <MobileTimeline activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>

      {/* Bottom padding on desktop */}
      <div className="hidden md:block pb-16" />
    </section>
  );
}
