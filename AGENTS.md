<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Media & Performance Rules for Adding New Buildings

1. **Images Format & Size**:
   - All building images must be in `.webp` format and placed under `public/images/buildings/<slug>.webp`.
   - Never reference or commit raw multi-megabyte uncompressed photos. Target size is < 150 KB.
   - Any raw images in `public/images/` can be automatically processed via `npm run optimize:images` (also executes automatically on `npm run build` via `prebuild`).
2. **Next.js `<Image>` Rules**:
   - `priority` is STRICTLY reserved for the single LCP Hero image of a page.
   - Cards, related listings, and modals must omit `priority` and use native lazy loading.
   - Always supply responsive `sizes` attribute.
3. **Fonts & Scripts**:
   - Fonts are self-hosted via `next/font/google`.
   - Heavy client tracking scripts (Clarity) use `strategy="lazyOnload"`.
