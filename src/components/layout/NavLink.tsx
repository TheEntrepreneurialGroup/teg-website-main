"use client";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
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
        "hover:text-secondary-dark relative text-current transition-colors duration-100",
        {
          "after:absolute after:-bottom-0.5 after:left-0 after:h-[1px] after:w-full after:bg-current after:content-[''] lg:after:-bottom-1":
            isActive,
        },
        className,
      )}
      aria-current={isActive ? "page" : undefined}
      {...rest}
    >
      {children}
    </Link>
  );
}
