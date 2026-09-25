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
  const scrollingLogos = [
    { name: "BMW", src: "/shared/logos/bmw-image.webp" },
    { name: "BCG", src: "/shared/logos/bcg.avif" },
    { name: "Siemens", src: "/shared/logos/siemens.svg" },
    { name: "HVB", src: "/shared/logos/hypovereinsbank.svg" },
    { name: "Roland Berger", src: "/shared/logos/roland-berger.svg" },
    { name: "Ruhrgas", src: "/shared/logos/ruhrgas.avif" },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans overflow-x-hidden text-left">
      {/* SEKTION 1: HERO */}
      <section className="relative min-h-[100vh] w-full overflow-hidden bg-slate-900 flex flex-col justify-end text-left">
        <img
          src="/for-students/commitment/ancient-group.avif"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />

        <div className="relative z-10 container-custom px-4 md:px-8 mx-auto w-full pb-20">
          <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">
            GEGRÜNDET 1986
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] md:leading-[0.75] text-white -ml-1">
            Gestalte die <br />
            <span className="text-[#B7860B]">Wirtschaft</span> <br />
            von morgen.
          </h1>
          <p className="text-white/80 mt-8 text-lg md:text-xl font-medium max-w-xl">
            Die Schmiede zukünftiger Führungskräfte.
          </p>
        </div>
      </section>

      {/* SEKTION: INTRO */}
      <section className="py-24 px-4">
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
                className="w-full p-8 md:p-10 bg-[#0F2B57] text-white rounded-xl relative overflow-hidden shadow-xl group transition-all hover:bg-[#163a75] flex flex-col justify-center gap-6 text-left"
              >
                <p className="text-lg md:text-xl leading-snug font-medium">
                  Du möchtest wissen was die Unternehmensführungen deutscher
                  Firmen heute bewegt? Bewirb dich für die Teilnahme bei einem
                  unserer Events.
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
          <div className="mb-12 text-left md:text-center">
            <div className="flex items-center gap-4 mb-4 md:justify-center text-left">
              <div className="h-1 w-12 bg-[#B7860B]" />
              <span className="text-[#B7860B] font-bold uppercase tracking-widest text-sm text-left">
                Unser Flaggschiff-Programm
              </span>
              <div className="h-1 w-12 bg-[#B7860B] hidden md:block" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#0F2B57] uppercase tracking-tighter leading-tight text-left md:text-center">
              Young Business Leadership Academy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center text-left">
            <div className="md:col-span-7 text-left order-2 md:order-1 text-left">
              <h3 className="text-2xl font-bold text-[#0F2B57] mb-6 uppercase tracking-tight text-left">
                Was ist die YBLA?
              </h3>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left">
                <p>
                  Die <strong>YBLA</strong> ist ein exklusives
                  Ausbildungsangebot innerhalb von TEG, das darauf ausgerichtet
                  ist, dich auf die Herausforderungen moderner Führung
                  vorzubereiten. Wir richten uns an alle Studiengänge, jedoch
                  kommen die meisten teilnehmer aus: den{" "}
                  <strong>Naturwissenschaften</strong>, der{" "}
                  <strong>Technik</strong>, der <strong>Wirtschaft</strong>, den{" "}
                  <strong>Rechtswissenschaften (Jura)</strong> sowie der{" "}
                  <strong>Mathematik</strong>
                </p>
                <ul className="space-y-4 text-left">
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
                  <li className="flex items-start gap-3 text-left">
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
                <p className="pt-4 font-bold text-[#0F2B57] text-left">
                  Dein Beitrag bleibt nicht undokumentiert: Hast du die 3
                  Semester erfolgreich absolviert, wirst du TEGler auf
                  Lebenszeit. Weiterhin erhälst du ein Abschlusszeugnis, welches
                  deine Leistungen und Führungsreife bestätigt.
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

      {/* SEKTION 3: THE COMMITMENT */}
      <section className="py-32 bg-[#0A1628] text-white relative overflow-hidden text-left border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
          Impact
        </div>

        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start text-left">
            <div className="lg:col-span-5 space-y-12 text-left">
              <div className="text-left">
                <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                  The Requirements
                </span>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white mb-8 text-left">
                  TEG ist nicht <br />
                  <span className="text-[#B7860B]">für Jeden.</span>
                </h2>
                <div className="space-y-6 text-slate-400 text-xl md:text-2xl leading-relaxed italic text-left">
                  <p>
                    Deine Mitgliedschaft ist eine 3-semestrige Grundausbildung
                    parallel zum Studium.
                  </p>
                  <p className="text-white font-bold not-italic border-l-4 border-[#B7860B] pl-6 py-2 text-left">
                    10h+ Commitment pro Woche, über das ganze Semester hinweg.
                  </p>
                </div>
              </div>

              <div className="relative aspect-[4/3] w-full overflow-hidden shadow-[25px_25px_0px_0px_#B7860B] border border-white/5 group">
                <img
                  src="/for-students/commitment/training-session.jpeg"
                  alt="TEG Training"
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 pt-12 md:pt-0 text-left">
              {[
                {
                  num: "01",
                  title: "Onboarding & Mentoring",
                  sub: "1. Semester",
                  points: [
                    "Onboarding in jeweiliges Team",
                    "Mentoring durch Teamlead",
                    "Exklusive Workshops & Soft-Skills",
                  ],
                },
                {
                  num: "02",
                  title: "Praxis & Verantwortung",
                  sub: "2. Semester",
                  points: [
                    "Exklusive Praktika und Erfahrungen",
                    "Professional-Zertifikat",
                    "Projektleitung und Events",
                  ],
                },
                {
                  num: "03",
                  title: "Leadership & Future",
                  sub: "3. Semester",
                  points: [
                    "Individuelles Coach-Zertifikat",
                    "Mitgestaltung der Zukunft von TEG",
                    "Verantwortung übernehmen",
                  ],
                },
              ].map((phase, i) => (
                <div
                  key={i}
                  className="group bg-white/5 border border-white/10 p-6 md:p-10 hover:bg-white/[0.08] transition-all duration-500 text-left"
                >
                  <div className="flex gap-4 md:gap-8 items-start text-left">
                    <span className="text-4xl md:text-5xl font-black text-[#B7860B] opacity-30 group-hover:opacity-100 transition-opacity text-left">
                      {phase.num}
                    </span>
                    <div className="text-left flex-1">
                      <span className="text-[#B7860B] font-black uppercase tracking-widest text-[10px] mb-1 block text-left">
                        {phase.sub}
                      </span>
                      <h3 className="text-xl md:text-3xl font-black uppercase tracking-tight text-white mb-6 text-left break-words">
                        {phase.title}
                      </h3>
                      <ul className="space-y-3 text-left">
                        {phase.points.map((p, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-slate-400 text-base md:text-lg text-left"
                          >
                            <div className="w-1.5 h-1.5 bg-[#B7860B] rounded-full shrink-0 mt-2" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GOLDENER TRENNER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B7860B]/40 to-transparent bg-[#0A1628]" />

      {/* SEKTION 4: CAREERPATHS (REWORKED POSITIONING) */}
      <section className="py-32 bg-[#0A1628] text-white relative overflow-hidden border-b border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
          Vision
        </div>

        {/* GOLDENER GLOW HINTER DEM RADAR */}
        <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B7860B]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-left">
            <div className="lg:col-span-5 space-y-12 text-left">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none text-[#B7860B] text-left text-left">
                Unsere Careerpaths
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md text-left">
                Unsere YBLA bereitet dich auf die anspruchsvollsten Pfade der
                Wirtschaft vor. YBLA Absolventen sind heute führende Köpfe in
                globalen Konzernen. Ganze 30% davon in der Unternehmensleitung
              </p>

              <div className="grid grid-cols-2 gap-x-6 gap-y-10 pt-6 border-t border-white/10 text-left">
                {[
                  { label: "Absolventen", val: "300+" },
                  { label: "Top-Level Führungskräfte in Konzernen", val: "41" },
                  {
                    label: "Top-Level Führungskräfte im Mittelstand",
                    val: "40",
                  },
                  { label: "Unternehmens-gründer", val: "15" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-1 text-left text-left"
                  >
                    <span className="text-4xl md:text-5xl font-black text-[#B7860B] leading-none text-left">
                      <Counter value={stat.val} />
                    </span>
                    <span className="text-[10px] md:text-[11px] uppercase font-bold tracking-wider text-slate-300 leading-tight text-left">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RADAR BOXEN (VERSETZTE ANORDNUNG) */}
            <div className="lg:col-span-7 relative h-[650px] hidden md:flex items-center justify-center text-left">
              {/* ZENTRUM */}
              <div className="relative z-20 w-24 h-24 rounded-full bg-[#B7860B] flex items-center justify-center shadow-[0_0_50px_rgba(183,134,11,0.5)] border-2 border-white/20">
                <Target className="text-[#0A1628]" size={40} />
              </div>

              {/* HINTERGRUND RINGE */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-[300px] h-[300px] border border-[#B7860B] rounded-full" />
                <div className="absolute w-[550px] h-[550px] border border-[#B7860B] rounded-full" />
              </div>

              {/* KARTEN POSITIONIERUNG (STAGGERED FÜR RADAR LOOK) */}
              <div className="absolute inset-0 flex flex-col justify-between py-12 text-left">
                {/* Obere Reihe (Näher zusammen) */}
                <div className="flex justify-around px-20">
                  <CareerCard name="Strategy" side="left" />
                  <CareerCard name="Recht & Compliance" side="right" />
                </div>
                {/* Mittlere Reihe (Weiter auseinander) */}
                <div className="flex justify-between px-0">
                  <CareerCard name="Forschung & Entwicklung" side="left" />
                  <CareerCard
                    name="Sales, Marketing & Operations"
                    side="right"
                  />
                </div>
                {/* Untere Reihe (Wieder näher zusammen) */}
                <div className="flex justify-around px-20 text-left text-left">
                  <CareerCard name="Engineering & Software" side="left" />
                  <CareerCard name="B2B Gründertum" side="right" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:hidden text-left text-left">
              {[
                "Unternehmensstrategie",
                "Recht & Compliance",
                "Forschung & Entwicklung",
                "Sales, Marketing & Ops",
                "Engineering & Software",
                "B2B Gründertum",
              ].map((p, i) => (
                <span
                  key={i}
                  className="bg-white/5 border border-white/10 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-white text-left"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEKTION 5: ROADMAP */}
      <section className="py-24 bg-white relative overflow-hidden text-left">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <span className="text-[25vw] font-black uppercase tracking-tighter text-[#B7860B]/5 whitespace-nowrap text-left">
            YBLA
          </span>
        </div>
        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="mb-16 text-left">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#0F2B57] mb-4 text-left">
              Termine & <span className="text-[#B7860B]">Roadmap</span>
            </h2>
            <div className="h-1.5 w-24 bg-[#B7860B] text-left" />
          </div>
          <div className="relative text-left">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 hidden md:block text-left" />
            <div className="space-y-20 text-left">
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#B7860B] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left md:text-right">
                    Vorab-Bewerbung
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm md:ml-auto text-left md:text-right text-left">
                    Du kannst dich jederzeit vorab bewerben. Am 01.10. erhältst
                    du eine Mail zur Bestätigung der Gültigkeit.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F2B57] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 text-left">
                    <Mail size={14} className="text-[#B7860B]" /> Jetzt möglich
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#0F2B57] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest text-left">
                    <Calendar size={14} className="text-[#B7860B]" /> 01. - 24.
                    Oktober
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left">
                    Haupt-Bewerbungsphase
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm text-left">
                    Unser offizielles Zeitfenster zur Bewerbung für neue
                    Talente. Am 25. & 26.10. findet die Auswahl statt.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#0F2B57] md:-translate-x-1/2 z-20 shadow-lg text-left" />
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left md:text-right">
                    Interviews
                  </h4>
                  <p className="text-slate-500 mt-2 max-w-sm md:ml-auto text-left md:text-right text-left">
                    Persönliches Kennenlernen der Kandidaten in unserem eigenen
                    TEG Office.
                  </p>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#0F2B57] rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100 text-left">
                    <Clock size={14} className="text-[#B7860B]" /> 28.10. -
                    03.11.
                  </div>
                </div>
              </div>
              <div className="relative flex flex-col md:flex-row md:justify-center items-start md:items-center pl-12 md:pl-0 text-left text-left">
                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full bg-[#B7860B] md:-translate-x-1/2 z-20 flex items-center justify-center shadow-lg text-left text-left">
                  <Info size={18} className="text-white text-left" />
                </div>
                <div className="md:w-1/2 md:pr-20 md:text-right mb-4 md:mb-0 text-left md:text-right text-left text-left text-left text-left">
                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#B7860B] text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg text-left">
                    Kick-Off Event
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-20 text-left text-left">
                  <h4 className="text-xl font-bold text-[#0F2B57] uppercase tracking-tight text-left">
                    Start des Programms
                  </h4>
                  <p className="text-slate-600 mt-2 max-w-sm font-medium text-left">
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
      <section
        id="apply-section"
        className="py-16 px-4 bg-white text-left text-left"
      >
        <div className="container-custom bg-[#091C3A] p-10 md:p-14 text-center rounded-xl shadow-lg relative mx-auto overflow-hidden text-left text-left">
          <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-8 text-white text-center">
            Bewirb dich jetzt, und werde Teil von TEG!
          </h2>
          <motion.a
            href="https://tally.so/r/yPDXd4"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-[#B7860B] text-white px-10 py-4 font-bold uppercase text-[10px] tracking-[0.2em] rounded-sm shadow-lg transition-all text-left"
          >
            Jetzt Bewerben <MousePointer2 size={16} />
          </motion.a>
        </div>
      </section>

      {/* LOGO KARUSSELL */}
      <section className="py-16 bg-white overflow-hidden text-center mx-auto border-b border-slate-100 text-left text-left text-left">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12 text-center text-center">
          Unsere Gründer-Firmen
        </h2>
        <div className="flex whitespace-nowrap mb-8 justify-center text-left text-left">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-20 pr-20 text-left text-left text-left"
          >
            {[...scrollingLogos, ...scrollingLogos].map((logo, idx) => (
              <img
                key={idx}
                src={logo.src}
                alt={logo.name}
                className="h-10 w-auto object-contain opacity-60 text-left text-left text-left"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* KONTAKT */}
      <section className="pb-24 pt-16 bg-white px-4 text-left text-left text-left text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl shadow-2xl min-h-[400px] text-left text-left">
          <div className="md:w-1/2 w-full h-72 md:h-auto bg-slate-50 flex items-start text-left text-left text-left text-left text-left">
            <img
              src="/for-students/team/yassin-portrait.jpeg"
              alt="Yassin"
              className="w-full h-full object-cover text-left"
            />
          </div>
          <div className="md:w-1/2 w-full bg-[#0F2B57] p-10 md:p-14 flex flex-col justify-center text-white text-left text-left">
            <div className="flex gap-4 mb-8 text-left text-left text-left">
              <div className="w-[2px] bg-[#B7860B] text-left text-left" />
              <p className="italic text-xl text-slate-200 leading-tight text-left text-left">
                “Wenn du Fragen hast, schreib mir gerne eine Nachricht!”
              </p>
            </div>
            <div className="mb-10 text-left text-left">
              <h3 className="text-xl font-bold mb-1 text-left text-white">
                Yassin Aboushelib
              </h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] text-left text-left text-left">
                {" "}
                Leitung People & Operations
              </p>
            </div>
            <div className="flex gap-10 text-left">
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 text-[#B7860B] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors text-left text-left"
              >
                <Linkedin size={24} /> LinkedIn
              </a>
              <a
                href="mailto:yassin@teg.de"
                className="flex items-center gap-2 text-[#B7860B] hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors text-left text-left text-left text-left text-left"
              >
                <Mail size={24} /> Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Hilfskomponente für die versetzten Karten (fixiert den fehlenden Punkt und das Layout)
const CareerCard = ({
  name,
  side,
}: {
  name: string;
  side: "left" | "right";
}) => (
  <div
    className={`bg-[#051222]/80 border border-white/10 backdrop-blur-md px-5 py-4 rounded-sm hover:border-[#B7860B] transition-all w-[260px] shadow-2xl relative pointer-events-auto`}
  >
    <div
      className={`flex items-center gap-3 ${side === "right" ? "flex-row-reverse text-right" : "flex-row text-left"}`}
    >
      <div className="w-2 h-2 bg-[#B7860B] rounded-full shadow-[0_0_8px_#B7860B]" />
      <h4 className="text-[10px] font-black uppercase tracking-[0.15em] text-white leading-tight">
        {name}
      </h4>
    </div>
  </div>
);

export default ForStudents;
