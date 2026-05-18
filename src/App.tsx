import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import ForStudents from "./pages/ForStudents";
import ForCompanies from "./pages/ForCompanies";
import Events from "./pages/Events"; // NEU hinzugefügt
import { Home } from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Imprint from "./pages/Imprint";
import { IntlProvider } from "react-intl";
import en from "./locales/en";
import de from "./locales/de";
import ScrollRestoration from "./components/ScrollRestoration";
import { trackLanguageSwitch, assignSessionId } from "./utils/analytics";

const messages: Record<string, Record<string, string>> = { en, de };

function App() {
  const [locale, setLocale] = useState<"en" | "de">("de");
  const location = useLocation();

  useEffect(() => {
    assignSessionId();
  });

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
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout switchLanguage={switchLanguage} />}>
          <Route index element={<Home />} />
          <Route path="for-students" element={<ForStudents />} />
          <Route path="for-companies" element={<ForCompanies />} />
          <Route path="events" element={<Events />} /> {/* NEU hinzugefügt */}
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
    </IntlProvider>
  );
}

export default App;
