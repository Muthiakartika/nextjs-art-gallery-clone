"use client";

import Script from "next/script";
import SectionHeading from "@/components/ui/SectionHeading";
import BeholdFeed from "@/components/BeholdFeed";

export default function InstagramFeed() {
  return (
    <section className="pt-[100px] pb-[50px] py-section">
      <div className="mb-10 flex justify-center">
        <SectionHeading
          eyebrow="Follow Us"
          title="@satoriartgallery"
          description="A closer look at the studio, new arrivals, and behind-the-scenes moments from Ubud."
        />
      </div>

      <BeholdFeed feed-id="siL3PPkNoRU1ju39AdVD"></BeholdFeed>

    </section>
  );
}