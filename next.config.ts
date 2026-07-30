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
  "style-src 'self' 'unsafe-inline'",
  // Next.js's own bundled/hydration scripts + the Behold Instagram widget
  // + Cloudflare Turnstile (contact form anti-bot check).
  // 'unsafe-eval' is added ONLY in dev (`npm run dev`) because React's
  // Fast Refresh/dev tooling uses eval() for its debugging call stacks —
  // production builds never use eval(), so prod stays strict.
  `script-src 'self' 'unsafe-inline' https://w.behold.so https://challenges.cloudflare.com${isDev ? " 'unsafe-eval'" : ""}`,
  "connect-src 'self' https://*.behold.so https://challenges.cloudflare.com",
  // Behold proxies Instagram photos through its own CDN, but which exact
  // subdomain it uses can change without notice — allowing any HTTPS image
  // source is low-risk (an <img> can't execute code the way a script can)
  // and avoids the feed silently breaking again after a Behold-side change.
  "img-src 'self' data: https:",
  "frame-src https://www.google.com https://challenges.cloudflare.com",
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
