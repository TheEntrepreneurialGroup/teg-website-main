import React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useScrollIntent } from "@/hooks/useScrollIntent";

interface Props {
  isDe: boolean;
  className?: string;
  /** Optional external play override (e.g. shared hero-level scroll-intent). */
  externalPlay?: boolean;
  /** "compact" for inline use, "hero" for full headline replacement. */
  size?: "compact" | "hero";
}

/**
 * TegGardenStatement
 * --------------------------------------------------------------------------
 * One-shot, deeply integrated brand statement.
 *
 *   TEG formt die neue Generation Führungspersönlichkeiten
 *
 * The TEG text is rendered inline as part of the sentence (aligned to
 * the cap height of the typography), and the whole block is the subject of
 * a single "garden / corporate" animation:
 *
 *   1. Golden vines unfurl from the TEG anchor zone, threading behind
 *      the words via SVG `pathLength` draw-on.
 *   2. Leaves bloom at the vine endpoints with a tiny spring + idle sway.
 *   3. Words of the sentence rise into place with a per-word stagger,
 *      synchronised with the vine growth.
 *   4. Idle state: gentle particle drift (spores rising), and a subtle
 *      leaf sway — so the block stays alive without being noisy.
 *
 * Respects `prefers-reduced-motion`: collapses to a clean static reveal.
 * --------------------------------------------------------------------------
 */
