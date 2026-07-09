import Link from "next/link";
import type { MegaColumn } from "@/components/navbar/navItems";

// Desktop mega-dropdown, revealed on hover / keyboard focus of the parent item.
export default function MegaPanel({ columns }: { columns: MegaColumn[] }) {
  return (
    <div className="invisible absolute left-0 top-full z-40 w-[42rem] max-w-[calc(100vw-2rem)] translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="grid grid-cols-3 gap-8 rounded-md border border-neutral-200 bg-white p-8 shadow-xl">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#8a5a3c]">
              {col.title}
            </h3>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
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
