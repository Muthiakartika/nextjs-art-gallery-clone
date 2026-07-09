import type { ReactNode } from "react";

// Single shared page wrapper: centered, ~1320px max width, responsive gutters.
// Used by every section so they all line up to the same width.
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
