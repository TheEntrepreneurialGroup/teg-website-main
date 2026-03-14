export const lang = {
  de: "de",
  en: "en",
} as const;
export const langArray = Object.values(lang);
export type AppLocale = (typeof lang)[keyof typeof lang];
