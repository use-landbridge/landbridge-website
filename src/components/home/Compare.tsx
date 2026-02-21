"use client";

import { Check, X } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

type CellType = "green" | "red" | "neutral";

interface Row {
  category: string;
  landbridge: string;
  agency: string;
  fsbo: string;
  lbType: CellType;
  agType: CellType;
  fsType: CellType;
}

const rows: Row[] = [
  { category: "Agent fees", landbridge: "No fees", agency: "5-6%", fsbo: "2-3%*", lbType: "green", agType: "red", fsType: "red" },
  { category: "Closing costs", landbridge: "No costs", agency: "2-4%", fsbo: "2-4%*", lbType: "green", agType: "red", fsType: "red" },
  { category: "Repairs", landbridge: "Sell as-is", agency: "Often required", fsbo: "Often required", lbType: "green", agType: "red", fsType: "red" },
  { category: "Negotiations", landbridge: "Landbridge manages", agency: "Agent mediates", fsbo: "Seller negotiates", lbType: "green", agType: "neutral", fsType: "red" },
  { category: "Open houses", landbridge: "Not required", agency: "Often required", fsbo: "Often required", lbType: "green", agType: "red", fsType: "red" },
  { category: "Paperwork", landbridge: "Landbridge manages", agency: "Agent and seller manage", fsbo: "Seller manages", lbType: "green", agType: "neutral", fsType: "red" },
  { category: "Marketing", landbridge: "Off-market", agency: "Agent manages", fsbo: "Seller manages", lbType: "green", agType: "neutral", fsType: "red" },
  { category: "Signage", landbridge: "Private sale", agency: "Yard signs and listings", fsbo: "Yard signs and listings", lbType: "green", agType: "neutral", fsType: "neutral" },
  { category: "Hassle", landbridge: "Hands-off", agency: "Agent and seller manage", fsbo: "Seller manages", lbType: "green", agType: "neutral", fsType: "red" },
  { category: "Delays", landbridge: "Close within 30 days", agency: "Typically 60-90 days", fsbo: "Often 90+ days", lbType: "green", agType: "red", fsType: "red" },
  { category: "Banks", landbridge: "Direct wire transfer", agency: "Contingencies & appraisals", fsbo: "Contingencies & appraisals", lbType: "green", agType: "red", fsType: "red" },
];

function CellIcon({ type }: { type: CellType }) {
  if (type === "green") return <Check size={16} className="text-accent-secondary" />;
  if (type === "red") return <X size={16} className="text-red-400" />;
  return <span className="w-4" />;
}

export default function Compare() {
  return (
    <SectionWrapper id="compare" bg="dark">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel dark>How we compare</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Sometimes <em className="italic">&quot;no&quot;</em> actually means{" "}
            <em className="italic">&quot;yes&quot;.</em>
          </h2>
          <p className="mt-4 text-white/60 font-body leading-relaxed">
            Say goodbye to the hassles, headaches and hidden costs of selling the
            traditional way — let us handle it for you, on your terms.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="mt-16 hidden md:block overflow-x-auto">
          <table className="w-full text-left text-sm font-body">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 pr-6 text-white/50 font-medium w-48" />
                <th className="py-4 px-6 text-accent-secondary font-semibold">Landbridge</th>
                <th className="py-4 px-6 text-white/50 font-medium">Agency</th>
                <th className="py-4 px-6 text-white/50 font-medium">FSBO</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.category} className="border-b border-white/5">
                  <td className="py-3.5 pr-6 text-white/70 font-medium">{row.category}</td>
                  <td className="py-3.5 px-6 text-white/90">
                    <span className="flex items-center gap-2">
                      <CellIcon type={row.lbType} /> {row.landbridge}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-white/60">
                    <span className="flex items-center gap-2">
                      <CellIcon type={row.agType} /> {row.agency}
                    </span>
                  </td>
                  <td className="py-3.5 px-6 text-white/60">
                    <span className="flex items-center gap-2">
                      <CellIcon type={row.fsType} /> {row.fsbo}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="mt-12 space-y-4 md:hidden">
          {rows.map((row) => (
            <div key={row.category} className="rounded-xl border border-white/10 p-4">
              <p className="text-xs text-white/50 font-body mb-2">{row.category}</p>
              <div className="space-y-1.5 text-sm font-body">
                <p className="text-white/90 flex items-center gap-2">
                  <CellIcon type={row.lbType} />
                  <span className="text-accent-secondary font-medium">LB:</span> {row.landbridge}
                </p>
                <p className="text-white/60 flex items-center gap-2">
                  <CellIcon type={row.agType} />
                  <span className="font-medium">AG:</span> {row.agency}
                </p>
                <p className="text-white/60 flex items-center gap-2">
                  <CellIcon type={row.fsType} />
                  <span className="font-medium">FSBO:</span> {row.fsbo}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Summary + Footnote */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 p-5 text-center">
            <p className="text-sm text-accent-secondary font-semibold font-body">Landbridge</p>
            <p className="mt-1 text-xs text-white/70 font-body">No cost, hands-off, quick and private cash closing</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
            <p className="text-sm text-white/60 font-semibold font-body">Agency</p>
            <p className="mt-1 text-xs text-white/50 font-body">Higher cost (7-10%) and contingencies</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-5 text-center">
            <p className="text-sm text-white/60 font-semibold font-body">FSBO</p>
            <p className="mt-1 text-xs text-white/50 font-body">Lower cost (4-7%), hands-on, hidden fees*</p>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40 font-body">
          * FSBO sellers may cover buyer&apos;s agent commissions, legal and transfer
          fees, listing and promotion fees, staging, repairs and other incidental
          costs.
        </p>
      </Container>
    </SectionWrapper>
  );
}
