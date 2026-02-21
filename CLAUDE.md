# Landbridge Website

## Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 with CSS variable tokens
- Framer Motion for scroll animations
- Lucide React for icons
- Supabase for form backend
- pnpm package manager

## Conventions
- Fonts: Playfair Display (headings, `font-heading`) + Outfit (body, `font-body`)
- Colors: CSS variables in globals.css, mapped to Tailwind via `@theme inline`
- Components: `src/components/{layout,home,ui}/`
- Section pattern: SectionWrapper handles alternating bg + scroll animations
- Emphasis pattern: `<em>` with italic Playfair Display on key words in headings
- Label chips: uppercase SectionLabel above section headings

## Commands
- `pnpm dev` — dev server
- `pnpm build` — production build
- `pnpm lint` — eslint
