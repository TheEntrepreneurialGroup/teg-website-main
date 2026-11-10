/**
 * Structured data (schema.org JSON-LD) for the upcoming events and for TEG
 * itself. It ships in the prerendered HTML, so search engines and AI crawlers
 * read date, place, organiser and price without running any script.
 *
 * Only facts that also stand on the page go in here: an event without a
 * confirmed time carries the date alone, one without a venue just the city.
 */
import React from "react";
import { localizePath, PageLang } from "../i18n/pageLang";
import {
  localize,
  upcomingConferences,
  upcomingEveningEvents,
} from "../pages/eventsData";
import { siteConfig } from "./siteConfig";

const ORGANISATION_NAME = "TEG Management Conferences";

interface EventFacts {
  /** ISO 8601; date only until the times are announced. */
  startDate: string;
  endDate?: string;
  venue?: { name: string; streetAddress: string };
  /** Language the event is held in. */
  inLanguage?: string;
  image?: string;
  registrationUrl?: string;
  /** Lowest ticket price in euros, as stated on the page. */
  price?: string;
}

/** Keyed by the event's id in eventsData.ts. */
const facts: Record<string, EventFacts> = {
  supplychainconference2026: {
    startDate: "2026-12-08T09:00:00+01:00",
    endDate: "2026-12-08T18:00:00+01:00",
    venue: {
      name: "MaibornWolff Kraftwerk",
      streetAddress: "Drygalski-Allee 25",
    },
    inLanguage: "de",
    image: "/events/supply-chain/past/ai-consulting-1.webp",
    registrationUrl: "https://luma.com/scmconference",
    price: "60",
  },
  "aviation-management-conference-2027": {
    startDate: "2027-06-03",
  },
  "enterprise-sales-summit-2027": {
    startDate: "2027-01-19",
    inLanguage: "de",
    image: "/events/enterprise-sales/og-cover.jpg",
    registrationUrl: "https://luma.com/teg-4sug",
  },
};

const organiser = {
  "@type": "Organization",
  name: ORGANISATION_NAME,
  url: siteConfig.buildAbsoluteUrl("/"),
};

const pageUrl = (page: string, lang: PageLang) =>
  siteConfig.buildAbsoluteUrl(`${localizePath(page, lang)}/`);

function eventSchema(id: string, lang: PageLang) {
  const listed = [...upcomingConferences, ...upcomingEveningEvents].find(
    (event) => event.id === id,
  );
  const fact = facts[id];
  if (!listed || !fact || !listed.page) return undefined;
  const city = lang === "de" ? "München" : "Munich";
  // Theme or topic first, then the sentences shown on /events.
  const headline = "theme" in listed ? listed.theme : listed.topic;
  const description = [headline, listed.description]
    .filter((part) => part !== undefined)
    .map((part) => localize(part, lang).replace(/[.]$/, ""))
    .join(". ");
  return {
    "@type": "Event",
    name: localize(listed.title, lang),
    ...(description && { description: `${description}.` }),
    startDate: fact.startDate,
    ...(fact.endDate && { endDate: fact.endDate }),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    ...(fact.inLanguage && { inLanguage: fact.inLanguage }),
    url: pageUrl(listed.page, lang),
    ...(fact.image && { image: siteConfig.buildAbsoluteUrl(fact.image) }),
    location: {
      "@type": "Place",
      name: fact.venue?.name ?? city,
      address: {
        "@type": "PostalAddress",
        ...(fact.venue && { streetAddress: fact.venue.streetAddress }),
        addressLocality: city,
        addressCountry: "DE",
      },
    },
    organizer: organiser,
    ...(fact.registrationUrl && {
      offers: {
        "@type": "Offer",
        url: fact.registrationUrl,
        ...(fact.price && { price: fact.price, priceCurrency: "EUR" }),
        availability: "https://schema.org/LimitedAvailability",
      },
    }),
  };
}

const JsonLd: React.FC<{ data: unknown }> = ({ data }) => (
  <script
    type="application/ld+json"
    // "<" is escaped so no value can close the script element.
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data).replace(/</g, "\\u003c"),
    }}
  />
);

/** Every upcoming event listed in eventsData.ts, in listing order. */
export const upcomingEventIds = [
  ...upcomingConferences,
  ...upcomingEveningEvents,
].map((event) => event.id);

const EventSchema: React.FC<{ ids: string[]; lang: PageLang }> = ({
  ids,
  lang,
}) => {
  const events = ids
    .map((id) => eventSchema(id, lang))
    .filter((event) => event !== undefined);
  if (events.length === 0) return null;
  return (
    <JsonLd data={{ "@context": "https://schema.org", "@graph": events }} />
  );
};

export const OrganisationSchema: React.FC<{ lang: PageLang }> = ({ lang }) => (
  <JsonLd
    data={{
      "@context": "https://schema.org",
      "@type": "NGO",
      name: ORGANISATION_NAME,
      legalName: siteConfig.organization.name,
      alternateName: ["TEG", "TEG München"],
      url: siteConfig.buildAbsoluteUrl("/"),
      logo: siteConfig.buildAbsoluteUrl(siteConfig.organization.logoPath),
      foundingDate: "1986",
      description: siteConfig.defaultDescription[lang],
      email: siteConfig.organization.email,
      address: { "@type": "PostalAddress", ...siteConfig.organization.address },
      sameAs: siteConfig.organization.sameAs,
    }}
  />
);

export default EventSchema;
