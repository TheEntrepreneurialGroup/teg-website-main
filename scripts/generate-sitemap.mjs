import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { routeSeoEntries } from "../src/seo/routeSeoEntries.mjs";

const baseUrl = "https://teg-ev.de";

function normalizeCanonicalPath(pathname) {
  if (pathname === "/") {
    return pathname;
  }

  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

const absoluteUrl = (pathname) =>
  new URL(normalizeCanonicalPath(pathname), baseUrl).toString();

// Pages with an English edition list every language version (hreflang).
const alternateLinks = (route) =>
  route.alternates
    ? Object.entries(route.alternates)
        .map(
          ([language, pathname]) =>
            `\n    <xhtml:link rel="alternate" hreflang="${language}" href="${absoluteUrl(pathname)}"/>`,
        )
        .join("") +
      `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(route.alternates.de)}"/>`
    : "";

const urlEntries = routeSeoEntries
  .filter((route) => route.indexable)
  .map(
    (route) =>
      `  <url>\n    <loc>${absoluteUrl(route.path)}</loc>${alternateLinks(route)}\n    <changefreq>${route.changeFrequency}</changefreq>\n    <priority>${route.priority.toFixed(1)}</priority>\n  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urlEntries}\n</urlset>\n`;

const outputPath = path.resolve(process.cwd(), "dist", "sitemap.xml");

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, sitemap, "utf8");

console.log(`Generated sitemap: ${outputPath}`);
