"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export default function BeholdFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = `
      <behold-widget feed-id="siL3PPkNoRU1ju39AdVD"></behold-widget>
    `;
  }, []);

  return (
    <>
      <div ref={containerRef} />

      <Script
        src="https://w.behold.so/widget.js"
        type="module"
        strategy="afterInteractive"
      />
    </>
  );
}