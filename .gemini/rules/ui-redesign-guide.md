# UI & UX Redesign Guidelines (Playbook Standards)

All UI development, component implementation, and styling in Dubai Architecture must adhere to the design system established in [web-interface-redesign-guide.md](file:///d:/Torshkhoev/Проекты/Dubai Architecture/docs/web-interface-redesign-guide.md).

## Core Directives for Dubai Architecture

1. **Spatial Scale & Grids (4px Base Module)**:
   - Use standard 4px multiples only (`space-xxs: 4px`, `space-xs: 8px`, `space-sm: 12px`, `space-md: 16px`, `space-lg: 24px`, `space-xl: 32px`, `space-2xl: 40px`).
   - Tailwind classes: `p-1`, `p-2`, `p-3`, `p-4`, `p-6`, `p-8`, `p-10`.
   - Never use arbitrary unaligned values (such as `7px`, `19px`, `21px`, `28px`, `31px`).
   - In form fields: 12px label-to-input gap, 32px group-to-group gap.

2. **Typography Architecture**:
   - Base body size: 16px (`text-base`). Minimum text size anywhere: 12px (`text-xs`). Below 10px is strictly prohibited.
   - Line height: 1.5–1.6 (150–160%) for body text; 1.2–1.3 (120–130%) for large headings (`leading-tight`).
   - Line length: 45 to 75 characters per line (`max-w-prose` / container limit) for readability.
   - Text alignment: Left-aligned for copy; right-aligned strictly for numbers/tables/metrics.
   - Families: Maximum 2 font families. Avoid thin/extra-light weights.

3. **Color Balance & WCAG AA Contrast**:
   - **No pure black (`#000000`) text** on light backgrounds; use soft dark graphite (`#1A1A1A` or Tailwind `zinc-900`/`neutral-900`).
   - In dark themes: avoid glaring pure white (`#FFFFFF`) text, use `#F2F2F2` for headings and `#CACACA` for body copy.
   - Primary accent color is strictly reserved for interactive actions (CTA buttons, active links).
   - WCAG AA compliant: minimum 4.5:1 contrast for normal text, 3:1 for large text.
   - Semantic status indicators (success, warning, error) must never rely on color alone; always pair with an icon and descriptive text.

4. **Depth, Shadows & Glassmorphism**:
   - 3-tier shadow system: Soft (cards/previews), Medium (modals/hover), Strong (dropdowns/critical overlays).
   - Tinted shadows: Shadows on colored backgrounds must incorporate the background hue rather than flat dirty gray.
   - Borders: Subtle 1px borders (`border border-zinc-200/50` or `border-zinc-800/50`).
   - Glassmorphism: Only with sufficiently darkened/blurred backdrop to guarantee text contrast.

5. **Component Standards (Cards, Buttons, Grids)**:
   - **Catalog Cards**: Equal height in every row (`h-full flex flex-col`).
   - **CTA Buttons**: Pin to bottom of card with automatic margin (`mt-auto`).
   - **Metrics vs Labels**: Avoid monotonic "Key: Value" lists. Key architectural metrics (Height, Floors, Completion Year) must be prominent bold figures with iconography and compact badges, not plain text tables.
   - **Button Hierarchy**: Unified system across the entire site (Primary = filled solid, Secondary = subtle border/surface, Tertiary = text/ghost link). Never vary button colors randomly per card.

6. **Interaction Cost Reduction**:
   - Mobile interactive zones positioned within comfortable reach (Thumb Zone).
   - Instant visual feedback on interactions without sluggish or distracting banner animations.
   - Informative empty and error states with clear recovery actions.
