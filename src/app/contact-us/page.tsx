import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Satori Art Gallery",
  description:
    "Get in touch with Satori Art Gallery, or visit our studio in Ubud, Bali.",
};

export default function ContactUsPage() {
  return (
    <Container className="py-section">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question about an artwork, custom commission, or visiting our gallery? We'd be happy to help"
      />

      {/* Desktop */}
      <div className="mt-14 hidden lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
        {/* LEFT */}
        <ContactForm />

        {/* RIGHT */}
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Studio
            </h3>

            <address className="mt-3 space-y-1 text-sm leading-relaxed text-text-secondary not-italic">
              <p>Jl. Kayu Aya (Oberoi), Seminyak,</p>
              <p>Kerobokan Kelod, Kuta Utara</p>
              <p>Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361</p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Contact
            </h3>

            <div className="mt-3 space-y-2 text-sm text-text-secondary">
              <p>
                <a
                  href="mailto:hello@satoriartgallery.com"
                  className="hover:text-accent"
                >
                  hello@satoriartgallery.com
                </a>
              </p>

              <p>
                <a
                  href="https://wa.me/6289508117898"
                  className="hover:text-accent"
                >
                  +62 895 0811 7898
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Hours
            </h3>

            <p className="mt-3 text-sm text-text-secondary">
              Daily, 9:00 AM – 6:00 PM (Bali time)
            </p>
          </div>

          <div className="overflow-hidden border border-border">
            <iframe
              title="Satori Art Gallery location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0817965833585!2d115.16334820000002!3d-8.6837716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247178ea84809%3A0x96774c2eed17cb61!2sSatori!5e0!3m2!1sen!2sid!4v1783916501340!5m2!1sen!2sid"
              loading="lazy"
              className="h-64 w-full lg:h-80"
            />
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-14 space-y-10 lg:hidden">
        <ContactForm />

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Studio
            </h3>

            <address className="mt-3 space-y-1 text-sm leading-relaxed text-text-secondary not-italic">
              <p>Jl. Kayu Aya (Oberoi), Seminyak,</p>
              <p>Kerobokan Kelod, Kuta Utara</p>
              <p>Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361</p>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Contact
            </h3>

            <div className="mt-3 space-y-2 text-sm text-text-secondary">
              <p>hello@satoriartgallery.com</p>
              <p>+62 895 0811 7898</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Hours
            </h3>

            <p className="mt-3 text-sm text-text-secondary">
              Daily, 10:00 AM – 9:30 PM (Bali time)
            </p>
          </div>

          <div className="overflow-hidden border border-border">
            <iframe
              title="Satori Art Gallery location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0817965833585!2d115.16334820000002!3d-8.6837716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247178ea84809%3A0x96774c2eed17cb61!2sSatori!5e0!3m2!1sen!2sid!4v1783916501340!5m2!1sen!2sid"
              loading="lazy"
              className="h-64 w-full lg:h-80"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}