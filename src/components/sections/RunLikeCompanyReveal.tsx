import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * RunLikeCompanyReveal
 * ----------------------------------------------------------------------------
 * A scroll-locked bridge between the "Leitmotiv" statement and the team
 * section. When the section first enters the viewport, page scroll is paused
 * while a "Run [TEG-logo] like a company" phrase blooms (blob-up) into view.
 * Once the animation completes (~2.6 s), scroll is released and the visitor
 * can continue to the team grid below.
 *
 * Reduced-motion: animation collapses to an instant reveal with no scroll
 * lock at all — respects user preference.
 */

const EASE_LUXE = [0.22, 1, 0.36, 1] as const;
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

// Total animation budget (ms). Slightly longer than the slowest motion path
// (logo bloom 1.6 s + word stagger ≈ 0.7 s + breathing pad).
const LOCK_MS = 2600;

export type RunLikeCompanyRevealProps = {
  isDe: boolean;
};

const RunLikeCompanyReveal: React.FC<RunLikeCompanyRevealProps> = () => {
  const reduce = useReducedMotion();
  const sectionRef = React.useRef<HTMLElement>(null);
  const [play, setPlay] = React.useState(false);
  const [unlocked, setUnlocked] = React.useState(false);

  // -----------------------------------------------------------------------
  // Trigger logic — chosen to feel right on BOTH mobile and desktop:
  //
  //   • Use a rAF-driven check of the section's bounding rect instead of a
  //     fixed "amount" threshold. This decouples timing from section height
  //     and viewport size, so the lock activates at a predictable moment.
  //
  //   • Activation condition:
  //       The section's CENTER must have entered the viewport's center
  //       band (±20% of viewport height). At that moment we (a) cancel
  //       any further user scroll, and (b) smooth-scroll the section to
  //       exactly fill the viewport. Then the lock holds for LOCK_MS.
  //
  //   • Reduced motion: instant resolution, no lock at all.
  //   • Already past the section on initial mount (e.g. anchor refresh):
  //     play immediately without locking — no point trapping the user.
  // -----------------------------------------------------------------------
  React.useEffect(() => {
    if (play) return;
    if (reduce) {
      // Reveal as soon as the section is visible at all.
      const el = sectionRef.current;
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting) {
              setPlay(true);
              setUnlocked(true);
              io.disconnect();
              break;
            }
          }
        },
        { threshold: 0.1 },
      );
      io.observe(el);
      return () => io.disconnect();
    }

    let raf = 0;
    let cancelled = false;
    let previousDistance = Infinity;

    const check = () => {
      if (cancelled) return;
      const el = sectionRef.current;
      if (!el) {
        raf = requestAnimationFrame(check);
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // If the user has already scrolled well past the section (e.g. deep
      // link, browser restore), just play without locking.
      if (rect.bottom < vh * 0.4) {
        setPlay(true);
        setUnlocked(true);
        return;
      }

      const sectionCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;
      const distance = Math.abs(sectionCenter - viewportCenter);

      // Primary trigger: section is roughly centered (±35% of viewport).
      // Wider than feels natural on purpose — it gives the lock plenty of
      // room to engage even on fast mobile flicks. The snap-to-center step
      // in the lock effect will straighten the framing anyway.
      const inCenterBand = distance <= vh * 0.35;

      // Fallback trigger: we are PAST perfect center (sectionCenter has
      // moved above viewport center) — i.e. the user is escaping. Lock
      // immediately so they don't shoot through without ever seeing it.
      const escapedDownward =
        sectionCenter < viewportCenter && previousDistance < Infinity;

      if (inCenterBand || escapedDownward) {
        setPlay(true);
        return;
      }
      previousDistance = distance;
      raf = requestAnimationFrame(check);
    };

    raf = requestAnimationFrame(check);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [play, reduce]);

  // Scroll lock + center snap while the bloom plays.
  React.useEffect(() => {
    if (!play) return;
    if (reduce) {
      setUnlocked(true);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;

    // (1) Snap the section to perfect viewport center BEFORE locking so the
    //     animation always plays from a consistent visual position. We use
    //     an instant (non-smooth) scroll because momentum scrolling on
    //     mobile would otherwise fight a smooth animation.
    const rect = el.getBoundingClientRect();
    const targetY = Math.max(
      0,
      window.scrollY + rect.top + rect.height / 2 - window.innerHeight / 2,
    );
    window.scrollTo({ top: targetY, behavior: "auto" });

    // (2) Lock body scroll. We use position-based locking (iOS-safe) since
    //     `overflow: hidden` alone does not stop touch scrolling there.
    const scrollY = targetY;
    const prev = {
      htmlOverflow: document.documentElement.style.overflow,
      bodyOverflow: document.body.style.overflow,
      bodyTouch: document.body.style.touchAction,
      bodyPosition: document.body.style.position,
      bodyTop: document.body.style.top,
      bodyWidth: document.body.style.width,
    };

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Belt-and-braces: swallow scroll attempts during the lock window.
    const block = (e: Event) => {
      e.preventDefault();
    };
    const blockKey = (e: KeyboardEvent) => {
      const keys = [" ", "Spacebar", "PageDown", "PageUp", "ArrowDown", "ArrowUp", "End", "Home"];
      if (keys.includes(e.key)) e.preventDefault();
    };
    window.addEventListener("wheel", block, { passive: false });
    window.addEventListener("touchmove", block, { passive: false });
    window.addEventListener("keydown", blockKey);

    const releaseId = window.setTimeout(() => {
      document.documentElement.style.overflow = prev.htmlOverflow;
      document.body.style.overflow = prev.bodyOverflow;
      document.body.style.touchAction = prev.bodyTouch;
      document.body.style.position = prev.bodyPosition;
      document.body.style.top = prev.bodyTop;
      document.body.style.width = prev.bodyWidth;
      // Restore scroll position — only if we had pinned via position:fixed.
      window.scrollTo(0, scrollY);
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", blockKey);
      setUnlocked(true);
    }, LOCK_MS);

    return () => {
      window.clearTimeout(releaseId);
      document.documentElement.style.overflow = prev.htmlOverflow;
      document.body.style.overflow = prev.bodyOverflow;
      document.body.style.touchAction = prev.bodyTouch;
      document.body.style.position = prev.bodyPosition;
      document.body.style.top = prev.bodyTop;
      document.body.style.width = prev.bodyWidth;
      window.removeEventListener("wheel", block);
      window.removeEventListener("touchmove", block);
      window.removeEventListener("keydown", blockKey);
    };
  }, [play, reduce]);

  return (
    <section
      ref={sectionRef}
      aria-label="Run TEG like a company"
      className="relative isolate flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#040F1F] text-white"
    >
      {/* Ambient gold blob — rises from below and blooms behind the phrase */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(246,215,123,0.55) 0%, rgba(246,215,123,0.22) 35%, rgba(4,15,31,0) 70%)",
          filter: "blur(40px)",
        }}
        initial={{ opacity: 0, y: "30%", scale: 0.35 }}
        animate={
          play
            ? reduce
              ? { opacity: 0.9, y: "0%", scale: 1 }
              : {
                  opacity: [0, 0.95, 0.7, 0.8],
                  y: ["30%", "0%", "0%", "0%"],
                  scale: [0.35, 1.15, 0.95, 1.02],
                }
            : { opacity: 0, y: "30%", scale: 0.35 }
        }
        transition={{ duration: reduce ? 0.01 : 1.8, ease: EASE_LUXE, times: [0, 0.55, 0.8, 1] }}
      />

      {/* Secondary slow breathing glow once the bloom settles */}
      {!reduce && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(246,215,123,0.35) 0%, rgba(4,15,31,0) 70%)",
            filter: "blur(30px)",
          }}
          animate={play ? { scale: [1, 1.06, 1], opacity: [0.5, 0.7, 0.5] } : { opacity: 0 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
        />
      )}

      {/* Hairline accent strips, top and bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
      />

      {/* Phrase */}
      <h2
        className="relative z-10 mx-auto max-w-[18ch] px-6 text-center font-bold leading-[0.98] tracking-[-0.02em] text-white"
        style={{ fontSize: "clamp(2.5rem, 8.5vw, 7.5rem)" }}
      >
        <Word text="Run" play={play} reduce={!!reduce} delay={0.05} />{" "}
        <InlineLogo play={play} reduce={!!reduce} />{" "}
        <Word text="like" play={play} reduce={!!reduce} delay={0.35} />{" "}
        <Word text="a" play={play} reduce={!!reduce} delay={0.5} />{" "}
        <Word text="company." play={play} reduce={!!reduce} delay={0.62} />
      </h2>

      {/* Scroll hint reveals once unlocked */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.36em] text-white/55"
        initial={{ opacity: 0, y: 8 }}
        animate={unlocked ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
      >
        <span className="mr-2 inline-block h-px w-6 align-middle bg-[#F6D77B]/60" />
        Scroll
      </motion.div>
    </section>
  );
};

