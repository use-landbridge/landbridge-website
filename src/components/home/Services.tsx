"use client";

import { motion } from "framer-motion";
import {
  Headset,
  DollarSign,
  ShieldCheck,
  MessageCircle,
  Users,
  Lightbulb,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    icon: Headset,
    title: "Dedicated Concierge",
    description:
      "Our team manages all the paperwork, communications and logistics so you can just sit back and relax",
  },
  {
    icon: DollarSign,
    title: "Costs Covered",
    description:
      "No agent commissions, closing costs or hidden fees — bonus, our buyers typically clear any back taxes or fines",
  },
  {
    icon: ShieldCheck,
    title: "Seller Advocate",
    description:
      "We get to know you and your situation so we're able to represent your interests and exceed your expectations",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description:
      "Expert advice, honest explanations and ample time to consider your options without any pressure",
  },
  {
    icon: Users,
    title: "Qualified Buyers",
    description:
      "By leveraging our relationships with investors in local markets we are able to negotiate competitive cash offers",
  },
  {
    icon: Lightbulb,
    title: "Creative Financing",
    description:
      "Our innovative financing strategies allow us to find a solution that keeps more money in your pocket",
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

export default function Services() {
  return (
    <SectionWrapper id="services" bg="light">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel>Concierge Services</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading">
            Our support, <em className="italic">your</em> terms.
          </h2>
          <p className="mt-4 text-text-body font-body leading-relaxed">
            Whether you&apos;re overwhelmed by upkeep, burdened by back taxes, or
            just ready to move on — we&apos;re here to help you understand your
            options so you can sell on your terms.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="group rounded-2xl border border-border-subtle p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-secondary/10">
                <service.icon size={24} className="text-accent-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-text-heading">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-text-body font-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </SectionWrapper>
  );
}
