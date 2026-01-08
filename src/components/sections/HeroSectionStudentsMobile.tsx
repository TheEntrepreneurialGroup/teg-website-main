import React from "react";
import Button from "../Button";
import { useIntl } from "react-intl";
import { useSanityContent, queries } from "../../hooks/useSanityContent";
import { getLocalizedValue } from "../../lib/sanityClient";
import type { PageData } from "../../types/sanity";

const HeroSectionStudentsMobile: React.FC = () => {
  const intl = useIntl();
  const locale = intl.locale as "de" | "en";

  // Fetch content from Sanity
  const { data: page } = useSanityContent<PageData>(queries.forStudentsPage);

  // Use CMS content if available, otherwise fall back to locale files
  const title = page?.hero?.title
    ? getLocalizedValue(page.hero.title, locale)
    : intl.formatMessage({ id: "student.hero.title" });

  const subtitle = page?.hero?.subtitle
    ? getLocalizedValue(page.hero.subtitle, locale)
    : intl.formatMessage({ id: "student.hero.subtitle" });

  const buttonText = page?.hero?.buttons?.[0]?.text
    ? getLocalizedValue(page.hero.buttons[0].text, locale)
    : intl.formatMessage({ id: "student.hero.buttonText" });

  const buttonLink =
    page?.hero?.buttons?.[0]?.link ||
    intl.formatMessage({ id: "student.hero.buttonLink" });

  const backgroundImage = "/forstudent.jpg";

  return (
    <div className="flex flex-col items-center justify-start">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="w-full h-auto"
      />

      <div className="container-custom text-left p-8">
        <h1 className="text-primary font-bold text-3xl">{title}</h1>
        <p className="text-gray-700 max-w-3xl mb-8 text-xl">{subtitle}</p>

        {buttonText && buttonLink && (
          <Button href={buttonLink} buttonText={buttonText}>
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default HeroSectionStudentsMobile;
