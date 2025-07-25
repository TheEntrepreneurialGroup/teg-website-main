import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  ArrowDown,
  Target,
  Info,
  ListChecks,
} from "lucide-react"; 
import { useIntl } from "react-intl";
import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";
import HowItWorksSubsection from "../components/HowItWorksSubsection";

const ForStudents: React.FC = () => {
  const intl = useIntl();

  const contactPerson = {
    name: intl.formatMessage({ id: "student.contact.directorName" }),
    title: intl.formatMessage({ id: "student.contact.directorTitle" }),
    imageUrl: "/felix.jpg",
    email: "info@teg-ev.de",
    linkedinUrl: "https://www.linkedin.com/in/felix-enke/",
  };


  const sectionVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }
    })
  };

  const boxVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (delay = 0) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay }
    })
  };

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
        {/* --- Intro Section --- */}
        <section className="py-16 md:py-20 bg-primary">
          <div className="container-custom flex justify-center">
            <div className="w-full max-w-5xl p-12 md:p-16 flex flex-col gap-10">
              {/* Title Row with Icon */}
              <div className="flex items-center gap-6 mb-6">
                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-white/10 rounded-lg">
                  <Info size={40} className="text-white mx-auto my-auto" />
                </div>
                <p className="text-3xl md:text-5xl font-bold text-white text-left leading-tight">
                  {intl.formatMessage({ id: "student.intro.title" })}
                </p>
              </div>
              {/* List of sub-points */}
              <ul className="space-y-7">
                <li className="flex items-start gap-4">
                  <span className="mt-1"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.15"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <span className="text-2xl md:text-3xl text-white leading-relaxed font-medium">{intl.formatMessage({ id: "student.intro.line.1" })}</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.15"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <span className="text-2xl md:text-3xl text-white leading-relaxed font-medium">{intl.formatMessage({ id: "student.intro.line.2" })}</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1"><svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.15"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                  <span className="text-2xl md:text-3xl text-white leading-relaxed font-medium">{intl.formatMessage({ id: "student.intro.line.3" })}</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-16 md:py-24 bg-gray-50"> 
        <div className="container-custom max-w-7xl mx-auto px-4"> 

          {/* Main Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-left text-primary mb-16 ml-0 md:ml-8 lg:ml-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
          >
            {intl.formatMessage({ id: "student.howItWorks.mainTitle" })}
          </motion.h2>

          {/* --- Step 1 --- */}
          <motion.div
            className="mb-12 flex flex-col md:flex-row items-start bg-white/80 border border-gray-200 rounded-xl shadow-sm p-8 md:p-12 gap-8 md:gap-14 max-w-5xl ml-0 md:ml-8 lg:ml-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            custom={0.1}
          >
            {/* Icon */}
            <div className="flex-shrink-0 flex items-start justify-center w-16 h-16 bg-primary/10 rounded-lg">
              <Target size={36} className="text-primary mx-auto my-auto" />
            </div>
            {/* Text Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-2xl md:text-3xl font-semibold mb-5 text-gray-800 flex items-center">
                {intl.formatMessage({ id: "student.howItWorks.step1.title" })}
              </h3>
              <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed">
                {intl.formatMessage({ id: "student.howItWorks.step1.desc1" })}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                {intl.formatMessage({ id: "student.howItWorks.step1.desc2" })}
              </p>
            </div>
          </motion.div>

          {/* Arrow Separator */}
          <motion.div
             className="flex justify-center my-8 text-gray-400"
             initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.3}}
          >
            <ArrowDown size={28} strokeWidth={1.5} />
          </motion.div>

          {/* --- Step 2 --- */}
          <motion.div
            className="mb-12 bg-white/80 border border-gray-200 rounded-xl shadow-sm p-8 md:p-12 max-w-5xl ml-0 md:ml-8 lg:ml-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            custom={0.2}
          >
            {/* Title Row with Icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                <ListChecks size={32} className="text-primary mx-auto my-auto" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-left">
                {intl.formatMessage({ id: "student.howItWorks.step2.title" })}
              </h3>
            </div>
            {/* Description above list */}
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed text-left">
              {intl.formatMessage({ id: "student.howItWorks.step2.desc1" })}
            </p>
            {/* List of box points */}
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-accent"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3B82F6" fillOpacity="0.15"/><path d="M7 13l3 3 7-7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step2.box1" })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-accent"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3B82F6" fillOpacity="0.15"/><path d="M7 13l3 3 7-7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step2.box2" })}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-accent"><svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#3B82F6" fillOpacity="0.15"/><path d="M7 13l3 3 7-7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                <span className="text-lg md:text-xl text-gray-700 leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step2.box3" })}</span>
              </li>
            </ul>
            {/* Description below list */}
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
              {intl.formatMessage({ id: "student.howItWorks.step2.desc2" })}
            </p>
          </motion.div>

          {/* Arrow Separator */}
          <motion.div
             className="flex justify-center my-8 text-gray-400"
             initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.3}}
          >
            <ArrowDown size={28} strokeWidth={1.5} />
          </motion.div>

          {/* --- Step 3 --- */}
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 py-10 md:py-16 mb-4">
            {/* Text Section */}
            <div className="flex-1 min-w-0 flex flex-col justify-center md:justify-start">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
                {intl.formatMessage({ id: "student.howItWorks.step3.title" })}
              </h3>
              <div className="text-lg md:text-xl text-gray-700 leading-relaxed text-left space-y-4">
                <p>{intl.formatMessage({ id: "student.howItWorks.step3.desc1" })}</p>
                <p>{intl.formatMessage({ id: "student.howItWorks.step3.desc2" })}</p>
                <p>{intl.formatMessage({ id: "student.howItWorks.step3.desc3" })}</p>
              </div>
            </div>
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center">
                <img src="/welcome-to-teg.jpeg" alt="Office" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>

          {/* Sub-Section 1 */}
          <HowItWorksSubsection
            title={intl.formatMessage({ id: "student.howItWorks.step3.sub1.title" })}
            description={
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box1.title" })}:</span> {intl.formatMessage({ id: "student.howItWorks.step3.sub1.box1.desc" })}
                </li>
                <li>
                  <span className="font-semibold">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box2.title" })}:</span> {intl.formatMessage({ id: "student.howItWorks.step3.sub1.box2.desc" })}
                </li>
                <li>
                  <span className="font-semibold">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box3.title" })}:</span> {intl.formatMessage({ id: "student.howItWorks.step3.sub1.box3.desc" })}
                </li>
              </ul>
            }
            image={"/crowd.jpeg"}
            imageOnLeft={true}
          />

          {/* Sub-Section 2 */}
          <HowItWorksSubsection
            title={intl.formatMessage({ id: "student.howItWorks.step3.sub2.title" })}
            description={
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold">{intl.formatMessage({ id: "student.howItWorks.step3.sub2.box1.title" })}:</span> {intl.formatMessage({ id: "student.howItWorks.step3.sub2.box1.desc" })}
                </li>
                <li>
                  <span className="font-semibold">{intl.formatMessage({ id: "student.howItWorks.step3.sub2.box2.title" })}:</span> {intl.formatMessage({ id: "student.howItWorks.step3.sub2.box2.desc" })}
                </li>
              </ul>
            }
            image={"/teg-talk.JPG"}
            imageOnLeft={false}
          />

          {/* Sub-Section 3 */}
          <HowItWorksSubsection
            title={intl.formatMessage({ id: "student.howItWorks.step3.sub3.title" })}
            description={
              <ul className="space-y-3">
                <li>
                  <span className="font-semibold">{intl.formatMessage({ id: "student.howItWorks.step3.sub3.box1.title" })}:</span> {intl.formatMessage({ id: "student.howItWorks.step3.sub3.box1.desc" })}
                </li>
                <li>
                  <span className="font-semibold">{intl.formatMessage({ id: "student.howItWorks.step3.sub3.box2.title" })}:</span> {intl.formatMessage({ id: "student.howItWorks.step3.sub3.box2.desc" })}
                </li>
              </ul>
            }
            image={"/mentoring.jpeg"}
            imageOnLeft={true}
          />

          {/* Arrow Separator */}
          <motion.div
             className="flex justify-center my-8 text-gray-400"
             initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.3}}
          >
             <ArrowDown size={28} strokeWidth={1.5} />
          </motion.div>

          {/* --- Step 4 --- */}
          <motion.div
            className="mb-12 bg-white/80 border border-gray-200 rounded-xl shadow-sm p-8 md:p-12 max-w-5xl ml-0 md:ml-8 lg:ml-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariant}
            custom={0.2}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 text-left mb-6">
              {intl.formatMessage({ id: "student.howItWorks.step4.title" })}
            </h3>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
                {intl.formatMessage({ id: "student.howItWorks.step4.desc1" })}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
                {intl.formatMessage({ id: "student.howItWorks.step4.desc2" })}
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left">
                {intl.formatMessage({ id: "student.howItWorks.step4.desc3" })}
              </p>
            </div>
          </motion.div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-left ml-0 md:ml-8 lg:ml-12 italic mt-4">
            {intl.formatMessage({ id: "student.howItWorks.lastline" })}
          </p>

          {/* Arrow Separator */}
          <motion.div
             className="flex justify-center my-8 text-gray-400"
             initial={{opacity: 0}} whileInView={{opacity: 1}} viewport={{ once: true }} transition={{delay: 0.3}}
          >
          <ArrowDown size={28} strokeWidth={1.5} />
          </motion.div>

          <motion.div
            className="flex justify-center mb-16 md:mb-20"
             initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariant}
            custom={0.3}
          >
            <a 
              href={intl.formatMessage({ id: "student.hero.buttonLink" })} 
              className="inline-block bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-md shadow-md transition duration-200"
            >
              {intl.formatMessage({ id: "student.applySection.applyButton" })}
            </a>
          </motion.div>


        </div>
      </section>
      {/* --- END HOW IT WORKS SECTION --- */}


       {/* --- APPLICATION INFO  --- */}
       <section className="py-16 md:py-24 bg-white"> {/* White background */}
        <div className="container-custom max-w-5xl mx-auto px-4">

          {/* Benefits vs Requirements Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24">
            {/* Left Box: Benefits */}
            <motion.div
              className="bg-white/80 border border-gray-200 rounded-xl shadow-sm p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={boxVariant}
              custom={0.2}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                  <Target size={32} className="text-primary mx-auto my-auto" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {intl.formatMessage({ id: "student.applySection.benefits.title" })}
                </h3>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-accent">
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="12" fill="#3B82F6" fillOpacity="0.15"/>
                        <path d="M7 13l3 3 7-7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {intl.formatMessage({ id: `student.applySection.benefits.list.${i}` })}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Box: Requirements */}
            <motion.div
              className="bg-white/80 border border-gray-200 rounded-xl shadow-sm p-8 md:p-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={boxVariant}
              custom={0.3}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg">
                  <ListChecks size={32} className="text-primary mx-auto my-auto" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
                  {intl.formatMessage({ id: "student.applySection.requirements.title" })}
                </h3>
              </div>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-accent">
                      <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="12" fill="#3B82F6" fillOpacity="0.15"/>
                        <path d="M7 13l3 3 7-7" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-lg md:text-xl text-gray-700 leading-relaxed">
                      {intl.formatMessage({ id: `student.applySection.requirements.list.${i}` })}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-lg md:text-xl text-gray-700 italic mt-6">
                {intl.formatMessage({ id: "student.applySection.requirements.extraLine" })}
              </p>
            </motion.div>
          </div>
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
        </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {intl.formatMessage({ id: "student.contact.title" })}
          </h2>

          {/* Card Container - Centered */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">
              {/* Top Section with Name */}
              <div className="flex items-center p-6 gap-4">
                {/* Rectangular Image */}
                <div className="w-32 h-42 overflow-hidden border-2 border-gray-200 rounded-lg flex-shrink-0">
                  <img
                    src={contactPerson.imageUrl}
                    alt={contactPerson.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and Address */}
                <div className="flex-1 min-w-0">
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