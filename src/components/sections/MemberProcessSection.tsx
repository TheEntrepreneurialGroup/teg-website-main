import { useIntl } from "react-intl";
import { useState, useRef, useLayoutEffect } from "react";

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

const TOTAL = semesterData.length;

// Peek width for a non-active card (the slim sliver shown left/right)
const PEEK_PX = 52;

/**
 * Compute the CSS `left` value (as a string) for each card given the active index.
 *
 * Layout rule (linear, not circular):
 *   - Only cards [activeIndex - 1 ... activeIndex + 1] are visible.
 *   - Card to the left of active: positioned off-screen left so its right edge is flush at x=0
 *     (it will peek from the left at PEEK_PX)
 *   - Active card: fills from PEEK_PX (if left card exists) to container end minus PEEK_PX (if right card exists)
 *   - Card to the right of active: positioned just after the active card's right edge
 *   - All other cards: hidden behind the stack at their inactive position (off-screen)
 *
 * We return a map of dataIndex -> { left, width, zIndex, visible }
 */
function computePositions(
  activeIndex: number,
): Record<
  number,
  {
    left: string;
    width: string;
    zIndex: number;
    role: "active" | "left" | "right" | "hidden";
  }
> {
  const hasLeft = activeIndex > 0;
  const hasRight = activeIndex < TOTAL - 1;

  const leftPad = hasLeft ? PEEK_PX : 0;
  const rightPad = hasRight ? PEEK_PX : 0;
  const activeWidth = `calc(100% - ${leftPad + rightPad}px)`;
  const activeLeft = `${leftPad}px`;

  const positions: Record<
    number,
    {
      left: string;
      width: string;
      zIndex: number;
      role: "active" | "left" | "right" | "hidden";
    }
  > = {};

  for (let i = 0; i < TOTAL; i++) {
    if (i === activeIndex) {
      positions[i] = {
        left: activeLeft,
        width: activeWidth,
        zIndex: 30,
        role: "active",
      };
    } else if (i === activeIndex - 1) {
      // Left peeking card: its right edge is at x = PEEK_PX, so left = PEEK_PX - PEEK_PX = 0 but it clips
      // We place the full card so only PEEK_PX of it is visible on the left
      positions[i] = {
        left: "0px",
        width: `calc(100% - ${rightPad}px)`,
        zIndex: 20,
        role: "left",
      };
    } else if (i === activeIndex + 1) {
      // Right peeking card: starts at active card's right edge = leftPad + activeWidth = 100% - rightPad
      positions[i] = {
        left: `calc(100% - ${PEEK_PX}px)`,
        width: `calc(100% - ${leftPad}px)`,
        zIndex: 20,
        role: "right",
      };
    } else if (i < activeIndex - 1) {
      // Off-screen left – parked behind the left peek
      positions[i] = {
        left: `-100%`,
        width: `calc(100% - ${rightPad}px)`,
        zIndex: 10,
        role: "hidden",
      };
    } else {
      // Off-screen right – parked behind the right peek
      positions[i] = {
        left: `100%`,
        width: `calc(100% - ${leftPad}px)`,
        zIndex: 10,
        role: "hidden",
      };
    }
  }

  return positions;
}

