import React from "react";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import { PrimaryButton } from "@/components/blocks/PrimaryButton";

const About: React.FC = () => {
  const intl = useIntl();
  const isDe = intl.locale.startsWith("de");

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
        ? "Drei Formate, die regelmäßig in München stattfinden."
        : "Three formats that happen regularly in Munich.",
      intro: isDe
        ? "Die jüngsten Beispiele aus den letzten Monaten."
        : "The most recent examples from the past months.",
      items: isDe
        ? [
            {
              kind: "TEG Talk",
              title: "TEG Talk Corporate Entrepreneurship",
              when: "24. April 2026",
              where: "O2 Tower München — bei Wayra Germany",
              who: "Georg Doll, Dr. Tobias Süß, Paul Sachse, Dr. Irene Lejeune, Dr. Hartwig Rüll",
              img: "/home/tegtalk-WS26.avif",
              alt: "TEG Talk Format mit Publikum",
            },
            {
              kind: "Konferenz",
              title: "AI Consulting Conference 2026",
              when: "10. Juni 2026 — 150 Plätze, nur auf Bewerbung",
              where: "Netlight Offices, Prannerstraße 4, München",
              who: "BCG, McKinsey, Roland Berger, Accenture, appliedAI, IBM, MaibornWolff, Hogan Lovells, Munich Re, Capgemini, PwC, LMU, Netlight",
              img: "/for-students/events/ai-consulting-conference.svg",
              alt: "AI Consulting Conference 2026 — Konferenz-Poster",
            },
            {
              kind: "Workshop",
              title: "„AI in Action\" — Hands-on mit Accenture",
              when: "10. Juni 2026 — 20 Plätze, nur auf Bewerbung",
              where: "Netlight Offices, Prannerstraße 4, München",
              who: "Accenture — plus paralleler Mini-Hackathon mit Netlight",
              img: "/for-students/events/workshop.avif",
              alt: "TEG Workshop Format",
            },
          ]
        : [
            {
              kind: "TEG Talk",
              title: "TEG Talk Corporate Entrepreneurship",
              when: "24 April 2026",
              where: "O2 Tower Munich — hosted at Wayra Germany",
              who: "Georg Doll, Dr. Tobias Süß, Paul Sachse, Dr. Irene Lejeune, Dr. Hartwig Rüll",
              img: "/home/tegtalk-WS26.avif",
              alt: "TEG Talk format with audience",
            },
            {
              kind: "Conference",
              title: "AI Consulting Conference 2026",
              when: "10 June 2026 — 150 seats, application only",
              where: "Netlight Offices, Prannerstraße 4, Munich",
              who: "BCG, McKinsey, Roland Berger, Accenture, appliedAI, IBM, MaibornWolff, Hogan Lovells, Munich Re, Capgemini, PwC, LMU, Netlight",
              img: "/for-students/events/ai-consulting-conference.svg",
              alt: "AI Consulting Conference 2026 — Conference Poster",
            },
            {
              kind: "Workshop",
              title: "\"AI in Action\" — hands-on with Accenture",
              when: "10 June 2026 — 20 seats, application only",
              where: "Netlight Offices, Prannerstraße 4, Munich",
              who: "Accenture — plus a parallel mini-hackathon with Netlight",
              img: "/for-students/events/workshop.avif",
              alt: "TEG workshop format",
            },
          ],
    },

    runLikeCompany: {
      eyebrow: isDe ? "Wie wir arbeiten" : "How we work",
      title: "Run TEG like a company.",
      intro: isDe
        ? "TEG ist studentisch geführt, aber nicht als Club organisiert. Operative Units mit klaren Leads tragen Ergebnisverantwortung — von Strategie bis Operations."
        : "TEG is student-led, but it is not run as a club. Operating units with named leads carry real ownership — from strategy to operations.",
      teamsLabel: isDe ? "Die Leads der Units" : "Unit leads",
      teamsHint: isDe
        ? "Sechs Units. Zwei besetzt, vier in Auswahl — Übergaben laufen."
        : "Six units. Two seated, four in selection — handovers in progress.",
      placeholderName: isDe ? "N. N." : "N. N.",
      placeholderRole: isDe ? "In Auswahl" : "Selection in progress",
      teams: [
        {
          slug: "strategy",
          name: "Strategy",
          lead: "Feristah Fenkci",
          role: isDe ? "Head of Strategy" : "Head of Strategy",
          photo: "/about/team-leads/feristah-fenkci.jpg",
          initials: "FF",
          placeholder: false,
        },
        {
          slug: "marketing",
          name: "Marketing & Brand",
          lead: null as string | null,
          role: null as string | null,
          photo: null as string | null,
          initials: "—",
          placeholder: true,
        },
        {
          slug: "partnerships",
          name: "Partnerships",
          lead: null as string | null,
          role: null as string | null,
          photo: null as string | null,
          initials: "—",
          placeholder: true,
        },
        {
          slug: "operations",
          name: "Operations",
          lead: "Ahmed Kaddour",
          role: isDe ? "Head of Operations" : "Head of Operations",
          photo: "/about/team-leads/ahmed-kaddour.jpg",
          initials: "AK",
          placeholder: false,
        },
        {
          slug: "members",
          name: isDe ? "Members & Kultur" : "Members & Culture",
          lead: null as string | null,
          role: null as string | null,
          photo: null as string | null,
          initials: "—",
          placeholder: true,
        },
        {
          slug: "events",
          name: "Events",
          lead: null as string | null,
          role: null as string | null,
          photo: null as string | null,
          initials: "—",
          placeholder: true,
        },
      ],
    },

    centralStatement: {
      kicker: isDe ? "Unser Anspruch" : "Our ambition",
      headline: isDe
        ? "Wir formen die nächsten Führungspersönlichkeiten der deutschen Wirtschaft."
        : "We shape the next generation of leaders in German business.",
    },

    timeline: {
      eyebrow: isDe ? "40 Jahre TEG" : "40 years of TEG",
      title: isDe ? "Seit 1986 in München." : "In Munich since 1986.",
      placeholderLabel: isDe ? "Inhalt folgt" : "Content coming",
      items: [
        { year: "1986", label: isDe ? "Meilenstein-Platzhalter" : "Milestone placeholder" },
        { year: "1995", label: isDe ? "Meilenstein-Platzhalter" : "Milestone placeholder" },
        { year: "2005", label: isDe ? "Meilenstein-Platzhalter" : "Milestone placeholder" },
        { year: "2015", label: isDe ? "Meilenstein-Platzhalter" : "Milestone placeholder" },
        { year: "2024", label: isDe ? "Meilenstein-Platzhalter" : "Milestone placeholder" },
        { year: "2026", label: isDe ? "Meilenstein-Platzhalter" : "Milestone placeholder" },
      ],
      footnote: isDe
        ? "Vollständige Chronik in Vorbereitung."
        : "Full chronicle in preparation.",
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

    facts: {
      eyebrow: isDe ? "Standort & Kontakt" : "Location & contact",
      title: isDe ? "Hard Facts." : "Hard facts.",
      rows: isDe
        ? [
            { k: "Gegründet", v: "1986" },
            { k: "Rechtsform", v: "Eingetragener Verein (e. V.)" },
            { k: "Sitz", v: "Kaulbachstraße 64, 80539 München" },
            { k: "Schwerpunkte", v: "Entrepreneurship, B2B-Innovation, Mittelstand- & DAX-Partnerschaften, Revenue-First-Ventures" },
            { k: "LinkedIn", v: "linkedin.com/company/teg-ev" },
          ]
        : [
            { k: "Founded", v: "1986" },
            { k: "Legal form", v: "Registered non-profit (e. V.)" },
            { k: "Headquarters", v: "Kaulbachstraße 64, 80539 Munich, Germany" },
            { k: "Specialties", v: "Entrepreneurship, B2B innovation, Mittelstand & DAX partnerships, revenue-first ventures" },
            { k: "LinkedIn", v: "linkedin.com/company/teg-ev" },
          ],
    },
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
            {isDe ? "Über uns" : "About"} · 01 / 08
          </div>
        </motion.div>

        {/* Headline block */}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-16 md:px-8 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="max-w-[16ch] font-bold leading-[0.92] tracking-[-0.02em] text-white text-[clamp(2.75rem,9vw,8rem)]"
          >
            {isDe ? "Echte Unternehmen." : "Real businesses."}
            <br />
            <span className="text-white/55">{isDe ? "Echte Verantwortung." : "Real responsibility."}</span>
            <br />
            <span className="text-[#F6D77B]">{isDe ? "Seit 1986." : "Since 1986."}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
            className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between md:gap-16"
          >
            <p className="max-w-[36ch] text-base leading-[1.55] text-white/80 md:text-lg">
              {isDe
                ? "Studierende und C-Level-Praktiker bauen in München gemeinsam Projekte, Partnerschaften und Konferenzen."
                : "In Munich, students and C-level operators build projects, partnerships and conferences — together."}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <PrimaryButton
                label={content.hero.cta_students}
                href="/for-students"
                align="center"
                size="lg"
                className="min-w-[200px]"
              />
              <PrimaryButton
                label={content.hero.cta_companies}
                href="/for-companies"
                align="center"
                size="lg"
                className="min-w-[200px] border border-white/20 bg-transparent text-white hover:bg-white/[0.08]"
              />
            </div>
          </motion.div>
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

      {/* 2. Drei Belegformate */}
      <section className="section border-y border-border bg-[linear-gradient(180deg,#f8f3e7_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="max-w-3xl text-3xl font-bold leading-[1.05] text-primary md:text-4xl lg:text-5xl">
            {content.formats.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.65] text-foreground/80 md:text-lg">
            {content.formats.intro}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
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

      {/* 3. Run TEG like a company */}
      <section className="section relative isolate overflow-hidden bg-[#061D38] text-white">
        {/* subtle ambient backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(60% 50% at 85% 0%, rgba(246,215,123,0.18) 0%, rgba(6,29,56,0) 60%), radial-gradient(50% 50% at 0% 100%, rgba(255,255,255,0.06) 0%, rgba(6,29,56,0) 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 3px)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#F6D77B]/85">
            <span className="h-px w-8 bg-[#F6D77B]/60" />
            {content.runLikeCompany.eyebrow}
          </div>
          <h2 className="max-w-3xl text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-5xl">
            {content.runLikeCompany.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-[1.65] text-white/70 md:text-lg">
            {content.runLikeCompany.intro}
          </p>

          <div className="mt-10 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/45">
            <span>{content.runLikeCompany.teamsLabel}</span>
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-white/55 normal-case tracking-normal text-xs font-normal">
              {content.runLikeCompany.teamsHint}
            </span>
          </div>

          {/* Immersive garden: organic portrait constellation */}
          <div className="relative mt-12 md:mt-16">
            {/* atmospheric blooms */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -top-10 left-[12%] h-72 w-72 rounded-full bg-[#F6D77B]/[0.05] blur-3xl" />
              <div className="absolute top-[35%] right-[8%] h-96 w-96 rounded-full bg-white/[0.04] blur-3xl" />
              <div className="absolute bottom-0 left-[40%] h-80 w-80 rounded-full bg-[#F6D77B]/[0.04] blur-3xl" />
            </div>

            <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-x-6 md:gap-y-10">
              {content.runLikeCompany.teams.map((team, idx) => {
                // Asymmetric placement: two leads anchor at large scale, four placeholders weave around them
                const layouts = [
                  // Strategy — Feristah (large anchor, top-left)
                  { cls: "md:col-span-5 md:col-start-1 md:row-start-1 md:translate-y-0", aspect: "aspect-[4/5]", float: 9 },
                  // Marketing placeholder (small, top-mid)
                  { cls: "md:col-span-3 md:col-start-7 md:row-start-1 md:translate-y-6", aspect: "aspect-[3/4]", float: 11 },
                  // Partnerships placeholder (small, top-right, sinks further)
                  { cls: "md:col-span-3 md:col-start-10 md:row-start-1 md:translate-y-20", aspect: "aspect-[3/4]", float: 13 },
                  // Operations — Ahmed (large anchor, mid, slightly indented)
                  { cls: "md:col-span-5 md:col-start-3 md:row-start-2 md:translate-y-2", aspect: "aspect-[4/5]", float: 10 },
                  // Members placeholder (small, mid-right, lifted)
                  { cls: "md:col-span-3 md:col-start-9 md:row-start-2 md:-translate-y-6", aspect: "aspect-[3/4]", float: 12 },
                  // Events placeholder (small, bottom-left, lifted)
                  { cls: "md:col-span-3 md:col-start-1 md:row-start-3 md:-translate-y-10", aspect: "aspect-[3/4]", float: 14 },
                ];
                const layout = layouts[idx] ?? layouts[0];
                const entryFromLeft = idx % 2 === 0;

                return (
                  <motion.figure
                    key={team.slug}
                    initial={{ opacity: 0, y: 32, x: entryFromLeft ? -18 : 18 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.95,
                      delay: idx * 0.11,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative ${layout.cls}`}
                  >
                    <motion.div
                      animate={{ y: [0, -5, 0, 4, 0] }}
                      transition={{
                        duration: layout.float,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.6,
                      }}
                      className="group relative"
                    >
                      <div
                        className={`relative ${layout.aspect} overflow-hidden rounded-[2px] bg-gradient-to-br from-white/10 to-white/[0.02] ring-1 ring-white/10 transition-all duration-700 group-hover:ring-[#F6D77B]/40`}
                      >
                        {team.photo ? (
                          <>
                            <img
                              src={team.photo}
                              alt={team.lead ?? team.name}
                              loading="lazy"
                              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
                              onError={(e) => {
                                const img = e.currentTarget;
                                img.style.display = "none";
                                const fallback = img.nextElementSibling as HTMLElement | null;
                                if (fallback) fallback.style.display = "flex";
                              }}
                            />
                            <span
                              className="absolute inset-0 hidden items-center justify-center text-2xl font-light tracking-[0.4em] text-white/40"
                              aria-hidden="true"
                            >
                              {team.initials}
                            </span>
                          </>
                        ) : (
                          <div className="relative flex h-full w-full items-center justify-center">
                            {/* placeholder: organic silhouette */}
                            <div
                              aria-hidden="true"
                              className="absolute inset-0"
                              style={{
                                backgroundImage:
                                  "radial-gradient(60% 50% at 50% 38%, rgba(246,215,123,0.10) 0%, rgba(255,255,255,0.02) 55%, rgba(6,29,56,0) 75%)",
                              }}
                            />
                            <div
                              aria-hidden="true"
                              className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                              style={{
                                backgroundImage:
                                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.6) 0 1px, transparent 1px 4px)",
                              }}
                            />
                            <span className="relative text-[10px] font-semibold uppercase tracking-[0.4em] text-white/35">
                              {content.runLikeCompany.placeholderName}
                            </span>
                          </div>
                        )}

                        {/* veil for legibility */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#040F1F] via-[#040F1F]/75 to-transparent"
                        />
                        {/* gold hairline grows on hover */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-0 left-0 h-px w-1/3 bg-[#F6D77B] transition-all duration-700 group-hover:w-full"
                        />

                        <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-4 md:px-5 md:pb-5">
                          <div className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#F6D77B]/90 md:text-[10px]">
                            {team.name}
                          </div>
                          <div className="mt-1.5 text-base font-semibold leading-tight text-white md:text-lg">
                            {team.lead ?? content.runLikeCompany.placeholderName}
                          </div>
                          <div className="mt-0.5 text-xs leading-snug text-white/60">
                            {team.role ?? content.runLikeCompany.placeholderRole}
                          </div>
                        </figcaption>
                      </div>
                    </motion.div>
                  </motion.figure>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 3b. Central immersive statement */}
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
          <div className="mb-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F6D77B]/85">
            <span className="h-px w-10 bg-[#F6D77B]/60" />
            {content.centralStatement.kicker}
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl text-balance text-[clamp(2rem,5.5vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-white"
          >
            {content.centralStatement.headline}
          </motion.h2>
        </div>
      </section>

      {/* 4. Timeline — placeholders, corporate layout */}
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
                    <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary/40">
                      {content.timeline.placeholderLabel}
                    </div>
                    <p className="mt-2 text-base leading-[1.55] text-foreground/45 md:text-lg">
                      {it.label}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5. Alumni Proof — PRESERVED BYTE-IDENTICAL */}
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

      {/* 6. Heute aktiv */}
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

      {/* 7. Hard Facts */}
      <section className="section border-t border-border bg-[linear-gradient(180deg,#f8f3e7_0%,#ffffff_100%)]">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
            {content.facts.eyebrow}
          </div>
          <h2 className="max-w-2xl text-3xl font-bold leading-[1.05] text-primary md:text-4xl">
            {content.facts.title}
          </h2>

          <dl className="mt-10 divide-y divide-primary/10 border-y border-primary/10 bg-white">
            {content.facts.rows.map((row) => (
              <div key={row.k} className="grid grid-cols-1 gap-2 px-5 py-5 md:grid-cols-[200px_1fr] md:gap-6 md:px-7">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                  {row.k}
                </dt>
                <dd className="text-sm leading-relaxed text-foreground/85 md:text-base">
                  {row.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 8. Final CTA */}
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
