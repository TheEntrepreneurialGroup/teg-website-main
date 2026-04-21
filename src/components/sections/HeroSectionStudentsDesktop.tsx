import React from "react";
import { PrimaryButton } from "../blocks/PrimaryButton";
import { useIntl } from "react-intl";

const HeroSectionStudentsDesktop: React.FC = () => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: "student.hero.title" });
  const subtitle = intl.formatMessage({ id: "student.hero.subtitle" });
  const buttonText = intl.formatMessage({ id: "student.hero.buttonText" });
  const buttonLink = intl.formatMessage({ id: "student.hero.buttonLink" });
  const backgroundImage = "/shared/heroes/hero-students.avif";

  return (
    <div className="flex flex-row items-center justify-start">
      <img
        src={backgroundImage}
        alt="Hero Background"
        className="object-cover w-1/2"
      />

      <div className="container-custom text-left lg:p-12 xl:p-24 w-2/4 h-full">
        <h1 className="text-primary font-bold text-3xl 2xl:text-4xl mb-4">
          {title}
        </h1>
        <p className="text-foreground max-w-3xl mb-8 text-xl">{subtitle}</p>

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

export default HeroSectionStudentsDesktop;
