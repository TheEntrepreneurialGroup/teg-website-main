import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  X,
  ChevronRight,
  ChevronLeft,
  Quote,
  Mail,
  MessageSquare,
  Send,
  User,
  Linkedin,
} from "lucide-react";

interface EventData {
  id: string | number;
  title: string;
  date: string;
  location: string;
  category?: string;
  description: string;
  longText: string;
  image: string;
  externalLink?: string;
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [[upcomingPage, upcomingDir], setUpcomingPage] = useState([0, 0]);
  const [[pastPage, pastDir], setPastPage] = useState([0, 0]);

  const lumaLink = "https://luma.com/71152vc3?utm_source=tg_ws";

  const upcomingEvents: EventData[] = [
    {
      id: "ai-2026",
      title: "AI Consulting Conference 2026",
      date: "10.06.2026",
      location: "Netlight, München",
      category: "Upcoming Highlight",
      description: "KI verändert gerade, wie Consulting funktioniert.",
      longText: "Detaillierte Informationen über die Zukunft der künstlichen Intelligenz in der Beratungsbranche.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600",
      externalLink: lumaLink,
    },
    {
      id: "up-2",
      title: "Strategy Workshop 2026",
      date: "22.08.2026",
      location: "Hub Berlin",
      category: "Upcoming Workshop",
      description: "Methoden und Frameworks für moderne Strategieberatung.",
      longText: "Ein intensiver Praxistag mit Experten aus den führenden Strategieberatungen.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600",
    },
  ];

