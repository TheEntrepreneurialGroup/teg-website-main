// src/components/layout/MobileNav.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import * as Dialog from "@radix-ui/react-dialog";
import { mainNavPages } from "@/i18n/navigation";
import NavLink from "@/components/layout/NavLink";
import LanguageSwitcher from "@/ui/LanguageSwitcher";
import Logo from "@/ui/Logo";
import { cn } from "@/lib/utils";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Persistent top bar, always visible */}
      <div className="relative z-60 flex px-4">
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="size-fit"
            aria-label={
              open ? t("mobile_nav.close_menu") : t("mobile_nav.open_menu")
            }
          >
            {open ? <X className="size-auto" /> : <Menu className="h-8 w-8" />}
          </button>
        </Dialog.Trigger>
      </div>

      <Dialog.Portal>
        {/* Overlay starts below persistent header */}
        <Dialog.Overlay
          className="fixed inset-x-0 bottom-0 z-40 bg-black/40"
          style={{ top: "var(--nav-h)" }}
        />

        {/* Content starts below persistent header */}
        <Dialog.Content
          className={cn(
            "fixed inset-x-0 bottom-0 z-50 overflow-y-auto bg-white px-8 pt-10 pb-12",
          )}
          style={{ top: "var(--nav-h)" }}
        >
          <Dialog.Title className="sr-only">
            {t("mobile_nav.title")}
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            {t("mobile_nav.description")}
          </Dialog.Description>

          <nav
            aria-label={t("mobile_nav.primary_navigation")}
            className="w-full items-end"
          >
            <ul className="flex flex-col gap-10">
              {mainNavPages.map((page) => (
                <li key={page.id}>
                  <Dialog.Close asChild>
                    <NavLink
                      href={page.href}
                      className="text-primary-dark text-4xl"
                    >
                      {t(page.messageKey)}
                    </NavLink>
                  </Dialog.Close>
                </li>
              ))}
            </ul>

            <LanguageSwitcher
              onNavigate={() => setOpen(false)}
              className="text-primary-dark mt-10 text-2xl font-medium"
            />
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
