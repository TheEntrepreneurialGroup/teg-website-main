import React from "react";
import NavLink from "@/components/layout/NavLink";
import Logo from "@/ui/Logo";
import LanguageSwitcher from "@/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { mainNavPages } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  containerClassName?: string;
  className?: string;
}

// Only visible on 'md:flex' breakpoint else 'hidden'
export default function DesktopNav({
  containerClassName,
  className,
}: DesktopNavProps) {
  const t = useTranslations();

  return (
    <div
      className={cn(
        "flex h-16 w-full items-center justify-between text-lg lg:h-24 lg:text-2xl",
        containerClassName,
      )}
    >
      <nav className={cn("flex gap-4 lg:gap-8", className)}>
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