const TegGardenStatement: React.FC<Props> = ({
  isDe,
  className = "",
  externalPlay,
  size = "compact",
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();

  // Gate: only start the animation once the visitor expresses intent to
  // explore further (first downward scroll / swipe / page-down).
  const internalStarted = useScrollIntent(inView, reduce);
  const started = externalPlay !== undefined ? externalPlay : internalStarted;

  // Single boolean that drives every motion target below.
  const play = started;

  const tail = isDe
    ? "formt die neue Generation von Führungspersönlichkeiten"
    : "is shaping the next generation of leaders";
  const words = tail.split(" ");

  // Hand-curated organic bezier vines that emerge from a virtual anchor
  // near where the logo sits (top-left area of the viewBox), then sweep
  // across and behind the text block.
  const vines = [
    "M 150 110 C 110 80, 70 80, 40 120 S 20 200, 60 230",
    "M 160 100 C 220 70, 310 70, 390 60 S 560 70, 640 50",
    "M 175 135 C 250 165, 360 175, 470 165 S 660 130, 770 145",
    "M 170 150 C 240 200, 360 220, 480 215 S 700 220, 820 210",
    "M 180 120 C 280 95, 420 105, 540 90  S 740 70,  850 95",
    "M 155 145 C 110 165, 60 200, 30 195",
    "M 170 165 C 250 220, 380 240, 510 235",
    "M 180 95  C 260 70,  400 55,  520 70",
  ];

  // Endpoint coordinates of the vines, where leaves bloom.
  const leaves: Array<{ x: number; y: number; r: number }> = [
    { x: 60, y: 230, r: 200 },
    { x: 640, y: 50, r: 20 },
    { x: 770, y: 145, r: -10 },
    { x: 820, y: 210, r: 25 },
    { x: 850, y: 95, r: -15 },
    { x: 30, y: 195, r: 210 },
    { x: 510, y: 235, r: 18 },
    { x: 520, y: 70, r: -8 },
  ];

  const particles = React.useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: ((i * 67) % 100) + (i % 3) * 1.5,
        size: 1.5 + (i % 4) * 0.6,
        dur: 7 + (i % 5) * 0.8,
        delay: (i % 7) * 0.45,
        drift: ((i % 5) - 2) * 8,
      })),
    [],
  );

  const draw = (delay: number, duration = 1.9) =>
    reduce
      ? { duration: 0.01, delay: 0 }
      : { duration, delay, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <div ref={ref} className={`relative isolate ${className}`}>
      {/* ---------- Vine garden (SVG, behind text) ------------------------ */}
      <svg
        aria-hidden="true"
        viewBox="0 0 900 280"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -left-16 -right-24 -top-10 -bottom-10 -z-10 h-[calc(100%+5rem)] w-[calc(100%+10rem)]"
      >
        <defs>
          <linearGradient id="teg-vine-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F6D77B" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#F6D77B" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F6D77B" stopOpacity="0.10" />
          </linearGradient>
          <radialGradient id="teg-leaf-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE8A8" stopOpacity="1" />
            <stop offset="100%" stopColor="#F6D77B" stopOpacity="0.6" />
          </radialGradient>
          <filter
            id="teg-vine-glow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* Soft glow understroke */}
        {vines.map((d, i) => (
          <motion.path
            key={`glow-${i}`}
            d={d}
            stroke="#F6D77B"
            strokeWidth={5}
            strokeOpacity={0.18}
            strokeLinecap="round"
            fill="none"
            filter="url(#teg-vine-glow)"
            initial={{ pathLength: 0 }}
            animate={play ? { pathLength: 1 } : { pathLength: 0 }}
            transition={draw(0.45 + i * 0.14, 2.0)}
          />
        ))}

        {/* Crisp vine */}
        {vines.map((d, i) => (
          <motion.path
            key={`vine-${i}`}
            d={d}
            stroke="url(#teg-vine-grad)"
            strokeWidth={2.2}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={play ? { pathLength: 1 } : { pathLength: 0 }}
            transition={draw(0.55 + i * 0.14, 1.9)}
          />
        ))}

        {/* Leaves at the endpoints */}
        {leaves.map((p, i) => (
          <motion.g
            key={`leaf-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              play ? { scale: 1, opacity: 0.95 } : { scale: 0, opacity: 0 }
            }
            transition={{
              duration: reduce ? 0.01 : 0.55,
              delay: reduce ? 0 : 1.9 + i * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={
              {
                transformOrigin: `${p.x}px ${p.y}px`,
                transformBox: "fill-box",
              } as React.CSSProperties
            }
          >
            <motion.path
              d="M 0 0 c -3 -7, 1 -15, 9 -16 c 7 1, 11 9, 7 17 c -3 5, -10 5, -16 -1 z"
              fill="url(#teg-leaf-grad)"
              transform={`translate(${p.x} ${p.y}) rotate(${p.r})`}
              animate={
                reduce ? undefined : { rotate: [p.r, p.r + 5, p.r - 4, p.r] }
              }
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 7,
                      repeat: Infinity,
                      delay: i * 0.4,
                      ease: "easeInOut",
                    }
              }
              style={
                {
                  transformOrigin: `${p.x}px ${p.y}px`,
                  transformBox: "fill-box",
                } as React.CSSProperties
              }
            />
            <circle cx={p.x} cy={p.y} r={1.6} fill="#FFE8A8" />
          </motion.g>
        ))}
      </svg>

      {/* ---------- Floating spores -------------------------------------- */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute bottom-0 block rounded-full bg-[#F6D77B]"
              style={{
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                filter: "blur(0.5px)",
                boxShadow: "0 0 6px rgba(246,215,123,0.6)",
              }}
              initial={{ y: 0, opacity: 0, x: 0 }}
              animate={
                play
                  ? { y: [-10, -260], opacity: [0, 0.7, 0], x: [0, p.drift, 0] }
                  : {}
              }
              transition={{
                duration: p.dur,
                delay: 1.6 + p.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      {/* ---------- Statement -------------------------------------------- */}
      <p
        className={
          "relative font-bold text-white " +
          (size === "hero"
            ? "max-w-[28ch] text-[clamp(2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.02em]"
            : "max-w-[34ch] text-[clamp(1.05rem,1.55vw,1.4rem)] leading-[1.28] tracking-[-0.012em] font-semibold")
        }
      >
        {/* Inline TEG text — integrated with same styling as other words */}
        <motion.span
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={
            play
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: 10, filter: "blur(4px)" }
          }
          transition={{
            duration: reduce ? 0.01 : 0.55,
            delay: reduce ? 0 : 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          TEG
        </motion.span>{" "}
        {words.map((w, i) => (
          <React.Fragment key={`${w}-${i}`}>
            <motion.span
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={
                play
                  ? { opacity: 1, y: 0, filter: "blur(0px)" }
                  : { opacity: 0, y: 10, filter: "blur(4px)" }
              }
              transition={{
                duration: reduce ? 0.01 : 0.55,
                delay: reduce ? 0 : 0.85 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {w}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default TegGardenStatement;
