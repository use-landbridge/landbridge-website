---
title: "Landbridge Website — Next.js Build Plan"
client: LBR
status: ready-to-execute
created: 2026-02-21
updated: 2026-02-21
owner: Avi
source: https://uselandbridge.com/
tags: [website, nextjs, vercel, supabase, tailwind, react]
---

# Landbridge Website — Next.js Build Plan

Rebuild uselandbridge.com from GoHighLevel to a custom Next.js site. Keep all existing content and design language. Polish the visual quality, improve performance, and wire up a Supabase-backed contact form.

**Source site:** https://uselandbridge.com/
**Screenshot reference:** See `docs/screenshots/` for full-page captures

---

## Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | **Next.js 16** (App Router) | Matches Tempest House convention |
| UI | **React 19** + **Tailwind CSS v4** | Utility-first, dark theme |
| Animations | **Framer Motion** | Scroll reveals, counter animations |
| Icons | **Lucide React** | Checkmarks, section icons, social |
| Fonts | **Playfair Display** (headings) + **Outfit** (body) | Google Fonts via `next/font` |
| Form backend | **Supabase** | `property_submissions` table |
| Deployment | **Vercel** | `uselandbridge.com` custom domain |
| Package manager | **pnpm** | Matches workspace convention |

---

## Design System

### Colors (from original site)

```
--bg-primary:       #0E182C    (deep navy — hero, compare, footer)
--bg-secondary:     #0a0020    (darker navy — stats bar, alternating sections)
--bg-surface:       #FFFFFF    (white — services, process, savings, solutions)
--accent-primary:   #454DFF    (bright indigo — buttons, CTA sections)
--accent-secondary: #00C796    (teal — checkmarks, icons, highlights)
--accent-gradient:  linear-gradient(135deg, #454DFF, #6C63FF)
--text-primary:     #FFFFFF    (on dark backgrounds)
--text-heading:     #1A1A2E    (on white backgrounds)
--text-body:        #565A7C    (on white backgrounds)
--text-muted:       #8893A8    (labels, captions)
--border-subtle:    #E5E7EB    (cards on white)
--border-dark:      #1F2937    (cards on dark)
```

### Typography

```
Headings:   Playfair Display, serif — italic emphasis on key words
Body:       Outfit, sans-serif — clean, modern
Stats:      Playfair Display, serif — large numerals
Labels:     Outfit uppercase, letter-spacing: 0.15em, text-sm
```

### Design Patterns

- **Section rhythm:** Alternating dark/light backgrounds
- **Emphasis pattern:** Key words in headings use `<em>` with italic Playfair Display + sometimes bold
- **Label chips:** Small uppercase "CONCIERGE SERVICES", "Our simple process", etc. above headings
- **Icon cards:** Teal/green icon image + bold title + description paragraph
- **Three-column grids:** Services cards, process steps, savings cards, solutions grid
- **Comparison table:** Grid-based with green checkmarks / red X indicators
- **FAQ accordion:** Expand/collapse with chevron indicator
- **Stats bar:** Full-width dark band with 4 large stat counters

### Design Polish Upgrades

- Smooth scroll-triggered animations (fade-up, stagger children)
- Animated counter for stats section (0 → 30, 0 → 50, etc.)
- Subtle gradient overlays on dark sections
- Better card hover states with lift + shadow
- Improved mobile spacing and typography scale
- Sticky header with blur backdrop on scroll
- Smooth anchor scroll for nav links

---

## Site Structure

Single-page site with anchor navigation + 2 legal pages:

