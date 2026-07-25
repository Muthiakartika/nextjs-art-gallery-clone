# ⚡ PANDUAN CEPAT - INTEGRASI GAMBAR

## 🎯 Ringkasan Cepat

| Kategori | Jumlah Produk | Jumlah Gambar | Folder | Pola Nama File |
|----------|--------------|---------------|--------|----------------|
| Paintings | 23 | 23 | `/img/painting/` | `painting images 1.png` |
| Silver Jewelry | 16 | 16 | `/img/silver/` | `silver jewelry image 1.png` |
| Handcraft | 12 | 12 | `/img/handcraft/` | `handcraft image 1.png` |
| Hero | 4 slide | 4 | `/img/hero/` | campuran (lihat di bawah) |
| Collections | 3 kartu | 3 (dipakai ulang dari folder hero) | `/img/hero/` | campuran (lihat di bawah) |
| About | 1 | 1 | `/img/about/` | `abaout us image.jpg` |

---

## 📂 Struktur Folder

```
public/
└── img/
    ├── about/
    │   └── abaout us image.jpg                    ← Gambar About Page (nama file ada typo "abaout", sengaja dibiarkan — path di kode harus sama persis)
    ├── hero/
    │   ├── hero painting 1.jpg                    ← Dipakai di Hero slideshow
    │   ├── hero painting 2.jpg                    ← Dipakai di Collections (kartu Paintings), BUKAN di Hero
    │   ├── hero silver 1.jpg                      ← Dipakai di Hero slideshow & Collections
    │   ├── hero craft  1.jpg                      ← Dipakai di Hero slideshow & Collections (ada 2 spasi sebelum "1", ikuti persis)
    │   ├── shop image 1.jpg                       ⚠️ ada di folder tapi belum dipakai di kode manapun
    │   ├── shop image 2.jpg                       ⚠️ ada di folder tapi belum dipakai di kode manapun
    │   └── shop image 3.jpg                       ← Dipakai di Hero slideshow (slide ke-4)
    ├── painting/
    │   ├── painting images 1.png ... 23.png       ← 23 produk paintings
    │   └── painting images 16 (2).png             ⚠️ file duplikat, tidak dipakai di kode manapun
    ├── silver/
    │   └── silver jewelry image 1.png ... 16.png  ← 16 produk silver (lengkap 1-16, tidak ada yang bolong)
    └── handcraft/
        ├── handcraft image 1.png ... 12.png       ← 12 produk handcraft
        └── handcraft image 8 (unused).png         ← Diarsipkan, sengaja tidak dipakai (lihat komentar di gallery.ts)
```

---

## 🔧 File Kode yang Diubah

| File | Perubahan | Kunci |
|------|-----------|-------|
| `src/components/ProductCard.tsx` | Ganti Placeholder → Image | Mapping kategori ke folder + pattern nama file |
| `src/components/Hero.tsx` | Ganti dummy seed → array gambar | HERO_IMAGES array + CYCLE_SECONDS |
| `src/components/CollectionCard.tsx` | Ganti Placeholder → Image | COLLECTION_IMAGE_MAP |
| `src/app/about/page.tsx` | Ganti Placeholder → Image | Path `/img/about/abaout us image.jpg` |
| `src/data/products.ts` | Tambah 15 produk paintings | Total 23 produk paintings |
| `src/data/gallery.ts` | Data silver jewelry & handcraft | Silver 16, Handcraft 12 |

---

## 🖼️ Aspek Ratio

| Component | Ratio | CSS Class | Use Case |
|-----------|-------|-----------|----------|
| ProductCard | 3:4 (Portrait) | `aspect-[3/4]` | Kartu produk |
| CollectionCard | 16:9 (Landscape) | `aspect-video` | Collection tiles |
| About Image | 16:9 (Landscape) | `aspect-video` | Hero studio image |
| Hero | Full width | - | Slideshow background |

---

## 📝 Menambah Produk Baru

### Untuk Paintings (23 sudah ada, mau tambah ke-24):

1. **Upload gambar**: Letakkan file `painting images 24.png` di `/public/img/painting/`

2. **Update data**: Di `src/data/products.ts`, tambah ke array `products[]`:
```typescript
{
  id: "new-unique-id",
  title: "New Painting Title",
  artist: "Artist Name",
  price: 450,
  medium: "Oil on canvas",
}
```

3. **Build**: `npm run build && npm run start`

4. **Hasil**: ProductCard otomatis render dengan gambar ke-24

---

### Untuk Silver Jewelry (16 sudah ada, mau tambah ke-17):

1. **Upload gambar**: Letakkan file `silver jewelry image 17.png` di `/public/img/silver/`

2. **Update data**: Di `src/data/gallery.ts`, tambah ke array `silverJewelry[]`:
```typescript
{
  id: "new-jewelry-id",
  title: "New Jewelry Title",
  artist: "Artist Name",
  price: 180,
  medium: "Sterling Silver",
}
```

