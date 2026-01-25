import React from "react";
import NavLink from "@/components/layout/NavLink";
import { useTranslations } from "next-intl";
import { trackButtonClick } from "@/utils/analytics";
import { useLocale } from "next-intl";

export default function DesktopNav() {
  const t = useTranslations("navbar");
  const locale = useLocale();

  return (
    <nav className="hidden items-center space-x-8 md:flex">
      <NavLink href="/" onClick={() => trackButtonClick("About Us", "Navbar")}>
        {t("about")}
      </NavLink>
      <NavLink
        href="/companies"
        onClick={() => trackButtonClick("TEG for Companies", "Navbar")}
      >
        {t("for_companies")}
      </NavLink>
      <NavLink
        href="/students"
        onClick={() => trackButtonClick("TEG for Students", "Navbar")}
      >
        {t("for_students")}
      </NavLink>
    </nav>
  );
}
