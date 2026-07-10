export type Collection = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export const collections: Collection[] = [
  {
    id: "rice-terraces-landscapes",
    title: "Rice Terraces & Landscapes",
    description: "The emerald terraces and volcanoes of Bali, rendered in light and colour.",
    href: "/gallery#paintings",
  },
  {
    id: "ceremony-daily-life",
    title: "Ceremony & Daily Life",
    description: "Offerings, temple processions, and quiet moments of island life.",
    href: "/gallery#paintings",
  },
  {
    id: "still-life",
    title: "Still Life",
    description: "Frangipani, fruit, and the everyday objects of a Balinese home.",
    href: "/gallery#paintings",
  },
  {
    id: "abstract",
    title: "Abstract",
    description: "Bold colour and form for the contemporary collector.",
    href: "/gallery#paintings",
  },
  {
    id: "wildlife-nature",
    title: "Wildlife & Nature",
    description: "Birds, jungle, and the creatures that share the island.",
    href: "/gallery#paintings",
  },
];
