import React from "react";
import { useIntl } from "react-intl";
import HeroTwoButtons from "@/components/HeroTwoButtons";
import TEGInZahlen from "@/components/sections/TEGInZahlen";
import FeatureCard from "@/components/FeatureCard";

export const Home: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <HeroTwoButtons
        title={intl.formatMessage({ id: "home.hero.title" })}
        mobileTitle={intl.formatMessage({ id: "home.hero.mobileTitle" })}
        subtitle={intl.formatMessage({ id: "home.hero.since" })}
        bgImage="TEG_Hero_Subpage.png"
        buttonText1={intl.formatMessage({ id: "home.hero.buttonText1" })}
        buttonText2={intl.formatMessage({ id: "home.hero.buttonText2" })}
        buttonLink2="/for-students"
        buttonLink1="/for-companies"
        gradientClassName="bg-gradient-to-b from-transparent from-45% via-primary/85  via-60% to-primary to-90% lg:via-65%"
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

      {/* <MissionAndVision
        missionTitle="Mission"
        visionTitle="Vision"
        missionText={intl.formatMessage({ id: "home.mission" })}
        visionText={intl.formatMessage({ id: "home.vision" })}
      />
 */}
      <div className="flex flex-col items-center lg:px-48 xl:px-96 xl:py-20 gap-10 md:gap-0 pb-20 md:pb-0">
        <FeatureCard
          className="pl-1"
          title={intl.formatMessage({ id: "home.card1.title" })}
          description={intl.formatMessage({ id: "home.card1.description" })}
          buttonText={intl.formatMessage({ id: "home.card1.buttonText" })}
          imagePosition="left"
          imageAltText={intl.formatMessage({ id: "home.card1.imageAlt" })}
          imageURL="kuratorium.jpg"
          buttonLink="/"
          clickable={false}
        />

        <FeatureCard
          title={intl.formatMessage({ id: "home.card2.title" })}
          description={intl.formatMessage({ id: "home.card2.description" })}
          buttonText={intl.formatMessage({ id: "home.card2.buttonText" })}
          imagePosition="right"
          imageAltText={intl.formatMessage({ id: "home.card2.imageAlt" })}
          imageURL="components-images/team-2.jpeg"
          buttonLink={intl.formatMessage({ id: "home.card2.buttonLink" })}
          clickable
        />
        <FeatureCard
          title={intl.formatMessage({ id: "home.card3.title" })}
          description={intl.formatMessage({ id: "home.card3.description" })}
          buttonText={intl.formatMessage({ id: "home.card3.buttonText" })}
          imagePosition="left"
          imageAltText={intl.formatMessage({ id: "home.card3.imageAlt" })}
          imageURL="forstudent.jpg"
          buttonLink={intl.formatMessage({ id: "home.card3.buttonLink" })}
          clickable
        />
      </div>
    </div>
  );
};
