import React, { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import {
  Mail,
  Linkedin,
  MousePointer2,
  ChevronRight,
  Target,
  CheckCircle2,
  Calendar,
  Clock,
  Info,
} from "lucide-react";

// Hilfskomponente für die hochzählenden Zahlen
const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [numericValue]);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
};

const ForStudents: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.4 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scrollingLogos = [
    { name: "BMW", src: "/shared/logos/bmw-image.webp" },
    { name: "BCG", src: "/shared/logos/bcg.avif" },
    { name: "Siemens", src: "/shared/logos/siemens.svg" },
    { name: "HVB", src: "/shared/logos/hypovereinsbank.svg" },
    { name: "Roland Berger", src: "/shared/logos/roland-berger.svg" },
    { name: "Ruhrgas", src: "/shared/logos/ruhrgas.avif" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans overflow-x-hidden">
      {/* SEKTION 1: HERO & INTRO */}
      <div className="relative min-h-[470px] w-full overflow-hidden bg-slate-900 text-left md:h-[45vh] md:min-h-0">
        <img
          src="/for-students/commitment/ancient-group.avif"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 flex items-start pt-24 md:items-center md:pt-20 xl:pt-24">
          <div className="container-custom px-4 md:px-8 mx-auto w-full">
            <div className="max-w-2xl border-l-8 border-white bg-slate-900 p-6 text-left shadow-2xl sm:p-8">
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em] block mb-2 opacity-80">
                GEGRÜNDET 1986
              </span>
              <h1 className="text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
                Gestalte die Wirtschaft von morgen
              </h1>
              <p className="text-white/60 mt-4 text-base leading-relaxed">
                Die Schmiede zukünftiger Führungskräfte
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container-custom px-0 md:px-8 text-left mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            <div className="md:col-span-6 flex flex-col justify-center">
              <div className="h-1 w-16 bg-[#B7860B] mb-6" />
              <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-6 leading-[1.1] text-[#0F2B57]">
                TEG: Eine Gemeinschaft, die Maßstäbe setzt
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed">
                Seit 1986 entwickeln wir mit großem Erfolg ambitionierte
                Studierende und Berufseinsteiger zu Führungskräften und
                Geschäftsführern. Wir richten uns an alle Fachrichtungen.
              </p>
            </div>

            <div className="md:col-span-6 flex">
              <a
                href="/events"
                className="w-full p-8 md:p-10 bg-[#0F2B57] text-white rounded-xl relative overflow-hidden shadow-xl group transition-all hover:bg-[#163a75] flex flex-col justify-between text-left"
              >
                <p className="text-lg md:text-xl leading-snug font-medium mb-8">
                  Du möchtest wissen was die Unternehmensführungen deutscher
                  Firmen heute bewegt? Egal ob Automobil-Industrie,
                  Biotechnologie, Consulting, Chemie, IT oder Logistik: bei uns
                  gibt es einen rundum Blick über alle deutschen Industrien.
                  Bewirb dich für die Teilnahme bei einem unserer Events.
                </p>
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                  Zum Event-Kalender <ChevronRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEKTION 2: FLAGGSCHIFF-PROGRAMM */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="container-custom px-4 md:px-8 mx-auto text-left md:text-center">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4 md:justify-center">
              <div className="h-1 w-12 bg-[#B7860B]" />
              <span className="text-[#B7860B] font-bold uppercase tracking-widest text-sm">
                Unser Flaggschiff-Programm
              </span>
              <div className="h-1 w-12 bg-[#B7860B] hidden md:block" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F2B57] uppercase tracking-tighter leading-tight">
              Young Business Leadership Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7 text-left order-2 md:order-1">
              <h3 className="text-2xl font-bold text-[#0F2B57] mb-6 uppercase tracking-tight">
                Was ist die YBLA?
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Die <strong>YBLA</strong> ist ein exklusives
                  Ausbildungsangebot innerhalb von TEG, das darauf ausgerichtet
                  ist, dich auf die Herausforderungen moderner Führung
                  vorzubereiten. Wir richten uns an alle Studiengänge, jedoch
                  kommen die meisten Teilnehmer aus: den{" "}
                  <strong>Naturwissenschaften</strong>, der{" "}
                  <strong>Technik</strong>, der <strong>Wirtschaft</strong>, den{" "}
                  <strong>Rechtswissenschaften (Jura)</strong> sowie der{" "}
                  <strong>Mathematik</strong>
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#B7860B] mt-1 shrink-0"
                      size={20}
                    />
                    <span>
                      <strong>Lerne von den Besten:</strong> Nimm teil an
                      exklusiven Workshops mit führenden C-Levels und Gründern
                      und knüpfe Kontakte zur Spitze der deutschen Wirtschaft.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#B7860B] mt-1 shrink-0"
                      size={20}
                    />
                    <span>
                      <strong>Praxis und Vorsprung:</strong> Erlerne
                      entscheidende Fähigkeiten in Bereichen wie Teamführung,
                      Risikomanagement und Strategie, die man in keinem Hörsaal
                      lernt.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      className="text-[#B7860B] mt-1 shrink-0"
                      size={20}
                    />
                    <span>
                      <strong>Community:</strong> Werde Teil einer selektierten
                      Gemeinschaft mit der zukünftigen Generation deutscher
                      Führungskräfte, Gründer und Top-Manager.
                    </span>
                  </li>
                </ul>
                <p className="pt-4 font-bold text-[#0F2B57]">
                  Dein Beitrag bleibt nicht undokumentiert: Hast du die 3
                  Semester erfolgreich absolviert, wirst du TEGler auf
                  Lebenszeit. Weiterhin erhältst du ein Abschlusszeugnis,
                  welches deine Leistungen und Führungsreife bestätigt.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/shared/ybla-meeting.jpeg"
                  alt="YBLA"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKTION 3: COMMITMENT */}
      <section className="py-20 bg-white">
        <div className="container-custom px-4 md:px-8 mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-stretch">
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8 text-[#0F2B57] leading-[1.1]">
                  TEG IST NICHT FÜR JEDEN: <br />
                  <span className="text-[#B7860B]">
                    10+ STUNDEN COMMITMENT
                  </span>{" "}
                  PRO WOCHE
                </h2>
                <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                  <p>
                    Deine Mitgliedschaft ist eine 3-semestrige Grundausbildung
                    parallel zum Studium.
                  </p>
                  <p className="font-bold text-[#0F2B57] border-l-4 border-[#B7860B] pl-6 py-2">
                    Durch Praxis-Projekte erlernst du Kompetenzen auf einem
                    Level deutlich über dem normalen Berufseinstieg.
                  </p>
                </div>
              </div>
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl mt-10 bg-slate-50">
                <img
                  src="/for-students/commitment/training-session.jpeg"
                  alt="TEG Training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.div
              className="md:col-span-7 flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  s: "1. Semester: Onboarding",
                  l: [
                    "Onboarding in jeweiliges Team und Einarbeitung",
                    "Mentoring durch Teamlead",
                    "Exklusive Workshops & Training der eigenen Fähigkeiten",
                  ],
                  n: "1",
                },
                {
                  s: "2. Semester: Praxis",
                  l: [
                    "Exklusive Praktika und Erfahrungen",
                    "Professional-Zertifikat",
                    "Projektleitung und Mitorganisation von Events",
                  ],
                  n: "2",
                },
                {
                  s: "3. Semester: Leadership",
                  l: [
                    "Individuelles Coach-Zertifikat",
                    "Mitgestaltung der Zukunft von TEG",
                  ],
                  n: "3",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row gap-6 w-full group"
                  variants={itemVariants}
                >
                  <div className="flex flex-row md:flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#0F2B57] flex items-center justify-center text-white font-black shrink-0 shadow-lg text-xl">
                      {item.n}
                    </div>
                    {i < 2 && (
                      <div className="hidden md:block w-0.5 flex-1 bg-slate-100 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-md transition-all">
                    <h4 className="text-2xl md:text-3xl font-black text-[#0F2B57] mb-4 uppercase tracking-tight">
                      {item.s}
                    </h4>
                    <ul className="text-lg md:text-xl text-slate-500 space-y-3">
                      {item.l.map((li, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div className="w-2.5 h-2.5 bg-[#0F2B57] rounded-full shrink-0 mt-2" />
                          <span className="leading-tight">{li}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEKTION 4: CAREERPATHS (FIXED CLIPPING & SPACING) */}
      <section className="py-24 bg-[#091C3A] text-white relative overflow-hidden">
        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none text-[#B7860B]">
                Unsere Careerpaths
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-8 max-w-md">
                Unsere YBLA bereitet dich auf die anspruchsvollsten Pfade der
                Wirtschaft vor. YBLA Absolventen sind heute führende Köpfe in
                globalen Konzernen. Ganze 30% davon in der Unternehmensleitung
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-6 border-t border-white/10">
                {[
                  { label: "Absolventen", val: "300+" },
                  { label: "Top-Level Führungskräfte in Konzernen", val: "41" },
                  {
                    label: "Top-Level Führungskräfte im Mittelstand",
                    val: "40",
                  },
                  { label: "Unternehmens-gründer", val: "15" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-4xl md:text-5xl font-black text-[#B7860B] leading-none">
                      <Counter value={stat.val} />
                    </span>
                    <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-wider text-slate-300 leading-tight pr-2">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* Mobile: Grid-View */}
              <div className="grid grid-cols-1 gap-3 md:hidden">
                {[
                  "Unternehmensstrategie",
                  "Forschung & Entwicklung",
                  "Engineering & Software",
                  "Recht & Compliance",
                  "Sales, Marketing & Operations",
                  "B2B Gründertum",
                ].map((name, i) => (
                  <div
                    key={i}
                    className="bg-[#051222] border border-white/10 px-4 py-3 rounded-xl text-[12px] font-bold uppercase tracking-widest text-slate-200 text-center"
                  >
                    {name}
                  </div>
                ))}
              </div>

              {/* Desktop: Floating-View (Container erhöht auf 550px gegen Clipping) */}
              <div className="hidden md:flex relative min-h-[550px] items-center justify-center px-10">
                <div className="w-32 h-32 rounded-full bg-[#B7860B] flex items-center justify-center shadow-[0_0_60px_rgba(183,134,11,0.5)] relative z-20">
                  <Target className="text-white" size={40} />
                </div>
                <div className="absolute inset-0 z-10 text-[11px] font-bold uppercase tracking-widest text-slate-200">
                  <div className="absolute top-[10%] left-[10%] bg-[#051222] border border-white/10 px-6 py-3 rounded-full shadow-2xl">
                    Unternehmensstrategie
                  </div>
                  <div className="absolute top-[45%] left-[-2%] bg-[#051222] border border-white/10 px-6 py-3 rounded-full shadow-2xl">
                    Forschung & Entwicklung
                  </div>
                  <div className="absolute bottom-[10%] left-[10%] bg-[#051222] border border-white/10 px-6 py-3 rounded-full shadow-2xl">
                    Engineering & Software
                  </div>
                  <div className="absolute top-[10%] right-[10%] bg-[#051222] border border-white/10 px-6 py-3 rounded-full shadow-2xl">
                    Recht & Compliance
                  </div>
                  <div className="absolute top-[45%] right-[-2%] bg-[#051222] border border-white/10 px-6 py-3 rounded-full shadow-2xl">
                    Sales, Marketing & Operations
                  </div>
                  <div className="absolute bottom-[10%] right-[10%] bg-[#051222] border border-white/10 px-6 py-3 rounded-full shadow-2xl">
                    B2B Gründertum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKTION 5: ROADMAP (MIT WASSERZEICHEN & ORIGINAL ABSTÄNDEN) */}
      <section className="py-24 bg-white relative overflow-hidden text-left">
        {/* YBLA Wasserzeichen */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="text-[25vw] font-black uppercase tracking-tighter text-[#B7860B]/5 whitespace-nowrap">
            YBLA
          </span>
        </div>

        <div className="container-custom px-4 md:px-8 mx-auto relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F2B57] mb-4">
              Termine & <span className="text-[#B7860B]">Roadmap</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#B7860B]" />
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block" />
            <div className="space-y-20">
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#B7860B] md:-translate-x-1/2 z-20 shadow-lg" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight">
                    Vorab-Bewerbung
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm md:ml-auto">
                    Du kannst dich jederzeit vorab bewerben. Am 01.10. erhältst
                    du eine Mail zur Bestätigung der Gültigkeit.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F2B57] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                    <Mail size={14} className="text-[#B7860B]" /> Jetzt möglich
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#0F2B57] md:-translate-x-1/2 z-20 shadow-lg" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest">
                    <Calendar size={14} className="text-[#B7860B]" /> 01. - 24.
                    Oktober
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-20">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight">
                    Haupt-Bewerbungsphase
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm">
                    Unser offizielles Zeitfenster zur Bewerbung für neue
                    Talente. Am 25. & 26.10. findet die Auswahl statt.
                  </p>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#0F2B57] md:-translate-x-1/2 z-20 shadow-lg" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight">
                    Interviews
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm md:ml-auto">
                    Persönliches Kennenlernen der Kandidaten in unserem eigenen
                    TEG Office.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F2B57] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                    <Clock size={14} className="text-[#B7860B]" /> 28.10. -
                    03.11.
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0">
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#B7860B] md:-translate-x-1/2 z-20 flex items-center justify-center shadow-lg">
                  <Info size={18} className="text-white" />
                </div>
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#B7860B] text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    Kick-Off Event
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-20">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight">
                    Start des Programms
                  </h4>
                  <p className="text-slate-600 mt-2 max-w-sm font-medium">
                    06.11. (Abends) & 07.11. (Ganztags). Die Teilnahme ist
                    verpflichtend für alle neuen Member.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply-section" className="py-16 px-4 bg-white">
        <div className="container-custom bg-[#091C3A] p-10 md:p-14 text-center rounded-xl shadow-lg relative mx-auto overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-8 text-white">
            Bewirb dich jetzt, und werde Teil von TEG!
          </h2>
          <motion.a
            href="https://tally.so/r/yPDXd4"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#B7860B] text-white px-10 py-4 font-bold uppercase text-[10px] tracking-[0.2em] rounded-sm shadow-lg transition-all"
          >
            Jetzt Bewerben <MousePointer2 size={16} />
          </motion.a>
        </div>
      </section>

      {/* LOGO KARUSSELL */}
      <section className="py-16 bg-white overflow-hidden text-center mx-auto border-b border-slate-100">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">
          Unsere Gründer-Firmen
        </h2>
        <div className="flex whitespace-nowrap mb-8">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 pr-20"
          >
            {[...scrollingLogos, ...scrollingLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain opacity-60"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="pb-24 pt-16 bg-white px-4 text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl min-h-[400px]">
          <div className="md:w-1/2 w-full h-72 md:h-auto bg-slate-50 flex items-start">
            <img
              src="/for-students/team/yassin-portrait.jpeg"
              alt="Yassin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full bg-[#0F2B57] p-10 md:p-14 flex flex-col justify-center text-white">
            <div className="flex gap-4 mb-8">
              <div className="w-[2px] bg-[#B7860B]" />
              <p className="italic text-xl text-slate-200 leading-tight">
                “Wenn du Fragen hast, schreib mir gerne eine Nachricht!”
              </p>
            </div>
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-1">Yassin Aboushelib</h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
                {" "}
                Leitung People & Operations
              </p>
            </div>
            <div className="flex gap-10">
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 text-[#B7860B] hover:text-white text-[10px] font-bold uppercase tracking-widest"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="mailto:yassin@teg.de"
                className="flex items-center gap-2 text-[#B7860B] hover:text-white text-[10px] font-bold uppercase tracking-widest"
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForStudents;
