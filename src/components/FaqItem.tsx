"use client";

import { useState } from "react";
import type { Faq } from "@/data/faqs";

// Reusable, self-contained accordion row.
export default function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-text">
          {faq.question}
        </span>
        <span
          className={`shrink-0 text-2xl leading-none text-accent transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-text-secondary">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
