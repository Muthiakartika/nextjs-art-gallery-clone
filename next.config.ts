import type { NextConfig } from "next";

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
  },
};

export default nextConfig;
