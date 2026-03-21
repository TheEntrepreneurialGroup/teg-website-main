export const locales = {
  de: "de",
  en: "en",
} as const;
export const localeList = [
  locales.de,
  locales.en,
] as const satisfies readonly AppLocale[];
export const defaultLocale = locales.de;
export type AppLocale = (typeof locales)[keyof typeof locales];
