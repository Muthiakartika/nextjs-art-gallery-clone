// Formats a euro amount as "€1.200,00" (dot thousands, comma decimals).
// Implemented manually so server and client render identically (no ICU/locale drift).
export function formatPrice(euros: number): string {
  const [intPart, decPart = "00"] = euros.toFixed(2).split(".");
  const withThousands = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `€${withThousands},${decPart}`;
}
