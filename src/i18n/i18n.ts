export const lang = {
  de: "de",
  en: "en",
} as const;

export type AppLocale = (typeof lang)[keyof typeof lang];
