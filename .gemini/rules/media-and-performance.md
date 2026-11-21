# Media & Web Performance Directives

All new buildings, districts, pages, and components in Dubai Architecture must strictly adhere to these performance rules to prevent performance regression.

## 1. Automated Media Pipeline & Format Standards
- **WebP-First Standard**: All building and district images must be in `.webp` format.
- **Maximum Resolution**: 1600px max width/height (preserving aspect ratio, `fit: 'inside'`).
- **File Size Target**: Target < 150 KB per building image (never exceed 250 KB).
- **Automated Prebuild Guard**:
  - `npm run prebuild` runs `scripts/optimize-images.mjs` automatically before every build.
  - If a developer or script places a `.jpg` or `.png` into `public/images/`, `scripts/optimize-images.mjs` will automatically resize, generate a lightweight `.webp`, optimize the fallback `.jpg` for social sharing, and update `src/data/buildings.ts` and `src/data/districts.ts`.
  - Manual run: `npm run optimize:images`.

## 2. Image Loading Strategy in Next.js Components
- **Above the Fold (LCP Element)**:
  - The single hero/primary image of a page (e.g., Hero skyline on `/`, main building photo on `/buildings/[slug]/`, district banner on `/districts/[slug]/`) **must** include `priority`.
- **Below the Fold (Catalog, Grids, Modals)**:
  - All catalog cards, lists, related buildings, and modals **must never** have `priority`. They must use default lazy loading (`loading="lazy"`).
  - Every `<Image fill />` must have accurate `sizes="..."` defined to prevent browser overfetching on mobile devices.

## 3. Fonts & Scripts Strategy
- **Fonts**:
  - Always use `next/font/google` with `display: 'swap'`. Do not inject external `<link href="https://fonts.googleapis.com...">` tags.
- **Analytics & Third-Party Scripts**:
  - Session recording/heatmap tools (e.g., Microsoft Clarity) must use `strategy="lazyOnload"` so they never delay First Contentful Paint (FCP) or block user interactivity.
