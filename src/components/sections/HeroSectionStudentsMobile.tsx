import React from "react";
import { PrimaryButton } from "../blocks/PrimaryButton";
import { useIntl } from "react-intl";

const HeroSectionStudentsMobile: React.FC = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "student.hero.title" });
  const subtitle = intl.formatMessage({ id: "student.hero.subtitle" });
  const buttonText = intl.formatMessage({ id: "student.hero.buttonText" });
  const buttonLink = intl.formatMessage({ id: "student.hero.buttonLink" });
  const backgroundImage = "/shared/heroes/hero-students.avif";

  return (
    <div className="flex flex-col items-center justify-start">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="w-full h-auto"
      />

      <div className="container-custom text-left p-4">
        <h1 className="text-primary font-semibold text-3xl mb-3">{title}</h1>
        <p className="text-foreground max-w-3xl mb-4 text-xl">{subtitle}</p>

        {buttonText && buttonLink && (
          <PrimaryButton
            label={buttonText}
            href={buttonLink}
            buttonText={buttonText}
          />
        )}
      </div>
    </div>
  );
};

export default HeroSectionStudentsMobile;
