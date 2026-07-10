import Link from "next/link";
import type { MegaColumn } from "@/components/navbar/navItems";

// Desktop mega-dropdown, revealed on hover / keyboard focus of the parent
// nav item. Sized for a single column (the only current caller, "Our
// Product") rather than a generic multi-column grid — widen this again if a
// future menu genuinely needs more than one column.
export default function MegaPanel({ columns }: { columns: MegaColumn[] }) {
  return (
    <div className="invisible absolute left-0 top-full z-40 w-64 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="rounded-md border border-border bg-surface p-6 shadow-xl">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
