import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Route Handler ini adalah satu-satunya "backend" di project ini (lihat
// CLAUDE.md — biasanya tidak ada backend sama sekali), khusus dibuat
// supaya form Contact Us bisa benar-benar mengirim email, bukan cuma
// menampilkan pesan sukses palsu di client (perilaku sebelumnya).
//
// Kredensial SMTP diambil dari environment variable (lihat .env.example),
// BUKAN di-hardcode, supaya tidak ada rahasia yang ikut ter-commit ke git.
export async function POST(request: Request) {
  const { name, email, message } = await request.json();

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
