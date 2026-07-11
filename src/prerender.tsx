import { StrictMode } from "react";
import {
  HelmetProvider,
  type FilledContext,
  type HelmetServerState,
} from "react-helmet-async";
import App from "./App";
import { PRERENDER_ROUTES } from "./seo/prerenderRoutes.mjs";

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function extractTitle(helmet: HelmetServerState): string | undefined {
  const match = helmet.title.toString().match(/<title[^>]*>([^<]*)<\/title>/i);
  return match?.[1] ? decodeHtmlEntities(match[1]) : undefined;
}

type HeadElement = {
  type: string;
  props: Record<string, string>;
  children?: string;
};

function parseTagAttributes(attrString: string): Record<string, string> {
  const props: Record<string, string> = {};
  const attrRegex = /([\w:.-]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;

  let attrMatch: RegExpExecArray | null;
  while ((attrMatch = attrRegex.exec(attrString)) !== null) {
    props[attrMatch[1]] = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? "";
  }

  return props;
}

function extractHeadElements(helmet: HelmetServerState): Set<HeadElement> {
  const elements = new Set<HeadElement>();
  const html = [helmet.meta.toString(), helmet.link.toString()].join("\n");
  const tagRegex = /<(meta|link)\s+([^>]+?)\/?>/gi;

  let tagMatch: RegExpExecArray | null;
  while ((tagMatch = tagRegex.exec(html)) !== null) {
    elements.add({
      type: tagMatch[1].toLowerCase(),
      props: parseTagAttributes(tagMatch[2]),
    });
  }

  const scriptHtml = helmet.script.toString();
  const scriptRegex = /<script\s+([^>]*?)>([\s\S]*?)<\/script>/gi;

  let scriptMatch: RegExpExecArray | null;
  while ((scriptMatch = scriptRegex.exec(scriptHtml)) !== null) {
    const props = parseTagAttributes(scriptMatch[1]);
    if (props.type !== "application/ld+json") {
      continue;
    }

    elements.add({
      type: "script",
      props,
      children: scriptMatch[2].trim(),
    });
  }

  return elements;
}

export async function prerender(data: { url: string }) {
  const { renderToString } = await import("react-dom/server");
  const { StaticRouter } = await import("react-router-dom/server");
  const { parseLinks } = await import("vite-prerender-plugin/parse");
  const helmetContext: FilledContext = {} as FilledContext;

  const html = renderToString(
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={data.url}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    </StrictMode>,
  );

  const { helmet } = helmetContext;
  const crawledLinks = parseLinks(html);
  const links = new Set([
    ...crawledLinks,
    ...PRERENDER_ROUTES.filter((route) => route !== data.url),
  ]);

  return {
    html,
    links,
    head: helmet
      ? {
          lang: "de",
          title: extractTitle(helmet),
          elements: extractHeadElements(helmet),
        }
      : undefined,
  };
}
