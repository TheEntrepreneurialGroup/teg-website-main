"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { langArray } from "@/i18n/i18n";

interface LanguageSwitcherProps {
  onNavigate?: () => void;
  className?: string;
  linkClassName?: string;
  separatorClassName?: string;
}

export default function LanguageSwitcher({
  onNavigate,
  className,
  linkClassName,
  separatorClassName,
}: LanguageSwitcherProps) {
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {langArray.map((language, index) => {
        const isActive = locale === language;

        return (
          <React.Fragment key={language}>
            <Link
              href={pathname}
              locale={language}
              onClick={onNavigate}
              className={cn(
                "hover:text-secondary-dark relative font-semibold text-white transition-colors duration-300",
                { "opacity-80": !isActive },
                {
                  "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-white after:content-['']":
                    isActive,
                },
                linkClassName,
              )}
              aria-current={isActive ? "true" : undefined}
            >
              {language.toUpperCase()}
            </Link>

            {index < langArray.length - 1 && (
              <span className={cn("text-white", separatorClassName)}>|</span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
