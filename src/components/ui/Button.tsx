import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "dark";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8a5a3c]";

const variants: Record<Variant, string> = {
  primary: "bg-[#8a5a3c] text-white hover:bg-[#6f452d]",
  outline:
    "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white",
  dark: "bg-neutral-900 text-white hover:bg-neutral-700",
};

// Reusable pill button. Renders a Next.js <Link> when `href` is given,
// otherwise a native <button>.
export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
