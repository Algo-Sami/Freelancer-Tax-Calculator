import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — FreelancerTax.pk",
  description:
    "Learn about the mission behind FreelancerTax.pk — providing transparent, open-source tax calculators for the Pakistani digital export community.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="w-full bg-paper py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-space text-3xl md:text-5xl font-extrabold uppercase text-ink tracking-tight">
            About FreelancerTax.pk
          </h1>
          <p className="font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide max-w-xl mx-auto mt-2 leading-relaxed">
            Transparent, open-source tax calculations for Pakistani digital exporters.
          </p>
        </div>

        {/* Content Block */}
        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C2B22] space-y-6">
          <h2 className="font-space text-lg font-extrabold uppercase text-ledger border-b border-ink pb-2">
            Our Mission & Purpose
          </h2>
          
          <div className="font-space text-xs md:text-sm text-ink/80 leading-relaxed uppercase space-y-4">
            <p>
              FreelancerTax.pk was founded with a single objective: to build clean, honest, and accessible financial computation tools specifically tailored for Pakistani freelancers, remote developers, and content creators.
            </p>
            <p>
              The freelance ecosystem is a vital pillar of Pakistan's economy, generating hundreds of millions of dollars in valuable foreign reserves. Yet, navigating the regulatory tax guidelines (such as FBR's Section 154A) and optimizing withdrawal methods has historically been confusing, gate-kept by outdated documentation and complex legal terminology.
            </p>
            
            <h3 className="font-bold text-ink mt-6 mb-1">
              Who built this?
            </h3>
            <p>
              This platform was created by a collective of independent software engineers and tax consultants who believe that financial literacy should be open, accessible, and completely free. We do not store, track, or share your input salary or payout data — all calculations run entirely on the client side inside your web browser.
            </p>

            <h3 className="font-bold text-ink mt-6 mb-1">
              AdSense & Funding Transparency
            </h3>
            <p>
              To keep our hosting services active and continue updating the calculator logic in line with annual national budgets, we display minimal, unobtrusive advertisements. Our content adheres strictly to Google Publisher Policies, ensuring high-quality, original utility resources for digital workers in Pakistan.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
