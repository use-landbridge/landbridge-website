"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const benefits = [
  ["Free property estimate", "No obligation offer", "Quick cash closing"],
  ["No commissions or fees", "No closing costs", "Personal concierge"],
  ["Seller advocate", "No hassle or pressure", "Motivated buyers"],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-primary overflow-hidden flex items-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-bg-primary via-bg-primary/95 to-bg-secondary" />

      <Container className="relative z-10 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Turn your property into{" "}
            <em className="italic text-accent-primary">possibility.</em>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70 font-body leading-relaxed">
            Landbridge unlocks the value of your property by matching you with
            qualified buyers and managing the process every step of the way —
            giving you the freedom to move on without the hassle, stress or cost
            you might expect.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-4"
        >
          {benefits.map((col, i) => (
            <ul key={i} className="space-y-3">
              {col.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/80 font-body"
                >
                  <Check size={16} className="text-accent-secondary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4"
        >
          <Button href="#contact" variant="primary">
            Get an offer
          </Button>
          <Button href="#process" variant="outline">
            How we work
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
