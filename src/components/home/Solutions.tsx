"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Wrench,
  Gift,
  Link,
  ShieldAlert,
  Receipt,
  Users,
  Heart,
  MapPin,
  Home,
  Globe,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

const solutions = [
  { icon: AlertCircle, title: "Foreclosure", description: "We can work within tight timeframes to help you sell fast and avoid a potential foreclosure" },
  { icon: Wrench, title: "Distressed properties", description: "No repairs, improvements or clean-up needed — we'll take the property as-is" },
  { icon: Gift, title: "Inheritance", description: "Turn an inherited family property into someone's dream home" },
  { icon: Link, title: "Property liens", description: "We collaborate with investors to help resolve liens pre-sale" },
  { icon: ShieldAlert, title: "Code violations", description: "Let us take the burden of upkeep off your hands and clear your fines" },
  { icon: Receipt, title: "Delinquent taxes", description: "Avoid liens or auctions by accepting a quick cash offer, and let our buyers settle your debt" },
  { icon: Users, title: "Tenant turnover", description: "Let us take your underperforming property off your hands so you can stop worrying about renters" },
  { icon: Heart, title: "Divorce", description: "A simple, amicable solution to liquidate shared assets" },
  { icon: MapPin, title: "Relocation", description: "Cash out your equity before starting your next chapter" },
  { icon: Home, title: "Downsizing", description: "Free up equity in a property you no longer need" },
  { icon: Globe, title: "Out of state", description: "We handle everything locally so there's no need to be onsite" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Solutions() {
  return (
    <SectionWrapper id="solutions" bg="light">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>How we help</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading">
            Solutions for <em className="italic">every</em> situation.
          </h2>
          <p className="mt-4 text-text-body font-body leading-relaxed">
            From back taxes to bad tenants, we have solutions for every scenario
            you might be facing.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {solutions.map((card) => (
            <motion.div
              key={card.title}
              variants={item}
              className="group rounded-xl border border-border-subtle p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-secondary/10">
                <card.icon size={18} className="text-accent-secondary" />
              </div>
              <h3 className="font-heading text-base font-bold text-text-heading">
                {card.title}
              </h3>
              <p className="mt-1 text-xs text-text-body font-body leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
