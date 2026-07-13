import Link from "next/link";
import { NAV_ITEMS } from "@/components/navbar/navItems";
import Container from "@/components/ui/Container";

type FooterLink = { label: string; href: string };

const payments = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "Klarna",
  "Apple Pay",
  "Shop Pay",
  "QRIS",
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Footer is rendered globally from the Root Layout, so it appears on every
// page automatically instead of being imported into each page individually.
export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        {/* Last column ("Location") sizes to its own content instead of
            sharing an equal 1/4 share, so the ~320px map keeps its real
            width instead of being squeezed by the grid. */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto]">
          {/* Column 1: brand mark + short description. */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold text-text">Satori</span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.35em] text-accent">
                Art Gallery
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Original paintings, silver jewelry, and handcraft from our Ubud
              studio, carefully shipped worldwide.
            </p>
          </div>

          {/* Column 2: reuses the same NAV_ITEMS as the navbar, so the
              footer menu can never drift out of sync with the real nav. */}
          <FooterColumn title="Main Menu" links={NAV_ITEMS} />

          {/* Column 3: studio contact details. */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text">
              Contact Info
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-text-secondary">
              <p>
                 Jl. Kayu Aya (Oberoi), Seminyak,
                <br />
                Kerobokan Kelod, Kut Utara,, 
                <br />
                Seminyak, Kec. Kuta, Kabupaten Badung, Bali 80361
              </p>
              <p>
                <a href="tel:+62361123456" className="transition-colors hover:text-accent">
                  +62 361 123 456
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@satoriartgallery.com"
                  className="transition-colors hover:text-accent"
                >
                  hello@satoriartgallery.com
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/satoriartgallery/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  Instagram
                </a>
              </p>
            </address>
          </div>

          {/* Column 4: small map so visitors can find the studio at a glance. */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text">
              Location
            </h3>
            <div className="mt-4 h-[220px] w-[320px] max-w-full overflow-hidden border border-border">
              <iframe
                title="Satori Art Gallery location — Seminyak, Bali"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.0817965833585!2d115.16334820000002!3d-8.6837716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247178ea84809%3A0x96774c2eed17cb61!2sSatori!5e0!3m2!1sen!2sid!4v1783916501340!5m2!1sen!2sid"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()}, Satori Art Gallery
          </p>
          {/* <div className="flex flex-wrap gap-2">
            {payments.map((p) => (
              <span
                key={p}
                className="rounded border border-border px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-muted"
              >
                {p}
              </span>
            ))}
          </div> */}
        </div>
      </Container>
    </footer>
  );
}
