"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils/utils";
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
      className={cn(
        "hover:text-primary-light relative font-semibold text-white transition-colors duration-300",
        className,
        { "opacity-70": !isActive },
        isActive &&
          "after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:bg-white after:content-['']",
      )}
      aria-current={isActive ? "page" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}
