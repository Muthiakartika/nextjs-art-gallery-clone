"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

// idle: belum kirim | sending: request lagi jalan | success: terkirim
// error: gagal (pesan error ditampilkan supaya pengguna bisa coba lagi)
type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (status === "success") {
    return (
      <div className="border border-border bg-background px-6 py-8 text-center">
        <p className="text-text">
          Thank you, {form.name.split(" ")[0] || "there"}! We&apos;ve received
          your message and will get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMessage("");

        try {
          // Dikirim ke Route Handler src/app/api/contact/route.ts, yang
          // meneruskannya sebagai email lewat SMTP (lihat .env.example).
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });

          if (!res.ok) {
            const data = await res.json().catch(() => null);
            throw new Error(data?.error || "Something went wrong.");
          }

          setStatus("success");
        } catch (err) {
          setStatus("error");
          setErrorMessage(
            err instanceof Error ? err.message : "Something went wrong.",
          );
        }
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium text-text">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border border-border bg-surface px-4 py-2.5 text-sm text-text focus:border-accent focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-text">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="border border-border bg-surface px-4 py-2.5 text-sm text-text focus:border-accent focus:outline-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="resize-none border border-border bg-surface px-4 py-2.5 text-sm text-text focus:border-accent focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-error">{errorMessage}</p>
      )}

      <Button
        type="submit"
        variant="primary"
        className="mt-2 self-start disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
