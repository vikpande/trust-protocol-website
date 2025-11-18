import Link from "next/link";

export default function ProtectionCTA() {
  return (
    <section id="contact" className="w-full scroll-mt-24 py-28 lg:py-32 bg-[#0A0D0C]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Rounded Gradient Box */}
        <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#1A3A2B] to-[#0A0D0C] rounded-3xl py-16 lg:py-20 px-8 lg:px-16 text-center border border-white/10 shadow-xl space-y-8">
          {/* Heading */}
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-6">
            Operationalise
            <br />
            <span className="text-[#39FF88]">Provable Trust</span>
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Deploy the Trust Assurance Protocol to verify every agent, maintain
            compliance by default and unlock new revenue across trusted AI
            marketplaces.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#39FF88] text-black font-medium px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Connect with TAP →
          </Link>
        </div>
      </div>
    </section>
  );
}
