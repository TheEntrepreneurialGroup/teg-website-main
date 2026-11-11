export const siteConfig = {
  siteName: "TEG Management Conferences",
  baseUrl: "https://teg-ev.de",
  defaultTitle: "TEG Management Conferences",
  defaultOgImagePath: "/shared/heroes/hero-home-new.webp?v=3",
  defaultDescription: {
    de: "TEG entwickelt seit 1986 ambitionierte Studierende zu zukünftigen Führungskräften und vernetzt sie mit führenden Unternehmen.",
    en: "Since 1986, TEG has developed ambitious students into future leaders and connected them with leading companies.",
  },
  organization: {
    name: "TEG Management Conferences",
    email: "info+website@teg-ev.de",
    logoPath: "/shared/brand/teg-favicon.avif",
    sameAs: [
      "https://www.linkedin.com/company/teg-ev/",
      "https://www.facebook.com/TheEntrepreneurialGroup",
      "https://www.instagram.com/tegmunich/",
    ],
    address: {
      streetAddress: "Kaulbachstrasse 64",
      postalCode: "80539",
      addressLocality: "München",
      addressCountry: "DE",
    },
  },
  buildAbsoluteUrl(path: string) {
    return new URL(path, this.baseUrl).toString();
  },
};
