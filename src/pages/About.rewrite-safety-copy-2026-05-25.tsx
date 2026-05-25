import React from "react";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import { PrimaryButton } from "@/components/blocks/PrimaryButton";

const About: React.FC = () => {
  const intl = useIntl();
  const isDe = intl.locale.startsWith("de");
  const officeImageSrc = "/about/office/teg-office-storefront.jpg";
  const [officeImageFailed, setOfficeImageFailed] = React.useState(false);

  const content = {
    hero: {
      eyebrow: isDe ? "About TEG" : "About TEG",
      title: isDe ? "Verantwortung lernt man nicht im Seminar." : "You do not learn responsibility in a seminar.",
      subtitle: isDe ? "TEG ist eine studentisch geführte Organisation, in der Workshops, Konferenzen, Partnerarbeit und öffentliche Sichtbarkeit nicht simuliert, sondern getragen werden." : "TEG is a student-run organization where workshops, conferences, partner work, and public visibility are not simulated. They are carried.",
      description: isDe ? "TEG verbindet ein mehrsemestriges Programm mit öffentlicher Konferenzarbeit, operativer Verantwortung und einer Organisation, die im Alltag verbindlich geführt wird." : "TEG combines a multi-semester program with public conference work, operational responsibility, and an organization run with day-to-day discipline.",
      chips: isDe
        ? [
            { label: "Gegründet", value: "1986 in München" },
            { label: "Programm", value: "3 Semester" },
            { label: "Einsatz", value: "10+ Stunden pro Woche" },
            { label: "Flagship-Format", value: "AI Consulting Conference 2026" },
          ]
        : [
            { label: "Founded", value: "1986 in Munich" },
            { label: "Program", value: "3 semesters" },
            { label: "Commitment", value: "10+ hours per week" },
            { label: "Flagship format", value: "AI Consulting Conference 2026" },
          ],
      signals: isDe
        ? [
            {
              label: "Konferenzformat",
              value: "AI Consulting Conference 2026",
              detail: "Öffentliche Konferenz mit Ticketing, vollständiger Agenda und benannten Verantwortlichen.",
            },
            {
              label: "Mitgliedschaft",
              value: "10+ Stunden pro Woche über 3 Semester",
              detail: "Bewerbungsphase, Interviews, Kick-off und fortlaufende Workshops.",
            },
            {
              label: "Organisation",
              value: "Workshops, Partnerarbeit und Kommunikation",
              detail: "Laufende operative Arbeit mit klaren Verantwortlichkeiten im Team.",
            },
          ]
        : [
            {
              label: "Conference format",
              value: "AI Consulting Conference 2026",
              detail: "Public conference with ticketing, a full agenda, and named leads.",
            },
            {
              label: "Membership",
              value: "10+ hours per week across 3 semesters",
              detail: "Application phase, interviews, kick-off, and ongoing workshops.",
            },
            {
              label: "Organization",
              value: "Workshops, partner work, and communications",
              detail: "Ongoing operational work with clear team responsibilities.",
            },
          ],
      cta_students: isDe ? "Für Studierende" : "For Students",
      cta_companies: isDe ? "Für Unternehmen" : "For Companies",
      figureTitle: isDe ? "Sichtbare Verantwortung statt großer Worte" : "Visible responsibility instead of big words",
      figureCaption: isDe ? "TEG zeigt sich dort, wo Mitglieder Formate tragen, Teams koordinieren und Ergebnisse nach außen sichtbar werden." : "TEG becomes visible where members carry formats, coordinate teams, and make results visible to the outside world.",
      insetLabel: isDe ? "Workshop-Kontext" : "Workshop context",
      insetCaption: isDe ? "Vorbereitung, Speaker-Abstimmung und Vor-Ort-Logistik machen Verantwortung greifbar." : "Preparation, speaker alignment, and on-site logistics make responsibility tangible.",
    },
    skinInTheGame: {
      eyebrow: isDe ? "Differenz" : "Difference",
      title: isDe ? "Nicht nur Netzwerk. Ein Ort mit Verantwortung." : "Not just a network. A place with responsibility.",
      intro: isDe ? "Bei TEG übernehmen Studierende echte Rollen in einer echten Organisation. Genau daraus entstehen die Erfahrungen, die anderswo oft nur behauptet werden." : "At TEG, students take on real roles inside a real organization. That is where the experiences begin that elsewhere are often only claimed.",
      closing: isDe ? "Was hier zählt, ist nicht Teilnahme, sondern tragfähige Ausführung in Teams." : "What matters here is not participation, but durable execution in teams.",
      media: isDe
        ? [
            {
              title: "Workshop-Execution",
              caption: "Vorbereitung, Speaker-Abstimmung und Vor-Ort-Logistik statt passiver Teilnahme.",
              src: "/for-students/events/workshop.avif",
              alt: "TEG Workshop im laufenden Betrieb",
            },
            {
              title: "Öffentliche Formate",
              caption: "TEG Talks und Konferenzformate sind sichtbare Ergebnisse derselben Arbeit.",
              src: "/home/tegtalk-WS26.avif",
              alt: "TEG Talk Format mit Publikum",
            },
            {
              title: "Campus- und Karrierekontext",
              caption: "Karriere- und Eventspuren zeigen TEG in echten Außenräumen.",
              src: "/for-students/cards/ftc-crowd.avif",
              alt: "TEG in einem größeren Event- und Campus-Kontext",
            },
          ]
        : [
            {
              title: "Workshop execution",
              caption: "Preparation, speaker alignment, and on-site logistics instead of passive participation.",
              src: "/for-students/events/workshop.avif",
              alt: "TEG workshop in active execution",
            },
            {
              title: "Public formats",
              caption: "TEG Talks and conference formats are visible results of the same work.",
              src: "/home/tegtalk-WS26.avif",
              alt: "TEG Talk format with audience",
            },
            {
              title: "Campus and career context",
              caption: "Career and event traces place TEG in real external arenas.",
              src: "/for-students/cards/ftc-crowd.avif",
              alt: "TEG in a larger event and campus context",
            },
          ],
      facts: isDe
        ? [
            {
              title: "Verantwortung wird konkret.",
              desc: "Mitglieder bereiten Workshops vor, stimmen sich mit Speakern ab, organisieren Vor-Ort-Abläufe und tragen Ergebnisse nach außen.",
              proof: "Speaker Prep, Logistik, Hosting",
            },
            {
              title: "Umsetzung wird sichtbar.",
              desc: "Formate wie die AI Consulting Conference, TEG Talks und Campus-Präsenz gehen öffentlich live, weil Mitglieder sie wirklich bauen.",
              proof: "Öffentliche Outputs statt interner Claims",
            },
            {
              title: "Sichtbarkeit ist Arbeit.",
              desc: "Website, LinkedIn und Event-Kommunikation sind Teil der operativen Arbeit, nicht nachgelagerte Dekoration.",
              proof: "Marke und Betrieb bleiben gekoppelt",
            },
            {
              title: "Zusammenarbeit ist organisiert.",
              desc: "Klare Schleifen wie Daily Business, Orga, Marketing x Website und Operations x IT Admin verhindern lose Community-Rhetorik.",
              proof: "Belastbare Betriebslogik statt Vibes",
            },
          ]
        : [
            {
              title: "Responsibility becomes concrete.",
              desc: "Members prepare workshops, align with speakers, organize on-site flows, and carry results outward.",
              proof: "Speaker prep, logistics, hosting",
            },
            {
              title: "Execution becomes visible.",
              desc: "Formats like the AI Consulting Conference, TEG Talks, and campus presence go public because members actually build them.",
              proof: "Public outputs instead of internal claims",
            },
            {
              title: "Visibility is work.",
              desc: "Website, LinkedIn, and event communication are part of operations, not decorative afterthoughts.",
              proof: "Brand and operations stay linked",
            },
            {
              title: "Collaboration is organized.",
              desc: "Clear loops like Daily Business, Orga, Marketing x Website, and Operations x IT Admin prevent vague community rhetoric.",
              proof: "Operating logic instead of vibes",
            },
          ],
    },
    foundation: {
      title: isDe ? "Das 1986-Fundament" : "The 1986 Foundation",
      desc: isDe ? "Gegründet 1986, eingetragen im Januar 1988 – initiiert von 4 Studierenden gemeinsam mit 11 Konzernen. Knapp 40 Jahre institutionelle Kontinuität in der Münchner Wirtschaft." : "Founded in 1986, registered in January 1988 – initiated by 4 students alongside 11 corporations. Nearly 40 years of institutional continuity in Munich's economy."
    },
    alumni: {
      title: isDe ? "Ein kleiner Ausschnitt unserer Alumni" : "A small selection of our alumni",
      intro: isDe ? "Drei Jahrzehnte Netzwerk. Eine kleine, öffentliche Auswahl unserer Alumni – viele weitere bleiben lieber diskret." : "Three decades of excellence. A small, public selection of our network – many others prefer to remain discreet."
    },
    office: {
      eyebrow: isDe ? "Unser Büro" : "Our office",
      title: isDe ? "Kein Coworking-Backdrop. Unser operatives Zuhause in München." : "Not a coworking backdrop. Our operational home in Munich.",
      intro: isDe ? "Hier werden Partner-Calls geführt, Konferenzen organisiert, Budgets verhandelt und Entscheidungen bis spät in die Nacht umgesetzt." : "This is where partner calls happen, conferences get built, budgets get negotiated, and decisions get executed late into the night.",
      detail: isDe ? "Eigenes Ladenbüro nahe dem Englischen Garten. Sichtbar, physisch, mit echter Miete und echter Verantwortung." : "A street-level office near the Englischer Garten. Visible, physical, with real rent and real responsibility.",
      caption: isDe ? "Straßenebene, offene Tür, Licht an bis spät abends: TEG ist keine Theorie." : "Street level, open door, lights on late into the evening: TEG is not theory.",
      proofPoints: [
        {
          label: isDe ? "Standort" : "Location",
          value: isDe ? "Englischer Garten, München" : "Englischer Garten, Munich"
        },
        {
          label: isDe ? "Modus" : "Mode",
          value: isDe ? "Ladenbüro, kein Seminarraum" : "Street office, not a seminar room"
        },
        {
          label: isDe ? "Signal" : "Signal",
          value: isDe ? "Licht an bis spät abends" : "Lights on late into the night"
        }
      ]
    },
    structure: {
      title: isDe ? "Run TEG like a company" : "Run TEG like a company",
      intro: isDe ? "Echte operative Units, die ineinandergreifen müssen, sonst fällt die Struktur zusammen." : "Real operational units that must interlock, otherwise the structure collapses.",
      units: [
        { name: "Strategy & Partnership", desc: isDe ? "Steuerung und Unternehmenskooperationen" : "Management and Corporate Cooperations" },
        { name: "People & Culture", desc: isDe ? "Recruiting und interne Entwicklung" : "Recruiting and Internal Development" },
        { name: "Marketing", desc: isDe ? "Brand und Reichweite" : "Brand and Reach" },
        { name: "Finance, Admin & Legal", desc: isDe ? "Buchhaltung und Rechtsfragen" : "Accounting and Legal" }
      ]
    }
  };

  const founders = ["BMW", "BCG", "Roland Berger", "KPMG", "Siemens"];

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
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[#061D38] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(246,215,123,0.18)_0%,transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08)_0%,transparent_42%),linear-gradient(180deg,rgba(6,29,56,0.94)_0%,rgba(6,29,56,1)_100%)]"
        />

        <div className="relative z-10 mx-auto grid max-w-7xl items-end gap-12 px-4 py-20 md:px-8 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)] lg:gap-16 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-5 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F6D77B]">
              {content.hero.eyebrow}
            </div>
            <h1 className="max-w-5xl text-5xl font-bold leading-[0.96] text-white md:text-6xl lg:text-7xl xl:text-[5.4rem]">
              {content.hero.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl font-medium leading-[1.45] text-white/90 md:text-[1.55rem]">
              {content.hero.subtitle}
            </p>
            <p className="mt-5 max-w-3xl text-base leading-[1.75] text-white/72 md:text-lg">
              {content.hero.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:max-w-3xl">
              {content.hero.chips.map((chip) => (
                <div
                  key={`${chip.label}-${chip.value}`}
                  className="border border-white/12 bg-white/6 px-5 py-4 backdrop-blur-sm"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/52">
                    {chip.label}
                  </div>
                  <div className="mt-2 text-sm font-semibold leading-snug text-white/92 md:text-[0.98rem]">
                    {chip.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <PrimaryButton
                label={content.hero.cta_students}
                href="/for-students"
                align="center"
                size="lg"
                className="min-w-[220px]"
              />
              <PrimaryButton
                label={content.hero.cta_companies}
                href="/for-companies"
                align="center"
                size="lg"
                className="min-w-[220px] border border-white/15 bg-white/8 text-white hover:bg-white/14"
              />
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {content.hero.signals.map((signal) => (
                <div
                  key={signal.label}
                  className="border border-white/10 bg-white/6 p-5 shadow-[0_16px_50px_rgba(4,14,31,0.22)] backdrop-blur-sm"
                >
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#F6D77B]/90">
                    {signal.label}
                  </div>
                  <div className="mt-3 text-lg font-semibold leading-snug text-white">
                    {signal.value}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-white/72">
                    {signal.detail}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.figure
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-white/10 bg-white/6 shadow-[0_32px_100px_rgba(0,0,0,0.35)]">
              <img
                src="/shared/images/tegtalk-group-WS26.avif"
                alt={content.hero.figureTitle}
                className="h-full w-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(6,29,56,0.08)_0%,rgba(6,29,56,0.08)_32%,rgba(6,29,56,0.58)_100%)]" />

              <div className="absolute left-4 top-4 max-w-[17rem] border border-white/10 bg-[#0c2749]/92 px-4 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.25)] md:left-6 md:top-6">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F6D77B]/90">
                  {content.hero.figureTitle}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/82">
                  {content.hero.figureCaption}
                </div>
              </div>
            </div>

            <div className="relative -mt-12 ml-auto w-full max-w-[18rem] overflow-hidden border border-white/10 bg-[#0c2749] shadow-[0_22px_60px_rgba(0,0,0,0.32)] sm:-mt-16">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/for-students/events/workshop.avif"
                  alt={content.hero.insetLabel}
                  className="h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#F6D77B]/90">
                  {content.hero.insetLabel}
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/78">
                  {content.hero.insetCaption}
                </div>
              </div>
            </div>
          </motion.figure>
        </div>
      </section>

      {/* 2. Differentiator */}
      <section className="section border-y border-border bg-[linear-gradient(180deg,#f8f3e7_0%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[minmax(320px,0.88fr)_minmax(0,1.12fr)] lg:gap-14">
          <div>
            <div className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary/60">
              {content.skinInTheGame.eyebrow}
            </div>
            <h2 className="max-w-2xl text-4xl font-bold leading-[1.02] text-primary md:text-5xl">
              {content.skinInTheGame.title}
            </h2>
            <p className="mt-6 max-w-xl text-lg font-medium leading-[1.6] text-foreground md:text-xl">
              {content.skinInTheGame.intro}
            </p>

            <div className="mt-10 space-y-4">
              <figure className="overflow-hidden border border-primary/10 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <div className="aspect-[5/4] overflow-hidden">
                  <img
                    src={content.skinInTheGame.media[0].src}
                    alt={content.skinInTheGame.media[0].alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption className="p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                    {content.skinInTheGame.media[0].title}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-foreground/78">
                    {content.skinInTheGame.media[0].caption}
                  </div>
                </figcaption>
              </figure>

              <div className="grid gap-4 sm:grid-cols-2">
                {content.skinInTheGame.media.slice(1).map((item) => (
                  <figure
                    key={item.title}
                    className="overflow-hidden border border-primary/10 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                  >
                    <div className="aspect-[5/4] overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <figcaption className="p-5">
                      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary/55">
                        {item.title}
                      </div>
                      <div className="mt-3 text-sm leading-relaxed text-foreground/78">
                        {item.caption}
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="border-l-2 border-accent pl-4 text-sm leading-relaxed text-foreground/72">
                {content.skinInTheGame.closing}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:gap-5">
            {content.skinInTheGame.facts.map((fact, idx) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                className="grid gap-5 border border-primary/10 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.06)] md:grid-cols-[auto_1fr] md:p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center border border-accent/25 bg-accent/10 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  {(idx + 1).toString().padStart(2, "0")}
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                    {fact.proof}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-primary">
                    {fact.title}
                  </h3>
                  <p className="mt-4 text-base leading-[1.75] text-foreground/82 md:text-[1.02rem]">
                    {fact.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Institutional Depth */}
      <section className="section border-y border-border" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 10px, rgba(226, 232, 240, 0.4) 10px, rgba(226, 232, 240, 0.4) 20px)" }}>
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center bg-white p-12 border border-border shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{content.foundation.title}</h2>
          <p className="text-base md:text-lg font-medium text-foreground leading-relaxed mb-10">
            {content.foundation.desc}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-primary/80">
            {founders.map((f, i) => (
              <span key={i} className="bg-primary-light/5 px-4 py-2 border border-primary/20">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. The Structure */}
      <section className="section bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle text={content.structure.title} />
          <p className="text-xl max-w-prose mb-12 font-medium text-foreground">
            {content.structure.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.structure.units.map((unit, idx) => (
              <div key={idx} className="p-6 border-l-4 border-primary bg-secondary/30">
                <h3 className="text-lg font-bold text-primary mb-2">{unit.name}</h3>
                <p className="text-sm font-normal text-foreground leading-relaxed">{unit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Alumni Proof */}
      <section className="section bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wider">
            {content.alumni.title}
          </h2>
          <p className="text-lg md:text-xl font-light text-secondary-light mb-12">
            {content.alumni.intro}
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

      {/* 6. Office */}
      <section className="section border-t border-border bg-[linear-gradient(180deg,#faf8f3_0%,#f3efe7_100%)]">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[minmax(0,0.82fr)_minmax(360px,1.18fr)] gap-12 xl:gap-16 items-start">
          <div className="max-w-xl">
            <div className="uppercase tracking-[0.24em] text-sm font-bold text-primary/70 mb-5">
              {content.office.eyebrow}
            </div>
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-primary leading-[0.96] max-w-2xl mb-7 text-balance">
              {content.office.title}
            </h2>
            <p className="text-lg md:text-[1.35rem] font-medium text-foreground leading-[1.45] max-w-xl mb-6">
              {content.office.intro}
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-[1.65] max-w-xl mb-10">
              {content.office.detail}
            </p>

            <div className="space-y-3">
              {content.office.proofPoints.map((point) => (
                <div key={point.label} className="border border-primary/10 bg-white/80 backdrop-blur-sm px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)]">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-[11px] uppercase tracking-[0.24em] text-primary/55">{point.label}</div>
                    <div className="text-sm md:text-[0.95rem] font-semibold leading-snug text-primary max-w-[24ch] sm:text-right">{point.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <figure className="bg-white border border-primary/10 shadow-[0_28px_80px_rgba(15,23,42,0.14)] p-3 md:p-4">
            <div className="relative border border-primary/10 bg-[#151219] overflow-hidden aspect-[5/6] md:aspect-[4/5]">
              {!officeImageFailed ? (
                <>
                  <img
                    src={officeImageSrc}
                    alt={isDe ? "TEG Ladenbüro in München bei Nacht" : "TEG street-level office in Munich at night"}
                    className="h-full w-full object-cover object-[53%_46%] contrast-[1.07] saturate-[1.04] brightness-[0.98]"
                    loading="lazy"
                    decoding="async"
                    onError={() => setOfficeImageFailed(true)}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,10,19,0.08)_0%,rgba(14,10,19,0)_38%,rgba(14,10,19,0.18)_74%,rgba(14,10,19,0.78)_100%)]" />
                </>
              ) : (
                <svg viewBox="0 0 760 760" className="w-full h-full block" role="img" aria-label={content.office.caption}>
                <defs>
                  <linearGradient id="wallLeft" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d7cec3" />
                    <stop offset="100%" stopColor="#bba995" />
                  </linearGradient>
                  <linearGradient id="wallRight" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9a6f49" />
                    <stop offset="100%" stopColor="#6c472b" />
                  </linearGradient>
                  <linearGradient id="windowFrame" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#b9b38f" />
                    <stop offset="100%" stopColor="#887f61" />
                  </linearGradient>
                  <linearGradient id="interiorGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e6d8ff" stopOpacity="0.55" />
                    <stop offset="55%" stopColor="#7c3aed" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#14091f" stopOpacity="0.94" />
                  </linearGradient>
                  <radialGradient id="tableGlow" cx="50%" cy="70%" r="40%">
                    <stop offset="0%" stopColor="#d946ef" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <rect width="760" height="760" fill="#0f0f10" />
                <rect x="0" y="0" width="180" height="760" fill="url(#wallLeft)" />
                <rect x="580" y="0" width="180" height="760" fill="url(#wallRight)" />
                <rect x="160" y="560" width="440" height="200" fill="#c5b39b" />
                <rect x="185" y="540" width="390" height="220" fill="#eee3d2" />

                <rect x="210" y="70" width="320" height="520" rx="2" fill="url(#windowFrame)" />
                <rect x="236" y="105" width="270" height="450" fill="#201625" />
                <rect x="236" y="105" width="270" height="450" fill="url(#interiorGlow)" />
                <rect x="236" y="146" width="270" height="18" fill="#a79c79" />
                <rect x="336" y="105" width="14" height="450" fill="#a79c79" />

                <rect x="208" y="125" width="72" height="338" fill="url(#windowFrame)" />
                <rect x="224" y="140" width="42" height="310" fill="#d7cfe8" fillOpacity="0.72" />
                <path d="M208 210 L98 210 L98 545 L208 545" fill="#9d9577" />
                <path d="M216 220 L122 250 L122 530 L216 530" fill="#ece6dc" fillOpacity="0.55" />

                <rect x="310" y="460" width="130" height="14" rx="7" fill="#d946ef" fillOpacity="0.8" />
                <rect x="305" y="472" width="140" height="10" rx="5" fill="#7c3aed" fillOpacity="0.6" />
                <ellipse cx="372" cy="530" rx="55" ry="26" fill="#efe8df" />
                <rect x="362" y="530" width="20" height="66" fill="#d6d4cf" />
                <ellipse cx="372" cy="598" rx="44" ry="10" fill="#bfc1c6" />

                <path d="M296 495 q-22 18 -16 60 q8 26 30 26 q22 0 26 -22 q5 -46 -18 -74 z" fill="#25252b" />
                <path d="M468 486 q30 18 30 64 q-4 28 -26 34 q-24 2 -34 -26 q-10 -38 6 -62 z" fill="#2a2930" />
                <path d="M516 472 q22 15 24 56 q0 31 -24 37 q-24 2 -34 -22 q-10 -38 5 -66 z" fill="#3b3b42" fillOpacity="0.9" />

                <rect x="342" y="238" width="62" height="30" rx="5" fill="#1a1b21" />
                <rect x="332" y="270" width="84" height="8" rx="4" fill="#5f6169" />
                <path d="M470 298 l20 8 l-28 56" stroke="#0b0b0d" strokeWidth="7" fill="none" strokeLinecap="round" />
                <path d="M490 306 l18 58" stroke="#0b0b0d" strokeWidth="7" fill="none" strokeLinecap="round" />
                <path d="M490 306 l-8 60" stroke="#0b0b0d" strokeWidth="7" fill="none" strokeLinecap="round" />
                <circle cx="489" cy="298" r="9" fill="#16161a" />

                <circle cx="418" cy="108" r="8" fill="#f7fafc" fillOpacity="0.95" />
                <circle cx="444" cy="104" r="7" fill="#f7fafc" fillOpacity="0.92" />
                <circle cx="470" cy="110" r="7" fill="#f7fafc" fillOpacity="0.9" />
                <path d="M444 102 l-16 -18" stroke="#6f6858" strokeWidth="5" />
                <path d="M444 102 l18 -20" stroke="#6f6858" strokeWidth="5" />

                <ellipse cx="372" cy="540" rx="180" ry="88" fill="url(#tableGlow)" />
                <rect x="0" y="690" width="760" height="70" fill="#1f1d1d" />

                <path d="M635 120 q50 20 45 98 q-6 86 -44 150 q-30 60 -16 160" stroke="#372819" strokeWidth="12" fill="none" strokeLinecap="round" />
                <path d="M628 104 q62 35 79 92" stroke="#1f361f" strokeWidth="18" fill="none" strokeLinecap="round" />
                <path d="M606 164 q66 22 88 75" stroke="#224424" strokeWidth="16" fill="none" strokeLinecap="round" />
                <path d="M600 226 q70 18 88 84" stroke="#1f4c24" strokeWidth="18" fill="none" strokeLinecap="round" />
                <path d="M594 296 q66 16 80 88" stroke="#28552a" strokeWidth="18" fill="none" strokeLinecap="round" />
              </svg>
              )}

              <figcaption className="absolute inset-x-0 bottom-0 px-5 py-5 md:px-6 md:py-6 text-white">
                <div className="text-[11px] uppercase tracking-[0.24em] text-white/65 mb-2">
                  {content.office.eyebrow}
                </div>
                <div className="text-sm md:text-[0.95rem] font-medium leading-relaxed max-w-[40ch] text-white/95">
                  {content.office.caption}
                </div>
              </figcaption>
            </div>

          </figure>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-24 bg-background border-t border-border focus:outline-none">
        <div className="max-w-4xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
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