"use client";

import Container from "@/components/ui/Container";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import AccordionItem from "@/components/ui/AccordionItem";

const faqs = [
  {
    question: "Why should I use Landbridge instead of listing with a realtor?",
    answer:
      "A lot of our clients don't want the hassle or cost of cleaning, staging, repairs, or open houses — they just want to move on. We offer a simple, no-hassle cash solution that skips the traditional listing process — with no commissions or fees.",
  },
  {
    question: "How do you come up with your offer?",
    answer:
      "We extensively research local market data, factor in the condition and location of your property, and work closely with our network of investors to provide a fair cash offer.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Once you complete the property assessment form, our team typically responds within 1-2 business days with an initial offer. You can take as much time as you need to review and ask questions before signing any paperwork. Once you're comfortable with the terms, most deals close within 30-45 days.",
  },
  {
    question: "Will I have to pay anything out of pocket?",
    answer:
      "No, there are no out-of-pocket expenses incurred by the seller. We are not an agency, therefore you will not pay any realtor commissions or service fees, and our buyers cover closing costs.",
  },
  {
    question: "What happens if I have delinquent taxes or penalties?",
    answer:
      "If you are behind on taxes or have incurred penalties on your property, we're often able to pass those fees onto the buyer — allowing you to move on, free and clear.",
  },
  {
    question: "How are you able to offer your services for free?",
    answer:
      "We exist to help homeowners that are in distressed situations, so we've designed our business model to make sure all costs are covered by the buyer.",
  },
  {
    question: "What types of properties do you buy?",
    answer:
      "We primarily focus on residential or mixed-use properties and have motivated buyers around the country for vacant lots, single-family homes, fixer-uppers, tear-downs, rentals, pre-foreclosure, inherited properties and more. Once you have submitted our property assessment form, we will be able to let you know if your property qualifies.",
  },
  {
    question: "If I'm not sure if I want to sell, can I still get an offer?",
    answer:
      "Absolutely! We understand that you need to explore your options before making a decision, which is why your personalized offer is totally free and carries no obligation to sell — we're simply starting the conversation.",
  },
];

export default function FAQ() {
  return (
    <SectionWrapper id="faq" bg="navy">
      <Container className="max-w-3xl">
        <div className="text-center">
          <SectionLabel dark>Common questions</SectionLabel>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Questions? We&apos;re here to help.
          </h2>
          <p className="mt-4 text-white/60 font-body leading-relaxed">
            Straightforward answers, without the fine print — no magnifying glass
            required.
          </p>
        </div>

        <div className="mt-12">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
