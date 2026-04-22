import { useIntl } from "react-intl";
import { useState, useRef, useLayoutEffect, useCallback } from "react";

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
    subtitle: "Anwendung in realer Projektleitung",
    bullets: [
      "Zugang zu Fachkonferenzen, C-Level Workshops oder einem Management TEG Talk",
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
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const DURATION = "0.42s";
const TRANSITION = `transform ${DURATION} ${EASE}, opacity ${DURATION} ${EASE}`;

/**
 * GhostNumber renders a large decorative numeral with a gold dot
 * anchored to the bottom-right corner of the actual rendered glyph.
 */
function GhostNumber({
  number,
  fontSize,
  color,
  dotSize = 6,
  dotColor = "#DAA520",
  dotOpacity = 0.55,
}: {
  number: string;
  fontSize: string;
  color: string;
  dotSize?: number;
  dotColor?: string;
  dotOpacity?: number;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [dotPos, setDotPos] = useState({ bottom: 2, right: 2 });

  const measure = useCallback(() => {
    if (!spanRef.current || !wrapRef.current) return;
    const spanRect = spanRef.current.getBoundingClientRect();
    const wrapRect = wrapRef.current.getBoundingClientRect();
    setDotPos({
      bottom: wrapRect.bottom - spanRect.bottom + 2,
      right: wrapRect.right - spanRect.right + 2,
    });
  }, []);

  useLayoutEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure, number, fontSize]);

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
      <span
        className="absolute rounded-full pointer-events-none"
        style={{
          width: dotSize,
          height: dotSize,
          backgroundColor: dotColor,
          opacity: dotOpacity,
          bottom: dotPos.bottom,
          right: dotPos.right,
        }}
      />
    </div>
  );
}

/** Thin progress bar — exact same style as TestimonialSection / EventsSection */
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
    <div className="flex items-center gap-4">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(i);
          }}
          aria-label={semesterData[i].title}
          className={`h-[1.5px] w-6 lg:w-7 rounded-none transition-colors ${
            i === active ? "bg-accent-light" : "bg-secondary-dark"
          }`}
        />
      ))}
    </div>
  );
}

/**
 * Desktop stacked card slider.
 *
 * Layout: full-width, 3 visible columns — 1/6 left peek | 2/3 active | 1/6 right peek.
 * Each card is positioned by translateX based on (dataIndex - activeIndex).
 * Slot -1 = left peek, 0 = active, +1 = right peek, others hidden off-screen.
 * Non-circular: index 0 has no left slot, index TOTAL-1 has no right slot.
 * Keys are always stable (index never changes), so React reuses DOM nodes and
 * CSS transitions fire cleanly in both directions.
 */
