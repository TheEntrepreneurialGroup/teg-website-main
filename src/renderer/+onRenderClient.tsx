import { createRoot } from 'react-dom/client';

export function render({ Page, pageProps }: { Page: any; pageProps: any }) {
  const container = document.getElementById('root');
  if (!container) throw new Error('DOM element #root not found');
  const root = createRoot(container);
  root.render(<Page {...pageProps} />);
}
