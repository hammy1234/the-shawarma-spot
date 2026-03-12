# The Shawarma Spot – Grayson | Development Plan

**Project:** Modern restaurant website  
**Tech stack:** Next.js, TypeScript, Tailwind CSS, App Router  
**Scope:** Architecture, structure, design system, and implementation guidelines only — no code in this document.

---

## 1. Folder Structure

```
the-shawarma-spot/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, providers)
│   ├── page.tsx                 # Home
│   ├── globals.css
│   ├── menu/
│   │   └── page.tsx             # Full menu
│   ├── about/
│   │   └── page.tsx             # About / story
│   ├── contact/
│   │   └── page.tsx             # Contact, hours, location
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Nav.tsx
│   │   └── MobileNav.tsx
│   ├── ui/                      # Reusable primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── FeaturedMenu.tsx
│   │   ├── AboutPreview.tsx
│   │   └── CTAStrip.tsx
│   ├── menu/
│   │   ├── MenuSection.tsx
│   │   ├── MenuItem.tsx
│   │   └── MenuFilters.tsx      # Optional: categories
│   ├── contact/
│   │   ├── ContactForm.tsx
│   │   ├── Hours.tsx
│   │   └── MapEmbed.tsx
│   └── shared/
│       ├── Logo.tsx
│       └── SocialLinks.tsx
├── lib/
│   ├── menu.ts                  # Menu data + helpers
│   ├── constants.ts             # Hours, address, phone, social, ordering URL (external)
│   └── utils.ts                 # cn(), formatters
├── types/
│   └── menu.ts                  # Menu-related types
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── menu/
│   │   ├── about/
│   │   │   └── (optimized assets)
│   │   └── og/                  # OG image
│   └── favicon.ico
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

- **app/** — App Router routes only; keep pages thin and delegate to components.
- **components/** — Grouped by feature (layout, home, menu, contact) plus shared and ui.
- **lib/** — Data, constants, and pure utilities.
- **types/** — Shared TypeScript types (e.g. menu).

---

## 2. Page Structure

**Required pages (four only):** Home, Menu, About, Contact. No internal Order page; online ordering is handled via CTA buttons that link to external ordering services or phone.

| Route      | Purpose                | Key sections / content |
|------------|------------------------|-------------------------|
| `/`        | Home                   | Hero, featured menu, about preview, hours/CTA |
| `/menu`    | Full menu              | Category sections, all items, optional filters |
| `/about`   | Story & brand          | Narrative, team/owner, values, maybe photos |
| `/contact` | Location & reach-out   | Hours, address, map, phone, optional form |

- Each page: one `page.tsx` that composes layout + section components; no business logic in `page.tsx` beyond passing props and data.
- Shared shell: `layout.tsx` → Header + main + Footer; consistent `<main>` structure and skip links for a11y.

---

## 3. Component Breakdown

### Layout
- **Header:** Logo, Nav, CTA (Order / Call), mobile menu trigger.
- **Footer:** Logo, short tagline, nav links, hours summary, address, phone, social, copyright.
- **Nav:** Links to Home, Menu, About, Contact only; active state; same links in mobile drawer. No Order page link; “Order” appears as a CTA button that goes to an external URL or tel:.
- **MobileNav:** Full-screen or slide-over menu with same links + CTA.

### UI (shared)
- **Button:** Variants (primary, secondary, outline, ghost); sizes; optional icon; used for CTAs and nav.
- **Container:** Max-width + horizontal padding for consistent content width.
- **Section:** Vertical padding + optional background; wrappers for hero, features, CTA.
- **Card:** For menu items, feature blocks, or about cards; optional image slot.

### Home
- **Hero:** Headline, subheadline, primary CTA (Order / Menu), background image (Next Image).
- **FeaturedMenu:** 4–6 items from menu data; links to full menu.
- **AboutPreview:** Short copy + “Learn more” → `/about`.
- **CTAStrip:** “Order now” / “Call us” / “Find us” with clear actions.

### Menu
- **MenuSection:** Category title + list of MenuItem.
- **MenuItem:** Name, description, price; optional image, dietary tags, “popular” badge.
- **MenuFilters:** Optional; filter by category (e.g. Shawarma, Sides, Drinks) without leaving page.

### Contact
- **Hours:** List of days + hours; highlight “Open now” if desired (client-side or static).
- **MapEmbed:** Embedded map (iframe or link) for Grayson location.
- **ContactForm:** Optional; name, email, message; submit to API route or external service.

### Shared
- **Logo:** Text or image logo; used in Header and Footer.
- **SocialLinks:** Icons + links from constants (e.g. Facebook, Instagram).

---

## 4. Data Structure for the Menu

- **Source:** Start with a single source of truth in code (e.g. `lib/menu.ts`) so the site works without a CMS. Structure to allow later migration to CMS or API.

**Suggested shape:**

- **Categories:** e.g. `Shawarma`, `Sides`, `Drinks`, `Desserts`, `Combos`.
- **Item fields:**
  - `id` (string, unique)
  - `name` (string)
  - `description` (string, optional)
  - `price` (number or string for “Market price”)
  - `category` (string or enum)
  - `image` (optional path or URL)
  - `featured` (boolean, for home page)
  - `dietary` (optional array: `vegetarian`, `vegan`, `gluten-free`, etc.)
  - `popular` (optional boolean for badge)

**Structure example (conceptual):**

- Array of categories, each with `id`, `name`, `sortOrder`, and `items[]`.
- Or flat list of items with `category`; categories derived for section headers and filtering.
- Helper functions: `getMenuByCategory()`, `getFeaturedItems()`, `getCategories()`.

---

## 5. Design System

### Colors
- **Primary:** Warm, appetite-driven (e.g. deep gold/amber or terracotta) for CTAs and key accents.
- **Secondary:** Neutral warm (e.g. warm gray or soft brown) for backgrounds and cards.
- **Neutral:** Off-white/cream for main background; dark brown or charcoal for text.
- **Accent:** Small use of fresh green or herb tone for “fresh” or “healthy” cues if desired.
- **Semantic:** Success (confirmations), error (form validation), muted (disabled/secondary text).

Define these as Tailwind theme colors in `tailwind.config.ts` (e.g. `primary`, `secondary`, `accent`, `neutral`) and use them consistently; avoid raw hex in components.

### Typography
- **Headings:** One strong display font (e.g. serif or distinctive sans) for hero and section titles; limit to 2 weights.
- **Body:** Highly readable sans-serif; good line-height (e.g. 1.6).
- **Scale:** Use a type scale (e.g. `text-xs` through `text-5xl` or custom) for hierarchy; stick to 3–4 sizes in practice.
- Load fonts via `next/font` (e.g. Google Fonts) in root layout; no FOUT.

### Spacing
- **Base unit:** 4px; use Tailwind spacing scale (e.g. 4, 6, 8, 12, 16, 24, 32, 48, 64).
- **Section padding:** Consistent vertical rhythm (e.g. `py-16` md:`py-24`) and horizontal padding via Container.
- **Component gaps:** Use `gap-*` and `space-*` consistently (e.g. `gap-6`, `space-y-4`).

### Borders & Shadows
- Subtle rounded corners (e.g. `rounded-lg`) for cards and buttons; avoid over-rounding.
- Light shadows for cards and floating CTAs; one elevation level for “raised” elements.

### Motion
- Minimal: focus on fast, subtle transitions (e.g. hover, focus, nav open/close); avoid long animations that slow perceived performance.

---

## 6. Responsive Layout Strategy

- **Mobile-first:** Base styles for small screens; enhance with `sm:`, `md:`, `lg:` (and optionally `xl:`).
- **Breakpoints:** Align with Tailwind defaults (sm 640px, md 768px, lg 1024px, xl 1280px); use for nav switch (e.g. hamburger below `md`), grid columns (1 → 2 → 3), and typography scale.
- **Touch targets:** Buttons and nav links at least 44px height on mobile.
- **Content width:** Max-width container (e.g. 1280px) with horizontal padding; full-bleed only for hero and full-width sections.
- **Images:** Always use Next.js `Image` with appropriate `sizes`; hero and menu images with different breakpoint sizes.
- **Navigation:** Horizontal nav on desktop; single hamburger + overlay/sheet on mobile with same links and CTA.

---

## 7. SEO Structure

- **Metadata (per page):** `title`, `description`, `openGraph` (title, description, image, type), optional `twitter` card; use Next.js `generateMetadata` or static `metadata` export in each route.
- **Semantic HTML:** One `<h1>` per page (e.g. hero or page title); logical heading hierarchy (`h2` → `h3`); `<main>`, `<nav>`, `<footer>`, `<article>` where appropriate.
- **Structured data:** JSON-LD for `LocalBusiness` (and optionally `Restaurant`) on home or contact: name, address, telephone, openingHours, image, geo.
- **URLs:** Clean, static routes: `/`, `/menu`, `/about`, `/contact`; no unnecessary query params for core content.
- **Sitemap:** Use Next.js sitemap generation for production.
- **Robots:** Allow indexing of public pages; no sensitive paths exposed.

---

## 8. Image Usage Strategy

- **Format:** Prefer WebP/AVIF via Next.js Image; fallback for older browsers.
- **Sizing:** Define explicit or responsive `width`/`height` (or fill + aspect ratio) to avoid layout shift; use `sizes` for responsive loading.
- **Placement:** `public/images/` with subfolders by section (hero, menu, about, og); name files descriptively (e.g. `shawarma-plate.webp`).
- **Hero:** One high-impact hero image; optimize and serve at 2x for retina where needed.
- **Menu:** Optional per-item or per-category image; reuse placeholder or single “category” image if assets are limited.
- **OG image:** Dedicated image in `public/images/og/` (e.g. 1200×630) for social sharing; reference in metadata.
- **Performance:** Lazy-load below-the-fold images; priority for LCP image (hero).
- **Alt text:** Descriptive alt for every image (food, ambiance, logo) for a11y and SEO.

---

## 9. Navigation and CTA Strategy

- **Primary CTA:** “Order now” or “View menu” — one main action above the fold (hero); same CTA in header and possibly sticky on scroll.
- **Secondary:** “Call us” (tel: link) and “Find us” (map or address); visible in header (e.g. icon) and footer.
- **Navigation:** Persistent header with: Home, Menu, About, Contact only. No internal Order page. “Order now” is a CTA button that links directly to an external ordering URL (e.g. third-party delivery/ordering site) or to `tel:` for phone orders.
- **Behavior:**  
  - Order CTA → external ordering link or `tel:` (configured in constants); never to an internal `/order` route.  
  - Menu CTA → `/menu` or anchor to `#menu` on home if menu preview exists.  
  - Buttons: clear visual hierarchy (primary = filled, secondary = outline); consistent placement across pages.
