import { routeSeoEntries as sharedRouteSeoEntries } from "./routeSeoEntries.mjs";

export type AppRoutePath =
  | "/"
  | "/for-students"
  | "/for-companies"
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