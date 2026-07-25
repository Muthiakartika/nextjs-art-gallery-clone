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
 * Array berisi 16 produk perhiasan perak (lihat jumlah gambar di /img/silver/).
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
 *
 * ====================================================================
 * CARA GANTI/TUKAR GAMBAR SECARA MANUAL (PENTING — baca sebelum edit!)
 * ====================================================================
 * Gambar yang tampil untuk tiap produk itu DITENTUKAN DARI POSISI
 * (urutan ke berapa) produk itu di array ini, BUKAN dari id/title-nya.
 * Lihat ProductCard.tsx: produk di posisi ke-N otomatis memakai file
 * "silver jewelry image N.png". Karena itu ADA 2 cara berbeda untuk
 * "mengubah gambar", tergantung apa yang mau diubah:
 *
 * 1) Mau TUKAR FOTO yang tampil di slot tertentu, tapi title/harga
 *    produk di slot itu TETAP sama → jangan sentuh array ini sama
 *    sekali. Cukup RENAME file-nya langsung di folder
 *    public/img/silver/. Contoh: supaya slot ke-4 menampilkan foto
 *    yang sekarang ada di "image 8.png", tukar nama filenya:
 *      "silver jewelry image 4.png" → sementara jadi nama lain
 *      "silver jewelry image 8.png" → jadi "silver jewelry image 4.png"
 *      nama sementara tadi → jadi "silver jewelry image 8.png"
 *    (pakai nama sementara supaya tidak saling menimpa saat rename)
 *
 * 2) Mau produk (title/harga) PINDAH POSISI, dan foto ikut produk itu
 *    → potong-tempel seluruh blok `{ id, title, ... }` produk ke posisi
 *    baru di array ini. Tapi hati-hati: begitu sebuah produk pindah
 *    posisi, dia otomatis "mewarisi" foto milik posisi barunya (karena
 *    foto = posisi, bukan = produk) — jadi title bisa jadi tidak
 *    nyambung lagi sama fotonya kecuali file gambar juga ditata ulang.
 *    Untuk kasus paling umum (cuma mau urutan foto berubah, title tetap
 *    di tempatnya), cara (1) di atas jauh lebih aman dan tidak akan
 *    pernah salah pasang title.
 *
 * 3) Mau HAPUS satu produk dari tampilan → hapus blok `{...}` produknya
 *    dari array ini, LALU rename ulang file gambar supaya nomornya
 *    tetap berurutan 1..N tanpa bolong (N = jumlah produk yang tersisa).
 *    Kalau nomornya dibiarkan bolong (misalnya cuma ada 1,2,3,5,6 tanpa
 *    4), produk-produk setelah yang bolong itu akan salah ambil gambar.
 *    Setelah rename gambar, WAJIB jalankan `npm run build` ulang supaya
 *    perubahannya kelihatan (lihat catatan Windows di CLAUDE.md).
 */
// Urutan array ini SUDAH disusun ulang sesuai revisi (posisi
// 1,2,3,8,4,5,6,7,9,10,11,16,13,14,15,12 dari urutan asli) — title, harga,
// DAN foto ikut pindah bersama sebagai satu paket (karena file gambar di
// public/img/silver/ juga sudah di-rename dengan permutasi yang sama, jadi
// tiap produk tetap dapat foto aslinya sendiri, cuma posisi tampilnya yang
// berubah). Jangan cuma reorder array ini tanpa cek ulang file gambarnya
// juga sudah sesuai — lihat komentar cara manual di atas.
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
    id: "woven-silver-bangle",
    title: "Woven Silver Bangle",
    artist: "Satori Art Gallery",
    price: 185,
    medium: "Sterling Silver",
  },
  {
    id: "pearl-pendant-necklace",
    title: "Pearl Pendant Necklace",
    artist: "Satori Art Gallery",
    price: 110,
    medium: "Sterling Silver",
  },
  {
    id: "hammered-hoop-earrings",
    title: "Hammered Hoop Earrings",
    artist: "Satori Art Gallery",
    price: 140,
    medium: "Sterling Silver",
    soldOut: true,
  },
  {
    id: "layered-chain-bracelet ",
    title: "Layered Chain Bracelet",
    artist: "Satori Art Gallery",
    price: 135,
    medium: "Sterling Silver",
  },
  {
    id: "minimalist-band-ring",
    title: " Minimalist Band",
    artist: "Satori Art Gallery",
    price: 155,
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
    id: "sculptural-silver-earrings",
    title: "Sculptural Silver Earrings",
    artist: "Satori Art Gallery",
    price: 85,
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
    price: 190,
    medium: "Sterling Silver",
  },
];

// DATA PRODUK HANDCRAFT — array berisi 12 produk (lihat gambar 1-12 di
// public/img/handcraft/). Aturan gambar-berdasarkan-posisi dan cara
// tukar/hapus gambar secara manual SAMA seperti silverJewelry di atas —
// baca komentar panjang di atas array silverJewelry sebelum edit.
// "artisan-craft-collection" (dulu memakai gambar 8) sudah dihapus dari
// daftar tampil; foto aslinya diarsipkan sebagai "handcraft image 8
// (unused).png", bukan dihapus permanen.
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
    id: "elephant-candle-holder",
    title: "Elephant Candle Holder",
    artist: "Satori Art Gallery",
    price: 110,
    medium: "Metal Craft",
  },
  // "artisan-craft-collection" (dulu di sini, pakai gambar 8) sengaja
  // dihapus dari daftar tampil sesuai permintaan. Foto aslinya masih ada,
  // diarsipkan sebagai "handcraft image 8 (unused).png" di
  // public/img/handcraft/ — bukan dihapus permanen, cuma tidak dipakai.
  {
    id: "shell-tribal-doll",
    title: "Shell Tribal Doll",
    artist: "Satori Art Gallery",
    price: 140,
    medium: "Natural Shell & Wood",
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
    price: 120,
    medium: "Handmade Crafts",
  },

  {
    id: "artisan-gallery-display",
    title: "Artisan Gallery Display",
    artist: "Satori Art Gallery",
    price: 320,
    medium: "Mixed Handmade Crafts",
  },
];

// Three shop categories shown on the Gallery page, each with its own
// title, description, and set of dummy items.
export const galleryCategories: GalleryCategory[] = [
  {
    id: "paintings",
    title: "Paintings",
    description:
      "Original paintings by local and international artists across a wide range of artistic styles.",
    items: products,
  },
  {
    id: "silver-jewelry",
    title: "Silver Jewelry",
    description:
      "High quality sterling silver jewellery crafted in Bali with modern and classic designs.",
    items: silverJewelry,
  },
  {
    id: "handcraft",
    title: "Handcraft",
    description:
      "Handmade Balinese crafts created by local artisans using traditional techniques.",
    items: handcraft,
  },
];
