/**
 * FreelancerTax.pk — Tax Calculation Logic
 * All pure functions, no side effects.
 */

import {
  FREELANCE_TAX_RATE_PSEB,
  FREELANCE_TAX_RATE_NO_PSEB,
  PSEB_REGISTRATION_FEE_PKR,
  SALARY_TAX_SLABS,
  PAYONEER_TOTAL_COST_PCT,
  SWIFT_TOTAL_COST_PCT,
  WISE_TYPICAL_COST_PCT,
  USD_TO_PKR_APPROX,
} from "./constants";

// ─────────────────────────────────────────────────────────────────────────────
// FREELANCER TAX (Section 154A)
// ─────────────────────────────────────────────────────────────────────────────

export interface FreelancerTaxResult {
  annualIncome: number;
  taxRate: number;
  taxAmount: number;
  netIncome: number;
  effectiveRate: number;
  psebSavingsPerYear: number | null; // null when PSEB is already active
}

export function calculateFreelancerTax(
  annualIncome: number,
  isPsebRegistered: boolean
): FreelancerTaxResult {
  const taxRate = isPsebRegistered
    ? FREELANCE_TAX_RATE_PSEB
    : FREELANCE_TAX_RATE_NO_PSEB;

  const taxAmount = annualIncome * taxRate;
  const netIncome = annualIncome - taxAmount;
  const effectiveRate = annualIncome > 0 ? taxAmount / annualIncome : 0;

  // If not registered, show how much they'd save by registering
  let psebSavingsPerYear: number | null = null;
  if (!isPsebRegistered) {
    const taxWithPseb = annualIncome * FREELANCE_TAX_RATE_PSEB;
    psebSavingsPerYear = taxAmount - taxWithPseb - PSEB_REGISTRATION_FEE_PKR;
    if (psebSavingsPerYear < 0) psebSavingsPerYear = 0;
  }

  return {
    annualIncome,
    taxRate,
    taxAmount,
    netIncome,
    effectiveRate,
    psebSavingsPerYear,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// SALARY TAX (FBR Progressive Slabs FY 2026-27)
// ─────────────────────────────────────────────────────────────────────────────

export interface SalaryTaxResult {
  annualIncome: number;
  taxAmount: number;
  netIncome: number;
  effectiveRate: number;
  marginalRate: number;
  monthlyTax: number;
  monthlyNet: number;
  slabBreakdown: SlabBreakdownItem[];
}

export interface SlabBreakdownItem {
  label: string;
  taxableAmount: number;
  rate: number;
  taxForSlab: number;
}

export function calculateSalaryTax(annualIncome: number): SalaryTaxResult {
  if (annualIncome <= 0) {
    return {
      annualIncome: 0,
      taxAmount: 0,
      netIncome: 0,
      effectiveRate: 0,
      marginalRate: 0,
      monthlyTax: 0,
      monthlyNet: 0,
      slabBreakdown: [],
    };
  }

  let totalTax = 0;
  let marginalRate = 0;
  const slabBreakdown: SlabBreakdownItem[] = [];

  for (const slab of SALARY_TAX_SLABS) {
    if (annualIncome < slab.min) break;

    const slabMax = slab.max ?? Infinity;
    const taxableInThisSlab = Math.min(annualIncome, slabMax) - slab.min + 1;

    if (taxableInThisSlab <= 0) continue;

    // Use fixedTax + marginal rate approach (cumulative slabs)
    // We only apply fixedTax once at the correct slab level
    if (slab.fixedTax > 0 && totalTax < slab.fixedTax) {
      totalTax = slab.fixedTax;
    }

    const marginalTaxableAmount =
      Math.min(annualIncome, slabMax) -
      (slab.max !== null ? slab.min - 1 : slab.min - 1);
    const slabTax = marginalTaxableAmount * slab.rate;

    if (slab.rate > 0) {
      const effectiveMarginal =
        Math.min(annualIncome, slabMax) - (slab.min - 1);
      slabBreakdown.push({
        label: `Rs. ${formatPKR(slab.min)} – ${slab.max ? "Rs. " + formatPKR(slab.max) : "above"}`,
        taxableAmount: effectiveMarginal,
        rate: slab.rate,
        taxForSlab: effectiveMarginal * slab.rate,
      });
    }

    marginalRate = slab.rate;

    if (annualIncome <= slabMax) break;
  }

  // Recalculate using the official fixed + marginal method
  totalTax = computeTaxFromSlabs(annualIncome);
  marginalRate = getMarginalRate(annualIncome);

  const netIncome = annualIncome - totalTax;
  const effectiveRate = annualIncome > 0 ? totalTax / annualIncome : 0;

  return {
    annualIncome,
    taxAmount: totalTax,
    netIncome,
    effectiveRate,
    marginalRate,
    monthlyTax: totalTax / 12,
    monthlyNet: netIncome / 12,
    slabBreakdown: buildSlabBreakdown(annualIncome),
  };
}

function computeTaxFromSlabs(annualIncome: number): number {
  for (const slab of SALARY_TAX_SLABS) {
    const slabMin = slab.min;
    const slabMax = slab.max ?? Infinity;

    if (annualIncome >= slabMin && annualIncome <= slabMax) {
      const marginalIncome = annualIncome - (slabMin - 1);
      return slab.fixedTax + marginalIncome * slab.rate;
    }
  }
  // Above all slabs — use last slab
  const lastSlab = SALARY_TAX_SLABS[SALARY_TAX_SLABS.length - 1];
  const marginalIncome = annualIncome - (lastSlab.min - 1);
  return lastSlab.fixedTax + marginalIncome * lastSlab.rate;
}

function getMarginalRate(annualIncome: number): number {
  for (const slab of SALARY_TAX_SLABS) {
    const slabMax = slab.max ?? Infinity;
    if (annualIncome <= slabMax) return slab.rate;
  }
  return SALARY_TAX_SLABS[SALARY_TAX_SLABS.length - 1].rate;
}

function buildSlabBreakdown(annualIncome: number): SlabBreakdownItem[] {
  const items: SlabBreakdownItem[] = [];

  for (const slab of SALARY_TAX_SLABS) {
    if (annualIncome < slab.min) break;

    const slabMax = slab.max ?? Infinity;
    const taxableInSlab = Math.min(annualIncome, slabMax) - (slab.min - 1);

    if (taxableInSlab <= 0) continue;

    items.push({
      label:
        slab.max !== null
          ? `Rs. ${formatPKR(slab.min)} – Rs. ${formatPKR(slab.max)}`
          : `Above Rs. ${formatPKR(slab.min)}`,
      taxableAmount: taxableInSlab,
      rate: slab.rate,
      taxForSlab: taxableInSlab * slab.rate,
    });

    if (annualIncome <= slabMax) break;
  }

  return items;
}

// ─────────────────────────────────────────────────────────────────────────────
// PAYOUT COMPARISON
// ─────────────────────────────────────────────────────────────────────────────

export interface PayoutResult {
  method: string;
  totalCostPct: number;
  feesUSD: number;
  netUSD: number;
  netPKR: number;
  note?: string;
}

export function calculatePayouts(usdAmount: number): PayoutResult[] {
  const methods = [
    {
      method: "Payoneer → Bank",
      pct: PAYONEER_TOTAL_COST_PCT,
      note: "~1% Payoneer transfer fee + ~1% blended FX markup. Reliable, fast (1-2 days).",
    },
    {
      method: "Direct SWIFT Wire",
      pct: SWIFT_TOTAL_COST_PCT,
      note: "Higher FX spread (~2%) + SWIFT correspondent bank fees (~1.5%). 3-5 business days.",
    },
    {
      method: "Wise (receive-only)",
      pct: WISE_TYPICAL_COST_PCT,
      note: "Cannot hold PKR balance or set up standing withdrawals. One-off inbound only.",
    },
  ];

  return methods.map(({ method, pct, note }) => {
    const feesUSD = usdAmount * pct;
    const netUSD = usdAmount - feesUSD;
    const netPKR = netUSD * USD_TO_PKR_APPROX;
    return { method, totalCostPct: pct, feesUSD, netUSD, netPKR, note };
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// FORMATTING UTILITIES
// ─────────────────────────────────────────────────────────────────────────────

export function formatPKR(amount: number): string {
  return new Intl.NumberFormat("en-PK", {
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

export function formatPKRFull(amount: number): string {
  return `Rs. ${formatPKR(amount)}`;
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatPct(rate: number): string {
  return `${(rate * 100).toFixed(2)}%`;
}
