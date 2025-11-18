"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Who is TAP for?",
      a: "For AI developers, enterprises, marketplaces and ecosystem partners who view trust and compliance as non-negotiable.",
    },
    {
      q: "How does the Trust Score work?",
      a: "The Trust Score is calculated from weighted factors such as infrastructure posture, data integrity, audit outcomes and time—delivering the up-to-date trust status of any agent.",
    },
    {
      q: "How does TAP ensure compliance?",
      a: "Through continuous monitoring, automated audits, real-time alerts and immediate deactivation of agents that no longer meet requirements.",
    },
  ];

  return (
    <section
      id="faq"
      className="w-full scroll-mt-24 py-28 lg:py-32 bg-[#0A0D0C]"
    >
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
          Answers to the most common Trust Assurance Protocol questions.
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
  const [open, setOpen] = useState(true);

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
