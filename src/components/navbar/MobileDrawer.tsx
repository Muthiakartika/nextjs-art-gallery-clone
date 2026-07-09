import Link from "next/link";
import Brand from "@/components/navbar/Brand";
import MobileNavItem from "@/components/navbar/MobileNavItem";
import { NAV_ITEMS } from "@/components/navbar/navItems";
import {
  CloseIcon,
  GlobeIcon,
  InstagramIcon,
  UserIcon,
} from "@/components/ui/icons";

export default function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <Brand />
          <button type="button" onClick={onClose} className="p-1 text-neutral-700 hover:text-[#8a5a3c]" aria-label="Close menu">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.label} item={item} onNavigate={onClose} />
            ))}
          </ul>
        </nav>

        <div className="space-y-3 border-t border-neutral-200 px-5 py-4">
          <Link href="/account" onClick={onClose} className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-[#8a5a3c]">
            <UserIcon className="h-5 w-5" />
            Log in
          </Link>
          <div className="flex items-center justify-between">
            <button type="button" className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-[#8a5a3c]" aria-label="Select region and currency">
              <GlobeIcon className="h-4 w-4" />
              France <span className="text-neutral-300">|</span> EUR €
            </button>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="text-neutral-700 hover:text-[#8a5a3c]" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
