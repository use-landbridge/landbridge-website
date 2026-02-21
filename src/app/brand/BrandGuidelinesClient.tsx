"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Helpers ───────────────────────────────── */

function useInView(options: IntersectionObserverInit = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }}
      className="text-[10px] uppercase tracking-wider text-gray-400 hover:text-accent-primary transition-colors cursor-pointer"
      title="Copy to clipboard"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  const [ref, inView] = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-12 lg:mb-16"
    >
      <span className="text-accent-primary text-xs font-semibold tracking-[0.15em] uppercase mb-2 block font-body">
        {label}
      </span>
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-text-body text-sm sm:text-base max-w-2xl leading-relaxed font-body">
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ── Data ──────────────────────────────────── */

const colors = [
  {
    name: "Deep Navy",
    hex: "#0E182C",
    rgb: "rgb(14, 24, 44)",
    tailwind: "bg-primary",
    usage: "Primary — hero, headers, dark sections, footer",
    meaning: "Trust, authority, professionalism — the foundation of a reliable bridge",
  },
  {
    name: "Dark Navy",
    hex: "#0A0020",
    rgb: "rgb(10, 0, 32)",
    tailwind: "bg-secondary",
    usage: "Stats bar, FAQ, alternating dark sections",
    meaning: "Depth, sophistication, the weight behind every deal",
  },
  {
    name: "Bright Indigo",
    hex: "#454DFF",
    rgb: "rgb(69, 77, 255)",
    tailwind: "accent-primary",
    usage: "Buttons, CTAs, links, active states",
    meaning: "Action, energy, forward momentum — the bridge that moves things forward",
  },
  {
    name: "Teal",
    hex: "#00C796",
    rgb: "rgb(0, 199, 150)",
    tailwind: "accent-secondary",
    usage: "Icons, checkmarks, highlights, success states",
    meaning: "Growth, positivity, the green light to move on",
  },
  {
    name: "White",
    hex: "#FFFFFF",
    rgb: "rgb(255, 255, 255)",
    tailwind: "bg-surface",
    usage: "Body background, light sections, card surfaces",
    meaning: "Clarity, transparency, nothing to hide",
  },
  {
    name: "Body Text",
    hex: "#565A7C",
    rgb: "rgb(86, 90, 124)",
    tailwind: "text-body",
    usage: "Paragraph text on light backgrounds",
    meaning: "Readable, calm, approachable",
  },
];

const typeScale = [
  {
    level: "Display",
    font: "Playfair Display",
    weight: "700",
    size: "4.5rem / 72px",
    sample: "Landbridge",
  },
  {
    level: "H1",
    font: "Playfair Display",
    weight: "700",
    size: "3.5rem / 56px",
    sample: "Turn your property into possibility.",
  },
  {
    level: "H2",
    font: "Playfair Display",
    weight: "700",
    size: "3rem / 48px",
    sample: "We specialize in simplicity.",
  },
  {
    level: "H3",
    font: "Playfair Display",
    weight: "700",
    size: "1.5rem / 24px",
    sample: "Dedicated Concierge",
  },
  {
    level: "Body LG",
    font: "Outfit",
    weight: "400",
    size: "1.125rem / 18px",
    sample:
      "Landbridge unlocks the value of your property by matching you with qualified buyers.",
  },
  {
    level: "Body",
    font: "Outfit",
    weight: "400",
    size: "1rem / 16px",
    sample:
      "Our team manages all the paperwork, communications and logistics so you can just sit back and relax.",
  },
  {
    level: "Caption",
    font: "Outfit",
    weight: "600",
    size: "0.75rem / 12px",
    sample: "CONCIERGE SERVICES • HOW WE COMPARE • 50 STATES",
  },
];

const voiceGuidelines = [
  {
    category: "Reassuring, Not Salesy",
    doExample: "We're here to help you explore your options — no pressure, no obligation",
    dontExample: "Act now! Limited-time cash offers available!",
  },
  {
    category: "Simple, Not Jargony",
    doExample: "We handle the paperwork so you don't have to",
    dontExample: "We facilitate transactional documentation and escrow management",
  },
  {
    category: "Empathetic, Not Patronizing",
    doExample: "We understand that selling a property can feel overwhelming",
    dontExample: "Don't worry, we know this is probably confusing for you",
  },
  {
    category: "Confident, Not Aggressive",
    doExample: "Our buyers cover all closing costs — that's how we do business",
    dontExample: "Unlike our competitors, we're the ONLY ones who offer zero fees",
  },
];

