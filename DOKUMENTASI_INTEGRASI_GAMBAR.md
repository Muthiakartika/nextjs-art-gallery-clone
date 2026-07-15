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
- ✅ **Silver Jewelry**: 14 produk dengan 14 gambar
- ✅ **Handcraft**: 13 produk dengan 13 gambar
- ✅ **Hero Section**: 3 gambar slideshow (paintings, silver, handcraft)
- ✅ **Collection Cards**: 3 kartu kategori dengan gambar hero
- ✅ **About Page**: 1 gambar studio

---

## 📁 Struktur Folder Gambar

### Lokasi Utama: `/public/img/`

```
public/img/
├── about/
│   └── abaout us image.jpg          (1 gambar studio)
├── hero/
│   ├── hero painting 1.jpg          (Gambar hero paintings)
│   ├── hero silver 1.jpg            (Gambar hero silver jewelry)
│   └── hero craft  1.jpg            (Gambar hero handcraft)
├── painting/
│   ├── painting images 1.png        (23 file gambar)
│   ├── painting images 2.png
│   └── ... hingga painting images 23.png
├── silver/
│   ├── silver jewelry image 1.png   (14 file gambar)
│   ├── silver jewelry image 2.png
│   ├── silver jewelry image 3.png
│   ├── silver jewelry image 4.png
│   ├── silver jewelry image 5.png
│   ├── silver jewelry image 6.png
│   ├── silver jewelry image 9.png   (Perhatian: 7 & 8 tidak ada)
│   └── ... hingga silver jewelry image 16.png
└── handcraft/
    ├── handcraft image 1.png        (13 file gambar)
    ├── handcraft image 2.png
    └── ... hingga handcraft image 13.png
```

### Catatan Penting:
- File gambar silver jewelry **tidak ada untuk nomor 7 dan 8**
- Jika ada file tambahan, tambahkan dengan nama sesuai pola
- Semua file menggunakan format PNG kecuali hero section (JPG)

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
- 3 gambar hero untuk slideshow

**Cara Kerja**:
```typescript
// Array berisi 3 gambar hero yang akan diputar
const HERO_IMAGES = [
  { src: "/img/hero/hero painting 1.jpg", alt: "Paintings Gallery" },
  { src: "/img/hero/hero silver 1.jpg", alt: "Silver Jewelry" },
  { src: "/img/hero/hero craft  1.jpg", alt: "Handcraft" },
];

// Siklus: 3 gambar × 6 detik = 18 detik per putaran lengkap
const CYCLE_SECONDS = 18;
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
// Map kategori ke gambar hero
const COLLECTION_IMAGE_MAP = {
  paintings: "/img/hero/hero painting 1.jpg",
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
- `src/data/gallery.ts` - Data silver jewelry (14) & handcraft (13)

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
  id: "moon-phase-ring",
  title: "Moon Phase Ring",
  artist: "Kadek Wirawan",
  price: 120,
  medium: "Sterling Silver",
}
```

### Daftar Lengkap Produk Silver Jewelry (14):
1. Moon Phase Ring
2. Lotus Drop Earrings
3. Celuk Filigree Bracelet
4. Frangipani Pendant Necklace
5. Temple Gate Ring
6. Turquoise Silver Bangle
7. Pearl Choker Necklace
8. Intricate Filigree Earrings
9. Coral Gemstone Ring
10. Jade Pendant Necklace
11. Moonstone Tennis Bracelet
12. Wide Silver Cuff
13. Amethyst Cluster Ring
14. Mother of Pearl Brooch

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
1. Buat array HERO_IMAGES dengan path ke 3 gambar hero
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
    <!-- 3 Image layers, semua absolute positioned -->
    <div class="hero-slide">
      <Image src="/img/hero/hero painting 1.jpg" />
    </div>
    <div class="hero-slide">
      <Image src="/img/hero/hero silver 1.jpg" />
    </div>
    <div class="hero-slide">
      <Image src="/img/hero/hero craft 1.jpg" />
    </div>
    
    <!-- Dark overlay untuk readability teks -->
    <div class="absolute inset-0 bg-black/60" />
  </div>
  
  <!-- Text content di atas background -->
  <div class="text-center">
    <h1>Original Paintings from Our Bali Art Gallery</h1>
    <p>...</p>
  </div>
</section>
```

**Animasi CSS** (di `globals.css`):
```css
.hero-slide {
  animation: heroFade 18s infinite;
  /* animationDelay berbeda untuk setiap layer */
}

@keyframes heroFade {
  0% { opacity: 0; }
  5% { opacity: 1; }
  33.33% { opacity: 1; }
  38.33% { opacity: 0; }
  100% { opacity: 0; }
}

.hero-slide-img {
  animation: heroZoom 18s infinite;
}

@keyframes heroZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}
```

**Cara Kerjanya**:
- 3 layer gambar stack di atas satu sama lain (absolute positioned)
- Setiap layer punya delay berbeda (0s, 6s, 12s)
- Animasi: 18 detik per siklus (6s per gambar)
- Gambar 1: Opacity 1 dari 0-6s, fade out 5-6s
- Gambar 2: Opacity 1 dari 6-12s (dimulai saat gambar 1 fade out), fade out 11-12s
- Gambar 3: Opacity 1 dari 12-18s, fade out 17-18s
- Repeat...

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
<div className="relative overflow-hidden rounded-none border-[5px] border-white aspect-square">
  {/* dari aspect-[3/4] → aspect-square */}
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
**Last Updated**: 2026-07-15  
**Bahasa**: Indonesia  
**Status**: Selesai ✅
