export type Product = {
  id: string;
  title: string;
  artist: string;
  price: number; // in euros
  medium: string;
  soldOut?: boolean;
};

// Placeholder catalogue for the "New Arrivals" grid.
export const products: Product[] = [
  {
    id: "morning-light-rue-cler",
    title: "Morning Light on Rue Cler",
    artist: "Élise Moreau",
    price: 300,
    medium: "Oil on canvas",
  },
  {
    id: "seine-reflections-blue",
    title: "Seine Reflections in Blue",
    artist: "Marco Bellini",
    price: 450,
    medium: "Oil on canvas",
  },
  {
    id: "cafe-terrace-le-marais",
    title: "Café Terrace, Le Marais",
    artist: "Camille Laurent",
    price: 1200,
    medium: "Oil on canvas",
  },
  {
    id: "lovers-beneath-umbrella",
    title: "Lovers Beneath the Umbrella",
    artist: "Théo Blanc",
    price: 400,
    medium: "Watercolor",
  },
  {
    id: "rooftops-of-montmartre",
    title: "Rooftops of Montmartre",
    artist: "Sofia Ricci",
    price: 680,
    medium: "Oil on canvas",
  },
  {
    id: "still-life-espresso",
    title: "Still Life with Espresso",
    artist: "Dino Costa",
    price: 300,
    medium: "Coffee on paper",
  },
  {
    id: "abstract-boulevard-no-4",
    title: "Abstract Boulevard No. 4",
    artist: "Ana Fischer",
    price: 520,
    medium: "Acrylic on canvas",
  },
  {
    id: "the-little-bakery",
    title: "The Little Bakery",
    artist: "Luc Girard",
    price: 350,
    medium: "Oil on canvas",
    soldOut: true,
  },
];