```
src/
├── app/
│   ├── layout.tsx              # Root layout, fonts, metadata
│   ├── page.tsx                # Homepage (assembles all sections)
│   ├── privacy/page.tsx        # Privacy policy
│   ├── terms/page.tsx          # Terms & conditions
│   └── api/
│       └── submit-property/
│           └── route.ts        # POST → Supabase
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Sticky nav + mobile menu + "Get an offer" CTA
│   │   └── Footer.tsx          # Social links, copyright, legal links
│   ├── home/
│   │   ├── Hero.tsx            # Hero with tagline, subtitle, benefits grid, CTAs
│   │   ├── Services.tsx        # "Our support, your terms" — 6 icon cards
│   │   ├── Process.tsx         # "We specialize in simplicity" — 3 numbered steps
│   │   ├── Stats.tsx           # Stats bar: $0, 30 days, 24/7, 50 states
│   │   ├── Compare.tsx         # Comparison table: Landbridge vs Agency vs FSBO
│   │   ├── Savings.tsx         # "Best things in life are free" — 6 savings cards + total
│   │   ├── Solutions.tsx       # "Solutions for every situation" — 12 scenario cards
│   │   ├── CTA.tsx             # "Ready to unlock" banner + form
│   │   └── FAQ.tsx             # 8 accordion items
│   └── ui/
│       ├── Button.tsx          # Primary/secondary/outline variants
│       ├── Container.tsx       # Max-width wrapper
│       ├── SectionWrapper.tsx  # Alternating bg, padding, scroll-animation wrapper
│       ├── SectionLabel.tsx    # Uppercase label chip
│       ├── AccordionItem.tsx   # FAQ expand/collapse
│       └── AnimatedCounter.tsx # Intersection observer + count-up animation
├── lib/
│   ├── supabase.ts             # Supabase client init
│   └── constants.ts            # Nav items, social links, form options
└── styles/
    └── globals.css             # Tailwind imports, CSS variables, custom utilities
```

---

## Content Map (Section by Section)

### 1. Header

| Element | Content |
|---------|---------|
| Logo | Landbridge logo (image — need asset from Devin or extract from site) |
| Nav items | Services, Process, Compare, Savings, Solutions |
| CTA button | "Get an offer" → scrolls to form |
| Mobile | Hamburger menu |

### 2. Hero

| Element | Content |
|---------|---------|
| H1 | "Turn your property into **_possibility._**" |
| Subtitle | "Landbridge unlocks the value of your property by matching you with qualified buyers and managing the process every step of the way — giving you the freedom to move on without the hassle, stress or cost you might expect." |
| Benefits grid | 3 columns x 3 rows with teal checkmarks: |
| Col 1 | Free property estimate, No obligation offer, Quick cash closing |
| Col 2 | No commissions or fees, No closing costs, Personal concierge |
| Col 3 | Seller advocate, No hassle or pressure, Motivated buyers |
| CTA buttons | "Get an offer" (primary), "How we work" (outline) |
| Background | Dark navy with hero image overlay |

### 3. Services — "Our support, your terms."

| Element | Content |
|---------|---------|
| Label | "CONCIERGE SERVICES" |
| H2 | "Our support, **_your_** terms." |
| Subtitle | "Whether you're overwhelmed by upkeep, burdened by back taxes, or just ready to move on — we're here to help you understand your options so you can sell on your terms." |
| Cards (6) | |
| Card 1 | **Dedicated Concierge** — "Our team manages all the paperwork, communications and logistics so you can just sit back and relax" |
| Card 2 | **Costs Covered** — "No agent commissions, closing costs or hidden fees — bonus, our buyers typically clear any back taxes or fines" |
| Card 3 | **Seller Advocate** — "We get to know you and your situation so we're able to represent your interests and exceed your expectations" |
| Card 4 | **Clear Communication** — "Expert advice, honest explanations and ample time to consider your options without any pressure" |
| Card 5 | **Qualified Buyers** — "By leveraging our relationships with investors in local markets we are able to negotiate competitive cash offers" |
| Card 6 | **Creative Financing** — "Our innovative financing strategies allow us to find a solution that keeps more money in your pocket" |

### 4. Process — "We specialize in simplicity."

| Element | Content |
|---------|---------|
| Label | "Our simple process" |
| H2 | "We specialize in **_simplicity._**" |
| Subtitle | "Our team manages the entire process, from negotiations to administration — you remain in control while delegating the heavy lifting to us." |
| Step 1 | **Submit a property** — "Simply fill out a short form and we'll take it from there — making it easy to get started with zero risk or commitment" |
| Step 2 | **Receive an offer** — "We conduct market research and contact buyers in your local market to get you a competitive cash offer within 24–48 hours" |
| Step 3 | **Close on your terms** — "You review the offer and decide when and how you want to move forward based on your needs and timeline" |
| CTA | "Submit your property" → scrolls to form |

