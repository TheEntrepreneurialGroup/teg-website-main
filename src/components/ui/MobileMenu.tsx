"use client";
import React, { useEffect } from "react";
import NavLink from "@/components/layout/NavLink";
import { useTranslations } from "next-intl";
import { trackButtonClick } from "@/utils/analytics";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  switchLanguage?: (lang: "en" | "de") => void;
}

export default function MobileMenu({
  open,
  onClose,
  switchLanguage,
}: MobileMenuProps) {
  const t = useTranslations();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex flex-col items-start justify-center bg-white p-6"
      role="dialog"
      aria-modal="true"
    >
      <nav className="flex w-full flex-col items-start space-y-6">
        <NavLink
          href="/"
          exact
          onClick={() => {
            onClose();
            trackButtonClick("About Us", "Navbar");
          }}
          className="text-xl"
        >
          {t("navbar.about")}
        </NavLink>
        <NavLink
          href="/companies"
          onClick={() => {
            onClose();
            trackButtonClick("TEG for Companies", "Navbar");
          }}
          className="text-xl"
        >
          {t("navbar.for_companies")}
        </NavLink>
        <NavLink
          href="/students"
          onClick={() => {
            onClose();
            trackButtonClick("TEG for Students", "Navbar");
          }}
          className="text-xl"
        >
          {t("navbar.for_students")}
        </NavLink>

        <div className="mt-4 flex items-center space-x-4">
          <button
            onClick={() => {
              onClose();
              switchLanguage?.("en");
            }}
            className="font-semibold text-gray-800"
          >
            EN
          </button>
          <span className="text-gray-500">|</span>
          <button
            onClick={() => {
              onClose();
              switchLanguage?.("de");
            }}
            className="font-semibold text-gray-800"
          >
            DE
          </button>
        </div>
      </nav>
    </div>
  );
}
