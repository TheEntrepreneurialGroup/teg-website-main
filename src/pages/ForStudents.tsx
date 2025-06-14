import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  ArrowDown,
} from "lucide-react"; 
import { useIntl } from "react-intl";
import HeroSection from "../components/HeroSection";
import CallToAction from "../components/CallToAction";
import ContactCard from "../components/ContactCard";

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
        <section className="py-16 md:py-20 bg-white"> 
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center"> 

            
            <p className="text-xl md:text-2xl font-semibold text-primary mb-6"> 
              {intl.formatMessage({ id: "student.intro.title" })}
            </p>

            {/* Subsequent lines - standard text styling */}
            <p className="text-base md:text-lg text-gray-700 mb-4"> 
              {intl.formatMessage({ id: "student.intro.line.1" })}
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-4"> 
              {intl.formatMessage({ id: "student.intro.line.2" })}
            </p>
            <p className="text-base md:text-lg text-gray-700"> 
              {intl.formatMessage({ id: "student.intro.line.3" })}
            </p>

          </div>
        </div>
      </section>

        {/* --- HOW IT WORKS SECTION --- */}
      <section className="py-16 md:py-24 bg-gray-50"> 
        <div className="container-custom max-w-5xl mx-auto px-4"> 

          {/* Main Title */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-primary mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
          >
            {intl.formatMessage({ id: "student.howItWorks.mainTitle" })}
          </motion.h2>

          {/* --- Step 1 --- */}
          <motion.div
            className="mb-12 text-center md:text-left" // Center text on small, left on medium+
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariant}
            custom={0.1} // Stagger delay
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              {intl.formatMessage({ id: "student.howItWorks.step1.title" })}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-3 max-w-3xl mx-auto md:mx-0"> {/* Limit width */}
              {intl.formatMessage({ id: "student.howItWorks.step1.desc1" })}
            </p>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto md:mx-0"> {/* Limit width */}
              {intl.formatMessage({ id: "student.howItWorks.step1.desc2" })}
            </p>
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
            className="mb-12 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger slightly earlier
            variants={sectionVariant}
            custom={0.2}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              {intl.formatMessage({ id: "student.howItWorks.step2.title" })}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto md:mx-0">
              {intl.formatMessage({ id: "student.howItWorks.step2.desc1" })}
            </p>
            {/* Nested Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-8">
              {/* Box 1 */}
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.3}>
                <p className="text-gray-700 text-base leading-relaxed">
                  {intl.formatMessage({ id: "student.howItWorks.step2.box1" })}
                </p>
              </motion.div>
              {/* Box 2 */}
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.4}>
                <p className="text-gray-700 text-base leading-relaxed">
                  {intl.formatMessage({ id: "student.howItWorks.step2.box2" })}
                </p>
              </motion.div>
              {/* Box 3 */}
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.5}>
                <p className="text-gray-700 text-base leading-relaxed">
                  {intl.formatMessage({ id: "student.howItWorks.step2.box3" })}
                </p>
              </motion.div>
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto md:mx-0">
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
          <motion.div
            className="mb-12 text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Trigger even earlier if long
            variants={sectionVariant}
            custom={0.2}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
              {intl.formatMessage({ id: "student.howItWorks.step3.title" })}
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-3 max-w-3xl mx-auto md:mx-0">
              {intl.formatMessage({ id: "student.howItWorks.step3.desc1" })}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-3 max-w-3xl mx-auto md:mx-0">
              {intl.formatMessage({ id: "student.howItWorks.step3.desc2" })}
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-10 max-w-3xl mx-auto md:mx-0">
              {intl.formatMessage({ id: "student.howItWorks.step3.desc3" })}
            </p>

            {/* Sub-Section 1 */}
            
            <h4 className="text-lg font-medium text-gray-700 mb-5 mt-6 md:mt-0"> {/* No top margin on md+ */}
              {intl.formatMessage({ id: "student.howItWorks.step3.sub1.title" })}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-10">
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.3}>
                <h5 className="font-semibold text-gray-800 mb-2">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box1.title" })}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box1.desc" })}</p>
              </motion.div>
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.4}>
                 <h5 className="font-semibold text-gray-800 mb-2">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box2.title" })}</h5>
                 <p className="text-gray-600 text-sm leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box2.desc" })}</p>
              </motion.div>
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.5}>
                 <h5 className="font-semibold text-gray-800 mb-2">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box3.title" })}</h5>
                 <p className="text-gray-600 text-sm leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step3.sub1.box3.desc" })}</p>
              </motion.div>
            </div>

            {/* Sub-Section 2 */}
             <h4 className="text-lg font-medium text-gray-700 mb-5">
               {intl.formatMessage({ id: "student.howItWorks.step3.sub2.title" })}
             </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-10">
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.3}>
                <h5 className="font-semibold text-gray-800 mb-2">{intl.formatMessage({ id: "student.howItWorks.step3.sub2.box1.title" })}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step3.sub2.box1.desc" })}</p>
              </motion.div>
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.4}>
                <h5 className="font-semibold text-gray-800 mb-2">{intl.formatMessage({ id: "student.howItWorks.step3.sub2.box2.title" })}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step3.sub2.box2.desc" })}</p>
              </motion.div>
            </div>

            {/* Sub-Section 3 */}
             <h4 className="text-lg font-medium text-gray-700 mb-5">
               {intl.formatMessage({ id: "student.howItWorks.step3.sub3.title" })}
             </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.3}>
                <h5 className="font-semibold text-gray-800 mb-2">{intl.formatMessage({ id: "student.howItWorks.step3.sub3.box1.title" })}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step3.sub3.box1.desc" })}</p>
              </motion.div>
              <motion.div className="bg-white p-5 rounded-lg shadow-md" variants={boxVariant} custom={0.4}>
                <h5 className="font-semibold text-gray-800 mb-2">{intl.formatMessage({ id: "student.howItWorks.step3.sub3.box2.title" })}</h5>
                <p className="text-gray-600 text-sm leading-relaxed">{intl.formatMessage({ id: "student.howItWorks.step3.sub3.box2.desc" })}</p>
              </motion.div>
            </div>
          </motion.div>

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
            <ContactCard
              name={contactPerson.name}
              title={contactPerson.title}
              imageUrl={contactPerson.imageUrl}
              email={contactPerson.email}
              linkedinUrl={contactPerson.linkedinUrl}
              variant="default"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForStudents;
