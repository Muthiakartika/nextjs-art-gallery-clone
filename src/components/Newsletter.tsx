"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="bg-text py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Free Guide
        </span>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Free Guide: Choose Art With Confidence
        </h2>
        <p className="mt-4 leading-relaxed text-white/70">
          Learn how to find an original artwork that truly speaks to you — even
          if it’s your first time buying art.
        </p>

        {submitted ? (
          <p className="mt-8 rounded-full bg-surface/10 px-6 py-4 text-sm text-white">
            Thank you! Check your inbox — your free guide is on its way.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              aria-label="Email address"
              className="w-full flex-1 rounded-full border border-white/20 bg-surface/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-white focus:outline-none"
            />
            <Button type="submit" variant="light" className="whitespace-nowrap">
              Get the Free Guide
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
