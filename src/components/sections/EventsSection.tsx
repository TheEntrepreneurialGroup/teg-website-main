import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import Button from "../Button";

export type EventSlide = {
  titleId: string;
  descriptionId: string;
  link: string;
  imageSrc: string;
  imageAltId: string;
  linkLabelId?: string;
};

type EventSectionProps = {
  events: EventSlide[];
  autoPlayMs?: number;
};

function EventSection({ events, autoPlayMs = 6000 }: EventSectionProps) {
  const intl = useIntl();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (events.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev: number) => (prev + 1) % events.length);
    }, autoPlayMs);

    return () => window.clearInterval(timer);
  }, [events.length, autoPlayMs]);

  if (events.length === 0) {
    return null;
  }

  const activeEvent = events[activeIndex];
  const activeEventLinkLabel = activeEvent.linkLabelId
    ? intl.formatMessage({ id: activeEvent.linkLabelId })
    : activeEvent.link;

  return (
    <section className="w-full flex flex-col items-center px-2 py-8 md:px-14 lg:px-20 md:py-14 gap-5">
      <div className="w-full flex flex-col gap-5 md:gap-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
          {intl.formatMessage({ id: "student.events.title" })}{" "}
          <a
            href={intl.formatMessage({ id: "student.events.calendarLink" })}
            className="text-accent hover:text-accent-light underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            {intl.formatMessage({ id: "student.events.calendarLabel" })}
          </a>
        </h3>

        <div className="flex flex-col md:flex-row items-start gap-2 md:gap-8">
          <div className="w-full md:w-1/2 h-[250px] md:min-h-[350px] md:max-h-[450px] overflow-hidden bg-muted flex-shrink-0">
            <img
              src={activeEvent.imageSrc}
              alt={intl.formatMessage({ id: activeEvent.imageAltId })}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-3 md:gap-5 md:my-1 min-h-[250px] md:min-h-[350px]">
            <div className="flex min-h-0 flex-1 flex-col gap-2 md:gap-3">
              <h4 className="text-xl md:text-3xl font-bold text-primary leading-tight">
                {intl.formatMessage({ id: activeEvent.titleId })}
              </h4>
              <p className="text-lg text-muted-foreground leading-relaxed flex-1 min-h-0">
                {intl.formatMessage({ id: activeEvent.descriptionId })}
              </p>
              <Button
                href={activeEvent.link}
                className="flex-shrink-0"
                target="_blank"
                rel="noreferrer"
                buttonText={`student-events: ${activeEventLinkLabel}`}
              >
                {activeEventLinkLabel}
              </Button>
              {events.length > 1 && (
                <div className="flex items-center justify-center md:justify-start gap-4 h-12 flex-shrink-0 w-full">
                  {events.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-1.5 w-6 md:w-7 rounded-none transition-colors ${index === activeIndex ? "bg-accent" : "bg-secondary-dark"}`}
                      aria-label={`${intl.formatMessage({ id: "student.events.slide" })} ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventSection;
