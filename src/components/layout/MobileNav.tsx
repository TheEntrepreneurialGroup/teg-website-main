"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import * as Dialog from "@radix-ui/react-dialog";
import { mainNavPages } from "@/i18n/navigation";
import NavLink from "@/components/layout/NavLink";
import LanguageSwitcher from "@/ui/LanguageSwitcher";
import Logo from "@/ui/Logo";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  const close = () => setOpen(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="flex h-16 w-full items-center justify-between px-4">
          <Logo
            className="shrink-0"
            imageClassName="h-auto w-36"
            sizes="9rem"
          />

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-white"
            aria-label={t("mobile_nav.open_menu")}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/30" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-start justify-end bg-white px-8 pt-20 pb-12 shadow-xl">
          <div className="absolute top-4 right-4">
            <Dialog.Close asChild>
              <button
                type="button"
                className="text-primary-dark inline-flex h-10 w-10 items-center justify-center rounded-md"
                aria-label={t("mobile_nav.close_menu")}
              >
                <X className="h-6 w-6" />
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Title className="sr-only">
            {t("mobile_nav.title")}
          </Dialog.Title>
          <Dialog.Description className="sr-only">
            {t("mobile_nav.description")}
          </Dialog.Description>

          <nav
            aria-label={t("mobile_nav.primary_navigation")}
            className="w-full max-w-sm"
          >
            <ul className="flex flex-col gap-10">
              {mainNavPages.map((page) => (
                <li key={page.id}>
                  <Dialog.Close asChild>
                    <NavLink
                      href={page.href}
                      className="text-primary-dark text-4xl leading-none"
                    >
                      {t(page.messageKey)}
                    </NavLink>
                  </Dialog.Close>
                </li>
              ))}
            </ul>

            <LanguageSwitcher
              onNavigate={close}
              className="mt-10"
              linkClassName="font-semibold text-primary-dark"
              separatorClassName="text-primary-dark/50"
            />
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
