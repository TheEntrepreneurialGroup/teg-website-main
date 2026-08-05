/**
 * TEG Supply Chain Conference 2026 — Location-Host landing page.
 * Hero: scroll-scrub video + Immersive Gardens “Gespräch Buchen” CTA
 * (scrolls to bottom in-house scheduler). Post-hero: “Das TEG Konferenz
 * Format”, then vertical Immersive Gardens journey (one thesis per
 * full-width section, no 2×2 text grids). Black sponsor bar archived.
 */
import React, {
  FormEvent,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  formatVideoPhase,
  formatVideoScrubActive,
  formatVideoShouldLoad,
  headerGlassEligible,
  heroFormOpacity,
  heroPinProgress,
  progressToVideoTime,
} from "./heroScrollScrub.mjs";
import "./request-demo.css";

const ASSET = "/request-demo";

/** Calendly 30-min with Corbinian (replaces custom in-house scheduler). */
const CALENDLY_URL =
  "https://calendly.com/corbinian-massinger-teg-ev/30min?hide_event_type_details=1&hide_gdpr_banner=1";
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";
const HOSTS_PHOTO = `${ASSET}/leo-corbi.webp`;

/** Scroll-scrubbed hero zoom video (does not autoplay). */
const HERO_ZOOM_VIDEO = `${ASSET}/hero-zoom.mp4`;
/** Extra scroll runway while hero is pinned (video scrub distance). */
const HERO_SCROLL_RUNWAY_VH = 220;
/** Format-section sticky scrub video (loaded after header crosses format heading). */
const FORMAT_SCRUB_VIDEO = `${ASSET}/format-scrub.mp4`;
const FORMAT_SCROLL_RUNWAY_VH = 220;

type FormState = {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  email: string;
  phone: string;
  privacy: boolean;
};

type SlotDto = {
  start: string;
  end: string;
  date: string;
  time_label: string;
  end_time_label: string;
};

const emptyForm = (): FormState => ({
  firstName: "",
  lastName: "",
  company: "",
  jobTitle: "",
  email: "",
  phone: "",
  privacy: true,
});

