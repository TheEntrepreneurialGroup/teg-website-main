import ReactDOMServer from 'react-dom/server';

export function render({ Page, pageProps }: { Page: any; pageProps: any }) {
  const pageHtml = ReactDOMServer.renderToString(<Page {...pageProps} />);
  return { documentHtml: `<!DOCTYPE html><html><body><div id="root">${pageHtml}</div></body></html>` };
}
