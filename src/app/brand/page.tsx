import type { Metadata } from "next";
import BrandGuidelinesClient from "./BrandGuidelinesClient";

export const metadata: Metadata = {
  title: "Brand Guidelines — Landbridge",
  description:
    "Official brand guidelines for Landbridge — logo, color palette, typography, voice & tone, and downloadable assets for partners and media.",
  alternates: { canonical: "https://uselandbridge.com/brand" },
};

export default function BrandPage() {
  return <BrandGuidelinesClient />;
}
