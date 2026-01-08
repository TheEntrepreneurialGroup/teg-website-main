import localeString from "./localeString";
import heroSection from "./heroSection";
import statsSection from "./statsSection";
import featureSection from "./featureSection";
import ctaSection from "./ctaSection";
import testimonialSection from "./testimonialSection";
import contactSection from "./contactSection";
import page from "./page";
import type { SchemaTypeDefinition } from "sanity";

export const schemaTypes: SchemaTypeDefinition[] = [
  // Object types (must be registered before document types that use them)
  localeString,
  heroSection,
  statsSection,
  featureSection,
  ctaSection,
  testimonialSection,
  contactSection,
  // Document types
  page,
];
