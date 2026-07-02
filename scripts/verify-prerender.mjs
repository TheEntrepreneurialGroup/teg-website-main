import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { PRERENDER_ROUTES } from "../src/seo/prerenderRoutes.mjs";

const distDir = path.resolve(process.cwd(), "dist");

const routeFiles = PRERENDER_ROUTES.map((route) => ({
  route,
  file:
    route === "/"
      ? path.join(distDir, "index.html")
      : path.join(distDir, route.slice(1), "index.html"),
}));

let failed = false;

for (const { route, file } of routeFiles) {
  let html;
  let size;
  try {
    html = await readFile(file, "utf8");
    size = (await stat(file)).size;
  } catch {
    console.error(`FAIL ${route}: missing ${path.relative(distDir, file)}`);
    failed = true;
    continue;
  }

  const hasTitle = /<title>[^<]+<\/title>/i.test(html);
  const hasDescription = /<meta[^>]+name=["']description["'][^>]*>/i.test(
    html,
  );
  const hasBundle = /\/assets\/bootstrap-[^"]+\.js/.test(html);
  const hasPrerenderedMarkup =
    html.includes('id="root"') &&
    (html.includes("<main") || html.includes("container-custom"));

  if (size < 4000) {
    console.error(`FAIL ${route}: HTML file too small (${size} bytes)`);
    failed = true;
    continue;
  }

  if (!hasTitle || !hasDescription) {
    console.error(`FAIL ${route}: missing SEO title or description meta tag`);
    failed = true;
    continue;
  }

  if (!hasBundle) {
    console.error(`FAIL ${route}: missing client bundle script tag`);
    failed = true;
    continue;
  }

  if (!hasPrerenderedMarkup) {
    console.error(`FAIL ${route}: missing expected prerendered page markup`);
    failed = true;
    continue;
  }

  console.log(`OK   ${route}: ${size} bytes prebuilt HTML`);
}

if (failed) {
  process.exit(1);
}

console.log(`All ${routeFiles.length} prebuilt routes verified.`);
