import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Landbridge — Turn Your Property Into Possibility",
  description:
    "Landbridge unlocks the value of your property by matching you with qualified buyers and managing the process every step of the way — no fees, no hassle.",
  openGraph: {
    title: "Landbridge — Turn Your Property Into Possibility",
    description:
      "Sell your property on your terms. No commissions, no closing costs, no hassle. Get a competitive cash offer within 48 hours.",
    url: "https://uselandbridge.com",
    siteName: "Landbridge",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