function Word({
  text,
  play,
  reduce,
  delay,
}: {
  text: string;
  play: boolean;
  reduce: boolean;
  delay: number;
}) {
  return (
    <span className="relative inline-block overflow-hidden align-baseline pb-[0.1em]">
      <motion.span
        className="inline-block"
        initial={{ y: "110%", opacity: 0, filter: "blur(8px)" }}
        animate={
          play
            ? { y: "0%", opacity: 1, filter: "blur(0px)" }
            : { y: "110%", opacity: 0, filter: "blur(8px)" }
        }
        transition={{
          duration: reduce ? 0.01 : 1.0,
          ease: EASE_OUT_EXPO,
          delay: reduce ? 0 : delay,
        }}
      >
        {text}
      </motion.span>
    </span>
  );
}

function InlineLogo({ play, reduce }: { play: boolean; reduce: boolean }) {
  return (
    <span className="relative mx-1 inline-block align-[-0.18em]">
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute -inset-4 -z-10 rounded-full bg-[#F6D77B]/45 blur-2xl"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={
            play
              ? { opacity: [0, 0.9, 0.4, 0.55], scale: [0.4, 1.5, 1.05, 1.15] }
              : { opacity: 0, scale: 0.4 }
          }
          transition={{ duration: 1.6, delay: 0.18, ease: "easeOut" }}
        />
      )}
      <motion.img
        src="/shared/brand/teg-favicon.avif"
        alt="TEG"
        draggable={false}
        className="block h-[1.1em] w-[1.1em] select-none rounded-full ring-1 ring-[#F6D77B]/50 drop-shadow-[0_0_22px_rgba(246,215,123,0.65)]"
        initial={{ opacity: 0, scale: 0.55, filter: "blur(10px)" }}
        animate={
          play
            ? { opacity: 1, scale: 1, filter: "blur(0px)" }
            : { opacity: 0, scale: 0.55, filter: "blur(10px)" }
        }
        transition={{ duration: reduce ? 0.01 : 1.1, delay: reduce ? 0 : 0.2, ease: EASE_OUT_EXPO }}
      />
    </span>
  );
}

export default RunLikeCompanyReveal;
