import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Route Handler ini adalah satu-satunya "backend" di project ini (lihat
// CLAUDE.md — biasanya tidak ada backend sama sekali), khusus dibuat
// supaya form Contact Us bisa benar-benar mengirim email, bukan cuma
// menampilkan pesan sukses palsu di client (perilaku sebelumnya).
//
// Kredensial SMTP diambil dari environment variable (lihat .env.example),
// BUKAN di-hardcode, supaya tidak ada rahasia yang ikut ter-commit ke git.

const NAME_MAX = 100;
const EMAIL_MAX = 254; // panjang maksimum alamat email valid per RFC 5321
const MESSAGE_MAX = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limit sederhana in-memory: maksimal 5 pengiriman / 10 menit per IP.
// Ini bukan pengganti WAF/CDN sungguhan (lihat catatan di bawah), tapi
// cukup untuk menghentikan spam-bot yang asal tembak endpoint ini berkali-
// kali. Disimpan di memori proses, jadi otomatis reset tiap kali server
// restart/redeploy — kalau nanti trafik sudah besar dan jalan multi-
// instance, ganti dengan rate limiter berbasis Redis/Upstash.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );

  if (timestamps.length >= RATE_LIMIT_MAX) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

// Verifies a Cloudflare Turnstile token server-side (the client-side widget
// alone proves nothing — a bot can just skip loading it and post directly
// to this endpoint, so the token has to be checked against Cloudflare's
// API too). Returns true when verification isn't configured yet, so the
// form keeps working before TURNSTILE_SECRET_KEY is set up — see
// .env.example.
async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret, response: token, remoteip: ip }),
      },
    );
    const data = await res.json();
    return data.success === true;
  } catch (error) {
    console.error("Contact form: Turnstile verification request failed.", error);
    return false;
  }
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, message, company, turnstileToken } =
    body as Record<string, unknown>;

  // Honeypot: field tersembunyi di ContactForm yang manusia tidak akan
  // pernah isi, tapi bot form-filler biasanya isi otomatis. Kalau terisi,
  // diam-diam anggap sukses (jangan kasih tahu bot bahwa ia terdeteksi).
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (
    !(await verifyTurnstile(
      typeof turnstileToken === "string" ? turnstileToken : "",
      ip,
    ))
  ) {
    return NextResponse.json(
      { error: "Security check failed. Please try again." },
      { status: 403 },
    );
  }

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (
    name.length > NAME_MAX ||
    email.length > EMAIL_MAX ||
    message.length > MESSAGE_MAX
  ) {
    return NextResponse.json(
      { error: "One of the fields is too long." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } =
    process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    // Belum dikonfigurasi (lihat .env.example) — gagal dengan jelas alih-alih
    // diam-diam gagal kirim.
    console.error("Contact form: SMTP environment variables are not set.");
    return NextResponse.json(
      { error: "Email sending is not configured yet." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Satori Art Gallery Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      // Balas langsung ke pengirim, bukan ke alamat SMTP pengirim email.
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }
}
