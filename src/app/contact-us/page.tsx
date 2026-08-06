import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Satori Art Gallery",
  description:
    "Get in touch with Satori Art Gallery, or visit our studio in Ubud, Bali.",
};

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0817965833585!2d115.16334820000002!3d-8.6837716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247178ea84809%3A0x96774c2eed17cb61!2sSatori!5e0!3m2!1sen!2sid!4v1783916501340!5m2!1sen!2sid";

export default function ContactUsPage() {
  return (
    <Container className="py-section">
      <SectionHeading
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question about an artwork, custom commission, or visiting our gallery? We'd be happy to help"
      />

      {/* Map leads the page now, full width and much taller than the old
          sidebar thumbnail — framed in white like the studio photo on About. */}
      <div className="mt-12 overflow-hidden rounded-none border-[5px] border-white shadow-xl">
        <iframe
          title="Satori Art Gallery location"
          src={MAP_EMBED_SRC}
          loading="lazy"
          className="block h-[320px] w-full sm:h-[400px] lg:h-[520px]"
        />
      </div>

      {/* One responsive grid rather than the previous separate desktop and
          mobile blocks: those rendered ContactForm twice into the same page
          and had already drifted apart (the mobile copy showed a different
          email address as plain text). Stacks on small screens, two columns
          from lg up. */}
      <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
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
              <p>
                <a
                  href="mailto:andreasbussat16@gmail.com"
                  className="hover:text-accent"
                >
                  andreasbussat16@gmail.com
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
        </div>
      </div>
    </Container>
  );
}
