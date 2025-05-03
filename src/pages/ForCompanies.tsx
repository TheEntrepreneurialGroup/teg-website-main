import React from "react";
import { motion } from "framer-motion";
import {
  Building,
  Mail,
  Linkedin,
  GraduationCap,
  UserPlus,
} from "lucide-react";
import { useIntl } from "react-intl";

import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CallToAction from "../components/CallToAction";

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
        backgroundImage="/get_forward.jpg"
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
              icon={<UserPlus size={40} />}
              delay={0.1}
            />
            <FeatureCard
              title={intl.formatMessage({
                id: "company.features.preparation.title",
              })}
              description={intl.formatMessage({
                id: "company.features.preparation.description",
              })}
              icon={<Building size={40} />}
              delay={0.2}
            />
            <FeatureCard
              title={intl.formatMessage({
                id: "company.features.identification.title",
              })}
              description={intl.formatMessage({
                id: "company.features.identification.description",
              })}
              icon={<GraduationCap size={40} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <section id="partnerships" className="py-20 bg-secondary-light">
        <div className="container-custom flex flex-col items-center justify-center text-center">
          <CallToAction
            title={intl.formatMessage({ id: "company.callToAction.title" })}
            description={intl.formatMessage({
              id: "company.callToAction.description",
            })}
            buttonText={intl.formatMessage({
              id: "company.callToAction.buttonText",
            })}
            buttonLink="mailto:partnerships@teg-group.com"
            variant="light"
          />

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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {intl.formatMessage({ id: "company.contact.title" })}
          </h2>

          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
              <div className="flex items-center p-6 gap-4">
                <div className="w-80 h-80 overflow-hidden rounded-full border-2 border-gray-200 mb-4">
                  <img
                    src={contactPerson.imageUrl}
                    alt={contactPerson.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-700 text-xl md:text-2xl font-medium">
                    {contactPerson.title}
                  </h2>
                  <h4 className="text-gray-700 text-xl md:text-2xl font-medium">
                    {contactPerson.name}
                  </h4>
                </div>
              </div>
              <div className="border-t border-gray-200"></div>
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-4 flex items-center gap-2 text-gray-700">
                  <a
                    href={contactPerson.linkedinUrl}
                    className="flex items-center gap-2 text-primary hover:text-primary-dark"
                  >
                    <Linkedin size={20} />
                    <span>
                      {intl.formatMessage({ id: "company.contact.linkedin" })}
                    </span>
                  </a>
                </div>
                <div className="p-4 flex items-center gap-2 text-gray-700">
                  <a
                    href={`mailto:${contactPerson.email}`}
                    className="flex items-center gap-2 text-primary hover:text-primary-dark"
                  >
                    <Mail size={20} />
                    <span>
                      {intl.formatMessage({ id: "company.contact.email" })}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
