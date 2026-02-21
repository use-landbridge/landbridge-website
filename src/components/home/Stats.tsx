"use client";

import Container from "@/components/ui/Container";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 0, prefix: "$", suffix: "", label: "Out-of-pocket cost", note: "Buyers cover closing costs and fees" },
  { end: 30, prefix: "", suffix: "", label: "Days to close*", note: "Offering you quick cash deals" },
  { end: 24, prefix: "", suffix: "/7", label: "Concierge support", note: "Our support team is always on" },
  { end: 50, prefix: "", suffix: "", label: "States serviced", note: "Proudly serving all U.S. markets" },
];

export default function Stats() {
  return (
    <section className="bg-bg-secondary py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-white">
                {stat.end === 0 ? (
                  <span className="font-heading text-5xl sm:text-6xl font-bold">
                    {stat.prefix}0
                  </span>
                ) : (
                  <AnimatedCounter
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="mt-2 text-sm font-semibold text-white font-body">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-white/50 font-body">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-white/40 font-body">
          * Average time to close once an offer has been accepted, however this
          varies per contract
        </p>
      </Container>
    </section>
  );
}
