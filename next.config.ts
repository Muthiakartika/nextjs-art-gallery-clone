import type { NextConfig } from "next";

// Content-Security-Policy: 'self' plus only the specific third-party
// origins this site actually calls out to. If the Instagram feed
// (BeholdFeed) or Google Maps embed ever shows a blank/broken widget after
// changing this, open the browser console — CSP violations are logged
// there with the exact blocked domain, which then needs adding below.
const isDev = process.env.NODE_ENV !== "production";

const CSP = [
  "default-src 'self'",
  // next/font self-hosts fonts at build time and Tailwind/inline style
  // attributes (Hero.tsx's gradient + animation timing) need 'unsafe-inline'.
  // fonts.googleapis.com is added defensively — this project's own fonts
  // are self-hosted via next/font, but a browser extension or a widget
  // occasionally tries to load a Google Fonts stylesheet, which otherwise
  // gets blocked and can look like a broken layout.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Next.js's own bundled/hydration scripts + the Behold Instagram widget
  // + Cloudflare Turnstile (contact form anti-bot check) + Google Tag
  // Manager/Analytics/Ads (loaded via Cloudflare Zaraz, set up outside
  // this codebase in the Cloudflare dashboard — no code here calls these
  // directly, but the CSP still has to allow them or Zaraz can't inject
  // its tags).
  // 'unsafe-eval' is added ONLY in dev (`npm run dev`) because React's
  // Fast Refresh/dev tooling uses eval() for its debugging call stacks —
  // production builds never use eval(), so prod stays strict.
  `script-src 'self' 'unsafe-inline' https://w.behold.so https://challenges.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://static.cloudflareinsights.com${isDev ? " 'unsafe-eval'" : ""}`,
  "connect-src 'self' https://*.behold.so https://challenges.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://googleads.g.doubleclick.net https://static.cloudflareinsights.com https://cloudflareinsights.com",
  // Behold proxies Instagram photos through its own CDN, but which exact
  // subdomain it uses can change without notice — allowing any HTTPS image
  // source is low-risk (an <img> can't execute code the way a script can)
  // and avoids the feed silently breaking again after a Behold-side change.
  "img-src 'self' data: https:",
  // next/font self-hosts fonts at build time as local files, but some
  // third-party widgets (Behold, browser extensions) inline fonts via
  // base64 data: URIs — without this, those get silently blocked and can
  // look like "images don't load" since a missing font can break layout.
  "font-src 'self' data: https://fonts.gstatic.com",
  "frame-src https://www.google.com https://challenges.cloudflare.com https://googleads.g.doubleclick.net https://td.doubleclick.net",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  // Blocks this site from ever being embedded in someone else's <iframe>
  // (clickjacking protection). Matches frame-ancestors above.
  { key: "X-Frame-Options", value: "DENY" },
  // Stops browsers guessing a file's type from its content, so e.g. an
  // uploaded/served file can't be reinterpreted as executable script.
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable browser features this site never uses, so an XSS bug or a
  // compromised third-party script can't quietly turn on the camera/mic/
  // location on a visitor's device.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  // Force HTTPS for a year on every return visit (only takes effect once
  // the site is actually served over HTTPS, e.g. on Vercel).
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  images: {
    // Semua foto dummy (produk, koleksi, studio, hero) diambil dari
    // loremflickr.com (dipilih ke-2 karena mendukung tag/kata kunci, mis.
    // "painting" atau "jewelry", supaya foto yang muncul relevan dengan
    // tema galeri seni alih-alih foto acak). Domain ini harus didaftarkan
    // di sini supaya next/image diizinkan memuat & mengoptimalkannya.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
      },
    ],
    // Situs ini di-hosting di Vercel, dan kuota gratis "Image Optimization"
    // bulanannya sudah habis — begitu itu terjadi, Vercel membalas SEMUA
    // request /_next/image dengan 402 Payment Required, jadi gambar
    // berhenti muncul sama sekali di production. `unoptimized: true`
    // mematikan pipeline optimasi itu (next/image jadi cuma <img> biasa,
    // tanpa resize/convert WebP otomatis) supaya gambar tetap tampil tanpa
    // tergantung kuota. Kalau nanti upgrade plan Vercel (atau pasang
    // Cloudflare di depan untuk cache gambar di edge), baris ini aman
    // dihapus lagi untuk kembali dapat optimasi otomatisnya.
    unoptimized: true,
  },

  // Terapkan header keamanan di atas ke SEMUA route — situs ini statis,
  // jadi ini murni header respons HTTP, tidak butuh server tambahan apa
  // pun untuk berjalan.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
