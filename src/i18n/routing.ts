import { defineRouting } from "next-intl/routing";
import { localeList, defaultLocale } from "@/i18n";

export const routing = defineRouting({
  locales: localeList,

  // Used when no locale matches
  defaultLocale: defaultLocale,

  localePrefix: "always",

  pathnames: {
    // If all locales use the same pathname, a single
    "/": "/",

    // If locales use different paths, you can
    // specify the relevant external pathnames
    "/companies": {
      de: "/unternehmen",
      en: "/companies",
    },
    "/students": {
      de: "/studenten",
      en: "/students",
    },
    "/imprint": {
      de: "/impressum",
      en: "/imprint",
    },
    "/privacy-policy": {
      de: "/datenschutz",
      en: "/privacy-policy",
    },
  },
});
