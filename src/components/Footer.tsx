import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0F0E] pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo + Title */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Image
            src="/images/logo.png"
            alt="Fortexa Logo"
            width={280}
            height={280}
            className="w-full max-w-[220px] sm:max-w-[260px]"
          />
        </div>

        {/* Feature Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 max-w-3xl mx-auto">
          <Badge text="Trust Assurance Protocol" />
          <Badge text="AI Agent Passport" />
          <Badge text="Live Trust Scores" />
          <Badge text="Continuous Compliance" />
          <Badge text="Real-Time Alerts" />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/20 my-10"></div>

        {/* Footer Navigation */}
        <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-white text-sm mb-10">
          <Link href="#home" className="text-[#39FF88]">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#39FF88]">
            About
          </Link>
          <Link href="#services" className="hover:text-[#39FF88]">
            Service
          </Link>
          <Link href="#why-us" className="hover:text-[#39FF88]">
            Why TAP
          </Link>
          <Link href="#faq" className="hover:text-[#39FF88]">
            FAQ
          </Link>
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-2 mb-10">
          <a
            href="https://www.linkedin.com/company/trust-assurance-protocol"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-xl text-[#39FF88] hover:bg-[#39FF88]/10 transition"
          >
            <Image
              src="/images/icons/linkedin.png"
              alt="social"
              width={34}
              height={34}
            />
          </a>
          <a
            href="https://x.com/trust-assurance-protocol"
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-xl text-[#39FF88] hover:bg-[#39FF88]/10 transition"
          >
            <Image
              src="/images/icons/x.png"
              alt="social"
              width={34}
              height={34}
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-white/40 text-sm">
          <a href="https://www.agentic-alliance.com/" target="_blank">
            Copyright © 2025 Agentic Alliance Group. All Rights Reserved.
          </a>
        </p>
      </div>
    </footer>
  );
}

/* Badge Component */
function Badge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-[#131715] border border-white/10 text-white px-4 py-2 rounded-full text-sm">
      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#39FF88] text-black text-xs font-bold">
        ✔
      </span>
      {text}
    </div>
  );
}
