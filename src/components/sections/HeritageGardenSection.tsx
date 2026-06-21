import React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import OptimizedImage from "@/components/OptimizedImage";

/**
 * HeritageGardenSection
 * ---------------------------------------------------------------------------
 * §1 Heritage — an immersive, non-rectangular re-imagining of the founding
 * story. Replaces the previous two-column card grid with:
 *
 *   • A dark navy stage with animated golden vines (the "trellis").
 *   • A tilted parchment newspaper as the protagonist, with a press tag
 *     floating off its corner.
 *   • Four named founders rendered as luminous portrait medallions, drifting
 *     organically (Roland Berger as a real photo, the others as etched
 *     monogram discs).
 *   • All 11 founding companies arranged on a curved trellis baseline, each
 *     logo cradled in a leaf-shaped tile that reveals its modern descendant
 *     and originating board member on hover.
 *   • A delicate single-line register footer instead of a boxed legal table.
 *
 * Visual language is intentionally aligned with TegGardenStatement /
 * YblaJourney: #040F1F navy, #F6D77B gold, fine hairlines, vine-and-leaf
 * SVG motifs, and reduced-motion respect.
 * ---------------------------------------------------------------------------
 */

export interface HeritageCompany {
  original: string;
  today: string;
  logo: string | null;
  founder: string | null;
  logoClassName: string;
}

export interface HeritageFounder {
  name: string;
  role: string;
  company: string;
  image: string | null;
}

interface Props {
  isDe: boolean;
  companies: HeritageCompany[];
  founders: HeritageFounder[];
}

