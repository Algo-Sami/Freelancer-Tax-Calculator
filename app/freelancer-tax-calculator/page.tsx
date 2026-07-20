import React from "react";
import { Metadata } from "next";
import FreelancerTaxCalculator from "@/components/calculators/FreelancerTaxCalculator";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Freelancer Tax Calculator Pakistan — Section 154A",
  description:
    "Calculate your export tax under Section 154A of the Income Tax Ordinance. See how PSEB registration saves you tax on foreign remittance.",
  alternates: {
    canonical: "/freelancer-tax-calculator",
  },
};

const faqItems: FAQItem[] = [
  {
    question: "How is freelancer tax calculated in Pakistan?",
    answer: "Under Section 154A, freelance export income is subject to a flat final withholding tax of either 0.25% (if registered with PSEB) or 1.0% (if unregistered). The tax is deducted at source by your bank or payment processor when receiving foreign currency remittances."
  },
  {
    question: "Do I need to file tax if my income is already taxed at source?",
    answer: "Yes. Even though tax is deducted at source under Section 154A, you must file your annual tax return (FBR Form 154A) to declare your gross receipts, show the tax deducted, and maintain your status on the Active Taxpayer List (ATL)."
  },
  {
    question: "What is the difference between local and foreign freelance income tax?",
    answer: "Foreign client income (exports of software/IT services) is subject to the flat 0.25% or 1% final tax rate. Local PKR client income is treated as normal business income and is subject to progressive business tax slabs starting at 15% for income over Rs. 600,000 annually."
  },
  {
    question: "Is there any surcharge on freelance income?",
    answer: "For foreign export income under Section 154A, there is no surcharge. For local business income, the 9% surcharge still applies to non-salaried business profits exceeding Rs. 10 million (note: this surcharge was abolished for salaried filers only, but remains for business/non-salaried filers)."
  }
];

export default function FreelancerTaxPage() {
  return (
    <div className="w-full bg-paper py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title / Intro */}
        <div className="text-center mb-8">
          <h1 className="font-space text-3xl md:text-5xl font-extrabold uppercase text-ink tracking-tight">
            Freelancer Tax Calculator Pakistan
          </h1>
          <p className="font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide max-w-xl mx-auto mt-2 leading-relaxed">
            Section 154A final tax estimation tool for IT, software, and digital export professionals.
          </p>
        </div>

        {/* Calculator Component */}
        <FreelancerTaxCalculator />

        {/* 400+ Words Explanatory Content */}
        <article className="max-w-3xl mx-auto mt-12 bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C2B22] space-y-6">
          <h2 className="font-space text-xl font-bold uppercase text-ledger border-b-2 border-ink pb-2">
            Detailed Guide: Section 154A Freelancer Tax Compliance
          </h2>
          
          <div className="font-space text-xs md:text-sm text-ink/85 leading-relaxed space-y-4 uppercase">
            <p>
              Under Section 154A of the Income Tax Ordinance 2001, the government of Pakistan provides a structured concessionary tax regime for exporters of computer software, IT services, and IT-enabled services (ITES). This regime is designed to encourage formalization, inflow of foreign exchange, and growth in the domestic tech ecosystem.
            </p>
            
            <h3 className="font-bold text-ink mt-6 mb-1">
              Flat final tax vs progressive income slabs
            </h3>
            <p>
              Unlike standard salaried employees or domestic businesses, qualifying IT exporters do not pay progressive tax rates up to 35%. Instead, they are eligible for a flat final withholding tax deducted directly from foreign inward remittances. The default rate is 1% of the gross export value. 
            </p>
            <p>
              However, if you register with the Pakistan Software Export Board (PSEB), you qualify for a reduced flat rate of 0.25%. Because this is a final tax, you cannot deduct business expenses (such as hardware, internet, or office space) from your taxable amount. You pay tax on the gross receipt.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-1">
              Prerequisites for the concessionary rate
            </h3>
            <p>
              To maintain eligibility for the 0.25% or 1.0% flat tax rates under Section 154A, you must fulfill the following regulatory obligations:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Declare export income via your annual FBR income tax return.</li>
              <li>Ensure your name is active on the FBR Active Taxpayer List (ATL).</li>
              <li>Keep an active PSEB registration certificate (renewed annually) to secure the 0.25% rate.</li>
              <li>Receive payments in foreign currency directly through formal banking channels (inward remittances).</li>
            </ul>

            <h3 className="font-bold text-ink mt-6 mb-1">
              Why domestic client income is different
            </h3>
            <p>
              If you provide freelance services to clients located within Pakistan and receive payments in PKR, this income is classified as local business/non-salaried income. It does not qualify for Section 154A. It is taxed using standard business income slabs starting at 15% above Rs. 600,000. Furthermore, high earners should note that the 9% surcharge on business income exceeding Rs. 10 million remains active, unlike salaried employees where it was recently abolished.
            </p>
          </div>
        </article>

        {/* FAQ Section */}
        <FAQSection items={faqItems} />

      </div>
    </div>
  );
}
