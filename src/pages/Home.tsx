import React, { useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import { Building, TrendingUp } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import CallToAction from "../components/CallToAction";
import HeroSectionTwoButtons from "../components/HeroSectionTwoButtons";
import ImageCard from "../components/ImageCard";
import NewHeroTwoButtons from "@/components/NewHeroTwoButtons";

export const Home: React.FC = () => {
  const intl = useIntl();

  // // Section refs
  // const alumniRef = useRef<HTMLDivElement>(null);
  // const legacyRef = useRef<HTMLDivElement>(null);
  // const ctaRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const sections = [
  //     { ref: alumniRef, name: "home-alumni-section" },
  //     { ref: legacyRef, name: "home-legacy-section" },
  //     { ref: ctaRef, name: "home-cta-section" },
  //   ];
  //   const observers: IntersectionObserver[] = [];

  //   sections.forEach(({ ref, name }) => {
  //     if (!ref.current) return;
  //     const observer = new IntersectionObserver(
  //       ([entry]) => {
  //         if (entry.isIntersecting) {
  //           if (window.umami) {
  //             window.umami.track(name);
  //           }
  //           observer.disconnect();
  //         }
  //       },
  //       { threshold: 0.3 },
  //     );
  //     observer.observe(ref.current);
  //     observers.push(observer);
  //   });

  //   return () => observers.forEach((obs) => obs.disconnect());
  // }, []);

  return (
    <NewHeroTwoButtons 
    title={intl.formatMessage({id: "home.hero.title"})}
    subtitle={intl.formatMessage({id: "home.hero.since"})}
    bgImage="public/TEG_Hero_Subpage.jpg"
    buttonText1={intl.formatMessage({id: "home.hero.buttonText1"})}
    buttonText2={intl.formatMessage({id: "home.hero.buttonText2"})}
    buttonLink1={intl.formatMessage({id: "home.hero.buttonLink1"})}
    buttonLink2={intl.formatMessage({id: "home.hero.buttonLink2"})}
    />
  );
};