const embraceWords = [
  "Unlock", "Bridge", "Hands-off", "Concierge", "Simplicity",
  "Freedom", "Move on", "Your terms", "Qualified", "Competitive",
  "Cash offer", "No hassle", "No obligation", "Personalized",
  "Covered", "As-is", "Private", "Quick", "Trusted",
];

const avoidWords = [
  "Desperate", "Distressed", "Rock-bottom", "Lowball", "Flip",
  "Investor", "Wholesale", "Deal", "Motivated seller", "Urgently",
  "Guaranteed", "No-brainer", "Limited time", "Act now",
];

/* ── Component ────────────────────────────── */

export default function BrandGuidelinesClient() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-bg-primary text-white pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary/95 to-bg-secondary" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <span className="text-accent-primary text-xs font-semibold tracking-[0.15em] uppercase mb-4 block font-body">
            Landbridge
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            Brand Guidelines
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-xl leading-relaxed font-body">
            A reference for partners, vendors, agencies, and media — our logo,
            colour palette, typography, voice, and visual identity.
          </p>
        </div>
      </section>

      {/* ── 1. Brand Story ──────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="01 — Brand"
            title="The Landbridge Story"
            description="We exist to bridge the gap between property owners who want to move on and qualified buyers who are ready to act."
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="space-y-4 text-text-body text-sm sm:text-base leading-relaxed font-body">
              <p>
                Landbridge was built on a simple insight: selling a property
                shouldn&apos;t cost you money, time, or peace of mind. Traditional
                real estate is built around agents, commissions, open houses, and
                months of uncertainty. We took a different approach.
              </p>
              <p>
                We work backward from the buyer — connecting qualified investors
                with property owners who are ready to sell on their terms. No
                commissions, no closing costs, no repairs required. Just a
                straightforward cash offer, managed by a dedicated concierge
                team.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading text-xl text-text-heading mb-3">
                  The Name
                </h3>
                <ul className="space-y-2 text-sm text-text-body font-body">
                  <li>
                    <strong className="text-accent-primary">Land</strong> — The
                    property at the center of every transaction
                  </li>
                  <li>
                    <strong className="text-accent-primary">Bridge</strong> — The
                    connection we create between sellers and buyers
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-heading text-xl text-text-heading mb-3">
                  Tagline
                </h3>
                <p className="font-heading text-2xl text-accent-primary italic">
                  &ldquo;Turn your property into possibility.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Logo ─────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="02 — Logo"
            title="Logo"
            description="Our logo is the Landbridge wordmark set in Playfair Display. Always use the official files — never recreate or modify the logo."
          />

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-10">
            {/* Dark bg version */}
            <div className="bg-bg-primary rounded-2xl p-10 flex items-center justify-center min-h-[200px]">
              <span className="font-heading text-4xl font-bold text-white">
                Landbridge
              </span>
            </div>
            {/* Light bg version */}
            <div className="bg-white border border-gray-200 rounded-2xl p-10 flex items-center justify-center min-h-[200px]">
              <span className="font-heading text-4xl font-bold text-text-heading">
                Landbridge
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-body">
                Clear Space
              </h4>
              <p className="text-sm text-text-body font-body">
                Maintain a minimum clear space equal to the height of the
                &ldquo;L&rdquo; on all sides.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-body">
                Minimum Size
              </h4>
              <p className="text-sm text-text-body font-body">
                Print: 30mm wide. Digital: 120px wide. Never scale below these
                minimums.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-2 font-body">
                Don&apos;ts
              </h4>
              <p className="text-sm text-text-body font-body">
                Don&apos;t stretch, rotate, recolour, add effects, or place on
                busy backgrounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Colours ──────────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="03 — Colours"
            title="Colour Palette"
            description="Our palette conveys trust and action — deep navy foundations with bright indigo energy and teal optimism."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div
                key={color.hex}
                className="rounded-xl border border-gray-200 overflow-hidden bg-white"
              >
                <div className="h-28" style={{ backgroundColor: color.hex }} />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-text-heading text-sm font-body">
                      {color.name}
                    </h3>
                    <CopyButton text={color.hex} />
                  </div>
                  <div className="space-y-1 text-xs text-text-muted font-body">
                    <div className="flex justify-between">
                      <span>HEX</span>
                      <span className="font-mono text-text-body">
                        {color.hex}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>RGB</span>
                      <span className="font-mono text-text-body">
                        {color.rgb}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tailwind</span>
                      <span className="font-mono text-text-body">
                        {color.tailwind}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-[11px] text-text-muted uppercase tracking-wider mb-1 font-body">
                      Usage
                    </p>
                    <p className="text-xs text-text-body font-body">
                      {color.usage}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient */}
          <div className="mt-8 rounded-xl overflow-hidden">
            <div
              className="h-20 w-full"
              style={{
                background: "linear-gradient(135deg, #454DFF, #6C63FF)",
              }}
            />
            <div className="bg-gray-50 border border-gray-200 border-t-0 rounded-b-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium text-text-heading text-sm font-body">
                  Accent Gradient
                </h3>
                <p className="text-xs text-text-muted font-body mt-0.5">
                  Button backgrounds, CTA sections, hover states
                </p>
              </div>
              <CopyButton text="linear-gradient(135deg, #454DFF, #6C63FF)" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Typography ───────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="04 — Typography"
            title="Type System"
            description="Two typefaces create our visual hierarchy — Playfair Display for headlines that command attention and Outfit for body copy that reads clean."
          />

          {/* Font specimens */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-widest text-text-muted mb-3 block font-body">
                Primary — Headlines
              </span>
              <p className="font-heading text-5xl sm:text-6xl text-text-heading mb-4">
                Aa
              </p>
              <h3 className="font-heading text-xl text-text-heading mb-1">
                Playfair Display
              </h3>
              <p className="text-xs text-text-muted font-body">
                Weights: 400, 500, 600, 700, 800, 900
              </p>
              <p className="font-heading text-lg text-text-body mt-4 leading-relaxed">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-widest text-text-muted mb-3 block font-body">
                Secondary — Body
              </span>
              <p className="font-body text-5xl sm:text-6xl text-text-heading mb-4 font-light">
                Aa
              </p>
              <h3 className="font-body text-xl text-text-heading mb-1 font-medium">
                Outfit
              </h3>
              <p className="text-xs text-text-muted font-body">
                Weights: 100, 200, 300, 400, 500, 600, 700, 800, 900
              </p>
              <p className="font-body text-sm text-text-body mt-4 leading-relaxed tracking-wide">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789
              </p>
            </div>
          </div>

          {/* Type scale */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100 bg-gray-50/50">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted font-body">
                Type Scale
              </h3>
            </div>
            <div className="divide-y divide-gray-100">
              {typeScale.map((item) => (
                <div
                  key={item.level}
                  className="px-5 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                >
                  <div className="sm:w-32 shrink-0">
                    <span className="text-[10px] uppercase tracking-widest text-text-muted block font-body">
                      {item.level}
                    </span>
                    <span className="text-[10px] text-text-muted font-body">
                      {item.size}
                    </span>
                  </div>
                  <p
                    className={`text-text-heading leading-snug ${
                      item.font === "Playfair Display"
                        ? "font-heading"
                        : "font-body"
                    } ${
                      item.level === "Display"
                        ? "text-4xl sm:text-5xl font-bold"
                        : item.level === "H1"
                          ? "text-3xl sm:text-4xl font-bold"
                          : item.level === "H2"
                            ? "text-2xl sm:text-3xl font-bold"
                            : item.level === "H3"
                              ? "text-lg sm:text-xl font-bold"
                              : item.level === "Body LG"
                                ? "text-base sm:text-lg"
                                : item.level === "Caption"
                                  ? "text-xs tracking-[0.15em] font-semibold"
                                  : "text-sm sm:text-base"
                    }`}
                  >
                    {item.sample}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Voice & Tone ─────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="05 — Voice"
            title="Voice & Tone"
            description="All copy should feel reassuring, straightforward, and human. We're a concierge, not a used car lot."
          />

          {/* Do / Don't grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {voiceGuidelines.map((item) => (
              <div
                key={item.category}
                className="rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-text-muted font-body">
                    {item.category}
                  </h3>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-accent-secondary/10 text-accent-secondary flex items-center justify-center text-xs mt-0.5">
                      ✓
                    </span>
                    <p className="text-sm text-text-heading italic font-body">
                      &ldquo;{item.doExample}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-xs mt-0.5">
                      ✕
                    </span>
                    <p className="text-sm text-gray-400 italic line-through font-body">
                      &ldquo;{item.dontExample}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Word clouds */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-accent-primary/5 rounded-xl p-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-accent-primary mb-4 font-body">
                Words to Embrace
              </h4>
              <div className="flex flex-wrap gap-2">
                {embraceWords.map((word) => (
                  <span
                    key={word}
                    className="text-xs px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary font-medium font-body"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-red-50/50 rounded-xl p-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-4 font-body">
                Words to Avoid
              </h4>
              <div className="flex flex-wrap gap-2">
                {avoidWords.map((word) => (
                  <span
                    key={word}
                    className="text-xs px-3 py-1 rounded-full bg-red-50 text-red-300 font-medium line-through font-body"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Design Patterns ──────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="06 — Patterns"
            title="Design Language"
            description="Consistent visual patterns create a premium, trustworthy experience across all touchpoints."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Section rhythm */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 font-body">
                Section Rhythm
              </h4>
              <div className="space-y-1.5 mb-3">
                <div className="h-3 rounded bg-bg-primary" />
                <div className="h-3 rounded bg-white border border-gray-200" />
                <div className="h-3 rounded bg-accent-primary" />
                <div className="h-3 rounded bg-bg-secondary" />
                <div className="h-3 rounded bg-white border border-gray-200" />
              </div>
              <p className="text-xs text-text-body font-body">
                Alternating dark/light backgrounds create visual breathing room
              </p>
            </div>
            {/* Heading emphasis */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 font-body">
                Heading Emphasis
              </h4>
              <p className="font-heading text-xl text-text-heading mb-2">
                We specialize in <em className="italic">simplicity.</em>
              </p>
              <p className="font-heading text-xl text-text-heading mb-3">
                Solutions for <em className="italic">every</em> situation.
              </p>
              <p className="text-xs text-text-body font-body">
                Key words in headings use italic Playfair Display for emphasis
              </p>
            </div>
            {/* Label chips */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 font-body">
                Section Labels
              </h4>
              <div className="space-y-2 mb-3">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent-primary font-body">
                  Concierge Services
                </span>
                <br />
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.15em] text-accent-secondary font-body">
                  Our simple process
                </span>
              </div>
              <p className="text-xs text-text-body font-body">
                Uppercase label chips above each section heading for context
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Card style */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 font-body">
                Card Interactions
              </h4>
              <ul className="space-y-1.5 text-sm text-text-body font-body">
                <li>Rounded corners: 1rem (16px)</li>
                <li>Border: 1px solid #E5E7EB (light) or white/10 (dark)</li>
                <li>Hover: -translate-y-1 + shadow-xl</li>
                <li>Transition: 300ms ease-out</li>
              </ul>
            </div>
            {/* Button styles */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted mb-3 font-body">
                Button Styles
              </h4>
              <div className="space-y-2">
                <button className="inline-flex items-center justify-center rounded-full bg-accent-primary px-6 py-2.5 text-xs font-semibold text-white font-body">
                  Primary
                </button>
                <button className="inline-flex items-center justify-center rounded-full bg-accent-secondary px-6 py-2.5 text-xs font-semibold text-white font-body ml-2">
                  Secondary
                </button>
                <button className="inline-flex items-center justify-center rounded-full border-2 border-gray-300 px-6 py-2.5 text-xs font-semibold text-text-heading font-body ml-2">
                  Outline
                </button>
              </div>
              <p className="text-xs text-text-body font-body mt-3">
                Fully rounded (pill shape), semibold Outfit, generous padding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. Brand Values ──────────────────── */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="07 — Values"
            title="Brand Values"
            description="These principles guide every interaction, from marketing copy to seller conversations."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Transparency",
                description:
                  "No hidden fees, no surprises, no fine print. We tell sellers exactly what to expect and deliver on that promise.",
              },
              {
                title: "Simplicity",
                description:
                  "We reduce complexity at every turn. Three-step process. One point of contact. Zero out-of-pocket costs.",
              },
              {
                title: "Empathy",
                description:
                  "Many of our sellers are in difficult situations — foreclosure, inheritance, divorce. We lead with understanding, not urgency.",
              },
              {
                title: "Reliability",
                description:
                  "When we say 30 days to close, we mean it. When we say no costs, we mean it. Our word is our bridge.",
              },
              {
                title: "Advocacy",
                description:
                  "We represent the seller's interests. We negotiate on their behalf. We're their concierge, not the buyer's agent.",
              },
              {
                title: "Accessibility",
                description:
                  "50 states, all property types, every situation. If you have a property and want to sell, we want to hear from you.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="border border-gray-200 rounded-xl p-6"
              >
                <h3 className="font-heading text-lg font-bold text-text-heading mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-text-body font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Contact CTA ───────────────────── */}
      <section className="bg-bg-primary text-white py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary/95 to-bg-secondary" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-primary text-xs font-semibold tracking-[0.15em] uppercase mb-4 block font-body">
            Need More?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-6">
            Get in Touch
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-lg mx-auto mb-10 leading-relaxed font-body">
            For high-resolution assets, co-branding requests, or press
            inquiries, contact our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@uselandbridge.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-primary text-white text-sm font-semibold tracking-wide rounded-full hover:bg-[#3a42e6] transition-colors font-body"
            >
              Email Us
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/30 text-white text-sm font-semibold tracking-wide rounded-full hover:bg-white/10 transition-colors font-body"
            >
              Submit a Property
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
