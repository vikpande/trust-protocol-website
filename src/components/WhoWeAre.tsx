export default function WhoWeAre() {
  return (
    <section id="about" className="w-full scroll-mt-24 py-28 lg:py-32 bg-[#0A0D0C]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#131715] border border-white/10 px-4 py-2 rounded-full mb-4">
          <span className="w-3 h-3 rounded-full bg-[#39FF88]"></span>
          <span className="text-white text-sm">Digital Trust</span>
        </div>

        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-bold leading-snug mb-10 lg:mb-14">
          Digital Trust for
          <br className="hidden md:block" /> Evolving Ecosystems
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
              TAP was founded with a clear mission: to independently and
              cryptographically verify AI agents, processes and data layers.
              With the AI Agent Passport and Trust Score algorithm, TAP delivers
              assurance, transparency and auditable governance in a scalable
              framework designed for businesses that want to remain compliant,
              secure and innovative in the AI era.
            </p>
            <p>
              We protect organisations by continually verifying AI agents,
              infrastructure, data and applications. That guarantee of
              compliance safeguards operations today and future-proofs digital
              ecosystems for what comes next.
            </p>
          </div>

          {/* Stats */}
          <div className="bg-[#121614] rounded-2xl p-8 border border-white/10">
            <h3 className="text-white text-xl font-semibold mb-4">
              Every TAP integration offers:
            </h3>
            <ul className="space-y-4 text-white/70 text-sm leading-relaxed">
              <li>Continuous monitoring of credentials, data, infrastructure and compliance.</li>
              <li>Transparent trust score dashboards featuring certified verification statuses.</li>
              <li>Real-time alerts and automatic delisting when trust is breached.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
