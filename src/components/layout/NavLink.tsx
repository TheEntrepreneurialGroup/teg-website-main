"use client";
import { Link } from "@/i18n/navigation";
import clsx from "clsx";
import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useLocale } from "next-intl";

interface NavLinkProps {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  onClick,
  className,
  children,
}: NavLinkProps) {
  const locale = useLocale();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;
  console.debug("pathname of selectelayoutSegment", selectedLayoutSegment);
  console.debug("pathname of Navlink", pathname);

  return (
    <Link
      href={href}
      locale={locale}
      onClick={onClick}
      className={clsx(
        "hover:text-primary-light relative font-semibold transition-colors duration-300",
        className,
        { "text-white": isActive, "text-gray-800": !isActive },
        isActive &&
          "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:content-['']",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