function DesktopSlider({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  // Grid: [1fr] [4fr] [1fr]  →  left-peek | active | right-peek
  // We render all 4 cards inside the active column, translating them in/out.
  // Peek columns hold a clipped mirror of the adjacent card as a click target.
  const hasLeft = activeIndex > 0;
  const hasRight = activeIndex < TOTAL - 1;

  const CARD_H = 300;

  return (
    <div
      className="w-full grid"
      style={{ gridTemplateColumns: "1fr 4fr 1fr", height: CARD_H }}
    >
      {/* ── LEFT PEEK COLUMN ── */}
      <div className="relative overflow-hidden h-full">
        {hasLeft ? (
          <button
            type="button"
            className="absolute inset-0 w-full h-full cursor-pointer group"
            onClick={() => onSelect(activeIndex - 1)}
            aria-label={`${semesterData[activeIndex - 1].title} anzeigen`}
          >
            <div className="w-full h-full border border-primary/[0.07] bg-white flex flex-col justify-between p-4 overflow-hidden">
              <GhostNumber
                number={semesterData[activeIndex - 1].number}
                fontSize="3.5rem"
                color="hsl(217 71% 20% / 0.08)"
                dotSize={4}
                dotOpacity={0.35}
              />
              <div>
                <p className="text-[8px] font-semibold tracking-[0.18em] uppercase text-accent-light mb-1">
                  {semesterData[activeIndex - 1].isInfinity
                    ? "Alumni"
                    : `Schritt ${semesterData[activeIndex - 1].number}`}
                </p>
                <p className="text-primary font-semibold text-xs leading-tight line-clamp-2">
                  {semesterData[activeIndex - 1].subtitle}
                </p>
              </div>
            </div>
          </button>
        ) : null}
      </div>

      {/* ── ACTIVE CENTRE COLUMN ── */}
      <div className="relative overflow-hidden border border-primary/[0.09] bg-white h-full">
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-accent-light z-10" />

        {/* Sliding track — all 4 cards live here, translated in/out */}
        <div className="relative w-full h-full">
          {semesterData.map((data, i) => {
            const slot = i - activeIndex; // -3 to +3
            // Cards more than 1 step away are invisible and parked off-screen
            const isVisible = slot === 0 || slot === -1 || slot === 1;
            // slot -1: coming from left (just left of center)
            // slot  0: active (center)
            // slot +1: going to right
            // Translate by slot * 100% within the container
            const translateX = `calc(${slot} * 100%)`;
            const opacity = slot === 0 ? 1 : 0;

            return (
              <div
                key={i}
                aria-hidden={slot !== 0}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `translateX(${translateX})`,
                  opacity,
                  transition: TRANSITION,
                  willChange: "transform, opacity",
                  pointerEvents: slot === 0 ? "auto" : "none",
                  visibility: isVisible ? "visible" : "hidden",
                }}
              >
                <div className="h-full flex overflow-hidden pt-[1.5px]">
                  {/* Ghost number column */}
                  <div
                    className="flex items-start justify-center shrink-0 pt-6 pl-6 pr-2"
                    style={{ width: 110 }}
                  >
                    <GhostNumber
                      number={data.number}
                      fontSize="7rem"
                      color="hsl(217 71% 20% / 0.05)"
                      dotSize={7}
                      dotOpacity={0.45}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col justify-between py-6 pr-8 pl-2 flex-1 min-w-0">
                    <div>
                      <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-accent-light mb-1.5">
                        {data.isInfinity ? "Alumni" : `Schritt ${data.number}`}
                      </p>
                      <h4 className="text-primary font-bold text-xl leading-snug">
                        {data.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-1 mb-4">
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

                    {/* Progress bar — identical style to EventsSection */}
                    <div className="mt-4">
                      <ProgressBar
                        total={TOTAL}
                        active={activeIndex}
                        onSelect={onSelect}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── RIGHT PEEK COLUMN ── */}
      <div className="relative overflow-hidden h-full">
        {hasRight ? (
          <button
            type="button"
            className="absolute inset-0 w-full h-full cursor-pointer group"
            onClick={() => onSelect(activeIndex + 1)}
            aria-label={`${semesterData[activeIndex + 1].title} anzeigen`}
          >
            <div className="w-full h-full border border-primary/[0.07] bg-white flex flex-col justify-between p-4 overflow-hidden">
              <GhostNumber
                number={semesterData[activeIndex + 1].number}
                fontSize="3.5rem"
                color="hsl(217 71% 20% / 0.08)"
                dotSize={4}
                dotOpacity={0.35}
              />
              <div>
                <p className="text-[8px] font-semibold tracking-[0.18em] uppercase text-accent-light mb-1">
                  {semesterData[activeIndex + 1].isInfinity
                    ? "Alumni"
                    : `Schritt ${semesterData[activeIndex + 1].number}`}
                </p>
                <p className="text-primary font-semibold text-xs leading-tight line-clamp-2">
                  {semesterData[activeIndex + 1].subtitle}
                </p>
              </div>
            </div>
          </button>
        ) : null}
      </div>
    </div>
  );
}

/** Mobile: vertical timeline — same look as desktop but stacked */
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
                className={`w-9 h-9 flex items-center justify-center shrink-0 font-bold font-sans border transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white border-primary"
                    : "bg-white text-primary/40 border-primary/[0.10] hover:border-primary/25"
                }`}
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
              className={`flex-1 mb-3 border bg-white transition-all duration-300 cursor-pointer ${
                isActive
                  ? "border-primary/[0.10]"
                  : "border-primary/[0.06] hover:border-primary/[0.15]"
              }`}
              style={{ borderRadius: 2 }}
              onClick={() => onSelect(index)}
            >
              {isActive && <div className="h-[1.5px] w-full bg-accent-light" />}

              <div className="p-4">
                <div className="flex items-start gap-3">
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
                      dotOpacity={isActive ? 0.5 : 0.22}
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
                  <div className="mt-4">
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
    <section className="w-full bg-white flex flex-col gap-6 md:gap-8 py-8 md:py-14 lg:py-20">
      {/* Header — constrained to max-w-7xl with page padding */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-14 lg:px-20">
        <h3 className="text-3xl font-semibold text-primary">
          {intl.formatMessage({ id: "student.memberProcess.title" })}
        </h3>
        <p className="text-xl text-muted-foreground mt-2">
          Dein Weg zur Führungspersönlichkeit in 3 Semestern
        </p>
      </div>

      {/* Desktop slider — full viewport width */}
      <div className="hidden md:block w-full">
        <DesktopSlider activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>

      {/* Mobile timeline — padded */}
      <div className="md:hidden w-full px-4 sm:px-8">
        <MobileTimeline activeIndex={activeIndex} onSelect={setActiveIndex} />
      </div>
    </section>
  );
}
