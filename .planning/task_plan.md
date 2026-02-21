# Landbridge Website — Task Plan

**Source:** `docs/build-plan.md`
**Status:** executing
**Started:** 2026-02-21

---

## Phase 1: Scaffold (30 min)
- [ ] `create-next-app` with TS, Tailwind, App Router, pnpm
- [ ] Install deps: framer-motion, lucide-react, @supabase/supabase-js
- [ ] Set up fonts (Playfair Display + Outfit) in layout.tsx
- [ ] Configure Tailwind CSS v4 with color tokens in globals.css
- [ ] Create CLAUDE.md with project conventions
- [ ] Git init + remote

## Phase 2: Layout Shell (30 min)
- [ ] Header.tsx — Sticky nav, blur backdrop, mobile hamburger, smooth anchor scroll
- [ ] Footer.tsx — Social links, legal links, copyright
- [ ] layout.tsx — Wrap with Header/Footer, metadata + OG tags
- [ ] UI primitives: Button, Container, SectionWrapper, SectionLabel

## Phase 3: Hero + Services + Process (1 hr)
- [ ] Hero.tsx — Dark bg, Playfair heading, benefits grid, dual CTAs
- [ ] Services.tsx — White bg, 3x2 icon card grid with teal accents
- [ ] Process.tsx — Indigo/purple bg, 3 step cards, CTA
- [ ] Framer Motion scroll-triggered animations

## Phase 4: Stats + Compare (1 hr)
- [ ] Stats.tsx — Full-width dark bar, 4 animated counters
- [ ] AnimatedCounter.tsx — Intersection observer + count-up
- [ ] Compare.tsx — Grid comparison table with check/X indicators

## Phase 5: Savings + Solutions (1 hr)
- [ ] Savings.tsx — 2x3 card grid, savings amounts, total callout
- [ ] Solutions.tsx — 12 scenario cards responsive grid

## Phase 6: CTA Form + FAQ (1 hr)
- [ ] CTA.tsx — Split layout: CTA text + form card
- [ ] /api/submit-property route.ts → Supabase
- [ ] Client-side validation, loading/success/error states
- [ ] FAQ.tsx — 8 accordion items with expand/collapse
- [ ] AccordionItem.tsx component

## Phase 7: Legal Pages + SEO (30 min)
- [ ] /privacy and /terms placeholder pages
- [ ] metadata, robots.ts, sitemap.ts
- [ ] Favicon + apple-touch-icon

## Phase 8: Deploy + DNS (30 min)
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Set custom domain: uselandbridge.com
- [ ] Configure Supabase env vars
- [ ] Verify form submission e2e
