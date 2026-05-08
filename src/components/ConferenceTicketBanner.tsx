import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useIntl } from "react-intl";
import { trackOutboundClick } from "@/utils/analytics";

const EVENT_URL = "https://luma.com/71152vc3?utm_source=tg_ws";

const speakerItems = [
  {
    name: "PwC",
    src: "/shared/logos/ai-conference/pwc.png",
    visibility: "flex",
    className: "",
  },
  {
    name: "BCG",
    src: "/shared/logos/ai-conference/bcg.avif",
    visibility: "flex",
    className: "",
  },
  {
    name: "Roland Berger",
    src: "/shared/logos/ai-conference/roland-berger.svg",
    visibility: "hidden min-[430px]:flex",
    className: "brightness-0 invert",
  },
  {
    name: "IBM",
    src: "/shared/logos/ai-conference/ibm.svg",
    visibility: "hidden min-[560px]:flex",
    className: "brightness-0 invert",
  },
  {
    name: "Capgemini Invent",
    src: "/shared/logos/ai-conference/capgemini%20invent.png",
    visibility: "hidden min-[900px]:flex",
    className: "",
  },
];

export const ConferenceTicketBanner: React.FC = () => {
  const intl = useIntl();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % 2);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      aria-label={intl.formatMessage({ id: "home.conferenceBanner.aria" })}
      className="relative z-10 w-full bg-[#061d38] text-white shadow-[0_14px_32px_rgba(6,29,56,0.28)]"
    >
      <a
        href={EVENT_URL}
        onClick={() =>
          trackOutboundClick(EVENT_URL, "Homepage conference banner")
        }
        className="group block w-full text-white hover:text-white"
      >
        <div className="conference-banner-pattern relative h-[190px] overflow-hidden border-y-2 border-[#d6a62d] bg-[#061d38] ring-1 ring-white/15 sm:h-[184px] md:h-[196px] xl:h-[190px]">
          <div
            className="relative z-10 flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            <div className="h-full min-w-full">
              <div className="mx-auto grid h-full max-w-[1280px] grid-cols-1 items-center gap-2 px-3 py-3 sm:px-5 md:grid-cols-[minmax(180px,0.85fr)_auto_minmax(260px,1.4fr)] md:px-8 lg:px-12">
                <div className="text-center md:text-left">
                  <p className="text-[clamp(1.05rem,3.2vw,2.05rem)] font-bold uppercase leading-none tracking-normal">
                    AI Consulting
                  </p>
                  <p className="text-[clamp(0.74rem,1.8vw,1.32rem)] font-medium uppercase leading-tight tracking-normal text-[#f6d77b]">
                    Conference 2026
                  </p>
                </div>

                <div className="hidden h-12 w-px bg-[#d6a62d]/70 md:block" />

                <div className="flex items-center justify-center gap-2 text-center md:justify-end md:text-right">
                  <span className="text-[clamp(1rem,2.7vw,1.82rem)] font-bold uppercase leading-tight tracking-normal">
                    {intl.formatMessage({ id: "home.conferenceBanner.cta" })}
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-7 w-7 flex-none rounded-full bg-[#d6a62d] p-1 text-[#061d38] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:h-8 sm:w-8 md:h-10 md:w-10"
                    strokeWidth={2.5}
                  />
                </div>
              </div>
            </div>

            <div className="h-full min-w-full">
              <div className="mx-auto flex h-full max-w-[980px] flex-col items-center justify-start gap-3 px-3 pb-4 pt-10 sm:px-5 sm:pt-11 md:px-8 md:pt-12 lg:px-10 xl:px-12 xl:pt-11">
                <p className="text-center text-[18px] font-bold uppercase leading-tight tracking-normal text-[#f6d77b] sm:text-[20px] lg:text-[22px]">
                  {intl.formatMessage({
                    id: "home.conferenceBanner.speakers",
                  })}
                </p>

                <div className="grid w-full min-w-0 grid-cols-2 items-center justify-items-center gap-x-3 gap-y-4 min-[430px]:max-w-[420px] min-[430px]:grid-cols-3 min-[560px]:max-w-[560px] min-[560px]:grid-cols-4 min-[900px]:max-w-[760px] min-[900px]:grid-cols-5 lg:gap-x-5">
                  {speakerItems.map((item) => (
                    <span
                      key={item.name}
                      className={`${item.visibility} h-[36px] w-[108px] items-center justify-center min-[430px]:h-[40px] min-[430px]:w-[120px] min-[560px]:h-[44px] min-[560px]:w-[126px] md:h-[48px] md:w-[140px] lg:h-[50px] lg:w-[148px]`}
                    >
                      <img
                        src={item.src}
                        alt={item.name}
                        className={`${item.className} mx-auto max-h-full max-w-full object-contain`}
                        loading="eager"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>

      <div className="sr-only" aria-live="polite">
        {activeSlide === 0
          ? intl.formatMessage({ id: "home.conferenceBanner.cta" })
          : intl.formatMessage({ id: "home.conferenceBanner.speakers" })}
      </div>
    </section>
  );
};
