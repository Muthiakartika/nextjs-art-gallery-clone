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

const socialLinks: FooterLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/satoriartgallery/" },
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => {
          // External links (social media, etc.) open in a new tab; internal
          // nav links use normal same-tab client-side navigation.
          const isExternal = link.href.startsWith("http");
          return (
            <li key={link.label}>
              <Link
                href={link.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="text-sm text-text-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Footer is rendered globally from the Root Layout, so it appears on every
// page automatically instead of being imported into each page individually.
// Per the latest revision: Main Navigation / Contact Information /
// Social Media / Copyright only — no map here (the map lives on the
// Contact Us page, see src/app/contact-us/page.tsx).
export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-10 sm:py-12 lg:py-16">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: brand mark + short description. */}
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold text-text">Satori</span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.35em] text-accent">
                Art Gallery
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
            Original paintings, sterling silver jewelry, and handmade Balinese crafts from our gallery in Seminyak, Bali.

            </p>
          </div>

          {/* Column 2: reuses the same NAV_ITEMS as the navbar, so the
              footer menu can never drift out of sync with the real nav. */}
          <FooterColumn title="Main Navigation" links={NAV_ITEMS} />

          {/* Column 3: contact details (no Instagram here — see the
              separate Social Media column). */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-text">
              Contact Information
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
                <a href="tel:+6289508117898" className="transition-colors hover:text-accent">
                  +62 895 0811 7898
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
            </address>
          </div>

          {/* Column 4: social media. */}
          <FooterColumn title="Social Media" links={socialLinks} />
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-border pt-8 sm:mt-12 sm:gap-6 md:flex-row md:items-center md:justify-between">
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
