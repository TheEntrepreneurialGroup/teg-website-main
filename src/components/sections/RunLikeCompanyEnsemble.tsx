import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

/**
 * RunLikeCompanyEnsemble — Immersive Garden style team section.
 *
 * Reference behaviour (immersive-g.com, locomotive.ca, activetheory.net):
 *   • Section pins for N portrait segments.
 *   • One subject in focus at a time, full color and sharp.
 *   • Ensemble in the periphery: tiny silver-grey chips, no name noise.
 *   • Scroll-driven focus rotation, click-to-jump, hover-to-peek.
 *   • Constant slow motion: Ken Burns on stage, breathing on chips,
 *     gold corner marks, vertical scrub track.
 *   • Text reveals deliberately (split word stagger, word-by-word quote).
 */

export type TeamMember = {
  slug: string;
  name: string;
  unit: string;
  role: string;
  photo: string | null;
  quote?: string | null;
  initials: string;
  placeholder?: boolean;
};

export type RunLikeCompanyEnsembleProps = {
  eyebrow: string;
  title: string;
  intro: string;
  stageLabel: string;
  stageHint: string;
  placeholderName: string;
  placeholderRole: string;
  navHint: string;
  noQuoteLabel: string;
  members: TeamMember[];
  isDe: boolean;
};

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_LUXE = [0.22, 1, 0.36, 1] as const;

