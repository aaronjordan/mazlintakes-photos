"use client";

import Link from "next/link";
import { Dialog, VisuallyHidden } from "radix-ui";
import { twMerge } from "tailwind-merge";
import { Button } from "./ui/button";
import { Menu, X, Xmark, XmarkCircleSolid } from "iconoir-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  {
    href: "/about",
    label: "Meet Mazlin",
  },
  {
    href: "/photos",
    label: "Photos",
  },
  {
    href: "/investment",
    label: "Investment",
  },
  {
    href: "/journal",
    label: "Journal",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const base = "px-3 py-1 rounded-full transition-colors";
const hover = "hover:bg-brand-main hover:text-white";

export const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const route = usePathname();

  useEffect(() => setOpen(false), [route]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="md:hidden">
          <Menu strokeWidth="3" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-background/50 backdrop-filter backdrop-blur-sm" />
        <Dialog.Close asChild>
          <Button className="absolute top-4 left-3 opacity-70">
            <Xmark className="text-brand-main text-lg" />
          </Button>
        </Dialog.Close>
        <Dialog.Content className="absolute inset-0 grid mx-12 py-9 overflow-y-auto">
          <Dialog.Title className="sr-only">Navigation</Dialog.Title>
          <ul className="flex flex-col justify-center gap-6 font-pixel text-lg uppercase text-brand-main">
            {navItems.map((target) => (
              <li key={target.label}>
                <Link className={twMerge(base, hover)} href={target.href}>
                  {target.label}
                </Link>
              </li>
            ))}
          </ul>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
