import React from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useScrollIntent } from "@/hooks/useScrollIntent";
import { trackButtonClick } from "@/utils/analytics";

export interface CtaSpec {
  label: string;
  href: string;
  variant: "solid" | "ghost";
  /** Umami source label, e.g. "Landing — Alumni". */
  trackingSource?: string;
}

interface Props {
  items: CtaSpec[];
  className?: string;
  /** Optional external play override (shared hero-level scroll-intent). */
  externalPlay?: boolean;
  /** Delay offset for the first button's bloom (seconds). */
  baseDelay?: number;
  /** Show labels immediately — no scroll-intent or bloom delay. */
  instant?: boolean;
}

/**
 * GardenCta — single CTA shaped like a sprouting bud.
 *
 * • Gold hairline border drawn-on like a vine.
 * • Soft, restrained gold halo behind the label.
 * • Leaf-arrow that glides forward on hover.
 */
const GardenCta: React.FC<{
  spec: CtaSpec;
  play: boolean;
  reduce: boolean | null;
  index: number;
  baseDelay: number;
  instant?: boolean;
}> = ({ spec, play, reduce, index, baseDelay, instant = false }) => {
  const isSolid = spec.variant === "solid";
  const delay = baseDelay + index * 0.16;

  const isExternal = /^https?:\/\//.test(spec.href);
  const isHash = spec.href.startsWith("#");

  const trackClick = () => {
    if (spec.trackingSource) {
      trackButtonClick(spec.label, spec.trackingSource);
    }
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackClick();
    if (!isHash) return;
    const id = spec.href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const inner = (
    <>
      {/* Soft halo (toned down) */}
      {!reduce && !instant && (
        <motion.span
          aria-hidden="true"
          className={
            "pointer-events-none absolute inset-0 -z-10 rounded-full blur-lg " +
            (isSolid ? "bg-[#C69E3C]/30" : "bg-[#C69E3C]/12")
          }
          initial={{ opacity: 0, scale: 0.7 }}
          animate={
            play
              ? {
                  opacity: isSolid ? [0, 0.55, 0.32] : [0, 0.3, 0.18],
                  scale: [0.7, 1.08, 1],
                }
              : { opacity: 0, scale: 0.7 }
          }
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Gold perimeter — solid button only */}
      {isSolid && !instant && (
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 200 56"
        >
          <defs>
            <linearGradient
              id={`teg-cta-grad-${index}-s`}
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#C69E3C" stopOpacity={0.95} />
              <stop offset="100%" stopColor="#C69E3C" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <motion.rect
            x="1"
            y="1"
            width="198"
            height="54"
            rx="28"
            ry="28"
            fill="none"
            stroke={`url(#teg-cta-grad-${index}-s)`}
            strokeWidth={1.2}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={
              play
                ? { pathLength: 1, opacity: 0.9 }
                : { pathLength: 0, opacity: 0 }
            }
            transition={{
              duration: reduce ? 0.01 : 1.3,
              delay: reduce ? 0 : delay - 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      )}

      {instant ? (
        <span className="relative z-10 flex items-center gap-2.5">
          <span className="leading-none">{spec.label}</span>
          {isHash ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className={
                "h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-y-0.5 " +
                (isSolid ? "text-[#0B1730]" : "text-[#C69E3C]")
              }
            >
              <path
                d="M3 6l5 5 5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className={
                "h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 " +
                (isSolid ? "text-[#0B1730]" : "text-white")
              }
            >
              <path
                d="M3 8h9M8 4l4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      ) : (
        <motion.span
          className="relative z-10 flex items-center gap-2.5"
          initial={{ opacity: 0, y: 6 }}
          animate={play ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{
            duration: reduce ? 0.01 : 0.6,
            delay: reduce ? 0 : delay + 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="leading-none">{spec.label}</span>
          {isHash ? (
            /* Down chevron — visitor stays on page (scrolls to section) */
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className={
                "h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-y-0.5 " +
                (isSolid ? "text-[#0B1730]" : "text-[#C69E3C]")
              }
            >
              <path
                d="M3 6l5 5 5-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            /* Right arrow — visitor navigates to another page */
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className={
                "h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:translate-x-0.5 " +
                (isSolid ? "text-[#0B1730]" : "text-white")
              }
            >
              <path
                d="M3 8h9M8 4l4 4-4 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </motion.span>
      )}
    </>
  );

  const baseClass =
    "group relative inline-flex h-14 min-w-[210px] items-center justify-center overflow-visible rounded-full px-7 text-[0.95rem] font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F6D77B]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#040F1F]";

  const surfaceClass = isSolid
    ? " bg-[#C69E3C] text-[#0B1730] hover:bg-[#D9AE50] shadow-[0_0_18px_-10px_rgba(198,158,60,0.5)]"
    : " bg-[#0f2b57] text-white hover:bg-[#163d75]";

  if (isExternal) {
    return (
      <a
        href={spec.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackClick}
        className={baseClass + surfaceClass}
      >
        {inner}
      </a>
    );
  }

  if (isHash) {
    return (
      <a
        href={spec.href}
        onClick={handleHashClick}
        className={baseClass + surfaceClass}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      to={spec.href}
      onClick={trackClick}
      className={baseClass + surfaceClass}
    >
      {inner}
    </Link>
  );
};

/**
 * GardenCtaPair — coordinated CTA bloom that extends the TegGardenStatement.
 *
 * Accepts any number of items (typically 2–3). Same scroll-intent gate
 * and gold vocabulary as the statement.
 */
const GardenCtaPair: React.FC<Props> = ({
  items,
  className = "",
  externalPlay,
  baseDelay = 1.55,
  instant = false,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedMotion();
  const internalPlay = useScrollIntent(inView, reduce);
  const play = instant
    ? true
    : externalPlay !== undefined
      ? externalPlay
      : internalPlay;
  const resolvedBaseDelay = instant ? 0 : baseDelay;

  return (
    <div
      ref={ref}
      className={
        "relative flex flex-col gap-3 sm:flex-row sm:flex-wrap " + className
      }
    >
      {items.map((item, i) => (
        <GardenCta
          key={`${item.label}-${i}`}
          spec={item}
          play={play}
          reduce={reduce}
          index={i}
          baseDelay={resolvedBaseDelay}
          instant={instant}
        />
      ))}
    </div>
  );
};

export default GardenCtaPair;
