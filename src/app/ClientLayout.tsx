"use client";

import { useState, useEffect } from "react";
import { IntlProvider } from "react-intl";
import ScrollRestoration from "../components/ScrollRestoration";
import Layout from "../components/Layout";
import { trackLanguageSwitch, assignSessionId } from "../utils/analytics";
import en from "../locales/en";
import de from "../locales/de";
import { usePathname } from "next/navigation";

const messages: Record<"en" | "de", Record<string, string>> = { en, de };

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<"en" | "de">("de");
  const pathname = usePathname();

  useEffect(() => {
    assignSessionId();
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).umami) {
      (window as any).umami.track();
    }
  }, [pathname]);

  const switchLanguage = (lang: "en" | "de") => {
    setLocale(lang);
    trackLanguageSwitch(lang, "Navbar");
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ScrollRestoration />
      <Layout switchLanguage={switchLanguage}>
        {children}
      </Layout>
    </IntlProvider>
  );
}
