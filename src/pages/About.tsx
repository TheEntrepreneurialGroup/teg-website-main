import React from "react";
import { useIntl } from "react-intl";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "framer-motion";
import YblaJourney from "@/components/sections/YblaJourney";
import TegGardenStatement from "@/components/sections/TegGardenStatement";
import GardenCtaPair from "@/components/sections/GardenCtaPair";
import HeritageGardenSection from "@/components/sections/HeritageGardenSection";
import OptimizedImage from "@/components/OptimizedImage";
import { useScrollIntent } from "@/hooks/useScrollIntent";

const APPLY_FORM_URL = "https://tally.so/r/yPDXd4";

/* ─────────────────────────────────────────────────────────────
   ComplimentVideoSection
   Full-width autoplay video with an immersive garden-like overlay:
   • muted by default, minimal sound-toggle button
   • attribution line bottom-left
   • subtle animated garden particles in the overlay
───────────────────────────────────────────────────────────── */
const NUM_PARTICLES = 18;

function createSeededRandom(seed: number) {
  let state = seed;
  return () => {
    state = (state * 16807) % 2147483647;
    return (state - 1) / 2147483646;
  };
}

const gardenParticles = Array.from({ length: NUM_PARTICLES }, (_, i) => {
  const random = createSeededRandom(i + 1);
  return {
    id: i,
    x: random() * 100,
    delay: random() * 6,
    duration: 7 + random() * 8,
    size: 3 + random() * 5,
    opacity: 0.18 + random() * 0.28,
    driftY: 260 + random() * 200,
    driftX: (random() - 0.5) * 40,
  };
});

const ComplimentVideoSection: React.FC<{ isDe: boolean }> = ({ isDe }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const fallbackRef = React.useRef<HTMLImageElement>(null);
  const [muted, setMuted] = React.useState(true);
  const [showHint, setShowHint] = React.useState(false);
  const [videoEnded, setVideoEnded] = React.useState(false);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    video.muted = next;
    setMuted(next);
    setShowHint(true);
    setTimeout(() => setShowHint(false), 1600);
  };

  const replayVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    if (fallbackRef.current) fallbackRef.current.style.display = "none";
    if (videoRef.current) videoRef.current.style.display = "block";
    video.play();
    setVideoEnded(false);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: "#0a0f1a" }}
    >
      {/* ── Video ───────────────────────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={() => {
          // Show fallback image immediately via DOM, then update state
          if (fallbackRef.current) fallbackRef.current.style.display = "block";
          if (videoRef.current) videoRef.current.style.display = "none";
          setVideoEnded(true);
        }}
        className="block w-full object-cover"
        style={{
          maxHeight: "90vh",
          minHeight: "320px",
          display: videoEnded ? "none" : "block",
        }}
      >
        <source
          src="/shared/teg-compliment-compressed.webm"
          type="video/webm"
        />
        <source src="/shared/teg-compliment-compressed.mp4" type="video/mp4" />
      </video>

      {/* ── Fallback image (shown after video ends) ────────── */}
      <img
        ref={fallbackRef}
        src="/shared/teg-compliment-fallback.jpeg"
        alt=""
        className="block w-full object-cover"
        style={{
          maxHeight: "90vh",
          minHeight: "320px",
          display: videoEnded ? "block" : "none",
        }}
      />

      {/* ── Garden particle overlay ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(6,18,10,0.72) 0%, rgba(6,18,10,0.18) 48%, rgba(6,18,10,0.10) 100%)",
        }}
      >
        {gardenParticles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              bottom: "-6px",
              background: `rgba(134,210,130,${p.opacity})`,
              filter: "blur(1px)",
            }}
            animate={{
              y: [0, -p.driftY],
              opacity: [0, p.opacity, p.opacity * 0.6, 0],
              x: [0, p.driftX],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ── Action CTAs — only after video ends (static image) ── */}
      <AnimatePresence>
        {videoEnded && (
          <motion.div
            key="video-ctas"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-x-0 bottom-14 z-20 flex justify-center px-4 sm:bottom-16 md:bottom-20"
          >
            <div className="pointer-events-auto w-full max-w-md sm:max-w-none">
              <GardenCtaPair
                instant
                className="w-full justify-center"
                items={[
                  {
                    label: isDe ? "Jetzt bewerben" : "Apply now",
                    href: APPLY_FORM_URL,
                    variant: "solid",
                    trackingSource: "Landing — Video",
                  },
                  {
                    label: isDe
                      ? "Gespräch vereinbaren"
                      : "Schedule a conversation",
                    href: "/for-companies#contact",
                    variant: "ghost",
                    trackingSource: "Landing — Video",
                  },
                ]}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Attribution ─────────────────────────────────────── */}
      <div
        className="pointer-events-none absolute bottom-3 left-4 md:bottom-8 md:left-10 max-w-[42%] sm:max-w-none"
        style={{ zIndex: 10 }}
      >
        <p
          className="text-sm font-medium tracking-wide text-white/90 md:text-base"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
        >
          Thomas Uchtmann
          <span className="mx-2 text-white/40">|</span>
          <span className="font-normal text-white/75">
            Geschäftsführer Vertrieb bei HORBACH
          </span>
        </p>
      </div>

      {/* ── Sound toggle (video) / Replay button (image) ──── */}
      <div className="absolute bottom-6 right-6 z-30 md:bottom-8 md:right-10">
        <AnimatePresence>
          {showHint && !videoEnded && (
            <motion.span
              key="hint"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="pointer-events-none absolute -top-8 right-0 whitespace-nowrap rounded-sm px-2 py-1 text-xs font-medium text-white/90"
              style={{ background: "rgba(6,18,10,0.72)" }}
            >
              {muted ? "Ton aus" : "Ton an"}
            </motion.span>
          )}
        </AnimatePresence>
        {videoEnded ? (
          /* ── Replay button ──────────────────────────────── */
          <button
            type="button"
            onClick={replayVideo}
            aria-label="Video erneut abspielen"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-white"
            >
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
            </svg>
          </button>
        ) : (
          /* ── Sound toggle ───────────────────────────────── */
          <button
            type="button"
            onClick={toggleSound}
            aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/35 backdrop-blur-sm transition-colors hover:bg-black/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
          >
            {muted ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-white"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-white"
              >
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
            )}
          </button>
        )}
      </div>
    </section>
  );
};

