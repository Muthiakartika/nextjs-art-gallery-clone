"use client";

import Script from "next/script";
import SectionHeading from "@/components/ui/SectionHeading";
import BeholdFeed from "@/components/BeholdFeed";

export default function InstagramFeed() {
  return (
    <section className="pb-[50px] py-section">
      <div className="mb-10 flex justify-center">
        <SectionHeading
          eyebrow="Follow Us"
          title="@satoriartgallery"
          description="See our newest collections, featured artists, and moments from daily life at our gallery in Seminyak."
        />
      </div>

      <BeholdFeed feed-id="siL3PPkNoRU1ju39AdVD"></BeholdFeed>

    </section>
  );
}