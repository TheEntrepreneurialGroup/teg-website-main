import React from "react";
import { useIntl } from "react-intl";
import { CheckCircle2 } from "lucide-react";

import HeroTwoButtons from "@/components/HeroTwoButtons";
import { SectionTitle } from "@/components/blocks/SectionTitle";
import { TextBoxVorteile } from "@/components/blocks/TextBoxVorteile";
import { PrimaryButton } from "@/components/blocks/PrimaryButton";
import { TestimonialCard } from "@/components/blocks/TestimonialCard";
import TEGInZahlen from "@/components/sections/TEGInZahlen";

const About: React.FC = () => {
  const intl = useIntl();
  const t = (id: string) => intl.formatMessage({ id });

  const differentiatorCards = [
    {
      title: t("about.differentiator.card1.title"),
      desc: t("about.differentiator.card1.desc"),
      benefit: t("about.differentiator.card1.benefit"),
    },
    {
      title: t("about.differentiator.card2.title"),
      desc: t("about.differentiator.card2.desc"),
      benefit: t("about.differentiator.card2.benefit"),
    },
    {
      title: t("about.differentiator.card3.title"),
      desc: t("about.differentiator.card3.desc"),
      benefit: t("about.differentiator.card3.benefit"),
    },
    {
      title: t("about.differentiator.card4.title"),
      desc: t("about.differentiator.card4.desc"),
      benefit: t("about.differentiator.card4.benefit"),
    },
  ];

  const howWeWorkModules = [
    {
      title: t("about.howWeWork.module1.title"),
      desc: t("about.howWeWork.module1.desc"),
    },
    {
      title: t("about.howWeWork.module2.title"),
      desc: t("about.howWeWork.module2.desc"),
    },
    {
      title: t("about.howWeWork.module3.title"),
      desc: t("about.howWeWork.module3.desc"),
    },
    {
      title: t("about.howWeWork.module4.title"),
      desc: t("about.howWeWork.module4.desc"),
    },
  ];

  const inActionScenes = [
    {
      title: t("about.inAction.scene1.title"),
      desc: t("about.inAction.scene1.desc"),
      image: "/for-students/cards/ftc-crowd.avif",
    },
    {
      title: t("about.inAction.scene2.title"),
      desc: t("about.inAction.scene2.desc"),
      image: "/home/tegtalk-WS26.avif",
    },
    {
      title: t("about.inAction.scene3.title"),
      desc: t("about.inAction.scene3.desc"),
      image: "/for-students/events/workshop.avif",
    },
  ];

  const testimonials = [
    {
      quote: t("company.testimonials.quote4.text"),
      person: {
        name: t("company.testimonials.quote4.author"),
        roleLine1: t("company.testimonials.quote4.role1"),
        roleLine2: t("company.testimonials.quote4.role2"),
      },
      avatar: "/for-companies/testimonials/roland-berger.avif",
    },
    {
      quote: t("company.testimonials.quote1.text"),
      person: {
        name: t("company.testimonials.quote1.author"),
        roleLine1: t("company.testimonials.quote1.role1"),
        roleLine2: t("company.testimonials.quote1.role2"),
      },
      avatar: "/for-companies/testimonials/bernd-wiedemann.avif",
    },
    {
      quote: t("student.testimonials.quote2"),
      person: {
        name: t("student.testimonials.author2"),
        roleLine1: "TEG-Alumni",
        roleLine2: "",
      },
      avatar: "/for-students/testimonials/luis.avif",
    },
  ];

  const historyPhases = [
    {
      title: t("about.history.phase1.title"),
      desc: t("about.history.phase1.desc"),
    },
    {
      title: t("about.history.phase2.title"),
      desc: t("about.history.phase2.desc"),
    },
    {
      title: t("about.history.phase3.title"),
      desc: t("about.history.phase3.desc"),
    },
  ];

  const reachProofs = [
    {
      title: t("about.reach.proof1.title"),
      desc: t("about.reach.proof1.desc"),
    },
    {
      title: t("about.reach.proof2.title"),
      desc: t("about.reach.proof2.desc"),
    },
    {
      title: t("about.reach.proof3.title"),
      desc: t("about.reach.proof3.desc"),
    },
  ];

  const alumniCategories = [
    t("about.alumni.category1"),
    t("about.alumni.category2"),
    t("about.alumni.category3"),
    t("about.alumni.category4"),
    t("about.alumni.category5"),
  ];

  const studentPoints = [
    t("about.dualBenefit.students.point1"),
    t("about.dualBenefit.students.point2"),
    t("about.dualBenefit.students.point3"),
    t("about.dualBenefit.students.point4"),
  ];

  const companyPoints = [
    t("about.dualBenefit.companies.point1"),
    t("about.dualBenefit.companies.point2"),
    t("about.dualBenefit.companies.point3"),
    t("about.dualBenefit.companies.point4"),
  ];

  return (
    <div>
      {/* 1. Hero */}
      <HeroTwoButtons
        title={t("about.hero.title")}
        mobileTitle={t("about.hero.mobileTitle")}
        subtitle={t("about.hero.subtitle")}
        bgImage="/home/kuratorium.avif"
        buttonText1={t("about.hero.buttonText1")}
        buttonLink1="/for-students"
        buttonText2={t("about.hero.buttonText2")}
        buttonLink2="/for-companies"
        gradientClassName="bg-gradient-to-b from-transparent from-40% via-primary/85 via-78% to-primary to-95%"
        imageClassName="object-center"
        className="lg:h-[80vh]"
      />

      {/* 2. Numbers strip */}
      <TEGInZahlen
        className="section bg-secondary-light"
        title={t("about.numbers.title")}
        number1="300+"
        text1={t("home.alumni.alumni.label")}
        number2="41"
        text2={t("home.alumni.stat2.label")}
        number3="40"
        text3={t("home.alumni.stat3.label")}
        number4="15"
        text4={t("home.alumni.stat4.label")}
      />

      {/* 3. Differentiator – 4 concrete proof cards */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle text={t("about.differentiator.title")} />
          <p className="text-xl text-foreground max-w-prose mb-10 md:mb-12">
            {t("about.differentiator.intro")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiatorCards.map((card) => (
              <TextBoxVorteile
                key={card.title}
                title={card.title}
                desc={card.desc}
                benefit={card.benefit}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. How TEG works – the 4 real operating departments */}
      <section className="section bg-secondary-light">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle text={t("about.howWeWork.title")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {howWeWorkModules.map((mod, idx) => (
              <div
                key={mod.title}
                className="bg-white p-8 border border-border shadow-sm flex gap-5"
              >
                <span className="text-accent text-4xl font-normal leading-none flex-none w-12">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-foreground">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-lg text-foreground max-w-3xl mt-10">
            {t("about.howWeWork.closing")}
          </p>
        </div>
      </section>

      {/* 5. Members in action – real named events with photos */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle text={t("about.inAction.title")} />
          <p className="text-xl text-foreground max-w-prose mb-10 md:mb-12">
            {t("about.inAction.intro")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {inActionScenes.map((scene) => (
              <div
                key={scene.title}
                className="bg-white border border-border shadow-sm overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-secondary-light">
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-primary">
                    {scene.title}
                  </h3>
                  <p className="text-foreground">{scene.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials – real quotes from real people */}
      <section className="section bg-secondary-light overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle text={t("about.testimonials.title")} />
        </div>
        <div className="flex overflow-x-auto gap-6 px-4 md:px-8 pb-4 max-w-[100vw] scrollbar-none">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.person.name}
              quote={item.quote}
              person={item.person}
              avatar={item.avatar}
            />
          ))}
        </div>
      </section>

      {/* 7. History – concrete dates, real founding facts */}
      <section className="section bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 md:mb-12">
            {t("about.history.title")}
          </h2>
          <p className="text-lg text-secondary-light max-w-3xl mb-10 md:mb-12">
            {t("about.history.intro")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {historyPhases.map((phase, idx) => (
              <div
                key={phase.title}
                className="bg-primary-dark/40 border-l-4 border-accent p-6 md:p-8"
              >
                <div className="text-accent text-sm font-medium tracking-widest mb-3">
                  {`PHASE ${idx + 1}`}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-secondary-light">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Alumni with impact – real LinkedIn-verified names */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle text={t("about.reach.title")} />
          <p className="text-xl text-foreground max-w-prose mb-10 md:mb-12">
            {t("about.reach.intro")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reachProofs.map((proof) => (
              <div
                key={proof.title}
                className="bg-primary-light/5 p-8 border-t-4 border-primary"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {proof.title}
                </h3>
                <p className="text-foreground">{proof.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Alumni career paths */}
      <section className="section bg-secondary-light">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle text={t("about.alumni.title")} />
          <p className="text-xl text-foreground max-w-prose mb-10 md:mb-12">
            {t("about.alumni.intro")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {alumniCategories.map((category) => (
              <div
                key={category}
                className="bg-white p-6 border border-border shadow-sm text-center"
              >
                <span className="block text-primary text-lg font-semibold">
                  {category}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-8 max-w-2xl">
            {t("about.alumni.note")}
          </p>
        </div>
      </section>

      {/* 10. Dual benefit – students vs companies */}
      <section className="section">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <SectionTitle text={t("about.dualBenefit.title")} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-primary-light/5 p-8 md:p-10 border border-border flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-primary">
                {t("about.dualBenefit.students.title")}
              </h3>
              <ul className="flex flex-col gap-3">
                {studentPoints.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <CheckCircle2
                      className="w-6 h-6 text-accent flex-none mt-0.5"
                      strokeWidth={1.75}
                    />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
              <div>
                <PrimaryButton
                  label={t("about.dualBenefit.students.cta")}
                  href="/for-students"
                  buttonText="about-dualBenefit-students"
                />
              </div>
            </div>
            <div className="bg-primary text-white p-8 md:p-10 flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-white">
                {t("about.dualBenefit.companies.title")}
              </h3>
              <ul className="flex flex-col gap-3">
                {companyPoints.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <CheckCircle2
                      className="w-6 h-6 text-accent flex-none mt-0.5"
                      strokeWidth={1.75}
                    />
                    <span className="text-secondary-light">{point}</span>
                  </li>
                ))}
              </ul>
              <div>
                <PrimaryButton
                  label={t("about.dualBenefit.companies.cta")}
                  href="/for-companies"
                  buttonText="about-dualBenefit-companies"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final CTA – navy banner */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">
            {t("about.cta.title")}
          </h2>
          <p className="text-xl mb-8 text-secondary-light max-w-3xl">
            {t("about.cta.description")}
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <PrimaryButton
              label={t("about.cta.studentsButton")}
              href="/for-students"
              buttonText="about-cta-students"
            />
            <PrimaryButton
              label={t("about.cta.companiesButton")}
              href="/for-companies"
              buttonText="about-cta-companies"
            />
          </div>
        </div>
      </section>
    </div>
  );
};


export default About;
