/**
 * Pure scroll → video-time mapping for the request-demo sticky hero.
 * Kept as .mjs so verify scripts can import the same shipped math as React.
 */

/**
 * Progress 0..1 while the pin is sticky: pin top at viewport top → 0,
 * pin bottom aligned with viewport bottom → 1.
 * @param {number} pinTop - getBoundingClientRect().top of the pin
 * @param {number} pinHeight - offsetHeight of the pin
 * @param {number} viewportHeight - window.innerHeight
 */
export function heroPinProgress(pinTop, pinHeight, viewportHeight) {
  const runway = Math.max(1, pinHeight - viewportHeight);
  const raw = -pinTop / runway;
  if (raw <= 0) return 0;
  if (raw >= 1) return 1;
  return raw;
}

/**
 * Map scrub progress to a media time within [0, duration].
 * @param {number} progress - 0..1
 * @param {number} duration - video.duration seconds
 */
export function progressToVideoTime(progress, duration) {
  if (!Number.isFinite(duration) || duration <= 0) return 0;
  const p = progress <= 0 ? 0 : progress >= 1 ? 1 : progress;
  return p * duration;
}

/**
 * True while the sticky hero should remain fixed (scrub not finished).
 * @param {number} progress - 0..1
 */
export function heroStillPinned(progress) {
  return progress < 1;
}

/**
 * Sticky page header may enter glassmorphic scrolled state only after the
 * hero scrub is finished (progress ≥ 1). Mid-scrub (including 0.99) stays off.
 * @param {number} progress - 0..1 hero pin / scrub progress
 * @returns {boolean}
 */
export function headerGlassEligible(progress) {
  const p = Number(progress);
  if (!Number.isFinite(p)) return false;
  return p >= 1;
}

/**
 * Green wash opacity: full at 0, linear to 0 by 50% video progress.
 * @param {number} progress - 0..1 scroll/video progress
 */
export function heroOverlayOpacity(progress) {
  const p = progress <= 0 ? 0 : progress >= 1 ? 1 : progress;
  if (p >= 0.5) return 0;
  return 1 - p / 0.5;
}

/**
 * Form opacity: solid until 40%, fast fade 40%→50%, gone at 50%+.
 * @param {number} progress - 0..1 scroll/video progress
 */
export function heroFormOpacity(progress) {
  const p = progress <= 0 ? 0 : progress >= 1 ? 1 : progress;
  if (p <= 0.4) return 1;
  if (p >= 0.5) return 0;
  return 1 - (p - 0.4) / 0.1;
}

/**
 * True when sticky header bottom has reached/crossed an element's top edge
 * (viewport coords from getBoundingClientRect).
 * @param {number} headerBottom
 * @param {number} elementTop
 */
export function headerBottomCrossedTop(headerBottom, elementTop) {
  return elementTop <= headerBottom;
}

/**
 * Format-section video phase from header-edge geometry.
 * - idle: heading still below header → do not load
 * - loaded-static: heading crossed, video top still below header → show frame 0
 * - scrub: video top crossed header bottom → sticky scrub active
 * @param {number} headerBottom
 * @param {number} headingTop - "Das TEG Konferenz Format" top
 * @param {number} videoSectionTop - upper edge of format video pin media
 * @returns {'idle'|'loaded-static'|'scrub'}
 */
export function formatVideoPhase(headerBottom, headingTop, videoSectionTop) {
  if (!headerBottomCrossedTop(headerBottom, headingTop)) return "idle";
  if (!headerBottomCrossedTop(headerBottom, videoSectionTop)) {
    return "loaded-static";
  }
  return "scrub";
}

/**
 * Whether currentTime may advance with scroll (only in scrub phase).
 * @param {'idle'|'loaded-static'|'scrub'} phase
 */
export function formatVideoScrubActive(phase) {
  return phase === "scrub";
}

/**
 * Whether video source should be loaded/mounted.
 * @param {'idle'|'loaded-static'|'scrub'} phase
 */
export function formatVideoShouldLoad(phase) {
  return phase === "loaded-static" || phase === "scrub";
}

/**
 * Pin scrub progress from document scroll (more reliable than rect.top alone
 * when a sticky child is fixed in the viewport).
 * @param {number} scrollY - window.scrollY
 * @param {number} pinDocumentTop - pin.getBoundingClientRect().top + scrollY
 * @param {number} pinHeight - pin.offsetHeight
 * @param {number} viewportHeight - window.innerHeight
 */
export function documentPinProgress(
  scrollY,
  pinDocumentTop,
  pinHeight,
  viewportHeight,
) {
  const runway = Math.max(1, pinHeight - viewportHeight);
  const raw = (scrollY - pinDocumentTop) / runway;
  if (raw <= 0) return 0;
  if (raw >= 1) return 1;
  return raw;
}
