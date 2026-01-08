import React from "react";
import { UserSearch, Hammer, ListChecks } from "lucide-react";
import { useIntl } from "react-intl";

import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CallToAction from "../components/CallToAction";
import ContactCard from "../components/ContactCard";
import { useSanityContent, queries } from "../hooks/useSanityContent";
import { getLocalizedValue } from "../lib/sanityClient";
import type { PageData } from "../types/sanity";

const ForCompanies: React.FC = () => {
  const intl = useIntl();
  const locale = intl.locale as "de" | "en";

  // Fetch content from Sanity
  const { data: page } = useSanityContent<PageData>(queries.forCompaniesPage);

  // Helper to get content from CMS or fallback
  const t = (
    localeKey: string,
    cmsValue?: { de?: string; en?: string } | null,
  ) => {
    if (page && cmsValue) {
      return getLocalizedValue(cmsValue, locale);
    }
    return intl.formatMessage({ id: localeKey });
  };

  const contactPerson = {
    name:
      page?.contact?.contacts?.[0]?.name ||
      intl.formatMessage({ id: "company.contact.directorName" }),
    title: t(
      "company.contact.directorTitle",
      page?.contact?.contacts?.[0]?.role,
    ),
    imageUrl: "/jonathan.jpg",
    email: page?.contact?.contacts?.[0]?.email || "info+website@teg-ev.de",
    linkedinUrl:
      page?.contact?.contacts?.[0]?.linkedin ||
      "https://www.linkedin.com/in/jonathan-babelotzky/",
  };

  return (
    <div>
      <HeroSection
        title={t("company.hero.title", page?.hero?.title)}
        subtitle={t("company.hero.subtitle", page?.hero?.subtitle)}
        buttonText={
          page?.hero?.buttons?.[0]?.text
            ? getLocalizedValue(page.hero.buttons[0].text, locale)
            : intl.formatMessage({ id: "company.hero.buttonText" })
        }
        buttonLink="#contact"
        backgroundImage="/TEG_Hero_Subpage.jpg"
      />

      <section className="section">
        <div className="container-custom">
          <SectionTitle
            title={t(
              "company.sectionTitle.partnerships.title",
              page?.features?.title,
            )}
            subtitle={t(
              "company.sectionTitle.partnerships.subtitle",
              page?.features?.subtitle,
            )}
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {page?.features?.features && page.features.features.length >= 3 ? (
              page.features.features
                .slice(0, 3)
                .map((feature, idx) => (
                  <FeatureCard
                    key={feature._key || idx}
                    title={getLocalizedValue(feature.title, locale)}
                    description={getLocalizedValue(feature.description, locale)}
                    icon={
                      idx === 0 ? (
                        <UserSearch size={40} />
                      ) : idx === 1 ? (
                        <Hammer size={40} />
                      ) : (
                        <ListChecks size={40} />
                      )
                    }
                  />
                ))
            ) : (
              <>
                <FeatureCard
                  title={intl.formatMessage({
                    id: "company.features.rightCharacteristics.title",
                  })}
                  description={intl.formatMessage({
                    id: "company.features.rightCharacteristics.description",
                  })}
                  icon={<UserSearch size={40} />}
                />
                <FeatureCard
                  title={intl.formatMessage({
                    id: "company.features.preparation.title",
                  })}
                  description={intl.formatMessage({
                    id: "company.features.preparation.description",
                  })}
                  icon={<Hammer size={40} />}
                />
                <FeatureCard
                  title={intl.formatMessage({
                    id: "company.features.identification.title",
                  })}
                  description={intl.formatMessage({
                    id: "company.features.identification.description",
                  })}
                  icon={<ListChecks size={40} />}
                />
              </>
            )}
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center">
        <CallToAction
          title={
            page?.cta?.items?.[0]?.title
              ? getLocalizedValue(page.cta.items[0].title, locale)
              : intl.formatMessage({ id: "company.callToAction.title" })
          }
          description={
            page?.cta?.items?.[0]?.description
              ? getLocalizedValue(page.cta.items[0].description, locale)
              : intl.formatMessage({ id: "company.callToAction.description" })
          }
          buttonText={
            page?.cta?.items?.[0]?.buttonText
              ? getLocalizedValue(page.cta.items[0].buttonText, locale)
              : intl.formatMessage({ id: "company.callToAction.buttonText" })
          }
          buttonLink="#contact"
          variant="light"
        />
      </div>

      <section id="partnerships" className="py-20">
        <div className="container-custom">
          <SectionTitle
            title={intl.formatMessage({
              id: "company.sectionTitle.opportunities.title",
            })}
            subtitle={intl.formatMessage({
              id: "company.sectionTitle.opportunities.subtitle",
            })}
          />

          <div className="flex flex-wrap items-center gap-6 mb-8 w-full text-left">
            <div className="card p-6 max-w-4xl">
              <h4 className="font-semibold text-xl text-primary mb-2">
                {intl.formatMessage({ id: "company.cards.studentRun.title" })}
              </h4>
              <p className="text-gray-600 mb-4">
                {intl.formatMessage({
                  id: "company.cards.studentRun.description",
                })}
              </p>
            </div>
            <div className="card p-6 max-w-4xl">
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
            </div>
            <div className="card p-6 max-w-4xl">
              <h4 className="font-semibold text-xl text-primary mb-2">
                {intl.formatMessage({ id: "company.cards.internships.title" })}
              </h4>
              <p className="text-gray-600 mb-4">
                {intl.formatMessage({
                  id: "company.cards.internships.description",
                })}
              </p>
            </div>
            <div className="card p-6 max-w-4xl">
              <h4 className="font-semibold text-xl text-primary mb-2">
                {intl.formatMessage({ id: "company.cards.hireLeaders.title" })}
              </h4>
              <p className="text-gray-600 mb-4">
                {intl.formatMessage({
                  id: "company.cards.hireLeaders.description",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-primary text-white">
        <div className="flex flex-col items-center">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">
              {t("company.contact.title", page?.contact?.title)}
            </h2>

            <div className="flex justify-center">
              <ContactCard
                name={contactPerson.name}
                title={contactPerson.title}
                imageUrl={contactPerson.imageUrl}
                email={contactPerson.email}
                linkedinUrl={contactPerson.linkedinUrl}
                greeting={t(
                  "company.contact.greeting",
                  page?.contact?.greeting,
                )}
                variant="quote"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForCompanies;
