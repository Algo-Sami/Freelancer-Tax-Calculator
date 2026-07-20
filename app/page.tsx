import React from "react";
import Link from "next/link";
import FreelancerTaxCalculator from "@/components/calculators/FreelancerTaxCalculator";
import PayoutComparison from "@/components/calculators/PayoutComparison";

export default function Home() {
  return (
    <div className="w-full bg-paper pb-16">
      
      {/* Premium Hero Section - Ledger Aesthetic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center border-b border-ink/10">
        <div className="inline-block border border-ink/40 bg-white/50 px-3 py-1 font-mono text-[10px] tracking-widest text-ledger uppercase mb-6 rounded-none">
          ★ OFFICIAL FY 2026-27 COMPLIANT SLABS
        </div>
        
        <h1 className="font-space text-4xl md:text-6xl font-extrabold uppercase text-ink max-w-4xl mx-auto leading-[1.1] tracking-tight">
          PAKISTANI FREELANCE TAXES, <br />
          <span className="text-ledger underline decoration-2 decoration-ledger">DEMYSTIFIED</span>.
        </h1>
        
        <p className="mt-6 font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide max-w-2xl mx-auto leading-relaxed">
          The clear-cut financial ledger tool built to calculate foreign export tax under Section 154A, compute PSEB savings, and compare withdrawal method costs.
        </p>

        {/* Action Button Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/freelancer-tax-calculator"
            className="px-4 py-2 border-2 border-ink bg-white font-space text-xs font-bold uppercase tracking-wider text-ink shadow-[2px_2px_0px_0px_#1C2B22] hover:bg-ledger-light/30 transition-all min-h-[44px] flex items-center"
          >
            Freelancer Calculator
          </Link>
          <Link
            href="/salary-tax-calculator-pakistan"
            className="px-4 py-2 border-2 border-ink bg-white font-space text-xs font-bold uppercase tracking-wider text-ink shadow-[2px_2px_0px_0px_#1C2B22] hover:bg-ledger-light/30 transition-all min-h-[44px] flex items-center"
          >
            Salary Slabs Calculator
          </Link>
          <Link
            href="/payoneer-vs-bank-wire-pakistan"
            className="px-4 py-2 border-2 border-ink bg-white font-space text-xs font-bold uppercase tracking-wider text-ink shadow-[2px_2px_0px_0px_#1C2B22] hover:bg-ledger-light/30 transition-all min-h-[44px] flex items-center"
          >
            Compare Payout Methods
          </Link>
        </div>
      </section>

      {/* Embedded Freelancer Tax Calculator Component Section */}
      <section className="max-w-7xl mx-auto py-12 border-b border-ink/10">
        <div className="text-center mb-6">
          <h2 className="font-space text-2xl md:text-3xl font-extrabold uppercase text-ledger tracking-tight">
            Calculate Export Tax (Sec 154A)
          </h2>
          <p className="font-space text-xs text-ink/60 uppercase mt-1">
            Toggle PSEB status to see flat tax differences (0.25% vs 1.0%)
          </p>
        </div>
        <FreelancerTaxCalculator />
      </section>

      {/* Quick Section 154A Explainer Ledger Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-ink/10">
        <div>
          <h3 className="font-space text-lg font-bold uppercase text-ledger border-b border-ink pb-2 mb-4">
            Understanding Section 154A
          </h3>
          <p className="font-space text-xs text-ink/80 leading-relaxed uppercase space-y-3">
            Under Section 154A of the Income Tax Ordinance of Pakistan, export of computer software or IT-enabled services (ITES) is subject to a flat final tax rate. 
            <br /><br />
            If you are registered with the Pakistan Software Export Board (PSEB), you qualify for a reduced final tax rate of 0.25% of your total export receipts. If you are not registered, the flat rate is 1%.
          </p>
        </div>
        <div>
          <h3 className="font-space text-lg font-bold uppercase text-ledger border-b border-ink pb-2 mb-4">
            Is it a Final Tax?
          </h3>
          <p className="font-space text-xs text-ink/80 leading-relaxed uppercase space-y-3">
            Yes, this is a Flat Final withholding tax. This means you do not claim business deductions or expenses against this income. 
            <br /><br />
            To secure the 0.25% or 1% rate, you must file your income tax returns and declare this export income under Section 154A, alongside maintaining active FBR filer status.
          </p>
        </div>
      </section>

      {/* Payout Comparison Section */}
      <section className="max-w-7xl mx-auto py-12">
        <div className="text-center mb-6">
          <h2 className="font-space text-2xl md:text-3xl font-extrabold uppercase text-ledger tracking-tight">
            Payout & Remittance Cost Comparison
          </h2>
          <p className="font-space text-xs text-ink/60 uppercase mt-1">
            Calculate net receipts after provider transaction and exchange rate fees
          </p>
        </div>
        <PayoutComparison />
      </section>

      {/* Guide Pages Links */}
      <section className="max-w-4xl mx-auto px-4 py-12 bg-white border-2 border-ink shadow-[4px_4px_0px_0px_#1C2B22] text-center">
        <h3 className="font-space text-lg font-extrabold uppercase text-ledger mb-2">
          New to Freelance Compliance?
        </h3>
        <p className="font-space text-xs text-ink/70 uppercase mb-6 max-w-lg mx-auto">
          Read our step-by-step documentation on PSEB registration, tax filing requirements, and optimization.
        </p>
        <Link
          href="/pseb-registration-guide"
          className="inline-block px-6 py-3 bg-ledger text-paper font-space text-xs font-bold uppercase tracking-wider hover:bg-ledger/90 border border-ink shadow-[2px_2px_0px_0px_#1C2B22] min-h-[44px]"
        >
          View PSEB Registration Guide →
        </Link>
      </section>
      
    </div>
  );
}
