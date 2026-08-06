import { WHATSAPP_URL } from "@/components/navbar/navItems";
import { WhatsAppIcon } from "@/components/ui/icons";

// Opening line so the gallery can tell a floating-button tap apart from a
// contact-form submission — the visitor can overwrite it before sending.
const GREETING = "Hi Satori Art Gallery! I'd like to ask about your artwork.";

// Rendered once from the Root Layout, so it follows the visitor across every
// page. Unlike the contact form, this doesn't collect anything first — it
// opens the chat straight away.
export default function WhatsAppFloat() {
  return (
    <a
      href={`${WHATSAPP_URL}?text=${encodeURIComponent(GREETING)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      // WhatsApp's own green rather than a palette token: this is a brand
      // affordance people recognise at a glance, and a cream/ink button
      // blending into the page would defeat the point of a floating CTA.
      // z-40 keeps it under the navbar (z-50) and the mobile drawer.
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