- **Mobile:** Same CTAs inside mobile nav; consider sticky bar with “Call” and “Order” for quick access.
- **Footer:** Repeat key links and CTAs so users don’t have to scroll back up.

---

## 10. Best Practices for a Local Restaurant Website

- **Speed:** Keep bundle small; lazy-load below-fold and non-critical components; optimize images and fonts; aim for strong Core Web Vitals (LCP, INP, CLS).
- **Trust:** Show real photos (food, interior, team); clear address, hours, and phone; link to Google Maps and social proof (reviews) if available.
- **Clarity:** Prominent hours and “Open now” if feasible; one clear phone number; short, scannable menu with prices.
- **Accessibility:** Semantic HTML, keyboard navigation, focus states, sufficient contrast, alt text; test with screen reader and keyboard only.
- **Local SEO:** Consistent NAP (name, address, phone); LocalBusiness schema; unique title/description per page; optional location pages if multiple venues later.
- **Maintainability:** Menu and constants in one place; typed data; component story or checklist for future content updates.
- **Future-friendly:** Structure menu and content so they can later be moved to a CMS or API without redesigning the app.

---

## Implementation Order (Recommended)

1. Project setup (Next.js, TypeScript, Tailwind, base folder structure).  
2. Design tokens (colors, typography, spacing in Tailwind and globals).  
3. Layout shell (Header, Footer, Nav, Container, Section); include Order CTA in header/footer linking to external URL/tel from constants.  
4. Menu data + types + simple menu page.  
5. Home page (Hero, FeaturedMenu, AboutPreview, CTAStrip).  
6. Menu page polish (sections, optional filters).  
7. About and Contact pages.  
8. Images, metadata, JSON-LD, sitemap.  
9. Responsive and a11y pass, then performance check.

Use this plan as the single reference for implementation so the site stays organized, on-brand, and easy to extend.
