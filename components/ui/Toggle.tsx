"use client";

import React from "react";

interface ToggleProps {
  label: string;
  options: { label: string; value: any }[];
  value: any;
  onChange: (value: any) => void;
}

export default function Toggle({ label, options, value, onChange }: ToggleProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="font-space text-xs font-bold uppercase tracking-wider text-ink/80">
        {label}
      </span>
      <div className="grid grid-cols-2 p-1 bg-ledger-light border border-ink rounded-none shadow-[2px_2px_0px_0px_#1C2B22]">
        {options.map((opt) => {
          const isActive = value === opt.value;
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`min-h-[44px] px-4 py-2 font-space text-xs uppercase font-bold transition-all duration-150 cursor-pointer ${
                isActive
                  ? "bg-ledger text-paper shadow-[1px_1px_0px_0px_#1C2B22]"
                  : "text-ink hover:bg-ink/5"
              }`}
              style={{ touchAction: "manipulation" }}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
