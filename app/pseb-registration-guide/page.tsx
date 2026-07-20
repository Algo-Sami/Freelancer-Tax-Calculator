import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PSEB Registration Guide for Pakistani Freelancers",
  description:
    "Learn how to register with the Pakistan Software Export Board (PSEB) to reduce your export tax rate from 1% to 0.25%. Complete step-by-step process.",
  alternates: {
    canonical: "/pseb-registration-guide",
  },
};

export default function PsebGuidePage() {
  const steps = [
    {
      step: "01",
      title: "Prepare Documentation",
      desc: "Gather your CNIC/NICOP, active NTN registration certificate, passport-sized photograph, and bank account certificate confirming freelance inward remittance history."
    },
    {
      step: "02",
      title: "Register on PSEB Portal",
      desc: "Go to the official PSEB portal (pseb.org.pk). Create an account as an 'Individual Freelancer' and complete the online application form. Use the registration/login section on the portal to begin."
    },
    {
      step: "03",
      title: "Pay Registration Fee",
      desc: "Generate the fee payment voucher. The initial registration fee for individual freelancers is Rs. 1,000. Note: annual renewal fees apply separately and may differ from the initial fee — confirm current rates on the PSEB portal (pseb.org.pk) before applying. Pay via bank transfer or online channels."
    },
    {
      step: "04",
      title: "Submit and Await Approval",
      desc: "Submit your application and documentation. PSEB typically reviews and issues the digital registration certificate within 5 to 7 working days."
    }
  ];

  return (
    <div className="w-full bg-paper py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center mb-10">
          <div className="inline-block border border-ink/40 bg-white/50 px-3 py-1 font-mono text-[10px] tracking-widest text-ledger uppercase mb-4 rounded-none">
            ★ COMPLIANCE DOCUMENTATION
          </div>
          <h1 className="font-space text-3xl md:text-5xl font-extrabold uppercase text-ink tracking-tight">
            PSEB Registration Guide
          </h1>
          <p className="font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide max-w-xl mx-auto mt-2 leading-relaxed">
            Reduce your export tax rate from 1% to 0.25% under Section 154A.
          </p>
        </div>

        {/* Core Guide Body */}
        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C2B22] space-y-8">
          
          {/* Why PSEB section */}
          <div>
            <h2 className="font-space text-lg font-extrabold uppercase text-ledger border-b border-ink pb-2 mb-3">
              Why Register with PSEB?
            </h2>
            <p className="font-space text-xs md:text-sm text-ink/80 leading-relaxed uppercase">
              The Pakistan Software Export Board (PSEB) is the official government body tasked with promoting Pakistan's IT sector. 
              Under Section 154A of the FBR Income Tax Ordinance, freelancers registered with PSEB qualify for a **0.25% flat final tax rate** on foreign export income. 
              Unregistered freelancers pay a **1.0% flat final tax rate**.
              For an individual earning $1,500/month, registration saves over **PKR 35,000 per year** in taxes.
            </p>
          </div>

          {/* Steps Grid */}
          <div>
            <h2 className="font-space text-lg font-extrabold uppercase text-ledger border-b border-ink pb-2 mb-6">
              Step-by-Step Registration Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((st, idx) => (
                <div key={idx} className="border border-ink p-5 bg-paper/30 shadow-[2px_2px_0px_0px_#1C2B22]">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-mono text-xs font-bold text-stamp bg-stamp/10 px-2 py-0.5 border border-stamp">
                      STEP {st.step}
                    </span>
                  </div>
                  <h3 className="font-space text-sm font-extrabold uppercase text-ink mb-2">
                    {st.title}
                  </h3>
                  <p className="font-space text-xs text-ink/70 leading-relaxed uppercase">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits summary list */}
          <div>
            <h2 className="font-space text-lg font-extrabold uppercase text-ledger border-b border-ink pb-2 mb-3">
              Additional Benefits of Registration
            </h2>
            <ul className="list-disc pl-5 font-space text-xs md:text-sm text-ink/80 leading-relaxed uppercase space-y-2">
              <li>Access to PSEB-sponsored training and certification programs.</li>
              <li>Eligibility for subsidized workspaces in software technology parks.</li>
              <li>Official recognition as a certified IT/ITES export professional.</li>
              <li>Facilitated opening of corporate and foreign currency bank accounts.</li>
            </ul>
          </div>

          {/* CTA Footer inside card */}
          <div className="border-t-2 border-dashed border-ink/40 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-space text-xs text-ink/75 uppercase text-center md:text-left">
              Done reading? Head back to calculate your potential savings.
            </p>
            <Link
              href="/freelancer-tax-calculator"
              className="px-4 py-2 bg-ledger text-paper font-space text-xs font-bold uppercase tracking-wider border border-ink shadow-[2px_2px_0px_0px_#1C2B22] hover:bg-ledger/90 transition-all min-h-[44px] flex items-center"
            >
              Run Calculations Now
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
