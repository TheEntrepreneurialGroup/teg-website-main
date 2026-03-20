import React from "react";
import NavLink from "@/components/layout/NavLink";
import Logo from "@/ui/Logo";
import LanguageSwitcher from "@/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { mainNavPages } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  className?: string;
}

// Only visible on 'md:flex' breakpoint else 'hidden'
export default function DesktopNav({ className }: DesktopNavProps) {
  const t = useTranslations();

  return (
    <div className="hidden h-16 w-full items-center justify-between px-4 md:flex lg:h-24 lg:px-20 xl:px-26">
      <Logo
        imageClassName="h-auto w-44 lg:w-58 xl:w-64"
        sizes="(min-width: 1024px) 8rem, (min-width: 768px) 7rem, 6rem"
      />

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
