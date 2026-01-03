import { createRoot } from "react-dom/client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function render({ Page, pageProps }: { Page: any; pageProps: any }) {
  const container = document.getElementById("root");
  if (!container) throw new Error("DOM element #root not found");
  const root = createRoot(container);
  root.render(<Page {...pageProps} />);
}
