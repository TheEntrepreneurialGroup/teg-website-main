import React from "react";
import { useIntl } from "react-intl";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { PrimaryButton } from "@/components/blocks/PrimaryButton";
import RunLikeCompanyEnsemble from "@/components/sections/RunLikeCompanyEnsemble";
import RunLikeCompanyReveal from "@/components/sections/RunLikeCompanyReveal";
import YblaJourney from "@/components/sections/YblaJourney";
import TegGardenStatement from "@/components/sections/TegGardenStatement";
import GardenCtaPair from "@/components/sections/GardenCtaPair";
import HeritageGardenSection from "@/components/sections/HeritageGardenSection";
import { useScrollIntent } from "@/hooks/useScrollIntent";

const About: React.FC = () => {
  const intl = useIntl();
  const isDe = intl.locale.startsWith("de");

  // Shared scroll-intent gate for the hero: drives the H1 crossfade and
  // CTA rendering so everything blooms in unison.
  const heroRef = React.useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const heroPlay = useScrollIntent(heroInView, reduce);

  // Lock the page from scrolling while the animation plays, then release.
  // Animation longest path: vines finish at ≈3.45 s → unlock at 3 600 ms.
  React.useEffect(() => {
    if (!heroPlay) return;
    if (reduce) return; // reduced-motion: no lock, animation is instant
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      document.body.style.overflow = prev;
    }, 3600);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = prev;
    };
  }, [heroPlay, reduce]);

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
            { title: "Echte Unternehmen", desc: "Reale B2B-Projekte und Revenue-First-Ventures, keine Pitch-Decks." },
            { title: "Mittelstand & DAX als Partner", desc: "B2B-Partnerschaften mit Mittelstand- und DAX-Häusern." },
            { title: "40+ C-Level Alumni", desc: "Ein Netzwerk, das Studierende heute mit Vorständen verbindet." },
          ]
        : [
            { title: "Real business creation", desc: "Real B2B projects and revenue-first ventures, not pitch decks." },
            { title: "Mittelstand & DAX partners", desc: "B2B partnerships with Mittelstand and DAX-listed companies." },
            { title: "40+ C-level alumni", desc: "A network that connects today's students with company boards." },
          ],
      tagline: "Create What's Next.",
      cta_students: isDe ? "Für Studierende" : "For Students",
      cta_companies: isDe ? "Für Unternehmen" : "For Companies",
    },

    runLikeCompany: {
      eyebrow: isDe ? "Wie wir arbeiten" : "How we work",
      title: isDe ? "Run TEG like a company." : "Run TEG like a company.",
      intro: isDe
        ? "TEG ist studentisch geführt, aber nicht als Club organisiert. Operative Units mit klaren Leads tragen Ergebnisverantwortung — von Strategie bis Operations."
        : "TEG is student-led, but it is not run as a club. Operating units with named leads carry real ownership — from strategy to operations.",
      stageLabel: isDe ? "Im Fokus" : "In focus",
      stageHint: isDe
        ? "Scrollen wechselt die Person. Klick auf ein Porträt springt direkt dorthin."
        : "Scroll to change the person. Click any portrait to jump.",
      placeholderName: isDe ? "N. N." : "N. N.",
      placeholderRole: isDe ? "In Auswahl" : "Selection in progress",
      navHint: "",
      noQuoteLabel: isDe ? "Statement folgt." : "Statement to follow.",
      members: [
        {
          slug: "jonathan",
          name: "Jonathan Babelotzky",
          unit: isDe ? "Vorstand" : "Board",
          role: "Director of Strategy & Partnerships",
          photo: "/about/team-leads/jonathan-babelotzky.png",
          quote: isDe
            ? "Als „Director of Strategy & Partnerships‘ achte ich teamübergreifend darauf, dass alles in die richtige gemeinsame Richtung geht — und koordiniere die Vereinbarung und Pflege von Partnerschaften."
            : "As 'Director of Strategy & Partnerships' I make sure everything moves in the same direction across teams — and I coordinate the negotiation and care of our partnerships.",
          initials: "JB",
          placeholder: false,
        },
        {
          slug: "ahmed",
          name: "Ahmed Kaddour",
          unit: isDe ? "Vorstand" : "Board",
          role: "Director of Operations",
          photo: "/about/team-leads/ahmed-kaddour.png",
          quote: null,
          initials: "AK",
          placeholder: false,
        },
        {
          slug: "yassin",
          name: "Yassin Aboushelib",
          unit: isDe ? "Vorstand" : "Board",
          role: "Director of Operations",
          photo: "/about/team-leads/yassin-aboushelib.png",
          quote: null,
          initials: "YA",
          placeholder: false,
        },
        {
          slug: "finn",
          name: "Finn Lux",
          unit: isDe ? "Vorstand" : "Board",
          role: "Director of Conferences",
          photo: "/about/team-leads/finn.png",
          quote: isDe
            ? "Ich wollte früh im Studium irgendwohin, wo ich wirklich etwas lerne und Verantwortung übernehme. Bei TEG habe ich im ersten Semester eine eigene Konferenz mit Speakern von McKinsey, BCG und Roland Berger aufgebaut — und dabei mehr über Verhandlung, Führung und Umsetzung gelernt als in jedem Praktikum."
            : "I wanted to go somewhere early in my studies where I would actually learn and take responsibility. At TEG I built my own conference in my first semester with speakers from McKinsey, BCG and Roland Berger — and learned more about negotiation, leadership and execution than any internship could teach me.",
          initials: "FN",
          placeholder: false,
        },

      ],
    },

    centralStatement: {
      question: isDe
        ? "Wie stärken wir den Wirtschaftsstandort Deutschland?"
        : "How do we strengthen Germany as a place of business?",
      answer: isDe
        ? "Durch den Aufbau eines Nachwuchskanals für die Unternehmensführung deutscher Firmen."
        : "By building a leadership pipeline for the management of German companies.",
    },

    alumniIntro: {
      title: isDe ? "Ein kleiner Ausschnitt unserer Alumni" : "A small selection of our alumni",
      intro: isDe
        ? "Drei Jahrzehnte Netzwerk. Eine kleine, öffentliche Auswahl — viele weitere bleiben lieber diskret."
        : "Three decades of network. A small, public selection — many others prefer to remain discreet.",
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
      caption: isDe ? "Aktiver TEG-Jahrgang, Wintersemester 2026." : "Active TEG cohort, winter semester 2026.",
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
    { name: "Ulrich Beck", role: "Top-Management", img: "/about/alumni/ulrich_beck.jpg" },
    { name: "Claus Wattendrup", role: "Top-Management", img: "/about/alumni/claus_wattendrup.jpg" },
    { name: "Daniel Just", role: "Top-Management", img: "/about/alumni/daniel_just.jpg" },
    { name: "Dr. Michael Wagner", role: "Top-Management", img: "/about/alumni/drmpwagner.jpg" },
    { name: "David Riessner", role: "Top-Management", img: null },
    { name: "Arne Rieger", role: "Mittleres Management", img: "/about/alumni/arne_rieger.jpg" },
    { name: "Bernd Amberger", role: "Mittleres Management", img: "/about/alumni/bernd_amberger.jpg" },
    { name: "Michael Kraupa", role: "Interim", img: "/about/alumni/michael_kraupa.jpg" },
    { name: "Maximilian Mann", role: "GF Mittelstand", img: "/about/alumni/maximilian_mann.jpg" },
    { name: "Volker Maiborn", role: "Gründer", img: "/about/alumni/volker_maiborn.jpg" }
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
          src="/shared/images/tegtalk-group-WS26.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
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
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 pt-28 md:px-8 md:pt-32"
        >
          <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.42em] text-white/70">
            <span className="inline-block h-px w-10 bg-[#F6D77B]" />
            <span>TEG — München · {isDe ? "Seit" : "Since"} 1986</span>
          </div>
          <div className="hidden text-[10px] font-semibold uppercase tracking-[0.42em] text-white/55 md:block">
            {isDe ? "Über uns" : "About"}
          </div>
        </motion.div>

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
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                  className="max-w-[30ch] font-bold leading-[0.92] tracking-[-0.02em] text-white text-[clamp(2.75rem,9vw,8rem)]"
                >
                  {isDe ? "Verantwortung für die deutsche Wirtschaft" : "Responsibility for the German economy"}
                  <br />
                  <span className="text-[#F6D77B]">{isDe ? "seit 1986." : "since 1986."}</span>
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
                    label: isDe ? "Konferenzen & Events" : "Conferences & Events",
                    href: "#events",
                    variant: "ghost",
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
                  "BCG", "McKinsey", "Roland Berger", "Accenture", "appliedAI", "IBM",
                  "MaibornWolff", "Hogan Lovells", "Munich Re", "Capgemini", "PwC",
                  "Netlight", "Wayra", "LMU",
                ].concat([
                  "BCG", "McKinsey", "Roland Berger", "Accenture", "appliedAI", "IBM",
                  "MaibornWolff", "Hogan Lovells", "Munich Re", "Capgemini", "PwC",
                  "Netlight", "Wayra", "LMU",
                ]).map((name, i) => (
                  <span key={`${name}-${i}`} className="inline-flex items-center gap-10">
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

      {/* §2 Leitmotiv — Mission and program (existing, moved) */}
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
        <div className="relative mx-auto max-w-5xl px-4 md:px-8">
          {/* Question — visible as soon as section enters viewport */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[clamp(1.65rem,3.2vw,3rem)] font-semibold leading-[1.22] tracking-[-0.012em] text-white"
          >
            {content.centralStatement.question}
          </motion.h2>

          {/* Answer — animates in from below after a short delay, giving the impression of a second scroll beat */}
          <motion.p
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 1.0, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-balance text-[clamp(1.25rem,2.4vw,2.1rem)] font-medium leading-[1.35] tracking-[-0.008em] text-[#F6D77B]"
          >
            {content.centralStatement.answer}
          </motion.p>
        </div>
      </section>

      {/* §3 YBLA programme (existing, moved) */}
      <YblaJourney isDe={isDe} />

      {/* §3 Selection — Auswahl der Teilnehmer */}
      <section className="relative isolate overflow-hidden bg-[#040F1F] py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 50% 50%, rgba(246,215,123,0.07) 0%, rgba(4,15,31,0) 70%)",
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
        <div className="relative mx-auto max-w-5xl px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[clamp(1.65rem,3.2vw,3rem)] font-semibold leading-[1.22] tracking-[-0.012em] text-white"
          >
            {isDe
              ? "Wer bei TEG mitmacht, wird ausgewählt."
              : "Membership at TEG is earned."}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-[clamp(1rem,1.6vw,1.2rem)] leading-[1.65] text-white"
          >
            {isDe
              ? "Jeder Bewerber durchläuft dasselbe Verfahren — unabhängig von Herkunft oder Netzwerk. Bewertet werden analytisches Denken, Leistungsbereitschaft und Führungscharakter: die Fähigkeit, Initiative zu ergreifen, zu führen und geführt zu werden."
              : "Every applicant goes through the same process — regardless of background or network. We assess analytical thinking, drive, and leadership character: the ability to take initiative, to lead, and to be led."}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.95, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-[clamp(0.95rem,1.4vw,1.1rem)] font-medium leading-[1.55] tracking-[-0.004em] text-[#F6D77B]"
          >
            {isDe
              ? "Darum sind bei TEG fast alle sozialen Schichten vertreten — Kompetenz kennt keine Herkunft."
              : "That is why TEG draws from almost every social background — competence has no pedigree."}
          </motion.p>
        </div>
      </section>

      {/* §5 Historie — Alumni (PRESERVED BYTE-IDENTICAL, moved) */}
      <section className="section bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider">
            {content.alumniIntro.title}
          </h2>
          <p className="text-lg md:text-xl font-light text-secondary-light mb-12">
            {content.alumniIntro.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {alumni.map((alum, idx) => (
              <div key={idx} className="bg-primary-dark/80 group overflow-hidden border border-border/20 transition-colors duration-300 hover:bg-primary-dark hover:border-accent/40 flex flex-col">
                {alum.img ? (
                  <div className="w-full aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                    <img src={alum.img} alt={alum.name} className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                  </div>
                ) : (
                  <div className="w-full aspect-[4/5] bg-gray-800/20 flex flex-col items-center justify-center text-border/30">
                    <svg className="w-12 h-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
                <div className="p-4 flex flex-col border-t border-border/10 flex-grow">
                  <div className="font-bold text-white text-base mb-1 leading-tight">{alum.name}</div>
                  <div className="text-accent text-xs uppercase tracking-wide font-medium mt-auto">{alum.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* §1 Heritage — immersive garden re-imagining of founder pedigree */}
      <HeritageGardenSection
        isDe={isDe}
        companies={heritageCompanies}
        founders={namedFounders}
      />

      {/* §6 Company-like operating model — Scroll-locked bloom (existing, moved) */}
      <RunLikeCompanyReveal isDe={isDe} />

      {/* §6 Company-like operating model — Team ensemble (existing, moved) */}
      <RunLikeCompanyEnsemble
        eyebrow={content.runLikeCompany.eyebrow}
        title={content.runLikeCompany.title}
        intro={content.runLikeCompany.intro}
        stageLabel={content.runLikeCompany.stageLabel}
        stageHint={content.runLikeCompany.stageHint}
        placeholderName={content.runLikeCompany.placeholderName}
        placeholderRole={content.runLikeCompany.placeholderRole}
        navHint={content.runLikeCompany.navHint}
        noQuoteLabel={content.runLikeCompany.noQuoteLabel}
        members={content.runLikeCompany.members}
        isDe={isDe}
      />

      {/* §6 Company-like operating model — Heute aktiv (existing, moved) */}
      <section className="section bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
              {content.today.eyebrow}
            </div>
            <h2 className="max-w-xl text-3xl font-bold leading-[1.05] text-primary md:text-4xl">
              {content.today.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-[1.65] text-foreground/80 md:text-lg">
              {content.today.desc}
            </p>
          </div>
          <figure className="overflow-hidden border border-primary/10 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <div className="aspect-[5/4] overflow-hidden">
              <img
                src={content.today.img}
                alt={content.today.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="p-5 text-sm leading-relaxed text-foreground/75">
              {content.today.caption}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Trailing — Final CTA */}
      <section className="py-24 bg-background border-t border-border focus:outline-none">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-4 sm:flex-row md:px-8">
          <PrimaryButton
            label={content.hero.cta_students}
            href="/for-students"
            align="center"
            size="lg"
            className="w-full sm:w-auto min-w-[250px]"
          />
          <PrimaryButton
            label={content.hero.cta_companies}
            href="/for-companies"
            align="center"
            size="lg"
            className="bg-primary text-white hover:bg-primary-dark border-none w-full sm:w-auto min-w-[250px]"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
