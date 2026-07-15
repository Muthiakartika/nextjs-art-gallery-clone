# 📚 DOKUMENTASI COMPONENT CLOSINGCTA

**Status**: ✅ Selesai & Terintegrasi  
**Tanggal Dibuat**: 2026-07-15  
**Lokasi File**: `src/components/ClosingCTA.tsx`

---

## 🎯 Overview

**ClosingCTA** adalah komponen Call-to-Action minimalis yang ditempatkan sebelum footer pada halaman homepage. Komponen ini mendorong pengunjung untuk menghubungi gallery atau mengunjungi lokasi fisik dengan desain yang elegan dan luxury aesthetic.

---

## 📍 Lokasi & Integrasi

### File Komponen
```
src/components/ClosingCTA.tsx
```

### Cara Menggunakan di Homepage

**File**: `src/app/page.tsx`

**Import**:
```typescript
import ClosingCTA from "@/components/ClosingCTA";
```

**Penggunaan** (setelah Reviews section):
```typescript
<Reviews />
<ClosingCTA />
{/* Newsletter & Footer otomatis dari layout.tsx */}
```

---

## 🎨 Desain & Styling

### Background & Text Colors
| Element | Class | Hex | Deskripsi |
|---------|-------|-----|-----------|
| Background | `bg-ink-soft` | #3c3833 | Dark sophisticated background |
| Eyebrow | `text-white/70` | rgba(255,255,255,0.7) | Small uppercase label |
| Heading | `text-white` | #ffffff | Main title |
| Description | `text-white/80` | rgba(255,255,255,0.8) | Descriptive paragraph |
| Helper Text | `text-white/60` | rgba(255,255,255,0.6) | Secondary info |
| Button BG | `bg-white` | #ffffff | Button background |
| Button Text | `text-link` | #5f6753 | Sage green text |

### Spacing
| Breakpoint | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Section Padding | py-20 | sm:py-20 | py-16 |
| Gap (Text-Button) | gap-6/gap-8 | sm:gap-8 | gap-8 |
| Text Left Margin | lg:pl-8 | sm:pl-6 | pl-0 |
| Button Right Margin | lg:pr-8 | sm:pr-6 | pr-0 |

### Responsive Layout
- **Mobile**: Single column (flex-col)
- **Tablet (sm)**: Masih single column dengan spacing improvement
- **Desktop (lg)**: Flex row dengan text kiri, button kanan

---

## 📝 Struktur JSX

```
<section> bg-ink-soft
  ├── <Container> max-w-1320px
  │   └── <div> flex layout (col/row responsive)
  │       ├── LEFT: Text content (flex-1, pl-margin)
  │       │   ├── <span> Eyebrow: "GET IN TOUCH"
  │       │   ├── <h3> Title: "Looking for the Perfect Piece?"
  │       │   ├── <p> Description: [Long text]
  │       │   └── <p> Helper text: "Visit our gallery..."
  │       │
  │       └── RIGHT: Button (flex-shrink-0, pr-margin)
  │           └── <Button> "Contact Us" → /contact-us
```

---

## ✨ Fitur

- ✅ **Responsive**: Mobile-first, optimal di semua device sizes
- ✅ **Luxury Aesthetic**: Dark background (ink-soft) dengan white text
- ✅ **Good Contrast**: White/semi-white text on dark background
- ✅ **Proper Spacing**: Margins di left & right untuk breathing room
- ✅ **Flexible Layout**: Flex-col mobile, flex-row desktop
- ✅ **Button Styling**: Inverted (white bg, sage green text)
- ✅ **Accessibility**: Semantic HTML, good color contrast ratios

---

## 🔧 CSS Classes Used

