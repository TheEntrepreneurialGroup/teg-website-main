import React from "react";
import { useIntl } from "react-intl";
import { Building, TrendingUp } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import CallToAction from "../components/CallToAction";
import HeroSectionTwoButtons from "../components/HeroSectionTwoButtons";
import ImageCard from "../components/ImageCard";

export const Home: React.FC = () => {
  const intl = useIntl();

  return (
    <div>
      <HeroSectionTwoButtons
        title={intl.formatMessage({ id: "home.hero.title" })}
        subtitle={intl.formatMessage({ id: "home.hero.subtitle" })}
        buttonText1={intl.formatMessage({ id: "home.hero.buttonText1" })}
        buttonLink1={intl.formatMessage({ id: "home.hero.buttonLink1" })}
        buttonText2={intl.formatMessage({ id: "home.hero.buttonText2" })}
        buttonLink2={intl.formatMessage({ id: "home.hero.buttonLink2" })}
        backgroundImage="/meeting.png"
      />

      <section className="py-20 bg-secondary-light">
        <div className="container-custom">
          <SectionTitle
            title={intl.formatMessage({ id: "home.alumni.title" })}
            centered
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            <StatCard
              value={intl.formatMessage({ id: "home.alumni.stat1.value" })}
              label={intl.formatMessage({ id: "home.alumni.stat1.label" })}
              delay={0.1}
            />
            <StatCard
              value={intl.formatMessage({ id: "home.alumni.stat2.value" })}
              label={intl.formatMessage({ id: "home.alumni.stat2.label" })}
              delay={0.2}
            />
            <StatCard
              value={intl.formatMessage({ id: "home.alumni.stat3.value" })}
              label={intl.formatMessage({ id: "home.alumni.stat3.label" })}
              delay={0.3}
            />
            <StatCard
              value={intl.formatMessage({ id: "home.alumni.stat4.value" })}
              label={intl.formatMessage({ id: "home.alumni.stat4.label" })}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container-custom">
          <SectionTitle
            title={intl.formatMessage({ id: "home.legacy.title" })}
            subtitle={intl.formatMessage({ id: "home.legacy.subtitle" })}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ImageCard
              imageUrl="/corporates.png"
              altText="Corporate Partners"
              caption={intl.formatMessage({ id: "home.legacy.image1.caption" })}
            />
            <ImageCard
              imageUrl="/founders.png"
              altText="Corporate Partners"
              caption={intl.formatMessage({ id: "home.legacy.image2.caption" })}
            />
            <ImageCard
              imageUrl="/kuratorium.jpg"
              altText="Corporate Partners"
              caption={intl.formatMessage({ id: "home.legacy.image3.caption" })}
            />
            <FeatureCard
              title={intl.formatMessage({ id: "home.legacy.feature1.title" })}
              description={intl.formatMessage({
                id: "home.legacy.feature1.description",
              })}
              icon={<TrendingUp size={40} />}
              delay={0.3}
            />
            <FeatureCard
              title={intl.formatMessage({ id: "home.legacy.feature2.title" })}
              description={intl.formatMessage({
                id: "home.legacy.feature2.description",
              })}
              icon={<Building size={40} />}
              delay={0.1}
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          <CallToAction
            title={intl.formatMessage({ id: "home.callToAction1.title" })}
            description={intl.formatMessage({
              id: "home.callToAction1.description",
            })}
            buttonText={intl.formatMessage({
              id: "home.callToAction1.buttonText",
            })}
            buttonLink={intl.formatMessage({
              id: "home.callToAction1.buttonLink",
            })}
            isSection={false}
          />
          <CallToAction
            title={intl.formatMessage({ id: "home.callToAction2.title" })}
            description={intl.formatMessage({
              id: "home.callToAction2.description",
            })}
            buttonText={intl.formatMessage({
              id: "home.callToAction2.buttonText",
            })}
            buttonLink={intl.formatMessage({
              id: "home.callToAction2.buttonLink",
            })}
            isSection={false}
          />
        </div>
      </section>
    </div>
  );
};
