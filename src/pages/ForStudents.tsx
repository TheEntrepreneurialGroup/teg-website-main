import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Briefcase,
  TrendingUp,
  Mail,
  Linkedin,
  CheckCircle, // Added for list items
} from "lucide-react"; // Added CheckCircle
import { useIntl } from "react-intl";
import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CallToAction from "../components/CallToAction";

const ForStudents: React.FC = () => {
  const intl = useIntl();

  const contactPerson = {
    name: intl.formatMessage({ id: "student.contact.directorName" }),
    title: intl.formatMessage({ id: "student.contact.directorTitle" }),
    imageUrl: "/felix.png",
    email: "info@teg-ev.de",
    linkedinUrl: "https://www.linkedin.com/in/felix-enke/",
  };

  const studentBenefits = [
    intl.formatMessage({ id: "student.benefits.list.1" }),
    intl.formatMessage({ id: "student.benefits.list.2" }),
    intl.formatMessage({ id: "student.benefits.list.3" }),
    intl.formatMessage({ id: "student.benefits.list.4" }),
    intl.formatMessage({ id: "student.benefits.list.5" }),
    intl.formatMessage({ id: "student.benefits.list.6" }),
  ];

  const studentRequirements = [
    intl.formatMessage({ id: "student.requirements.list.1" }),
    intl.formatMessage({ id: "student.requirements.list.2" }),
    intl.formatMessage({ id: "student.requirements.list.3" }),
    intl.formatMessage({ id: "student.requirements.list.4" }),
    intl.formatMessage({ id: "student.requirements.list.5" }),
    intl.formatMessage({ id: "student.requirements.list.6" }),
  ];

  return (
    <div>
      {/* --- Hero Section --- */}
      <HeroSection
        title={intl.formatMessage({ id: "student.hero.title" })}
        subtitle={intl.formatMessage({ id: "student.hero.subtitle" })}
        buttonText={intl.formatMessage({ id: "student.hero.buttonText" })}
        buttonLink={intl.formatMessage({ id: "student.hero.buttonLink" })}
        backgroundImage="/invite.png"
      />

      {/* --- Intro Section (Warning/Disclaimer) --- */}
      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title={intl.formatMessage({ id: "student.intro.title" })}
            subtitle={intl.formatMessage({ id: "student.intro.subtitle" })}
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature cards remain the same */}
            <FeatureCard
              title={intl.formatMessage({
                id: "student.features.meritBased.title",
              })}
              description={intl.formatMessage({
                id: "student.features.meritBased.description",
              })}
              icon={<TrendingUp size={40} />}
              delay={0.1}
            />
            <FeatureCard
              title={intl.formatMessage({
                id: "student.features.corporateImmersion.title",
              })}
              description={intl.formatMessage({
                id: "student.features.corporateImmersion.description",
              })}
              icon={<Briefcase size={40} />}
              delay={0.2}
            />
            <FeatureCard
              title={intl.formatMessage({
                id: "student.features.leadershipDevelopment.title",
              })}
              description={intl.formatMessage({
                id: "student.features.leadershipDevelopment.description",
              })}
              icon={<Trophy size={40} />}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      <section id="expectations" className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-0">
            {/* --- Benefits Column --- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6 bg-secondary-light rounded-lg" // Added card styling
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {intl.formatMessage({ id: "student.benefits.title" })}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {studentBenefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }} // Staggered delay
                  >
                    <CheckCircle
                      className="text-accent mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* --- Requirements Column --- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }} // Slightly later delay
              className="card p-6 bg-secondary-light rounded-lg" // Added card styling
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {intl.formatMessage({ id: "student.requirements.title" })}
              </h3>
              <ul className="space-y-3 text-gray-700">
                {studentRequirements.map((req, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 10 }} // Animate from right
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }} // Staggered delay
                  >
                    <CheckCircle
                      className="text-primary mr-2 mt-1 flex-shrink-0"
                      size={18}
                    />{" "}
                    {/* Different icon color? */}
                    <span>{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ====== End NEW Section ====== */}

      <section id="apply" className="py-16 md:py-20 bg-secondary-light">
        {" "}
        {/* Added ID for linking */}
        <div className="ontainer-custom flex flex-col items-center justify-center text-center">
          {" "}
          {/* Centering container */}
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
            variant="light"
          />
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {intl.formatMessage({ id: "student.contact.title" })}
          </h2>

          {/* Card Container - Centered */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
              {/* Top Section with Name */}
              <div className="flex items-center p-6 gap-4">
                {/* Circular Image */}
                <div className="w-80 h-80 overflow-hidden rounded-full border-2 border-gray-200 mb-4">
                  <img
                    src={contactPerson.imageUrl}
                    alt={contactPerson.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and Address */}
                <div className="flex-1">
                  <h2 className="text-gray-700 text-xl md:text-2xl font-medium">
                    {contactPerson.title}
                  </h2>
                  <h4 className="text-gray-700 text-xl md:text-2xl font-medium">
                    {contactPerson.name}
                  </h4>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-t border-gray-200"></div>

              {/* Contact Information */}
              <div className="grid grid-cols-2 divide-x divide-gray-200">
                <div className="p-4 flex items-center gap-2 text-gray-700">
                  <a
                    href={contactPerson.linkedinUrl}
                    className="flex items-center gap-2 text-primary hover:text-primary-dark"
                  >
                    <Linkedin size={20} />
                    <span>
                      {intl.formatMessage({ id: "student.contact.linkedin" })}
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
                      {intl.formatMessage({ id: "student.contact.email" })}
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

export default ForStudents;