function formatDateDe(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

/**
 * Meeting form — same .rd-form-grid layout as before.
 * Adds two floating-label selects (free date / free time) from the calendar API.
 */
export function DemoRequestForm({
  idPrefix,
  onLocalSubmit,
}: {
  idPrefix: string;
  onLocalSubmit?: () => void;
}) {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [dates, setDates] = useState<string[]>([]);
  const [times, setTimes] = useState<SlotDto[]>([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedStart, setSelectedStart] = useState("");
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [receiptMeta, setReceiptMeta] = useState<{
    slotLabel?: string;
    to?: string;
  } | null>(null);
  const reactId = useId();
  const pid = `${idPrefix}-${reactId}`;

  const set =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
    };

  const loadDates = useCallback(async () => {
    setLoadingSlots(true);
    try {
      const res = await fetch("/api/booking/free-dates");
      const data = await res.json();
      if (res.ok) setDates(data.dates || []);
    } catch {
      /* keep form usable; selects stay empty */
    } finally {
      setLoadingSlots(false);
    }
  }, []);

  useEffect(() => {
    void loadDates();
  }, [loadDates]);

  const onDateChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const day = e.target.value;
    setSelectedDate(day);
    setSelectedStart("");
    setTimes([]);
    setSubmitError(null);
    if (!day) return;
    setLoadingSlots(true);
    try {
      const res = await fetch(
        `/api/booking/free-times?date=${encodeURIComponent(day)}`,
      );
      const data = await res.json();
      if (res.ok) setTimes(data.times || []);
    } catch {
      setTimes([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const onTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStart(e.target.value);
    setSubmitError(null);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const slot = times.find((t) => t.start === selectedStart);
    if (!selectedDate || !slot) {
      setSubmitError("Bitte freies Datum und Uhrzeit wählen.");
      return;
    }

    // Book on calendar; then show the same success shell as before
    try {
      const res = await fetch("/api/booking/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          company: form.company,
          phone: form.phone,
          notes: form.jobTitle ? `Position: ${form.jobTitle}` : "",
          start: slot.start,
          end: slot.end,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || data.message || "Buchung fehlgeschlagen");
      }
      setReceiptMeta({
        slotLabel: `${formatDateDe(slot.date)} · ${slot.time_label}–${slot.end_time_label}`,
        to: data.receipt?.to || form.email,
      });
      setSubmitted(true);
      if (onLocalSubmit) {
        window.setTimeout(() => onLocalSubmit(), 2800);
      }
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : String(err));
    }
  };

  if (submitted) {
    return (
      <div className="rd-form-success" data-testid={`${idPrefix}-success`}>
        <h4>Vielen Dank.</h4>
        <p style={{ fontSize: 16, marginTop: 8 }}>
          Wir haben Ihr Interesse an einem persönlichen Gespräch notiert. Das
          Organisationsteam von TEG meldet sich unverbindlich bei Ihnen, ohne
          Paket-Verkaufsdruck.
          {receiptMeta?.slotLabel
            ? ` Ihr Termin: ${receiptMeta.slotLabel}.`
            : ""}
          {receiptMeta?.to
            ? ` Eine Bestätigung geht an ${receiptMeta.to}.`
            : ""}
        </p>
      </div>
    );
  }

  return (
    <form
      className="rd-form-grid"
      onSubmit={(ev) => void handleSubmit(ev)}
      data-testid={`${idPrefix}-form`}
      data-booking-journey="date-time-details-receipt"
      noValidate
      action="#"
      method="dialog"
    >
      {/* Calendar free slots — same floating-label field chrome as text inputs */}
      <div
        className={`rd-field${selectedDate ? " select-filled" : ""}`}
        data-testid={`${idPrefix}-step-date`}
      >
        <select
          id={`${pid}-date`}
          name="meetingDate"
          value={selectedDate}
          onChange={(ev) => void onDateChange(ev)}
          aria-label="Freies Datum*"
          data-testid={`${idPrefix}-date-select`}
          required
        >
          <option value="">
            {loadingSlots && !dates.length ? "Lädt…" : "Bitte wählen"}
          </option>
          {dates.map((d) => (
            <option key={d} value={d}>
              {formatDateDe(d)}
            </option>
          ))}
        </select>
        <label htmlFor={`${pid}-date`}>Datum*</label>
      </div>
      <div
        className={`rd-field${selectedStart ? " select-filled" : ""}`}
        data-testid={`${idPrefix}-step-time`}
      >
        <select
          id={`${pid}-time`}
          name="meetingTime"
          value={selectedStart}
          onChange={onTimeChange}
          aria-label="Freie Uhrzeit*"
          data-testid={`${idPrefix}-time-select`}
          required
          disabled={!selectedDate || loadingSlots}
        >
          <option value="">
            {!selectedDate
              ? "Zuerst Datum"
              : loadingSlots
                ? "Lädt…"
                : "Bitte wählen"}
          </option>
          {times.map((t) => (
            <option key={t.start} value={t.start}>
              {t.time_label}–{t.end_time_label}
            </option>
          ))}
        </select>
        <label htmlFor={`${pid}-time`}>Uhrzeit*</label>
      </div>

      <div className="rd-field">
        <input
          id={`${pid}-first`}
          name="firstName"
          type="text"
          placeholder=" "
          value={form.firstName}
          onChange={set("firstName")}
          aria-label="Vorname*"
          autoComplete="given-name"
        />
        <label htmlFor={`${pid}-first`}>Vorname*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-last`}
          name="lastName"
          type="text"
          placeholder=" "
          value={form.lastName}
          onChange={set("lastName")}
          aria-label="Nachname*"
          autoComplete="family-name"
        />
        <label htmlFor={`${pid}-last`}>Nachname*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-company`}
          name="company"
          type="text"
          placeholder=" "
          value={form.company}
          onChange={set("company")}
          aria-label="Unternehmen*"
          autoComplete="organization"
        />
        <label htmlFor={`${pid}-company`}>Unternehmen*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-job`}
          name="jobTitle"
          type="text"
          placeholder=" "
          value={form.jobTitle}
          onChange={set("jobTitle")}
          aria-label="Position*"
          autoComplete="organization-title"
        />
        <label htmlFor={`${pid}-job`}>Position*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-email`}
          name="email"
          type="email"
          placeholder=" "
          value={form.email}
          onChange={set("email")}
          aria-label="E-Mail*"
          autoComplete="email"
        />
        <label htmlFor={`${pid}-email`}>E-Mail*</label>
      </div>
      <div className="rd-field">
        <input
          id={`${pid}-phone`}
          name="phone"
          type="tel"
          placeholder=" "
          value={form.phone}
          onChange={set("phone")}
          aria-label="Telefon*"
          autoComplete="tel"
        />
        <label htmlFor={`${pid}-phone`}>Telefon*</label>
      </div>
      <div className="rd-privacy-row">
        <input
          id={`${pid}-privacy`}
          name="privacyOptin"
          type="checkbox"
          className="rd-privacy-checkbox"
          checked={form.privacy}
          onChange={set("privacy")}
          aria-label="Privacy Optin"
          data-testid={`${idPrefix}-privacy-optin`}
        />
        <label htmlFor={`${pid}-privacy`} className="rd-privacy">
          Mit dem Absenden erklären Sie sich einverstanden, dass TEG e. V. Ihre
          Angaben zur Kontaktaufnahme verarbeitet. Details in der{" "}
          <a
            href="/privacy-policy"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            Datenschutzerklärung
          </a>
          .
        </label>
      </div>
      {submitError && (
        <p
          className="rd-field rd-field--full"
          role="alert"
          data-testid={`${idPrefix}-error`}
          style={{
            gridColumn: "1 / -1",
            border: 0,
            minHeight: 0,
            marginTop: 12,
            color: "#b91c1c",
            fontSize: 14,
          }}
        >
          {submitError}
        </p>
      )}
      <button
        type="submit"
        className="rd-submit"
        data-testid={`${idPrefix}-submit`}
      >
        Gespräch anfragen
      </button>
    </form>
  );
}