/* SplitName — staggered word reveal */
function SplitName({ text, keyId }: { text: string; keyId: string }) {
  const parts = text.split(" ");
  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-[0.35em]">
      {parts.map((word, wi) => (
        <span key={`${keyId}-${wi}`} className="relative inline-block overflow-hidden pb-[0.08em] leading-[1]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.0, ease: EASE_OUT_EXPO, delay: 0.1 + wi * 0.085 }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* QuoteReveal — word-by-word fade */
function QuoteReveal({ quote, keyId }: { quote: string; keyId: string }) {
  const words = useMemo(() => quote.split(/\s+/), [quote]);
  return (
    <p className="text-[15px] leading-[1.7] text-white/85 md:text-[19px] md:leading-[1.62] lg:text-[22px] lg:leading-[1.58]">
      <span
        className="mr-1 select-none align-top text-[20px] leading-none text-[#F6D77B]/85 md:text-[26px] lg:text-[32px]"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      {words.map((w, i) => (
        <motion.span
          key={`${keyId}-w-${i}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: EASE_LUXE, delay: 0.5 + i * 0.018 }}
          className="inline"
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </p>
  );
}

/* EnsembleChip — minimal silver-grey chip with index */
const EnsembleChip: React.FC<{
  member: TeamMember;
  index: number;
  active: boolean;
  onSelect: () => void;
  onHover: (m: TeamMember | null) => void;
}> = ({ member, index, active, onSelect, onHover }) => {
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={onSelect}
      onMouseEnter={() => onHover(member)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(member)}
      onBlur={() => onHover(null)}
      aria-label={`${indexLabel} — ${member.name}`}
      aria-pressed={active}
      className="group relative block text-left outline-none"
    >
      <div
        className={`relative aspect-[3/4] w-full overflow-hidden rounded-[1px] ring-1 transition-all duration-700 ${
          active
            ? "ring-[#F6D77B]/75 shadow-[0_22px_60px_-22px_rgba(246,215,123,0.55)]"
            : "ring-white/10 group-hover:ring-white/40 group-focus-visible:ring-white/60"
        }`}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt=""
            loading="lazy"
            draggable={false}
            className={`h-full w-full object-cover object-top ease-out ${
              active
                ? "scale-[1.04] saturate-100 brightness-[1.02]"
                : "scale-100 saturate-0 brightness-[0.68] group-hover:saturate-[0.6] group-hover:brightness-[0.92]"
            }`}
            style={{ transitionProperty: "transform, filter", transitionDuration: "1100ms" }}
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-transparent">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 4px)",
              }}
            />
            <span className="relative font-mono text-[10px] font-medium tracking-[0.32em] text-white/40">
              {indexLabel}
            </span>
          </div>
        )}
        {active && (
          <>
            <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t border-[#F6D77B]" />
            <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r border-t border-[#F6D77B]" />
            <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-[#F6D77B]" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-[#F6D77B]" />
          </>
        )}
      </div>
    </button>
  );
};

/* VerticalScrub — left edge numerical track with progress fill */
const VerticalScrub: React.FC<{
  total: number;
  activeIndex: number;
  progress: MotionValue<number>;
  onSelect: (i: number) => void;
}> = ({ total, activeIndex, progress, onSelect }) => {
  const fillHeight = useTransform(progress, (v) => `${Math.min(100, Math.max(0, v) * 100)}%`);
  return (
    <div className="pointer-events-none absolute left-3 top-1/2 hidden -translate-y-1/2 md:block">
      <div className="pointer-events-auto relative flex flex-col items-center">
        <div className="relative h-[260px] w-px bg-white/10">
          <motion.div
            className="absolute inset-x-0 top-0 bg-[#F6D77B]"
            style={{ height: fillHeight } as any}
          />
        </div>
        <div className="absolute inset-y-0 -left-3 flex w-7 flex-col items-center justify-between py-0">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              aria-label={`Go to ${i + 1}`}
              className="group relative flex h-7 w-7 items-center justify-center"
            >
              <span
                className={`block h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "scale-150 bg-[#F6D77B]"
                    : "scale-100 bg-white/30 group-hover:bg-white/70"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const RunLikeCompanyEnsemble: React.FC<RunLikeCompanyEnsembleProps> = ({
  eyebrow,
  title,
  intro,
  stageLabel,
  stageHint,
  placeholderName,
  placeholderRole,
  navHint,
  noQuoteLabel,
  members,
  isDe,
}) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const total = members.length;
  const pinHeightVh = total * 90;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 110, damping: 28, mass: 0.6 });

  const [activeIndex, setActiveIndex] = useState(0);
  const [peeked, setPeeked] = useState<TeamMember | null>(null);
  const [manualLockUntil, setManualLockUntil] = useState(0);

  useEffect(() => {
    const unsub = smooth.on("change", (v) => {
      if (Date.now() < manualLockUntil) return;
      const t = Math.min(0.999, Math.max(0, v));
      const idx = Math.min(total - 1, Math.floor(t * total));
      setActiveIndex((prev) => (prev === idx ? prev : idx));
    });
    return () => unsub();
  }, [smooth, total, manualLockUntil]);

  const jumpTo = (idx: number) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const sectionHeight = el.offsetHeight - window.innerHeight;
    const targetProgress = (idx + 0.5) / total;
    const y = sectionTop + targetProgress * sectionHeight;
    setActiveIndex(idx);
    setManualLockUntil(Date.now() + 900);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const segmentProgress = useTransform(smooth, (v) => {
    const seg = 1 / total;
    const local = (v - activeIndex * seg) / seg;
    return Math.max(0, Math.min(1, local));
  });
  const meterWidth = useTransform(segmentProgress, (v) => `${v * 100}%`);

  // Header fades after first segment
  const headerOpacity = useTransform(smooth, [0, 0.04, 0.14], [1, 1, 0]);
  const headerY = useTransform(smooth, [0, 0.14], [0, -28]);

  const active = members[activeIndex];
  const indexLabel = `${String(activeIndex + 1).padStart(2, "0")} / ${String(total).padStart(2, "0")}`;

  return (
    <section
      ref={sectionRef}
      className="relative isolate bg-[#040F1F] text-white"
      style={{ height: `${pinHeightVh}vh` }}
      aria-label={isDe ? "TEG Board - Unsere Vorstände" : "TEG Board - Unsere Vorstände"}
    >
      <div className="sticky top-0 flex h-screen w-full items-stretch overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(58% 50% at 78% 14%, rgba(246,215,123,0.11) 0%, rgba(4,15,31,0) 62%), radial-gradient(55% 55% at 10% 92%, rgba(255,255,255,0.05) 0%, rgba(4,15,31,0) 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 3px)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/35 to-transparent"
        />

        <div className="relative mx-auto flex h-full w-full max-w-[1440px] flex-col px-5 md:px-12 lg:px-16">
          {/* Persistent micro header — compact top bar (does not overlap stage) */}
          <motion.div
            style={{ opacity: headerOpacity, y: headerY } as any}
            className="absolute left-4 right-4 top-20 z-10 flex items-baseline gap-4 md:left-12 md:right-12 md:top-24 lg:left-16"
          >
            <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#F6D77B]/85 md:text-[11px]">
              <span className="h-px w-7 bg-[#F6D77B]/65" />
              {eyebrow}
            </div>
            <h2 className="text-balance text-[15px] font-semibold leading-[1.1] text-white/90 md:text-[18px]">
              {title}
            </h2>
          </motion.div>

          {/* Persistent in-focus index — removed per request */}

          {/* Stage + Right column */}
          <div className="relative grid h-full grid-cols-12 items-start gap-4 pb-6 pt-[112px] md:gap-10 md:pb-14 md:pt-[140px] lg:gap-12">
            {/* STAGE */}
            <div className="col-span-12 flex min-h-0 self-stretch md:col-span-7 lg:col-span-7">
              <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-full max-h-[640px]">
                <motion.div
                  key={active.slug + "-portrait"}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.85, ease: EASE_LUXE }}
                  className="absolute inset-0 overflow-hidden rounded-[1px] ring-1 ring-white/12"
                >
                  {active.photo ? (
                    <img
                      src={active.photo}
                      alt={active.name}
                      draggable={false}
                      style={{ objectPosition: "50% 18%" }}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-white/[0.06] to-transparent">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 4px)",
                        }}
                      />
                      <span className="relative text-xs font-semibold uppercase tracking-[0.4em] text-white/35">
                        {placeholderName}
                      </span>
                    </div>
                  )}
                  {/* gold wipe sweep on enter */}
                  <motion.span
                    aria-hidden="true"
                    initial={{ x: "-110%", opacity: 0.9 }}
                    animate={{ x: "115%", opacity: 0.9 }}
                    transition={{ duration: 1.15, ease: EASE_OUT_EXPO }}
                    className="pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-gradient-to-r from-transparent via-[#F6D77B]/22 to-transparent"
                  />
                  {/* bottom veil */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#040F1F] via-[#040F1F]/72 to-transparent"
                  />
                </motion.div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-6 md:px-8 md:pb-8">
                  <motion.div
                    key={active.slug + "-caption"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45, ease: EASE_LUXE }}
                  >
                    <div className="mb-2 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.36em] text-[#F6D77B]/90 md:text-[11px]">
                      <span className="h-px w-7 bg-[#F6D77B]/60" />
                      {active.unit}
                    </div>
                    <div className="text-[22px] font-semibold leading-[1.03] tracking-[-0.005em] text-white md:text-[40px] lg:text-[48px]">
                      <SplitName
                        text={active.placeholder ? placeholderName : active.name}
                        keyId={active.slug}
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, ease: EASE_LUXE, delay: 0.38 }}
                      className="mt-2 text-[12.5px] font-medium uppercase tracking-[0.26em] text-white/72 md:text-[13.5px]"
                    >
                      {active.placeholder ? placeholderRole : active.role}
                    </motion.div>
                  </motion.div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/12">
                  <motion.div className="h-full bg-[#F6D77B]" style={{ width: meterWidth } as any} />
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-12 flex min-h-0 self-stretch flex-col gap-4 md:col-span-5 md:gap-8 lg:col-span-5">
              <div className="relative min-h-[120px] flex-1 md:min-h-0">
                <motion.div
                  key={active.slug + "-quote"}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE_LUXE }}
                  className="relative pl-6"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-px bg-gradient-to-b from-[#F6D77B]/70 via-[#F6D77B]/25 to-transparent"
                  />
                  {active.quote ? (
                    <QuoteReveal quote={active.quote} keyId={active.slug} />
                  ) : (
                    <div className="flex h-full flex-col justify-start">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/35">
                        {isDe ? "Statement folgt" : "Statement to follow"}
                      </div>
                      <p className="mt-3 max-w-[34ch] text-[13px] italic leading-relaxed text-white/45">
                        {noQuoteLabel}
                      </p>
                    </div>
                  )}
                </motion.div>
              </div>

              <div className="relative shrink-0">
                <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-white/45">
                  <span>{isDe ? "TEG Board - Unsere Vorstände" : "TEG Board - Unsere Vorstände"}</span>
                  {navHint ? (
                    <span className="text-white/35 normal-case tracking-normal text-[11px] font-normal">
                      {navHint}
                    </span>
                  ) : null}
                </div>
                <div className="grid grid-cols-6 gap-1.5 md:gap-2.5">
                  {members.map((m, i) => (
                    <EnsembleChip
                      key={m.slug}
                      member={m}
                      index={i}
                      active={i === activeIndex}
                      onSelect={() => jumpTo(i)}
                      onHover={setPeeked}
                    />
                  ))}
                </div>
                <div className="relative mt-3 h-5">
                  <AnimatePresence>
                    {peeked && peeked.slug !== active.slug && (
                      <motion.div
                        key={`peek-${peeked.slug}`}
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25, ease: EASE_LUXE }}
                        className="absolute inset-x-0 flex items-center gap-2 text-[11px] text-white/65"
                      >
                        <span className="font-semibold text-[#F6D77B]/85">
                          {peeked.placeholder ? placeholderName : peeked.name}
                        </span>
                        <span className="h-px flex-1 bg-white/10" />
                        <span className="truncate">
                          {peeked.placeholder ? placeholderRole : `${peeked.unit} · ${peeked.role}`}
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>

        <VerticalScrub total={total} activeIndex={activeIndex} progress={smooth} onSelect={jumpTo} />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/30 to-transparent"
        />
      </div>
    </section>
  );
};

export default RunLikeCompanyEnsemble;
