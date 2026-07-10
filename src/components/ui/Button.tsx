import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "dark" | "light";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent";

const variants: Record<Variant, string> = {
  // Ink CTA on light surfaces
  primary: "bg-text text-background hover:bg-ink-soft",
  // Ghost / outline on light surfaces
  outline: "border border-text text-text hover:bg-text hover:text-background",
  // Solid dark (kept for API compatibility)
  dark: "bg-text text-background hover:bg-ink-soft",
  // Light CTA for dark sections (Hero, Newsletter)
  light: "bg-primary text-text hover:bg-primary-hover",
};

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