/**
 * ARCHIVED 2026-08-04 — black sponsor / network card (rd-brands).
 * Code retained for easy restore; not rendered on /request-demo.
 * Partner logos: SVG wordmarks only with invert on dark bar.
 * Photo/AVIF marks (bmw.avif, mckinsey.avif) invert into white blobs; excluded.
 */
const ARCHIVED_BRAND_LOGOS = [
  { src: "/shared/logos/siemens.svg", alt: "Siemens", invert: true },
  { src: "/shared/logos/airbus.svg", alt: "Airbus", invert: true },
  {
    src: "/shared/logos/roland-berger.svg",
    alt: "Roland Berger",
    invert: true,
  },
  {
    src: "/shared/logos/hypovereinsbank.svg",
    alt: "HypoVereinsbank",
    invert: true,
  },
];

/** Flip to true to restore the black sponsor card under the hero. */
const SHOW_ARCHIVED_BRANDS_SECTION = false;

/** Archived black sponsor card — code kept; gated by SHOW_ARCHIVED_BRANDS_SECTION. */
function ArchivedBrandsSection() {
  return (
    <section className="rd-brands" aria-label="TEG Netzwerk">
      <div className="rd-brands-inner">
        <div className="rd-brands-label">
          Formate &amp; Partner im TEG-Netzwerk
        </div>
        <div className="rd-brands-logos">
          {ARCHIVED_BRAND_LOGOS.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              height={28}
              className={logo.invert ? "rd-logo-invert" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Single proof-strip facts (merged PROOF_CARDS + STATS + testimonial). */
const PROOF_FACTS = [
  {
    metric: "ca. 125",
    label: "Teilnehmer",
    meta: "Auswahl statt offener Massenverkauf",
  },
  {
    metric: "1 Tag",
    label: "Konferenzformat",
    meta: "Vorträge, Panels und Workshops",
  },
  {
    metric: "8.12.2026",
    label: "München",
    meta: "Bei der MaibornWolff GmbH",
  },
] as const;

/**
 * Final CV-approved journey media (t3 + t6 LI rebind).
 * card-*.jpg demoted (not primary heroes).
 * Local TEG photography preferred over scraped LinkedIn recap graphics.
 */
const JOURNEY_MEDIA = {
  hero: {
    src: `${ASSET}/hero-bg.jpg`,
    alt: "Automation & Politics X Supply Chain Conference — Konferenzlocation mit Bühnen-LED",
    width: 1280,
    height: 720,
    videoSrc: HERO_ZOOM_VIDEO,
  },
} as const;

/** AI Consulting Conference 2026 — Dropbox _DSC3377.zip slideshow (2.5s). */
const AI_CONSULTING_SLIDES = [
  {
    src: `${ASSET}/ai-consulting-2026/slide-01.webp`,
    alt: "AI Consulting Conference 2026 — Foto 1",
    width: 1919,
    height: 1280,
  },
  {
    src: `${ASSET}/ai-consulting-2026/slide-02.webp`,
    alt: "AI Consulting Conference 2026 — Foto 2",
    width: 1920,
    height: 1280,
  },
  {
    src: `${ASSET}/ai-consulting-2026/slide-03.webp`,
    alt: "AI Consulting Conference 2026 — Foto 3",
    width: 1920,
    height: 1280,
  },
  {
    src: `${ASSET}/ai-consulting-2026/slide-04.webp`,
    alt: "AI Consulting Conference 2026 — Foto 4",
    width: 1920,
    height: 1280,
  },
  {
    src: `${ASSET}/ai-consulting-2026/slide-05.webp`,
    alt: "AI Consulting Conference 2026 — Foto 5",
    width: 1920,
    height: 1280,
  },
  {
    src: `${ASSET}/ai-consulting-2026/slide-06.webp`,
    alt: "AI Consulting Conference 2026 — Foto 6",
    width: 1920,
    height: 1280,
  },
  {
    src: `${ASSET}/ai-consulting-2026/slide-07.webp`,
    alt: "AI Consulting Conference 2026 — Foto 7",
    width: 1920,
    height: 1280,
  },
  {
    src: `${ASSET}/ai-consulting-2026/slide-08.webp`,
    alt: "AI Consulting Conference 2026 — Foto 8",
    width: 1920,
    height: 1280,
  },
] as const;

const SLIDESHOW_INTERVAL_MS = 2500;

/**
 * Exactly two full-viewport past conferences (heading only — no body copy).
 * AI Consulting: 10. Juni 2026, Netlight / Netlight Studios, Prannerstraße 4, München.
 * Frontier Tech: 10. Dezember 2025, MaibornWolff Drygalski-Allee 25, co-hosted TEG + PushQuantum.
 */
const PAST_CONFERENCES = [
  {
    id: "ai-consulting-2026",
    title: "AI Consulting Conference 2026",
    slides: AI_CONSULTING_SLIDES,
    /** Fallback single poster if slides empty */
    src: AI_CONSULTING_SLIDES[0].src,
    alt: "AI Consulting Conference 2026",
    width: AI_CONSULTING_SLIDES[0].width,
    height: AI_CONSULTING_SLIDES[0].height,
  },
  {
    id: "frontier-tech-2025",
    title: "Frontier Tech Conference 2025",
    slides: null,
    src: "/events/converted/frontier-tech-conference-2025.webp",
    alt: "Frontier Tech Conference 2025",
    width: 1600,
    height: 1067,
  },
] as const;

type SlideItem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Crossfade slideshow for past-conference media (interval ms fixed). */
const ConferenceSlideshow: React.FC<{
  slides: readonly SlideItem[];
  intervalMs?: number;
}> = ({ slides, intervalMs = SLIDESHOW_INTERVAL_MS }) => {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  useEffect(() => {
    if (slides.length <= 1 || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [slides.length, intervalMs, reduceMotion]);

  return (
    <div
      className="rd-conference-slideshow"
      data-testid="ai-consulting-slideshow"
      data-slide-count={slides.length}
      data-interval-ms={intervalMs}
      aria-roledescription="carousel"
      aria-label="AI Consulting Conference 2026 Fotos"
    >
      {slides.map((slide, i) => (
        <img
          key={slide.src}
          className={
            i === active
              ? "rd-conference-slide rd-conference-slide--active"
              : "rd-conference-slide"
          }
          src={slide.src}
          alt={slide.alt}
          width={slide.width}
          height={slide.height}
          loading={i === 0 ? "eager" : "lazy"}
          decoding="async"
          aria-hidden={i === active ? undefined : true}
        />
      ))}
    </div>
  );
};

const BOOKING_SECTION_ID = "termin-buchen";
/** No-friction nudge: reveal hero CTA after this idle (no scroll) at top. */
const HERO_CTA_IDLE_MS = 5000;

const RequestDemo: React.FC = () => {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [heroProgress, setHeroProgress] = useState(0);
  /** Idle nudge revealed after HERO_CTA_IDLE_MS with no scroll at top. */
  const [ctaRevealed, setCtaRevealed] = useState(false);
  const heroPinRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const videoReadyRef = useRef(false);
  const ctaRevealedRef = useRef(false);
  const formatHeadingRef = useRef<HTMLHeadingElement>(null);
  const formatPinRef = useRef<HTMLDivElement>(null);
  const formatVideoRef = useRef<HTMLVideoElement>(null);
  const formatVideoReadyRef = useRef(false);
  const [formatPhase, setFormatPhase] = useState<
    "idle" | "loaded-static" | "scrub"
  >("idle");

  /** Jump past scrub pin + journey to the bottom in-house booking block. */
  const scrollToBooking = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    const el = document.getElementById(BOOKING_SECTION_ID);
    if (!el) return;
    const pageEl = document.querySelector(".rd-page");
    const headerH =
      parseFloat(
        getComputedStyle(pageEl || document.body).getPropertyValue(
          "--rd-header-h",
        ),
      ) || 92;
    // Absolute Y accounts for tall sticky hero pin (scrollIntoView alone can undershoot)
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 12;
    window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
    try {
      window.history.replaceState(null, "", `#${BOOKING_SECTION_ID}`);
    } catch {
      /* ignore */
    }
  }, []);

  // Load Calendly embed script once (inline widget reads data-url on mount)
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT}"]`,
    );
    if (existing) return;
    const s = document.createElement("script");
    s.src = CALENDLY_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  /**
   * Low-friction CTA: hidden until the visitor sits still at the hero top
   * for 5s (likely hasn't discovered scroll). Any scroll/wheel/touch resets
   * the timer; leaving the top cancels until they return to the top.
   */
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const atHeroTop = () =>
      (typeof window !== "undefined" ? window.scrollY : 0) <= 12;

    const clearIdle = () => {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
    };

    const armIdle = () => {
      clearIdle();
      if (ctaRevealedRef.current) return;
      if (!atHeroTop()) return;
      timer = setTimeout(() => {
        timer = null;
        if (!atHeroTop() || ctaRevealedRef.current) return;
        ctaRevealedRef.current = true;
        setCtaRevealed(true);
      }, HERO_CTA_IDLE_MS);
    };

    const onScrollActivity = () => {
      if (!atHeroTop()) {
        clearIdle();
        return;
      }
      if (!ctaRevealedRef.current) armIdle();
    };

    armIdle();
    window.addEventListener("scroll", onScrollActivity, { passive: true });
    window.addEventListener("wheel", onScrollActivity, { passive: true });
    window.addEventListener("touchmove", onScrollActivity, { passive: true });
    window.addEventListener("keydown", onScrollActivity);

    return () => {
      clearIdle();
      window.removeEventListener("scroll", onScrollActivity);
      window.removeEventListener("wheel", onScrollActivity);
      window.removeEventListener("touchmove", onScrollActivity);
      window.removeEventListener("keydown", onScrollActivity);
    };
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;
    const pin = heroPinRef.current;
    if (!video || !pin) return;

    let alive = true;
    let seeking = false;
    let targetT = 0;
    let lastUi = -1;
    /** Last applied glass flag — update immediately on finished-edge cross. */
    let lastGlass = false;
    let raf = 0;
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.preload = "auto";
    video.pause();

    /** Prime decoder so first paint isn't an empty layer (esp. iOS). */
    const kickDecode = () => {
      if (!alive || !videoReadyRef.current) return;
      const p = video.play();
      if (p && typeof p.then === "function") {
        p.then(() => {
          if (!alive) return;
          video.pause();
          try {
            if (video.currentTime < 0.001) video.currentTime = 0;
          } catch {
            /* ignore */
          }
        }).catch(() => {
          /* autoplay policy — ignore */
        });
      } else {
        video.pause();
      }
    };

    const markReady = () => {
      const wasReady = videoReadyRef.current;
      videoReadyRef.current = true;
      video.pause();
      seeking = false;
      if (!wasReady) kickDecode();
    };
    if (video.readyState >= 1) markReady();
    video.addEventListener("loadedmetadata", markReady);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);

    const onSeeked = () => {
      seeking = false;
      // Immediately apply latest target if scroll moved during seek
      if (
        videoReadyRef.current &&
        Math.abs(video.currentTime - targetT) > 1 / 90
      ) {
        seeking = true;
        try {
          video.currentTime = targetT;
        } catch {
          seeking = false;
        }
      }
    };
    video.addEventListener("seeked", onSeeked);

    const tick = () => {
      if (!alive) return;
      raf = 0;

      const rect = pin.getBoundingClientRect();
      const progress = heroPinProgress(
        rect.top,
        pin.offsetHeight,
        window.innerHeight,
      );

      // DOM attribute always live (no React batching lag)
      pin.dataset.progress = progress.toFixed(3);

      // Fallback stays UNDER the video at full opacity so iOS blank seeks
      // never leave only the teal wash. Video paints on top when frames exist.
      const fallback = pin.querySelector<HTMLElement>(".rd-hero-bg-fallback");
      if (fallback) {
        fallback.style.opacity = "1";
        fallback.style.visibility = "visible";
      }
      // Video visible once metadata ready (all-intra seeks).
      video.style.opacity = videoReadyRef.current ? "1" : "0";

      // Hero CTA: hidden until idle reveal; then solid→fade with scrub (40–50%)
      const formLayer = pin.querySelector<HTMLElement>(".rd-hero-inner");
      if (formLayer) {
        const formOp = ctaRevealedRef.current ? heroFormOpacity(progress) : 0;
        formLayer.style.opacity = String(formOp);
        formLayer.style.pointerEvents =
          formOp <= 0.01 || !ctaRevealedRef.current ? "none" : "auto";
      }

      if (videoReadyRef.current) {
        const duration = video.duration;
        if (Number.isFinite(duration) && duration > 0) {
          if (!video.paused) video.pause();
          targetT = progressToVideoTime(progress, duration);
          if (!seeking && Math.abs(video.currentTime - targetT) > 1 / 90) {
            seeking = true;
            try {
              video.currentTime = targetT;
            } catch {
              seeking = false;
            }
          }
        }
      }

      // Glass header: only after sticky hero scrub finishes (progress ≥ 1).
      // Apply immediately on the finished edge — never skip via UI throttle.
      const glassOn = headerGlassEligible(progress);
      if (glassOn !== lastGlass) {
        lastGlass = glassOn;
        setHeaderScrolled(glassOn);
      }

      // Other React UI (progress display) stays throttled.
      if (Math.abs(progress - lastUi) >= 0.01) {
        lastUi = progress;
        setHeroProgress(progress);
      }

      // Always keep rAF alive while the pin intersects the viewport
      const visible = rect.bottom > 0 && rect.top < window.innerHeight + 4;
      if (visible || seeking || progress < 1) {
        raf = window.requestAnimationFrame(tick);
      }
    };

    const kick = () => {
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("wheel", kick, { passive: true });
    window.addEventListener("touchmove", kick, { passive: true });
    window.addEventListener("resize", kick);
    kick();

    return () => {
      alive = false;
      window.removeEventListener("scroll", kick);
      window.removeEventListener("wheel", kick);
      window.removeEventListener("touchmove", kick);
      window.removeEventListener("resize", kick);
      video.removeEventListener("loadedmetadata", markReady);
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("seeked", onSeeked);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  // Format section: load when header crosses "Das TEG Konferenz Format";
  // static until header hits video top; then sticky scrub like hero.
  useEffect(() => {
    const heading = formatHeadingRef.current;
    const pin = formatPinRef.current;
    const video = formatVideoRef.current;
    if (!heading || !pin || !video) return;

    let alive = true;
    let seeking = false;
    let seekStartedAt = 0;
    let targetT = 0;
    let raf = 0;
    let lastPhase: "idle" | "loaded-static" | "scrub" = "idle";
    let srcAttached = false;
    /** One-shot first-frame hold after metadata (do not re-zero on canplay). */
    let heldFirstFrame = false;

    const headerEl = () =>
      document.querySelector<HTMLElement>(".rd-header") || null;

    const attachSrc = () => {
      if (srcAttached) return;
      video.src = FORMAT_SCRUB_VIDEO;
      video.load();
      srcAttached = true;
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      video.pause();
    };

    // Mirror hero: ready flag only — never reset currentTime here (canplay
    // re-fires after seeks and would pin scrub time back to 0).
    const markReady = () => {
      formatVideoReadyRef.current = true;
      video.pause();
      seeking = false;
      if (!heldFirstFrame) {
        heldFirstFrame = true;
        targetT = 0;
        try {
          if (video.currentTime > 0.001) {
            seeking = true;
            seekStartedAt = performance.now();
            video.currentTime = 0;
          }
        } catch {
          seeking = false;
        }
      }
    };

    const onSeeked = () => {
      seeking = false;
      if (
        formatVideoReadyRef.current &&
        Math.abs(video.currentTime - targetT) > 1 / 90
      ) {
        seeking = true;
        seekStartedAt = performance.now();
        try {
          video.currentTime = targetT;
        } catch {
          seeking = false;
        }
      }
    };

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.pause();
    if (video.readyState >= 1) markReady();
    video.addEventListener("loadedmetadata", markReady);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("canplay", markReady);
    video.addEventListener("seeked", onSeeked);

    const tick = () => {
      if (!alive) return;
      raf = 0;
      const header = headerEl();
      const media = pin.querySelector<HTMLElement>(".rd-format-video-media");
      if (!header || !media) {
        raf = window.requestAnimationFrame(tick);
        return;
      }
      const headerBottom = header.getBoundingClientRect().bottom;
      const headingTop = heading.getBoundingClientRect().top;
      // Prefer pin top as the section's upper edge (stable under sticky child).
      const videoTop = pin.getBoundingClientRect().top;
      const phase = formatVideoPhase(headerBottom, headingTop, videoTop);

      if (phase !== lastPhase) {
        lastPhase = phase;
        setFormatPhase(phase);
        pin.dataset.formatPhase = phase;
      }

      if (formatVideoShouldLoad(phase)) {
        attachSrc();
        if (video.readyState >= 1 && !formatVideoReadyRef.current) markReady();
      }

      if (!video.paused) video.pause();
      // Opacity: visible once ready and past idle (asset loaded)
      video.style.opacity =
        formatVideoShouldLoad(phase) && formatVideoReadyRef.current ? "1" : "0";

      // Recover stuck seeking (sparse network / browser no seeked)
      if (seeking && performance.now() - seekStartedAt > 280) {
        seeking = false;
      }

      if (formatVideoScrubActive(phase) && formatVideoReadyRef.current) {
        // Same pin progress as hero (sticky runway container rect)
        const progress = heroPinProgress(
          pin.getBoundingClientRect().top,
          pin.offsetHeight,
          window.innerHeight,
        );
        pin.dataset.progress = progress.toFixed(3);
        const duration = video.duration;
        if (Number.isFinite(duration) && duration > 0) {
          targetT = progressToVideoTime(progress, duration);
          if (!seeking && Math.abs(video.currentTime - targetT) > 1 / 90) {
            seeking = true;
            seekStartedAt = performance.now();
            try {
              video.currentTime = targetT;
            } catch {
              seeking = false;
            }
          }
        }
      } else if (formatVideoShouldLoad(phase) && formatVideoReadyRef.current) {
        // Static: hold first frame until scrub gate
        targetT = 0;
        if (!seeking && video.currentTime > 0.02) {
          seeking = true;
          seekStartedAt = performance.now();
          try {
            video.currentTime = 0;
          } catch {
            seeking = false;
          }
        }
        pin.dataset.progress = "0.000";
      } else {
        pin.dataset.progress = "0.000";
      }

      const pinRect = pin.getBoundingClientRect();
      const visible =
        pinRect.bottom > 0 && pinRect.top < window.innerHeight + 4;
      if (visible || seeking || lastPhase !== "idle") {
        raf = window.requestAnimationFrame(tick);
      }
    };

    const kick = () => {
      if (!raf) raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("wheel", kick, { passive: true });
    window.addEventListener("touchmove", kick, { passive: true });
    window.addEventListener("resize", kick);
    kick();

    return () => {
      alive = false;
      window.removeEventListener("scroll", kick);
      window.removeEventListener("wheel", kick);
      window.removeEventListener("touchmove", kick);
      window.removeEventListener("resize", kick);
      video.removeEventListener("loadedmetadata", markReady);
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("canplay", markReady);
      video.removeEventListener("seeked", onSeeked);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="rd-page" data-testid="request-demo-page">
      <header
        className={`rd-header${headerScrolled ? " rd-header--scrolled" : ""}`}
        role="banner"
        data-scrolled={headerScrolled ? "true" : "false"}
      >
        <div className="rd-header-inner">
          <a href="https://teg-ev.de/" aria-label="TEG e.V. Startseite">
            <img
              className="rd-logo"
              src={`${ASSET}/teg-logo-white.svg`}
              alt="TEG e.V., The Entrepreneurial Group"
              width={246}
              height={70}
            />
          </a>
          <div className="rd-header-actions">
            <a className="rd-link-login" href="https://teg-ev.de/">
              TEG e.V.
            </a>
            <button
              type="button"
              className="rd-btn-header-demo"
              onClick={scrollToBooking}
              data-booking-cta="scroll-to-termin-buchen"
              data-testid="header-gespraech-buchen"
            >
              Gespräch buchen
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Sticky hero: pin until scroll-scrubbed zoom video finishes */}
        <div
          className="rd-hero-scroll"
          ref={heroPinRef}
          data-testid="hero-scroll-pin"
          data-progress={heroProgress.toFixed(3)}
          style={
            {
              "--rd-hero-runway": `${HERO_SCROLL_RUNWAY_VH}vh`,
            } as React.CSSProperties
          }
        >
          <section className="rd-hero" aria-label="Hero">
            {/* Fallback UNDER video — stays painted on iOS when seek blanks the video layer */}
            <img
              className="rd-hero-bg rd-hero-bg-fallback"
              src={JOURNEY_MEDIA.hero.src}
              alt=""
              width={JOURNEY_MEDIA.hero.width}
              height={JOURNEY_MEDIA.hero.height}
              aria-hidden="true"
              decoding="async"
            />
            <video
              ref={heroVideoRef}
              className="rd-hero-bg rd-hero-bg-video"
              src={JOURNEY_MEDIA.hero.videoSrc}
              poster={JOURNEY_MEDIA.hero.src}
              muted
              playsInline
              preload="auto"
              autoPlay={false}
              controls={false}
              disablePictureInPicture
              aria-label={JOURNEY_MEDIA.hero.alt}
              data-testid="hero-zoom-video"
            />
            <div
              className={
                "rd-hero-inner rd-hero-inner--cta-only" +
                (ctaRevealed ? " rd-hero-inner--cta-revealed" : "")
              }
              data-testid="hero-form-layer"
              data-cta-revealed={ctaRevealed ? "true" : "false"}
              aria-hidden={!ctaRevealed}
            >
              <button
                type="button"
                className="rd-garden-cta"
                onClick={scrollToBooking}
                data-booking-cta="scroll-to-termin-buchen"
                data-testid="hero-gespraech-buchen"
                aria-label="Gespräch buchen — zum Termin am Seitenende"
                tabIndex={ctaRevealed ? 0 : -1}
              >
                <span className="rd-garden-cta-halo" aria-hidden="true" />
                <span className="rd-garden-cta-label">
                  Gespräch Buchen
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="rd-garden-cta-arrow"
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
                </span>
              </button>
            </div>
          </section>
        </div>

        {/*
          ARCHIVED 2026-08-04: black sponsor card.
          Restore: set SHOW_ARCHIVED_BRANDS_SECTION to true (or render <ArchivedBrandsSection />).
        */}
        {SHOW_ARCHIVED_BRANDS_SECTION ? <ArchivedBrandsSection /> : null}

        {/* Post-hero: TEG conference format thesis */}
        <section
          className="rd-format"
          aria-label="Das TEG Konferenz Format"
          data-section="format"
          data-testid="format-section"
        >
          <div className="rd-format-inner">
            <p className="rd-garden-kicker">Konferenzformat</p>
            <h2
              className="rd-format-title"
              ref={formatHeadingRef}
              data-testid="format-heading"
            >
              Das TEG Konferenz Format
            </h2>
            <p className="rd-format-lead">
              Das TEG Konferenz Format ist ein ganztägiges, industriebezogenes
              Summit: rund 150 Verantwortliche und Entscheidungsträger der
              jeweiligen Industrie als Gäste und 10–20 Vorstände aus der
              Industrie als Speaker.
            </p>
            <p className="rd-format-body">
              Im Mittelpunkt steht kuratierter Wissensübertrag, der unterhaltsam
              vermittelt wird, inklusive reichlicher Tagesverpflegung. So sollen
              Lernen und Netzwerken der Fach- und Führungsverantwortlichen nach
              bestem Wissen und Gewissen möglich werden.
            </p>
          </div>
        </section>

        {/* Format sticky scrub: load when header crosses heading; scrub when
            header crosses this section top (same pin math as hero). */}
        <div
          className="rd-format-video-scroll"
          ref={formatPinRef}
          data-testid="format-video-pin"
          data-format-phase={formatPhase}
          style={
            {
              "--rd-format-runway": `${FORMAT_SCROLL_RUNWAY_VH}vh`,
            } as React.CSSProperties
          }
        >
          <section
            className="rd-format-video-media"
            aria-label="TEG Konferenz Format Video"
            data-section="format-video"
            data-testid="format-video-section"
          >
            {/* Always mounted so scrub ref/listeners stay stable; src attaches
                only after header crosses the format heading (idle → load). */}
            <video
              ref={formatVideoRef}
              className="rd-format-video-el"
              muted
              playsInline
              preload="none"
              autoPlay={false}
              controls={false}
              disablePictureInPicture
              data-testid="format-scrub-video"
              data-format-phase={formatPhase}
              aria-label="TEG Konferenz Format — scroll-gekoppeltes Video"
              style={{ opacity: formatPhase === "idle" ? 0 : undefined }}
            />
            {formatPhase === "idle" ? (
              <div
                className="rd-format-video-placeholder"
                data-testid="format-video-placeholder"
                aria-hidden="true"
              />
            ) : null}
          </section>
        </div>

        {/* ——— Vertical journey: proof + two full-screen past conferences ——— */}
        <div className="rd-journey" data-testid="rd-journey">
          {/* S1 Pain shell retained as empty marker for layout continuity */}
          <section
            className="rd-garden rd-garden--pain rd-garden--pain-collapsed"
            aria-label="Pain section"
            data-section="pain"
            data-testid="pain-section"
          />

          {/* Two full-viewport past conferences — media/slideshow edge-to-edge */}
          <section
            className="rd-past-conferences"
            aria-label="Bisherige TEG-Konferenzen"
            data-section="past-conferences"
          >
            {PAST_CONFERENCES.map((conf) => (
              <article
                key={conf.id}
                className="rd-past-conference"
                data-conference={conf.title}
                data-conference-id={conf.id}
              >
                <div className="rd-garden-media rd-past-conference-media">
                  {conf.slides ? (
                    <ConferenceSlideshow
                      slides={conf.slides}
                      intervalMs={SLIDESHOW_INTERVAL_MS}
                    />
                  ) : (
                    <img
                      src={conf.src}
                      alt={conf.alt}
                      width={conf.width}
                      height={conf.height}
                      loading="lazy"
                    />
                  )}
                  <h2 className="rd-past-conference-title">{conf.title}</h2>
                </div>
              </article>
            ))}
          </section>
        </div>

        {/* Proof strip directly above the booking calendar */}
        <section
          className="rd-proof-strip"
          aria-label="Konferenz auf einen Blick"
          data-section="proof"
        >
          <div className="rd-proof-strip-inner">
            <h2 className="rd-proof-title">
              Automation &amp; Politics X Supply Chain conference
            </h2>
            <ul className="rd-proof-metrics">
              {PROOF_FACTS.map((f) => (
                <li key={f.metric} className="rd-proof-metric">
                  <span className="rd-proof-number">{f.metric}</span>
                  <span className="rd-proof-label">{f.label}</span>
                  <span className="rd-proof-meta">{f.meta}</span>
                </li>
              ))}
            </ul>
            <div className="rd-proof-people">
              <p>
                <strong>Conference Team Leads:</strong> Corbinian Massinger
                &amp; Leonard Beckmann
              </p>
              <p>
                <strong>Head of Strategie &amp; Partners:</strong> Jonathan
                Babelotzky
              </p>
            </div>
          </div>
        </section>

        {/* Bottom booking: Calendly (full height) + host photo to the right */}
        <section
          id={BOOKING_SECTION_ID}
          className="rd-cta-band-wrap rd-cta-band-wrap--scheduler"
          aria-label="Termin buchen"
          data-testid="bottom-conversion-form"
        >
          <div
            className="rd-calendly-layout"
            data-testid="calendly-booking-layout"
          >
            <div className="rd-calendly-main">
              <div
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                data-testid="calendly-inline-widget"
                style={{ minWidth: 320, height: "100%" }}
              />
            </div>
            <aside
              className="rd-calendly-aside"
              data-testid="calendly-hosts-photo"
            >
              <figure className="rd-calendly-hosts-photo">
                <img
                  src={HOSTS_PHOTO}
                  alt="Leonard Beckmann und Corbinian Massinger"
                  width={960}
                  height={720}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
              <p className="rd-calendly-hosts-caption">
                Mit <strong>Corbinian Massinger</strong> &amp;{" "}
                <strong>Leonard Beckmann</strong>
              </p>
            </aside>
          </div>
        </section>
      </main>

      <footer className="rd-footer">
        <span>© 2026 TEG e. V. · The Entrepreneurial Group</span>
        <a href="/privacy-policy">Datenschutz</a>
        <a href="/imprint">Impressum</a>
        <a href="https://teg-ev.de/">teg-ev.de</a>
      </footer>
    </div>
  );
};

export default RequestDemo;

/**
 * Required primary section assets (journey + frozen hero).
 * Unused stock/scrape assets removed from public/request-demo.
 */
export const REQUEST_DEMO_LOCAL_ASSETS = [
  `${ASSET}/teg-logo-white.svg`,
  JOURNEY_MEDIA.hero.src,
  HERO_ZOOM_VIDEO,
  FORMAT_SCRUB_VIDEO,
  ...AI_CONSULTING_SLIDES.map((s) => s.src),
  PAST_CONFERENCES[1].src,
  HOSTS_PHOTO,
] as const;

/** Previously demoted stock cards — deleted from public/ (not shipped). */
export const REQUEST_DEMO_DEMOTED_CARD_ASSETS = [] as const;

/** Locked conversion phrases — keep in sync with scripts/verify-request-demo.mjs REQUIRED_COPY. */
export const LOCATION_LP_REQUIRED_PHRASES = [
  "Persönliches Gespräch",
  "Supply Chain",
  "Gastgeber",
  "ca. 125",
  "München",
  "2026",
  "Gespräch buchen",
  "TEG e. V.",
  "German Supply Chain Conference",
  "Privacy Optin",
  "Gespräch anfragen",
  "Politics X Supply Chain Conference",
] as const;

export const LOCATION_LP_BANNED_PHRASES = [
  "Make every experience count",
  "Qualtrics Experience Management",
  "Request demo",
  "XM for Customer Experience",
  "Shake Shack",
  "Capterra",
] as const;
