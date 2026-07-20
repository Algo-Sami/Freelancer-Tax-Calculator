"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Freelancer Tax", href: "/freelancer-tax-calculator" },
    { label: "Salary Tax", href: "/salary-tax-calculator-pakistan" },
    { label: "Payout Compare", href: "/payoneer-vs-bank-wire-pakistan" },
    { label: "PSEB Guide", href: "/pseb-registration-guide" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="w-full bg-paper border-b-4 border-ink relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="font-space font-extrabold text-lg md:text-xl uppercase tracking-wider text-ledger flex items-center gap-1 group"
          >
            <span>★</span>
            <span>FreelancerTax</span>
            <span className="text-stamp">.pk</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-space text-xs font-bold uppercase tracking-wider text-ink hover:text-ledger hover:bg-ink/5 transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-4 py-2 bg-ledger text-paper border border-ink font-space text-xs font-bold uppercase tracking-wider hover:bg-ledger/90 transition-all shadow-[2px_2px_0px_0px_#1C2B22]"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-ink hover:text-ledger focus:outline-none min-h-[44px] min-w-[44px] cursor-pointer"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden border-t-2 border-ink bg-paper animate-slide-down">
          <div className="px-2 pt-2 pb-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 font-space text-sm font-bold uppercase tracking-wider text-ink hover:bg-ledger/10 hover:text-ledger border-b border-ink/10 last:border-0 min-h-[44px]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-4 py-3 bg-ledger text-paper font-space text-sm font-bold uppercase tracking-wider border border-ink shadow-[2px_2px_0px_0px_#1C2B22]"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
