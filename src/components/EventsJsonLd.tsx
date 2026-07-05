import { Helmet } from "react-helmet-async";
import {
  type EventData,
  parseGermanDateToIso,
  upcomingEvents,
} from "@/data/events";
import { siteConfig } from "@/seo/siteConfig";

interface EventsJsonLdProps {
  pageTitle: string;
  pageDescription: string;
}

function buildEventSchema(event: EventData) {
  const startDate = parseGermanDateToIso(event.date);

  return {
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    image: siteConfig.buildAbsoluteUrl(event.image),
    location: {
      "@type": "Place",
      name: event.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "München",
        addressCountry: "DE",
      },
    },
    organizer: {
      "@type": "Organization",
      name: siteConfig.organization.name,
      url: siteConfig.baseUrl,
      logo: siteConfig.buildAbsoluteUrl(siteConfig.organization.logoPath),
    },
    ...(event.externalLink ? { url: event.externalLink } : {}),
  };
}

export default function EventsJsonLd({
  pageTitle,
  pageDescription,
}: EventsJsonLdProps) {
  const eventsPageUrl = siteConfig.buildAbsoluteUrl("/events");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${eventsPageUrl}#webpage`,
        url: eventsPageUrl,
        name: pageTitle,
        description: pageDescription,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteConfig.baseUrl}/#website`,
          url: siteConfig.baseUrl,
          name: siteConfig.siteName,
        },
        about: {
          "@type": "Organization",
          name: siteConfig.organization.name,
          url: siteConfig.baseUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "TEG",
            item: siteConfig.baseUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: pageTitle,
            item: eventsPageUrl,
          },
        ],
      },
      {
        "@type": "ItemList",
        name: "Upcoming TEG Events",
        itemListElement: upcomingEvents.map((event, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: buildEventSchema(event),
        })),
      },
      ...upcomingEvents.map((event) => buildEventSchema(event)),
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
