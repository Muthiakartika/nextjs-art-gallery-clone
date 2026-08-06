import type { NextConfig } from "next";

// Content-Security-Policy: 'self' plus only the specific third-party
// origins this site actually calls out to. If the Google Maps embed or the
// contact form's Turnstile check ever shows a blank/broken widget after
// changing this, open the browser console — CSP violations are logged
// there with the exact blocked domain, which then needs adding below.
const isDev = process.env.NODE_ENV !== "production";

const CSP_DIRECTIVES = [
  "default-src 'self'",
  // next/font self-hosts fonts at build time and Tailwind/inline style
  // attributes (Hero.tsx's gradient + animation timing) need 'unsafe-inline'.
  // fonts.googleapis.com is added defensively — this project's own fonts
  // are self-hosted via next/font, but a browser extension or a widget
  // occasionally tries to load a Google Fonts stylesheet, which otherwise
  // gets blocked and can look like a broken layout.
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Next.js's own bundled/hydration scripts + Cloudflare Turnstile (contact
  // form anti-bot check) + Google Tag Manager/Analytics/Ads.
  //
  // The Google hosts use the wildcards from Google's own CSP guide
  // (developers.google.com/tag-platform/security/guides/csp) rather than
  // single hostnames: gtag.js and GTM are served from several
  // *.googletagmanager.com subdomains, and pinning just www. is what makes
  // a tag load on one page and get blocked on the next.
  //
  // Cloudflare Zaraz itself needs no entry — it injects from this site's own
  // origin under /cdn-cgi/zaraz/, which 'self' already covers. These hosts
  // are for the Google tags Zaraz then loads in the browser.
  //
  // 'unsafe-eval' is added ONLY in dev (`npm run dev`) because React's
  // Fast Refresh/dev tooling uses eval() for its debugging call stacks —
  // production builds never use eval(), so prod stays strict.
  `script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://*.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://static.cloudflareinsights.com${isDev ? " 'unsafe-eval'" : ""}`,
  // GA4 sends its hits here. The region endpoints (region1.google-analytics
  // .com and friends) are why the wildcards matter — a bare
  // www.google-analytics.com silently drops traffic from other regions.
  "connect-src 'self' https://challenges.cloudflare.com https://*.googletagmanager.com https://google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://googleads.g.doubleclick.net https://static.cloudflareinsights.com https://cloudflareinsights.com",
  // Every photo on this site is a local file under /public, so 'self'
  // covers the site itself. loremflickr.com is kept in step with the
  // `remotePatterns` entry below (ui/Placeholder.tsx builds dummy photo
  // URLs from it). The Google/DoubleClick hosts are there for the tracking
  // pixels the tags fire as <img> beacons.
  //
  // NOTE: Google Ads remarketing also pixels country-specific domains
  // (google.co.id, google.de, …) and CSP can't wildcard a TLD. If Ads
  // conversion/remarketing data goes quiet, check the console for blocked
  // google.<tld> image requests and add the ones you actually use.
  "img-src 'self' data: https://loremflickr.com https://www.google.com https://*.googletagmanager.com https://*.google-analytics.com https://googleads.g.doubleclick.net https://td.doubleclick.net https://stats.g.doubleclick.net",
  // next/font self-hosts fonts at build time as local files, but browser
  // extensions and embedded widgets occasionally inline fonts via base64
  // data: URIs — without this, those get silently blocked and can look like
  // "images don't load", since a missing font can break layout.
  "font-src 'self' data: https://fonts.gstatic.com",
  // *.googletagmanager.com is what lets GTM preview / Tag Assistant attach —
  // without it the tag works but refuses to show as "detected".
  "frame-src https://www.google.com https://challenges.cloudflare.com https://*.googletagmanager.com https://googleads.g.doubleclick.net https://td.doubleclick.net",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
];

// A git merge once left two copies of script-src/connect-src/img-src in this
// list. Browsers don't error on that — per the CSP spec they apply the FIRST
// occurrence of a directive and silently ignore the rest, so the duplicate
// quietly reverted this policy while the file still *looked* correct. This
// check makes that mistake loud instead.
const duplicateDirectives = Object.entries(
  CSP_DIRECTIVES.reduce<Record<string, number>>((counts, directive) => {
    const name = directive.split(" ")[0];
    counts[name] = (counts[name] ?? 0) + 1;
    return counts;
  }, {}),
).filter(([, count]) => count > 1);

if (duplicateDirectives.length > 0) {
  throw new Error(
    `next.config.ts: duplicate CSP directive(s) — ${duplicateDirectives
      .map(([name, count]) => `${name} (x${count})`)
      .join(", ")}. Browsers keep only the first and ignore the rest, so the ` +
      `later one has no effect. Merge them into a single entry.`,
  );
}

const CSP = CSP_DIRECTIVES.join("; ");

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
