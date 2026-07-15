import Brand from "@/components/navbar/Brand";
import MobileNavItem from "@/components/navbar/MobileNavItem";
import { NAV_ITEMS } from "@/components/navbar/navItems";
import { CloseIcon, InstagramIcon } from "@/components/ui/icons";

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
        className={`absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-surface shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-4 sm:px-5 py-4">
          <Brand />
          <button type="button" onClick={onClose} className="p-2 text-text-secondary hover:text-accent" aria-label="Close menu">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label="Mobile">
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <MobileNavItem key={item.label} item={item} onNavigate={onClose} />
            ))}
          </ul>
        </nav>

        <div className="border-t border-border px-4 sm:px-5 py-4">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent"
            aria-label="Instagram"
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
