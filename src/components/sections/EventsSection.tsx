import { useIntl } from "react-intl";
import { PrimaryButton } from "../blocks/PrimaryButton";
import { useSlideshow } from "../../hooks/useSlideshow";

export type EventSlide = {
  titleId: string;
  descriptionId: string;
  link: string;
  imageSrc: string;
  imageAltId: string;
  linkLabelId?: string;
  imageFit?: "cover" | "contain";
  imageObjectPosition?: string;
};

type EventSectionProps = {
  events: EventSlide[];
  autoPlayMs?: number;
};

function EventSection({ events, autoPlayMs = 6000 }: EventSectionProps) {
  const intl = useIntl();
  const { activeIndex, setActiveIndex } = useSlideshow(
    events.length,
    autoPlayMs,
  );

  if (events.length === 0) {
    return null;
  }

  const activeEvent = events[activeIndex];
  const activeEventLinkLabel = activeEvent.linkLabelId
    ? intl.formatMessage({ id: activeEvent.linkLabelId })
    : activeEvent.link;
  const imageFitClass =
    activeEvent.imageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <section className="w-full overflow-hidden py-8 lg:py-0">
      <div className="flex w-full min-w-0 flex-col gap-10 md:h-[560px] md:flex-row md:items-stretch md:gap-0 lg:h-[600px] xl:h-[640px]">
        <div className="relative order-1 aspect-[4/3] w-full flex-none overflow-hidden bg-[#061d38] md:order-2 md:w-1/2 md:aspect-auto md:self-stretch">
          <img
            src={activeEvent.imageSrc}
            alt={intl.formatMessage({ id: activeEvent.imageAltId })}
            className={`absolute inset-0 h-full w-full ${imageFitClass} object-center`}
            style={
              activeEvent.imageObjectPosition
                ? { objectPosition: activeEvent.imageObjectPosition }
                : undefined
            }
            loading="lazy"
          />
        </div>

        <div className="order-2 flex-1 min-w-0 bg-background px-4 md:order-1 md:h-full md:px-8 md:py-8 xl:px-24 xl:py-12 2xl:px-44 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-primary mb-8 lg:mb-16">
              {intl.formatMessage({ id: "student.events.title" })}{" "}
              <a
                href={intl.formatMessage({ id: "student.events.calendarLink" })}
                className="text-accent hover:text-accent-light"
                target="_blank"
                rel="noreferrer"
              >
                {intl.formatMessage({ id: "student.events.calendarLabel" })}
              </a>
            </h3>
            <div className="border-l-[1.5px] border-accent pl-4">
              <h4 className="text-primary text-3xl font-normal leading-tight">
                {intl.formatMessage({ id: activeEvent.titleId })}
              </h4>
              <p className="mt-2 text-xl text-foreground leading-relaxed">
                {intl.formatMessage({ id: activeEvent.descriptionId })}
              </p>
            </div>
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
                    className={`h-[1.5px] w-6 lg:w-7 rounded-none transition-colors ${index === activeIndex ? "bg-accent" : "bg-secondary-dark"}`}
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
