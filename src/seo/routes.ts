import { routeSeoEntries as sharedRouteSeoEntries } from "./routeSeoEntries.mjs";

type GermanRoutePath =
  | "/"
  | "/about"
  | "/for-students"
  | "/for-companies"
  | "/events"
  | "/conferences/supplychain-management-conference"
  | "/conferences/aviation-management-conference"
  | "/conferences/enterprise-sales-summit"
  | "/imprint"
  | "/privacy-policy";

export type AppRoutePath = GermanRoutePath | "/en" | `/en${GermanRoutePath}`;

export interface RouteSeoEntry {
  path: AppRoutePath;
  titleMessageId: string;
  descriptionMessageId: string;
  indexable: boolean;
  openGraphImagePath?: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  /** Set on pages with an English edition: the path of each language. */
  alternates?: Record<"de" | "en", AppRoutePath>;
}

export const routeSeoEntries = sharedRouteSeoEntries as RouteSeoEntry[];

export function getRouteSeoEntry(pathname: string) {
  const path =
    pathname.length > 1 && pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
  return routeSeoEntries.find((entry) => entry.path === path);
}
