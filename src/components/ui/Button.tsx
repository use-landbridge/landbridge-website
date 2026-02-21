"use client";

import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-primary text-white hover:bg-[#3a42e6] shadow-lg shadow-accent-primary/25",
  secondary:
    "bg-accent-secondary text-white hover:bg-[#00b085]",
  outline:
    "border-2 border-white/30 text-white hover:bg-white/10",
};

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-8 py-3.5 font-body font-semibold text-sm tracking-wide transition-all duration-200 cursor-pointer";

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
