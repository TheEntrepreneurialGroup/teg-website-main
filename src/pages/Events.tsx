import React, { useState } from "react";
import { useIntl } from "react-intl";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  X,
  ChevronRight,
  ChevronLeft,
  Mail,
  Linkedin,
} from "lucide-react";
import EventsJsonLd from "@/components/EventsJsonLd";
import { type EventData, upcomingEvents, pastEvents } from "@/data/events";

const Events: React.FC = () => {
  const intl = useIntl();
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
  const [[upcomingPage, upcomingDir], setUpcomingPage] = useState([0, 0]);
  const [[pastPage, pastDir], setPastPage] = useState([0, 0]);

  const eventImageAlt = (title: string) =>
    intl.formatMessage({ id: "events.imageAlt" }, { title });

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
      <EventsJsonLd
        pageTitle={intl.formatMessage({ id: "seo.events.title" })}
        pageDescription={intl.formatMessage({ id: "seo.events.description" })}
      />
      <header className="relative h-[45vh] w-full overflow-hidden bg-slate-900">
        <img
          src="/shared/heroes/hero-subpage.avif"
          alt={intl.formatMessage({ id: "events.hero.imageAlt" })}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center pt-20 xl:pt-24">
          <div className="container-custom px-4 md:px-8">
            <div className="bg-slate-900 p-8 max-w-2xl border-l-8 border-white">
              <span className="text-white text-xs font-bold uppercase tracking-[0.2em] block mb-2">
                {intl.formatMessage({ id: "events.hero.eyebrow" })}
              </span>
              <h1 className="text-white text-4xl font-bold uppercase tracking-tight">
                {intl.formatMessage({ id: "events.hero.title" })}
              </h1>
              <p className="text-white/60 mt-4 text-base leading-relaxed">
                {intl.formatMessage({ id: "events.hero.subtitle" })}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="container-custom relative px-4 md:px-16">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest flex items-center">
              <span className="w-8 h-[1px] bg-blue-600 mr-3"></span>{" "}
              {intl.formatMessage({ id: "events.upcoming.title" })}
            </h2>
          </div>
          <div className="relative group">
            {upcomingEvents.length > 1 && (
              <>
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
              </>
            )}
            <div className="relative">
              <AnimatePresence initial={false} custom={upcomingDir}>
                <motion.div
                  key={upcomingPage}
                  custom={upcomingDir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative grid overflow-hidden rounded-xl border border-slate-200 bg-white/90 shadow-2xl backdrop-blur-sm md:grid-cols-12"
                >
                  <div
                    className={`min-h-0 min-w-0 overflow-hidden md:col-span-4 ${
                      upcomingEvents[upcomingPage].imageFit === "contain"
                        ? "flex aspect-[1131/1360] items-center justify-center bg-[#062d18] p-3 md:aspect-auto md:p-5"
                        : "aspect-[16/10] md:aspect-auto"
                    }`}
                  >
                    <img
                      src={upcomingEvents[upcomingPage].image}
                      className={`${
                        upcomingEvents[upcomingPage].imageFit === "contain"
                          ? "h-full max-h-full w-auto max-w-full object-contain object-center"
                          : "h-full w-full object-cover object-center"
                      }`}
                      alt={eventImageAlt(upcomingEvents[upcomingPage].title)}
                    />
                  </div>
                  <div className="flex min-w-0 flex-col justify-center p-6 sm:p-8 md:col-span-8 md:p-8 lg:p-10">
                    <p className="mb-4 text-[10px] font-bold uppercase text-blue-600 md:mb-3">
                      {upcomingEvents[upcomingPage].category}
                    </p>
                    <h3 className="mb-5 break-words text-[clamp(1.6rem,8vw,3rem)] font-bold uppercase leading-none tracking-tighter md:mb-5 md:text-[2.35rem] lg:text-4xl">
                      {upcomingEvents[upcomingPage].title}
                    </h3>
                    {upcomingEvents[upcomingPage].topic && (
                      <p className="mb-4 text-xs font-bold uppercase leading-relaxed tracking-widest text-slate-900 md:mb-3">
                        {upcomingEvents[upcomingPage].topic}
                      </p>
                    )}
                    <p className="mb-6 text-sm leading-relaxed text-slate-500 md:mb-5">
                      {upcomingEvents[upcomingPage].description}
                    </p>
                    <div className="mb-6 space-y-3 text-sm text-slate-500 md:mb-6">
                      <p className="flex items-center">
                        <Calendar size={16} className="mr-3" />{" "}
                        {upcomingEvents[upcomingPage].date}
                      </p>
                      <p className="flex items-center">
                        <MapPin size={16} className="mr-3" />{" "}
                        {upcomingEvents[upcomingPage].location}
                      </p>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <button
                        onClick={() =>
                          setSelectedEvent(upcomingEvents[upcomingPage])
                        }
                        className="w-full whitespace-nowrap bg-slate-900 px-[18px] py-[14px] text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all hover:bg-blue-600 sm:w-fit md:px-8 md:py-4 md:text-xs md:tracking-widest"
                      >
                        {intl.formatMessage({ id: "events.details" })}
                      </button>
                      {upcomingEvents[upcomingPage].externalLink && (
                        <a
                          href={upcomingEvents[upcomingPage].externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full whitespace-nowrap border border-slate-900 px-[18px] py-[14px] text-center text-[10px] font-bold uppercase tracking-[0.16em] text-slate-900 transition-all hover:border-blue-600 hover:bg-blue-600 hover:text-white sm:w-fit md:px-8 md:py-4 md:text-xs md:tracking-widest"
                        >
                          {intl.formatMessage({ id: "events.register" })}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 pb-10 md:pt-24 md:pb-14 bg-white relative overflow-hidden">
        <div className="container-custom px-4 md:px-16 relative z-10">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 items-center">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">
                {intl.formatMessage({ id: "events.past.title" })}
              </h2>
              <div className="h-1 w-16 bg-blue-600 mb-6" />
              <p className="text-slate-500 text-sm leading-relaxed">
                {intl.formatMessage({ id: "events.past.description" })}
              </p>
            </div>
            <div className="md:col-span-2 relative group min-h-[800px] md:min-h-[460px]">
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
              <div className="relative h-[800px] md:h-[460px] overflow-hidden rounded-xl">
                <AnimatePresence initial={false} custom={pastDir}>
                  <motion.div
                    key={pastPage}
                    custom={pastDir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 p-2"
                  >
                    {pastEvents
                      .slice(pastPage * 2, pastPage * 2 + 2)
                      .map((event) => (
                        <div
                          key={event.id}
                          onClick={() => setSelectedEvent(event)}
                          className="border border-slate-100 cursor-pointer bg-white h-full group rounded-lg shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
                        >
                          <div
                            className={`h-44 shrink-0 overflow-hidden sm:h-48 ${
                              event.imageFit === "contain"
                                ? "flex items-center justify-center bg-[#062d18] p-3"
                                : ""
                            }`}
                          >
                            <img
                              src={event.cardImage || event.image}
                              className={`transition-transform duration-500 group-hover:scale-105 ${
                                event.imageFit === "contain"
                                  ? "h-full max-h-full w-auto max-w-full object-contain object-center"
                                  : "h-full w-full object-cover"
                              }`}
                              alt={eventImageAlt(event.title)}
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-6 sm:p-7 pt-5 pb-8">
                            <p className="text-blue-600 font-bold text-[10px] uppercase mb-2">
                              {event.date}
                            </p>
                            <div>
                              <h4 className="font-bold uppercase text-[clamp(0.72rem,1.2vw,0.875rem)] tracking-widest leading-snug break-words">
                                {event.title}
                              </h4>
                              <p className="text-slate-500 text-[clamp(0.68rem,1vw,0.75rem)] leading-relaxed mt-3 break-words">
                                {event.topic || event.description}
                              </p>
                            </div>
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

      <section className="pt-8 pb-16 md:pt-10 md:pb-24 bg-white">
        <div className="container-custom px-4 md:px-16">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl min-h-[450px]">
            <div className="md:w-1/2 w-full h-80 md:h-auto relative">
              <img
                src="/for-companies/contact/jonathan.avif"
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
                  Leitung Strategie &amp; Partnerschaften
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
          <div className="fixed inset-0 z-[100] flex items-stretch justify-stretch bg-slate-900/90 p-0 backdrop-blur-md sm:items-center sm:justify-center sm:p-4 md:p-6">
            <button
              onClick={() => setSelectedEvent(null)}
              aria-label={intl.formatMessage({ id: "events.close" })}
              className="absolute right-4 top-4 md:right-6 md:top-6 z-20 p-3 bg-white text-slate-900 border border-slate-200 rounded-full shadow-xl hover:bg-blue-600 hover:text-white transition-all"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative grid h-dvh w-full max-w-[92rem] overflow-y-auto bg-white shadow-2xl sm:h-auto sm:max-h-[92vh] sm:rounded-sm md:h-[calc(100vh-48px)] md:max-h-[760px] md:grid-cols-12 md:overflow-hidden"
            >
              <div
                className={`h-56 min-w-0 overflow-hidden sm:h-64 md:col-span-4 md:h-full ${
                  selectedEvent.imageFit === "contain"
                    ? "flex items-center justify-center bg-[#062d18] p-3 md:p-5"
                    : ""
                }`}
              >
                <img
                  src={selectedEvent.image}
                  className={`${
                    selectedEvent.imageFit === "contain"
                      ? "h-full max-h-full w-auto max-w-full object-contain object-center"
                      : "h-full w-full object-cover"
                  }`}
                  alt={eventImageAlt(selectedEvent.title)}
                />
              </div>
              <div className="flex min-w-0 flex-col justify-start p-5 sm:p-8 md:col-span-8 md:justify-center md:p-7 lg:p-8">
                <p className="text-blue-600 font-bold text-[10px] uppercase mb-2 tracking-widest">
                  {selectedEvent.category ||
                    intl.formatMessage({ id: "events.pastEventFallback" })}
                </p>
                <h2 className="text-[1.2rem] sm:text-2xl lg:text-3xl font-bold mb-3 uppercase tracking-normal leading-tight break-words">
                  {selectedEvent.title}
                </h2>
                <div className="grid sm:grid-cols-2 gap-2 mb-3 text-slate-500 text-sm">
                  <p className="flex items-center">
                    <Calendar size={16} className="mr-3 shrink-0" />
                    {selectedEvent.date}
                  </p>
                  <p className="flex items-center">
                    <MapPin size={16} className="mr-3 shrink-0" />
                    {selectedEvent.location}
                  </p>
                </div>
                {selectedEvent.topic && (
                  <p className="text-slate-900 text-xs font-bold uppercase tracking-widest mb-2 leading-relaxed break-words">
                    {selectedEvent.topic}
                  </p>
                )}
                <p className="text-slate-600 text-sm italic mb-3 border-l-4 border-slate-100 pl-4 leading-relaxed">
                  {selectedEvent.description}
                </p>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">
                  {selectedEvent.longText}
                </p>
                {selectedEvent.speakers &&
                  selectedEvent.speakers.length > 0 && (
                    <div className="mb-4">
                      <p className="text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                        {intl.formatMessage({ id: "events.speakers" })}
                      </p>
                      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-3">
                        {selectedEvent.speakers.map((speaker) => (
                          <div
                            key={`${selectedEvent.id}-${speaker.name}`}
                            className="border-l-2 border-blue-600 pl-3"
                          >
                            <p className="text-slate-900 text-[13px] font-bold leading-snug break-words">
                              {speaker.name}
                            </p>
                            <p className="text-slate-500 text-[11px] leading-relaxed break-words">
                              {speaker.position}, {speaker.company}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                {selectedEvent.externalLink && (
                  <button
                    onClick={() =>
                      window.open(selectedEvent.externalLink, "_blank")
                    }
                    className="w-full bg-blue-600 px-[18px] py-[14px] text-center text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all hover:bg-blue-700 sm:w-fit sm:px-6 sm:py-3 sm:tracking-widest"
                  >
                    {intl.formatMessage({ id: "events.viewEvent" })}
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
