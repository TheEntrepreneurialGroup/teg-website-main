import { useIntl } from "react-intl";
import { PrimaryButton } from "../blocks/PrimaryButton";
import { useSlideshow } from "../../hooks/useSlideshow";

type Testimonial = {
  quote: string;
  author: string;
  image: string;
};

export default function Testimonials() {
  const intl = useIntl();
  const testimonials: Testimonial[] = [
    {
      quote: intl.formatMessage({ id: "student.testimonials.quote1" }),
      author: intl.formatMessage({ id: "student.testimonials.author1" }),
      image: "/for-students/testimonials/ahmed.avif",
    },
    {
      quote: intl.formatMessage({ id: "student.testimonials.quote2" }),
      author: intl.formatMessage({ id: "student.testimonials.author2" }),
      image: "/for-students/testimonials/luis.avif",
    },
    {
      quote: intl.formatMessage({ id: "student.testimonials.quote3" }),
      author: intl.formatMessage({ id: "student.testimonials.author3" }),
      image: "/for-students/testimonials/yesiienia.avif",
    },
  ];

  const { activeIndex, setActiveIndex } = useSlideshow(testimonials.length);
  const active = testimonials[activeIndex];

  return (
    <section className="w-full py-8 lg:py-0">
      <div className="w-full flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-0">
        <img
          src={active.image}
          alt={active.author}
          className="w-full lg:w-1/2 aspect-[4/3] object-cover object-top order-1 lg:order-2"
          loading="lazy"
        />

        <div className="order-2 lg:order-1 flex-1 min-w-0 px-4 lg:px-8 xl:px-24 2xl:px-44 flex flex-col justify-between lg:aspect-[4/3] lg:py-[3%] xl:py-[6%]">
          <div>
            <h3 className="text-3xl font-semibold text-primary mb-8 lg:mb-16">
              {intl.formatMessage({ id: "student.testimonials.title" })}
            </h3>
            <div className="border-l-[1.5px] border-accent pl-4">
              <p className="text-xl italic text-muted-foreground leading-relaxed">
                &ldquo;{active.quote}&rdquo;
              </p>
              <p className="text-xl text-primary font-semibold mt-3">
                {active.author}
              </p>
            </div>
          </div>
          <div className="pb-4">
            <div className="mt-4">
              <PrimaryButton
                label={intl.formatMessage({
                  id: "student.applySection.applyButton",
                })}
                href={intl.formatMessage({ id: "student.hero.buttonLink" })}
                buttonText={
                  "student testimonial: " +
                  intl.formatMessage({ id: "student.hero.applyButton" })
                }
              />
            </div>
            {testimonials.length > 1 && (
              <div className="flex items-center justify-center md:justify-start gap-4 mt-4 w-full">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-[1.5px] w-6 lg:w-7 rounded-none transition-colors ${index === activeIndex ? "bg-accent" : "bg-secondary-dark"}`}
                    aria-label={`${intl.formatMessage({ id: "student.testimonials.title" })} ${index + 1}`}
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