### Tailwind Utilities
```css
/* Layout */
flex flex-col lg:flex-row items-start lg:items-center
justify-between gap-8 sm:gap-10

/* Spacing */
py-16 sm:py-20 pl-0 sm:pl-6 lg:pl-8 pr-0 sm:pr-6 lg:pr-8

/* Typography */
text-xs text-sm text-base text-xl sm:text-2xl uppercase
font-medium tracking-widest leading-relaxed

/* Colors */
bg-ink-soft text-white text-white/80 text-white/70 text-white/60
bg-white text-link hover:bg-white/90

/* States */
flex-1 flex-shrink-0 max-w-lg whitespace-nowrap
```

---

## 📊 Component Props

Komponen **tidak menerima props** - semuanya hardcoded untuk ClosingCTA section di homepage.

Jika perlu membuat CTA section yang berbeda, buat komponen baru atau ubah file ini dengan props.

---

## 🎯 Call-to-Action Elements

### Primary CTA
- **Text**: "Contact Us"
- **Link**: `/contact-us`
- **Style**: White button dengan sage green text
- **Location**: Right side (desktop), bottom (mobile)

### Secondary CTA
- **Text**: "Visit our gallery in Seminyak, Bali, or contact us for personalized recommendations."
- **Style**: Helper text, white/60 opacity
- **Purpose**: Alternative action (visit gallery)

---

## 📱 Responsive Behavior

### Mobile (< 640px)
```
┌─────────────────────┐
│ GET IN TOUCH        │
│                     │
│ Looking for the     │
│ Perfect Piece?      │
│                     │
│ Whether you're...   │
│ [description text]  │
│                     │
│ Visit our gallery..│
│                     │
│     [Contact Us]    │
│ (centered button)    │
└─────────────────────┘
```

### Tablet (640px - 1024px)
```
Same as mobile dengan lebih banyak space antar elemen
```

### Desktop (> 1024px)
```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  GET IN TOUCH          [Contact Us] (button centered)│
│  Looking for the       │                            │
│  Perfect Piece?        │ (right side)               │
│                        │                            │
│  Whether you're...     │                            │
│  [description text]    │                            │
│                        │                            │
│  Visit our gallery...  │                            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## ✅ Testing Checklist

Setelah membuat/mengubah komponen:

- [ ] Build berhasil: `npm run build`
- [ ] Start server: `npm run start`
- [ ] Visual check homepage
- [ ] Desktop view (1280px): text kiri, button kanan, spacing baik
- [ ] Tablet view (768px): single column, spacing maintained
- [ ] Mobile view (375px): proper stacking, readable text
- [ ] Button click works: goes to `/contact-us`
- [ ] Color contrast: white text readable on dark background
- [ ] No console errors

---

## 🎓 Learning Points

### Tailwind Responsive Design
- Mobile-first: default class apply, `sm:`, `lg:` prefix untuk larger screens
- Flexbox responsive: `flex-col` → `lg:flex-row`
- Spacing: different padding per breakpoint dengan `pl-0 sm:pl-6 lg:pl-8`

### Color & Contrast
- Dark background + white text = high contrast, readable
- Opacity variants: `text-white/70` = `rgba(255,255,255,0.7)`
- Button inversion: white bg + colored text stands out

### Component Structure
- Reusable button component dari `ui/Button.tsx`
- Container component ensures consistency dengan section lain
- Simple, focused component (hanya CTA section)

---

## 🔄 Maintenance

### Jika ingin mengubah:
- **Text content**: Edit string langsung di JSX
- **Colors**: Ubah class names (contoh: `bg-ink-soft` → `bg-link`)
- **Spacing**: Ubah Tailwind classes (contoh: `pl-8` → `pl-12`)
- **Link destination**: Ubah `href` di Button component

### Jika ingin props:
Refactor component untuk terima props:
```typescript
interface ClosingCTAProps {
  heading?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

export default function ClosingCTA({
  heading = "Looking for the Perfect Piece?",
  // ...
}: ClosingCTAProps) {
  // ...
}
```

---

**Last Updated**: 2026-07-15  
**Status**: Ready for Production ✅