const HeritageGardenSection: React.FC<Props> = ({
  isDe,
  companies,
  founders,
}) => {
  const stageRef = React.useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();
  const play = inView;

  // ---- Copy (heavily compressed) -----------------------------------------
  const copy = isDe
    ? {
        headline: (
          <>
            Gegründet <span className="text-[#F6D77B]">1986</span> von
            Vorständen elf deutscher Top‑Unternehmen.
          </>
        ),
        intro:
          "Eine gemeinnützige Münchner Initiative der Erwachsenenbildung - institutionell verwurzelt seit 1986, in heutiger Form etabliert im Januar 1988.",
        pressTag: "Pressebeleg · Donaukurier",
        kuratoriumTag: "Kuratorium 1986",
        kuratoriumLine:
          "Vorständer elf Deutscher Top-Unternehmen gründen TEG.\nDennoch keine lineare Gründungsphase!",
        todayPrefix: "heute",
        founderArrow: "via",
        articleAlt:
          "Historischer Zeitungsartikel zur Gründung des TEG-Kuratoriums",
      }
    : {
        headline: (
          <>
            Founded in <span className="text-[#F6D77B]">1986</span> by board
            members of eleven leading German companies.
          </>
        ),
        intro:
          "A non‑profit Munich initiative for adult education — institutionally rooted since 1986 and established in its current form in January 1988.",
        pressTag: "Press proof · Donaukurier",
        kuratoriumTag: "Founding board 1986",
        kuratoriumLine:
          "Board members of eleven German top companies found TEG.\nYet no linear founding phase!",
        todayPrefix: "today",
        founderArrow: "via",
        articleAlt:
          "Historic newspaper article about the founding of the TEG board",
      };

  // ---- Trellis baseline coordinates (curved, organic) --------------------
  // 11 logos arranged on two intertwined wave lines so they never read as a
  // grid. xPct / yPct are percentages inside the trellis container; rot is a
  // tiny per-tile tilt so the row breathes.
  const trellisPositions: Array<{ x: number; y: number; rot: number }> = [
    { x: 4, y: 18, rot: -3 },
    { x: 14, y: 62, rot: 2 },
    { x: 23, y: 8, rot: -1 },
    { x: 33, y: 48, rot: 3 },
    { x: 42, y: 22, rot: -2 },
    { x: 52, y: 70, rot: 1 },
    { x: 61, y: 12, rot: -2 },
    { x: 70, y: 54, rot: 2 },
    { x: 79, y: 26, rot: -1 },
    { x: 87, y: 64, rot: 3 },
    { x: 94, y: 18, rot: -2 },
  ];

  // ---- Background vines (decorative trellis behind everything) -----------
  const stageVines = [
    "M -20 90 C 120 40, 280 150, 460 80 S 820 30, 1040 110",
    "M -20 200 C 160 280, 320 180, 520 240 S 880 320, 1040 220",
    "M -20 360 C 140 320, 320 420, 520 360 S 880 280, 1040 360",
    "M -20 520 C 180 580, 360 500, 540 560 S 900 620, 1040 540",
  ];

  const stageLeaves: Array<{ x: number; y: number; r: number; s: number }> = [
    { x: 80, y: 70, r: 200, s: 1.2 },
    { x: 460, y: 80, r: 25, s: 1.0 },
    { x: 700, y: 60, r: -15, s: 0.9 },
    { x: 980, y: 110, r: 20, s: 1.1 },
    { x: 60, y: 200, r: 210, s: 0.95 },
    { x: 320, y: 180, r: -25, s: 1.0 },
    { x: 880, y: 320, r: 15, s: 1.05 },
    { x: 540, y: 360, r: 20, s: 0.95 },
    { x: 360, y: 500, r: -10, s: 1.1 },
    { x: 900, y: 620, r: 25, s: 1.0 },
  ];

  const particles = React.useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: ((i * 53) % 100) + (i % 3) * 1.2,
        size: 1.5 + (i % 4) * 0.6,
        dur: 8 + (i % 5),
        delay: (i % 9) * 0.4,
        drift: ((i % 5) - 2) * 10,
      })),
    [],
  );

  const draw = (delay: number, duration = 2.2) =>
    reduce
      ? { duration: 0.01, delay: 0 }
      : { duration, delay, ease: [0.16, 1, 0.3, 1] as const };

  // Pair each company with a trellis position
  const trellis = companies.map((c, i) => ({
    company: c,
    pos: trellisPositions[i] ?? { x: 50, y: 40, rot: 0 },
  }));

  return (
    <section
      id="story"
      ref={stageRef}
      className="relative isolate overflow-hidden bg-[#040F1F] text-white"
    >
      {/* Soft radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 30% 25%, rgba(246,215,123,0.10) 0%, rgba(4,15,31,0) 70%), radial-gradient(50% 45% at 80% 80%, rgba(246,215,123,0.07) 0%, rgba(4,15,31,0) 70%)",
        }}
      />
      {/* Top + bottom hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
      />

      {/* Background vine garden (full-stage trellis behind content) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1024 720"
        preserveAspectRatio="xMidYMid slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
      >
        <defs>
          <linearGradient id="heritage-vine-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F6D77B" stopOpacity="0.7" />
            <stop offset="55%" stopColor="#F6D77B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#F6D77B" stopOpacity="0.08" />
          </linearGradient>
          <radialGradient id="heritage-leaf-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFE8A8" stopOpacity="1" />
            <stop offset="100%" stopColor="#F6D77B" stopOpacity="0.55" />
          </radialGradient>
          <filter
            id="heritage-vine-glow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Glow understroke */}
        {stageVines.map((d, i) => (
          <motion.path
            key={`hg-glow-${i}`}
            d={d}
            stroke="#F6D77B"
            strokeWidth={6}
            strokeOpacity={0.16}
            strokeLinecap="round"
            fill="none"
            filter="url(#heritage-vine-glow)"
            initial={{ pathLength: 0 }}
            animate={play ? { pathLength: 1 } : { pathLength: 0 }}
            transition={draw(0.2 + i * 0.18, 2.6)}
          />
        ))}
        {/* Crisp vines */}
        {stageVines.map((d, i) => (
          <motion.path
            key={`hg-vine-${i}`}
            d={d}
            stroke="url(#heritage-vine-grad)"
            strokeWidth={1.6}
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={play ? { pathLength: 1 } : { pathLength: 0 }}
            transition={draw(0.3 + i * 0.18, 2.4)}
          />
        ))}
        {/* Leaves bloom at endpoints + along the trellis */}
        {stageLeaves.map((p, i) => (
          <motion.g
            key={`hg-leaf-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              play ? { scale: p.s, opacity: 0.9 } : { scale: 0, opacity: 0 }
            }
            transition={{
              duration: reduce ? 0.01 : 0.6,
              delay: reduce ? 0 : 1.4 + i * 0.12,
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
              fill="url(#heritage-leaf-grad)"
              transform={`translate(${p.x} ${p.y}) rotate(${p.r})`}
              animate={
                reduce ? undefined : { rotate: [p.r, p.r + 4, p.r - 3, p.r] }
              }
              transition={
                reduce
                  ? undefined
                  : {
                      duration: 8,
                      repeat: Infinity,
                      delay: i * 0.5,
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

      {/* Floating spores */}
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              className="absolute bottom-0 block rounded-full bg-[#F6D77B]"
              style={{
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                filter: "blur(0.5px)",
                boxShadow: "0 0 6px rgba(246,215,123,0.55)",
              }}
              initial={{ y: 0, opacity: 0, x: 0 }}
              animate={
                play
                  ? { y: [-10, -640], opacity: [0, 0.6, 0], x: [0, p.drift, 0] }
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

      {/* ============================================================== */}
      {/* Content                                                        */}
      {/* ============================================================== */}
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-16 md:px-8 md:pt-28 md:pb-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[22ch] text-balance text-[clamp(1.85rem,3.6vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-white"
        >
          {copy.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          className="mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.15rem)] leading-[1.6] text-white/80"
        >
          {copy.intro}
        </motion.p>

        {/* ============================================================ */}
        {/* Centerpiece: Newspaper + floating founder medallions         */}
        {/* ============================================================ */}
        <div className="relative mt-16 grid gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
          {/* Newspaper as protagonist */}
          <motion.figure
            initial={{ opacity: 0, y: 30, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.6 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative mx-auto w-full max-w-xl"
          >
            {/* Aged paper glow ring */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[2px] opacity-80 blur-2xl"
              style={{
                background:
                  "radial-gradient(60% 50% at 50% 40%, rgba(246,215,123,0.35) 0%, rgba(246,215,123,0) 70%)",
              }}
            />
            <div className="relative overflow-hidden border border-[#F6D77B]/30 bg-[#efe5cf] shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <div className="aspect-[948/695] w-full overflow-hidden">
                <OptimizedImage
                  src="/about/heritage/zeitungsartikel.png"
                  alt={copy.articleAlt}
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Floating press tag */}
            <figcaption className="absolute -bottom-3 right-4 max-w-[12rem] border border-[#F6D77B]/40 bg-[#040F1F]/95 px-3 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-sm md:right-8">
              <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F6D77B]/85">
                {copy.pressTag}
              </div>
            </figcaption>
          </motion.figure>

          {/* Founder medallions floating in an asymmetric column */}
          <div className="relative">
            <ul className="relative space-y-5">
              {founders.map((f, i) => {
                // Stagger horizontal offset so the column doesn't read as
                // a rectangular stack.
                const offsets = ["lg:ml-0", "lg:ml-10", "lg:ml-4", "lg:ml-14"];
                const offset = offsets[i] ?? "lg:ml-0";
                return (
                  <motion.li
                    key={f.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.15 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`flex items-center ${offset}`}
                  >
                    {/* Medallion removed — keeping name + role only */}
                    <div className="min-w-0">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#F6D77B]/75">
                        {f.company}
                      </div>
                      <div className="mt-1 text-[15px] font-semibold leading-tight text-white">
                        {f.name}
                      </div>
                      <div className="mt-0.5 text-[12px] leading-snug text-white/70">
                        {f.role}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Trellis: 11 founding companies on a curved baseline          */}
        {/* ============================================================ */}
        <div className="mt-24 md:mt-32">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F6D77B]/80">
            <div className="flex items-center gap-3">
              {copy.kuratoriumTag}
              <span className="text-white/45">·</span>
              <span className="text-white/65 normal-case tracking-normal text-[12px] font-normal">
                {copy.kuratoriumLine}
              </span>
            </div>
          </div>

          {/* Desktop / tablet: free-positioned trellis */}
          <div className="relative hidden h-[440px] w-full md:block">
            {/* Trellis vines connecting the row, drawn behind tiles */}
            <svg
              aria-hidden="true"
              viewBox="0 0 1000 440"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <motion.path
                d="M 0 240 C 120 120, 240 360, 380 220 S 660 80, 820 260 S 1000 200, 1000 200"
                stroke="url(#heritage-vine-grad)"
                strokeWidth={1.2}
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M 0 200 C 140 320, 320 80, 480 280 S 720 380, 880 180 S 1000 240, 1000 240"
                stroke="#F6D77B"
                strokeOpacity={0.18}
                strokeWidth={3.5}
                strokeLinecap="round"
                fill="none"
                filter="url(#heritage-vine-glow)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {trellis.map(({ company, pos }, i) => (
              <motion.div
                key={company.original}
                initial={{ opacity: 0, scale: 0.82, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.05 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group absolute"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: `translate(-50%, -50%) rotate(${pos.rot}deg)`,
                  width: 132,
                }}
              >
                {/* Leaf-shaped tile (rounded asymmetric) */}
                <div
                  className="relative flex h-[132px] w-[132px] flex-col items-center justify-center border border-[#F6D77B]/25 bg-[#0a1830]/85 px-3 py-4 backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#F6D77B]/55 group-hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
                  style={{
                    borderRadius: "44% 56% 38% 62% / 56% 38% 62% 44%",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(60% 60% at 50% 40%, rgba(246,215,123,0.18) 0%, rgba(246,215,123,0) 70%)",
                      borderRadius: "inherit",
                    }}
                  />
                  <div className="relative flex h-12 w-full items-center justify-center">
                    {company.logo ? (
                      <img
                        src={company.logo}
                        alt={company.original}
                        className={`max-w-[88px] object-contain brightness-0 invert opacity-85 transition-opacity duration-300 group-hover:opacity-100 ${company.logoClassName}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div
                        aria-label="Personal-Media-Partner"
                        className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85"
                      >
                        PMP
                      </div>
                    )}
                  </div>
                  {/* "Heute" label — only for HypoVereinsbank, Infratest, PMP */}
                  {[
                    "Bayerische Hypotheken- und Wechsel-Bank",
                    "Infratest",
                    "Personal-Media-Partner",
                  ].includes(company.original) && (
                    <div className="relative mt-2 text-center">
                      <div className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-[#F6D77B]/80">
                        {copy.todayPrefix}
                      </div>
                      <div className="mt-0.5 line-clamp-2 text-[11px] leading-tight text-white/85">
                        {company.today.replace(/^heute\s+|^today\s+/i, "")}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover detail card */}
                <div
                  className="pointer-events-none absolute left-1/2 top-[145px] z-20 w-[200px] -translate-x-1/2 origin-top scale-95 border border-[#F6D77B]/30 bg-[#040F1F]/95 px-3 py-2.5 text-center opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.6)] backdrop-blur transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                  style={{
                    transform: `translate(-50%, 0) rotate(${-pos.rot}deg)`,
                  }}
                >
                  <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white">
                    {company.original}
                  </div>
                  {company.founder ? (
                    <div className="mt-1 text-[10px] leading-snug text-[#F6D77B]/85">
                      {copy.founderArrow} {company.founder}
                    </div>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile fallback: flowing horizontal scroll of leaf tiles */}
          <div className="-mx-4 overflow-x-auto px-4 pb-2 md:hidden">
            <ul className="flex min-w-max gap-3">
              {companies.map((c, i) => (
                <motion.li
                  key={c.original}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.55,
                    delay: 0.04 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex w-[150px] flex-col items-center justify-between border border-[#F6D77B]/25 bg-[#0a1830]/85 px-3 py-4"
                  style={{
                    borderRadius: "44% 56% 38% 62% / 56% 38% 62% 44%",
                    minHeight: 150,
                  }}
                >
                  <div className="flex h-10 w-full items-center justify-center">
                    {c.logo ? (
                      <img
                        src={c.logo}
                        alt={c.original}
                        className={`max-w-[88px] object-contain brightness-0 invert opacity-90 ${c.logoClassName}`}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/85">
                        PMP
                      </span>
                    )}
                  </div>
                  <div className="mt-3 text-center">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                      {c.original}
                    </div>
                    {/* "Heute" label — only for HypoVereinsbank, Infratest, PMP */}
                    {[
                      "Bayerische Hypotheken- und Wechsel-Bank",
                      "Infratest",
                      "Personal-Media-Partner",
                    ].includes(c.original) && (
                      <div className="mt-0.5 text-[10px] leading-snug text-[#F6D77B]/80">
                        {c.today}
                      </div>
                    )}
                    {c.founder ? (
                      <div className="mt-1 text-[10px] leading-snug text-white/65">
                        {copy.founderArrow} {c.founder}
                      </div>
                    ) : null}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageGardenSection;
