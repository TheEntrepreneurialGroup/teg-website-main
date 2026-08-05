import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  HelmetProvider,
  type FilledContext,
  type HelmetServerState,
} from "react-helmet-async";
import App from "./App";
import "./index.css";
import { PRERENDER_ROUTES } from "./seo/prerenderRoutes.mjs";

function Root() {
  return (
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
}

if (typeof window !== "undefined") {
  const target = document.getElementById("root");
  if (!target) {
    throw new Error("Root element #root not found");
  }

  if (import.meta.env.DEV) {
    /**
     * DEV-ONLY mobile console (iOS Safari / Firefox on iOS).
     * REMOVE_BEFORE_PRODUCTION: eruda floating panel.
     * Safeguards: (1) only runs under import.meta.env.DEV so Vite strips
     * the dynamic import from production bundles; (2) scripts/verify-request-demo.mjs
     * asserts eruda is never referenced outside a DEV-gated block.
     */
    void import("eruda")
      .then((mod) => {
        const eruda = (
          mod as { default?: { init: () => void }; init?: () => void }
        ).default;
        eruda?.init?.();
      })
      .catch(() => {
        /* devDependency missing — ignore */
      });
    createRoot(target).render(<Root />);
  } else {
    hydrateRoot(target, <Root />);
  }
}

function extractTitle(helmet: HelmetServerState): string | undefined {
  const match = helmet.title.toString().match(/<title[^>]*>([^<]*)<\/title>/i);
  return match?.[1];
}

function extractHeadElements(
  helmet: HelmetServerState,
): Set<{ type: string; props: Record<string, string> }> {
  const elements = new Set<{ type: string; props: Record<string, string> }>();
  const html = [helmet.meta.toString(), helmet.link.toString()].join("\n");
  const tagRegex = /<(meta|link)\s+([^>]+?)\/?>/gi;

  let tagMatch: RegExpExecArray | null;
  while ((tagMatch = tagRegex.exec(html)) !== null) {
    const type = tagMatch[1].toLowerCase();
    const attrString = tagMatch[2];
    const props: Record<string, string> = {};
    const attrRegex = /([\w:.-]+)(?:=(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g;

    let attrMatch: RegExpExecArray | null;
    while ((attrMatch = attrRegex.exec(attrString)) !== null) {
      props[attrMatch[1]] = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? "";
    }

    elements.add({ type, props });
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
