import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ForStudents from "./pages/ForStudents";
import ForCompanies from "./pages/ForCompanies";
import { Home } from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Imprint from "./pages/Imprint";
import { IntlProvider } from "react-intl";
import en from "./locales/en";
import de from "./locales/de";

const messages: Record<string, Record<string, string>> = { en, de };

function App() {
  const [locale, setLocale] = useState<"en" | "de">("en");

  const switchLanguage = (lang: "en" | "de") => {
    setLocale(lang);
  };
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
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
