import React from "react";
import NavLink from "@/components/layout/NavLink";
import Logo from "@/ui/Logo";
import LanguageSwitcher from "@/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { mainNavPages } from "@/i18n/navigation";
import { cn } from "@/lib/utils/utils";

interface DesktopNavProps {
  className?: string;
}

export default function DesktopNav({ className }: DesktopNavProps) {
  const t = useTranslations();

  return (
    <div className="flex w-full items-center justify-between pr-4">
      <Logo width={180} />

      <nav className={cn("flex gap-8", className)}>
        {mainNavPages.map((page) => {
          return (
            <NavLink key={page.id} href={page.href}>
              {t(page.messageKey)}
            </NavLink>
          );
        })}
      </nav>

      <LanguageSwitcher />
    </div>
  );
}
