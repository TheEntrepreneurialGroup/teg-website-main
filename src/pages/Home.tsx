import React from "react";
import { useIntl } from "react-intl";
import NewHeroTwoButtons from "@/components/NewHeroTwoButtons";
import TEGInZahlen from "@/components/sections/TEGInZahlen";
import NewFeatureCard from "@/components/NewFeatureCard";
import MissionAndVision from "@/components/sections/MissionAndVision";

export const Home: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <NewHeroTwoButtons
        title={intl.formatMessage({ id: "home.hero.title" })}
        mobileTitle={intl.formatMessage({ id: "home.hero.mobileTitle" })}
        subtitle={intl.formatMessage({ id: "home.hero.since" })}
        bgImage="TEG_Hero_Subpage.jpg"
        buttonText1={intl.formatMessage({ id: "home.hero.buttonText1" })}
        buttonText2={intl.formatMessage({ id: "home.hero.buttonText2" })}
        buttonLink2="/for-students"
        buttonLink1="/for-companies"
      />

      <TEGInZahlen
        title="TEG in Zahlen"
        number1={intl.formatMessage({ id: "home.alumni.alumni.value" })}
        text1={intl.formatMessage({ id: "home.alumni.alumni.label" })}
        number2={intl.formatMessage({ id: "home.alumni.stat2.value" })}
        text2={intl.formatMessage({ id: "home.alumni.stat2.label" })}
        number3={intl.formatMessage({ id: "home.alumni.stat3.value" })}
        text3={intl.formatMessage({ id: "home.alumni.stat3.label" })}
        number4={intl.formatMessage({ id: "home.alumni.stat4.value" })}
        text4={intl.formatMessage({ id: "home.alumni.stat4.label" })}
      />

      {/* First card - News article (above Mission and Vision) */}
      <div className="flex flex-col items-center">
        <NewFeatureCard
          title={intl.formatMessage({ id: "home.card1.title" })}
          description={intl.formatMessage({ id: "home.card1.description" })}
          buttonText={intl.formatMessage({ id: "home.card1.buttonText" })}
          imagePosition="left"
          imageAltText={intl.formatMessage({ id: "home.card1.imageAlt" })}
          imageURL="kuratorium.jpg"
          buttonLink="/"
          clickable={false}
        />
      </div>

      <MissionAndVision
        missionTitle="Mission"
        visionTitle="Vision"
        missionText={intl.formatMessage({ id: "home.mission" })}
        visionText={intl.formatMessage({ id: "home.vision" })}
      />

      {/* Other cards with pictures (below Mission and Vision) */}
      <div className="flex flex-col items-center">
        <NewFeatureCard
          title={intl.formatMessage({ id: "home.card2.title" })}
          description={intl.formatMessage({ id: "home.card2.description" })}
          buttonText={intl.formatMessage({ id: "home.card2.buttonText" })}
          imagePosition="right"
          imageAltText={intl.formatMessage({ id: "home.card2.imageAlt" })}
          imageURL="components-images/team-2.jpeg"
          buttonLink={intl.formatMessage({ id: "home.card2.buttonLink" })}
          clickable
        />
        <NewFeatureCard
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
