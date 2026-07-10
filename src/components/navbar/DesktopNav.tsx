import Link from "next/link";
import { NAV_ITEMS } from "@/components/navbar/navItems";
import MegaPanel from "@/components/navbar/MegaPanel";
import { ChevronDownIcon } from "@/components/ui/icons";

// Main navigation displayed on desktop screens.
export default function DesktopNav() {
  return (
    <nav className="hidden lg:block" aria-label="Primary">
      <ul className="flex items-center gap-8">
        {NAV_ITEMS.map((item) => (
          <li key={item.label} className="group relative">
            <Link
              href={item.href}
              className="inline-flex items-center gap-1 text-[15px] font-medium text-text transition-colors hover:text-accent"
            >
              {item.label}

              {item.columns && (
                <ChevronDownIcon className="h-3.5 w-3.5 text-muted transition-transform duration-200 group-hover:rotate-180" />
              )}
            </Link>

            {item.columns && <MegaPanel columns={item.columns} />}
          </li>
        ))}
      </ul>
    </nav>
  );
}