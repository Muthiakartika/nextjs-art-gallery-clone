# 📚 DOKUMENTASI INTEGRASI GAMBAR REAL KE SATORI ART GALLERY

## 📋 Daftar Isi
1. [Gambaran Umum](#gambaran-umum)
2. [Struktur Folder Gambar](#struktur-folder-gambar)
3. [Komponen yang Diubah](#komponen-yang-diubah)
4. [Data Produk](#data-produk)
5. [Proses Step-by-Step](#proses-step-by-step)
6. [Cara Kerja Setiap Bagian](#cara-kerja-setiap-bagian)
7. [Tips & Troubleshooting](#tips--troubleshooting)

---

## 🎯 Gambaran Umum

Proyek ini telah diintegrasikan dengan **gambar real** untuk menampilkan produk dan koleksi. Sebelumnya, website menggunakan gambar dummy/placeholder yang di-generate secara otomatis. Kini, semua gambar dimuat dari folder `/public/img/` dengan struktur yang terorganisir per kategori.

### Status Akhir:
- ✅ **Paintings**: 23 produk dengan 23 gambar
- ✅ **Silver Jewelry**: 16 produk dengan 16 gambar
- ✅ **Handcraft**: 12 produk dengan 12 gambar
- ✅ **Hero Section**: 4 gambar slideshow (painting, craft, silver, shop)
- ✅ **Collection Cards**: 3 kartu kategori, masing-masing pakai 1 gambar tetap dari folder hero
- ✅ **About Page**: 1 gambar studio

---

## 📁 Struktur Folder Gambar

### Lokasi Utama: `/public/img/`

```
public/img/
├── about/
│   └── abaout us image.jpg          (1 gambar studio — nama file ada typo "abaout", sengaja dibiarkan)
├── hero/
│   ├── hero painting 1.jpg          (Dipakai di Hero slideshow)
│   ├── hero painting 2.jpg          (Dipakai di Collections, kartu Paintings — bukan di Hero)
│   ├── hero silver 1.jpg            (Dipakai di Hero slideshow & Collections)
│   ├── hero craft  1.jpg            (Dipakai di Hero slideshow & Collections — ada 2 spasi sebelum "1")
│   ├── shop image 1.jpg             (Belum dipakai di kode manapun)
│   ├── shop image 2.jpg             (Belum dipakai di kode manapun)
│   └── shop image 3.jpg             (Dipakai di Hero slideshow, slide ke-4)
├── painting/
│   ├── painting images 1.png        (23 file gambar dipakai)
│   ├── painting images 2.png
│   ├── ... hingga painting images 23.png
│   └── painting images 16 (2).png   (file duplikat, tidak dipakai)
├── silver/
│   ├── silver jewelry image 1.png   (16 file gambar, lengkap 1-16 tanpa bolong)
│   ├── silver jewelry image 2.png
│   └── ... hingga silver jewelry image 16.png
└── handcraft/
    ├── handcraft image 1.png        (12 file gambar dipakai)
    ├── handcraft image 2.png
    ├── ... hingga handcraft image 12.png
    └── handcraft image 8 (unused).png  (diarsipkan, sengaja tidak dipakai)
```

### Catatan Penting:
- Semua 16 gambar silver jewelry sudah lengkap (1-16, tidak ada yang bolong)
- Jika ada file tambahan, tambahkan dengan nama sesuai pola dan nomor urut berikutnya
- Semua file menggunakan format PNG kecuali hero section (JPG)
- Ada beberapa file "cadangan"/tidak terpakai di folder (`(unused)`, `(2)`, atau file `shop image` yang belum dipasang) — sengaja dibiarkan sebagai arsip, bukan bug

---

## 🔧 Komponen yang Diubah

### 1. ProductCard.tsx
**Lokasi**: `src/components/ProductCard.tsx`

**Perubahan Utama**:
- Mengganti `Placeholder` component dengan `Image` dari Next.js
- Menggunakan gambar real dari folder `/img/{category}/`
- Menghapus badge "Sold Out"

**Cara Kerja**:
```typescript
// Mapping kategori ke folder dan pola nama file
const CATEGORY_IMAGE_MAP = {
  paintings: { folder: "painting", pattern: "painting images" },
  "silver-jewelry": { folder: "silver", pattern: "silver jewelry image" },
  handcraft: { folder: "handcraft", pattern: "handcraft image" },
};

// Contoh: untuk produk ke-5 (index=4) di kategori paintings
// Hasilnya: "/img/painting/painting images 5.png"
const imagePath = `/img/${categoryMap.folder}/${categoryMap.pattern} ${imageNum}.png`;
```

**Props yang Digunakan**:
- `product`: Object berisi data produk (title, artist, medium, harga)
- `index`: Nomor urut produk (0-based, akan dikonversi ke 1-based untuk nama file)
- `category`: Slug kategori (paintings, silver-jewelry, handcraft)

---

### 2. Hero.tsx
**Lokasi**: `src/components/Hero.tsx`

**Perubahan Utama**:
- Mengganti dummy image seeds dengan array gambar real
- 4 gambar hero untuk slideshow

**Cara Kerja**:
```typescript
// Array berisi 4 gambar hero yang akan diputar
const HERO_IMAGES = [
  { src: "/img/hero/hero painting 1.jpg", alt: "Painting Collection" },
  { src: "/img/hero/hero craft  1.jpg", alt: "Craft Collection" },
  { src: "/img/hero/hero silver 1.jpg", alt: "Silver Collection" },
  { src: "/img/hero/shop image 3.jpg", alt: "Shop Image with Statue Collection" },
];

// Siklus: 4 gambar × 6 detik = 24 detik per putaran lengkap
// (dihitung otomatis dari HERO_IMAGES.length, jadi selalu ikut kalau jumlah slide berubah)
const CYCLE_SECONDS = HERO_IMAGES.length * 6;
```

**Animasi CSS**:
- Setiap gambar tampil 6 detik
- Transisi smooth menggunakan crossfade + zoom effect
- Diatur via CSS keyframes di `globals.css` (heroFade, heroZoom)

---

### 3. CollectionCard.tsx
**Lokasi**: `src/components/CollectionCard.tsx`

**Perubahan Utama**:
- Mengganti `Placeholder` dengan `Image` dari Next.js
- Menggunakan gambar hero sesuai kategori
- Aspect ratio: 16:9 (video)

**Cara Kerja**:
```typescript
// Map kategori ke gambar hero (paintings sengaja pakai foto ke-2 supaya
// beda dari slide pertama Hero, biar tidak terasa mengulang gambar yang sama)
const COLLECTION_IMAGE_MAP = {
  paintings: "/img/hero/hero painting 2.jpg",
  "silver-jewelry": "/img/hero/hero silver 1.jpg",
  handcraft: "/img/hero/hero craft  1.jpg",
};

// Gradient overlay untuk readability teks
<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
```

---

### 4. About Page
**Lokasi**: `src/app/about/page.tsx`

**Perubahan Utama**:
- Mengganti `Placeholder` dengan `Image` real
- Gambar studio dari `/img/about/`
- Aspect ratio: 16:9 (landscape)

**Implementasi**:
```typescript
<Image
  src="/img/about/abaout us image.jpg"
  alt="Our Studio in Ubud"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
  priority  // Load prioritas di halaman About
/>
```

---

## 📊 Data Produk

### File yang Diubah
- `src/data/products.ts` - Data paintings (23 produk)
- `src/data/gallery.ts` - Data silver jewelry (16) & handcraft (12)

### Struktur Data Product
```typescript
type Product = {
  id: string;           // Unique ID, lowercase kebab-case
  title: string;        // Nama produk yang ditampilkan
  artist: string;       // Nama pembuat
  price: number;        // Harga dalam Euro
  medium: string;       // Material/teknik (Oil on canvas, Sterling Silver, dll)
  soldOut?: boolean;    // Opsional, jika produk habis terjual
};
```

### Contoh Data Silver Jewelry
```typescript
{
  id: "celestial-stacking-ring",
  title: "Celestial Stacking Ring",
  artist: "Satori Art Gallery",
  price: 120,
  medium: "Sterling Silver",
}
```

### Daftar Lengkap Produk Silver Jewelry (16):
1. Celestial Stacking Ring
2. Lotus Pearl Necklace
3. Interlocking Chain Necklace
4. Woven Silver Bangle
5. Pearl Pendant Necklace
6. Hammered Hoop Earrings
7. Layered Chain Bracelet
8. Minimalist Band
9. Twisted Stack Rings
10. Modern Hoop Earrings
11. Minimal Chain Anklet
12. Sculptural Silver Earrings
13. Pearl Sunburst Necklace
14. Blue Crystal Ring
15. Woven Silver Ring
16. Textured Dome Ring

---

## 📍 Proses Step-by-Step

### Step 1: Setup Folder Gambar
1. Buat folder `/public/img/` jika belum ada
2. Buat subfolder: `about`, `hero`, `painting`, `silver`, `handcraft`
3. Upload/copy file gambar ke masing-masing folder dengan nama sesuai pola

### Step 2: Update ProductCard Component
1. Import `Image` dari `next/image`
2. Buat mapping CATEGORY_IMAGE_MAP untuk setiap kategori
3. Generate path gambar berdasarkan index dan kategori
4. Replace `Placeholder` dengan `Image` component

### Step 3: Update Hero Component
1. Buat array HERO_IMAGES dengan path ke gambar-gambar hero (saat ini 4)
2. Replace dummy image seeds dengan array baru
3. Adjust CYCLE_SECONDS jika jumlah gambar berubah

### Step 4: Update CollectionCard Component
1. Buat mapping COLLECTION_IMAGE_MAP untuk setiap kategori
2. Replace `Placeholder` dengan `Image` component
3. Gunakan aspect ratio yang sesuai (video 16:9)

### Step 5: Update About Page
1. Replace `Placeholder` dengan `Image` component
2. Set path ke gambar about
3. Add `priority` prop untuk load prioritas

### Step 6: Update Data
1. Tambah produk baru ke `products.ts` dan `gallery.ts`
2. Pastikan jumlah produk = jumlah gambar yang tersedia
3. Build & test

### Step 7: Build & Deploy
```bash
# Build untuk production
npm run build

# Test production build
npm run start

# Verifikasi semua gambar loading di setiap halaman
```

---

## 🔍 Cara Kerja Setiap Bagian

### A. Bagaimana Gambar Produk Ditampilkan

**Flow**:
1. User buka halaman `/products/paintings`
2. Component `ProductCategoryPage` render array produk dari `galleryCategories`
3. Untuk setiap produk, render `ProductCard` dengan props:
   - `product` = data produk
   - `index` = nomor urut (0-based)
   - `category` = "paintings"

**Di dalam ProductCard**:
```
index = 0 → imageNum = "1" → "/img/painting/painting images 1.png"
index = 1 → imageNum = "2" → "/img/painting/painting images 2.png"
...
index = 22 → imageNum = "23" → "/img/painting/painting images 23.png"
```

**Next.js Image Optimization**:
- Next.js otomatis mengoptimasi ukuran gambar per breakpoint
- Menggunakan `sizes` prop untuk responsive loading
- First 3 produk mendapat `priority={true}` untuk load cepat

---

### B. Bagaimana Hero Slideshow Bekerja

**Struktur HTML**:
```html
<section>
  <!-- Background image slideshow -->
  <div class="absolute inset-0 -z-10">
    <!-- 4 Image layers, semua absolute positioned -->
    <div class="hero-slide">
      <Image src="/img/hero/hero painting 1.jpg" />
    </div>
    <div class="hero-slide">
      <Image src="/img/hero/hero craft  1.jpg" />
    </div>
    <div class="hero-slide">
      <Image src="/img/hero/hero silver 1.jpg" />
    </div>
    <div class="hero-slide">
      <Image src="/img/hero/shop image 3.jpg" />
    </div>

    <!-- Dark overlay untuk readability teks -->
    <div class="absolute inset-0 bg-black/60" />
  </div>
  
  <!-- Text content di atas background -->
  <div class="text-center">
    <h1>Welcome to Satori Art Gallery</h1>
    <p>...</p>
  </div>
</section>
```

**Animasi CSS** (di `globals.css`, persentase di bawah mengasumsikan 4 slide — tiap slide kebagian 25% dari satu putaran):
```css
.hero-slide {
  opacity: 0;
  animation-name: heroFade;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  /* animation-duration & animation-delay diisi lewat inline style di Hero.tsx,
     beda-beda tiap slide, supaya urutan munculnya bergantian rapi */
}

@keyframes heroFade {
  0% { opacity: 0; }
  3% { opacity: 1; }
  22% { opacity: 1; }
  25% { opacity: 0; }
  100% { opacity: 0; }
}

.hero-slide-img {
  animation-name: heroZoom;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes heroZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.12); }
}
```

**Cara Kerjanya**:
- 4 layer gambar stack di atas satu sama lain (absolute positioned)
- Setiap layer punya delay berbeda (0s, 6s, 12s, 18s) — dihitung otomatis dari `i * (CYCLE_SECONDS / HERO_IMAGES.length)`
- Animasi: 24 detik per siklus (6s per gambar, karena ada 4 gambar)
- Gambar 1: Opacity 1 dari 0-6s, fade out di akhir slot itu
- Gambar 2: Opacity 1 dari 6-12s (dimulai saat gambar 1 fade out)
- Gambar 3: Opacity 1 dari 12-18s
- Gambar 4: Opacity 1 dari 18-24s
- Repeat... (kalau jumlah gambar di `HERO_IMAGES` berubah, keyframe `heroFade` di atas perlu disesuaikan lagi persentasenya: 100% dibagi jumlah gambar)

---

### C. Bagaimana Collection Cards Bekerja

**Flow**:
1. Component `Collections` render array `galleryCategories`
2. Untuk setiap kategori, render `CollectionCard`
3. CollectionCard mencari gambar hero sesuai category ID
4. Render dengan gradient overlay + text di atas gambar

**Responsive Grid**:
```css
/* 1 kolom di mobile */
grid-cols-1

/* 2 kolom di tablet (640px) */
sm:grid-cols-2

/* 3 kolom di desktop (1024px) */
lg:grid-cols-3
```

---

### D. Bagaimana Aspect Ratio Bekerja

**ProductCard**:
```css
aspect-[3/4]  /* Portrait ratio, seperti kartu */
/* Hasilnya: tinggi = 133.33% dari lebar */
```

**CollectionCard & About**:
```css
aspect-video  /* Landscape ratio 16:9 */
/* Hasilnya: tinggi = 56.25% dari lebar */
```

**Cara Kerja**:
- Menggunakan `aspect-ratio` CSS modern
- Container punya ukuran otomatis berdasarkan parent width
- Image fill container dengan `fill` prop (Next.js)
- `object-cover` ensures gambar tidak distorted

---

## 💡 Tips & Troubleshooting

### Q1: Gambar tidak tampil
**Kemungkinan penyebab**:
1. Nama file tidak sesuai pola → cek folder `/public/img/`
2. Path typo → pastikan nama folder dan pattern benar
3. File image corrupt → coba ganti file

**Solusi**:
```bash
# Cek struktur folder
ls -la public/img/painting/
ls -la public/img/silver/
ls -la public/img/handcraft/

# Rebuild
npm run build
npm run start
```

### Q2: Gambar loading lambat
**Solusi**:
1. Optimalkan ukuran file gambar (gunakan TinyPNG)
2. Gunakan format modern (WebP) - Next.js support otomatis
3. Pastikan `sizes` prop di `Image` component sesuai

### Q3: Gambar tidak responsive
**Solusi**:
- Pastikan `fill` prop ada pada `Image` component
- Tambahkan `sizes` prop dengan breakpoints yang tepat
- Gunakan `object-cover` atau `object-contain` sesuai kebutuhan

### Q4: Bagaimana menambah produk baru?
**Steps**:
1. Upload gambar ke folder yang sesuai dengan nama pola
2. Tambah object baru ke array di `products.ts` atau `gallery.ts`
3. Pastikan jumlah produk = jumlah gambar
4. Build: `npm run build`

**Contoh - Tambah painting baru**:
```typescript
// public/img/painting/painting images 24.png (file baru)

// Di src/data/products.ts, tambah ke array products[]
{
  id: "new-painting-id",
  title: "New Painting Title",
  artist: "Artist Name",
  price: 500,
  medium: "Oil on canvas",
}
// ProductCard otomatis akan render dengan gambar ke-24
```

### Q5: Bagaimana mengubah urutan produk?
**Solutions**:
1. Reorder array di `products.ts` atau `gallery.ts`
2. Atau reorder file gambar di folder (rename 1→1, 2→3, 3→2, dst)
3. Build & restart

### Q6: Bagaimana mengubah aspek ratio?
**Untuk ProductCard** (dari 3:4 ke 1:1):
```tsx
<div className="relative overflow-hidden rounded-none border-[3px] border-white aspect-square">
  {/* dari aspect-[3/4] → aspect-square (border-[3px] mengikuti ProductCard.tsx saat ini) */}
</div>
```

**Untuk Collection** (dari 16:9 ke 4:3):
```tsx
<div className="aspect-[4/3]">
  {/* dari aspect-video → aspect-[4/3] */}
</div>
```

---

## 📝 Checklist Implementasi

Jika ingin mengulang process ini atau menerapkan di project baru:

### Setup Awal
- [ ] Buat folder `/public/img/` dan subfolder
- [ ] Siapkan file gambar dengan naming sesuai pola
- [ ] Update `package.json` jika perlu dependencies baru

### Code Changes
- [ ] Update ProductCard.tsx
- [ ] Update Hero.tsx
- [ ] Update CollectionCard.tsx
- [ ] Update About page
- [ ] Update data di products.ts dan gallery.ts
- [ ] Hapus atau fix imports yang sudah tidak digunakan

### Testing
- [ ] Build: `npm run build` (check no errors)
- [ ] Start: `npm run start`
- [ ] Test homepage hero slideshow
- [ ] Test /products/paintings halaman
- [ ] Test /products/silver-jewelry halaman
- [ ] Test /products/handcraft halaman
- [ ] Test /about halaman
- [ ] Test /gallery halaman
- [ ] Test responsiveness (mobile, tablet, desktop)
- [ ] Check browser console for errors

### Production
- [ ] Optimize image sizes
- [ ] Setup CDN if needed (optional)
- [ ] Deploy to production
- [ ] Monitor performance

---

## 🎓 Kesimpulan

Integrasi gambar real ini membuat website lebih terlihat professional dan authentic. Setiap gambar dimuat dari folder terstruktur, memudahkan update dan maintenance. Gunakan dokumentasi ini sebagai referensi saat:
- Menambah produk baru
- Mengubah struktur halaman
- Troubleshooting masalah gambar
- Belajar cara kerja image optimization di Next.js

Semua comment dalam code membantu pemahaman mendalam tentang setiap bagian yang bekerja.

---

**Dibuat**: 2026-07-15  
**Last Updated**: 2026-07-25 (angka, contoh kode, dan daftar produk disinkronkan ulang dengan kode aktual: Silver Jewelry 16, Handcraft 12, Hero 4 slide/24 detik per siklus)  
**Bahasa**: Indonesia  
**Status**: Selesai ✅
