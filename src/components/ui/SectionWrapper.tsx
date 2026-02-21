"use client";

import { motion } from "framer-motion";

type BgTheme = "dark" | "light" | "accent" | "navy";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  bg?: BgTheme;
  className?: string;
}

const bgMap: Record<BgTheme, string> = {
  dark: "bg-bg-primary text-white",
  light: "bg-bg-surface text-text-heading",
  accent: "bg-accent-primary text-white",
  navy: "bg-bg-secondary text-white",
};

export default function SectionWrapper({
  children,
  id,
  bg = "light",
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${bgMap[bg]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}
