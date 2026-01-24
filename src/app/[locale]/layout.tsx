import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import clsx from "clsx";

import type { Metadata } from "next";
import Navbar from "@/components/sections/Navbar";

import { montserrat } from "@/components/fonts";
import "@/app/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<LayoutProps<"/[locale]">, "children">,
) {
  const { locale } = await props.params;

  const t = await getTranslations({
    locale: locale as Locale,
  });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
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
    <html className="h-full" lang={locale}>
      <body className={clsx(montserrat.className, "flex h-full flex-col")}>
        <NextIntlClientProvider>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