3. **Build**: `npm run build && npm run start`

---

### Untuk Handcraft (12 sudah ada, mau tambah ke-13):

1. **Upload gambar**: Letakkan file `handcraft image 13.png` di `/public/img/handcraft/`

2. **Update data**: Di `src/data/gallery.ts`, tambah ke array `handcraft[]` (paling bawah):
```typescript
{
  id: "new-handcraft-id",
  title: "New Handcraft Title",
  artist: "Satori Art Gallery",
  price: 150,
  medium: "Hand-Carved Wood",
}
```

3. **Build**: `npm run build && npm run start`

⚠️ Ingat: kalau nanti menghapus salah satu produk handcraft, file gambar di posisi setelahnya HARUS di-rename ulang supaya nomornya tetap 1..12 berurutan tanpa bolong — kalau tidak, produk-produk setelahnya akan otomatis salah ambil foto (persis masalah yang pernah terjadi sebelumnya).

---

## 🚀 Kode Penting

### ProductCard - Image Path Generation
```typescript
const categoryMap = CATEGORY_IMAGE_MAP[category];
const imageNum = (index + 1).toString();
const imagePath = `/img/${categoryMap.folder}/${categoryMap.pattern} ${imageNum}.png`;
// Contoh hasil: "/img/painting/painting images 5.png"
```

### Hero - Slideshow Array
Bukan berbasis posisi/index seperti ProductCard — tiap slide langsung menunjuk ke satu file gambar. Tambah/kurangi entri array untuk tambah/kurangi jumlah slide (durasi otomatis menyesuaikan).
```typescript
const HERO_IMAGES = [
  { src: "/img/hero/hero painting 1.jpg", alt: "Painting Collection" },
  { src: "/img/hero/hero craft  1.jpg", alt: "Craft Collection" },
  { src: "/img/hero/hero silver 1.jpg", alt: "Silver Collection" },
  { src: "/img/hero/shop image 3.jpg", alt: "Shop Image with Statue Collection" },
];
const CYCLE_SECONDS = HERO_IMAGES.length * 6; // 4 gambar × 6 detik = 24 detik
```

### Collections - Image Mapping
Juga langsung menunjuk file (bukan berbasis posisi), satu gambar tetap per kategori.
```typescript
const COLLECTION_IMAGE_MAP = {
  paintings: "/img/hero/hero painting 2.jpg",
  "silver-jewelry": "/img/hero/hero silver 1.jpg",
  handcraft: "/img/hero/hero craft  1.jpg",
};
```

---

## ✅ Testing Checklist

Setelah menambah gambar/produk:

- [ ] Folder struktur benar
- [ ] Nama file sesuai pola
- [ ] Jumlah produk = jumlah gambar
- [ ] `npm run build` berhasil (no error)
- [ ] `npm run start` berjalan
- [ ] Gambar tampil di halaman
- [ ] Responsive di mobile/tablet/desktop
- [ ] Browser console no error
- [ ] Hero slideshow lancar

---

## 🐛 Troubleshooting Cepat

| Masalah | Penyebab | Solusi |
|---------|---------|--------|
| Gambar blank | File tidak ada | Cek nama file & folder |
| Error di build | Typo path | Cek CATEGORY_IMAGE_MAP |
| Gambar distorted | Aspect ratio salah | Update CSS class |
| Slideshow freeze | CYCLE_SECONDS salah | = jumlah gambar × 6 |
| Lambat loading | File terlalu besar | Compress gambar |

---

## 📚 Dokumentasi Lengkap

Untuk penjelasan detail, lihat: **DOKUMENTASI_INTEGRASI_GAMBAR.md**

Berisi:
- Cara kerja masing-masing component
- Flow diagram gambar
- Contoh implementasi
- Tips advanced
- FAQ

---

## 🎓 Key Learning Points

1. **Index vs Number**: Array index 0-based → file name 1-based
   ```
   index=0 → imageNum="1" → "painting images 1.png"
   ```

2. **Mapping Pattern**: Kategori → Folder + Pattern → Gambar
   ```
   paintings → painting/ + "painting images" → "painting images 5.png"
   ```

3. **Next.js Image**: Otomatis optimize, responsive, lazy load
   ```
   <Image src={path} fill className="object-cover" />
   ```

4. **Aspect Ratio**: CSS untuk maintain proposi gambar
   ```
   aspect-[3/4] untuk portrait, aspect-video untuk landscape
   ```

5. **CSS Animation**: Slideshow tanpa JavaScript
   ```
   Tiap layer punya delay berbeda → crossfade effect
   ```

---

**Last Updated**: 2026-07-25 (angka & contoh kode disinkronkan ulang dengan kode aktual: Silver Jewelry 16, Handcraft 12, Hero 4 slide)  
Hubungi untuk pertanyaan atau update lebih lanjut.
