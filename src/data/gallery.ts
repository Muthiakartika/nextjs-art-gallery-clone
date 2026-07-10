import { products, type Product } from "@/data/products";

export type GalleryCategory = {
  id: string;
  title: string;
  description: string;
  items: Product[];
};

const silverJewelry: Product[] = [
  {
    id: "moon-phase-ring",
    title: "Moon Phase Ring",
    artist: "Kadek Wirawan",
    price: 120,
    medium: "Sterling Silver",
  },
  {
    id: "lotus-drop-earrings",
    title: "Lotus Drop Earrings",
    artist: "Ni Luh Ariani",
    price: 95,
    medium: "Sterling Silver & Moonstone",
  },
  {
    id: "celuk-filigree-bracelet",
    title: "Celuk Filigree Bracelet",
    artist: "Made Suryawan",
    price: 165,
    medium: "Sterling Silver",
  },
  {
    id: "frangipani-pendant",
    title: "Frangipani Pendant Necklace",
    artist: "Kadek Wirawan",
    price: 140,
    medium: "Sterling Silver & Pearl",
    soldOut: true,
  },
];

const handcraft: Product[] = [
  {
    id: "hand-carved-garuda",
    title: "Hand-Carved Garuda Panel",
    artist: "Nyoman Suarta",
    price: 280,
    medium: "Carved Suar Wood",
  },
  {
    id: "ikat-wall-hanging",
    title: "Ikat Woven Wall Hanging",
    artist: "Wayan Sekar",
    price: 210,
    medium: "Handwoven Cotton Ikat",
  },
  {
    id: "rattan-pendant-lamp",
    title: "Rattan Pendant Lamp",
    artist: "Komang Adi",
    price: 165,
    medium: "Woven Rattan",
  },
  {
    id: "bamboo-tea-set",
    title: "Bamboo & Ceramic Tea Set",
    artist: "Made Rai",
    price: 95,
    medium: "Bamboo & Ceramic",
  },
];

// Three shop categories shown on the Gallery page, each with its own
// title, description, and set of dummy items.
export const galleryCategories: GalleryCategory[] = [
  {
    id: "paintings",
    title: "Paintings",
    description:
      "Original works on canvas and paper from painters working in our Ubud studio.",
    items: products,
  },
  {
    id: "silver-jewelry",
    title: "Silver Jewelry",
    description:
      "Hand-forged sterling silver, rooted in the centuries-old silversmithing tradition of Celuk village.",
    items: silverJewelry,
  },
  {
    id: "handcraft",
    title: "Handcraft",
    description:
      "Woodcarving, weaving, and other handmade objects crafted by local Balinese artisans.",
    items: handcraft,
  },
];
