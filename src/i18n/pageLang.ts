/**
 * Page language. German pages live at their plain paths, the English editions
 * under /en/…; the language always comes from the URL, so both are prerendered
 * as separate static pages (SEO/GEO) and link to each other via hreflang.
 */
import { useLocation } from "react-router-dom";
import { LOCALIZED_PATHS } from "../seo/localizedPaths.mjs";

export type PageLang = "de" | "en";

export function getPathLang(pathname: string): PageLang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "de";
}

/** The German path behind a pathname of either language. */
export function getBasePath(pathname: string): string {
  if (getPathLang(pathname) === "de") return pathname;
  return pathname.slice("/en".length) || "/";
}

/**
 * Path of `path` (a German path, e.g. "/events") in `lang`. Pages without an
 * English edition, such as the legal pages, keep their German path.
 */
export function localizePath(path: string, lang: PageLang): string {
  if (lang === "de") return path;
  const [pathname, hash = ""] = path.split("#");
  if (!(LOCALIZED_PATHS as readonly string[]).includes(pathname)) return path;
  const localized = pathname === "/" ? "/en" : `/en${pathname}`;
  return hash ? `${localized}#${hash}` : localized;
}

export function usePageLang(): PageLang {
  return getPathLang(useLocation().pathname);
}

/** Localizes internal link targets for the current page's language. */
export function useLocalizePath(): (path: string) => string {
  const lang = usePageLang();
  return (path) => localizePath(path, lang);
}
