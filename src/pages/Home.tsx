import React from "react";
import { useIntl } from "react-intl";
import HeroTwoButtons from "@/components/HeroTwoButtons";
import TEGInZahlen from "@/components/sections/TEGInZahlen";
import FeatureCard from "@/components/FeatureCard";
import { ConferenceTicketBanner } from "@/components/ConferenceTicketBanner";

export const Home: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <ConferenceTicketBanner />

      <HeroTwoButtons
        title={intl.formatMessage({ id: "home.hero.title" })}
        subtitle={intl.formatMessage({ id: "home.hero.since" })}
        mobileTitle={intl.formatMessage({ id: "home.hero.mobileTitle" })}
        bgImage="/shared/heroes/hero-home.avif"
        buttonText1={intl.formatMessage({ id: "home.hero.buttonText1" })}
        buttonText2={intl.formatMessage({ id: "home.hero.buttonText2" })}
        buttonLink2="/for-students"
        buttonLink1="/for-companies"
        gradientClassName="bg-gradient-to-b from-transparent from-45% via-primary/85 via-80% to-primary to-95%"
        imageClassName="object-top md:object-center"
        className="lg:h-screen"
      />

      <TEGInZahlen
        className="md:py-20"
        title={intl.formatMessage({ id: "home.alumni.title" })}
        number1={intl.formatMessage({ id: "home.alumni.alumni.value" })}
        text1={intl.formatMessage({ id: "home.alumni.alumni.label" })}
        number2={intl.formatMessage({ id: "home.alumni.stat2.value" })}
        text2={intl.formatMessage({ id: "home.alumni.stat2.label" })}
        number3={intl.formatMessage({ id: "home.alumni.stat3.value" })}
        text3={intl.formatMessage({ id: "home.alumni.stat3.label" })}
        number4={intl.formatMessage({ id: "home.alumni.stat4.value" })}
        text4={intl.formatMessage({ id: "home.alumni.stat4.label" })}
      />

      <div className="flex flex-col gap-20 md:gap-0 pb-20 md:pb-0">
        <FeatureCard
          className="pl-1"
          title={intl.formatMessage({ id: "home.card1.title" })}
          description={intl.formatMessage({ id: "home.card1.description" })}
          imagePosition="left"
          imageAltText={intl.formatMessage({ id: "home.card1.imageAlt" })}
          imageURL="/home/kuratorium.avif"
        />

        <FeatureCard
          title={intl.formatMessage({ id: "home.card2.title" })}
          description={intl.formatMessage({ id: "home.card2.description" })}
          buttonText={intl.formatMessage({ id: "home.card2.buttonText" })}
          imagePosition="right"
          imageAltText={intl.formatMessage({ id: "home.card2.imageAlt" })}
          imageURL="/home/tegtalk-WS26.avif"
          buttonLink={intl.formatMessage({ id: "home.card2.buttonLink" })}
        />
        <FeatureCard
          title={intl.formatMessage({ id: "home.card3.title" })}
          description={intl.formatMessage({ id: "home.card3.description" })}
          buttonText={intl.formatMessage({ id: "home.card3.buttonText" })}
          imagePosition="left"
          imageAltText={intl.formatMessage({ id: "home.card3.imageAlt" })}
          imageURL="/home/fuehrungskraefte.avif"
          buttonLink={intl.formatMessage({ id: "home.card3.buttonLink" })}
        />
      </div>
    </div>
  );
};
