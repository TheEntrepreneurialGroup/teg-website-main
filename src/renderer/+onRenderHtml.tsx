import ReactDOMServer from "react-dom/server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function render({ Page, pageProps }: { Page: any; pageProps: any }) {
  const pageHtml = ReactDOMServer.renderToString(<Page {...pageProps} />);
  return {
    documentHtml: `<!DOCTYPE html><html><body><div id="root">${pageHtml}</div></body></html>`,
  };
}
