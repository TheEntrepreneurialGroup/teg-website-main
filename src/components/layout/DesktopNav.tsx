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
    <div className="hidden h-16 w-full items-center justify-between pr-4 text-lg text-white md:flex lg:h-24 lg:px-4 lg:pr-12 lg:text-2xl xl:pr-16">
      <Logo
        imageClassName="h-auto w-64 lg:w-70 xl:w-78"
        sizes="(min-width: 1024px) 8rem, (min-width: 768px) 7rem, 6rem"
      />

      <nav className={cn("flex gap-8 lg:gap-12 xl:gap-20", className)}>
        {mainNavPages.map((page) => {
          return (
            <NavLink key={page.id} href={page.href}>
              {t(page.messageKey)}
            </NavLink>
          );
        })}
      </nav>

      <LanguageSwitcher className="gap-2 lg:gap-4" />
    </div>
  );
}
