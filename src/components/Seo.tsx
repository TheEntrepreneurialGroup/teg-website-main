import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/seo/siteConfig";

interface SeoProps {
  title: string;
  description: string;
  locale: "de" | "en";
  indexable: boolean;
  pathname: string;
  openGraphImagePath?: string;
}

function normalizeCanonicalPath(pathname: string) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export default function Seo({
  title,
  description,
  locale,
  indexable,
  pathname,
  openGraphImagePath,
}: SeoProps) {
  const canonicalUrl = siteConfig.buildAbsoluteUrl(
    normalizeCanonicalPath(pathname),
  );
  const ogImageUrl = siteConfig.buildAbsoluteUrl(
    openGraphImagePath ?? siteConfig.defaultOgImagePath,
  );

  return (
    <Helmet htmlAttributes={{ lang: locale }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta
        name="robots"
        content={indexable ? "index,follow" : "noindex,nofollow"}
      />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:type" content="website" />
      <meta
        property="og:locale"
        content={locale === "de" ? "de_DE" : "en_US"}
      />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
}
