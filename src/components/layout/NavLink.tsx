"use client";
import { Link, usePathname } from "@/i18n/navigation";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

export default function NavLink({
  href,
  onClick,
  className,
  children,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "hover:text-primary-light relative font-semibold transition-colors duration-300",
        className,
        { "text-white": isActive, "text-gray-800": !isActive },
        isActive &&
          "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white after:content-['']",
      )}
      aria-current={isActive ? "page" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}
