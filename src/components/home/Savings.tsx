"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Scale,
  BadgeDollarSign,
  Megaphone,
  Receipt,
  AlertTriangle,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const savings = [
  {
    icon: FileText,
    title: "Closing costs",
    description: "Title services, transfer taxes and settlement fees are covered",
    amount: "2% + $4,000",
  },
  {
    icon: Scale,
    title: "Legal fees",
    description: "Our standardized agreements make attorneys unnecessary",
    amount: "$1,500",
  },
  {
    icon: BadgeDollarSign,
    title: "Service fees",
    description: "Our service fees are included in the cost of the property",
    amount: "$9,000",
  },
  {
    icon: Megaphone,
    title: "Marketing spend",
    description: "Direct off-market deals do not require advertising or MLS listings",
    amount: "$1,500",
  },
  {
    icon: Receipt,
    title: "Delinquent taxes",
    description: "Buyers will make sure any back taxes are settled upon closing",
    amount: "Variable",
  },
  {
    icon: AlertTriangle,
    title: "Penalties and fines",
    description: "Buyers will pay fines from code violations and local ordinances",
    amount: "Variable",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Savings() {
  return (
    <SectionWrapper id="savings" bg="light">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>How you save</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading">
            The best things in life <em className="italic">are</em> free.
          </h2>
          <p className="mt-4 text-text-body font-body leading-relaxed">
            Our purpose is to help homeowners in difficult situations, so we make
            sure our buyers cover all of the costs — so you can move on free and
            clear.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {savings.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              className="group rounded-2xl border border-border-subtle p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-secondary/10">
                  <card.icon size={20} className="text-accent-secondary" />
                </div>
                <span className="text-sm font-bold text-accent-primary font-body">
                  {card.amount}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-text-heading">
                {card.title}
              </h3>
              <p className="mt-1.5 text-sm text-text-body font-body leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Total */}
        <div className="mt-10 rounded-2xl bg-accent-primary/5 border border-accent-primary/20 p-8 text-center">
          <p className="text-sm text-text-body font-body">Estimated total savings</p>
          <p className="mt-2 font-heading text-4xl sm:text-5xl font-bold text-accent-primary">
            $19,000<span className="text-xl">&#177;</span>
          </p>
          <p className="mt-2 text-xs text-text-muted font-body">
            Based on average costs of selling a $150,000 property
          </p>
        </div>

        <div className="mt-8 text-center">
          <Button href="#contact" variant="primary">
            Estimate your savings
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
