import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, ChevronRight } from "lucide-react";

// --- DATEN: AUSWAHL BISHERIGER SPEAKER (Quelle: Events-Seite) ---
const pastSpeakers = [
  { name: "Florian Bauer", role: "Senior Partner, McKinsey & Company" },
  { name: "Marcus Hartmann", role: "Senior Partner, Roland Berger" },
  { name: "Jennifer Treiber-Ruckenbrod", role: "Global CMO, MINI" },
  { name: "Andrea Martin", role: "CTO DACH, IBM" },
  { name: "Georg Doll", role: "CTO Automotive & Mobility, Microsoft" },
  {
    name: "Hansjörg Briegel",
    role: "Vice President Ecosystem Development, Intel",
  },
  {
    name: "Jan Goetz",
    role: "Co-Founder & Managing Director, IQM Quantum Computers",
  },
  { name: "Osman Agirbas", role: "Managing Director, Interhyp Group" },
];

// --- DATEN: MÖGLICHKEITEN DES ENGAGEMENTS ---
const engagements = [
  {
    title: "YBLA Workshop",
    desc: "Ein Samstag mit einer kleinen Gruppe unserer Teilnehmer, vier bis acht Stunden, mit einem Praxisimpuls oder einem Herzensthema aus Ihrem Führungsalltag. Viele Führungskräfte greifen dafür auf Folien und Case Studies aus der internen Führungskräfteentwicklung ihres Unternehmens zurück. Vereinfachen müssen Sie nichts: Unsere Teilnehmer setzen sich intensiv mit disziplinarischer Führung auseinander und kommen auf diesem Niveau mit.",
    formats: {
      intro: "Ebenso möglich sind:",
      items: [
        "eine Q&A-Session, für die wir zu Beginn Fragen sammeln, die Sie der Reihe nach beantworten,",
        "eine Reflexion, etwa über Führung als introvertierte Person,",
        "oder ein offenes, ungelöstes Problem aus Ihrem Unternehmen als Case Study, zu dem die Gruppe Denkanstöße liefert.",
      ],
    },
  },
  {
    title: "Vortrag",
    desc: "Ein Vortrag oder eine Panel-Teilnahme bei einer unserer Veranstaltungen, vor Kollegen aus anderen Unternehmen.",
  },
  {
    title: "Mentoring",
    desc: "Sie stehen einem Teilnehmer, der in Ihrem Fachgebiet Verantwortung übernimmt, als Ansprechpartner aus der Praxis zur Seite.",
  },
  {
    title: "Gastgeber oder Förderer",
    desc: "Sie stellen für einen Abend Ihre Räume zur Verfügung oder unterstützen eine Veranstaltung finanziell.",
  },
];

// --- DATEN: TESTIMONIALS ---
const testimonials = [
  {
    quote:
      "Wir brauchen in Deutschland mehr Eigeninitiative und mehr Unternehmertum, um das Land wieder nach vorn zu bringen. Dafür engagiert sich TEG. Ein wichtiger Beitrag, von dem alle Beteiligten profitieren.",
    author: "Johannes Pruchnow",
    position: "Principal, McKinsey & Company",
    img: "/for-companies/testimonials/johannes-pruchnow.avif",
  },
  {
    quote:
      "Unternehmer zu sein heißt Verantwortung zu übernehmen. TEG eröffnet Studenten die Möglichkeit eigene Ideen umzusetzen und an diesen Herausforderungen zu wachsen.",
    author: "Prof. Dr. h.c. Roland Berger",
    position: "Unternehmer und Gründer Roland Berger GmbH",
    img: "/for-companies/testimonials/roland-berger.avif",
  },
  {
    quote:
      "Nachdem ich das Team zufälligerweise an einem Samstagabend um 23 Uhr arbeitend in ihrem Büro gesehen habe, dachte ich mir, dass diese Initiative es wert ist, unterstützt zu werden.",
    author: "Dr. Bernd Wiemann",
    position: "CEO Vodafone Pilotentwicklung",
    img: "/for-companies/testimonials/bernd-wiedemann.avif",
  },
  {
    quote:
      "Die Studenten zeichnen sich durch ein hohes Maß an Professionalität und Engagement aus. Solche Initiativen sind essentiell für die Ausbildung zukünftiger Führungskräfte.",
    author: "Bodo Donauer",
    position: "Ehem. Leiter Fahrwerkentwicklung, BMW Group",
    img: "/for-companies/testimonials/bodo-donauer.avif",
  },
];

