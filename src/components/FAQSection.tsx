"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      q: "What industries does Fortexa serve?",
      a: "We secure finance, healthcare, retail, and government organizations with advanced solutions.",
    },
    {
      q: "How fast is your threat detection?",
      a: "Our system detects anomalies in real-time using AI-driven response mechanisms.",
    },
    {
      q: "Do you offer 24/7 support?",
      a: "Yes, our cybersecurity specialists provide round-the-clock monitoring and assistance.",
    },
    {
      q: "Is your platform cloud-compatible?",
      a: "Fortexa is fully cloud-compatible with multi-cloud, hybrid, and on-premise environments.",
    },
    {
      q: "How do you ensure compliance?",
      a: "We align with global standards, including GDPR, HIPAA, ISO 27001, and SOC frameworks.",
    },
    {
      q: "Can Fortexa stop ransomware attacks?",
      a: "Yes, our system uses behavioral analysis and AI-led responses to neutralize threats.",
    },
  ];

  return (
    <section id="faq" className="w-full scroll-mt-24 py-28 lg:py-32 bg-[#0A0D0C]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#131715] border border-white/10 px-4 py-2 rounded-full mb-4">
          <span className="w-3 h-3 rounded-full bg-[#39FF88]"></span>
          <span className="text-white text-sm">FAQ</span>
        </div>

        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-6">
          Frequently Asked
          <br /> Questions
        </h2>

        {/* Subtitle */}
        <p className="text-white/60 max-w-2xl text-base mb-14">
          Find quick answers to cybersecurity services, solutions, and
          support-related questions here.
        </p>

        {/* FAQ GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((item, index) => (
            <FAQItem key={index} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-[#121614] rounded-2xl p-6 lg:p-7 border border-white/10 shadow-md cursor-pointer transition"
      onClick={() => setOpen(!open)}
    >
      {/* Question Row */}
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-medium">{q}</h3>

        {/* Arrow Icon */}
        <div
          className={`text-[#39FF88] transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          ▲
        </div>
      </div>

      {/* Answer */}
      {open && (
        <p className="text-white/60 text-sm leading-relaxed mt-4">{a}</p>
      )}
    </div>
  );
}
