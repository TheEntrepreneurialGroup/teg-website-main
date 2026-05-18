import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import ForStudents from "./pages/ForStudents";
import ForCompanies from "./pages/ForCompanies";
import { Home } from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Imprint from "./pages/Imprint";
import { IntlProvider, useIntl } from "react-intl";
import en from "./locales/en";
import de from "./locales/de";
import ScrollRestoration from "./components/ScrollRestoration";
import Seo from "./components/Seo";
import { trackLanguageSwitch, assignSessionId } from "./utils/analytics";
import { getRouteSeoEntry } from "./seo/routes";
import { siteConfig } from "./seo/siteConfig";

const messages: Record<string, Record<string, string>> = { en, de };

function RouteSeo({
  locale,
  pathname,
}: {
  locale: "en" | "de";
  pathname: string;
}) {
  const intl = useIntl();
  const routeSeoEntry = getRouteSeoEntry(pathname);

  if (!routeSeoEntry) {
    return (
      <Seo
        title={siteConfig.defaultTitle}
        description={siteConfig.defaultDescription[locale]}
        locale={locale}
        indexable={false}
        pathname={pathname}
      />
    );
  }

  return (
    <Seo
      title={intl.formatMessage({ id: routeSeoEntry.titleMessageId })}
      description={intl.formatMessage({ id: routeSeoEntry.descriptionMessageId })}
      locale={locale}
      indexable={routeSeoEntry.indexable}
      pathname={routeSeoEntry.path}
      openGraphImagePath={routeSeoEntry.openGraphImagePath}
    />
  );
}

function App() {
  const [locale, setLocale] = useState<"en" | "de">("de");
  const location = useLocation();

  useEffect(() => {
    assignSessionId();
  });

  useEffect(() => {
    if (document.getElementById("umami-health-script")) {
      return;
    }

    const isProductionHost = ["www.teg-ev.de", "teg-ev.de"].includes(
      window.location.hostname,
    );

    const script = document.createElement("script");
    script.id = "umami-health-script";
    script.src = isProductionHost
      ? "/health.js"
      : "https://analytics.teg-ev.de/script.js";
    script.defer = true;
    script.dataset.websiteId = "86aa4705-1592-4584-b1f4-94f2d3803067";
    script.dataset.domains = "teg-ev.de";

    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (window.umami) {
      window.umami.track();
    }
  }, [location]);

  const switchLanguage = (lang: "en" | "de") => {
    setLocale(lang);
    trackLanguageSwitch(lang, "Navbar");
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <RouteSeo locale={locale} pathname={location.pathname} />
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout switchLanguage={switchLanguage} />}>
          <Route index element={<Home />} />
          <Route path="for-students" element={<ForStudents />} />
          <Route path="for-companies" element={<ForCompanies />} />
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </IntlProvider>
  );
}

export default App;