### 5. Stats Bar

| Stat | Label | Note |
|------|-------|------|
| $0 | Out-of-pocket cost | "Buyers cover closing costs and fees" |
| 30 | Days to close* | "Offering you quick cash deals" |
| 24/7 | Concierge support | "Our support team is always on" |
| 50 | States serviced | "Proudly serving all U.S. markets" |

Footnote: "* Average time to close once an offer has been accepted, however this varies per contract"

### 6. Compare — "Sometimes no actually means yes."

| Element | Content |
|---------|---------|
| Label | "How we compare" |
| H2 | "Sometimes **_\"no\"_** actually means **_\"yes\"._**" |
| Subtitle | "Say goodbye to the hassles, headaches and hidden costs of selling the traditional way — let us handle it for you, on your terms." |

**Comparison grid (11 rows):**

| Category | Landbridge | Agency | FSBO |
|----------|-----------|--------|------|
| Agent fees | No fees | 5-6% | 2-3%* |
| Closing costs | No costs | 2-4% | 2-4%* |
| Repairs | Sell as-is | Often required | Often required |
| Negotiations | Landbridge manages | Agent mediates | Seller negotiates |
| Open houses | Not required | Often required | Often required |
| Paperwork | Landbridge manages | Agent and seller manage | Seller manages |
| Marketing | Off-market | Agent manages | Seller manages |
| Signage | Private sale | Yard signs and listings | Yard signs and listings |
| Hassle | Hands-off | Agent and seller manage | Seller manages |
| Delays | Close within 30 days | Typically 60-90 days | Often 90+ days |
| Banks | Direct wire transfer | Contingencies & appraisals | Contingencies & appraisals |

**Summary row:**
- Landbridge: "No cost, hands-off, quick and private cash closing"
- Agency: "Higher cost (7-10%) and contingencies"
- FSBO: "Lower cost (4-7%), hands-on, hidden fees*"

Footnote: "* FSBO sellers may cover buyer's agent commissions, legal and transfer fees, listing and promotion fees, staging, repairs and other incidental costs."

### 7. Savings — "The best things in life are free."

| Element | Content |
|---------|---------|
| Label | "How you save" |
| H1 | "The best things in life **_are_** free." |
| Subtitle | "Our purpose is to help homeowners in difficult situations, so we make sure our buyers cover all of the costs — so you can move on free and clear." |

**Savings cards (6):**

| Category | Description | Avg Savings |
|----------|-------------|-------------|
| Closing costs | Title services, transfer taxes and settlement fees are covered | 2% + $4,000 |
| Legal fees | Our standardized agreements make attorneys unnecessary | $1,500 |
| Service fees | Our service fees are included in the cost of the property | $9,000 |
| Marketing spend | Direct off-market deals do not require advertising or MLS listings | $1,500 |
| Delinquent taxes | Buyers will make sure any back taxes are settled upon closing | Variable |
| Penalties and fines | Buyers will pay fines from code violations and local ordinances | Variable |

**Total: $19,000±** (based on avg costs of selling a $150,000 property)

CTA: "Estimate your savings" → scrolls to form

### 8. Solutions — "Solutions for every situation."

| Element | Content |
|---------|---------|
| Label | "How we help" |
| H2 | "Solutions for **_every_** situation." |
| Subtitle | "From back taxes to bad tenants, we have solutions for every scenario you might be facing." |

**12 scenario cards (4 rows x varying columns):**

| Scenario | Description |
|----------|-------------|
| Foreclosure | We can work within tight timeframes to help you sell fast and avoid a potential foreclosure |
| Distressed properties | No repairs, improvements or clean-up needed — we'll take the property as-is |
| Inheritance | Turn an inherited family property into someone's dream home |
| Property liens | We collaborate with investors to help resolve liens pre-sale |
| Code violations | Let us take the burden of upkeep off your hands and clear your fines |
| Delinquent taxes | Avoid liens or auctions by accepting a quick cash offer, and let our buyers settle your debt |
| Tenant turnover | Let us take your underperforming property off your hands so you can stop worrying about renters |
| Divorce | A simple, amicable solution to liquidate shared assets |
| Relocation | Cash out your equity before starting your next chapter |
| Downsizing | Free up equity in a property you no longer need |
| Out of state | We handle everything locally so there's no need to be onsite |

