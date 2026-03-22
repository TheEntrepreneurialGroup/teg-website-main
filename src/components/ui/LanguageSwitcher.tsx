"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { localeList } from "@/i18n";

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
      {localeList.map((language, index) => {
        const isActive = locale === language;

        return (
          <React.Fragment key={language}>
            <Link
              href={pathname}
              locale={language}
              onClick={onNavigate}
              className={cn(
                "hover:text-secondary-dark relative text-current transition-colors duration-100",
                {
                  "after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:bg-current after:content-[''] lg:after:-bottom-1":
                    isActive,
                },
                linkClassName,
              )}
              aria-current={isActive ? "true" : undefined}
            >
              {language.toUpperCase()}
            </Link>

            {/* Trennlinie */}
            {index < localeList.length - 1 && (
              <span aria-hidden="true" className="h-8 w-[1px] bg-white" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
