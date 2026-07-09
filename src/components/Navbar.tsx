"use client";

import { useEffect, useState } from "react";
import AnnouncementBar from "@/components/navbar/AnnouncementBar";
import Brand from "@/components/navbar/Brand";
import DesktopNav from "@/components/navbar/DesktopNav";
import MobileDrawer from "@/components/navbar/MobileDrawer";
import { MenuIcon, SearchIcon } from "@/components/ui/icons";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <AnnouncementBar />

      <div className="border-b border-neutral-200">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="-ml-1 p-1 text-neutral-800 transition-colors hover:text-[#8a5a3c] lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
            <Brand />
          </div>

          <DesktopNav />

          <button
            type="button"
            className="text-neutral-700 transition-colors hover:text-[#8a5a3c] lg:hidden"
            aria-label="Search"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
