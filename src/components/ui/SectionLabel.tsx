interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export default function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-[0.15em] font-body mb-4 ${
        dark ? "text-accent-secondary" : "text-accent-primary"
      }`}
    >
      {children}
    </span>
  );
}
