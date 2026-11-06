/**
 * German paths that also have an English edition at /en/… (the home page at
 * /en). Read by the router, the prerender list, the SEO entries and the
 * sitemap. The legal pages stay German only.
 */
export const LOCALIZED_PATHS = [
  "/",
  "/for-students",
  "/for-companies",
  "/events",
  "/conferences/supplychain-management-conference",
  "/conferences/aviation-management-conference",
  "/conferences/enterprise-sales-summit",
];

export const toEnglishPath = (path) => (path === "/" ? "/en" : `/en${path}`);
