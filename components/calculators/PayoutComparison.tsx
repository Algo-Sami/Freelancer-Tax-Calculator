"use client";

import React, { useState } from "react";
import { calculatePayouts, formatUSD, formatPKRFull } from "@/lib/tax-calculator";
import { PAYONEER_TOTAL_COST_PCT, SWIFT_TOTAL_COST_PCT, WISE_NOTE } from "@/lib/constants";

export default function PayoutComparison() {
  const [amountUSD, setAmountUSD] = useState<string>("1000");

  const numericAmount = parseFloat(amountUSD) || 0;
  const payouts = calculatePayouts(numericAmount);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 px-4">
      <div className="bg-white border-2 border-ink p-6 shadow-[4px_4px_0px_0px_#1C2B22] mb-8">
        <div className="border-b-2 border-ink pb-3 mb-6">
          <h3 className="font-space font-extrabold text-lg uppercase text-ledger">Payout Comparison Tool</h3>
          <p className="font-space text-xs text-ink/60 uppercase">Compare estimated transfer fees and exchange markups</p>
        </div>

        {/* Input amount */}
        <div className="max-w-xs flex flex-col gap-2 mb-6">
          <label htmlFor="usd-input" className="font-space text-xs font-bold uppercase tracking-wider text-ink/85">
            USD Amount to Withdraw
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm text-ink/65">$</span>
            <input
              id="usd-input"
              type="number"
              value={amountUSD}
              onChange={(e) => setAmountUSD(e.target.value)}
              onWheel={(e) => e.currentTarget.blur()}
              className="w-full pl-8 pr-4 py-3 bg-paper border border-ink text-ink font-mono text-base focus:ring-2 focus:ring-ledger focus:outline-none"
              placeholder="e.g. 1000"
              min="0"
              style={{ minHeight: "44px" }}
            />
          </div>
        </div>

        {/* Comparison grid / responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {payouts.map((pay, idx) => {
            const isWise = pay.method.toLowerCase().includes("wise");
            
            return (
              <div 
                key={idx} 
                className={`border-2 border-ink p-5 flex flex-col justify-between shadow-[2px_2px_0px_0px_#1C2B22] ${
                  isWise ? "bg-paper/50 opacity-80" : "bg-white"
                }`}
              >
                <div>
                  <div className="flex justify-between items-center border-b border-ink/20 pb-2 mb-3">
                    <h4 className="font-space font-extrabold text-sm uppercase text-ledger">{pay.method}</h4>
                    <span className="font-mono text-xs text-stamp font-bold">
                      {(pay.totalCostPct * 100).toFixed(1)}% Cost
                    </span>
                  </div>
                  
                  <div className="space-y-2 font-mono text-xs uppercase mb-4">
                    <div className="flex justify-between">
                      <span className="text-ink/60">Gross:</span>
                      <span className="text-ink">{formatUSD(numericAmount)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/60">Estimated Fee:</span>
                      <span className="text-stamp">-{formatUSD(pay.feesUSD)}</span>
                    </div>
                    <div className="flex justify-between border-t border-dotted border-ink/30 pt-1 mt-1 font-bold">
                      <span className="text-ink/80">Net Received:</span>
                      <span className="text-ledger">{formatUSD(pay.netUSD)}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-ink/20 pt-3">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="font-space text-[10px] font-bold text-ink/65 uppercase">Est. PKR equivalent:</span>
                    <span className="font-mono text-sm font-extrabold text-ledger underline decoration-double">
                      {formatPKRFull(pay.netPKR)}
                    </span>
                  </div>
                  <p className="font-space text-[10px] text-ink/75 lowercase leading-relaxed first-letter:uppercase">
                    {pay.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Callout */}
        <div className="mt-8 border-t-2 border-dashed border-ink/40 pt-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="w-full md:max-w-xl">
            <h5 className="font-space text-xs font-extrabold uppercase text-ledger mb-1">
              ⚠ Wise Notice (Pakistan Ecosystem)
            </h5>
            <p className="font-space text-[11px] text-ink/75 leading-relaxed uppercase">
              {WISE_NOTE} It is highly recommended to compare Payoneer's direct integrated bank transfer vs your local bank's inbound SWIFT telegraphic transfer rates.
            </p>
          </div>
          <div className="w-full md:w-auto font-mono text-[9px] border border-ink/30 p-2 bg-ledger-light/30 text-ink/70 text-center md:text-right uppercase">
            FX Reference: 1 USD ≈ {278} PKR
          </div>
        </div>
      </div>
    </div>
  );
}
