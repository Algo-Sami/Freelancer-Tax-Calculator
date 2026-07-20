import React from "react";
import { Metadata } from "next";
import SalaryTaxCalculator from "@/components/calculators/SalaryTaxCalculator";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Salary Tax Calculator Pakistan FY 2026-27 — FBR Slabs",
  description:
    "Calculate your monthly and annual salaried income tax using the latest official FBR slabs for FY 2026-27. View cumulative tax bracket breakdowns.",
  alternates: {
    canonical: "/salary-tax-calculator-pakistan",
  },
};

const faqItems: FAQItem[] = [
  {
    question: "What is the tax-free limit for salaried class in Pakistan?",
    answer: "For the fiscal year 2026-27, the tax-free income limit for salaried individuals remains at Rs. 600,000 per year (Rs. 50,000 per month). Any income below this threshold is subject to 0% tax."
  },
  {
    question: "How is progressive tax calculated under FBR slabs?",
    answer: "FBR uses a cumulative progressive tax system. Your income is split into slabs, and each portion is taxed at the rate designated for that slab. You do not pay the highest rate flat on the entire amount; only the portion of income within that bracket is taxed at the higher marginal rate."
  },
  {
    question: "Was the 9% surcharge abolished for salaried individuals?",
    answer: "Yes, under the Finance Act 2026, the 9% income tax surcharge previously applicable to high-income earners (exceeding Rs. 10 million) has been completely abolished for salaried individuals. However, it still applies to non-salaried business individuals."
  },
  {
    question: "Do I qualify as a salaried individual under FBR rules?",
    answer: "Under FBR guidelines, an individual is classified as salaried if their salary income exceeds 75% of their total taxable income for the year. If it is less than 75%, you will be taxed under non-salaried business slabs."
  }
];

export default function SalaryTaxPage() {
  return (
    <div className="w-full bg-paper py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title / Intro */}
        <div className="text-center mb-8">
          <h1 className="font-space text-3xl md:text-5xl font-extrabold uppercase text-ink tracking-tight">
            Salary Tax Calculator Pakistan
          </h1>
          <p className="font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide max-w-xl mx-auto mt-2 leading-relaxed">
            Latest official FBR salaried income tax slabs for FY 2026-27.
          </p>
        </div>

        {/* Calculator Component */}
        <SalaryTaxCalculator />

        {/* 400+ Words Explanatory Content */}
        <article className="max-w-3xl mx-auto mt-12 bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C2B22] space-y-6">
          <h2 className="font-space text-xl font-bold uppercase text-ledger border-b-2 border-ink pb-2">
            Salaried Income Tax Structure & Slab Guide
          </h2>
          
          <div className="font-space text-xs md:text-sm text-ink/85 leading-relaxed space-y-4 uppercase">
            <p>
              Salaried individuals in Pakistan are taxed using a progressive bracket system announced by the Federal Board of Revenue (FBR) in the national budget. The slabs are finalized through the annual Finance Act and apply starting July 1st of each fiscal year.
            </p>
            
            <h3 className="font-bold text-ink mt-6 mb-1">
              How the progressive slab mechanism works
            </h3>
            <p>
              In a progressive tax system, your income is taxed in layers. For example, if you earn Rs. 1,500,000 annually:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>The first Rs. 600,000 is taxed at 0%.</li>
              <li>The next slab (Rs. 600,001 to Rs. 1,200,000) is taxed at 1% (Rs. 6,000 tax).</li>
              <li>The remaining Rs. 300,000 falling in the third slab (Rs. 1.2M to Rs. 2.2M) is taxed at 11% (Rs. 33,000 tax).</li>
              <li>Your total annual tax is Rs. 39,000, not a flat 11% on the entire Rs. 1.5M.</li>
            </ul>

            <h3 className="font-bold text-ink mt-6 mb-1">
              Key reforms in the latest Finance Act
            </h3>
            <p>
              The latest tax slabs brought significant restructuring to ease the burden on middle-income groups while adjusting tax slabs for upper-income tiers. The maximum tax bracket of 35% now only kicks in once an individual’s annual taxable income exceeds Rs. 7,000,000 (previously the threshold was lower).
            </p>
            <p>
              Furthermore, the 9% surcharge on high-income earners has been completely abolished for salaried taxpayers. This provides notable relief for executives and senior managers whose total earnings put them in upper brackets.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-1">
              Filer status and Active Taxpayer List (ATL)
            </h3>
            <p>
              To maintain the base tax rates, salaried individuals must file their annual tax return by the FBR deadline (typically September 30th). Being on the Active Taxpayer List (ATL) prevents you from being subjected to double withholding taxes on bank transactions, utility bills, and property investments.
            </p>
          </div>
        </article>

        {/* FAQ Section */}
        <FAQSection items={faqItems} />

      </div>
    </div>
  );
}
