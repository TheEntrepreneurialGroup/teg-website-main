import React from "react";
import { useIntl } from "react-intl";
import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";
import ContactCard from "../components/ContactCard";
import GoogleMaps from "../components/GoogleMaps";
import LogoSection from "../components/sections/LogoSection";
import Testimonials from "../components/sections/TestimonialSection";
import CardText from "../components/sections/CardText";

const ForStudents: React.FC = () => {
  const intl = useIntl();

  const contactPerson = {
    name: intl.formatMessage({ id: "student.contact.directorName" }),
    title: intl.formatMessage({ id: "student.contact.directorTitle" }),
    imageUrl: "/felix.jpeg",
    email: "info@teg-ev.de",
    linkedinUrl: "https://www.linkedin.com/in/felix-enke/",
  };

  return (
    <div>
      {/*<HeroSectionStudents></HeroSectionStudents>*/}
      {/* --- Hero Section --- */}
      <HeroSection
        title={intl.formatMessage({ id: "student.hero.title" })}
        subtitle={intl.formatMessage({ id: "student.hero.subtitle" })}
        buttonText={intl.formatMessage({ id: "student.hero.buttonText" })}
        buttonLink={intl.formatMessage({ id: "student.hero.buttonLink" })}
        backgroundImage="/for_students.jpg"
      />

      <LogoSection
        images={[
          { image: "/components-images/bmw-image.webp", text: "BMW" },
          { image: "/components-images/bcg.png", text: "BCG" },
          { image: "/components-images/siemens.svg", text: "Siemens" },
          {
            image: "/components-images/HypoVereinsbank.svg",
            text: "HypoVereinsbank",
          },
          {
            image: "/components-images/Roland_Berger_logo.svg",
            text: "Roland Berger",
          },
          { image: "/components-images/ruhrgas-logo.png", text: "Ruhrgas" },
        ]}
        title={intl.formatMessage({ id: "home.partners.title" })}
        description={intl.formatMessage({ id: "home.partners.description" })}
      />

      <CardText
        image="/welcome-to-teg.jpeg"
        imageAlt={intl.formatMessage({ id: "student.cardText.imageAlt" })}
        title={intl.formatMessage({ id: "student.cardText.title" })}
        subtitle={intl.formatMessage({ id: "student.cardText.subtitle" })}
        body={intl.formatMessage({ id: "student.cardText.body" })}
      />
      <LogoSection
        images={[
          { image: "/components-images/airbus.svg", text: "Airbus" },
          {
            image: "/components-images/maiborn-logo.png",
            text: "MaibornWolff",
          },
          { image: "/components-images/tuv-logo.png", text: "TÜV" },
          { image: "/components-images/Deloitte.svg", text: "Deloitte" },
          { image: "/components-images/ey-logo.png", text: "EY" },
          { image: "/components-images/Vattenfall.svg", text: "Vattenfall" },
        ]}
        title={intl.formatMessage({ id: "home.alumnis.title" })}
        description={intl.formatMessage({ id: "home.alumnis.description" })}
      />

      <CardText
        image="/components-images/team-2.jpeg"
        imageAlt={intl.formatMessage({ id: "student.cardText3.imageAlt" })}
        title={intl.formatMessage({ id: "student.cardText3.title" })}
        subtitle={intl.formatMessage({ id: "student.cardText3.subtitle" })}
        body={intl.formatMessage({ id: "student.cardText3.body" })}
      />

      <GoogleMaps />

      <CardText
        image="/components-images/team-4.jpeg"
        imageAlt={intl.formatMessage({ id: "student.cardText2.imageAlt" })}
        title={intl.formatMessage({ id: "student.cardText2.title" })}
        subtitle={intl.formatMessage({ id: "student.cardText2.subtitle" })}
      />

      <Testimonials />

      <div className="container-custom max-w-7xl mx-auto px-4 pb-8">
        <CallToAction
          title={intl.formatMessage({ id: "student.callToAction1.title" })}
          description={intl.formatMessage({
            id: "student.callToAction1.description",
          })}
          buttonText={intl.formatMessage({
            id: "student.callToAction1.buttonText",
          })}
          buttonLink={intl.formatMessage({
            id: "student.callToAction1.buttonLink",
          })}
          isSection={false}
        />
      </div>

      <section id="contact" className="pt-20 bg-primary text-white">
        <div className="flex flex-col items-center">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
              {intl.formatMessage({ id: "student.contact.title" })}
            </h2>

            {/* Card Container - Centered */}
            <div className="flex justify-center">
              <ContactCard
                name={contactPerson.name}
                title={contactPerson.title}
                imageUrl={contactPerson.imageUrl}
                email={contactPerson.email}
                linkedinUrl={contactPerson.linkedinUrl}
                greeting={intl.formatMessage({
                  id: "student.contact.greeting",
                })}
                variant="quote"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForStudents;
