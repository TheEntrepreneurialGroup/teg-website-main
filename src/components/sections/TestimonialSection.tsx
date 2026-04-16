import { SectionTitle } from "@/components/blocks/SectionTitle";
import { useIntl } from "react-intl";
import SingleTestimonial from "../ui/SingleTestimonial";
import { PrimaryButton } from "../blocks/PrimaryButton";
import { ArrowDown } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  image: string;
};

// images to be added for testimonials
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

  return (
    <section className="mx-auto flex flex-col p-4 sm:p-16">
      <SectionTitle
        text={intl.formatMessage({
          id: "student.testimonials.title",
        })}
        className="text-left"
      />

      <div className="flex flex-col w-full text-left gap-4 md:gap-10">
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

      {/* Pfeile + Claim */}
      <div className="flex flex-col items-center my-6 md:my-10 text-center gap-2">
        <ArrowDown
          size={28}
          strokeWidth={1.5}
          className="text-secondary-dark"
        />
      </div>

      {/* Button */}
      <div className="text-center">
        <PrimaryButton
          label={intl.formatMessage({ id: "student.applySection.applyButton" })}
          href={intl.formatMessage({ id: "student.hero.buttonLink" })}
          buttonText={
            "student testimonial: " +
            intl.formatMessage({ id: "student.hero.applyButton" })
          }
          align="center"
        />
      </div>
    </section>
  );
}
