import type { ReactNode } from "react";

// Shared container used across every section.
// Centered, ~1320px max width, with responsive horizontal padding, so every
// section (and the Footer) lines up to the exact same left/right edges.
export default function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
