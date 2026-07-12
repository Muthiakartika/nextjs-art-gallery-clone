// Tag default kalau pemanggilnya tidak menentukan tag sendiri — tetap
// bertema galeri seni, bukan foto acak topik apa pun.
const DEFAULT_TAGS = "art,painting,gallery";

// Membangun URL foto dummy dari loremflickr.com, dengan foto yang DICOCOKKAN
// ke tag/kata kunci (mis. "painting", "jewelry", "woodcarving") supaya semua
// gambar di situs ini terasa seperti galeri seni sungguhan, bukan foto acak
// topik apa pun (beda dari picsum.photos yang sebelumnya dipakai).
//
// `seed` dikirim lewat query `?lock=` supaya foto yang tampil tetap
// KONSISTEN setiap kali halaman dibuka/di-reload — seed + tag yang sama
// akan selalu mengembalikan foto yang sama, bukan acak ulang.
// Referensi layanan: https://loremflickr.com/
export function dummyImageUrl(
  seed: number | string,
  width: number,
  height: number,
  tags: string = DEFAULT_TAGS,
): string {
  return `https://loremflickr.com/${width}/${height}/${tags}?lock=${seed}`;
}