### 9. CTA + Form — "Ready to unlock the value of your property?"

| Element | Content |
|---------|---------|
| H2 | "**Ready to unlock the value of your property?**" |
| Subtitle | "Get your personalized cash offer and take the first step on your path to financial freedom." |
| Form heading | "Let's explore your options." |
| Form note | "Offers are 100% free and carry no obligation to accept." |

**Form fields:**

| Field | Type | Placeholder | Required |
|-------|------|-------------|----------|
| First Name | text | Ron | Yes |
| Last Name | text | Swanson | Yes |
| Phone | tel | (987) 654-3210 | Yes |
| Email | email | ron@parks-rec.com | Yes |
| Postal code | text | 98765 | Yes |
| Type of property | select | Select one | Yes |
| Timeframe | select | How quickly do you need cash? | No |
| Transactional consent | checkbox | I consent to receive transactional messages... | — |
| Terms consent | checkbox | I agree to the Terms & Conditions and Privacy Policy... | — |

CTA button: "Submit your property"
Footer note: "Your personal information is safe with us — we never spam, sell or solicit."

### 10. FAQ — "Questions? We're here to help."

| Element | Content |
|---------|---------|
| Label | "Common questions" |
| H2 | "Questions? We're here to help." |
| Subtitle | "Straightforward answers, without the fine print — no magnifying glass required." |

**8 FAQ items:**

1. **Why should I use Landbridge instead of listing with a realtor?** — A lot of our clients don't want the hassle or cost of cleaning, staging, repairs, or open houses — they just want to move on. We offer a simple, no-hassle cash solution that skips the traditional listing process — with no commissions or fees.

2. **How do you come up with your offer?** — We extensively research local market data, factor in the condition and location of your property, and work closely with our network of investors to provide a fair cash offer.

3. **How long does the process take?** — Once you complete the property assessment form, our team typically responds within 1-2 business days with an initial offer. You can take as much time as you need to review and ask questions before signing any paperwork. Once you're comfortable with the terms, most deals close within 30-45 days.

4. **Will I have to pay anything out of pocket?** — No, there are no out-of-pocket expenses incurred by the seller. We are not an agency, therefore you will not pay any realtor commissions or service fees, and our buyers cover closing costs.

5. **What happens if I have delinquent taxes or penalties?** — If you are behind on taxes or have incurred penalties on your property, we're often able to pass those fees onto the buyer — allowing you to move on, free and clear.

6. **How are you able to offer your services for free?** — We exist to help homeowners that are in distressed situations, so we've designed our business model to make sure all costs are covered by the buyer.

7. **What types of properties do you buy?** — We primarily focus on residential or mixed-use properties and have motivated buyers around the country for vacant lots, single-family homes, fixer-uppers, tear-downs, rentals, pre-foreclosure, inherited properties and more. Once you have submitted our property assessment form, we will be able to let you know if your property qualifies.

8. **If I'm not sure if I want to sell, can I still get an offer?** — Absolutely! We understand that you need to explore your options before making a decision, which is why your personalized offer is totally free and carries no obligation to sell — we're simply starting the conversation.

### 11. Footer

| Element | Content |
|---------|---------|
| Social | Facebook (@uselandbridge), Instagram (@uselandbridge) |
| Copyright | © 2025 Landbridge - All Rights Reserved |
| Legal links | Privacy Policy, Terms and Conditions |

---

## Supabase Schema

### Table: `property_submissions`

```sql
CREATE TABLE property_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  property_type TEXT NOT NULL,
  timeframe TEXT,
  consent_transactional BOOLEAN DEFAULT false,
  consent_terms BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  status TEXT DEFAULT 'new'
);

-- Row Level Security
ALTER TABLE property_submissions ENABLE ROW LEVEL SECURITY;

-- Only allow inserts from anon (public form submissions)
CREATE POLICY "Allow public inserts"
  ON property_submissions FOR INSERT
  TO anon
  WITH CHECK (true);
```

### Property type options (for select dropdown):
- Single-family home
- Multi-family / Duplex
- Townhouse / Condo
- Vacant lot / Land
- Mixed-use
- Commercial
- Mobile home
- Other

