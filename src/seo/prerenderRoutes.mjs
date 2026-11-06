import { LOCALIZED_PATHS, toEnglishPath } from "./localizedPaths.mjs";

/** Routes emitted as prebuilt static HTML during production builds. */
export const PRERENDER_ROUTES = [
  "/",
  "/for-students",
  "/for-companies",
  "/events",
  "/conferences/supplychain-management-conference",
  "/conferences/aviation-management-conference",
  "/conferences/enterprise-sales-summit",
  "/privacy-policy",
  "/imprint",
  "/about",
  // English editions
  ...LOCALIZED_PATHS.map(toEnglishPath),
];
