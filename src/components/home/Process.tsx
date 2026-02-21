"use client";

import { motion } from "framer-motion";
import { ClipboardList, Mail, Handshake } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Submit a property",
    description:
      "Simply fill out a short form and we'll take it from there — making it easy to get started with zero risk or commitment",
  },
  {
    number: "02",
    icon: Mail,
    title: "Receive an offer",
    description:
      "We conduct market research and contact buyers in your local market to get you a competitive cash offer within 24–48 hours",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Close on your terms",
    description:
      "You review the offer and decide when and how you want to move forward based on your needs and timeline",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Process() {
  return (
    <SectionWrapper id="process" bg="accent">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <SectionLabel dark>Our simple process</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            We specialize in <em className="italic">simplicity.</em>
          </h2>
          <p className="mt-4 text-white/70 font-body leading-relaxed">
            Our team manages the entire process, from negotiations to
            administration — you remain in control while delegating the heavy
            lifting to us.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              className="relative rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/10"
            >
              <span className="font-heading text-6xl font-bold text-white/10 absolute top-4 right-6">
                {step.number}
              </span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <step.icon size={24} className="text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-white/70 font-body leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button href="#contact" variant="secondary">
            Submit your property
          </Button>
        </div>
      </Container>
    </SectionWrapper>
  );
}