### Timeframe options:
- ASAP / Emergency
- Within 30 days
- 1–3 months
- 3–6 months
- No rush — just exploring

---

## Build Sequence

### Phase 1: Scaffold (30 min)

```bash
cd ~/avi\ code\ work/client\ projects/
npx create-next-app@latest landbridge-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
cd landbridge-website
pnpm add framer-motion lucide-react @supabase/supabase-js
```

- Set up fonts (Playfair Display + Outfit) in `layout.tsx`
- Configure Tailwind CSS v4 with color tokens in `globals.css`
- Create `CLAUDE.md` with project conventions
- `git init && git remote add origin` (create repo on GitHub first)

### Phase 2: Layout Shell (30 min)

- `Header.tsx` — Sticky nav with blur backdrop, mobile hamburger, smooth anchor scroll
- `Footer.tsx` — Social links, legal links, copyright
- `layout.tsx` — Wrap with Header/Footer, set metadata + OG tags
- UI primitives: `Button`, `Container`, `SectionWrapper`, `SectionLabel`

### Phase 3: Hero + Services + Process (1 hr)

- `Hero.tsx` — Dark bg, large Playfair heading with italic emphasis, benefits grid, dual CTAs
- `Services.tsx` — White bg, 3x2 icon card grid with teal accents
- `Process.tsx` — Indigo/purple bg, 3 numbered step cards, CTA button
- Framer Motion scroll-triggered fade-in animations

### Phase 4: Stats + Compare (1 hr)

- `Stats.tsx` — Full-width dark bar, 4 animated counters with `AnimatedCounter.tsx`
- `Compare.tsx` — Dark bg, grid-based comparison table with green check / red X indicators
- Responsive: table scrolls horizontally on mobile, or collapses to stacked cards

### Phase 5: Savings + Solutions (1 hr)

- `Savings.tsx` — White bg, 2x3 card grid with icon + title + description + savings amount, total callout
- `Solutions.tsx` — White bg, responsive grid of 12 scenario cards with icons
- Both sections follow the same SectionLabel + H2 + subtitle pattern

### Phase 6: CTA Form + FAQ (1 hr)

- `CTA.tsx` — Split layout: left = dark CTA text, right = form card
- Form posts to `/api/submit-property` → Supabase
- Client-side validation, loading state, success/error feedback
- `FAQ.tsx` — Accordion component with smooth expand/collapse animation
- 8 FAQ items from content map

### Phase 7: Legal Pages + SEO (30 min)

- `/privacy` and `/terms` — placeholder content (Devin to provide final copy)
- `metadata` in `layout.tsx`: title, description, OG image
- `robots.ts` and `sitemap.ts`
- Favicon + apple-touch-icon (from Landbridge logo)

### Phase 8: Deploy + DNS (30 min)

- Push to GitHub: `github.com/airful-io/landbridge-website` (or Devin's org)
- Connect to Vercel
- Set custom domain: `uselandbridge.com`
- Configure Supabase env vars in Vercel
- Verify form submission flow end-to-end
- Update DNS from GoHighLevel → Vercel

---

## Assets Needed

| Asset | Source | Fallback |
|-------|--------|----------|
| Landbridge logo (SVG) | Devin / extract from site | Recreate in Figma |
| Hero background image | Current site | High-quality stock photo (woman on couch) |
| Service card icons (6) | Current site | Lucide icons with teal accent |
| Solution card icons (12) | Current site | Lucide icons or emoji |
| Social media icons | Lucide React | Built-in |
| OG image (1200x630) | Generate | Branded template with tagline |

**Extraction approach:** Use Playwright to download image assets from the current site, or ask Devin for original assets.

---

## Environment Variables

```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
```

---

## Post-Launch Enhancements (Future)

- [ ] Email notification on new submission (Supabase Edge Function or webhook)
- [ ] Seller dashboard / status tracker
- [ ] Blog section for SEO content
- [ ] A/B testing on hero copy / CTA placement
- [ ] Google Analytics / Meta Pixel for ad tracking
- [ ] Property type-specific landing pages for ad campaigns
- [ ] Spanish language support
