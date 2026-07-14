"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
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
      });
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
          rows={4}
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

      {/* CAPTCHA Placeholder */}
      <div className="rounded-md border border-dashed border-border bg-surface px-5 py-5 text-center">
        <p className="text-sm text-muted">
          Google reCAPTCHA will be placed here.
        </p>
      </div>

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