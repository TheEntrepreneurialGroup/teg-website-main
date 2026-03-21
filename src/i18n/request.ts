import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { localeList, defaultLocale } from "@/i18n";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(localeList, requested) ? requested : defaultLocale;
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
