import { routeSeoEntries as sharedRouteSeoEntries } from "./routeSeoEntries.mjs";

export type AppRoutePath =
  | "/"
  | "/about"
  | "/for-students"
  | "/for-companies"
  | "/events"
  | "/imprint"
  | "/privacy-policy"
  | "/supplychain"
  | "/request-demo";

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
