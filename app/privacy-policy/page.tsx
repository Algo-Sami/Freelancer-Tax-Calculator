import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FreelancerTax.pk",
  description:
    "Review the privacy policy for FreelancerTax.pk. We prioritize your privacy: zero data storage, client-side calculations, and transparent ad guidelines.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-paper py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-space text-3xl md:text-5xl font-extrabold uppercase text-ink tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide max-w-xl mx-auto mt-2 leading-relaxed">
            Effective Date: July 19, 2026. How we manage and protect user data.
          </p>
        </div>

        {/* Content Block */}
        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C2B22] space-y-6">
          <h2 className="font-space text-lg font-extrabold uppercase text-ledger border-b border-ink pb-2">
            FreelancerTax.pk Privacy Standards
          </h2>
          
          <div className="font-space text-xs md:text-sm text-ink/80 leading-relaxed uppercase space-y-4">
            <p>
              At FreelancerTax.pk, we recognize that your financial details are highly confidential. Our primary design philosophy is to keep your computations entirely private.
            </p>
            
            <h3 className="font-bold text-ink mt-6 mb-1">
              1. Zero financial data retention
            </h3>
            <p>
              When you enter salary or withdrawal figures into our calculators, those values are processed locally inside your browser's memory using JavaScript. We do **not** transmit, store, or log your income, calculations, or toggled settings on any server.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-1">
              2. Cookies & Advertising
            </h3>
            <p>
              We may display third-party advertisements (such as Google AdSense) to support site maintenance. These ad providers may use cookies, web beacons, and unique identifiers to serve personalized ads based on your visits to this website and other platforms. You can opt out of personalized advertising by visiting Google's Ad Settings.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-1">
              3. Analytical Tracking
            </h3>
            <p>
              We use minimal, privacy-centric analytics to trace general site traffic volumes and page popularities. This includes tracking non-identifiable user agents, generic locations (country level), and navigation patterns.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-1">
              4. External Compliance
            </h3>
            <p>
              Our calculators are estimates only and do not constitute legal tax advice. We provide links to external resources like FBR and PSEB portals. We are not responsible for the privacy practices or data collection protocols of these third-party institutions.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
