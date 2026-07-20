/**
 * FreelancerTax.pk — Editable Constants
 *
 * All fee percentages and tax rates are isolated here.
 * Update these values when providers change their fees.
 * Last verified: July 2026
 */

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 154A — FREELANCER / EXPORT INCOME TAX RATES
// Source: FBR Finance Act 2026, Section 154A
// ─────────────────────────────────────────────────────────────────────────────

/** Flat final tax rate for foreign/export income, PSEB registered (decimal) */
export const FREELANCE_TAX_RATE_PSEB = 0.0025; // 0.25%

/** Flat final tax rate for foreign/export income, NOT PSEB registered (decimal) */
export const FREELANCE_TAX_RATE_NO_PSEB = 0.01; // 1%

/** PSEB one-time registration fee in PKR */
export const PSEB_REGISTRATION_FEE_PKR = 1000;

// ─────────────────────────────────────────────────────────────────────────────
// PAYOUT / REMITTANCE FEES
// Update these when provider pricing changes.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Payoneer → Local Pakistani Bank
 * Breakdown: ~1% Payoneer transfer fee + ~0.5–1% exchange rate markup (blended)
 */
export const PAYONEER_TOTAL_COST_PCT = 0.02; // 2% total blended cost

/**
 * Direct Bank Wire (SWIFT)
 * Breakdown: wider FX markup (~2%) + SWIFT wire fees (~1.5%)
 */
export const SWIFT_TOTAL_COST_PCT = 0.035; // 3.5% total blended cost

/**
 * Wise (receive-only in Pakistan)
 * Note: Wise does NOT allow PKR balance holds or standing accounts in Pakistan.
 * It can only receive inbound one-off payments. Not suitable for regular freelance withdrawals.
 * Shown for reference only; blended cost when usable is ~0.8–1.5%.
 */
export const WISE_NOTE =
  "Receive-only in Pakistan. Cannot hold PKR balance or set up standing withdrawals. Suitable only for occasional one-off inbound payments.";
export const WISE_TYPICAL_COST_PCT = 0.012; // ~1.2% when usable

// ─────────────────────────────────────────────────────────────────────────────
// FBR SALARIED INCOME TAX SLABS — FY 2026-27
// Source: Finance Act 2026
// Applied cumulatively: each bracket is taxed at its own marginal rate.
// ─────────────────────────────────────────────────────────────────────────────

export interface TaxSlab {
  min: number;
  max: number | null; // null = unlimited
  rate: number; // marginal rate on income within this bracket (decimal)
  fixedTax: number; // fixed PKR tax already calculated on brackets below this one
}

export const SALARY_TAX_SLABS: TaxSlab[] = [
  { min: 0, max: 600_000, rate: 0, fixedTax: 0 },
  { min: 600_001, max: 1_200_000, rate: 0.01, fixedTax: 0 },
  { min: 1_200_001, max: 2_200_000, rate: 0.11, fixedTax: 6_000 },
  { min: 2_200_001, max: 3_200_000, rate: 0.2, fixedTax: 116_000 },
  { min: 3_200_001, max: 4_100_000, rate: 0.25, fixedTax: 316_000 },
  { min: 4_100_001, max: 5_600_000, rate: 0.29, fixedTax: 541_000 },
  { min: 5_600_001, max: 7_000_000, rate: 0.32, fixedTax: 976_000 },
  { min: 7_000_001, max: null, rate: 0.35, fixedTax: 1_424_000 },
];

// ─────────────────────────────────────────────────────────────────────────────
// USD → PKR REFERENCE RATE
// This is a rough reference; actual bank rates vary. Update as needed.
// ─────────────────────────────────────────────────────────────────────────────
export const USD_TO_PKR_APPROX = 278; // approximate interbank rate, July 2026

// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIG
// ─────────────────────────────────────────────────────────────────────────────
export const SITE_URL = "https://freelancertax.pk";
export const SITE_NAME = "FreelancerTax.pk";
