# Implementation Summary – The Shawarma Spot - Grayson

## 1. File structure

```
the-shawarma-spot/
├── app/
│   ├── layout.tsx           # Root layout, fonts, metadata, Navbar + Footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Tailwind + design tokens (brand colors)
│   ├── sitemap.ts           # SEO sitemap (update domain inside)
│   ├── menu/page.tsx        # Full menu
│   ├── about/page.tsx       # About / story
│   └── contact/page.tsx      # Contact, hours, map, catering
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Sticky nav, logo, links, Order CTA, mobile menu
│   │   └── Footer.tsx       # Logo, links, hours, address, phone, social
│   ├── ui/
│   │   ├── Button.tsx       # Primary, secondary, outline, ghost
│   │   ├── Container.tsx    # Max-width + padding
│   │   ├── Section.tsx      # Section wrapper (light / dark / muted)
│   │   └── SectionHeader.tsx # Section title + subtitle
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── TrustSection.tsx
│   │   ├── FeaturedItems.tsx
│   │   ├── AboutPreview.tsx
│   │   ├── OrderingSection.tsx
│   │   ├── Gallery.tsx
│   │   ├── LocationHours.tsx
│   │   └── CtaBand.tsx
│   ├── contact/
│   │   └── MapPlaceholder.tsx # Map embed or “View on Google Maps” CTA
│   └── seo/
│       └── JsonLd.tsx        # Restaurant schema for local SEO
├── data/
│   ├── site.ts              # Business info, hours, links (ORDER, MAP, SOCIAL)
│   └── menu.ts               # Menu categories + items + featured items
└── public/
    └── images/               # See “Where to place images” below
        └── README.md         # Image placement guide
```

---

## 2. Where to place each image

Put all image files under **`public/images/`** so URLs are `/images/...`.

| Use            | Path under `public/images/`     | Notes |
|----------------|----------------------------------|--------|
| Logo           | `logo.png`                       | Navbar + footer. Transparent or dark-on-light. |
| Hero           | `hero/hero.jpg`                 | Home hero + menu page banner. Best food/interior shot. |
| About          | `about/about-preview.jpg`       | Home about block + about page header. |
| Featured food  | `food/butter-chicken.jpg`      | Home “Customer favorites” cards. |
|                | `food/shawarma-loaded-fries.jpg` | |
|                | `food/philly-cheesesteak.jpg`    | |
|                | `food/tacos.jpg`                 | |
| Gallery        | `gallery/1.jpg` … `gallery/6.jpg` | Home gallery grid. Rename or edit `Gallery.tsx` to match your files. |
| OG / social    | `og/og.jpg`                     | 1200×630 for social sharing. Optional. |

**Folder structure:**

```
public/images/
├── logo.png
├── hero/
│   └── hero.jpg
├── about/
│   └── about-preview.jpg
├── food/
│   ├── butter-chicken.jpg
│   ├── shawarma-loaded-fries.jpg
│   ├── philly-cheesesteak.jpg
│   └── tacos.jpg
├── gallery/
│   ├── 1.jpg … 6.jpg
└── og/
    └── og.jpg
```

If an image is missing, the app may 404 or error on that asset; add at least **logo** and **hero/hero.jpg** for the site to look correct.

---

## 3. Fields to update later (ordering, map, socials)

All of these live in **`data/site.ts`**. Edit that file to go live.

### Ordering (external links)

- **`ORDER_ONLINE_URL`** – Main “Order Online” button (e.g. Uber Eats, DoorDash, or your own link).
- **`ORDERING_LINKS`** – Optional per-platform links:
  - `uberEats`
  - `doorDash`
  - `grubhub`  

Use these in your own components or a future “Order” dropdown if you add one.

### Map

- **`MAP_URL`** – Used for “Get Directions”. Already set to a Google Maps search URL for the address. Replace with your exact Google Maps place URL if you prefer.
- **`MAP_EMBED_SRC`** – For an embedded map on Contact and home “Find us”:
  1. Open Google Maps → your place → Share → “Embed a map”.
  2. Copy the `src="..."` URL from the iframe.
  3. Paste that URL into `MAP_EMBED_SRC` in `data/site.ts`.  
  Leave empty to show the “View on Google Maps” CTA block instead.

### Social

In **`data/site.ts`**, **`SOCIAL`**:

- **`facebook`** – Full URL to your Facebook page.
- **`instagram`** – Full URL to your Instagram profile.
- **`twitter`** – Full URL (optional). Leave `""` if unused.

Footer icons link to these; update the URLs when you have real profiles.

### Other

- **`components/seo/JsonLd.tsx`** – Update the `url` in the schema to your real domain (e.g. `https://theshawarmaspotgrayson.com`).
- **`app/sitemap.ts`** – Set `base` (or your domain variable) to your real domain.

---

## 4. Commands to run

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev
```

Then open **http://localhost:3000**.

- **Build for production:**  
  `npm run build`  
- **Start production server:**  
  `npm run start`

---

## Quick checklist before launch

- [ ] Add all images under `public/images/` as in section 2.
- [ ] Set `ORDER_ONLINE_URL` (and optionally `ORDERING_LINKS`) in `data/site.ts`.
- [ ] Set `MAP_URL` and, if desired, `MAP_EMBED_SRC` in `data/site.ts`.
- [ ] Set `SOCIAL` (Facebook, Instagram, etc.) in `data/site.ts`.
- [ ] Update the `url` in `components/seo/JsonLd.tsx` and the domain in `app/sitemap.ts` to your live domain.
