import React from "react";
import { useIntl } from "react-intl";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { PrimaryButton } from "@/components/blocks/PrimaryButton";
import RunLikeCompanyEnsemble from "@/components/sections/RunLikeCompanyEnsemble";
import RunLikeCompanyReveal from "@/components/sections/RunLikeCompanyReveal";
import YblaJourney from "@/components/sections/YblaJourney";
import TegGardenStatement from "@/components/sections/TegGardenStatement";
import GardenCtaPair from "@/components/sections/GardenCtaPair";
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

    formats: {
      title: isDe
        ? "Unser letztes Event — und unser nächstes."
        : "Our most recent event — and our next one.",
      intro: isDe
        ? "Was wir gerade in München gebaut haben, und worauf wir als Nächstes hinarbeiten."
        : "What we just built in Munich, and what we are working towards next.",
      items: isDe
        ? [
            {
              kind: "Letztes Event · TEG Talk",
              title: "TEG Talk Corporate Entrepreneurship",
              when: "24. April 2026",
              where: "O2 Tower München — bei Wayra Germany",
              who: "Georg Doll, Dr. Tobias Süß, Paul Sachse, Dr. Irene Lejeune, Dr. Hartwig Rüll",
              img: "/home/tegtalk-WS26.avif",
              alt: "TEG Talk Format mit Publikum",
            },
            {
              kind: "Nächstes Event · Konferenz",
              title: "AI Consulting Conference 2026",
              when: "10. Juni 2026 — 150 Plätze, nur auf Bewerbung",
              where: "Netlight Offices, Prannerstraße 4, München",
              who: "BCG, McKinsey, Roland Berger, Accenture, appliedAI, IBM, MaibornWolff, Hogan Lovells, Munich Re, Capgemini, PwC, LMU, Netlight",
              img: "/for-students/events/ai-consulting-conference.svg",
              alt: "AI Consulting Conference 2026 — Konferenz-Poster",
            },
          ]
        : [
            {
              kind: "Most recent · TEG Talk",
              title: "TEG Talk Corporate Entrepreneurship",
              when: "24 April 2026",
              where: "O2 Tower Munich — hosted at Wayra Germany",
              who: "Georg Doll, Dr. Tobias Süß, Paul Sachse, Dr. Irene Lejeune, Dr. Hartwig Rüll",
              img: "/home/tegtalk-WS26.avif",
              alt: "TEG Talk format with audience",
            },
            {
              kind: "Up next · Conference",
              title: "AI Consulting Conference 2026",
              when: "10 June 2026 — 150 seats, application only",
              where: "Netlight Offices, Prannerstraße 4, Munich",
              who: "BCG, McKinsey, Roland Berger, Accenture, appliedAI, IBM, MaibornWolff, Hogan Lovells, Munich Re, Capgemini, PwC, LMU, Netlight",
              img: "/for-students/events/ai-consulting-conference.svg",
              alt: "AI Consulting Conference 2026 — Conference Poster",
            },
          ],
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
        {
          slug: "feristah",
          name: "Feristah Fenkci",
          unit: "Strategy",
          role: "Director of Strategy",
          photo: "/about/team-leads/feristah-fenkci.png",
          quote: isDe
            ? "Wer Chemie studiert und in der Chemie- oder Pharmaindustrie eine Führungsrolle anstrebt, dem empfehle ich TEG. Um mitzuentscheiden, welche Produkte entwickelt werden, braucht man neben Fachwissen auch unternehmerische und kommunikative Kompetenzen — die entwickelt man parallel zum Studium bei TEG."
            : "If you study chemistry and want to lead in the chemical or pharma industry, I recommend TEG. To help decide which products get developed, you need entrepreneurial and communication skills alongside the science — and you build those skills at TEG.",
          initials: "FF",
          placeholder: false,
        },
        {
          slug: "berkay",
          name: "Berkay Zobu",
          unit: isDe ? "Finance & Legal" : "Finance & Legal",
          role: "Director of Finance & Legal",
          photo: "/about/team-leads/berkay.png",
          quote: isDe
            ? "Als Teil des Finance & Legal Departments unterstütze ich Planung und Verwaltung des Budgets, das Management der Bankkonten sowie die Überwachung interner und externer rechtlicher Prozesse — strukturiert, zuverlässig, effizient."
            : "In TEG's Finance & Legal department I support budget planning and oversight, manage bank accounts, and supervise internal and external legal processes — with structure, reliability and efficiency.",
          initials: "BK",
          placeholder: false,
        },
      ],
    },

    centralStatement: {
      kicker: isDe ? "Unser Leitmotiv" : "Our guiding principle",
      lead: isDe
        ? "Ziel der TEG ist die Stärkung des Wirtschaftsstandorts Deutschland durch:"
        : "TEG's purpose is to strengthen Germany as a place of business through:",
      bullet: isDe
        ? "den Aufbau eines Nachwuchskanals für die Unternehmensführung deutscher Firmen."
        : "building a leadership pipeline for the management of German companies.",
    },

    timeline: {
      eyebrow: isDe ? "40 Jahre TEG" : "40 years of TEG",
      title: isDe ? "Seit 1986 in München." : "In Munich since 1986.",
      items: [
        {
          year: "1986",
          kicker: isDe ? "Gründung" : "Founding",
          label: isDe
            ? "Eintragung in München. Mit-initiiert von Vorständen elf deutscher Unternehmen — BP, BMW, Siemens, Roland Berger, BCG, MBB (heute Airbus), Peat Marwick Mitchell (heute KPMG), Ruhrgas (heute E.ON), Bayerische Hypothekenbank (heute HypoVereinsbank), Infratest, Personal-Media-Partner."
            : "Registered in Munich. Co-initiated by board members of eleven German companies — BP, BMW, Siemens, Roland Berger, BCG, MBB (today Airbus), Peat Marwick Mitchell (today KPMG), Ruhrgas (today E.ON), Bayerische Hypothekenbank (today HypoVereinsbank), Infratest, Personal-Media-Partner.",
        },
        {
          year: "1988",
          kicker: isDe ? "Heutige Form" : "Current form",
          label: isDe
            ? "Im Januar 1988 in der heutigen Form etabliert. Im selben Jahr Eröffnung eines Berliner Büros."
            : "Established in its current form in January 1988. A Berlin office opens the same year.",
        },
        {
          year: "2001",
          kicker: isDe ? "Web-Kontinuität" : "Web continuity",
          label: isDe
            ? "Erste archivierte Web-Präsenz auf teg-ev.de. Bis 2026 sind 314 öffentliche Captures in der Wayback Machine dokumentiert."
            : "First archived web presence on teg-ev.de. By 2026, 314 public captures are documented in the Wayback Machine.",
        },
        {
          year: "2015",
          kicker: isDe ? "Eventreihe" : "Event series",
          label: isDe
            ? "TEG organisiert das Startup Weekend Munich (suwm-teg.de). Beginn der wiederkehrenden Eventreihe aus Talks, Panels und Konferenzen, die heute die Außenwahrnehmung trägt."
            : "TEG runs Startup Weekend Munich (suwm-teg.de). Start of the recurring event programme — talks, panels, conferences — that today carries TEG's external visibility.",
        },
        {
          year: "2025",
          kicker: isDe ? "Frontier Tech Conference" : "Frontier Tech Conference",
          label: isDe
            ? "Frontier Tech Conference bei MaibornWolff in München — 150 Teilnehmende."
            : "Frontier Tech Conference at MaibornWolff in Munich — 150 participants.",
        },
        {
          year: "2026",
            kicker: isDe ? "O2 Tower + AI Conference" : "O2 Tower + AI conference",
          label: isDe
              ? "TEG Talk Corporate Entrepreneurship am 24. April im O2 Tower München bei Wayra Germany. Danach AI Consulting Conference am 10. Juni im Netlight Office München mit 150 Plätzen auf Bewerbung und Partnern wie BCG, McKinsey, Roland Berger, Accenture, PwC, IBM, MaibornWolff, Munich Re, Capgemini und LMU."
              : "TEG Talk Corporate Entrepreneurship on 24 April at the O2 Tower in Munich, hosted by Wayra Germany. Followed by the AI Consulting Conference on 10 June at the Netlight office in Munich with 150 seats by application and partners including BCG, McKinsey, Roland Berger, Accenture, PwC, IBM, MaibornWolff, Munich Re, Capgemini, and LMU.",
        },
      ],
      footnote: isDe
        ? "Belege: TEG-Leistungsnachweis (Dok.-Ref. TEG-LN-2026-05-22), Wayback Machine (teg-ev.de, Erst-Capture 2001), öffentliche LinkedIn-Unternehmensseite. Vollständige Chronik in laufender Aufarbeitung."
        : "Sources: TEG record of achievement (Doc. ref. TEG-LN-2026-05-22), Wayback Machine (teg-ev.de, first capture 2001), public LinkedIn company page. Full chronicle under ongoing review.",
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
          logo: "/about/heritage/logos/bp.png",
          founder: "Dr. Helmuth Buddenberg",
          logoClassName: "max-h-11",
        },
        {
          original: "BMW",
          today: "heute BMW Group",
          logo: "/shared/logos/bmw.avif",
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
          logo: "/about/heritage/logos/infratest.png",
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
          logo: "/about/heritage/logos/bp.png",
          founder: "Dr. Helmuth Buddenberg",
          logoClassName: "max-h-11",
        },
        {
          original: "BMW",
          today: "today BMW Group",
          logo: "/shared/logos/bmw.avif",
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
          logo: "/about/heritage/logos/infratest.png",
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

  const heritageRegisterRows = isDe
    ? [
        { label: "Rechtsform", value: "Gemeinnützige Erwachsenenbildung · e.V." },
        { label: "Register", value: "Amtsgericht München · VR 11822" },
        { label: "Sitz", value: "München" },
      ]
    : [
        { label: "Legal form", value: "Non-profit adult education association" },
        { label: "Registry", value: "Munich local court · VR 11822" },
        { label: "Seat", value: "Munich" },
      ];

  const founderInitials = (founderName: string) => {
    const significantParts = founderName
      .split(" ")
      .map((part) => part.replace(/[^A-Za-zÄÖÜäöü]/g, ""))
      .filter((part) => part.length > 1 && !["Dr", "Prof"].includes(part));

    return significantParts
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join("");
  };

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
                  className="max-w-[16ch] md:max-w-[18ch] font-bold leading-[0.92] tracking-[-0.02em] text-white text-[clamp(2.75rem,9vw,8rem)]"
                >
                  {isDe ? "Verantwortung für die" : "Responsibility for the"}
                  <br />
                  <span className="text-white/55 md:whitespace-nowrap md:text-[0.88em] md:tracking-[-0.03em]">{isDe ? "deutsche Wirtschaft." : "German economy."}</span>
                  <br />
                  <span className="text-[#F6D77B]">{isDe ? "Seit 1986." : "Since 1986."}</span>
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
                    label: isDe ? "Über TEG" : "About TEG",
                    href: "#story",
                    variant: "solid",
                    downArrow: true,
                  },
                  {
                    label: content.hero.cta_students,
                    href: "/for-students",
                    variant: "ghost",
                  },
                  {
                    label: content.hero.cta_companies,
                    href: "/for-companies",
                    variant: "ghost",
                  },
                ]}
              />
            )}
          </div>
        </div>

        {/* Partner ticker — bottom edge */}
        <div className="relative z-10 border-t border-white/10 bg-[#040F1F]/70 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-hidden px-4 py-4 md:px-8 md:py-5">
            <span className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#F6D77B]/85 md:inline">
              {isDe ? "Partner & Speaker" : "Partners & speakers"}
            </span>
            <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
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
          About page — reordered to the five Sinnabschnitte:
            1. Heritage
            2. Mission and program
            3. Selection
            4. Mentors and project responsibility
            5. Company-like operating model
         =================================================================== */}

      {/* §1 Heritage — Founder pedigree */}
      <section
        id="story"
        className="section scroll-mt-24 border-y border-primary/10 bg-[linear-gradient(180deg,#f7f1e4_0%,#fffaf0_46%,#ffffff_100%)]"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:gap-16">
            <div>
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
                {isDe ? "§1 Heritage · Seit 1986" : "§1 Heritage · Since 1986"}
              </div>
              <h2 className="max-w-3xl text-3xl font-bold leading-[1.05] text-primary md:text-4xl lg:text-5xl">
                {isDe
                  ? "Gegründet von Vorständen elf deutscher Top-Unternehmen."
                  : "Founded by board members from eleven leading German companies."}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/80 md:text-lg">
                {isDe
                  ? "Die TEG (The Entrepreneurial Group) ist eine gemeinnützige Organisation der Erwachsenenbildung mit Sitz in München. Sie wurde 1986 eingetragen und im Januar 1988 in ihrer heutigen Form etabliert, mitinitiiert von Vorständen elf deutscher Unternehmen: Dr. Helmuth Buddenberg (BP), Franz Köhne (BMW, Personalvorstand), Hans H. Schlitzberger (Siemens), Roland Berger (Roland Berger) sowie Vorstände von BCG, MBB (heute Airbus), Peat Marwick Mitchell (heute KPMG), Ruhrgas (heute E.ON), Bayerische Hypothekenbank (heute HypoVereinsbank/UniCredit), Infratest und Personal-Media-Partner (heute Teil von Roland Berger)."
                  : "TEG (The Entrepreneurial Group) is a non-profit adult education organization based in Munich. It was registered in 1986 and established in its current form in January 1988, co-initiated by board members from eleven German companies: Dr. Helmuth Buddenberg (BP), Franz Köhne (BMW, HR board), Hans H. Schlitzberger (Siemens), Roland Berger (Roland Berger), as well as board members from BCG, MBB (today Airbus), Peat Marwick Mitchell (today KPMG), Ruhrgas (today E.ON), Bayerische Hypothekenbank (today HypoVereinsbank/UniCredit), Infratest, and Personal-Media-Partner (today part of Roland Berger)."}
              </p>

              <figure className="mt-8 overflow-hidden border border-primary/10 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <div className="aspect-[948/695] overflow-hidden bg-[#efe5cf]">
                  <img
                    src="/about/heritage/zeitungsartikel.png"
                    alt={isDe ? "Historischer Zeitungsartikel zur Gründung des TEG-Kuratoriums" : "Historic newspaper article about the founding of the TEG board"}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="border-t border-primary/10 bg-[#fffaf0] p-5 text-sm leading-relaxed text-foreground/76">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                    {isDe ? "Pressebeleg" : "Press proof"}
                  </div>
                  <p className="mt-2">
                    {isDe
                      ? "Donaukurier, kurz nach der offiziellen Eintragung: \"Elf Unternehmen gründen neue Studentenvereinigung\". Der Artikel nennt die Gründerunternehmen und bestätigt das institutionelle Umfeld der ersten TEG-Struktur in München."
                      : "Donaukurier, published shortly after the official registration: \"Eleven companies found a new student association.\" The article names the founding companies and confirms the institutional setting of TEG's first structure in Munich."}
                  </p>
                </figcaption>
              </figure>

              <div className="mt-8">
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/60">
                  {isDe ? "Namentlich genannt" : "Named founders"}
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {namedFounders.map((founder) => (
                    <article
                      key={founder.name}
                      className="flex min-h-[112px] items-stretch gap-4 border border-primary/10 bg-white/85 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
                    >
                      {founder.image ? (
                        <div className="h-20 w-16 shrink-0 overflow-hidden bg-primary/5">
                          <img
                            src={founder.image}
                            alt={founder.name}
                            className="h-full w-full object-cover object-top grayscale"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : (
                        <div
                          aria-label={founder.name}
                          className="flex h-20 w-16 shrink-0 items-center justify-center bg-[#efe5cf] text-xl font-semibold tracking-[0.08em] text-primary"
                        >
                          {founderInitials(founder.name)}
                        </div>
                      )}
                      <div className="min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/50">
                          {founder.company}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold leading-tight text-primary">
                          {founder.name}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-foreground/72">
                          {founder.role}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="border border-primary/10 bg-white/90 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-primary/10 pb-4">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary/55">
                      {isDe ? "Kuratorium 1986" : "Board 1986"}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/72">
                      {isDe
                        ? "Die erste TEG-Struktur wurde von Konzernen, Beratungen und Industriehäusern mitgetragen. Die heutige Entsprechung jeder Marke ist direkt in der Wand markiert."
                        : "TEG's first structure was backed by corporates, consultancies, and industrial groups. Each tile marks the present-day equivalent where the company later changed."}
                    </p>
                  </div>
                  <div className="shrink-0 text-right text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/45">
                    11 {isDe ? "Unternehmen" : "companies"}
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {heritageCompanies.map((company) => (
                    <article
                      key={company.original}
                      className="flex min-h-[150px] flex-col justify-between border border-primary/10 bg-[#fffaf0] p-4"
                    >
                      <div className="flex h-12 items-center">
                        {company.logo ? (
                          <img
                            src={company.logo}
                            alt={company.original}
                            className={`max-w-full object-contain object-left ${company.logoClassName}`}
                            loading="lazy"
                            decoding="async"
                          />
                        ) : (
                          <div
                            aria-label="Personal-Media-Partner"
                            className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70"
                          >
                            PMP
                          </div>
                        )}
                      </div>
                      <div className="mt-4">
                        <h3 className="text-sm font-semibold leading-snug text-primary">
                          {company.original}
                        </h3>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-primary/50">
                          {company.today}
                        </p>
                        {company.founder ? (
                          <p className="mt-3 text-xs leading-relaxed text-foreground/70">
                            {company.founder}
                          </p>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>

                <dl className="mt-8 grid gap-4 border-t border-primary/10 pt-6 text-sm leading-relaxed">
                  {heritageRegisterRows.map((row) => (
                    <div key={row.label} className="grid gap-1 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-4">
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary/45">
                        {row.label}
                      </dt>
                      <dd className="text-foreground/75">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <p className="mt-6 border-t border-primary/10 pt-4 text-xs leading-relaxed text-foreground/62">
                  {isDe
                    ? "Eingetragen 1986 · in heutiger Form etabliert Januar 1988 · Amtsgericht München, VR 11822."
                    : "Registered in 1986 · established in its current form in January 1988 · Munich local court, VR 11822."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* §1 Heritage — Timeline (existing block, moved here) */}
      <section className="section bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-16">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
                {content.timeline.eyebrow}
              </div>
              <h2 className="mt-4 text-3xl font-bold leading-[1.05] text-primary md:text-4xl lg:text-5xl">
                {content.timeline.title}
              </h2>
              <p className="mt-6 text-sm leading-[1.6] text-foreground/55">
                {content.timeline.footnote}
              </p>
            </div>

            <ol className="relative border-l border-primary/15">
              {content.timeline.items.map((it, idx) => (
                <motion.li
                  key={it.year}
                  initial={{ opacity: 0, x: 8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.04 }}
                  className="relative grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-primary/10 py-7 pl-8 last:border-b-0 md:gap-10"
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-[-5px] top-9 h-2 w-2 rounded-full bg-primary/30"
                  />
                  <div className="font-mono text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                    {it.year}
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/55">
                      {it.kicker}
                    </div>
                    <p className="mt-2 text-base leading-[1.55] text-foreground/80 md:text-[17px]">
                      {it.label}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* §2 Mission and program — Leitmotiv (existing, moved) */}
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
          <div className="mb-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F6D77B]/85">
            <span className="h-px w-10 bg-[#F6D77B]/60" />
            {content.centralStatement.kicker}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-[clamp(1.65rem,3.2vw,3rem)] font-semibold leading-[1.22] tracking-[-0.012em] text-white"
          >
            {content.centralStatement.lead}{" "}{content.centralStatement.bullet}
          </motion.h2>
        </div>
      </section>

      {/* §2 Mission and program — YBLA programme (existing, moved) */}
      <YblaJourney isDe={isDe} />

      {/* §3 Selection — SKELETON (Auswahl der Teilnehmer to be built) */}
      <section className="section border-y-2 border-dashed border-accent/50 bg-amber-50/40">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-700">
            §3 Selection · Skeleton · Auswahl der Teilnehmer
          </div>
          <h2 className="text-3xl font-bold leading-[1.05] text-primary md:text-4xl">
            Wer bei TEG mitmacht, wird ausgewählt.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-foreground/80">
            Exact copy (verbatim from the Nachweis): „Auswahl der Teilnehmer — die
            Aufnahme erfolgt auf Grundlage einer persönlichkeitspsychologischen und
            mathematisch-analytischen Eignungsdiagnostik. Bewertet werden
            Leistungsbereitschaft, Eignung für Personalverantwortung und die
            Fähigkeit, komplexe fachliche und wirtschaftliche Zusammenhänge zu
            durchdringen."
          </p>

          <div className="mt-8 grid gap-6 border border-dashed border-primary/30 bg-white/70 p-6 md:grid-cols-2">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                Media
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                <li>Three criterion cards in a row: „Leistungsbereitschaft", „Eignung für Personalverantwortung", „Komplexitätsverständnis".</li>
                <li>Each card: short eyebrow, one-line definition, no numeric scoring.</li>
                <li>Optional supporting line: yearly intake, application-only, written diagnostic plus interview.</li>
                <li>No portrait photos in this section — selection is about the standard, not the people.</li>
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/70">
                Look and feel
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/80">
                <li>Same calm white/navy register as Heritage. Restraint signals selectivity better than ornament.</li>
                <li>Three-column card grid on desktop, stacked on mobile.</li>
                <li>Thin border cards, primary-tinted eyebrow, two-line body, no icons.</li>
                <li>No CTA in this section. This is a statement of standard, not a recruiting block.</li>
                <li>Place directly after YBLA so the reader learns „what it is" before „who gets in".</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* §4 Mentors and project responsibility — Alumni (PRESERVED BYTE-IDENTICAL, moved) */}
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

      {/* §4 Mentors and project responsibility — Drei Belegformate (existing, moved) */}
      <section
        className="section border-y border-border bg-[linear-gradient(180deg,#f8f3e7_0%,#ffffff_100%)]"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="max-w-3xl text-3xl font-bold leading-[1.05] text-primary md:text-4xl lg:text-5xl">
            {content.formats.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.65] text-foreground/80 md:text-lg">
            {content.formats.intro}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {content.formats.items.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.06 }}
                className="flex flex-col overflow-hidden border border-primary/10 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="aspect-[5/3] overflow-hidden bg-primary/[0.04]">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {item.kind}
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-tight text-primary">
                    {item.title}
                  </h3>
                  <dl className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/80">
                    <div>
                      <dt className="inline text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/55">
                        {isDe ? "Wann · " : "When · "}
                      </dt>
                      <dd className="inline">{item.when}</dd>
                    </div>
                    <div>
                      <dt className="inline text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/55">
                        {isDe ? "Wo · " : "Where · "}
                      </dt>
                      <dd className="inline">{item.where}</dd>
                    </div>
                    <div>
                      <dt className="inline text-[11px] font-semibold uppercase tracking-[0.18em] text-primary/55">
                        {isDe ? "Wer · " : "Who · "}
                      </dt>
                      <dd className="inline">{item.who}</dd>
                    </div>
                  </dl>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* §5 Company-like operating model — Scroll-locked bloom (existing, moved) */}
      <RunLikeCompanyReveal isDe={isDe} />

      {/* §5 Company-like operating model — Team ensemble (existing, moved) */}
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

      {/* §5 Company-like operating model — Heute aktiv (existing, moved) */}
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
