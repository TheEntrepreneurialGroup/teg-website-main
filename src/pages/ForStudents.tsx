import React from "react";
import { useIntl } from "react-intl";
import CallToAction from "../components/CallToAction";
import ContactCard from "../components/ContactCard";
import LogoSection from "../components/sections/LogoSection";
import Testimonials from "../components/sections/TestimonialSection";
import FeatureCard from "../components/FeatureCard";
import MemberProcessSection from "../components/sections/MemberProcessSection";
import ApplicationPipelineSection from "../components/sections/ApplicationPipelineSection";
import HeroSectionStudentsDesktop from "../components/sections/HeroSectionStudentsDesktop";
import HeroSectionStudentsMobile from "../components/sections/HeroSectionStudentsMobile";
import EventSection, {
  type EventSlide,
} from "../components/sections/EventsSection";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 1024); // sm breakpoint
    handler();
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isDesktop;
};

const ForStudents: React.FC = () => {
  const intl = useIntl();
  const isDesktop = useIsDesktop();

  const events: EventSlide[] = [
    {
      titleId: "student.events.list.brunch.title",
      descriptionId: "student.events.list.brunch.description",
      link: "https://luma.com/y7fv91t6",
      imageSrc: "/for-students/events/brunch.avif",
      imageAltId: "student.events.imageAlt",
      linkLabelId: "student.events.list.brunch.linkLabel",
    },
    {
      titleId: "student.events.list.talk.title",
      descriptionId: "student.events.list.talk.description",
      link: "https://luma.com/fuk94geg",
      imageSrc: "/for-students/events/tegtalk-SS26.avif",
      imageAltId: "student.events.imageAlt",
      linkLabelId: "student.events.list.talk.linkLabel",
    },
    {
      titleId: "student.events.list.workshop.title",
      descriptionId: "student.events.list.workshop.description",
      link: "https://tally.so/r/yPDXd4",
      imageSrc: "/for-students/events/workshop.avif",
      imageAltId: "student.events.imageAlt",
      linkLabelId: "student.events.list.workshop.linkLabel",
    },
    {
      titleId: "student.events.list.whatsapp.title",
      descriptionId: "student.events.list.whatsapp.description",
      link: "https://chat.whatsapp.com/J5hQYkeq14hCOkJsJ74w5x",
      imageSrc: "/for-students/events/whatsapp.avif",
      imageAltId: "student.events.imageAlt",
      linkLabelId: "student.events.list.whatsapp.linkLabel",
    },
  ];

  const contactPerson = {
    name: intl.formatMessage({ id: "student.contact.directorName" }),
    title: intl.formatMessage({ id: "student.contact.directorTitle" }),
    imageUrl: "/for-students/contact/felix.avif",
    email: "info+website@teg-ev.de",
    linkedinUrl: "https://www.linkedin.com/in/felix-enke/",
  };

  return (
    <div>
      {isDesktop ? (
        <HeroSectionStudentsDesktop />
      ) : (
        <HeroSectionStudentsMobile />
      )}

      <div className="max-w-7xl mx-auto">
        <EventSection events={events} />
        {/* Commitment Section */}
        <FeatureCard
          imageURL="/for-students/commitment/ancient-group.avif"
          imageAltText={intl.formatMessage({
            id: "student.commitment.imageAlt",
          })}
          title={intl.formatMessage({ id: "student.commitment.title" })}
          description={intl.formatMessage({ id: "student.commitment.body" })}
          body={intl.formatMessage({ id: "student.commitment.down" })}
          imagePosition="left"
        />

        <ApplicationPipelineSection />

        <LogoSection
          images={[
            { image: "/shared/logos/bmw-image.webp", text: "BMW" },
            { image: "/shared/logos/bcg.avif", text: "BCG" },
            { image: "/shared/logos/siemens.svg", text: "Siemens" },
            {
              image: "/shared/logos/hypovereinsbank.svg",
              text: "HypoVereinsbank",
            },
            {
              image: "/shared/logos/roland-berger.svg",
              text: "Roland Berger",
            },
            { image: "/shared/logos/ruhrgas.avif", text: "Ruhrgas" },
          ]}
          title={intl.formatMessage({ id: "home.partners.title" })}
          description={intl.formatMessage({ id: "home.partners.description" })}
        />

        <MemberProcessSection />

        <LogoSection
          images={[
            { image: "/shared/logos/airbus.svg", text: "Airbus" },
            {
              image: "/shared/logos/maiborn-wolff.avif",
              text: "MaibornWolff",
            },
            { image: "/shared/logos/tuv.avif", text: "TÜV" },
            { image: "/shared/logos/deloitte.svg", text: "Deloitte" },
            { image: "/shared/logos/ey.avif", text: "EY" },
            { image: "/shared/logos/vattenfall.svg", text: "Vattenfall" },
          ]}
          title={intl.formatMessage({ id: "home.alumnis.title" })}
          description={intl.formatMessage({ id: "home.alumnis.description" })}
        />

        <div className="max-w-7xl mx-auto p-2 sm:p-8 md:p-14 lg:p-20">
          <CallToAction
            title={intl.formatMessage({ id: "student.callToAction.title" })}
            description={intl.formatMessage({
              id: "student.callToAction.description",
            })}
            buttonText={intl.formatMessage({
              id: "student.callToAction.buttonText",
            })}
            buttonLink={intl.formatMessage({
              id: "student.callToAction.buttonLink",
            })}
            isSection={false}
          />
        </div>

        <FeatureCard
          imageURL="/for-students/cards/ftc-crowd.avif"
          imageAltText={intl.formatMessage({
            id: "student.cardText3.imageAlt",
          })}
          title={intl.formatMessage({ id: "student.cardText3.title" })}
          description={intl.formatMessage({ id: "student.cardText3.subtitle" })}
          body={intl.formatMessage({ id: "student.cardText3.body" })}
          imagePosition="right"
        />

        <Testimonials />

        <section id="contact" className="pt-20 bg-primary text-white">
          <div className="flex flex-col items-center">
            <div className="container mx-auto px-4 max-w-6xl">
              {/* Section Title */}
              <h2 className="font-bold mb-12 text-white text-center">
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
    </div>
  );
};

export default ForStudents;
