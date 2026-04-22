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
const PEEK_PX = 52;
const TRANSITION =
  "left 0.42s cubic-bezier(0.4,0,0.2,1), width 0.42s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease";

/**
 * Returns per-card layout for the stacked slider.
 *
 * Rules (strictly non-circular, linear):
 *  - index 0 (first):  active fills full width — no left peek, right peek if has next
 *  - index 3 (last):   active fills full width — left peek if has prev, no right peek
 *  - index 1, 2:       active has left peek + right peek
 *
 * Hidden cards (more than 1 step away) are parked:
 *  - cards BEFORE activeIndex-1 → parked at left: "-200%" (well off-screen left), invisible
 *  - cards AFTER  activeIndex+1 → parked at left: "200%"  (well off-screen right), invisible
 *
 * Parking far off-screen (200%) prevents width re-calculations from briefly
 * bringing a "hidden" card edge into the viewport during transitions.
 */
type Role = "active" | "left" | "right" | "hidden-left" | "hidden-right";

interface CardPos {
  left: string;
  width: string;
  zIndex: number;
  opacity: number;
  role: Role;
}

function computePositions(activeIndex: number): Record<number, CardPos> {
  const hasLeft = activeIndex > 0;
  const hasRight = activeIndex < TOTAL - 1;

  const leftPad = hasLeft ? PEEK_PX : 0;
  const rightPad = hasRight ? PEEK_PX : 0;

  const result: Record<number, CardPos> = {};

  for (let i = 0; i < TOTAL; i++) {
    if (i === activeIndex) {
      result[i] = {
        left: `${leftPad}px`,
        width: `calc(100% - ${leftPad + rightPad}px)`,
        zIndex: 30,
        opacity: 1,
        role: "active",
      };
    } else if (i === activeIndex - 1) {
      // Left peeking card — sits behind active, right edge flush at x=PEEK_PX
      result[i] = {
        left: "0px",
        width: `calc(100% - ${rightPad}px)`,
        zIndex: 20,
        opacity: 1,
        role: "left",
      };
    } else if (i === activeIndex + 1) {
      // Right peeking card — left edge at (100% - PEEK_PX)
      result[i] = {
        left: `calc(100% - ${PEEK_PX}px)`,
        width: `calc(100% - ${leftPad}px)`,
        zIndex: 20,
        opacity: 1,
        role: "right",
      };
    } else if (i < activeIndex) {
      // Far left — parked completely off-screen left, invisible
      result[i] = {
        left: "-200%",
        width: `calc(100% - ${rightPad}px)`,
        zIndex: 10,
        opacity: 0,
        role: "hidden-left",
      };
    } else {
      // Far right — parked completely off-screen right, invisible
      result[i] = {
        left: "200%",
        width: `calc(100% - ${leftPad}px)`,
        zIndex: 10,
        opacity: 0,
        role: "hidden-right",
      };
    }
  }

  return result;
}

/** Large decorative numeral with a gold dot anchored to its bottom-right */
function GhostNumber({
  number,
  fontSize,
  color,
  dotSize = 7,
  dotOpacity = 0.5,
}: {
  number: string;
  fontSize: string;
  color: string;
  dotSize?: number;
  dotOpacity?: number;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [dotPos, setDotPos] = useState<{ bottom: number; right: number }>({
    bottom: 4,
    right: -2,
  });

  useLayoutEffect(() => {
    if (!spanRef.current || !wrapRef.current) return;
    const spanRect = spanRef.current.getBoundingClientRect();
    const wrapRect = wrapRef.current.getBoundingClientRect();
    // bottom-right of the rendered text glyph relative to the wrapper
    const bottom = wrapRect.bottom - spanRect.bottom + 2;
    const right = wrapRect.right - spanRect.right + 2;
    setDotPos({ bottom, right });
  }, [number, fontSize]);

  return (
    <div
      ref={wrapRef}
      className="relative inline-block leading-none select-none"
    >
      <span
        ref={spanRef}
        className="font-sans font-bold block"
        style={{ fontSize, lineHeight: 1, color }}
      >
        {number}
      </span>
      {/* Gold dot — bottom-right of the numeral */}
      <span
        className="absolute rounded-full pointer-events-none"
        style={{
          width: dotSize,
          height: dotSize,
          backgroundColor: "#DAA520",
          opacity: dotOpacity,
          bottom: dotPos.bottom,
          right: dotPos.right,
        }}
      />
    </div>
  );
}

/** Full-width progress bar — thin lines, active segment highlighted gold */
function ProgressBar({
  total,
  active,
  onSelect,
}: {
  total: number;
  active: number;
  onSelect: (i: number) => void;
}) {
  return (
    <div className="flex items-center gap-1 w-full">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(i);
          }}
          aria-label={semesterData[i].title}
          style={{
            flex: i === active ? 2 : 1,
            height: "1.5px",
            backgroundColor:
              i === active ? "#DAA520" : "hsl(217 71% 20% / 0.18)",
            border: "none",
            padding: 0,
            cursor: "pointer",
            transition:
              "flex 0.42s cubic-bezier(0.4,0,0.2,1), background-color 0.3s ease",
          }}
        />
      ))}
    </div>
  );
}

