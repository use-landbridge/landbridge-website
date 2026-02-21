import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Terms & Conditions — Landbridge",
  description: "Terms and conditions for using the Landbridge website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-bg-primary min-h-screen pt-32 pb-20">
        <Container className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-white">Terms &amp; Conditions</h1>
          <p className="mt-4 text-sm text-white/50 font-body">Last updated: February 2026</p>

          <div className="mt-10 space-y-8 text-white/70 font-body text-sm leading-relaxed">
            <section>
              <h2 className="font-heading text-lg font-semibold text-white mb-3">Service Description</h2>
              <p>Landbridge provides a property concierge service that connects property owners with qualified buyers. Our service is free to sellers — all costs are covered by the buyer. Submitting a property assessment does not obligate you to sell or accept any offer.</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-white mb-3">No Guarantee</h2>
              <p>While we strive to provide competitive cash offers for all submitted properties, we cannot guarantee that every property will receive an offer. Market conditions, property type, and other factors may influence outcomes.</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-white mb-3">User Responsibilities</h2>
              <p>By submitting a property assessment, you represent that you are the legal owner of the property or are authorized to act on behalf of the owner. You agree to provide accurate information in your submission.</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-white mb-3">Limitation of Liability</h2>
              <p>Landbridge acts as an intermediary between property owners and buyers. We are not a real estate agency and do not provide legal, financial, or tax advice. We recommend consulting with qualified professionals before making any real estate decisions.</p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
