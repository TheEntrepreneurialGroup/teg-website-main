import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";
import type { NavbarPage, PageItem } from "./navigation.types";

export const mainNavPages = [
  { id: "about", messageKey: "navbar.about", href: "/" },
  {
    id: "for-companies",
    messageKey: "navbar.for_companies",
    href: "/companies",
  },
  {
    id: "for-students",
    messageKey: "navbar.for_students",
    href: "/students",
  },
] as const satisfies ReadonlyArray<NavbarPage>;

export const legalNavPages = [
  {
    id: "imprint",
    messageKey: "footer.imprint",
    href: "/imprint",
  },
  {
    id: "data-privacy",
    messageKey: "footer.data-privacy",
    href: "/privacy-policy",
  },
] as const satisfies ReadonlyArray<PageItem>;

export const appNavPages = [...mainNavPages, ...legalNavPages];

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
