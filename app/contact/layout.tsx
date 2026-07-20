import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — FreelancerTax.pk",
  description:
    "Get in touch with the FreelancerTax.pk team. Report a calculation discrepancy, request features, or send general feedback.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