function DesktopStackedCards({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const positions = computePositions(activeIndex);

  // Card height: compact — roughly 280px
  const CARD_HEIGHT = 280;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: CARD_HEIGHT }}
    >
      {semesterData.map((data, dataIndex) => {
        const pos = positions[dataIndex];
        const isActive = pos.role === "active";
        const isLeft = pos.role === "left";
        const isRight = pos.role === "right";
        const isVisible = isActive || isLeft || isRight;

        return (
          <div
            key={dataIndex}
            style={{
              position: "absolute",
              top: 0,
              left: pos.left,
              width: pos.width,
              height: CARD_HEIGHT,
              zIndex: pos.zIndex,
              transition:
                "left 0.45s cubic-bezier(0.4,0,0.2,1), width 0.45s cubic-bezier(0.4,0,0.2,1)",
              cursor: isActive ? "default" : "pointer",
              pointerEvents: isVisible ? "auto" : "none",
            }}
            onClick={() => {
              if (isLeft) onSelect(dataIndex);
              if (isRight) onSelect(dataIndex);
            }}
          >
            {/* Card shell */}
            <div
              className={`
                h-full flex flex-col bg-white overflow-hidden
                ${isActive ? "shadow-lg border border-primary/10" : "shadow border border-primary/[0.06]"}
              `}
              style={{ borderRadius: 2 }}
            >
              {/* Gold top accent — only active */}
              {isActive && (
                <div className="h-[1.5px] w-full bg-accent-light shrink-0" />
              )}

              {isActive ? (
                /* ── ACTIVE CARD CONTENT ── */
                <div className="flex flex-1 min-h-0 overflow-hidden">
                  {/* Large ghost number */}
                  <div
                    className="flex items-start justify-center shrink-0 pt-6 pl-5 pr-3"
                    style={{ width: 110 }}
                  >
                    {/* Number + bottom-right dot */}
                    <div className="relative leading-none select-none">
                      <span
                        className="font-sans font-bold block"
                        style={{
                          fontSize: "8rem",
                          lineHeight: 1,
                          color: "hsl(217 71% 20% / 0.06)",
                        }}
                      >
                        {data.number}
                      </span>
                      {/* dot positioned at bottom-right of the numeral */}
                      <span
                        className="absolute rounded-full"
                        style={{
                          width: 7,
                          height: 7,
                          backgroundColor: "#DAA520",
                          opacity: 0.55,
                          bottom: 2,
                          right: -2,
                        }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between py-6 pr-8 pl-2 flex-1 min-w-0">
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-light mb-1.5">
                        {data.isInfinity ? "Alumni" : `Schritt ${data.number}`}
                      </p>
                      <h4 className="text-primary font-bold text-xl leading-tight">
                        {data.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-0.5 mb-4">
                        {data.subtitle}
                      </p>

                      <ul className="space-y-2">
                        {data.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-foreground text-sm leading-relaxed"
                          >
                            <span
                              className="mt-2 shrink-0 rounded-full"
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
                    </div>

                    {/* Progress bar — thin lines spanning full width, like EventSection */}
                    <div className="flex items-center gap-4 mt-5">
                      {semesterData.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelect(dotIdx);
                          }}
                          className="transition-colors duration-300"
                          style={{
                            flex: 1,
                            height: "1.5px",
                            backgroundColor:
                              dotIdx === activeIndex
                                ? "#DAA520"
                                : "hsl(217 71% 20% / 0.15)",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                          }}
                          aria-label={semesterData[dotIdx].title}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* ── PEEKING CARD CONTENT ── */
                <div
                  className="h-full flex flex-col overflow-hidden"
                  style={{
                    // Left peeking card: clip from the right so only PEEK_PX shows on left edge
                    // Right peeking card: clip from the left so only PEEK_PX shows on right edge
                    clipPath: isLeft
                      ? `inset(0 calc(100% - ${PEEK_PX}px) 0 0)`
                      : `inset(0 0 0 calc(100% - ${PEEK_PX}px))`,
                  }}
                >
                  <div
                    className="h-full flex flex-col items-center justify-between py-5 overflow-hidden"
                    style={{ width: "100%" }}
                  >
                    {/* Number at top of peeking sliver */}
                    <div
                      className="relative leading-none select-none shrink-0"
                      style={{
                        marginLeft: isLeft ? 14 : "auto",
                        marginRight: isRight ? 14 : "auto",
                      }}
                    >
                      <span
                        className="font-sans font-bold"
                        style={{
                          fontSize: "2rem",
                          lineHeight: 1,
                          color: "hsl(217 71% 20% / 0.22)",
                        }}
                      >
                        {data.number}
                      </span>
                      <span
                        className="absolute rounded-full"
                        style={{
                          width: 4,
                          height: 4,
                          backgroundColor: "#DAA520",
                          opacity: 0.45,
                          bottom: 0,
                          right: -1,
                        }}
                      />
                    </div>

                    {/* Gold dot at bottom of sliver */}
                    <div
                      className="shrink-0"
                      style={{
                        marginLeft: isLeft ? 14 : "auto",
                        marginRight: isRight ? 14 : "auto",
                      }}
                    >
                      <span
                        className="block rounded-full"
                        style={{
                          width: 5,
                          height: 5,
                          backgroundColor: "#DAA520",
                          opacity: 0.35,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      {/* Suppress unused containerWidth warning */}
      {containerWidth === 0 && null}
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
    <div className="flex flex-col w-full">
      {semesterData.map((data, index) => {
        const isActive = activeIndex === index;
        const isLast = index === semesterData.length - 1;

        return (
          <div key={index} className="flex gap-3">
            {/* Timeline node column */}
            <div
              className="flex flex-col items-center"
              style={{ width: 36, flexShrink: 0 }}
            >
              <button
                onClick={() => onSelect(index)}
                className={`
                  w-9 h-9 flex items-center justify-center shrink-0
                  font-bold font-sans border transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary text-white border-primary shadow-md"
                      : "bg-white text-primary/35 border-primary/12 hover:border-primary/35"
                  }
                `}
                style={{
                  borderRadius: 2,
                  fontSize: data.isInfinity ? "1rem" : "0.9rem",
                }}
                aria-label={`${data.title} auswählen`}
              >
                {data.number}
              </button>
              {!isLast && (
                <div
                  className="w-px flex-1 transition-all duration-300"
                  style={{
                    minHeight: 20,
                    backgroundColor: isActive
                      ? "#DAA520"
                      : "hsl(217 71% 20% / 0.1)",
                  }}
                />
              )}
            </div>

            {/* Card */}
            <div
              className={`
                flex-1 mb-3 cursor-pointer border bg-white
                transition-all duration-300
                ${isActive ? "border-primary/15 shadow-lg" : "border-primary/[0.06] shadow-sm hover:border-primary/20"}
              `}
              style={{ borderRadius: 2 }}
              onClick={() => onSelect(index)}
            >
              {isActive && <div className="h-[1.5px] w-full bg-accent-light" />}

              <div className="p-4">
                <div className="flex items-start gap-3">
                  {/* Ghost number with dot */}
                  <div className="relative leading-none select-none shrink-0">
                    <span
                      className="font-sans font-bold"
                      style={{
                        fontSize: "3rem",
                        lineHeight: 1,
                        color: isActive
                          ? "hsl(217 71% 20% / 0.06)"
                          : "hsl(217 71% 20% / 0.04)",
                      }}
                    >
                      {data.number}
                    </span>
                    <span
                      className="absolute rounded-full"
                      style={{
                        width: 5,
                        height: 5,
                        backgroundColor: "#DAA520",
                        opacity: isActive ? 0.6 : 0.3,
                        bottom: 2,
                        right: -1,
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-accent-light mb-0.5">
                      {data.isInfinity ? "Alumni" : `Schritt ${data.number}`}
                    </p>
                    <h4 className="text-primary font-bold text-sm leading-tight">
                      {data.title}
                    </h4>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      {data.subtitle}
                    </p>
                  </div>
                </div>

                {/* Expanded bullets */}
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isActive ? 400 : 0,
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? 12 : 0,
                  }}
                >
                  <ul className="space-y-2">
                    {data.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-foreground text-sm leading-relaxed"
                      >
                        <span
                          className="mt-2 shrink-0 rounded-full"
                          style={{
                            width: 4,
                            height: 4,
                            backgroundColor: "#DAA520",
                          }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress bar */}
                  <div className="flex items-center gap-3 mt-4">
                    {semesterData.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(dotIdx);
                        }}
                        className="transition-colors duration-300"
                        style={{
                          flex: 1,
                          height: "1.5px",
                          backgroundColor:
                            dotIdx === index
                              ? "#DAA520"
                              : "hsl(217 71% 20% / 0.15)",
                          border: "none",
                          padding: 0,
                          cursor: "pointer",
                        }}
                        aria-label={semesterData[dotIdx].title}
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
