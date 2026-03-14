import { routing } from "./routing";

export type InternalHref = keyof typeof routing.pathnames;

export type NavbarMessageKey =
  | "navbar.about"
  | "navbar.for_companies"
  | "navbar.for_students";

export type FooterMessageKey = "footer.imprint" | "footer.data-privacy";

export type NavbarPage = {
  id: "about" | "for-companies" | "for-students";
  messageKey: NavbarMessageKey;
  href: InternalHref;
};

export type FooterPage = {
  id: "imprint" | "data-privacy";
  messageKey: FooterMessageKey;
  href: InternalHref;
};

export type PageItem = NavbarPage | FooterPage;
