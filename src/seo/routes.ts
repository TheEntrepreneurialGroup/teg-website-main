import { routeSeoEntries as sharedRouteSeoEntries } from "./routeSeoEntries.mjs";

export type AppRoutePath =
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

export interface RouteSeoEntry {
  path: AppRoutePath;
  titleMessageId: string;
  descriptionMessageId: string;
  indexable: boolean;
  openGraphImagePath?: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
}

export const routeSeoEntries = sharedRouteSeoEntries as RouteSeoEntry[];

export function getRouteSeoEntry(pathname: string) {
  return routeSeoEntries.find((entry) => entry.path === pathname);
}
