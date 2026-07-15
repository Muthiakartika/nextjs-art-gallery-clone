# ⚡ PANDUAN CEPAT - INTEGRASI GAMBAR

## 🎯 Ringkasan Cepat

| Kategori | Jumlah Produk | Jumlah Gambar | Folder | Pola Nama File |
|----------|--------------|---------------|--------|----------------|
| Paintings | 23 | 23 | `/img/painting/` | `painting images 1.png` |
| Silver Jewelry | 14 | 14 | `/img/silver/` | `silver jewelry image 1.png` |
| Handcraft | 13 | 13 | `/img/handcraft/` | `handcraft image 1.png` |
| Hero | 3 | 3 | `/img/hero/` | `hero painting 1.jpg` |
| About | 1 | 1 | `/img/about/` | `abaout us image.jpg` |

---

## 📂 Struktur Folder

```
public/
└── img/
    ├── about/
    │   └── abaout us image.jpg                    ← Gambar About Page
    ├── hero/
    │   ├── hero painting 1.jpg                    ← Hero slideshow
    │   ├── hero silver 1.jpg                      ← Hero slideshow
    │   └── hero craft  1.jpg                      ← Hero slideshow
    ├── painting/
    │   ├── painting images 1.png ... 23.png       ← 23 produk paintings
    ├── silver/
    │   ├── silver jewelry image 1.png             ← 14 produk silver
    │   ├── silver jewelry image 2.png
    │   ├── silver jewelry image 3.png
    │   ├── silver jewelry image 4.png
    │   ├── silver jewelry image 5.png
    │   ├── silver jewelry image 6.png
    │   ├── silver jewelry image 9.png             ⚠️ 7 & 8 tidak ada
    │   ├── silver jewelry image 10-16.png
    └── handcraft/
        └── handcraft image 1.png ... 13.png       ← 13 produk handcraft
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
| `src/data/gallery.ts` | Tambah 10 silver + 9 handcraft | Silver 14, Handcraft 13 |

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

### Untuk Silver Jewelry (14 sudah ada, mau tambah ke-15):

1. **Upload gambar**: Letakkan file `silver jewelry image 15.png` di `/public/img/silver/`

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

## 🚀 Kode Penting

### ProductCard - Image Path Generation
```typescript
const categoryMap = CATEGORY_IMAGE_MAP[category];
const imageNum = (index + 1).toString();
const imagePath = `/img/${categoryMap.folder}/${categoryMap.pattern} ${imageNum}.png`;
// Contoh hasil: "/img/painting/painting images 5.png"
```

### Hero - Slideshow Array
```typescript
const HERO_IMAGES = [
  { src: "/img/hero/hero painting 1.jpg", alt: "Paintings" },
  { src: "/img/hero/hero silver 1.jpg", alt: "Silver" },
  { src: "/img/hero/hero craft  1.jpg", alt: "Handcraft" },
];
const CYCLE_SECONDS = 18; // 3 gambar × 6 detik
```

### Collections - Image Mapping
```typescript
const COLLECTION_IMAGE_MAP = {
  paintings: "/img/hero/hero painting 1.jpg",
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

**Last Updated**: 2026-07-15  
Hubungi untuk pertanyaan atau update lebih lanjut.
