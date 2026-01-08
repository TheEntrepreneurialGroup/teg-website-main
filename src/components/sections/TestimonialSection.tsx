import SectionTitle from "../SectionTitle";
import { useIntl } from "react-intl";
import SingleTestimonial from "../ui/SingleTestimonial";
import Button from "../Button";
import { ArrowDown } from "lucide-react";
import { useSanityContent, queries } from "../../hooks/useSanityContent";
import { getLocalizedValue } from "../../lib/sanityClient";
import type { PageData } from "../../types/sanity";

type Testimonial = {
  quote: string;
  author: string;
  image: string;
};

export default function Testimonials() {
  const intl = useIntl();
  const locale = intl.locale as "de" | "en";

  // Fetch content from Sanity
  const { data: page } = useSanityContent<PageData>(queries.forStudentsPage);

  // Use CMS content if available, otherwise fall back to locale files
  const useCms =
    page?.testimonials?.testimonials &&
    page.testimonials.testimonials.length > 0;

  const testimonials: Testimonial[] = useCms
    ? page.testimonials.testimonials.map((t, idx) => ({
        quote: getLocalizedValue(t.quote, locale),
        author: t.author || "",
        image: `components-images/${["ahmed", "luis", "yesiienia"][idx] || "default"}.jpeg`,
      }))
    : [
        {
          quote: intl.formatMessage({ id: "student.testimonials.quote1" }),
          author: intl.formatMessage({ id: "student.testimonials.author1" }),
          image: "components-images/ahmed.jpeg",
        },
        {
          quote: intl.formatMessage({ id: "student.testimonials.quote2" }),
          author: intl.formatMessage({ id: "student.testimonials.author2" }),
          image: "components-images/luis.jpeg",
        },
        {
          quote: intl.formatMessage({ id: "student.testimonials.quote3" }),
          author: intl.formatMessage({ id: "student.testimonials.author3" }),
          image: "components-images/yesiienia.jpeg",
        },
      ];

  const sectionTitle =
    useCms && page.testimonials.title
      ? getLocalizedValue(page.testimonials.title, locale)
      : intl.formatMessage({ id: "student.testimonials.title" });

  return (
    <section className="mx-auto max-w-7xl flex flex-col p-8 sm:p-14 md:p-20 text-center">
      <SectionTitle title={sectionTitle} />

      <div className="flex flex-col w-full text-left gap-4 md:gap-12 mb-3">
        {testimonials.map((t, idx) => (
          <SingleTestimonial
            key={idx}
            quote={t.quote}
            author={t.author}
            image={t.image}
            reversed={idx % 2 === 0}
          />
        ))}
      </div>

      {/* Arrows + Claim */}
      <div className="flex flex-col items-center my-10 text-center gap-2">
        <ArrowDown
          size={28}
          strokeWidth={1.5}
          className="text-secondary-dark"
        />
        <p className="text-xl italic my-4">
          {intl.formatMessage({
            id: "student.applySection.requirements.extraLine",
          })}
        </p>
        <ArrowDown
          size={28}
          strokeWidth={1.5}
          className="text-secondary-dark"
        />
      </div>

      {/* Button */}
      <div className="text-center">
        <Button
          className="w-[250px] md:w-auto text-center min-w-[100px]"
          href={intl.formatMessage({ id: "student.hero.buttonLink" })}
          buttonText={intl.formatMessage({
            id: "student.applySection.applyButton",
          })}
        >
          {intl.formatMessage({ id: "student.applySection.applyButton" })}
        </Button>
      </div>
    </section>
  );
}
