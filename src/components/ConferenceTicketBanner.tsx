import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useIntl } from "react-intl";
import { trackOutboundClick } from "@/utils/analytics";

const EVENT_URL = "https://luma.com/71152vc3?utm_source=tg_ws";

const speakerLogos = [
  {
    name: "BCG",
    src: "/shared/logos/bcg.avif",
    className: "h-[32px] sm:h-[36px] lg:h-[42px]",
  },
];

const speakerItems = [
  { name: "McKinsey & Company", visibility: "" },
  { name: "BCG", logo: speakerLogos[0], visibility: "" },
  { name: "Roland Berger", visibility: "" },
  { name: "IBM", visibility: "" },
  { name: "pwc", visibility: "hidden sm:block" },
  { name: "Hogan Lovells", visibility: "hidden md:block" },
  { name: "Capgemini Invent", visibility: "hidden xl:block" },
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

                <div className="grid w-full min-w-0 grid-cols-2 items-center justify-items-center gap-x-4 gap-y-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-6">
                  {speakerItems.map((item) => (
                    <span
                      key={item.name}
                      className={`${item.visibility} max-w-full text-center text-[15px] font-bold leading-tight tracking-normal sm:text-[16px] lg:text-[18px]`}
                    >
                      {item.logo ? (
                        <img
                          src={item.logo.src}
                          alt={item.logo.name}
                          className={`${item.logo.className} max-w-full object-contain brightness-0 invert`}
                          loading="eager"
                        />
                      ) : (
                        item.name
                      )}
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
