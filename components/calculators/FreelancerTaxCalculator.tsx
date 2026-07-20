"use client";

import React, { useState, useEffect } from "react";
import Toggle from "@/components/ui/Toggle";
import ReceiptCard from "@/components/ui/ReceiptCard";
import { calculateFreelancerTax, formatPKR, formatPKRFull } from "@/lib/tax-calculator";
import Link from "next/link";

export default function FreelancerTaxCalculator() {
  const [income, setIncome] = useState<string>("150000");
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");
  const [source, setSource] = useState<"foreign" | "local">("foreign");
  const [pseb, setPseb] = useState<boolean>(false);

  const numericIncome = parseFloat(income) || 0;
  
  // Calculate annual gross income based on toggle
  const annualGross = period === "monthly" ? numericIncome * 12 : numericIncome;

  // Perform calculation
  const result = calculateFreelancerTax(annualGross, pseb);

  // If local, we calculate a simplified estimate of business income tax
  // Business tax slabs for non-salaried:
  // Up to 600k: 0%
  // 600k-1.2M: 15% on excess (simplified estimate)
  // Let's explain this to the user clearly.
  const localTaxEstimate = annualGross > 600000 ? (annualGross - 600000) * 0.15 : 0;
  const localNetEstimate = annualGross - localTaxEstimate;

  const receiptItems = source === "foreign" 
    ? [
        {
          label: `Export Tax (Sec 154A) @ ${pseb ? "0.25%" : "1.0%"}`,
          amount: result.taxAmount,
          isDeduction: true,
          helpText: pseb 
            ? "Flat final tax rate for PSEB registered exporters."
            : "Flat final tax rate for non-registered exporters. Save by registering!"
        }
      ]
    : [
        {
          label: "Est. Business Tax Slabs",
          amount: localTaxEstimate,
          isDeduction: true,
          helpText: "Estimate based on non-salaried business slabs (starting at 15%)."
        }
      ];

  const netIncomeValue = source === "foreign" ? result.netIncome : localNetEstimate;
  const monthlyNetValue = netIncomeValue / 12;

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-8 px-4">
      {/* Input panel */}
      <div className="bg-white border-2 border-ink p-6 shadow-[4px_4px_0px_0px_#1C2B22] space-y-6">
        <div className="border-b-2 border-ink pb-3 mb-4">
          <h3 className="font-space font-extrabold text-lg uppercase text-ledger">Calculator Controls</h3>
          <p className="font-space text-xs text-ink/60 uppercase">Adjust fields below to see live updates</p>
        </div>

        {/* Input Income */}
        <div className="flex flex-col gap-2">
          <label htmlFor="income-input" className="font-space text-xs font-bold uppercase tracking-wider text-ink/85">
            Enter Income Amount (PKR)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm text-ink/65">Rs.</span>
            <input
              id="income-input"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              onWheel={(e) => e.currentTarget.blur()}
              className="w-full pl-10 pr-4 py-3 bg-paper border border-ink text-ink font-mono text-base focus:ring-2 focus:ring-ledger focus:outline-none"
              placeholder="e.g. 150000"
              min="0"
              style={{ minHeight: "44px" }}
            />
          </div>
        </div>

        {/* Period Toggle */}
        <Toggle
          label="Income Period"
          options={[
            { label: "Monthly", value: "monthly" },
            { label: "Annual", value: "annual" },
          ]}
          value={period}
          onChange={setPeriod}
        />

        {/* Income Source Toggle */}
        <Toggle
          label="Income Source"
          options={[
            { label: "Foreign Client / Export", value: "foreign" },
            { label: "Local Pakistani Client", value: "local" },
          ]}
          value={source}
          onChange={setSource}
        />

        {/* PSEB Toggle (only for foreign source) */}
        {source === "foreign" && (
          <Toggle
            label="PSEB Registered?"
            options={[
              { label: "Yes (0.25% Tax)", value: true },
              { label: "No (1% Tax)", value: false },
            ]}
            value={pseb}
            onChange={setPseb}
          />
        )}

        {/* Savings/Alert Callouts */}
        {source === "foreign" && !pseb && result.psebSavingsPerYear && result.psebSavingsPerYear > 0 && (
          <div className="border border-gold bg-gold/10 p-4 border-l-4">
            <h4 className="font-space text-xs font-extrabold text-gold uppercase tracking-wider mb-1">
              ★ Registration Savings Tip
            </h4>
            <p className="font-space text-xs text-ink/90 leading-relaxed uppercase">
              Registering with PSEB (Rs. 1,000 fee) would save you{" "}
              <strong className="font-mono text-gold">{formatPKRFull(result.psebSavingsPerYear)}</strong> per year!
            </p>
            <Link
              href="/pseb-registration-guide"
              className="inline-block mt-2 font-space text-[10px] font-extrabold text-ledger underline uppercase hover:text-ink"
            >
              Read PSEB Registration Guide →
            </Link>
          </div>
        )}

        {source === "local" && (
          <div className="border border-stamp bg-stamp/5 p-4 border-l-4">
            <h4 className="font-space text-xs font-extrabold text-stamp uppercase tracking-wider mb-1">
              ⚠ Local Client Tax Slab Notice
            </h4>
            <p className="font-space text-xs text-ink/90 leading-relaxed uppercase mb-2">
              Foreign export income is subject to a flat final tax. Local PKR payments follow standard non-salaried business tax slabs (starting at 15% above Rs. 600,000 annually).
            </p>
            <p className="font-mono text-[10px] text-ink/65 leading-relaxed uppercase">
              Note: The 9% surcharge has been abolished ONLY for salaried filers. It still applies to business/non-salaried income exceeding Rs. 10 million. Please consult a professional for precise calculations.
            </p>
          </div>
        )}
      </div>

      {/* Output Panel / Receipt */}
      <div className="flex flex-col justify-center h-full">
        <ReceiptCard
          title={source === "foreign" ? "EXPORT TAX RECEIPT" : "LOCAL BUSINESS EST"}
          invoiceAmount={annualGross}
          currency="PKR"
          items={receiptItems}
          totalLabel="NET ANNUAL PAYOUT"
          totalAmount={netIncomeValue}
          note={
            source === "foreign"
              ? "Calculated under Section 154A of Income Tax Ordinance. Flat final tax."
              : "Estimation only. Slabs apply cumulatively on annual business profits."
          }
        />

        {/* Key summaries block */}
        <div className="bg-ledger-light/50 border border-ink/40 p-4 space-y-2 mt-4">
          <div className="flex justify-between items-center text-xs font-space font-bold uppercase text-ink/75">
            <span>Monthly Net (Take-Home)</span>
            <span className="font-mono text-sm text-ledger">{formatPKRFull(monthlyNetValue)}</span>
          </div>
          <div className="flex justify-between items-center text-xs font-space font-bold uppercase text-ink/75">
            <span>Effective Tax Rate</span>
            <span className="font-mono text-sm text-stamp">
              {source === "foreign" 
                ? (pseb ? "0.25%" : "1.00%")
                : `${((localTaxEstimate / (annualGross || 1)) * 100).toFixed(2)}%`
              }
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
