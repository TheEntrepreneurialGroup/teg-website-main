import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],

  // Used when no locale matches
  defaultLocale: "de",
});
