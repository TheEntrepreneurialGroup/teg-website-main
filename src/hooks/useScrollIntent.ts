import React from "react";

/**
 * useScrollIntent
 * ---------------------------------------------------------------------------
 * Returns `true` once the user signals intent to explore further (first
 * downward wheel / swipe / arrow / spacebar / scroll past 4px) AFTER the
 * `inView` gate has opened. The flag latches `true` and listeners detach.
 *
 * If `reduceMotion` is true, resolves to `true` immediately when in view,
 * so reduced-motion visitors don't have to scroll to see resolved content.
 */
export function useScrollIntent(inView: boolean, reduceMotion: boolean | null): boolean {
  const [started, setStarted] = React.useState(false);

  React.useEffect(() => {
    if (started) return;
    if (reduceMotion) {
      if (inView) setStarted(true);
      return;
    }
    if (!inView) return;

    // Wait for any post-mount auto-scrolls / layout shifts to settle
    // before arming listeners, then capture a clean baseline.
    let armed = false;
    let lastTouchY: number | null = null;
    let armScrollY = typeof window !== "undefined" ? window.scrollY : 0;
    const trigger = () => {
      if (armed) setStarted(true);
    };

    const armTimer = window.setTimeout(() => {
      armScrollY = window.scrollY;
      armed = true;
    }, 450);

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) trigger();
    };
    const onTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0]?.clientY ?? null;
    };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY;
      if (y == null || lastTouchY == null) return;
      if (lastTouchY - y > 6) trigger();
    };
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowDown" ||
        e.key === "PageDown" ||
        e.key === " " ||
        e.key === "End" ||
        e.key === "Spacebar"
      ) {
        trigger();
      }
    };
    const onScroll = () => {
      // Require a meaningful scroll past the armed baseline.
      if (window.scrollY - armScrollY > 80) trigger();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(armTimer);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
    };
  }, [inView, reduceMotion, started]);

  return started;
}
