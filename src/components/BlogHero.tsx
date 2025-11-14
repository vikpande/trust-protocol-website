import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full scroll-mt-24 min-h-[90vh] pt-48 pb-32 bg-[#0A0D0C] relative overflow-hidden flex items-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#12321C] to-transparent opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#131715] border border-white/10 px-5 py-2 rounded-full text-white text-sm mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#39FF88] text-black text-xs font-bold">
              ✔
            </span>
            <span className="text-white">Future-Ready</span>
            <span className="text-[#39FF88]">Cyber Defense Platform</span>
          </div>

          {/* Title */}
          <h1 className="text-white font-bold text-6xl leading-tight mb-4">
            Resilient Security, <br />
            <span className="text-[#39FF88]">Trusted Protection</span>
          </h1>

          {/* Description */}
          <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
            Fortexa delivers advanced digital defense, safeguarding networks,
            data, and systems from evolving threats.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="bg-white text-black font-medium px-6 py-3 rounded-xl hover:bg-white/90 transition inline-flex items-center gap-2"
          >
            Get Started →
          </Link>
        </div>

        {/* RIGHT SIDE ILLUSTRATION */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/hero-lock.png"
            alt="Cyber Security Illustration"
            width={520}
            height={520}
            className="pointer-events-none select-none w-full max-w-xs sm:max-w-sm lg:max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
