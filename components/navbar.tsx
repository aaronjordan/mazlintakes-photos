import Link from "next/link";
import { twMerge } from "tailwind-merge";

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

const base = "px-3 py-1 rounded-full";
const hover = "hover:bg-brand-main hover:text-white";

export const NavBar = () => (
  <ul className="hidden lg:flex justify-center gap-6 font-pixel text-lg uppercase text-brand-main">
    {navItems.map((target) => (
      <li key={target.label}>
        <Link className={twMerge(base, hover)} href={target.href}>
          {target.label}
        </Link>
      </li>
    ))}
  </ul>
);
