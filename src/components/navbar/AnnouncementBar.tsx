import {
  ANNOUNCEMENT,
  ANNOUNCEMENT_SHORT,
  WHATSAPP_URL,
} from "@/components/navbar/navItems";
import { WhatsAppIcon } from "@/components/ui/icons";

export default function AnnouncementBar() {
  return (
    <div className="bg-text px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-background">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-center">
        <span className="sm:hidden">{ANNOUNCEMENT_SHORT}</span>
        <span className="hidden sm:inline">{ANNOUNCEMENT}</span>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          // The pill stays visually small to match the 11px bar type, but the
          // ::after halo pushes the touch target to ~44px so it's comfortably
          // tappable on phones without making the sticky header taller.
          className="relative inline-flex items-center gap-1.5 rounded-full bg-background px-3 py-1 text-text transition-opacity after:absolute after:-inset-2.5 after:content-[''] hover:opacity-80"
        >
          <WhatsAppIcon className="h-3.5 w-3.5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
