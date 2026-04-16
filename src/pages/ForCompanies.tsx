import { LandingPage } from "@/components/LandingPage";
import HeroTwoButtons from "@/components/HeroTwoButtons";
import { ProblemHeroSection } from "@/components/sections/ProblemHeroSection";
import { LogoMarqueeSection } from "@/components/sections/LogoMarqueeSection";
import { WhyTegSection } from "@/components/sections/WhyTegSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSectionNew";
import { TestimonialList } from "@/components/sections/TestimonialList";
import { TalentQualitySection } from "@/components/sections/TalentQualitySection";
import { FeatureGrid } from "@/components/blocks/FeatureGrid";

import { Headline } from "@/components/blocks/Headline";
import { Subheadline } from "@/components/blocks/Subheadline";
import { PrimaryButton } from "@/components/blocks/PrimaryButton";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import { LogoMarquee } from "@/components/blocks/LogoMarquee";
import { IconFeature } from "@/components/blocks/IconFeature";
import { WideBannerCTA } from "@/components/blocks/WideBannerCTA";
import { TestimonialCard } from "@/components/blocks/TestimonialCard";

import { useIntl } from "react-intl";

import ContactCard from "@/components/ContactCard";

export default function ForCompanies() {
  const intl = useIntl();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      text: intl.formatMessage({ id: "company.testimonials.quote1.text" }),
      author: intl.formatMessage({ id: "company.testimonials.quote1.author" }),
      role1: intl.formatMessage({ id: "company.testimonials.quote1.role1" }),
      role2: intl.formatMessage({ id: "company.testimonials.quote1.role2" }),
      companyLogo: "/logos/vodafone.png", // Vodafone
      image: "/BerndWiedemann.jpg",
    },
    {
      text: intl.formatMessage({ id: "company.testimonials.quote2.text" }),
      author: intl.formatMessage({ id: "company.testimonials.quote2.author" }),
      role1: intl.formatMessage({ id: "company.testimonials.quote2.role1" }),
      role2: intl.formatMessage({ id: "company.testimonials.quote2.role2" }),
      companyLogo: "/logos/McKinsey.png", // McKinsey
      image: "/JohannesPruchnow.jpg",
    },
    {
      text: intl.formatMessage({ id: "company.testimonials.quote3.text" }),
      author: intl.formatMessage({ id: "company.testimonials.quote3.author" }),
      role1: intl.formatMessage({ id: "company.testimonials.quote3.role1" }),
      role2: intl.formatMessage({ id: "company.testimonials.quote3.role2" }),
      companyLogo: "/logos/BMW.png", // BMW
      image: "/bodoDonauer.jpg",
    },
    {
      text: intl.formatMessage({ id: "company.testimonials.quote4.text" }),
      author: intl.formatMessage({ id: "company.testimonials.quote4.author" }),
      role1: intl.formatMessage({ id: "company.testimonials.quote4.role1" }),
      role2: intl.formatMessage({ id: "company.testimonials.quote4.role2" }),
      image: "/rolandberger.jpg",
      companyLogo: "/logos/Roland_Berger_logo.svg",
    },
  ];

  return (
    <>
      {/* Hero Section - outside container for full width */}
      <HeroTwoButtons
        title={intl.formatMessage({ id: "company.hero.title" })}
        mobileTitle={intl.formatMessage({ id: "company.hero.mobileTitle" })}
        subtitle={intl.formatMessage({ id: "company.hero.subtitle" })}
        bgImage="TEG_Hero_Home.jpg"
        buttonText1={intl.formatMessage({ id: "company.hero.buttonText1" })}
        buttonLink1="#contact"
        gradientClassName="bg-gradient-to-b from-transparent from-45% via-primary/85 via-80% to-primary to-95%"
        imageClassName="object-top md:object-center"
        className="lg:h-screen"
      />

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
          <WideBannerCTA
            background="grey"
            title={intl.formatMessage({
              id: "company.problemHero.offer.subtitle",
            })}
            text={intl.formatMessage({ id: "company.problemHero.offer.text" })}
            align="left"
          >
            <PrimaryButton
              label={intl.formatMessage({ id: "company.problemHero.cta" })}
              align="left"
              onClick={scrollToContact}
            />
          </WideBannerCTA>
        </ProblemHeroSection>

        <LogoMarqueeSection
          title={intl.formatMessage({ id: "company.founders.title" })}
        >
          <LogoMarquee
            speed="medium"
            logos={[
              { src: "/logos/HypoVereinsbank.svg" },
              { src: "/logos/Roland_Berger_logo.svg" },
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
          <FeatureGrid>
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
              align="left"
              onClick={scrollToContact}
            />
          </WideBannerCTA>
        </WhyTegSection>

        {/* Talent Quality Assurance Section */}
        <TalentQualitySection />

        {/* Testimonials Section */}
        <TestimonialsSection>
          <SectionTitle
            text={intl.formatMessage({ id: "company.testimonials.title" })}
          />
          <TestimonialList
            speed="slow"
            testimonials={testimonials.map((quote, index) => (
              <TestimonialCard
                key={index}
                quote={quote.text}
                person={{
                  name: quote.author,
                  roleLine1: quote.role1,
                  roleLine2: quote.role2,
                }}
                companyLogo={quote.companyLogo}
                avatar={quote.image || "placeholder"}
              />
            ))}
          ></TestimonialList>
        </TestimonialsSection>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 border-t">
          <div className="flex justify-center w-full">
            <ContactCard
              name={intl.formatMessage({ id: "company.contact.directorName" })}
              title={intl.formatMessage({
                id: "company.contact.directorTitle",
              })}
              imageUrl="/jonathan.jpg"
              email="jonathan.babelotzky@teg-ev.de"
              linkedinUrl="https://www.linkedin.com/in/jonathan-babelotzky/"
              greeting={intl.formatMessage({ id: "company.contact.greeting" })}
              variant="quote"
            />
          </div>
        </section>
      </LandingPage>
    </>
  );
}
