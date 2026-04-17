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
    <section className="w-full py-8 lg:py-0">
      <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-0">
        <img
          src={activeEvent.imageSrc}
          alt={intl.formatMessage({ id: activeEvent.imageAltId })}
          className="w-full lg:w-1/2 aspect-[4/3] object-cover object-center order-1 lg:order-2"
          loading="lazy"
        />

        <div className="order-2 lg:order-1 flex-1 min-w-0 px-4 lg:px-8 xl:px-24 2xl:px-44 flex flex-col justify-between lg:aspect-[4/3] lg:py-[3%] xl:py-[6%]">
          <div>
            <h3 className="text-3xl font-semibold text-primary mb-5 lg:mb-8">
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
            <h4 className="text-primary text-3xl font-normal leading-tight">
              {intl.formatMessage({ id: activeEvent.titleId })}
            </h4>
            <p className="mt-2 text-xl text-muted-foreground leading-relaxed">
              {intl.formatMessage({ id: activeEvent.descriptionId })}
            </p>
          </div>
          <div className="pb-4">
            <div className="mt-4">
              <PrimaryButton
                className="min-w-[300px]"
                label={activeEventLinkLabel}
                href={activeEvent.link}
                buttonText={`student-events: ${activeEventLinkLabel}`}
              />
            </div>
            {events.length > 1 && (
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4 w-full">
                {events.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 w-6 lg:w-7 rounded-none transition-colors ${index === activeIndex ? "bg-accent" : "bg-secondary-dark"}`}
                    aria-label={`${intl.formatMessage({ id: "student.events.slide" })} ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventSection;
