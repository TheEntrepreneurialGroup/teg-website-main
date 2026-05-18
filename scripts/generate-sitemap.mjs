import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { routeSeoEntries } from "../src/seo/routeSeoEntries.mjs";

const baseUrl = "https://www.teg-ev.de";

const urlEntries = routeSeoEntries
  .filter((route) => route.indexable)
  .map(
    (route) => `  <url>\n    <loc>${new URL(route.path, baseUrl).toString()}</loc>\n    <changefreq>${route.changeFrequency}</changefreq>\n    <priority>${route.priority.toFixed(1)}</priority>\n  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const outputPath = path.resolve(process.cwd(), "dist", "sitemap.xml");

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, sitemap, "utf8");

console.log(`Generated sitemap: ${outputPath}`);