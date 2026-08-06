"use client";

import { useId, useState } from "react";
import Button from "@/components/ui/Button";
import { WHATSAPP_URL } from "@/components/navbar/navItems";

// Contact form — hands the visitor off to WhatsApp instead of sending an
// email. Nothing is posted to this site at all: the fields are composed into
// a wa.me link and opened in the visitor's own WhatsApp, where they press
// send. The gallery then receives it as a normal chat from the visitor's
// number, which is easier to reply to than an email.
//
// The email path (src/app/api/contact/route.ts + the SMTP_* variables in
// .env.local) is deliberately left in place but unused, so switching back
// is just a matter of restoring the fetch() call in handleSubmit. That route
// still has its own validation, rate limiting and Turnstile verification —
// the Turnstile widget and honeypot that used to live in this component were
// there to protect that endpoint, and are pointless now that submitting the
// form only builds a URL in the visitor's own browser.

// wa.me puts the whole message in the query string, so keep it well inside
// what browsers and the WhatsApp app handle comfortably.
const MESSAGE_MAX = 1000;

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [handedOff, setHandedOff] = useState(false);

  // contact-us renders this component twice — once in the desktop grid, once
  // in the mobile stack — so hardcoded ids would collide and every <label>
  // would resolve to the hidden desktop copy. useId() keeps each instance's
  // labels pointing at its own fields.
  const uid = useId();
  const nameId = `${uid}-name`;
  const emailId = `${uid}-email`;
  const messageId = `${uid}-message`;

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Typing again means they're composing a fresh message, so the
    // confirmation from the previous submit no longer applies.
    if (handedOff) setHandedOff(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Phrased the way a person actually opens a chat — greeting and name
    // first, then the question — rather than a labelled form dump, which
    // reads like a forwarded email once it lands in WhatsApp. The email goes
    // last, since it's a detail to note rather than the point of the message.
    const text = [
      `Hi Satori Art Gallery! I'm ${form.name.trim()}.`,
      "",
      form.message.trim(),
      "",
      `Contact email: ${form.email.trim()}`,
    ].join("\n");

    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;

    // Clicking a real anchor rather than calling window.open: with the
    // "noopener" feature, window.open ALWAYS returns null (that's the spec,
    // not a failure signal), so pairing it with an `if (!opened)` fallback
    // fired both paths every time and opened WhatsApp twice. An anchor has
    // no return value to misread, still carries rel="noopener noreferrer",
    // and — being a genuine user-gesture navigation — isn't caught by
    // pop-up blockers the way window.open can be.
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();

    // The message now lives in the WhatsApp tab, so clearing here leaves a
    // clean form behind rather than a stale copy of something already sent.
    setForm({ name: "", email: "", message: "" });
    setHandedOff(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label htmlFor={nameId} className="text-sm font-medium text-text">
          Name
        </label>

        <input
          id={nameId}
          required
          maxLength={100}
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="border border-border bg-surface px-4 py-3 focus:border-accent focus:outline-none"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor={emailId} className="text-sm font-medium text-text">
          Email
        </label>

        <input
          id={emailId}
          type="email"
          required
          maxLength={254}
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="border border-border bg-surface px-4 py-3 focus:border-accent focus:outline-none"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor={messageId} className="text-sm font-medium text-text">
          Message
        </label>

        <textarea
          id={messageId}
          rows={4}
          required
          maxLength={MESSAGE_MAX}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="resize-none border border-border bg-surface px-4 py-3 focus:border-accent focus:outline-none"
        />

        <span className="text-xs text-muted">
          {form.message.length}/{MESSAGE_MAX}
        </span>
      </div>

      <Button type="submit" variant="primary" className="self-start">
        Submit
      </Button>

      {handedOff && (
        <div className="rounded-md border border-green-300 bg-green-50 px-5 py-4">
          <p className="font-medium text-green-700">WhatsApp is opening</p>

          <p className="mt-1 text-sm text-green-600">
            Your message is already typed out — just press send in WhatsApp and
            we&apos;ll get back to you there. If nothing opened, WhatsApp may
            not be installed on this device.
          </p>
        </div>
      )}
    </form>
  );
}
