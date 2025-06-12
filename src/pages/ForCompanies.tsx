import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  UserSearch,
  Hammer,
  ListChecks,
  Quote,
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
<<<<<<< HEAD
        backgroundImage="/get_forward.jpg"
=======
        backgroundImage="/get_forward2.jpg"
>>>>>>> d4a591e6dfa9c2797f3970f81a403b6b2dbc2714
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
          <div className="flex ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
              <div className="flex flex-col md:flex-row items-center p-6 gap-4">
                {/* Rectangular Image */}
                <div className="w-full md:w-64 h-84 overflow-hidden border-2 border-gray-200 rounded-lg flex-shrink-0">
                  <img
                    src={contactPerson.imageUrl}
                    alt={contactPerson.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Greeting, Name and Title vertically stacked */}
                <div className="flex-1 mt-4 md:mt-0 md:text-left">
                  <div className="text-gray-700">
                    <Quote size={20} className="block mb-2" />
                    <h2 className="text-3xl md:text-4xl font-bold">
                      {intl.formatMessage({
                        id: "company.contact.greeting",
                        defaultMessage: "greeting",
                      })}
                    </h2>
                    <div className="flex justify-end mt-2">
                      <Quote size={20} />
                    </div>
                  </div>
                  <p className="text-gray-700 text-xl md:text-2xl font-medium mt-4">
                    {contactPerson.name}
                  </p>
                  <p className="text-gray-700 text-xl md:text-2xl font-medium">
                    {contactPerson.title}
                  </p>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-gray-200"></div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-x divide-gray-200">
                <div className="p-4 flex items-center gap-2 text-gray-700 justify-center">
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
                <div className="p-4 flex items-center gap-2 text-gray-700 justify-center">
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
