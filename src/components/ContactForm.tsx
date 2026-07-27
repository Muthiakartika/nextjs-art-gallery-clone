"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import Button from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";

// Cloudflare Turnstile's render() API — typed by hand since Cloudflare
// doesn't publish an official @types package for the widget script.
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

// Public (safe to expose client-side) site key from the Cloudflare
// Turnstile dashboard. Leave unset locally/before the Cloudflare setup is
// done — the widget then simply doesn't render and the form still works,
// so this never blocks development. See .env.example.
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    // Honeypot anti-spam: field tersembunyi dari pengguna asli (lihat
    // input-nya di bawah). Bot form-filler biasanya mengisi semua field
    // yang ada di DOM tanpa peduli visible atau tidak — kalau field ini
    // terisi, API /api/contact akan diam-diam menolaknya.
    company: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | undefined>(undefined);

  // Render the Turnstile widget once its script has loaded (see the
  // <Script onLoad> below) and a site key is configured.
  useEffect(() => {
    if (!turnstileReady || !TURNSTILE_SITE_KEY || !turnstileContainerRef.current) {
      return;
    }
    if (!window.turnstile) return;

    widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => setTurnstileToken(""),
    });

    return () => {
      if (widgetIdRef.current) window.turnstile?.remove(widgetIdRef.current);
    };
  }, [turnstileReady]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus("error");
      setErrorMessage("Please complete the security check above.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...form, turnstileToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        message: "",
        company: "",
      });
      // Turnstile tokens are single-use — reset the widget so the visitor
      // gets a fresh token if they submit the form again.
      setTurnstileToken("");
      if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
    } catch (err) {
      setStatus("error");

      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      {TURNSTILE_SITE_KEY && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
          onLoad={() => setTurnstileReady(true)}
        />
      )}

      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-text"
        >
          Name
        </label>

        <input
          id="name"
          required
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className="border border-border bg-surface px-4 py-3 focus:border-accent focus:outline-none"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-text"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
          className="border border-border bg-surface px-4 py-3 focus:border-accent focus:outline-none"
        />
      </div>

      {/* Honeypot: off-screen (not display:none — some bots skip that),
          removed from tab order and screen readers, so only bots that
          blindly fill every field will ever touch it. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) =>
            setForm({
              ...form,
              company: e.target.value,
            })
          }
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-text"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={3.5}
          required
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
          className="resize-none border border-border bg-surface px-4 py-3 focus:border-accent focus:outline-none"
        />
      </div>

      {/* Cloudflare Turnstile — only renders once NEXT_PUBLIC_TURNSTILE_SITE_KEY
          is set (see .env.example). Until then this space is simply empty,
          so the form keeps working during local development. */}
      {TURNSTILE_SITE_KEY ? (
        <div ref={turnstileContainerRef} />
      ) : (
        <div className="rounded-md border border-dashed border-border bg-surface px-5 py-5 text-center">
          <p className="text-sm text-muted">
            Cloudflare Turnstile will appear here once configured.
          </p>
        </div>
      )}

      {/* Button */}
      <Button
        type="submit"
        variant="primary"
        className="self-start"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending..."
          : "Send Message"}
      </Button>

      {/* Success */}
      {status === "success" && (
        <div className="rounded-md border border-green-300 bg-green-50 px-5 py-4">
          <p className="font-medium text-green-700">
            ✓ Message sent successfully
          </p>

          <p className="mt-1 text-sm text-green-600">
            Thank you! We&apos;ve received your message and will get back to you as
            soon as possible.
          </p>
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <div className="rounded-md border border-red-300 bg-red-50 px-5 py-4">
          <p className="font-medium text-red-700">
            Failed to send message
          </p>

          <p className="mt-1 text-sm text-red-600">
            {errorMessage}
          </p>
        </div>
      )}
    </form>
  );
}
