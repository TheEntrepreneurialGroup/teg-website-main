import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import {
  getFormatter,
  getNow,
  getTimeZone,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import clsx from "clsx";

import Navbar from "@/components/sections/Navbar";

import { montserrat } from "@/components/fonts";
import "@/styles/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const params = await props.params;
  const locale = params.locale as Locale;

  const t = await getTranslations({
    locale: locale,
    namespace: "metadata",
  });

  const formatter = await getFormatter({ locale });
  const now = await getNow({ locale });
  const timeZone = await getTimeZone({ locale });

  return {
    title: t("title"),
    description: t("description"),
    other: {
      currentYear: formatter.dateTime(now, { year: "numeric" }),
      timeZone,
    },
  };
}

export default async function LocalLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html className="h-full" lang={locale} data-scroll-behavior="smooth">
      <body className={clsx(montserrat.className, "flex h-full flex-col")}>
        <NextIntlClientProvider locale={locale}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