// --- DATEN: LOGOS ---
const scrollingLogos = [
  { name: "BMW", src: "/shared/logos/bmw.avif" },
  { name: "McKinsey", src: "/shared/logos/mckinsey.avif" },
  { name: "BCG", src: "/shared/logos/bcg.avif" },
  { name: "Airbus", src: "/shared/logos/airbus.svg" },
  { name: "Siemens", src: "/shared/logos/siemens.svg" },
  { name: "Roland Berger", src: "/shared/logos/roland-berger.svg" },
  { name: "HVB", src: "/shared/logos/hypovereinsbank.svg" },
  { name: "Ruhrgas", src: "/shared/logos/ruhrgas.avif" },
  { name: "Vodafone", src: "/shared/logos/vodafone.avif" },
];

const linkClass =
  "inline-flex items-center gap-2 text-[#B7860B] hover:text-[#0F2B57] text-xs font-bold uppercase tracking-[0.2em] transition-colors";

const ForCompanies: React.FC = () => {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans [overflow-x:clip] text-left">
      {/* 1. HERO */}
      <section className="relative min-h-[85vh] w-full overflow-hidden bg-[#0A1628] flex flex-col justify-end">
        <img
          src="/shared/heroes/hero-home.avif"
          alt=""
          className="w-full h-full absolute inset-0 object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/50 to-transparent" />
        <div className="relative z-10 container-custom px-4 md:px-8 mx-auto w-full pb-20">
          <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
            Für Führungskräfte
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.05] md:leading-[1.02] text-white max-w-4xl">
            Ein Abend unter Führungskräften.
          </h1>
          <p className="text-white/80 mt-8 text-lg md:text-xl leading-relaxed max-w-2xl">
            Mehrmals im Jahr laden wir Führungskräfte aus Konzernen und
            Mittelstand nach München ein. Einige sprechen, die meisten kommen
            zum Zuhören und für die Gespräche danach. Vorbereitet und geleitet
            werden diese Abende von Studierenden und Berufseinsteigern, die bei
            uns eine Führungsausbildung durchlaufen.
          </p>
        </div>
      </section>

      {/* 2. VERANSTALTUNGEN */}
      <section className="py-24 bg-white">
        <div className="container-custom px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Veranstaltungen
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-[#0F2B57] mb-6">
                Wer bei uns spricht
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-8">
                Auf der Bühne stehen Partner, Geschäftsführer und
                Bereichsleiter. Im Publikum sitzen Menschen in vergleichbaren
                Positionen. Die Runden sind bewusst klein, die Gästeliste
                stellen wir selbst zusammen. Termine und Anmeldung finden Sie im
                Veranstaltungskalender.
              </p>
              <a href="/events" className={linkClass}>
                Zum Veranstaltungskalender <ChevronRight size={16} />
              </a>
            </div>

            <div className="lg:col-span-7">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">
                Zuletzt bei uns zu Gast
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-slate-200">
                {pastSpeakers.map((sp) => (
                  <li key={sp.name} className="py-4 border-b border-slate-200">
                    <p className="font-bold text-[#0F2B57] leading-snug">
                      {sp.name}
                    </p>
                    <p className="text-slate-500 text-sm leading-snug mt-1">
                      {sp.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIE YBLA */}
      <section className="py-24 bg-[#0A1628] text-white">
        <div className="container-custom px-4 md:px-8 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                Wer dahintersteht
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-white mb-6">
                Wer die Abende organisiert
              </h2>
              <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
                <p>
                  Die Veranstaltungen sind das Praxisprojekt unserer Young
                  Business Leadership Academy. Über 18 Monate, parallel zu
                  Studium oder Beruf, besuchen die Teilnehmer Workshops mit
                  erfahrenen Führungskräften, arbeiten in festen Teams und
                  leiten am Ende ein eigenes Projekt, zum Beispiel eine dieser
                  Veranstaltungen. Alle sechs Monate beginnt eine neue Kohorte.
                  Aus jeweils über hundert Bewerbungen wählen wir 8 bis 15
                  Teilnehmer aus.
                </p>
                <p>
                  Das Programm gibt es seit 1986. Von gut 300 Absolventen sind
                  heute 41 im Top-Management großer Konzerne und 40 in der
                  Geschäftsführung mittelständischer Unternehmen.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full overflow-hidden border border-white/10">
                <img
                  src="/shared/ybla-meeting.jpeg"
                  alt="Workshop der Young Business Leadership Academy"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ENGAGEMENT */}
      <section className="py-24 bg-white">
        <div className="container-custom px-4 md:px-8 mx-auto">
          <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
            Engagement
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.1] text-[#0F2B57] mb-4 max-w-3xl">
            Wo wir Unterstützung suchen
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl mb-12">
            Es gibt vier Wege, sich einzubringen. Wie viel Zeit Sie investieren,
            entscheiden Sie.
          </p>
          <dl className="max-w-4xl border-t border-slate-200">
            {engagements.map((e) => (
              <div
                key={e.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-6 border-b border-slate-200"
              >
                <dt className="md:col-span-4 font-bold text-[#0F2B57] text-lg leading-snug">
                  {e.title}
                </dt>
                <dd className="md:col-span-8 text-slate-500 text-lg leading-relaxed">
                  <p>{e.desc}</p>
                  {"formats" in e && e.formats && (
                    <>
                      <p className="mt-4">{e.formats.intro}</p>
                      <ul className="mt-2 space-y-1 list-disc pl-5 marker:text-[#B7860B]">
                        {e.formats.items.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <a href="#contact" className={`mt-10 ${linkClass}`}>
            Schreiben Sie mir gerne direkt <ChevronRight size={16} />
          </a>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container-custom px-4 md:px-8 mx-auto">
          <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-12 block">
            Stimmen
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
            {testimonials.map((t) => (
              <figure key={t.author} className="flex gap-6">
                <img
                  src={t.img}
                  alt={t.author}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover shrink-0 border border-slate-200"
                />
                <div>
                  <blockquote className="text-slate-600 text-lg leading-relaxed italic">
                    „{t.quote}“
                  </blockquote>
                  <figcaption className="mt-4">
                    <p className="font-bold text-[#0F2B57]">{t.author}</p>
                    <p className="text-slate-500 text-sm">{t.position}</p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LOGO MARQUEE */}
      <section className="py-16 bg-white overflow-hidden border-b border-slate-100">
        <div className="flex whitespace-nowrap">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-24 pr-24"
          >
            {scrollingLogos.concat(scrollingLogos).map((l, idx) => (
              <img
                key={idx}
                src={l.src}
                alt={l.name}
                className="h-10 md:h-12 w-auto object-contain opacity-70"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 7. KONTAKT */}
      <section id="contact" className="pb-32 pt-20 bg-white px-4 text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl min-h-[450px]">
          <div className="md:w-1/2 w-full h-80 md:h-auto bg-slate-50 flex items-start text-left">
            <img
              src="/for-companies/contact/jonathan.avif"
              alt="Jonathan Babelotzky"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full bg-[#0F2B57] p-10 md:p-16 flex flex-col justify-center text-white text-left">
            <div className="flex gap-4 mb-10 text-left">
              <div className="w-[3px] bg-[#B7860B] text-left" />
              <p className="italic text-2xl text-slate-200 leading-tight text-left">
                „Wenn Sie mehr wissen möchten, schreiben Sie mir einfach. Ich
                melde mich persönlich.“
              </p>
            </div>
            <div className="mb-12 text-left">
              <h3 className="text-2xl font-bold mb-1 text-white uppercase tracking-tight">
                Jonathan Babelotzky
              </h3>
              <p className="text-[#B7860B] text-[10px] font-black uppercase tracking-[0.2em] text-left">
                Leitung Strategie und Partnerschaften
              </p>
            </div>
            <div className="flex gap-12 text-left">
              <a
                href="https://www.linkedin.com/in/jonathan-babelotzky/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-[#B7860B] text-xs font-black uppercase transition-colors text-left"
              >
                <Linkedin size={32} /> LinkedIn
              </a>
              <a
                href="mailto:jonathan.babelotzky@teg-ev.de"
                className="flex items-center gap-3 text-white hover:text-[#B7860B] text-xs font-black uppercase transition-colors text-left"
              >
                <Mail size={32} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