const About: React.FC = () => {
  const intl = useIntl();
  const isDe = intl.locale.startsWith("de");

  // Shared scroll-intent gate for the hero: drives the H1 crossfade and
  // CTA rendering so everything blooms in unison.
  const heroRef = React.useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const heroPlay = useScrollIntent(heroInView, reduce);

  // -----------------------------------------------------------------------
  // Content — every line below is grounded in a real, persistent source:
  //   • outputs/about-us-2026-05-25/notion/linkedin-self-description-verbatim.md
  //   • outputs/about-us-2026-05-25/notion/leo-feedback-brief-2026-05-15.md
  //   • outputs/about-us-2026-05-25/linkedin/linkedin-teg-feed-fulltext-17posts.json
  // No invented stats, no meta-language about "the repo" or "evidence".
  // -----------------------------------------------------------------------
  const content = {
    hero: {
      eyebrow: isDe ? "Über TEG" : "About TEG",
      title: isDe
        ? "Seit 1986 bauen Studierende bei TEG echte Unternehmen — gemeinsam mit C-Level-Praktikern."
        : "Since 1986, students at TEG build real businesses — together with C-level operators.",
      pitch: isDe
        ? "TEG ist eine der ältesten unternehmerischen Studierendeninitiativen Deutschlands. In München treffen ambitionierte Studierende auf Vorstände, Partner und Gründer — und bauen mit ihnen Projekte, Partnerschaften, Talks und Konferenzen."
        : "TEG is one of Germany's oldest student-led entrepreneurial initiatives. In Munich, ambitious students meet board members, partners and founders — and build projects, partnerships, talks and conferences with them.",
      pillars: isDe
        ? [
            {
              title: "Echte Unternehmen",
              desc: "Reale B2B-Projekte und Revenue-First-Ventures, keine Pitch-Decks.",
            },
            {
              title: "Mittelstand & DAX als Partner",
              desc: "B2B-Partnerschaften mit Mittelstand- und DAX-Häusern.",
            },
            {
              title: "40+ C-Level Alumni",
              desc: "Ein Netzwerk, das Studierende heute mit Vorständen verbindet.",
            },
          ]
        : [
            {
              title: "Real business creation",
              desc: "Real B2B projects and revenue-first ventures, not pitch decks.",
            },
            {
              title: "Mittelstand & DAX partners",
              desc: "B2B partnerships with Mittelstand and DAX-listed companies.",
            },
            {
              title: "40+ C-level alumni",
              desc: "A network that connects today's students with company boards.",
            },
          ],
      tagline: "Create What's Next.",
      cta_students: isDe ? "Für Studierende" : "For Students",
      cta_companies: isDe ? "Für Unternehmen" : "For Companies",
    },

    centralStatement: {
      question: isDe
        ? "Wir stärken den Wirtschaftsstandort Deutschland"
        : "We strengthen Germany as a place of business",
      answer: isDe
        ? "Durch die Ermöglichung eines industrieübergreifenden Austausch Deutscher Führungskräfte."
        : "By enabling cross-industry exchange among German executives.",
      third: isDe
        ? "Als auch durch den Aufbau eines Nachwuchskanals für die Unternehmensführung deutscher Firmen."
        : "And by building a leadership pipeline for the management of German companies.",
    },

    formats: {
      eyebrow: isDe
        ? "Industrieübergreifender Austausch"
        : "Cross-Industry Exchange",
      title: isDe ? "Unsere 3 Formate" : "Our 3 Formats",
      intro: isDe
        ? "TEG veranstaltet keine Massenevents. Jede Veranstaltung ist auf eine definierte Zielgruppe zugeschnitten. Unsere Teilnehmer sind handverlesene führende Persönlichkeiten."
        : "TEG does not host mass events. Every gathering is tailored to a clearly defined audience. Our participants are handpicked leading personalities.",
      items: [
        {
          index: "01",
          name: isDe ? "Industrie-Panel" : "Industry Panel",
          img: "/about/formats/industry-panel.png",
          alt: isDe
            ? "Branchen-Panel mit fünf Führungskräften im Gespräch auf der Bühne"
            : "Industry panel with five executives in conversation on stage",
          lede: isDe
            ? "Eine kleine Runde mit inhaltlich branchenbezogener Tiefe. Lerne Verantwortungsträger mit gemeinsamen Interessen und Kompetenzen kennen."
            : "An intimate circle with genuine sector-specific depth. Meet decision-makers who share your interests and competencies.",
          traits: isDe
            ? [
                "Bis 50 Gäste",
                "Ohne Mikrofon",
                "Festgelegte Industrie, zum Beispiel Automotive, Aerospace oder Health",
                "Speaker: Führungskräfte, C-Level, Gründer und Professoren",
              ]
            : [
                "Up to 50 guests",
                "Without microphone",
                "Defined industry, for example Automotive, Aerospace or Health",
                "Speakers: executives, C-level, founders and professors",
              ],
        },
        {
          index: "02",
          name: "Summit",
          img: "/about/formats/summit.png",
          alt: isDe
            ? "Vortragender präsentiert vor der Folie Multi Stakeholder Management"
            : "Speaker presenting in front of a Multi Stakeholder Management slide",
          lede: isDe
            ? "Eine Handvoll Präsentationen von Entscheidern der gleichen beruflichen Funktion. Wer kommt, sitzt unter Gleichges(t)ellten."
            : "A handful of presentations from decision-makers in the same professional function. Those who attend sit among their peers.",
          traits: isDe
            ? [
                "Bis 80 Gäste",
                "Ohne Mikrofon",
                "Festgelegte Funktion, zum Beispiel Sales oder Marketing",
                "Speaker: Senior Experten, Consultants, Verbandsvorsitzende, Gründer sowie Team- und Abteilungsleitungen",
              ]
            : [
                "Up to 80 guests",
                "Without microphone",
                "Defined function, for example Sales or Marketing",
                "Speakers: senior experts, consultants, association chairs, founders, team and department leads",
              ],
        },
        {
          index: "03",
          name: isDe ? "Konferenz" : "Conference",
          img: "/about/formats/konferenz.png",
          alt: isDe
            ? "Konferenzsaal mit Publikum und Sprecher vor der Leinwand"
            : "Conference hall with audience and speaker in front of the screen",
          lede: isDe
            ? "Erlebe Präsentationen und Panels über einen vollen Tag. Ein Deep-Dive über die Grenzen der Industrien hinweg."
            : "Experience presentations and panels across a full day. A deep dive that reaches beyond the boundaries of industries.",
          traits: isDe
            ? [
                "Bis 150 Gäste",
                "Mit Mikrofon",
                "Festgelegte Industrien, zum Beispiel Software und Management Consulting oder Robotics, Quantum und Aerospace",
              ]
            : [
                "Up to 150 guests",
                "With microphone",
                "Defined industries, for example Software and Management Consulting or Robotics, Quantum and Aerospace",
              ],
        },
      ],
    },

    alumniIntro: {
      title: isDe
        ? "Ein kleiner Ausschnitt unserer YBLA Absolventen"
        : "A small selection of our YBLA graduates",
      intro: isDe
        ? "Drei Jahrzente YBLA formt Entscheider & Führungskräfte."
        : "Three decades of YBLA shape decision-makers & executives.",
      stats: [
        { number: "300+", label: isDe ? "Alumni" : "Alumni" },
        {
          number: "41",
          label: isDe
            ? "Top-Level Führungskräfte in Konzernen"
            : "Top-level executives in corporations",
        },
        {
          number: "40",
          label: isDe
            ? "Top-Level Führungskräfte im Mittelstand"
            : "Top-level executives in SMEs",
        },
        {
          number: "15",
          label: isDe ? "Unternehmensgründer" : "Entrepreneurs / Founders",
        },
      ],
    },

    today: {
      eyebrow: isDe ? "Heute aktiv" : "Active today",
      title: isDe
        ? "Der aktive Jahrgang trägt diese Formate."
        : "The active cohort carries these formats.",
      desc: isDe
        ? "Aufnahme erfolgt jährlich auf Bewerbung. Wer Teil wird, übernimmt früh echte Verantwortung in einer der vier Units."
        : "New members are admitted once a year through an application process. Those who join take real responsibility early in one of the four units.",
      img: "/shared/images/tegtalk-group-WS26.avif",
      alt: isDe ? "Aktiver TEG-Jahrgang 2026" : "Active TEG cohort 2026",
      caption: isDe
        ? "Aktiver TEG-Jahrgang, Wintersemester 2026."
        : "Active TEG cohort, winter semester 2026.",
    },
  };

  const heritageCompanies = isDe
    ? [
        {
          original: "Deutsche BP",
          today: "heute bp",
          logo: "/about/heritage/logos/bp.svg",
          founder: "Dr. Helmuth Buddenberg",
          logoClassName: "max-h-11",
        },
        {
          original: "BMW",
          today: "heute BMW Group",
          logo: "/about/heritage/logos/bmw.svg",
          founder: "Franz Köhne",
          logoClassName: "max-h-11",
        },
        {
          original: "Siemens",
          today: "heute Siemens",
          logo: "/shared/logos/siemens.svg",
          founder: "Hans H. Schlitzberger",
          logoClassName: "max-h-8",
        },
        {
          original: "Roland Berger + Partner",
          today: "heute Roland Berger",
          logo: "/shared/logos/roland-berger.svg",
          founder: "Roland Berger",
          logoClassName: "max-h-7",
        },
        {
          original: "The Boston Consulting Group",
          today: "heute Boston Consulting Group",
          logo: "/shared/logos/bcg.avif",
          founder: null,
          logoClassName: "max-h-9",
        },
        {
          original: "MBB",
          today: "heute Airbus",
          logo: "/shared/logos/airbus.svg",
          founder: null,
          logoClassName: "max-h-7",
        },
        {
          original: "Peat, Marwick, Mitchell + Co",
          today: "heute KPMG",
          logo: "/about/heritage/logos/kpmg.svg",
          founder: null,
          logoClassName: "max-h-8",
        },
        {
          original: "Ruhrgas",
          today: "heute E.ON",
          logo: "/about/heritage/logos/eon.svg",
          founder: null,
          logoClassName: "max-h-8",
        },
        {
          original: "Bayerische Hypotheken- und Wechsel-Bank",
          today: "heute HypoVereinsbank / UniCredit",
          logo: "/shared/logos/hypovereinsbank.svg",
          founder: null,
          logoClassName: "max-h-7",
        },
        {
          original: "Infratest",
          today: "heute Infratest dimap",
          logo: "/about/heritage/logos/infratest.svg",
          founder: null,
          logoClassName: "max-h-7",
        },
        {
          original: "Personal-Media-Partner",
          today: "heute Teil von Roland Berger",
          logo: null,
          founder: null,
          logoClassName: "max-h-7",
        },
      ]
    : [
        {
          original: "Deutsche BP",
          today: "today bp",
          logo: "/about/heritage/logos/bp.svg",
          founder: "Dr. Helmuth Buddenberg",
          logoClassName: "max-h-11",
        },
        {
          original: "BMW",
          today: "today BMW Group",
          logo: "/about/heritage/logos/bmw.svg",
          founder: "Franz Köhne",
          logoClassName: "max-h-11",
        },
        {
          original: "Siemens",
          today: "today Siemens",
          logo: "/shared/logos/siemens.svg",
          founder: "Hans H. Schlitzberger",
          logoClassName: "max-h-8",
        },
        {
          original: "Roland Berger + Partner",
          today: "today Roland Berger",
          logo: "/shared/logos/roland-berger.svg",
          founder: "Roland Berger",
          logoClassName: "max-h-7",
        },
        {
          original: "The Boston Consulting Group",
          today: "today Boston Consulting Group",
          logo: "/shared/logos/bcg.avif",
          founder: null,
          logoClassName: "max-h-9",
        },
        {
          original: "MBB",
          today: "today Airbus",
          logo: "/shared/logos/airbus.svg",
          founder: null,
          logoClassName: "max-h-7",
        },
        {
          original: "Peat, Marwick, Mitchell + Co",
          today: "today KPMG",
          logo: "/about/heritage/logos/kpmg.svg",
          founder: null,
          logoClassName: "max-h-8",
        },
        {
          original: "Ruhrgas",
          today: "today E.ON",
          logo: "/about/heritage/logos/eon.svg",
          founder: null,
          logoClassName: "max-h-8",
        },
        {
          original: "Bayerische Hypotheken- und Wechsel-Bank",
          today: "today HypoVereinsbank / UniCredit",
          logo: "/shared/logos/hypovereinsbank.svg",
          founder: null,
          logoClassName: "max-h-7",
        },
        {
          original: "Infratest",
          today: "today Infratest dimap",
          logo: "/about/heritage/logos/infratest.svg",
          founder: null,
          logoClassName: "max-h-7",
        },
        {
          original: "Personal-Media-Partner",
          today: "today part of Roland Berger",
          logo: null,
          founder: null,
          logoClassName: "max-h-7",
        },
      ];

  const namedFounders = isDe
    ? [
        {
          name: "Dr. Helmuth Buddenberg",
          role: "Vorstandsvorsitzender Deutsche BP",
          company: "BP",
          image: null,
        },
        {
          name: "Franz Köhne",
          role: "BMW, Personalvorstand",
          company: "BMW",
          image: null,
        },
        {
          name: "Hans H. Schlitzberger",
          role: "Siemens",
          company: "Siemens",
          image: null,
        },
        {
          name: "Roland Berger",
          role: "Gründer Roland Berger + Partner",
          company: "Roland Berger",
          image: "/for-companies/testimonials/roland-berger.avif",
        },
      ]
    : [
        {
          name: "Dr. Helmuth Buddenberg",
          role: "Chairman, Deutsche BP",
          company: "BP",
          image: null,
        },
        {
          name: "Franz Köhne",
          role: "BMW HR board",
          company: "BMW",
          image: null,
        },
        {
          name: "Hans H. Schlitzberger",
          role: "Siemens board member",
          company: "Siemens",
          image: null,
        },
        {
          name: "Roland Berger",
          role: "Founder, Roland Berger + Partner",
          company: "Roland Berger",
          image: "/for-companies/testimonials/roland-berger.avif",
        },
      ];

  // ---------------- ALUMNI SECTION: PRESERVED BYTE-IDENTICAL ----------------
  const alumni = [
    {
      name: "Ulrich Beck",
      role: "Top-Management",
      img: "/about/alumni/ulrich_beck.jpg",
    },
    {
      name: "Claus Wattendrup",
      role: "Top-Management",
      img: "/about/alumni/claus_wattendrup.jpg",
    },
    {
      name: "Daniel Just",
      role: "Top-Management",
      img: "/about/alumni/daniel_just.jpg",
    },
    {
      name: "Dr. Michael Wagner",
      role: "Top-Management",
      img: "/about/alumni/drmpwagner.jpg",
    },
    {
      name: "David Riessner",
      role: "Top-Management",
      img: "/about/alumni/david_riessner.jpg",
    },
    {
      name: "Arne Rieger",
      role: "Mittleres Management",
      img: "/about/alumni/arne_rieger.jpg",
    },
    {
      name: "Bernd Amberger",
      role: "Mittleres Management",
      img: "/about/alumni/bernd_amberger.jpg",
    },
    {
      name: "Michael Kraupa",
      role: "Interim",
      img: "/about/alumni/michael_kraupa.jpg",
    },
    {
      name: "Maximilian Mann",
      role: "GF Mittelstand",
      img: "/about/alumni/maximilian_mann.jpg",
    },
    {
      name: "Volker Maiborn",
      role: "Gründer",
      img: "/about/alumni/volker_maiborn.jpg",
    },
  ];

  return (
    <div className="w-full bg-background animate-in fade-in duration-200 ease-out">
      {/* 1. Hero — Immersive full-bleed module */}
      <section className="relative isolate flex min-h-[92vh] w-full flex-col overflow-hidden bg-[#061D38] text-white">
        {/* Background image */}
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          src="/shared/heroes/hero-home.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ objectPosition: "center -130px" }}
          loading="eager"
          decoding="async"
        />
        {/* Cinematic overlay: deep navy at bottom, soft top, gold edge glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,29,56,0.55)_0%,rgba(6,29,56,0.45)_30%,rgba(6,29,56,0.85)_72%,rgba(6,29,56,0.98)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(246,215,123,0.18)_0%,transparent_38%)]"
        />
        {/* Subtle film grain via repeating noise gradient */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.07] mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:3px_3px]"
        />

        {/* Top kicker bar */}
        {/* Headline block */}
        <div
          ref={heroRef}
          className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-16 md:px-8 md:pb-24"
        >
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              {!heroPlay ? (
                <motion.h1
                  key="hero-original"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.25,
                  }}
                  className="max-w-[30ch] font-bold leading-[0.92] tracking-[-0.02em] text-white text-[clamp(2.75rem,9vw,8rem)]"
                >
                  {isDe
                    ? "Verantwortung für die deutsche Wirtschaft"
                    : "Responsibility for the German economy"}
                  <br />
                  <span className="text-[#F6D77B]">
                    {isDe ? "seit 1986." : "since 1986."}
                  </span>
                </motion.h1>
              ) : (
                <motion.div
                  key="hero-garden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TegGardenStatement
                    isDe={isDe}
                    size="hero"
                    externalPlay={heroPlay}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-10 flex min-h-[3.5rem] items-end">
            {heroPlay && (
              <GardenCtaPair
                externalPlay={heroPlay}
                items={[
                  {
                    label: isDe ? "Über Uns" : "About Us",
                    href: "#story",
                    variant: "solid",
                  },
                  {
                    label: isDe
                      ? "Konferenzen & Events"
                      : "Conferences & Events",
                    href: "/events",
                    variant: "solid",
                  },
                  {
                    label: isDe ? "Für Führungskräfte" : "For Executives",
                    href: "/for-companies",
                    variant: "ghost",
                  },
                  {
                    label: isDe ? "Für Studierende" : "For Students",
                    href: "/for-students",
                    variant: "ghost",
                  },
                ]}
              />
            )}
          </div>
        </div>

        {/* Partner ticker — full viewport width */}
        <div className="relative z-10 border-t border-white/10 bg-[#040F1F]/70 backdrop-blur-sm">
          <div className="flex w-full items-center gap-6 overflow-hidden px-4 py-4 md:px-8 md:py-5">
            <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#F6D77B]/85">
              {isDe ? "Partner & Speaker" : "Partners & speakers"}
            </span>
            <div className="flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <div className="flex w-max animate-[ticker_45s_linear_infinite] gap-10 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80 md:text-xs">
                {[
                  "BCG",
                  "McKinsey",
                  "Roland Berger",
                  "Accenture",
                  "appliedAI",
                  "IBM",
                  "MaibornWolff",
                  "Hogan Lovells",
                  "Munich Re",
                  "Capgemini",
                  "PwC",
                  "Netlight",
                  "Wayra",
                  "LMU",
                ]
                  .concat([
                    "BCG",
                    "McKinsey",
                    "Roland Berger",
                    "Accenture",
                    "appliedAI",
                    "IBM",
                    "MaibornWolff",
                    "Hogan Lovells",
                    "Munich Re",
                    "Capgemini",
                    "PwC",
                    "Netlight",
                    "Wayra",
                    "LMU",
                  ])
                  .map((name, i) => (
                    <span
                      key={`${name}-${i}`}
                      className="inline-flex items-center gap-10"
                    >
                      <span>{name}</span>
                      <span className="inline-block h-1 w-1 rounded-full bg-[#F6D77B]/60" />
                    </span>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* Local keyframes for ticker */}
        <style>{`
          @keyframes ticker {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ===================================================================
          About page — section order:
            1. Hero
            2. Leitmotiv
            3. Events
            4. YBLA
            5. Historie
            6. Run TEG like a company
         =================================================================== */}

      {/* §2 Leitmotiv — Mission and program */}
      <section className="relative isolate overflow-hidden bg-[#040F1F] py-24 text-white md:py-36 lg:py-44">
        {/* Subtle radial gold glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(75% 65% at 50% 50%, rgba(246,215,123,0.08) 0%, rgba(4,15,31,0) 70%)",
          }}
        />
        {/* Top & bottom hairlines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
        />

        {/* Full-width inner layout: side accent bar + content */}
        <div className="relative mx-auto w-full max-w-screen-xl px-6 sm:px-10 lg:px-16">
          {/* Gold accent vertical bar — decorative, visible md+ */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#F6D77B]/50 to-transparent sm:left-10 lg:left-16 md:block"
          />

          {/* Content grid: headline left, pillars right on wide screens */}
          <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-start md:gap-16 lg:gap-24">
            {/* Left — main statement */}
            <div className="md:pl-8 lg:pl-12">
              {/* Eyebrow label */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F6D77B]/70"
              >
                {isDe ? "Unsere Mission" : "Our Mission"}
              </motion.p>

              {/* Primary headline */}
              <motion.h2
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-balance text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white"
              >
                {content.centralStatement.question}
              </motion.h2>

              {/* Divider rule */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ transformOrigin: "left" }}
                className="mt-8 h-px w-24 bg-[#F6D77B]/60"
              />
            </div>

            {/* Right — two pillars stacked */}
            <div className="flex flex-col gap-8 md:min-w-[340px] lg:min-w-[440px] md:pt-10">
              {/* Pillar 1 */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.85,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative border border-[#F6D77B]/18 bg-white/[0.03] p-6 lg:p-8"
              >
                {/* Gold corner accent */}
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-6 w-px bg-[#F6D77B]/70"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-6 bg-[#F6D77B]/70"
                />
                <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-medium leading-[1.5] tracking-[-0.006em] text-[#F6D77B]">
                  {content.centralStatement.answer}
                </p>
              </motion.div>

              {/* Pillar 2 */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.85,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative border border-[#F6D77B]/18 bg-white/[0.03] p-6 lg:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-6 w-px bg-[#F6D77B]/70"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-6 bg-[#F6D77B]/70"
                />
                <p className="text-[clamp(1rem,1.6vw,1.2rem)] font-medium leading-[1.5] tracking-[-0.006em] text-[#F6D77B]">
                  {content.centralStatement.third}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* §2b Formate — Unsere 3 Formate (immersive garden, no boxes) */}
      <section className="relative isolate overflow-hidden bg-[#040F1F] py-24 text-white md:py-32 lg:py-40">
        {/* Soft organic glows — garden atmosphere, no hard edges */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(40% 38% at 18% 22%, rgba(246,215,123,0.10) 0%, rgba(4,15,31,0) 70%), radial-gradient(46% 42% at 82% 60%, rgba(246,215,123,0.07) 0%, rgba(4,15,31,0) 72%), radial-gradient(38% 36% at 50% 92%, rgba(246,215,123,0.06) 0%, rgba(4,15,31,0) 70%)",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl px-6 sm:px-10 lg:px-16">
          {/* Header */}
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#F6D77B]/70"
            >
              {content.formats.eyebrow}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.12] tracking-[-0.02em] text-white"
            >
              {content.formats.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 text-[clamp(1rem,1.55vw,1.2rem)] leading-[1.65] text-white/80"
            >
              {content.formats.intro}
            </motion.p>
          </div>

          {/* Formats — flowing, alternating, borderless */}
          <div className="mt-20 flex flex-col gap-24 md:mt-28 md:gap-32">
            {content.formats.items.map((format, i) => (
              <motion.article
                key={format.index}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid items-center gap-x-12 gap-y-10 md:grid-cols-2 lg:gap-x-24"
              >
                {/* Image — feathered organic mask, dissolves into the dark (no rectangle) */}
                <motion.div
                  initial={{ opacity: 0, scale: 1.04 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative ${i % 2 === 1 ? "md:order-last" : ""}`}
                >
                  {/* Warm glow bleeding behind the image */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-6 -z-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(60% 55% at 50% 50%, rgba(246,215,123,0.18) 0%, rgba(4,15,31,0) 72%)",
                    }}
                  />
                  <OptimizedImage
                    src={format.img}
                    alt={format.alt}
                    loading="lazy"
                    className="h-auto w-full select-none object-cover"
                    style={{
                      WebkitMaskImage:
                        "radial-gradient(78% 78% at 50% 50%, #000 52%, rgba(0,0,0,0) 92%)",
                      maskImage:
                        "radial-gradient(78% 78% at 50% 50%, #000 52%, rgba(0,0,0,0) 92%)",
                    }}
                  />
                  {/* Oversized index numeral — ornamental garden marker over the image */}
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-4 select-none text-[clamp(4rem,10vw,8rem)] font-bold leading-none tracking-[-0.04em] text-transparent [-webkit-text-stroke:1px_rgba(246,215,123,0.5)] ${
                      i % 2 === 1 ? "right-0 md:-right-4" : "left-0 md:-left-4"
                    }`}
                  >
                    {format.index}
                  </span>
                </motion.div>

                {/* Text column */}
                <div className={i % 2 === 1 ? "md:text-right" : ""}>
                  <h3 className="text-[clamp(1.6rem,2.8vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.014em] text-white">
                    {format.name}
                  </h3>
                  <p
                    className={`mt-5 max-w-xl text-[clamp(1rem,1.5vw,1.15rem)] leading-[1.6] text-[#F6D77B] ${
                      i % 2 === 1 ? "md:ml-auto" : ""
                    }`}
                  >
                    {format.lede}
                  </p>

                  {/* Traits — flowing inline tokens, gold dot separators (no boxes, no lists) */}
                  <ul
                    className={`mt-8 flex flex-wrap gap-x-6 gap-y-3 ${
                      i % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {format.traits.map((trait, t) => {
                      /* ── Icon lookup ────────────────────────────── */
                      const lower = trait.toLowerCase();
                      const icon =
                        lower.includes("gäste") || lower.includes("guests") ? (
                          /* people / guests */
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 shrink-0 text-[#F6D77B]"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        ) : lower.includes("ohne mikrofon") ||
                          lower.includes("without microphone") ? (
                          /* crossed microphone */
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 shrink-0 text-[#F6D77B]"
                          >
                            <rect x="9" y="2" width="6" height="11" rx="3" />
                            <path d="M5 10a7 7 0 0 0 14 0" />
                            <line x1="12" y1="19" x2="12" y2="23" />
                            <line x1="8" y1="23" x2="16" y2="23" />
                            <line x1="2" y1="2" x2="22" y2="22" />
                          </svg>
                        ) : lower.includes("mit mikrofon") ||
                          lower.includes("with microphone") ? (
                          /* microphone */
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3 shrink-0 text-[#F6D77B]"
                          >
                            <rect x="9" y="2" width="6" height="11" rx="3" />
                            <path d="M5 10a7 7 0 0 0 14 0" />
                            <line x1="12" y1="19" x2="12" y2="23" />
                            <line x1="8" y1="23" x2="16" y2="23" />
                          </svg>
                        ) : null;
                      return (
                        <li
                          key={trait}
                          className="flex items-center gap-3 text-[clamp(0.9rem,1.25vw,1.02rem)] leading-[1.4] text-white/85"
                        >
                          {i % 2 === 1 ? (
                            /* Summit (right-aligned): indicator on the right, toward the image */
                            <>
                              <span>{trait}</span>
                              {icon ??
                                (t > 0 ? (
                                  <span
                                    aria-hidden="true"
                                    className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6D77B]/70 sm:inline-block"
                                  />
                                ) : null)}
                            </>
                          ) : (
                            /* Left-aligned: indicator on the left */
                            <>
                              {icon ??
                                (t > 0 ? (
                                  <span
                                    aria-hidden="true"
                                    className="hidden h-1.5 w-1.5 shrink-0 rounded-full bg-[#F6D77B]/70 sm:inline-block"
                                  />
                                ) : null)}
                              <span>{trait}</span>
                            </>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* §3 YBLA programme (existing, moved) */}
      <YblaJourney isDe={isDe} />

      {/* §5 Historie — Alumni */}
      <section className="relative isolate overflow-hidden bg-[#040F1F] py-24 text-white md:py-36 lg:py-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(70% 60% at 50% 50%, rgba(246,215,123,0.10) 0%, rgba(4,15,31,0) 65%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
        />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          {/* 30% Top Management sign */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 text-center"
          >
            <div className="text-[clamp(2.6rem,6vw,5rem)] font-bold leading-none tracking-[-0.02em] text-[#F6D77B]">
              30% Top Management
            </div>
            <div className="mt-3 text-[clamp(0.85rem,1.3vw,1.1rem)] font-medium leading-snug text-white/80">
              Quote der YBLA Absolventen
            </div>
          </motion.div>

          {/* Stats row — no grid lines, pure typography */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-8"
          >
            {content.alumniIntro.stats.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-none tracking-[-0.02em] text-[#F6D77B]">
                  {stat.number}
                </div>
                <div className="mt-2 text-[clamp(0.75rem,1.1vw,0.95rem)] font-medium leading-snug text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[clamp(1.65rem,3.2vw,3rem)] font-semibold leading-[1.22] tracking-[-0.012em] text-white"
          >
            {content.alumniIntro.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.95,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-6 max-w-2xl text-[clamp(1rem,1.6vw,1.2rem)] leading-[1.65] text-white/80"
          >
            {content.alumniIntro.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {alumni.map((alum, idx) => (
              <div
                key={idx}
                className="bg-primary-dark/80 group overflow-hidden border border-border/20 transition-colors duration-300 hover:bg-primary-dark hover:border-accent/40 flex flex-col"
              >
                {alum.img ? (
                  <div className="w-full aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img
                      src={alum.img}
                      alt={alum.name}
                      className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] bg-gray-800/20 flex flex-col items-center justify-center text-border/30">
                    <svg
                      className="w-12 h-12 mb-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
                <div className="p-4 flex flex-col border-t border-border/10 flex-grow">
                  <div className="font-bold text-white text-base mb-1 leading-tight">
                    {alum.name}
                  </div>
                  <div className="text-accent text-xs uppercase tracking-wide font-medium mt-auto">
                    {alum.role}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-16"
          >
            <GardenCtaPair
              instant
              items={[
                {
                  label: isDe ? "Jetzt bewerben" : "Apply now",
                  href: APPLY_FORM_URL,
                  variant: "solid",
                  trackingSource: "Landing — Alumni",
                },
                {
                  label: isDe ? "Partner werden" : "Become a partner",
                  href: "/for-companies#contact",
                  variant: "ghost",
                  trackingSource: "Landing — Alumni",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* §1 Heritage — immersive garden re-imagining of founder pedigree */}
      <HeritageGardenSection
        isDe={isDe}
        companies={heritageCompanies}
        founders={namedFounders}
      />

      {/* §3 Selection — Auswahl der Teilnehmer (immersive full-bleed) */}
      <section className="relative isolate flex min-h-[70vh] w-full items-end overflow-hidden bg-[#040F1F] py-20 text-white md:min-h-[80vh] md:py-28 lg:min-h-screen">
        {/* Full-bleed background image */}
        <OptimizedImage
          src="/shared/heroes/selection-bg.jpg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none object-cover object-center"
        />
        {/* Legibility overlays */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#040F1F] via-[#040F1F]/80 to-[#040F1F]/30"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-[#040F1F]/85 via-[#040F1F]/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent"
        />
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance text-[clamp(1.85rem,4vw,3.6rem)] font-semibold leading-[1.18] tracking-[-0.012em] text-white [text-shadow:0_2px_24px_rgba(4,15,31,0.6)]"
            >
              {isDe
                ? "Wer bei TEG mitmacht, wird ausgewählt."
                : "Membership at TEG is earned."}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.95,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-2xl text-[clamp(1rem,1.6vw,1.25rem)] leading-[1.65] text-white/95 [text-shadow:0_1px_16px_rgba(4,15,31,0.55)]"
            >
              {isDe
                ? "Jeder Bewerber durchläuft dasselbe Verfahren - unabhängig von Herkunft oder Netzwerk. Bewertet werden analytisches Denken, Leistungsbereitschaft und Führungscharakter: die Fähigkeit, Initiative zu ergreifen, zu führen und geführt zu werden."
                : "Every applicant goes through the same process — regardless of background or network. We assess analytical thinking, drive, and leadership character: the ability to take initiative, to lead, and to be led."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.85,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10"
            >
              <GardenCtaPair
                instant
                items={[
                  {
                    label: isDe ? "Jetzt bewerben" : "Apply now",
                    href: APPLY_FORM_URL,
                    variant: "solid",
                    trackingSource: "Landing — Selection",
                  },
                ]}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* §6b — Compliment video: full-width immersive */}
      <ComplimentVideoSection isDe={isDe} />
    </div>
  );
};

export default About;
