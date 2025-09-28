import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import all namespaces for English
import enCommon from "./en/common.json";
import enHome from "./en/home.json";
import enForStudents from "./en/forStudents.json";
import enForCompanies from "./en/forCompanies.json";

// Import all namespaces for German
import deCommon from "./de/common.json";
import deHome from "./de/home.json";
import deForStudents from "./de/forStudents.json";
import deForCompanies from "./de/forCompanies.json";

export const defaultNS = "common";
export const resources = {
  en: {
    common: enCommon,
    home: enHome,
    forStudents: enForStudents,
    forCompanies: enForCompanies,
  },
  de: {
    common: deCommon,
    home: deHome,
    forStudents: deForStudents,
    forCompanies: deForCompanies,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "de",
    resources,
    defaultNS,
    ns: ["common", "home", "forStudents", "forCompanies"],
  });
