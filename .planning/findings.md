# Landbridge — Findings

## Project Context
- **Client:** Devin (Landbridge) — commercial multifamily bird-dog / off-market deal sourcing
- **Current site:** uselandbridge.com hosted on GoHighLevel
- **Goal:** Rebuild as custom Next.js site on Vercel with Supabase form backend
- **Business model:** Source off-market apartment buildings for investors, $50-100k assignment fees

## Existing Assets
- Full-page screenshot of current GoHighLevel site captured
- Detailed build plan with all content mapped section-by-section
- Color system, typography, and design patterns documented
- Supabase schema for `property_submissions` table defined

## Architecture Decisions
- **Stack:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Framer Motion
- **Fonts:** Playfair Display (headings) + Outfit (body) via next/font
- **Form backend:** Supabase with anon insert policy (RLS)
- **Hosting:** Vercel with custom domain
- **Package manager:** pnpm (workspace convention)

## Assets Needed (from Devin)
- Landbridge logo SVG (fallback: recreate or extract)
- Hero background image (fallback: stock photo)
- Service/solution card icons (fallback: Lucide icons)

## Related Engagement
- Website is phase 1 of larger engagement
- Future: Supabase property DB, Deal Automator scraper, scoring model, buyer CRM
