import React, { useRef, useEffect } from "react";
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
        subtitle={intl.formatMessage({ id: "home.hero.since" })}
        bgImage="TEG_Hero_Subpage.jpg"
        buttonText1={intl.formatMessage({ id: "home.hero.buttonText1" })}
        buttonText2={intl.formatMessage({ id: "home.hero.buttonText2" })}
        buttonLink1="/for-students"
        buttonLink2="/for-companies"
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
        visionTitle="Vision"
        missionTitle="Mission"
        visionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel elit facilisis, sagittis tortor a, varius eros. Aenean purus purus, volutpat a fermentum ultrices, faucibus eu massa. Fusce accumsan dolor blandit pharetra pellentesque. Phasellus et venenatis dolor, nec eleifend nunc. Aliquam dictum convallis tortor ut sagittis. Phasellus elementum augue ac massa accumsan dapibus. Nulla non enim ut tortor dignissim efficitur. Donec commodo, dui ac luctus hendrerit, odio sem volutpat magna, eget porttitor orci nulla ut erat."
        missionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel elit facilisis, sagittis tortor a, varius eros. Aenean purus purus, volutpat a fermentum ultrices, faucibus eu massa. Fusce accumsan dolor blandit pharetra pellentesque. Phasellus et venenatis dolor, nec eleifend nunc. Aliquam dictum convallis tortor ut sagittis. Phasellus elementum augue ac massa accumsan dapibus. Nulla non enim ut tortor dignissim efficitur. Donec commodo, dui ac luctus hendrerit, odio sem volutpat magna, eget porttitor orci nulla ut erat."
      />

      <Sections
        image1="kuratorium.jpg"
        imagePos1="left"
        imageAlt1={intl.formatMessage({ id: "home.card1.imageAlt" })}
        tilte1={intl.formatMessage({ id: "home.card1.title" })}
        text1={intl.formatMessage({ id: "home.card1.description" })}
        button1Text={intl.formatMessage({ id: "home.card1.buttonText" })}
        Link1={intl.formatMessage({ id: "home.card1.buttonLink" })}

        image2="components-images/team-2.jpeg"
        imagePos2="right"
        imageAlt2={intl.formatMessage({ id: "home.card2.imageAlt" })}
        tilte2={intl.formatMessage({ id: "home.card2.title" })}
        text2={intl.formatMessage({ id: "home.card2.description" })}
        button2Text={intl.formatMessage({ id: "home.card2.buttonText" })}
        Link2={intl.formatMessage({ id: "home.card2.buttonLink" })}
      
        image3="forstudent.jpg"
        imagePos3="left"
        imageAlt3={intl.formatMessage({ id: "home.card3.imageAlt" })}
        tilte3={intl.formatMessage({ id: "home.card3.title" })}
        text3={intl.formatMessage({ id: "home.card3.description" })}
        button3Text={intl.formatMessage({ id: "home.card3.buttonText" })}
        Link3={intl.formatMessage({ id: "home.card3.buttonLink" })}
      />
    </div>
  );
};
