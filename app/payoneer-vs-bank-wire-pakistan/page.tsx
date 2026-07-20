import React from "react";
import { Metadata } from "next";
import PayoutComparison from "@/components/calculators/PayoutComparison";
import FAQSection, { FAQItem } from "@/components/ui/FAQSection";

export const metadata: Metadata = {
  title: "Payoneer vs Bank Wire Pakistan — Payout Fees Comparison",
  description:
    "Compare withdrawal costs for Pakistani freelancers. Payoneer to local bank vs Direct SWIFT wire transfer fees, FX markups, and Wise restrictions.",
  alternates: {
    canonical: "/payoneer-vs-bank-wire-pakistan",
  },
};

const faqItems: FAQItem[] = [
  {
    question: "Is Payoneer cheaper than SWIFT Bank Wire in Pakistan?",
    answer: "Generally, yes. Payoneer charges a flat ~1% fee on withdrawals to local bank accounts, combined with a ~1% FX markup. Direct SWIFT wires often incur flat intermediary fees ($15-$30) and wider exchange rate markups (2% or higher), making SWIFT more expensive for transactions under $2,500."
  },
  {
    question: "Can I use Wise to hold PKR or receive freelance payouts?",
    answer: "Wise is receive-only in Pakistan. You cannot hold a PKR balance or request regular automated transfers. It can only be used for direct-to-bank transfers initiated by a foreign client, but not as a standing withdrawal account for platforms like Upwork or Fiverr."
  },
  {
    question: "What is exchange rate markup?",
    answer: "It is the difference between the interbank exchange rate (e.g. Google rate) and the rate offered by your provider. Providers markup the rate to make a profit. Payoneer and banks rarely transfer money at the exact interbank rate."
  },
  {
    question: "Which Pakistani banks offer the best rates for SWIFT?",
    answer: "Banks like HBL, Meezan, and Standard Chartered have reliable SWIFT systems. However, their exchange rate spreads vary daily. Large foreign currency transfers (above $5,000) are where SWIFT can become cheaper if you negotiate a customized treasury rate with your bank."
  }
];

export default function PayoutComparisonPage() {
  return (
    <div className="w-full bg-paper py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title / Intro */}
        <div className="text-center mb-8">
          <h1 className="font-space text-3xl md:text-5xl font-extrabold uppercase text-ink tracking-tight">
            Payoneer vs Bank Wire Pakistan
          </h1>
          <p className="font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide max-w-xl mx-auto mt-2 leading-relaxed">
            Payout fee, transaction cost, and FX markup analysis for digital exports.
          </p>
        </div>

        {/* Comparison Tool */}
        <PayoutComparison />

        {/* Explanatory Content */}
        <article className="max-w-3xl mx-auto mt-12 bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C2B22] space-y-6">
          <h2 className="font-space text-xl font-bold uppercase text-ledger border-b-2 border-ink pb-2">
            Detailed Comparison: Payoneer vs Direct SWIFT Wires
          </h2>
          
          <div className="font-space text-xs md:text-sm text-ink/85 leading-relaxed space-y-4 uppercase">
            <p>
              When withdrawing foreign earnings from platforms like Upwork, Fiverr, or direct overseas clients, Pakistani freelancers face significant hidden costs in the form of transaction fees and exchange rate markups. Choosing the right channel can save you hundreds of dollars annually.
            </p>
            
            <h3 className="font-bold text-ink mt-6 mb-1">
              Payoneer payout fee structure
            </h3>
            <p>
              Payoneer is the most widely integrated option for Pakistani freelancers. It links directly to platforms and local services like JazzCash and local bank accounts. 
            </p>
            <p>
              Payoneer typically charges a 1% fee on withdrawals. However, the hidden cost is the exchange rate markup, which is the spread between the official interbank rate and the rate Payoneer gives you. This blended cost is generally around 2% of the transaction value.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-1">
              Direct bank wire (SWIFT) structure
            </h3>
            <p>
              A direct wire transfer (SWIFT) sends money from your client's or platform's bank account directly to your Pakistani bank account. While secure, SWIFT transfers involve multiple correspondent banks.
            </p>
            <p>
              These correspondent banks deduct flat fee components (typically $15 to $30 per transfer). Additionally, local Pakistani banks apply their own retail exchange rate margins, which can be 2% to 3% below the interbank rate. Therefore, SWIFT transfers are highly inefficient for small, regular payouts, but become economical for large lump-sum transactions.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-1">
              The status of Wise in Pakistan
            </h3>
            <p>
              Wise is highly popular globally due to its low fees and transparent mid-market exchange rates. However, in Pakistan, Wise is **receive-only**. Freelancers cannot create a Wise account with a PKR IBAN or hold balances. While clients can send money to you via Wise directly to your Pakistani bank account, you cannot use Wise as a withdrawal hub or standing digital account.
            </p>
          </div>
        </article>

        {/* FAQ Section */}
        <FAQSection items={faqItems} />

      </div>
    </div>
  );
}
