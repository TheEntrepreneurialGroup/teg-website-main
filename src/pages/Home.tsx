import React from "react";
import { useIntl } from "react-intl";
import { useSanityContent, queries } from "../hooks/useSanityContent";
import { getLocalizedValue, urlFor } from "../lib/sanityClient";
import type { PageData } from "../types/sanity";

// Components
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import CallToAction from "../components/CallToAction";
import HeroSectionTwoButtons from "../components/HeroSectionTwoButtons";
import ImageCard from "../components/ImageCard";
import FeatureCard from "../components/FeatureCard";
import { Building, TrendingUp } from "lucide-react";

// Fallback data from existing locale files (for development/loading state)
import de from "../locales/de";
import en from "../locales/en";

const fallbackMessages: Record<string, Record<string, string>> = { de, en };

/**
 * Home page component with Sanity CMS integration
 * Falls back to static locale content if CMS is not configured
 */
export const Home: React.FC = () => {
  const intl = useIntl();
  const locale = intl.locale as "de" | "en";

  // Fetch page content from Sanity
  const {
    data: page,
    loading,
    error,
  } = useSanityContent<PageData>(queries.homePage);

  // Use CMS content if available, otherwise fall back to locale files
  const useCms = page && !error;

  // Helper to get content from CMS or fallback
  const t = (
    localeKey: string,
    cmsValue?: { de?: string; en?: string } | null,
  ) => {
    if (useCms && cmsValue) {
      return getLocalizedValue(cmsValue, locale);
    }
    return (
      fallbackMessages[locale]?.[localeKey] ||
      intl.formatMessage({ id: localeKey })
    );
  };

  // Show loading state (optional - you could also show fallback content immediately)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <HeroSectionTwoButtons
        title={t("home.hero.title", page?.hero?.title)}
        since={t("home.hero.since", page?.hero?.since)}
        subtitle={t("home.hero.subtitle", page?.hero?.subtitle)}
        buttonText1={
          useCms && page?.hero?.buttons?.[0]
            ? getLocalizedValue(page.hero.buttons[0].text, locale)
            : intl.formatMessage({ id: "home.hero.buttonText1" })
        }
        buttonLink1={
          useCms && page?.hero?.buttons?.[0]?.link
            ? page.hero.buttons[0].link
            : intl.formatMessage({ id: "home.hero.buttonLink1" })
        }
        buttonText2={
          useCms && page?.hero?.buttons?.[1]
            ? getLocalizedValue(page.hero.buttons[1].text, locale)
            : intl.formatMessage({ id: "home.hero.buttonText2" })
        }
        buttonLink2={
          useCms && page?.hero?.buttons?.[1]?.link
            ? page.hero.buttons[1].link
            : intl.formatMessage({ id: "home.hero.buttonLink2" })
        }
        backgroundImage={
          useCms && page?.hero?.backgroundImage
            ? urlFor(page.hero.backgroundImage).width(1920).url()
            : "/TEG_Hero_Home.jpg"
        }
      />

      {/* Alumni Stats Section */}
      <section className="py-20 bg-primary-light/5">
        <div className="container-custom">
          <SectionTitle
            title={t("home.alumni.title", page?.stats?.title)}
            centered
          />

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-6">
            {useCms && page?.stats?.stats ? (
              // Render stats from CMS
              page.stats.stats.map((stat, index) => (
                <StatCard
                  key={stat._key || index}
                  value={getLocalizedValue(stat.value, locale)}
                  label={getLocalizedValue(stat.label, locale)}
                />
              ))
            ) : (
              // Fallback to static content
              <>
                <StatCard
                  value={intl.formatMessage({ id: "home.alumni.stat1.value" })}
                  label={intl.formatMessage({ id: "home.alumni.stat1.label" })}
                />
                <StatCard
                  value={intl.formatMessage({ id: "home.alumni.stat2.value" })}
                  label={intl.formatMessage({ id: "home.alumni.stat2.label" })}
                />
                <StatCard
                  value={intl.formatMessage({ id: "home.alumni.stat3.value" })}
                  label={intl.formatMessage({ id: "home.alumni.stat3.label" })}
                />
                <StatCard
                  value={intl.formatMessage({ id: "home.alumni.stat4.value" })}
                  label={intl.formatMessage({ id: "home.alumni.stat4.label" })}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="about" className="section">
        <div className="container-custom">
          <SectionTitle
            title={t("home.legacy.title", page?.features?.title)}
            subtitle={t("home.legacy.subtitle", page?.features?.subtitle)}
          />

          {/* Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {useCms && page?.features?.images ? (
              page.features.images.map((img, index) => (
                <ImageCard
                  key={img._key || index}
                  imageUrl={img.image ? urlFor(img.image).width(400).url() : ""}
                  altText={img.altText || ""}
                  caption={getLocalizedValue(img.caption, locale)}
                />
              ))
            ) : (
              <>
                <ImageCard
                  imageUrl="/corporates.png"
                  altText="Corporate Partners"
                  caption={intl.formatMessage({
                    id: "home.legacy.image1.caption",
                  })}
                />
                <ImageCard
                  imageUrl="/founders.png"
                  altText="Corporate Partners"
                  caption={intl.formatMessage({
                    id: "home.legacy.image2.caption",
                  })}
                />
                <ImageCard
                  imageUrl="/kuratorium.jpg"
                  altText="Corporate Partners"
                  caption={intl.formatMessage({
                    id: "home.legacy.image3.caption",
                  })}
                />
              </>
            )}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {useCms && page?.features?.features ? (
              page.features.features.map((feature, index) => (
                <FeatureCard
                  key={feature._key || index}
                  title={getLocalizedValue(feature.title, locale)}
                  description={getLocalizedValue(feature.description, locale)}
                  icon={
                    feature.icon === "Building" ? (
                      <Building size={40} />
                    ) : (
                      <TrendingUp size={40} />
                    )
                  }
                />
              ))
            ) : (
              <>
                <FeatureCard
                  title={intl.formatMessage({
                    id: "home.legacy.feature1.title",
                  })}
                  description={intl.formatMessage({
                    id: "home.legacy.feature1.description",
                  })}
                  icon={<TrendingUp size={40} />}
                />
                <FeatureCard
                  title={intl.formatMessage({
                    id: "home.legacy.feature2.title",
                  })}
                  description={intl.formatMessage({
                    id: "home.legacy.feature2.description",
                  })}
                  icon={<Building size={40} />}
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-custom grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCms && page?.cta?.items ? (
            page.cta.items.map((cta, index) => (
              <CallToAction
                key={cta._key || index}
                title={getLocalizedValue(cta.title, locale)}
                description={getLocalizedValue(cta.description, locale)}
                buttonText={getLocalizedValue(cta.buttonText, locale)}
                buttonLink={cta.buttonLink}
                isSection={false}
              />
            ))
          ) : (
            <>
              <CallToAction
                title={intl.formatMessage({ id: "home.callToAction1.title" })}
                description={intl.formatMessage({
                  id: "home.callToAction1.description",
                })}
                buttonText={intl.formatMessage({
                  id: "home.callToAction1.buttonText",
                })}
                buttonLink={intl.formatMessage({
                  id: "home.callToAction1.buttonLink",
                })}
                isSection={false}
              />
              <CallToAction
                title={intl.formatMessage({ id: "home.callToAction2.title" })}
                description={intl.formatMessage({
                  id: "home.callToAction2.description",
                })}
                buttonText={intl.formatMessage({
                  id: "home.callToAction2.buttonText",
                })}
                buttonLink={intl.formatMessage({
                  id: "home.callToAction2.buttonLink",
                })}
                isSection={false}
              />
            </>
          )}
        </div>
      </section>
    </div>
  );
};
