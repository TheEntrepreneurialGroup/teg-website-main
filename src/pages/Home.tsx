import React from "react";
import { useIntl } from "react-intl";
import NewHeroTwoButtons from "@/components/NewHeroTwoButtons";
import TEGInZahlen from "@/components/sections/TEGInZahlen";
import Sections from "@/components/sections/Sections";
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

      <MissionAndVision
        missionTitle="Mission"
        visionTitle="Vision"
        missionText={intl.formatMessage({ id: "home.mission" })}
        visionText={intl.formatMessage({ id: "home.vision" })}
      />

      <Sections
        image1="kuratorium.jpg"
        imagePos1="left"
        imageAlt1={intl.formatMessage({ id: "home.card1.imageAlt" })}
        tilte1={intl.formatMessage({ id: "home.card1.title" })}
        text1={intl.formatMessage({ id: "home.card1.description" })}
        button1Text={intl.formatMessage({ id: "home.card1.buttonText" })}
        Link1="/"
        clickable1={false}
        image2="components-images/team-2.jpeg"
        imagePos2="right"
        imageAlt2={intl.formatMessage({ id: "home.card2.imageAlt" })}
        tilte2={intl.formatMessage({ id: "home.card2.title" })}
        text2={intl.formatMessage({ id: "home.card2.description" })}
        button2Text={intl.formatMessage({ id: "home.card2.buttonText" })}
        Link2={intl.formatMessage({ id: "home.card2.buttonLink" })}
        clickable2
        image3="forstudent.jpg"
        imagePos3="left"
        imageAlt3={intl.formatMessage({ id: "home.card3.imageAlt" })}
        tilte3={intl.formatMessage({ id: "home.card3.title" })}
        text3={intl.formatMessage({ id: "home.card3.description" })}
        button3Text={intl.formatMessage({ id: "home.card3.buttonText" })}
        Link3={intl.formatMessage({ id: "home.card3.buttonLink" })}
        clickable3
      />
    </div>
  );
};
