"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import NavLink from "@/components/layout/NavLink";
import LanguageSwitcher from "@/ui/LanguageSwitcher";
import { cn } from "@/lib/utils";
import type { InternalHref } from "@/i18n/navigation.types";

interface MobileNavProps {
  labels: {
    openMenu: string;
    closeMenu: string;
    title: string;
    description: string;
    primaryNavigation: string;
  };
  navItems: Array<{
    id: string;
    href: InternalHref;
    label: string;
  }>;
}

export default function MobileNav({ labels, navItems }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {/* Persistent top bar, always visible */}
      <div className="relative z-60 flex px-4">
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="size-fit"
            aria-label={open ? labels.closeMenu : labels.openMenu}
          >
            {open ? <X className="size-auto" /> : <Menu className="h-8 w-8" />}
          </button>
        </Dialog.Trigger>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay
          className="fixed inset-x-0 bottom-0 z-40 bg-black/40"
          style={{ top: "var(--nav-h)" }}
        />

        <Dialog.Content
          className={cn(
            "fixed inset-x-0 bottom-0 z-50 overflow-y-auto bg-white px-8 pt-10 pb-12",
          )}
          style={{ top: "var(--nav-h)" }}
        >
          <Dialog.Title className="sr-only">{labels.title}</Dialog.Title>
          <Dialog.Description className="sr-only">
            {labels.description}
          </Dialog.Description>

          <nav
            aria-label={labels.primaryNavigation}
            className="w-full items-end"
          >
            <ul className="flex flex-col gap-10">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Dialog.Close asChild>
                    <NavLink
                      href={item.href}
                      className="text-primary-dark text-4xl"
                    >
                      {item.label}
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
