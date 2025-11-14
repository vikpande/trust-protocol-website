"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const [open, setOpen] = useState(0); // 0 = first item open

  const items = [
    {
      title: "Proven Industry Expertise",
      content:
        "Fortexa’s team combines decades of cybersecurity knowledge, delivering strategies trusted by enterprises worldwide.",
    },
    {
      title: "24/7 Security Assurance",
      content:
        "Our security operations center monitors your infrastructure round-the-clock to detect anomalies instantly.",
    },
    {
      title: "AI-Driven Protection",
      content:
        "Our AI-powered engine automatically adapts to new threats, ensuring proactive and intelligent defense.",
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
            <span className="text-white text-sm">Why Choose Us</span>
          </div>

          {/* Title */}
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-6">
            Comprehensive <br /> Cybersecurity Service
          </h2>

          {/* Intro Text */}
          <p className="text-white/70 text-base max-w-lg mb-10">
            Fortexa safeguards businesses with enterprise-grade protection,
            proactive monitoring, and unmatched industry expertise.
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
