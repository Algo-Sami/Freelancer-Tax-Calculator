import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — FreelancerTax.pk",
  description:
    "Get in touch with the FreelancerTax.pk team. Report a calculation discrepancy, request features, or send general feedback.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="w-full bg-paper py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-space text-3xl md:text-5xl font-extrabold uppercase text-ink tracking-tight">
            Contact Team
          </h1>
          <p className="font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide mt-2 leading-relaxed">
            Suggest features, request FBR slab corrections, or say hello.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C2B22]">
          <div className="border-b border-ink/35 pb-3 mb-6">
            <h2 className="font-space text-sm font-extrabold uppercase text-ledger">DIRECT INQUIRY LOG</h2>
            <p className="font-mono text-[10px] text-ink/50 uppercase">REF: CONTACT-PORTAL-PK</p>
          </div>

          <form className="space-y-5">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-space text-xs font-bold uppercase tracking-wider text-ink/80">
                Full Name / Organization
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-3 bg-paper border border-ink text-ink font-mono text-sm focus:ring-2 focus:ring-ledger focus:outline-none"
                placeholder="E.G. SAMI KHAN"
                style={{ minHeight: "44px" }}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-space text-xs font-bold uppercase tracking-wider text-ink/80">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-paper border border-ink text-ink font-mono text-sm focus:ring-2 focus:ring-ledger focus:outline-none"
                placeholder="E.G. SAMI@DOM.COM"
                style={{ minHeight: "44px" }}
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-space text-xs font-bold uppercase tracking-wider text-ink/80">
                Inquiry details / message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-paper border border-ink text-ink font-mono text-sm focus:ring-2 focus:ring-ledger focus:outline-none"
                placeholder="ENTER INQUIRY..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-ledger text-paper font-space text-xs font-bold uppercase tracking-wider border border-ink shadow-[3px_3px_0px_0px_#1C2B22] hover:bg-ledger/90 transition-all min-h-[44px] cursor-pointer"
            >
              Log Inquiry
            </button>
          </form>

          {/* Direct Email fallback */}
          <div className="mt-8 border-t border-dashed border-ink/40 pt-4 text-center">
            <span className="font-space text-[10px] text-ink/60 uppercase">Alternatively, send an email to:</span>
            <p className="font-mono text-xs text-ledger font-bold mt-1 uppercase selection:bg-ledger selection:text-paper">
              support@freelancertax.pk
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
