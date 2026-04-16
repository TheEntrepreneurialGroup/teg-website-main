import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { PrimaryButton } from "../blocks/PrimaryButton";

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
  }, [events.length, autoPlayMs, activeIndex]);

  if (events.length === 0) {
    return null;
  }

  const activeEvent = events[activeIndex];
  const activeEventLinkLabel = activeEvent.linkLabelId
    ? intl.formatMessage({ id: activeEvent.linkLabelId })
    : activeEvent.link;

  return (
    <section className="w-full py-8 md:py-14">
      <div className="px-4 md:px-0">
        <h3 className="text-3xl font-bold text-primary leading-tight mb-5 md:mb-8">
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
      </div>

      <div className="w-full flex flex-col md:flex-row items-center gap-10">
        <img
          src={activeEvent.imageSrc}
          alt={intl.formatMessage({ id: activeEvent.imageAltId })}
          className="w-full md:w-1/2 aspect-[4/3] object-cover object-center order-1 md:order-2"
          loading="lazy"
        />

        <div className="order-2 md:order-1 flex-1 min-w-0 px-4 md:px-0 md:pr-8">
          <h4 className="text-primary text-3xl font-semibold leading-tight">
            {intl.formatMessage({ id: activeEvent.titleId })}
          </h4>
          <p className="mt-2 text-xl text-muted-foreground leading-relaxed">
            {intl.formatMessage({ id: activeEvent.descriptionId })}
          </p>
          <div className="mt-4">
            <PrimaryButton
              label={activeEventLinkLabel}
              href={activeEvent.link}
              target="_blank"
              rel="noreferrer"
              buttonText={`student-events: ${activeEventLinkLabel}`}
            />
          </div>
          {events.length > 1 && (
            <div className="flex items-center justify-start gap-4 mt-4 w-full">
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
    </section>
  );
}

export default EventSection;
