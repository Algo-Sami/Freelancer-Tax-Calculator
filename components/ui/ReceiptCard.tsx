"use client";

import React from "react";
import { formatPKR, formatUSD } from "@/lib/tax-calculator";

interface ReceiptCardProps {
  title?: string;
  invoiceAmount: number;
  currency?: "PKR" | "USD";
  items: {
    label: string;
    amount: number;
    isDeduction?: boolean;
    helpText?: string;
  }[];
  totalLabel?: string;
  totalAmount: number;
  note?: string;
  /** Identifier shown on the receipt header. Defaults to "FBR-SALARY-PK". */
  sysId?: string;
}

export default function ReceiptCard({
  title = "TAX RECEIPT",
  invoiceAmount,
  currency = "PKR",
  items,
  totalLabel = "NET PAYOUT",
  totalAmount,
  note,
  sysId = "FBR-SALARY-PK",
}: ReceiptCardProps) {
  const formatter = currency === "USD" ? formatUSD : (val: number) => `Rs. ${formatPKR(val)}`;

  return (
    <div className="relative my-8 mx-auto w-full max-w-md bg-white text-ink border-2 border-ink shadow-[4px_4px_0px_0px_#1C2B22] p-6 pt-8 pb-8 perforated-top perforated-bottom select-none">
      {/* Receipts Perforated Styling */}
      <div className="absolute top-0 left-0 right-0 h-1 border-t-2 border-dashed border-ink opacity-30"></div>
      
      {/* Header */}
      <div className="text-center border-b border-dashed border-ink/40 pb-4 mb-4">
        <h3 className="font-space font-bold tracking-widest text-lg uppercase text-ledger">{title}</h3>
        <p className="font-mono text-xs opacity-60">
          DATE: {new Date().toLocaleDateString("en-PK", { year: "numeric", month: "short", day: "numeric" })}
        </p>
        <p className="font-mono text-xs opacity-60">SYS_ID: {sysId}</p>
      </div>

      {/* Invoice Starting Amount */}
      <div className="flex justify-between items-center font-space border-b border-ink pb-2 mb-4">
        <span className="font-bold text-sm tracking-wide uppercase">GROSS INCOME</span>
        <span className="font-mono font-bold text-lg text-ledger">{formatter(invoiceAmount)}</span>
      </div>

      {/* Line Items */}
      <div className="space-y-3 mb-6">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex justify-between items-baseline text-sm">
              <span className="font-space uppercase text-xs font-medium tracking-wide flex items-center gap-1">
                {item.label}
              </span>
              <span className={`font-mono ${item.isDeduction ? "text-stamp font-medium" : "text-gold font-medium"}`}>
                {item.isDeduction ? "-" : "+"}{formatter(item.amount)}
              </span>
            </div>
            {item.helpText && (
              <span className="text-[10px] font-mono text-ink/60 mt-0.5 leading-relaxed">
                {item.helpText}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="border-t-2 border-dashed border-ink pt-4 mt-4">
        <div className="flex justify-between items-center">
          <span className="font-space font-extrabold text-sm uppercase tracking-wider">{totalLabel}</span>
          <span className="font-mono font-extrabold text-xl text-ink underline decoration-double decoration-ledger">
            {formatter(totalAmount)}
          </span>
        </div>
      </div>

      {/* Bottom Notes */}
      {note && (
        <div className="mt-6 text-center border-t border-dotted border-ink/30 pt-3">
          <p className="font-mono text-[10px] leading-relaxed text-ink/75 uppercase">
            {note}
          </p>
        </div>
      )}

      {/* Perforated bottom line spacer */}
      <div className="absolute bottom-0 left-0 right-0 h-1 border-b-2 border-dashed border-ink opacity-30"></div>
    </div>
  );
}