  const pastEvents: EventData[] = [
    {
      id: 1,
      title: "Digital Transformation",
      date: "15.11.2024",
      location: "München",
      description: "Fokus auf Digitalisierung.",
      longText: "Rückblick auf die Herausforderungen der digitalen Transformation.",
      image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1600",
    },
    {
      id: 2,
      title: "Networking Night",
      date: "xx.xx.xxxx",
      location: "Placeholder",
      description: "Networking Event.",
      longText: "Ein Abend im Zeichen des Austauschs und der Inspiration.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1600",
    },
    {
      id: 3,
      title: "Consulting Cup 2023",
      date: "12.05.2023",
      location: "Frankfurt",
      description: "Case Study Competition.",
      longText: "Die besten Teams traten gegeneinander an.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1600",
    },
    {
      id: 4,
      title: "Alumni Meetup",
      date: "20.01.2023",
      location: "Köln",
      description: "Netzwerktreffen.",
      longText: "Generationenübergreifender Austausch ehemaliger Mitglieder.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600",
    },
  ];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const paginateUpcoming = (dir: number) =>
    setUpcomingPage([
      (upcomingPage + dir + upcomingEvents.length) % upcomingEvents.length,
      dir,
    ]);
  const paginatePast = (dir: number) => {
    const totalPages = Math.ceil(pastEvents.length / 2);
    setPastPage([(pastPage + dir + totalPages) % totalPages, dir]);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-x-hidden">
      <div className="relative h-[45vh] w-full overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600"
          alt="Hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container-custom px-4 md:px-8">
            <div className="bg-slate-900 p-8 max-w-2xl border-l-8 border-white">
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                Gegründet 1986
              </span>
              <h1 className="text-white text-4xl font-bold uppercase tracking-tight">
                Events & Netzwerk.
              </h1>
              <p className="text-white/60 mt-4 text-base leading-relaxed">
                Schnittstelle zwischen High-Potentials und Wirtschaft.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-24 overflow-hidden">
        <div className="container-custom relative px-4 md:px-16">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center">
              <span className="w-8 h-[1px] bg-blue-600 mr-3"></span> Upcoming
              Highlights
            </h2>
          </div>
          <div className="relative group">
            <button
              onClick={() => paginateUpcoming(-1)}
              className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => paginateUpcoming(1)}
              className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
            <div className="relative h-[500px] md:h-[450px]">
              <AnimatePresence initial={false} custom={upcomingDir}>
                <motion.div
                  key={upcomingPage}
                  custom={upcomingDir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 grid md:grid-cols-12 border border-slate-200 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden rounded-xl"
                >
                  <div className="md:col-span-7 h-full">
                    <img
                      src={upcomingEvents[upcomingPage].image}
                      className="w-full h-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="md:col-span-5 p-12 flex flex-col justify-center">
                    <p className="text-blue-600 font-bold text-[10px] uppercase mb-4">
                      {upcomingEvents[upcomingPage].category}
                    </p>
                    <h3 className="text-3xl font-bold mb-6 uppercase tracking-tighter leading-none">
                      {upcomingEvents[upcomingPage].title}
                    </h3>
                    <div className="space-y-3 mb-8 text-slate-500 text-sm">
                      <p className="flex items-center">
                        <Calendar size={16} className="mr-3" />{" "}
                        {upcomingEvents[upcomingPage].date}
                      </p>
                      <p className="flex items-center">
                        <MapPin size={16} className="mr-3" />{" "}
                        {upcomingEvents[upcomingPage].location}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setSelectedEvent(upcomingEvents[upcomingPage])
                      }
                      className="bg-slate-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-all w-fit"
                    >
                      Details ansehen
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom px-4 md:px-16 relative z-10">
          <div className="grid md:grid-cols-3 gap-16 items-center">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">
                Past Events
              </h2>
              <div className="h-1 w-16 bg-blue-600 mb-6" />
              <p className="text-slate-500 text-sm leading-relaxed">
                Unsere Historie spiegelt die Qualität unserer Partnerschaften
                wider.
              </p>
            </div>
            <div className="md:col-span-2 relative group h-[400px]">
              <button
                onClick={() => paginatePast(-1)}
                className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-md"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => paginatePast(1)}
                className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-md"
              >
                <ChevronRight size={20} />
              </button>
              <div className="relative h-full overflow-hidden rounded-xl">
                <AnimatePresence initial={false} custom={pastDir}>
                  <motion.div
                    key={pastPage}
                    custom={pastDir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 grid md:grid-cols-2 gap-4 p-2"
                  >
                    {pastEvents
                      .slice(pastPage * 2, pastPage * 2 + 2)
                      .map((event) => (
                        <div
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className="border border-slate-100 cursor-pointer bg-white h-full group rounded-lg shadow-sm hover:shadow-xl transition-all overflow-hidden"
                        >
                          <div className="h-48 overflow-hidden">
                            <img
                              src={event.image}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                              alt=""
                            />
                          </div>
                          <div className="p-6">
                            <p className="text-blue-600 font-bold text-[10px] uppercase mb-2">
                              {event.date}
                            </p>
                            <h4 className="font-bold uppercase text-sm tracking-widest line-clamp-1">
                              {event.title}
                            </h4>
                          </div>
                        </div>
                      ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-t border-slate-200">
        <div className="container-custom px-4 md:px-8">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] text-center mb-16">
            Referenzen ehemaliger Speaker
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-8 bg-white border border-slate-200 relative"
              >
                <Quote
                  className="text-blue-600/10 absolute top-4 right-4"
                  size={40}
                />
                <p className="text-slate-600 italic text-sm mb-6">
                  "Die Zusammenarbeit war hochprofessionell. Die Qualität der
                  Studierenden setzt Maßstäbe."
                </p>
                <p className="font-bold uppercase text-[10px] tracking-widest">
                  Referenz Speaker {i}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom px-4 md:px-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl min-h-[450px]">
            <div className="md:w-1/2 w-full h-80 md:h-auto relative">
              <img
                src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0gzQgDQEELoFutNYC1Ox.jpg"
                alt="Jonathan Babelotzky"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="md:w-1/2 w-full bg-[#0a1e3b] p-12 md:p-16 flex flex-col justify-center text-white">
              <div className="flex gap-6 mb-10">
                <div className="w-[2px] bg-amber-500" />
                <p className="italic text-xl text-slate-200 leading-tight">
                  “Ich freue mich von Ihnen <br /> zu hören!”
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-2 tracking-tight">
                  Jonathan Babelotzky
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">
                  Bereichsleiter
                  <br />
                  Organisationsstrategie und
                  <br />
                  Partnerschaften
                </p>
              </div>

              <div className="flex gap-12">
                <a
                  href="https://www.linkedin.com/in/jonathan-babelotzky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-500 hover:text-white transition-all text-sm font-bold tracking-wider"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
                <a
                  href="mailto:jonathan.babelotzky@teg-ev.de"
                  className="flex items-center gap-2 text-amber-500 hover:text-white transition-all text-sm font-bold tracking-wider"
                >
                  <Mail size={18} /> Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEvent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white w-full max-w-5xl flex flex-col md:flex-row relative"
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-white border border-slate-200 hover:bg-blue-600 hover:text-white transition-all"
              >
                <X size={24} />
              </button>
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={selectedEvent.image}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <p className="text-blue-600 font-bold text-xs uppercase mb-4 tracking-widest">
                  {selectedEvent.category || "Past Event"}
                </p>
                <h2 className="text-3xl font-bold mb-6 uppercase tracking-tighter">
                  {selectedEvent.title}
                </h2>
                <p className="text-slate-600 text-sm italic mb-6 border-l-4 border-slate-100 pl-4">
                  {selectedEvent.description}
                </p>
                <p className="text-slate-500 text-sm mb-8">
                  {selectedEvent.longText}
                </p>
                {selectedEvent.externalLink && (
                  <button
                    onClick={() =>
                      window.open(selectedEvent.externalLink, "_blank")
                    }
                    className="bg-blue-600 text-white py-4 font-bold uppercase text-xs tracking-widest hover:bg-blue-700 transition-all"
                  >
                    Ticket Website
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Events;
