import type { Metadata } from "next";
import { Cormorant, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Satori Art Gallery",
  description:
    "Original paintings, silver jewelry, and handcraft from our Ubud studio in Bali, carefully shipped worldwide.",
  // favicon.ico / icon.png / apple-icon.png in src/app/ are picked up
  // automatically by Next.js (App Router file convention) — manifest is
  // the only piece that needs wiring up by hand, for Android/PWA "add to
  // home screen" icons.
  manifest: "/manifest.json",
};

export const viewport = {
  themeColor: "#7e8770",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-text">
        <Navbar />
        <div className="flex-1">{children}</div>
        {/* Footer is rendered globally from the Root Layout, so every page
            gets it automatically without importing it individually. */}
        <Footer />
      </body>
    </html>
  );
}
