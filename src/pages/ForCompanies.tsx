import React from "react";
import { motion } from "framer-motion";
import { UserSearch, Hammer, ListChecks } from "lucide-react";
import { useIntl } from "react-intl";

import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CallToAction from "../components/CallToAction";
import ContactCard from "../components/ContactCard";

const ForCompanies: React.FC = () => {
  const intl = useIntl();

  const contactPerson = {
    name: intl.formatMessage({ id: "company.contact.directorName" }),
    title: intl.formatMessage({ id: "company.contact.directorTitle" }),
    imageUrl: "/jonathan.jpg",
    email: "info@teg-ev.de",
    linkedinUrl: "https://www.linkedin.com/in/jonathan-babelotzky/",
  };

  return (
    <div>
      <HeroSection
        title={intl.formatMessage({ id: "company.hero.title" })}
        subtitle={intl.formatMessage({ id: "company.hero.subtitle" })}
        buttonText={intl.formatMessage({ id: "company.hero.buttonText" })}
        buttonLink="#partnerships"
        backgroundImage="/get_forward2.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title={intl.formatMessage({
              id: "company.sectionTitle.partnerships.title",
            })}
            subtitle={intl.formatMessage({
              id: "company.sectionTitle.partnerships.subtitle",
            })}
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              title={intl.formatMessage({
                id: "company.features.rightCharacteristics.title",
              })}
              description={intl.formatMessage({
                id: "company.features.rightCharacteristics.description",
              })}
              icon={<UserSearch size={40} />}
              delay={0.1}
            />
            <FeatureCard
              title={intl.formatMessage({
                id: "company.features.preparation.title",
              })}
              description={intl.formatMessage({
                id: "company.features.preparation.description",
              })}
              icon={<Hammer size={40} />}
              delay={0.2}
            />
            <FeatureCard
              title={intl.formatMessage({
                id: "company.features.identification.title",
              })}
              description={intl.formatMessage({
                id: "company.features.identification.description",
              })}
              icon={<ListChecks size={40} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <CallToAction
        title={intl.formatMessage({ id: "company.callToAction.title" })}
        description={intl.formatMessage({
          id: "company.callToAction.description",
        })}
        buttonText={intl.formatMessage({
          id: "company.callToAction.buttonText",
        })}
        buttonLink={`mailto:${contactPerson.email}`}
        variant="light"
      />

      <section id="partnerships" className="py-20 bg-secondary-light">
        <div className="container-custom">
          <SectionTitle
            title={intl.formatMessage({
              id: "company.sectionTitle.opportunities.title",
            })}
            subtitle={intl.formatMessage({
              id: "company.sectionTitle.opportunities.subtitle",
            })}
          />

          <div className="space-y-6 mb-8 w-full max-w-4xl text-left">
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold text-xl text-primary mb-2">
                {intl.formatMessage({ id: "company.cards.studentRun.title" })}
              </h4>
              <p className="text-gray-600 mb-4">
                {intl.formatMessage({
                  id: "company.cards.studentRun.description",
                })}
              </p>
            </motion.div>
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold text-xl text-primary mb-2">
                {intl.formatMessage({
                  id: "company.cards.futureLeaders.title",
                })}
              </h4>
              <p className="text-gray-600 mb-4">
                {intl.formatMessage({
                  id: "company.cards.futureLeaders.description",
                })}
              </p>
            </motion.div>
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="font-semibold text-xl text-primary mb-2">
                {intl.formatMessage({ id: "company.cards.internships.title" })}
              </h4>
              <p className="text-gray-600 mb-4">
                {intl.formatMessage({
                  id: "company.cards.internships.description",
                })}
              </p>
            </motion.div>
            <motion.div
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-semibold text-xl text-primary mb-2">
                {intl.formatMessage({ id: "company.cards.hireLeaders.title" })}
              </h4>
              <p className="text-gray-600 mb-4">
                {intl.formatMessage({
                  id: "company.cards.hireLeaders.description",
                })}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            {intl.formatMessage({ id: "company.contact.title" })}
          </h2>

          {/* Card Container - Centered */}
          <div className="flex justify-center">
            <ContactCard
              name={contactPerson.name}
              title={contactPerson.title}
              imageUrl={contactPerson.imageUrl}
              email={contactPerson.email}
              linkedinUrl={contactPerson.linkedinUrl}
              greeting={intl.formatMessage({ id: "company.contact.greeting" })}
              variant="quote"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
