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
      "Kompetenzen: Ziel-Setzung, Teamleitung, Verkauf- & Vermarktungs-Strategien",
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
    subtitle: "Nach erfolgreicher Absolvierung",
    bullets: [
      "1:1 Mentoring mit TEG-Alumnis",
      "Professional-Zertifikat",
      "Placement für eine Führungskarriere",
    ],
    isInfinity: true,
  },
];

// On desktop, the 4 cards sit in a horizontal stack.
// Active card is the leftmost and largest. Others peek from behind, offset to the right.
// STACK_OFFSETS[i] = how much to translate the card at visual position i (0=active front, 1=next, etc.)
const PEEK_GAP = 52; // px gap between each peeking card edge

function DesktopStackedCards({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const total = semesterData.length;

  // Build an ordered list: active card first, then the rest in sequence
  const orderedIndexes: number[] = [];
  for (let i = 0; i < total; i++) {
    orderedIndexes.push((activeIndex + i) % total);
  }

  // Container height: active card drives height, we reserve fixed height
  return (
    <div className="relative w-full" style={{ height: 420 }}>
      {orderedIndexes.map((dataIndex, stackPos) => {
        const data = semesterData[dataIndex];
        const isActive = stackPos === 0;

        // The active card: full width minus right space for peeking cards
        // Each subsequent card peeks by PEEK_GAP px from the right edge of the previous
        const peekingCount = total - 1; // 3 cards peeking
        const activeWidth = `calc(100% - ${peekingCount * PEEK_GAP + 16}px)`;

        // Left offset: each peeking card is PEEK_GAP px to the right of where it would be if it were active
        const peekingOffset = isActive
          ? 0
          : `calc(${activeWidth} + ${(stackPos - 1) * PEEK_GAP}px)`;

        // Z-index: active is on top, then decreasing
        const zIndex = total - stackPos;

        return (
          <div
            key={dataIndex}
            onClick={() => !isActive && onSelect(dataIndex)}
            style={{
              position: "absolute",
              top: 0,
              left: isActive ? 0 : (peekingOffset as string),
              width: isActive ? activeWidth : PEEK_GAP + 16 + "px",
              height: "100%",
              zIndex,
              transition:
                "left 0.45s cubic-bezier(0.4,0,0.2,1), width 0.45s cubic-bezier(0.4,0,0.2,1)",
              cursor: isActive ? "default" : "pointer",
            }}
          >
            <div
              className={`
                h-full flex flex-col relative overflow-hidden
                bg-white
                ${
                  isActive
                    ? "shadow-xl border border-primary/10"
                    : "shadow-md border border-primary/8 hover:border-primary/20"
                }
              `}
              style={{ borderRadius: 2 }}
            >
              {/* Active card: full content */}
              {isActive ? (
                <>
                  {/* Top accent line */}
                  <div className="h-0.5 w-full bg-accent-light" />

                  <div className="flex flex-1 overflow-hidden">
                    {/* Left: large number column */}
                    <div className="flex items-start justify-center pt-8 pl-6 pr-4 w-28 shrink-0">
                      <span
                        className={`
                          font-sans font-bold leading-none select-none text-primary/8
                          ${data.isInfinity ? "text-[9rem]" : "text-[9rem]"}
                        `}
                        style={{
                          fontSize: "9rem",
                          color: "hsl(217 71% 20% / 0.07)",
                        }}
                      >
                        {data.number}
                      </span>
                    </div>

                    {/* Right: content */}
                    <div className="flex flex-col justify-start py-8 pr-8 pl-2 flex-1 min-w-0">
                      {/* Step label */}
                      <p className="text-xs font-semibold tracking-widest uppercase text-accent-light mb-2">
                        {data.isInfinity ? "Alumni" : `Schritt ${data.number}`}
                      </p>
                      <h4 className="text-primary font-bold text-2xl leading-tight mb-1">
                        {data.title}
                      </h4>
                      <p className="text-muted-foreground text-sm font-medium mb-5">
                        {data.subtitle}
                      </p>

                      <ul className="space-y-3 flex-1">
                        {data.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-foreground text-sm leading-relaxed"
                          >
                            <span
                              className="mt-1.5 shrink-0 rounded-full"
                              style={{
                                width: 6,
                                height: 6,
                                backgroundColor: "#DAA520",
                              }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Bottom-right golden dot indicator cluster */}
                      <div className="flex items-center justify-end gap-1.5 mt-5 pt-4 border-t border-primary/6">
                        {semesterData.map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelect(dotIdx);
                            }}
                            className="cursor-pointer transition-all duration-300"
                            style={{
                              display: "inline-block",
                              width: dotIdx === activeIndex ? 20 : 6,
                              height: 6,
                              borderRadius: 3,
                              backgroundColor:
                                dotIdx === activeIndex
                                  ? "#DAA520"
                                  : "hsl(217 71% 20% / 0.15)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Peeking card: rotated title + number */
                <div className="h-full flex flex-col items-center justify-between py-6 px-2 overflow-hidden">
                  {/* Small number at top */}
                  <span
                    className="font-sans font-bold text-primary/20 select-none"
                    style={{ fontSize: "2.5rem", lineHeight: 1 }}
                  >
                    {data.number}
                  </span>

                  {/* Rotated label */}
                  <div
                    className="flex-1 flex items-center justify-center"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                    }}
                  >
                    <span className="text-xs font-semibold text-primary/40 tracking-wide whitespace-nowrap">
                      {data.title}
                    </span>
                  </div>

                  {/* Gold dot at bottom */}
                  <span
                    className="rounded-full"
                    style={{
                      width: 6,
                      height: 6,
                      backgroundColor: "#DAA520",
                      opacity: 0.5,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MobileTimeline({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex flex-col w-full gap-0">
      {semesterData.map((data, index) => {
        const isActive = activeIndex === index;
        const isLast = index === semesterData.length - 1;

        return (
          <div key={index} className="flex gap-4">
            {/* Timeline column */}
            <div
              className="flex flex-col items-center"
              style={{ width: 40, flexShrink: 0 }}
            >
              {/* Number node */}
              <button
                onClick={() => onSelect(index)}
                className={`
                  w-10 h-10 flex items-center justify-center shrink-0 transition-all duration-300
                  font-bold font-sans border
                  ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-primary/40 border-primary/15 hover:border-primary/40"
                  }
                `}
                style={{
                  borderRadius: 2,
                  fontSize: data.isInfinity ? "1.1rem" : "1rem",
                }}
                aria-label={`${data.title} auswählen`}
              >
                {data.number}
              </button>
              {/* Connector line */}
              {!isLast && (
                <div
                  className="w-px flex-1 transition-all duration-300"
                  style={{
                    minHeight: 24,
                    backgroundColor: isActive
                      ? "#DAA520"
                      : "hsl(217 71% 20% / 0.12)",
                  }}
                />
              )}
            </div>

            {/* Card content */}
            <div
              className={`
                flex-1 mb-4 transition-all duration-300 cursor-pointer
                border bg-white
                ${
                  isActive
                    ? "border-primary/20 shadow-lg"
                    : "border-primary/8 shadow-sm hover:border-primary/20"
                }
              `}
              style={{ borderRadius: 2 }}
              onClick={() => onSelect(index)}
            >
              {/* Gold accent top bar only on active */}
              {isActive && <div className="h-0.5 w-full bg-accent-light" />}

              <div className="p-4">
                <p className="text-xs font-semibold tracking-widest uppercase text-accent-light mb-1">
                  {data.isInfinity ? "Alumni" : `Schritt ${data.number}`}
                </p>
                <h4 className="text-primary font-bold text-base leading-tight">
                  {data.title}
                </h4>
                <p className="text-muted-foreground text-xs mt-0.5">
                  {data.subtitle}
                </p>

                {/* Expanded bullets */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isActive ? 400 : 0,
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? 12 : 0,
                  }}
                >
                  <ul className="space-y-2.5">
                    {data.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-foreground text-sm leading-relaxed"
                      >
                        <span
                          className="mt-1.5 shrink-0 rounded-full"
                          style={{
                            width: 5,
                            height: 5,
                            backgroundColor: "#DAA520",
                          }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gold dot indicators bottom right */}
                  <div className="flex items-center justify-end gap-1.5 mt-4 pt-3 border-t border-primary/6">
                    {semesterData.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(dotIdx);
                        }}
                        className="cursor-pointer transition-all duration-300"
                        style={{
                          display: "inline-block",
                          width: dotIdx === index ? 18 : 5,
                          height: 5,
                          borderRadius: 3,
                          backgroundColor:
                            dotIdx === index
                              ? "#DAA520"
                              : "hsl(217 71% 20% / 0.15)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
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
    <section className="flex justify-center bg-white">
      <div className="flex flex-col items-start w-full max-w-7xl p-4 sm:p-8 md:p-14 lg:p-20 gap-6 md:gap-10">
        {/* Header */}
        <div className="w-full">
          <h3 className="text-3xl font-semibold text-primary">
            {intl.formatMessage({ id: "student.memberProcess.title" })}
          </h3>
          <p className="text-xl text-muted-foreground mt-2">
            Dein Weg zur Führungspersönlichkeit in 3 Semestern
          </p>
        </div>

        {/* Desktop stacked card layout */}
        <div className="hidden md:block w-full">
          <DesktopStackedCards
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>

        {/* Mobile timeline layout */}
        <div className="md:hidden w-full">
          <MobileTimeline activeIndex={activeIndex} onSelect={setActiveIndex} />
        </div>
      </div>
    </section>
  );
}
