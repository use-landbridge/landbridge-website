import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy — Landbridge",
  description: "How Landbridge collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-bg-primary min-h-screen pt-32 pb-20">
        <Container className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold text-white">Privacy Policy</h1>
          <p className="mt-4 text-sm text-white/50 font-body">Last updated: February 2026</p>

          <div className="mt-10 space-y-8 text-white/70 font-body text-sm leading-relaxed">
            <section>
              <h2 className="font-heading text-lg font-semibold text-white mb-3">Information We Collect</h2>
              <p>When you submit the property assessment form on our website, we collect your name, phone number, email address, postal code, property type, and preferred timeframe. We use this information solely to connect you with qualified buyers and provide you with a cash offer.</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-white mb-3">How We Use Your Information</h2>
              <p>Your information is used to process your property submission, communicate with you about potential offers, and improve our services. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-white mb-3">Data Security</h2>
              <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="font-heading text-lg font-semibold text-white mb-3">Contact Us</h2>
              <p>If you have questions about this privacy policy or your personal data, please contact us through the form on our website.</p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
