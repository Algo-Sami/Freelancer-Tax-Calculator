"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  // Structured data (JSON-LD FAQPage Schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <section className="w-full max-w-3xl mx-auto my-12 px-4">
      {/* JSON-LD Script Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="text-center mb-8">
        <h2 className="font-space text-2xl md:text-3xl font-extrabold uppercase text-ledger tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="w-12 h-1 bg-ink mx-auto mt-2"></div>
      </div>

      <div className="border-2 border-ink bg-white shadow-[4px_4px_0px_0px_#1C2B22]">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border-b-2 border-ink last:border-b-0`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex justify-between items-center text-left p-5 min-h-[50px] hover:bg-ledger-light/30 transition-all font-space font-bold text-sm md:text-base text-ink uppercase tracking-wide cursor-pointer focus-visible:outline-none"
              >
                <span>{item.question}</span>
                <span className="ml-4 font-mono text-lg text-ledger font-extrabold">
                  {isOpen ? "[-]" : "[+]"}
                </span>
              </button>
              
              <div
                className={`transition-all duration-200 overflow-hidden ${
                  isOpen ? "max-h-[500px] border-t-2 border-ink p-5 bg-paper/50" : "max-h-0"
                }`}
              >
                <p className="font-space text-sm text-ink/90 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
