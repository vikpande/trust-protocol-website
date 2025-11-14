export default function WhoWeAre() {
  return (
    <section id="about" className="w-full scroll-mt-24 py-28 lg:py-32 bg-[#0A0D0C]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#131715] border border-white/10 px-4 py-2 rounded-full mb-4">
          <span className="w-3 h-3 rounded-full bg-[#39FF88]"></span>
          <span className="text-white text-sm">Who We Are</span>
        </div>

        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-10 lg:mb-14">
          Advanced Cybersecurity Built <br />
          For Enterprise Protection
        </h2>

        {/* Video Placeholder */}
        {/* <div className="bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-xl w-full h-[380px] md:h-[440px] mb-16 flex items-center justify-center">
          <button className="w-20 h-20 flex items-center justify-center rounded-full bg-black/50 backdrop-blur border border-white/20 hover:scale-105 transition">
            <span className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[22px] border-l-[#39FF88] ml-1"></span>
          </button>
        </div> */}

        {/* Info + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 text-left">
          {/* Left Text */}
          <div className="text-white/70 text-base leading-relaxed space-y-6 max-w-xl">
            <p>
              Fortexa was founded with a clear mission: to provide organizations
              with resilient cybersecurity solutions that protect critical data,
              ensure regulatory compliance, and enable growth in the digital
              era. Our team of seasoned experts combines intelligence-driven
              strategies with cutting-edge technologies, offering scalable
              protection that adapts to the unique challenges of every
              enterprise.
            </p>
            <p>
              From AI-powered threat detection to risk management frameworks, we
              partner with businesses across industries to secure their future,
              minimize vulnerabilities, and build long-term resilience.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <StatCard stat="20+" label="Years Experience" />
            <StatCard stat="99.9%" label="Incident Response Rate" />
            <StatCard stat="500+" label="Enterprises Secured" />
            <StatCard stat="24/7" label="Expert Support" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Individual Stat Card Component */
function StatCard({ stat, label }: { stat: string; label: string }) {
  return (
    <div className="bg-[#121614] rounded-2xl p-6 border border-white/10 shadow-lg hover:shadow-[0_0_30px_#1b4727] transition">
      <h3 className="text-white text-3xl font-bold mb-1">{stat}</h3>
      <p className="text-white/60 text-sm leading-snug">{label}</p>
    </div>
  );
}
