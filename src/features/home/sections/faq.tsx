import Script from "next/script";
import { memo } from "react";

import { Blob } from "@/assets/blob";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

import { FAQS } from "../constants";

// Memoized FAQ item component for better performance
const FaqItem = memo(
  ({ faq, index }: { faq: (typeof FAQS)[0]; index: number }) => (
    <AccordionItem
      value={`faq-${index}`}
      key={`faq-${index}`}
      className="rounded-xl border bg-background px-4 py-4 transition-all data-[state=open]:border-primary data-[state=closed]:shadow-lg data-[state=open]:shadow-primary-md data-[state=closed]:shadow-gray-900/5 md:px-9"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <AccordionTrigger
        aria-label={`Toggle question: ${faq.question}`}
        id={`question-${index}`}
      >
        <span itemProp="name">{faq.question}</span>
      </AccordionTrigger>
      <AccordionContent
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        id={`question-${index}-answer`}
        aria-labelledby={`question-${index}`}
      >
        <div itemProp="text">{faq.answer}</div>
      </AccordionContent>
    </AccordionItem>
  )
);

FaqItem.displayName = "FaqItem";

export default function Faq() {
  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faqs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="container relative z-0 grid gap-10 py-12 max-lg:overflow-clip md:grid-cols-2 md:py-24">
        <div className="top-28 flex h-fit flex-col gap-5 md:sticky">
          <Badge>✦ FAQs</Badge>
          <h2 className="title-2">
            Still have <br />
            <span className="text-secondary">questions?</span>
          </h2>
          <p className="text-balance">
            Everything you need to know about our services and the costs.
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our team.
          </p>
        </div>
        <aside
          className="relative space-y-12"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <Accordion
            type="single"
            collapsible
            className="relative flex w-full flex-col gap-6 md:gap-4"
            defaultValue="faq-0"
          >
            {FAQS.map((faq, i) => (
              <FaqItem key={`faq-item-${i}`} faq={faq} index={i} />
            ))}
          </Accordion>
        </aside>
        <Blob className="absolute left-[45%] top-0 -z-40 scale-125" />
      </section>
    </>
  );
}
