import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-paper border-t-4 border-ink pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-ink/20 pb-8">
          
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-space font-extrabold text-xl uppercase tracking-wider text-ledger"
            >
              FreelancerTax<span className="text-stamp">.pk</span>
            </Link>
            <p className="mt-3 font-space text-xs text-ink/75 leading-relaxed max-w-sm uppercase">
              The independent, open-source tax calculator built specifically for the Pakistani digital export & freelance ecosystem. Simple, accurate, and completely privacy-first.
            </p>
            <div className="mt-4 flex gap-4 text-[10px] font-mono text-ink/50">
              <span>SEC: 154A COMPLIANT</span>
              <span>•</span>
              <span>VERIFIED: 2026-27 FY</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space text-xs font-extrabold uppercase tracking-widest text-ledger mb-4">
              Calculators
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/freelancer-tax-calculator"
                  className="font-space text-xs uppercase font-bold text-ink/85 hover:text-ledger"
                >
                  Freelancer export tax
                </Link>
              </li>
              <li>
                <Link
                  href="/salary-tax-calculator-pakistan"
                  className="font-space text-xs uppercase font-bold text-ink/85 hover:text-ledger"
                >
                  Salaried Tax slabs
                </Link>
              </li>
              <li>
                <Link
                  href="/payoneer-vs-bank-wire-pakistan"
                  className="font-space text-xs uppercase font-bold text-ink/85 hover:text-ledger"
                >
                  Payout Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Meta */}
          <div>
            <h4 className="font-space text-xs font-extrabold uppercase tracking-widest text-ledger mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pseb-registration-guide"
                  className="font-space text-xs uppercase font-bold text-ink/85 hover:text-ledger"
                >
                  PSEB Registration Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="font-space text-xs uppercase font-bold text-ink/85 hover:text-ledger"
                >
                  About Built
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="font-space text-xs uppercase font-bold text-ink/85 hover:text-ledger"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-space text-xs uppercase font-bold text-ink/85 hover:text-ledger"
                >
                  Contact Form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer / Compliance Stamp */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:max-w-2xl text-center md:text-left">
            <p className="font-mono text-[10px] leading-relaxed text-ink/60 uppercase">
              Disclaimer: This tool provides estimates based on publicly available FBR and provider information. It is not tax advice. Confirm your specific situation with a registered tax consultant or FBR's official portal before filing.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end font-mono text-[9px] text-ink/40 border border-ink/20 p-2 uppercase bg-white/50">
            <span>OFFICIAL REVENUE SLABS FY 2026-27</span>
            <span>© {currentYear} FreelancerTax.pk. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