function DesktopStackedCards({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const CARD_HEIGHT = 300;
  const positions = computePositions(activeIndex);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: CARD_HEIGHT }}
    >
      {semesterData.map((data, i) => {
        const pos = positions[i];
        const isActive = pos.role === "active";
        const isLeft = pos.role === "left";
        const isRight = pos.role === "right";
        const isInteractive = isLeft || isRight;

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              top: 0,
              left: pos.left,
              width: pos.width,
              height: CARD_HEIGHT,
              zIndex: pos.zIndex,
              opacity: pos.opacity,
              transition: TRANSITION,
              willChange: "left, width",
              cursor: isInteractive ? "pointer" : "default",
              pointerEvents: isActive || isInteractive ? "auto" : "none",
            }}
            onClick={() => {
              if (isInteractive) onSelect(i);
            }}
          >
            {/* Card shell */}
            <div
              className={`
                h-full flex flex-col bg-white overflow-hidden
                ${
                  isActive
                    ? "shadow-[0_4px_24px_rgba(15,44,89,0.10)] border border-primary/10"
                    : "shadow-[0_2px_8px_rgba(15,44,89,0.06)] border border-primary/[0.07]"
                }
              `}
              style={{ borderRadius: 2 }}
            >
              {/* Gold top accent line — only on active */}
              {isActive && (
                <div className="h-[1.5px] w-full bg-accent-light shrink-0" />
              )}

              {isActive ? (
                /* ── ACTIVE CARD ── */
                <div className="flex flex-1 min-h-0 overflow-hidden">
                  {/* Ghost number column */}
                  <div
                    className="flex items-start justify-center shrink-0 pt-7 pl-6 pr-2"
                    style={{ width: 108 }}
                  >
                    <GhostNumber
                      number={data.number}
                      fontSize="7.5rem"
                      color="hsl(217 71% 20% / 0.055)"
                      dotSize={7}
                      dotOpacity={0.5}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col justify-between py-7 pr-8 pl-1 flex-1 min-w-0">
                    <div>
                      <p className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-accent-light mb-1.5">
                        {data.isInfinity ? "Alumni" : `Schritt ${data.number}`}
                      </p>
                      <h4 className="text-primary font-bold text-[1.15rem] leading-snug">
                        {data.title}
                      </h4>
                      <p className="text-muted-foreground text-[0.8rem] mt-0.5 mb-4">
                        {data.subtitle}
                      </p>

                      <ul className="space-y-2">
                        {data.bullets.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-foreground text-sm leading-relaxed"
                          >
                            <span
                              className="mt-[0.45rem] shrink-0 rounded-full"
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
                    </div>

                    {/* Full-width progress bar */}
                    <div className="mt-5 w-full">
                      <ProgressBar
                        total={TOTAL}
                        active={activeIndex}
                        onSelect={onSelect}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                /* ── PEEKING CARD ── */
                <div
                  className="h-full flex flex-col overflow-hidden"
                  style={{
                    clipPath: isLeft
                      ? `inset(0 calc(100% - ${PEEK_PX}px) 0 0 round 0px)`
                      : `inset(0 0 0 calc(100% - ${PEEK_PX}px) round 0px)`,
                  }}
                >
                  <div
                    className="h-full flex flex-col items-center justify-between py-5"
                    style={{ width: "100%" }}
                  >
                    <div
                      style={{
                        marginLeft: isLeft ? 12 : "auto",
                        marginRight: isRight ? 12 : "auto",
                      }}
                    >
                      <GhostNumber
                        number={data.number}
                        fontSize="1.9rem"
                        color="hsl(217 71% 20% / 0.20)"
                        dotSize={4}
                        dotOpacity={0.4}
                      />
                    </div>

                    {/* Faint gold tick at bottom of sliver */}
                    <div
                      className="shrink-0 rounded-full"
                      style={{
                        width: 4,
                        height: 4,
                        backgroundColor: "#DAA520",
                        opacity: 0.3,
                        marginLeft: isLeft ? 12 : "auto",
                        marginRight: isRight ? 12 : "auto",
                      }}
                    />
                  </div>
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
    <div className="flex flex-col w-full">
      {semesterData.map((data, index) => {
        const isActive = activeIndex === index;
        const isLast = index === semesterData.length - 1;

        return (
          <div key={index} className="flex gap-3">
            {/* Timeline node */}
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
                      : "bg-white text-primary/35 border-primary/[0.10] hover:border-primary/30"
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
                      : "hsl(217 71% 20% / 0.10)",
                  }}
                />
              )}
            </div>

            {/* Card */}
            <div
              className={`
                flex-1 mb-3 border bg-white transition-all duration-300 cursor-pointer
                ${
                  isActive
                    ? "border-primary/[0.12] shadow-[0_4px_20px_rgba(15,44,89,0.09)]"
                    : "border-primary/[0.06] shadow-sm hover:border-primary/[0.18]"
                }
              `}
              style={{ borderRadius: 2 }}
              onClick={() => onSelect(index)}
            >
              {isActive && <div className="h-[1.5px] w-full bg-accent-light" />}

              <div className="p-4">
                <div className="flex items-start gap-3">
                  {/* Ghost numeral + dot */}
                  <div className="shrink-0">
                    <GhostNumber
                      number={data.number}
                      fontSize="3rem"
                      color={
                        isActive
                          ? "hsl(217 71% 20% / 0.06)"
                          : "hsl(217 71% 20% / 0.035)"
                      }
                      dotSize={5}
                      dotOpacity={isActive ? 0.55 : 0.25}
                    />
                  </div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-accent-light mb-0.5">
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

                {/* Expandable bullets */}
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
                          className="mt-[0.45rem] shrink-0 rounded-full"
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

                  <div className="mt-4 w-full">
                    <ProgressBar
                      total={TOTAL}
                      active={index}
                      onSelect={onSelect}
                    />
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
