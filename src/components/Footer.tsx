import Link from "next/link";

type FooterLink = { label: string; href: string };

const shopLinks: FooterLink[] = [
  { label: "Original Paintings", href: "/original-paintings" },
  { label: "Artists", href: "/artists" },
  { label: "Visit Us", href: "/visit-us" },
  { label: "Blog", href: "/blog" },
];

const infoLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Refund Policy", href: "/policies/refund" },
  { label: "Shipping Policy", href: "/policies/shipping" },
  { label: "Terms of Service", href: "/policies/terms" },
  { label: "Terms of Sale", href: "/policies/terms-of-sale" },
];

const payments = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "Klarna",
  "Apple Pay",
  "Shop Pay",
  "CB",
];

function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-neutral-600 transition-colors hover:text-[#8a5a3c]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-[1320px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold text-neutral-900">
                La Chocolaterie
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.35em] text-[#8a5a3c]">
                Art Gallery
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-600">
              Original paintings from our Paris studio, carefully shipped
              worldwide.
            </p>
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Information" links={infoLinks} />

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900">
              Visit Us
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-neutral-600">
              <p>
                64 Rue Saint-Louis en l’Île,
                <br />
                75004 Paris
              </p>
              <p>
                <a
                  href="mailto:contact@lachocolaterieartgallery.com"
                  className="transition-colors hover:text-[#8a5a3c]"
                >
                  contact@lachocolaterieartgallery.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+33786958055"
                  className="transition-colors hover:text-[#8a5a3c]"
                >
                  07 86 95 80 55
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-[#8a5a3c]"
                >
                  Instagram
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-neutral-200 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-neutral-500">
            © 2026, La Chocolaterie Art Gallery
          </p>
          <div className="flex flex-wrap gap-2">
            {payments.map((p) => (
              <span
                key={p}
                className="rounded border border-neutral-200 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-neutral-500"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
