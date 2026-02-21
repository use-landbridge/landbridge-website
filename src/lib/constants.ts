export const NAV_ITEMS = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Compare", href: "#compare" },
  { label: "Savings", href: "#savings" },
  { label: "Solutions", href: "#solutions" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com/uselandbridge",
    icon: "facebook" as const,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/uselandbridge",
    icon: "instagram" as const,
  },
] as const;

export const PROPERTY_TYPES = [
  "Single-family home",
  "Multi-family / Duplex",
  "Townhouse / Condo",
  "Vacant lot / Land",
  "Mixed-use",
  "Commercial",
  "Mobile home",
  "Other",
] as const;

export const TIMEFRAMES = [
  "ASAP / Emergency",
  "Within 30 days",
  "1–3 months",
  "3–6 months",
  "No rush — just exploring",
] as const;
