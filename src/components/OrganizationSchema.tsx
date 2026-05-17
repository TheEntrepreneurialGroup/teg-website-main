import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/seo/siteConfig";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.organization.name,
  url: siteConfig.baseUrl,
  logo: siteConfig.buildAbsoluteUrl(siteConfig.organization.logoPath),
  email: siteConfig.organization.email,
  sameAs: siteConfig.organization.sameAs,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.organization.address.streetAddress,
    postalCode: siteConfig.organization.address.postalCode,
    addressLocality: siteConfig.organization.address.addressLocality,
    addressCountry: siteConfig.organization.address.addressCountry,
  },
};

export default function OrganizationSchema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}