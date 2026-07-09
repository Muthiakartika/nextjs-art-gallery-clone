"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/components/navbar/navItems";
import { ChevronDownIcon } from "@/components/ui/icons";

// A single row in the mobile drawer: a plain link, or an expandable
// accordion when the item has mega-menu columns.
export default function MobileNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  if (!item.columns) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="block rounded-md px-3 py-2.5 text-base font-medium text-neutral-900 hover:bg-neutral-50"
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-base font-medium text-neutral-900 hover:bg-neutral-50"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDownIcon
          className={`h-4 w-4 text-neutral-400 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="space-y-4 px-3 pb-3 pt-1">
          {item.columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8a5a3c]">
                {col.title}
              </h3>
              <ul className="space-y-1.5 border-l border-neutral-200 pl-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className="block py-1 text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </li>
  );
}
