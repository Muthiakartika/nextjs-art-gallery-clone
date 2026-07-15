import { products, type Product } from "@/data/products";

export type GalleryCategory = {
  id: string;
  title: string;
  description: string;
  items: Product[];
};

/**
 * DATA PRODUK SILVER JEWELRY
 * ========================
 * Array berisi 14 produk perhiasan perak (lihat jumlah gambar di /img/silver/).
 *
 * Struktur setiap produk:
 * - id: Unique identifier (lowercase, kebab-case)
 * - title: Nama produk yang ditampilkan
 * - artist: Nama pembuat/artisan yang membuat produk
 * - price: Harga dalam Euro
 * - medium: Material/medium yang digunakan (Sterling Silver, Gemstone, dll)
 * - soldOut?: Opsional - tandai true jika produk habis terjual
 *
 * Catatan: Jumlah produk HARUS sesuai dengan jumlah file gambar di /img/silver/
 * Saat ini ada 14 file (gambar 1-6, 9-16 - gambar 7 & 8 tidak ada)
 */
const silverJewelry: Product[] = [
  {
    id: "celestial-stacking-ring",
    title: "Celestial Stacking Ring",
    artist: "Satori Art Gallery",
    price: 120,
    medium: "Sterling Silver",
  },
  {
    id: "lotus-pearl-necklace",
    title: "Lotus Pearl Necklace",
    artist: "Satori Art Gallery",
    price: 95,
    medium: "Sterling Silver",
  },
  {
    id: "interlocking-chain-necklace",
    title: "Interlocking Chain Necklace",
    artist: "Satori Art Gallery",
    price: 165,
    medium: "Sterling Silver",
  },
  {
    id: "layered-chain-bracelet",
    title: "Layered Chain Bracelet",
    artist: "Satori Art Gallery",
    price: 140,
    medium: "Sterling Silver",
    soldOut: true,
  },
  {
    id: "minimalist-band-ring",
    title: "Minimalist Band Ring",
    artist: "Satori Art Gallery",
    price: 135,
    medium: "Sterling Silver",
  },
  {
    id: "woven-silver-bangle",
    title: "Woven Silver Bangle",
    artist: "Satori Art Gallery",
    price: 155,
    medium: "Sterling Silver",
  },
  {
    id: "pearl-pendant-necklace",
    title: "Pearl Pendant Necklace",
    artist: "Satori Art Gallery",
    price: 185,
    medium: "Sterling Silver",
  },
  {
    id: "hammered-hoop-earrings",
    title: "Hammered Hoop Earrings",
    artist: "Satori Art Gallery",
    price: 110,
    medium: "Sterling Silver",
  },
  {
    id: "twisted-stack-rings",
    title: "Twisted Stack Rings",
    artist: "Satori Art Gallery",
    price: 145,
    medium: "Sterling Silver",
  },
  {
    id: "modern-hoop-earrings",
    title: "Modern Hoop Earrings",
    artist: "Satori Art Gallery",
    price: 170,
    medium: "Sterling Silver",
  },
  {
    id: "minimal-chain-anklet",
    title: "Minimal Chain Anklet",
    artist: "Satori Art Gallery",
    price: 195,
    medium: "Sterling Silver",
  },
  {
    id: "pearl-sunburst-necklace",
    title: "Pearl Sunburst Necklace",
    artist: "Satori Art Gallery",
    price: 160,
    medium: "Sterling Silver",
  },
  {
    id: "blue-crystal-ring",
    title: "Blue Crystal Ring",
    artist: "Satori Art Gallery",
    price: 150,
    medium: "Sterling Silver",
  },
  {
    id: "woven-silver-ring",
    title: "Woven Silver Ring",
    artist: "Satori Art Gallery",
    price: 175,
    medium: "Sterling Silver",
  },
  {
    id: "textured-dome-ring",
    title: "Textured Dome Ring",
    artist: "Satori Art Gallery",
    price: 85,
    medium: "Sterling Silver",
  },
  {
    id: "sculptural-silver-earrings",
    title: "Sculptural Silver Earrings",
    artist: "Satori Art Gallery",
    price: 190,
    medium: "Sterling Silver",
  },
];

const handcraft: Product[] = [
  {
    id: "balinese-couple-sculpture",
    title: "Balinese Couple Sculpture",
    artist: "Satori Art Gallery",
    price: 280,
    medium: "Hand-Carved Wood",
  },
  {
    id: "decorative-elephant-figure",
    title: "Decorative Elephant Figure",
    artist: "Satori Art Gallery",
    price: 210,
    medium: "Hand-Carved Wood",
  },
  {
    id: "ganesha-statue",
    title: "Ganesha Statue",
    artist: "Satori Art Gallery",
    price: 165,
    medium: "Cast Bronze",
  },
  {
    id: "guardian-mask-sculptures",
    title: "Guardian Mask Sculptures",
    artist: "Satori Art Gallery",
    price: 95,
    medium: "Decorative Resin",
  },
  {
    id: "buddha-head-sculpture",
    title: "Buddha Head Sculpture",
    artist: "Satori Art Gallery",
    price: 185,
    medium: "Stone Finish Resin",
  },
  {
    id: "balinese-goddess-sculpture",
    title: "Balinese Goddess Sculpture",
    artist: "Satori Art Gallery",
    price: 120,
    medium: "Hand-Carved Wood",
  },
  {
    id: "artisan-gallery-display",
    title: "Artisan Gallery Display",
    artist: "Satori Art Gallery",
    price: 320,
    medium: "Mixed Handmade Crafts",
  },
  {
    id: "artisan-craft-collection",
    title: "Artisan Craft Collection",
    artist: "Satori Art Gallery",
    price: 95,
    medium: "Mixed Handmade Crafts",
  },
  {
    id: "shell-tribal-doll",
    title: "Shell Tribal Doll",
    artist: "Satori Art Gallery",
    price: 140,
    medium: "Natural Shell & Wood",
  },
  {
    id: "decorative-lotus-candle-holder",
    title: "Decorative Lotus Candle Holder",
    artist: "Satori Art Gallery",
    price: 110,
    medium: "Metal Craft",
  },
  {
    id: "golden-buddha-head",
    title: "Golden Buddha Head",
    artist: "Satori Art Gallery",
    price: 155,
    medium: "Decorative Resin",
  },
  {
    id: "garuda-warrior-sculpture",
    title: "Garuda Warrior Sculpture",
    artist: "Satori Art Gallery",
    price: 75,
    medium: "Cast Metal",
  },
  {
    id: "feather-wall-decoration",
    title: "Feather Wall Decoration",
    artist: "Satori Art Gallery",
    price: 245,
    medium: "Natural Feathers & Shell",
  },
];

// Three shop categories shown on the Gallery page, each with its own
// title, description, and set of dummy items.
export const galleryCategories: GalleryCategory[] = [
  {
    id: "paintings",
    title: "Paintings",
    description:
      "Original works on canvas and paper from painters working in our Seminyak studio.",
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
