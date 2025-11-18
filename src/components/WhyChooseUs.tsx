"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const [open, setOpen] = useState(0); // 0 = first item open

  const items = [
    {
      title: "Eliminate identity and trust fragmentation",
      content:
        "Centralise verification across agents, infrastructure and data so every participant carries a live, cryptographic trust passport.",
    },
    {
      title: "Instant compliance readiness & competitive edge",
      content:
        "Automated assessments, audit trails and trust dashboards make regulatory proof effortless while signalling reliability to partners.",
    },
    {
      title: "Access TAP-reserved marketplaces",
      content:
        "Join ecosystems that demand TAP certification to unlock premium demand channels for trustworthy AI agents and services.",
    },
    {
      title: "Reduce risks & protect reputation",
      content:
        "Continuous monitoring, alerts and automatic delisting contain incidents fast, keeping operations resilient and compliant.",
    },
  ];

  return (
    <section id="why-us" className="w-full scroll-mt-24 py-28 lg:py-32 bg-[#0A0D0C]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <Image
            src="/images/shield.png"
            alt="Cybersecurity Shield"
            width={550}
            height={550}
            className="pointer-events-none select-none w-full max-w-xs sm:max-w-sm lg:max-w-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#131715] border border-white/10 px-4 py-2 rounded-full mb-4">
            <span className="w-3 h-3 rounded-full bg-[#39FF88]"></span>
            <span className="text-white text-sm">Why TAP?</span>
          </div>

          {/* Title */}
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-6">
            Verifiable Confidence
            <br /> For AI-Driven Business
          </h2>

          {/* Intro Text */}
          <p className="text-white/70 text-base max-w-lg mb-10">
            TAP translates trust into an operational advantage with tamper-proof
            verification, live trust scores and proactive enforcement across
            every integration.
          </p>

          {/* Accordion */}
          <div className="space-y-8">
            {items.map((item, idx) => (
              <AccordionItem
                key={idx}
                index={idx}
                title={item.title}
                content={item.content}
                open={open}
                setOpen={setOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type AccordionItemProps = {
  index: number;
  title: string;
  content: string;
  open: number;
  setOpen: (value: number) => void;
};

/* Accordion Item Component */
function AccordionItem({ index, title, content, open, setOpen }: AccordionItemProps) {
  const isOpen = open === index;

  return (
    <div>
      {/* Header */}
      <button
        onClick={() => setOpen(isOpen ? -1 : index)}
        className="w-full flex items-center justify-between"
      >
        <h3
          className={`text-xl font-semibold ${
            isOpen ? "text-[#39FF88]" : "text-white"
          }`}
        >
          {title}
        </h3>

        <span
          className={`text-[#39FF88] text-2xl transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Content */}
      {isOpen && (
        <p className="text-white/60 text-sm leading-relaxed mt-3 mb-6 max-w-md">
          {content}
        </p>
      )}

      {/* Divider */}
      <div className="w-full h-px bg-white/10"></div>
    </div>
  );
}
