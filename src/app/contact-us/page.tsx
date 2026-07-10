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
    <Container className="py-16">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Questions about a piece, a commission, or a visit to the studio? We'd love to hear from you."
      />

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Studio
            </h3>
            <address className="mt-3 space-y-1 text-sm not-italic leading-relaxed text-text-secondary">
              <p>Jl. Raya Sanggingan No. 21</p>
              <p>Ubud, Gianyar, Bali 80571</p>
              <p>Indonesia</p>
            </address>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              Contact
            </h3>
            <div className="mt-3 space-y-1 text-sm text-text-secondary">
              <p>
                <a href="mailto:hello@satoriartgallery.com" className="hover:text-accent">
                  hello@satoriartgallery.com
                </a>
              </p>
              <p>
                <a href="tel:+62361123456" className="hover:text-accent">
                  +62 361 123 456
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
              title="Satori Art Gallery location — Ubud, Bali"
              src="https://maps.google.com/maps?q=Ubud%2C%20Bali%2C%20Indonesia&z=13&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
