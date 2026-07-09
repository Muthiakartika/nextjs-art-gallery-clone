import Link from "next/link";
import { NAV_ITEMS } from "@/components/navbar/navItems";
import MegaPanel from "@/components/navbar/MegaPanel";
import {
  ChevronDownIcon,
  GlobeIcon,
  InstagramIcon,
  SearchIcon,
  UserIcon,
} from "@/components/ui/icons";

// Renders the centered primary nav and the right-hand action cluster as
// sibling flex children (via a fragment) so the header's justify-between works.
export default function DesktopNav() {
  return (
    <>
      <nav className="hidden h-full lg:block" aria-label="Primary">
        <ul className="flex h-full items-stretch gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="group relative flex items-center">
              <Link
                href={item.href}
                className="inline-flex h-full items-center gap-1 text-sm font-medium text-neutral-800 transition-colors hover:text-[#8a5a3c]"
              >
                {item.label}
                {item.columns && (
                  <ChevronDownIcon className="h-3.5 w-3.5 text-neutral-400 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </Link>
              {item.columns && <MegaPanel columns={item.columns} />}
            </li>
          ))}
        </ul>
      </nav>

      <div className="hidden items-center gap-5 lg:flex">
        <button type="button" className="text-neutral-700 transition-colors hover:text-[#8a5a3c]" aria-label="Search">
          <SearchIcon className="h-5 w-5" />
        </button>
        <Link href="/account" className="inline-flex items-center gap-1.5 text-sm text-neutral-700 transition-colors hover:text-[#8a5a3c]">
          <UserIcon className="h-5 w-5" />
          Log in
        </Link>
        <button type="button" className="inline-flex items-center gap-1.5 text-sm text-neutral-700 transition-colors hover:text-[#8a5a3c]" aria-label="Select region and currency">
          <GlobeIcon className="h-4 w-4" />
          France
          <span className="text-neutral-300">|</span>
          EUR €
        </button>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-neutral-700 transition-colors hover:text-[#8a5a3c]" aria-label="Instagram">
          <InstagramIcon className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}
