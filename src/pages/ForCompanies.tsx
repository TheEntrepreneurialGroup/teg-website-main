import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import {
  Mail,
  Linkedin,
  ChevronRight,
  ChevronLeft,
  ArrowUpRight,
} from "lucide-react";
import GardenCtaPair from "@/components/sections/GardenCtaPair";

// --- HILFSKOMPONENTE: COUNTER ---
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

const ForCompanies: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentRef, setCurrentRef] = useState(0);

  // --- DATEN: ACADEMY SLIDES ---
  const academySlides = [
    {
      image: "/shared/ybla-meeting.jpeg",
      category: "Ein Ausschnitt unserer bisherigen Workshops",
      title: "THE LEADERSHIP FORGE.",
      points: [
        {
          num: "01",
          title: "Risikomanagement",
          desc: "Wie wägt man Risiken fundiert ab? Wie trifft man gute Entscheidungen?",
        },
        {
          num: "02",
          title: "Persönliche Führung",
          desc: "Wie führt man andere Menschen? Wie weiß man wie sie geführt werden wollen?",
        },
        {
          num: "03",
          title: "Fortschritt",
          desc: "Wie kann man persönlich an Herausforderungen wachsen? Wie führt man eine erfolgreiche Karriere?",
        },
      ],
    },
    {
      image: "/for-companies/how-to-lead.a.team.jpeg",
      category: "Ein Ausschnitt unserer bisherigen Workshops",
      title: "How to lead a team",
      points: [
        {
          num: "01",
          title: "Herausforderungen",
          desc: "Welche Herausforderungen und Probleme gibt es, wenn man früh ein Team leitet?",
        },
        {
          num: "02",
          title: "Verantwortung",
          desc: "Wie geht man mit der Verantwortung um, gute Entscheidungen fällen zu müssen und ein Vorbild zu sein?",
        },
        {
          num: "03",
          title: "Chancen",
          desc: "Welche Chancen und Perspektiven kann es einem geben, früh zu leiten und wie baut man sich dahingehend auf?",
        },
      ],
    },
    {
      image: "/for-companies/acc-bild.jpeg",
      category: "Ein Ausschnitt unserer bisherigen Workshops",
      title: "IT-Projects & Strategy.",
      points: [
        {
          num: "01",
          title: "Leadership",
          desc: "Wie kann man erfolgreich ein Team leiten und auch zwischenmenschlich ein gutes Arbeiten ermöglichen?",
        },
        {
          num: "02",
          title: "Projects",
          desc: "Wie leitet man erfolgreich Projekte und übertrifft die an einen gestellten Erwartungen?",
        },
        {
          num: "03",
          title: "Strategy",
          desc: "Wie entwickelt man erfolgreich Strategien, um langfristigen Erfolg für seine Projekte zu gewährleisten?",
        },
      ],
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
      position: "Unternehmer und Gründer Roland Berger GMBH",
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

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % academySlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + academySlides.length) % academySlides.length,
    );
  const nextRef = () =>
    setCurrentRef((prev) => (prev + 1) % testimonials.length);
  const prevRef = () =>
    setCurrentRef(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans overflow-x-hidden text-left">
      {/* 1. HERO */}
      <section className="relative min-h-[100vh] w-full overflow-hidden bg-slate-900 flex flex-col justify-end text-left">
        <img
          src="/shared/heroes/hero-home.avif"
          alt="Hero"
          className="w-full h-full absolute inset-0 object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040F1F]/90 via-transparent to-transparent" />
        <div className="relative z-10 container-custom px-4 md:px-8 mx-auto w-full pb-20">
          <span className="text-[#F6D77B] font-black uppercase tracking-[0.4em] text-[10px] mb-2 block">
            Your Legacy
          </span>
          <h2 className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.75] text-white -ml-1">
            Tritt in den <br />
            <span className="text-[#F6D77B]">Austausch mit</span> <br />
            der Nächsten <br />
            Generation.
          </h2>
          <div className="mt-10">
            <GardenCtaPair
              instant
              items={[
                {
                  label: "Gespräch vereinbaren",
                  href: "#contact",
                  variant: "solid",
                  trackingSource: "For Companies — Hero",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* GOLDENER LINIEN VERLAUF 1 */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent bg-[#040F1F]" />

      {/* 2. MISSION (IMPACT) */}
      <section className="py-32 bg-[#040F1F] relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-black text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter">
          Impact
        </div>
        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-6 space-y-12 text-left">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-white">
                Von den Besten <br />
                <span className="text-[#F6D77B]">an die Besten.</span>
              </h2>
              <div className="flex flex-wrap gap-x-20 gap-y-6">
                {[
                  { l: "Excellence", v: "38J" },
                  { l: "Absolventen", v: "300" },
                  { l: "Top-Manager", v: "100+" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-4xl font-black text-white">
                      <Counter value={s.v} />
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#F6D77B]">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative w-full h-[400px] md:h-[550px] rounded-sm overflow-hidden mt-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 group">
                <img
                  src="/for-companies/cooles-bild.jpeg"
                  alt="Mission"
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040F1F]/40 to-transparent" />
              </div>
            </div>
            <div className="lg:col-span-6 pt-12 md:pt-24 text-left">
              <div className="relative text-left">
                <span className="text-[#F6D77B] font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">
                  The Responsibility
                </span>
                <h3 className="text-5xl md:text-[5.5rem] font-black text-white leading-[0.95] mb-12 tracking-[0.02em] uppercase">
                  Die Zukunft <br />
                  <span className="text-[#F6D77B] tracking-[0.05em]">
                    unserer
                  </span>{" "}
                  <br />
                  <motion.span
                    animate={{
                      color: ["#FFFFFF", "#F6D77B", "#C69E3C", "#FFFFFF"],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block tracking-[0.1em]"
                  >
                    Wirtschaft
                  </motion.span>
                </h3>
                <div className="mb-20">
                  <p className="text-slate-400 text-xl md:text-3xl leading-[1.4] font-medium italic max-w-2xl text-left">
                    Formen Sie jetzt mit uns die Zukunft des
                    Wirtschaftsstandorts Deutschland und geben Sie Ihre
                    Erfahrung an die nächste Generation weiter.
                  </p>
                </div>
                <motion.a
                  href="#contact"
                  className="group flex items-center gap-8 cursor-pointer text-left"
                >
                  <div className="w-24 h-24 rounded-full bg-[#C69E3C] group-hover:bg-white transition-all duration-700 flex items-center justify-center shadow-2xl">
                    <ArrowUpRight
                      size={40}
                      className="text-[#0B1730] group-hover:rotate-45 transition-all duration-500"
                    />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-3xl font-black uppercase tracking-tighter text-white group-hover:text-[#F6D77B] transition-colors">
                      Mentor werden
                    </span>
                    <span className="text-[#F6D77B] text-[10px] font-bold uppercase tracking-widest mt-1">
                      Jetzt starten
                    </span>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOLDENER LINIEN VERLAUF 2 */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F6D77B]/40 to-transparent bg-[#040F1F]" />

      {/* 3. LEADERSHIP FORGE (SLIDER) */}
      <section className="py-24 bg-[#040F1F] text-white relative overflow-hidden text-left">
        <div className="container-custom px-4 md:px-8 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 relative group text-left">
              <div className="relative aspect-video w-full overflow-hidden shadow-[30px_30px_0px_0px_#C69E3C]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    src={academySlides[currentSlide].image}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/80 hover:bg-black/95 backdrop-blur-sm transition-all z-30 flex items-center justify-center rounded-sm border border-white/10 group/btn"
                >
                  <ChevronLeft
                    size={36}
                    className="text-[#C69E3C] group-hover/btn:scale-110 transition-transform"
                  />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/80 hover:bg-black/95 backdrop-blur-sm transition-all z-30 flex items-center justify-center rounded-sm border border-white/10 group/btn"
                >
                  <ChevronRight
                    size={36}
                    className="text-[#C69E3C] group-hover/btn:scale-110 transition-transform"
                  />
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="flex flex-col"
                >
                  <div className="mb-12 text-left text-left">
                    <span className="text-[#C69E3C] text-xl italic font-serif mb-2 block">
                      {academySlides[currentSlide].category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] text-white">
                      {academySlides[currentSlide].title}
                    </h3>
                  </div>
                  <div className="space-y-12">
                    {academySlides[currentSlide].points.map((point, i) => (
                      <div key={i} className="flex gap-8 group text-left">
                        <span className="text-4xl font-black text-[#C69E3C] opacity-40">
                          {point.num}
                        </span>
                        <div className="relative pl-6 border-l-2 border-[#C69E3C]/30 pb-1">
                          <h4 className="text-xl font-bold uppercase tracking-tight mb-2 text-white">
                            {point.title}
                          </h4>
                          <p className="text-slate-400 text-base leading-relaxed">
                            {point.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="mt-16 flex justify-center">
            <GardenCtaPair
              instant
              className="justify-center"
              items={[
                {
                  label: "Als Speaker einbringen",
                  href: "#contact",
                  variant: "solid",
                  trackingSource: "For Companies — Leadership Forge",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 4. SPEAKER SEKTION */}
      <section className="py-32 relative overflow-hidden text-left">
        <div className="absolute inset-0 z-0 text-left">
          <img
            src="/for-students/commitment/training-session.jpeg"
            alt="Speaker Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#040F1F] via-[#040F1F]/90 to-[#040F1F]/70 backdrop-blur-[1px]" />
        </div>
        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="max-w-5xl">
            <div className="flex items-center gap-6 mb-8 text-left">
              <div className="w-16 h-[2px] bg-[#F6D77B]" />
              <span className="text-[#F6D77B] font-black uppercase tracking-[0.3em] text-sm text-left">
                Leave your impact
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-12 text-left">
              Engagieren sie sich <br />
              <span
                className="text-transparent border-b-4 border-[#F6D77B] pb-2 text-left"
                style={{ WebkitTextStroke: "1px white" }}
              >
                als Speaker.
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end text-left text-left">
              <div>
                <p className="text-slate-200 text-xl md:text-2xl leading-relaxed mb-10 font-medium italic">
                  Formen sie jetzt als Speaker mit ihrer Erfahrung und ihrem
                  Input die Generation ambitionierter künftiger Führungskräfte!
                </p>
                <GardenCtaPair
                  instant
                  items={[
                    {
                      label: "Jetzt Speaker werden",
                      href: "#contact",
                      variant: "solid",
                      trackingSource: "For Companies — Speaker",
                    },
                  ]}
                />
              </div>
              <div className="flex flex-col gap-8 text-left text-left text-left">
                <div className="group cursor-default border-l border-white/10 pl-8">
                  <span className="text-[#C69E3C] font-black text-xs uppercase tracking-widest block mb-2 text-left">
                    Audienz
                  </span>
                  <p className="text-white text-lg font-bold tracking-tight uppercase">
                    Ausgewählte Talente auf dem Weg an die Spitze der Wirtschaft
                  </p>
                </div>
                <div className="group cursor-default border-l border-white/10 pl-8">
                  <span className="text-[#C69E3C] font-black text-xs uppercase tracking-widest block mb-2 text-left text-left">
                    Format
                  </span>
                  <p className="text-white text-lg font-bold tracking-tight uppercase text-left">
                    Vorträge, Diskurse und Präsentationen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOSTS AND SPONSORS → /cases */}
      <section className="py-24 bg-[#0A1628] text-left">
        <div className="container-custom px-4 md:px-8 mx-auto">
          <span className="text-[#B7860B] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block">
            Hosts und Sponsoren
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            Drei Cases für TEG-Events
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
            Location-Hosts und Sponsoren nutzen dasselbe Konferenzformat über
            Recruiting-Zugang, Event-Branding und Showcasing im Sales Channel.
            Mentor- und Speaker-Engagement bleibt auf dieser Seite.
          </p>
          <a
            href="/cases"
            className="bg-[#B7860B] text-[#0A1628] px-10 py-4 font-black uppercase tracking-widest text-sm inline-flex items-center gap-3"
          >
            Cases ansehen <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B7860B]/40 to-transparent bg-[#0A1628]" />

      {/* 5. ABOUT US LINK */}
      <section className="py-20 bg-white text-center overflow-hidden">
        <div className="container-custom px-4 md:px-8 mx-auto flex flex-col items-center text-center">
          <span className="text-[#F6D77B] font-black uppercase tracking-[0.4em] text-[10px] mb-6 block text-center">
            Establishing Entrepreneurs Since 1986
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.0] mb-12 text-[#061D38] text-center">
            Vom Hörsaal zum{" "}
            <motion.span
              animate={{ color: ["#061D38", "#F6D77B", "#C69E3C", "#061D38"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="inline-block text-center"
            >
              Top-Management.
            </motion.span>
          </h2>
          <div className="flex justify-center">
            <GardenCtaPair
              instant
              className="justify-center"
              items={[
                {
                  label: "Mehr über uns erfahren",
                  href: "/about#ybla",
                  variant: "solid",
                  trackingSource: "For Companies — About Link",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-12 bg-white relative overflow-hidden border-t border-slate-100 text-left text-left text-left">
        <div className="container-custom px-4 md:px-8 mx-auto relative z-10 text-left">
          <div className="flex items-center gap-4 mb-16 text-left text-left">
            <span className="text-[#F6D77B] font-black uppercase tracking-[0.4em] text-[10px] whitespace-nowrap text-left text-left text-left">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-[#061D38] whitespace-nowrap text-left text-left text-left text-left text-left">
              WAS{" "}
              <span className="text-[#F6D77B] text-left text-left">ANDERE</span>{" "}
              ÜBER UNS SAGEN.
            </h2>
            <div className="h-[1px] bg-slate-200 flex-grow" />
          </div>
          <div className="relative h-[550px] flex items-center justify-center text-center text-center">
            <button
              onClick={prevRef}
              className="absolute left-0 md:left-4 z-50 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center border border-[#C69E3C]/30 hover:bg-[#C69E3C] group transition-all text-center text-center"
            >
              <ChevronLeft
                size={24}
                className="text-[#C69E3C] group-hover:text-white"
              />
            </button>
            <button
              onClick={nextRef}
              className="absolute right-0 md:right-4 z-50 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center border border-[#C69E3C]/30 hover:bg-[#C69E3C] group transition-all text-center text-center"
            >
              <ChevronRight
                size={24}
                className="text-[#C69E3C] group-hover:text-white"
              />
            </button>
            <div className="relative w-full max-w-6xl h-full flex items-center justify-center text-center text-center">
              {testimonials.map((test, idx) => {
                const total = testimonials.length;
                let offset = idx - currentRef;
                if (offset < -1) offset += total;
                if (offset > 1) offset -= total;
                const isActive = offset === 0;
                const isSide = Math.abs(offset) === 1;
                return (
                  <motion.div
                    key={idx}
                    animate={{
                      scale: isActive ? 1 : 0.75,
                      x: offset * 340,
                      opacity: isActive ? 1 : isSide ? 0.4 : 0,
                      filter: isActive ? "blur(0px)" : "blur(4px)",
                      zIndex: isActive ? 30 : 10,
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute w-full max-w-[400px] bg-[#F8FAFC] p-10 shadow-2xl border-t-4 border-[#C69E3C] flex flex-col items-center text-center text-center text-center"
                  >
                    <div className="w-24 h-24 rounded-full mb-8 overflow-hidden border-2 border-[#C69E3C]/20 bg-slate-200 text-center">
                      <img
                        src={test.img}
                        className="w-full h-full object-cover text-center"
                        alt={test.author}
                      />
                    </div>
                    <p className="text-base md:text-lg text-slate-600 font-medium italic mb-8 leading-relaxed text-center text-center">
                      "{test.quote}"
                    </p>
                    <div className="text-center text-center">
                      <h4 className="text-lg font-black text-[#061D38] uppercase tracking-tight text-center">
                        {test.author}
                      </h4>
                      <p className="text-[#C69E3C] font-bold uppercase tracking-widest text-[9px] mt-1 text-center">
                        {test.position}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
          <div className="mt-12 flex justify-center">
            <GardenCtaPair
              instant
              className="justify-center"
              items={[
                {
                  label: "Jetzt Gespräch vereinbaren",
                  href: "#contact",
                  variant: "solid",
                  trackingSource: "For Companies — Testimonials",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 7. LOGO MARQUEE */}
      <section className="py-16 bg-white overflow-hidden border-y border-slate-100">
        <div className="flex whitespace-nowrap text-center text-center text-center text-center">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-24 pr-24 text-center text-center"
          >
            {scrollingLogos.concat(scrollingLogos).map((l, idx) => (
              <img
                key={idx}
                src={l.src}
                alt={l.name}
                className="h-10 md:h-12 w-auto object-contain transition-all duration-500 text-center text-center"
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <section id="contact" className="pb-32 pt-20 bg-white px-4 text-left">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl min-h-[450px]">
          <div className="md:w-1/2 w-full h-80 md:h-auto bg-slate-50 flex items-start text-left">
            <img
              src="/for-companies/contact/jonathan.avif"
              alt="Jonathan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full bg-[#040F1F] p-10 md:p-16 flex flex-col justify-center text-white text-left">
            <div className="flex gap-4 mb-10 text-left">
              <div className="w-[3px] bg-[#F6D77B] text-left" />
              <p className="italic text-2xl text-slate-200 leading-tight text-left">
                “Falls Sie Fragen haben oder sich engagieren möchten, melden Sie
                sich gerne!”
              </p>
            </div>
            <div className="mb-12 text-left">
              <h3 className="text-2xl font-bold mb-1 text-white uppercase tracking-tight">
                Jonathan Babelotzky
              </h3>
              <p className="text-[#F6D77B] text-[10px] font-black uppercase tracking-[0.2em] text-left">
                {" "}
                Bereichsleiter Strategie und Partnerschaften
              </p>
            </div>
            <div className="flex gap-12 text-left">
              <a
                href="https://www.linkedin.com/in/jonathan-babelotzky/"
                className="flex items-center gap-3 text-white hover:text-[#F6D77B] text-xs font-black uppercase transition-colors text-left"
              >
                <Linkedin size={32} /> LinkedIn
              </a>
              <a
                href="mailto:jonathan.babelotzky@teg-ev.de"
                className="flex items-center gap-3 text-white hover:text-[#F6D77B] text-xs font-black uppercase transition-colors text-left"
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
