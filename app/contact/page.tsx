"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ---------------------------------------------------------------------------
// Metadata is NOT exported from a "use client" component in Next.js App Router.
// SEO metadata is handled via a separate layout or a parent server component.
// We set the document title via a simple effect instead.
// ---------------------------------------------------------------------------

type FormState = "idle" | "sending" | "success" | "error";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // --- Validation ---
  function validate(): string | null {
    if (!name.trim()) return "Please enter your name or organization.";
    if (!email.trim() || !isValidEmail(email))
      return "Please enter a valid email address.";
    if (!message.trim()) return "Please enter your inquiry details.";
    return null;
  }

  // --- Submit handler ---
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const validationError = validate();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setFormState("sending");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: name.trim(),           // matches {{name}} — From Name field
          email: email.trim(),         // matches {{email}} — Reply To field
          message: message.trim(),     // matches {{message}} — body
          title: "FreelancerTax.pk",   // matches {{title}} — used in subject line
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFormState("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setFormState("error");
      setErrorMsg(
        "Something went wrong — your message was not sent. Please try again or email us directly."
      );
    }
  }

  const isSending = formState === "sending";

  return (
    <div className="w-full bg-paper py-12">
      <div className="max-w-xl mx-auto px-4 sm:px-6">

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="font-space text-3xl md:text-5xl font-extrabold uppercase text-ink tracking-tight">
            Contact Team
          </h1>
          <p className="font-space text-xs md:text-sm text-ink/75 uppercase tracking-wide mt-2 leading-relaxed">
            Suggest features, request FBR slab corrections, or say hello.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border-2 border-ink p-6 md:p-8 shadow-[4px_4px_0px_0px_#1C2B22]">
          <div className="border-b border-ink/35 pb-3 mb-6">
            <h2 className="font-space text-sm font-extrabold uppercase text-ledger">
              DIRECT INQUIRY LOG
            </h2>
            <p className="font-mono text-[10px] text-ink/50 uppercase">
              REF: CONTACT-PORTAL-PK
            </p>
          </div>

          {/* ── Success banner ── */}
          {formState === "success" && (
            <div
              role="alert"
              className="mb-5 px-4 py-3 border-2 border-ledger bg-ledger/10 text-ledger font-mono text-xs uppercase tracking-wide"
            >
              ✓ Message sent — I&apos;ll get back to you soon.
            </div>
          )}

          {/* ── Validation / send-error banner ── */}
          {errorMsg && (
            <div
              role="alert"
              className="mb-5 px-4 py-3 border-2 border-red-600 bg-red-50 text-red-700 font-mono text-xs uppercase tracking-wide"
            >
              ✕ {errorMsg}
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-space text-xs font-bold uppercase tracking-wider text-ink/80"
              >
                Full Name / Organization
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSending}
                className="w-full px-4 py-3 bg-paper border border-ink text-ink font-mono text-sm focus:ring-2 focus:ring-ledger focus:outline-none disabled:opacity-50"
                placeholder="E.G. SAMI KHAN"
                style={{ minHeight: "44px" }}
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-space text-xs font-bold uppercase tracking-wider text-ink/80"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
                className="w-full px-4 py-3 bg-paper border border-ink text-ink font-mono text-sm focus:ring-2 focus:ring-ledger focus:outline-none disabled:opacity-50"
                placeholder="E.G. SAMI@DOM.COM"
                style={{ minHeight: "44px" }}
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-space text-xs font-bold uppercase tracking-wider text-ink/80"
              >
                Inquiry details / message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSending}
                className="w-full px-4 py-3 bg-paper border border-ink text-ink font-mono text-sm focus:ring-2 focus:ring-ledger focus:outline-none disabled:opacity-50"
                placeholder="ENTER INQUIRY..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3 bg-ledger text-paper font-space text-xs font-bold uppercase tracking-wider border border-ink shadow-[3px_3px_0px_0px_#1C2B22] hover:bg-ledger/90 transition-all min-h-[44px] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSending ? "Sending…" : "Log Inquiry"}
            </button>
          </form>

          {/* Alternative email */}
          <div className="mt-8 border-t border-dashed border-ink/40 pt-4 text-center">
            <span className="font-space text-[10px] text-ink/60 uppercase">
              Alternatively, send an email to:
            </span>
            <p className="font-mono text-xs text-ledger font-bold mt-1 uppercase selection:bg-ledger selection:text-paper">
              <a
                href="mailto:contact@freelancertax.pk"
                className="hover:underline underline-offset-2"
              >
                contact@freelancertax.pk
              </a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
