"use client";

import React, { useState } from "react";
import Toggle from "@/components/ui/Toggle";
import ReceiptCard from "@/components/ui/ReceiptCard";
import { calculateSalaryTax, formatPKR, formatPKRFull } from "@/lib/tax-calculator";

export default function SalaryTaxCalculator() {
  const [income, setIncome] = useState<string>("120000");
  const [period, setPeriod] = useState<"monthly" | "annual">("monthly");

  const numericIncome = parseFloat(income) || 0;
  const annualGross = period === "monthly" ? numericIncome * 12 : numericIncome;

  const result = calculateSalaryTax(annualGross);

  const receiptItems = [
    {
      label: "Salaried Income Tax (FBR)",
      amount: result.taxAmount,
      isDeduction: true,
      helpText: `Cumulative progressive slabs. Effective rate: ${(result.effectiveRate * 100).toFixed(2)}%.`
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start my-8 px-4">
      {/* Input panel */}
      <div className="bg-white border-2 border-ink p-6 shadow-[4px_4px_0px_0px_#1C2B22] space-y-6">
        <div className="border-b-2 border-ink pb-3 mb-4">
          <h3 className="font-space font-extrabold text-lg uppercase text-ledger">Salaried Calculator Slabs</h3>
          <p className="font-space text-xs text-ink/60 uppercase">FBR Slabs FY 2026-27 standard brackets</p>
        </div>

        {/* Input Income */}
        <div className="flex flex-col gap-2">
          <label htmlFor="salary-input" className="font-space text-xs font-bold uppercase tracking-wider text-ink/85">
            Gross Salary Amount (PKR)
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 font-mono text-sm text-ink/65">Rs.</span>
            <input
              id="salary-input"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              onWheel={(e) => e.currentTarget.blur()}
              className="w-full pl-10 pr-4 py-3 bg-paper border border-ink text-ink font-mono text-base focus:ring-2 focus:ring-ledger focus:outline-none"
              placeholder="e.g. 120000"
              min="0"
              style={{ minHeight: "44px" }}
            />
          </div>
        </div>

        {/* Period Toggle */}
        <Toggle
          label="Salary Period"
          options={[
            { label: "Monthly", value: "monthly" },
            { label: "Annual", value: "annual" },
          ]}
          value={period}
          onChange={setPeriod}
        />

        {/* Tax Slab Progress Breakdown */}
        {result.slabBreakdown.length > 0 && (
          <div className="bg-ledger-light/35 p-4 border border-ink/40 space-y-3">
            <h4 className="font-space text-xs font-extrabold uppercase text-ledger tracking-wider">
              Cumulative Tax Breakdown
            </h4>
            <div className="space-y-2">
              {result.slabBreakdown.map((item, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs border-b border-ink/10 pb-1 last:border-b-0">
                  <span className="font-space text-ink/80 text-[11px] uppercase truncate max-w-[200px]">
                    {item.label}
                  </span>
                  <span className="font-mono text-ink text-[11px]">
                    Rs. {formatPKR(item.taxForSlab)} ({item.rate * 100}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="bg-paper p-4 border border-dashed border-ink/50 text-[11px] font-space text-ink/75 uppercase leading-relaxed">
          💡 The Finance Act 2026 restructured salaried brackets, providing relief for middle/upper-middle segments. The top 35% tax rate applies to annual income exceeding Rs. 7,000,000.
        </div>
      </div>

      {/* Output Panel / Receipt */}
      <div className="flex flex-col justify-center h-full">
        <ReceiptCard
          title="SALARIED TAX STATEMENT"
          invoiceAmount={annualGross}
          currency="PKR"
          items={receiptItems}
          totalLabel="NET ANNUAL SALARY"
          totalAmount={result.netIncome}
          note="Progressive income tax slabs calculated on standard cumulative brackets for FY 2026-27."
        />

        {/* Key summaries block */}
        <div className="bg-ledger-light/50 border border-ink/40 p-4 space-y-2 mt-4">
          <div className="flex justify-between items-center text-xs font-space font-bold uppercase text-ink/75">
            <span>Monthly Take-Home Salary</span>
            <span className="font-mono text-sm text-ledger">{formatPKRFull(result.monthlyNet)}</span>
          </div>
          <div className="flex justify-between items-center text-xs font-space font-bold uppercase text-ink/75">
            <span>Monthly Tax Deducted</span>
            <span className="font-mono text-sm text-stamp">{formatPKRFull(result.monthlyTax)}</span>
          </div>
          <div className="flex justify-between items-center text-xs font-space font-bold uppercase text-ink/75">
            <span>Marginal Slab Rate</span>
            <span className="font-mono text-sm text-gold">{(result.marginalRate * 100).toFixed(0)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
