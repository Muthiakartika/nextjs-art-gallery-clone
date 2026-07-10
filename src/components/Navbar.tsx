"use client";

import { useEffect, useState } from "react";
import AnnouncementBar from "@/components/navbar/AnnouncementBar";
import Brand from "@/components/navbar/Brand";
import DesktopNav from "@/components/navbar/DesktopNav";
import MobileDrawer from "@/components/navbar/MobileDrawer";
import { InstagramIcon, MenuIcon } from "@/components/ui/icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Prevent body scrolling while mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-surface">
      <AnnouncementBar />

      <div className="border-b border-border">
        <div className="mx-auto grid h-20 max-w-[1320px] grid-cols-3 items-center px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <div className="flex items-center justify-self-start gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="-ml-1 p-1 text-text hover:text-accent lg:hidden"
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </button>

            <Brand />
          </div>

          {/* Menu */}
          <div className="flex justify-center">
            <DesktopNav />
          </div>

          {/* Instagram */}
          <div className="flex justify-end">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}