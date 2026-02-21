"use client";

import { useState, type FormEvent } from "react";
import { Loader2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { PROPERTY_TYPES, TIMEFRAMES } from "@/lib/constants";

type Status = "idle" | "submitting" | "success" | "error";

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/submit-property", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <SectionWrapper id="contact" bg="dark" className="!py-16 sm:!py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — CTA Text */}
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to unlock the value of your property?
            </h2>
            <p className="mt-4 text-white/60 font-body leading-relaxed max-w-lg">
              Get your personalized cash offer and take the first step on your
              path to financial freedom.
            </p>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
            <h3 className="font-heading text-xl font-bold text-white">
              Let&apos;s explore your options.
            </h3>
            <p className="mt-1 text-xs text-white/50 font-body">
              Offers are 100% free and carry no obligation to accept.
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 p-6 text-center">
                <p className="font-heading text-lg font-bold text-accent-secondary">
                  Thank you!
                </p>
                <p className="mt-1 text-sm text-white/60 font-body">
                  We&apos;ll be in touch within 24-48 hours with your personalized offer.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="first_name"
                    type="text"
                    placeholder="Ron"
                    required
                    className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 font-body focus:border-accent-primary focus:outline-none transition-colors"
                  />
                  <input
                    name="last_name"
                    type="text"
                    placeholder="Swanson"
                    required
                    className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 font-body focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(987) 654-3210"
                    required
                    className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 font-body focus:border-accent-primary focus:outline-none transition-colors"
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="ron@parks-rec.com"
                    required
                    className="rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 font-body focus:border-accent-primary focus:outline-none transition-colors"
                  />
                </div>

                <input
                  name="postal_code"
                  type="text"
                  placeholder="98765"
                  required
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 font-body focus:border-accent-primary focus:outline-none transition-colors"
                />

                <select
                  name="property_type"
                  required
                  defaultValue=""
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white font-body focus:border-accent-primary focus:outline-none transition-colors appearance-none"
                >
                  <option value="" disabled className="text-gray-900">
                    Select property type
                  </option>
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type} value={type} className="text-gray-900">
                      {type}
                    </option>
                  ))}
                </select>

                <select
                  name="timeframe"
                  defaultValue=""
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white font-body focus:border-accent-primary focus:outline-none transition-colors appearance-none"
                >
                  <option value="" disabled className="text-gray-900">
                    How quickly do you need cash?
                  </option>
                  {TIMEFRAMES.map((t) => (
                    <option key={t} value={t} className="text-gray-900">
                      {t}
                    </option>
                  ))}
                </select>

                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-3 text-xs text-white/50 font-body cursor-pointer">
                    <input
                      name="consent_transactional"
                      type="checkbox"
                      className="mt-0.5 accent-accent-primary"
                    />
                    I consent to receive transactional messages related to my
                    property submission
                  </label>
                  <label className="flex items-start gap-3 text-xs text-white/50 font-body cursor-pointer">
                    <input
                      name="consent_terms"
                      type="checkbox"
                      className="mt-0.5 accent-accent-primary"
                    />
                    I agree to the{" "}
                    <a href="/terms" className="underline hover:text-white/70">
                      Terms &amp; Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" className="underline hover:text-white/70">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-primary px-8 py-3.5 font-body font-semibold text-sm text-white transition-all hover:bg-[#3a42e6] disabled:opacity-60 cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit your property"
                  )}
                </button>

                {status === "error" && (
                  <p className="text-xs text-red-400 font-body text-center">
                    Something went wrong. Please try again.
                  </p>
                )}

                <p className="text-center text-xs text-white/40 font-body pt-1">
                  Your personal information is safe with us — we never spam, sell
                  or solicit.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
