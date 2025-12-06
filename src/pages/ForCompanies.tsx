import { LandingPage } from "@/components/LandingPage";
import { ProblemHeroSection } from "@/components/sections/ProblemHeroSection";
import { LogoMarqueeSection } from "@/components/sections/LogoMarqueeSection";
import { WhyTegSection } from "@/components/sections/WhyTegSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSectionNew";
import { TestimonialList } from "@/components/sections/TestimonialList";
import { RunTegSection } from "@/components/sections/RunTegSection";
import { PillarGrid } from "@/components/sections/PillarGrid";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";

import { Headline } from "@/components/blocks/Headline";
import { Subheadline } from "@/components/blocks/Subheadline";
import { PrimaryButton } from "@/components/blocks/PrimaryButton";
import { OfferBox } from "@/components/blocks/OfferBox";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import { LogoMarquee } from "@/components/blocks/LogoMarquee";
import { IconFeature } from "@/components/blocks/IconFeature";
import { WideBannerCTA } from "@/components/blocks/WideBannerCTA";
import { TestimonialCard } from "@/components/blocks/TestimonialCard";
import { PillarCard } from "@/components/blocks/PillarCard";

import { useIntl } from "react-intl";

export default function ForCompanies() {
  const intl = useIntl();

  const testimonials = [
    {
      text: intl.formatMessage({ id: "company.testimonials.quote1.text" }),
      author: intl.formatMessage({ id: "company.testimonials.quote1.author" }),
      role1: intl.formatMessage({ id: "company.testimonials.quote1.role1" }),
      role2: intl.formatMessage({ id: "company.testimonials.quote1.role2" }),
    },
    {
      text: intl.formatMessage({ id: "company.testimonials.quote2.text" }),
      author: intl.formatMessage({ id: "company.testimonials.quote2.author" }),
      role1: intl.formatMessage({ id: "company.testimonials.quote2.role1" }),
      role2: intl.formatMessage({ id: "company.testimonials.quote2.role2" }),
    },
    {
      text: intl.formatMessage({ id: "company.testimonials.quote3.text" }),
      author: intl.formatMessage({ id: "company.testimonials.quote3.author" }),
      role1: intl.formatMessage({ id: "company.testimonials.quote3.role1" }),
      role2: intl.formatMessage({ id: "company.testimonials.quote3.role2" }),
    },
  ];

  const pillars = [
    { title: intl.formatMessage({ id: "company.runTeg.pillar1.title" }) },
    { title: intl.formatMessage({ id: "company.runTeg.pillar2.title" }) },
    { title: intl.formatMessage({ id: "company.runTeg.pillar3.title" }) },
    { title: intl.formatMessage({ id: "company.runTeg.pillar4.title" }) },
  ];

  return (
    <LandingPage>
      {/* Problem Hero Section */}
      <ProblemHeroSection>
        <Headline
          text={intl.formatMessage({ id: "company.problemHero.title" })}
          variant="h2"
        />
        <Subheadline
          text={intl.formatMessage({ id: "company.problemHero.subtitle" })}
          variant="body"
        />
        <PrimaryButton
          label={intl.formatMessage({ id: "company.problemHero.cta" })}
          align="left"
          size="sm"
        />
        <OfferBox
          title={intl.formatMessage({ id: "company.problemHero.offer.title" })}
          textPlaceholder={true}
          size="large"
        />
      </ProblemHeroSection>

      <LogoMarqueeSection
        title={intl.formatMessage({ id: "company.founders.title" })}
        autoscroll={true}
      >
        <LogoMarquee
          speed="slow"
          logos={[
            { src: "/logos/Deloitte.svg" },
            { src: "/logos/HypoVereinsbank.svg" },
            { src: "/logos/Roland_Berger_logo.svg" },
            { src: "/logos/Vattenfall.svg" },
            { src: "/logos/airbus.svg" },
            { src: "/logos/bcg.png" },
            { src: "/logos/ruhrgas-logo.png" },
            { src: "/logos/siemens.svg" },
          ]}
        />
      </LogoMarqueeSection>

      {/* Why TEG Section */}
      <WhyTegSection>
        <SectionTitle
          text={intl.formatMessage({ id: "company.whyTeg.title" })}
        />
        <FeatureGrid layout="2x2">
          <IconFeature
            icon="search-people"
            title={intl.formatMessage({
              id: "company.whyTeg.features.selection.title",
            })}
            subtitle={intl.formatMessage({
              id: "company.whyTeg.features.selection.subtitle",
            })}
          />
          <IconFeature
            icon="briefcase"
            title={intl.formatMessage({
              id: "company.whyTeg.features.preparation.title",
            })}
            subtitle={intl.formatMessage({
              id: "company.whyTeg.features.preparation.subtitle",
            })}
          />
          <IconFeature
            icon="checklist"
            title={intl.formatMessage({
              id: "company.whyTeg.features.verification.title",
            })}
            subtitle={intl.formatMessage({
              id: "company.whyTeg.features.verification.subtitle",
            })}
          />
        </FeatureGrid>

        <WideBannerCTA
          background="grey"
          title={intl.formatMessage({ id: "company.whyTeg.ctaBanner.title" })}
          text={intl.formatMessage({ id: "company.whyTeg.ctaBanner.text" })}
          align="left"
        >
          <PrimaryButton
            label={intl.formatMessage({ id: "company.whyTeg.ctaBanner.cta" })}
            align="right"
          />
        </WideBannerCTA>
      </WhyTegSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <SectionTitle
          text={intl.formatMessage({ id: "company.testimonials.title" })}
        />
        <TestimonialList layout="stacked">
          {testimonials.map((quote, index) => (
            <TestimonialCard
              key={index}
              quote={quote.text}
              person={{
                name: quote.author,
                roleLine1: quote.role1,
                roleLine2: quote.role2,
              }}
              avatar="placeholder"
            />
          ))}
        </TestimonialList>
      </TestimonialsSection>

      {/* Run TEG Section */}
      <RunTegSection>
        <SectionTitle
          text={intl.formatMessage({ id: "company.runTeg.title" })}
        />
        <PillarGrid columns={2}>
          {pillars.map((pillar, index) => (
            <PillarCard key={index} title={pillar.title} />
          ))}
        </PillarGrid>
      </RunTegSection>
    </LandingPage>
  );
}
