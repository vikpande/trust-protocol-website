import Image from "next/image";
import Link from "next/link";

export default function BlogContent() {
  return (
    <section className="w-full py-20 bg-[#0B0F0E]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          {/* Featured Image */}
          <div className="bg-white/10 rounded-3xl border border-white/10 overflow-hidden mb-10">
            <div className="w-full h-[380px] bg-transparent flex items-center justify-center">
              <Image
                src="/placeholder.png"
                alt="Blog Image"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Introduction */}
          <h2 className="text-white text-xl font-semibold mb-2">
            Introduction
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Enterprises today face cyber threats that move faster and smarter
            than ever before. Traditional security tools alone are no longer
            enough. To stay ahead, organizations need AI-driven threat
            detection—intelligence that learns, adapts, and responds in real
            time.
          </p>

          {/* Why AI Matters */}
          <h2 className="text-white text-xl font-semibold mb-2">
            Why AI Matters
          </h2>
          <p className="text-white/70 leading-relaxed mb-8">
            Attackers now use sophisticated techniques like polymorphic malware,
            insider threats, and advanced phishing campaigns. These often bypass
            signature-based defenses. AI transforms security by analyzing
            behavior, spotting anomalies, and detecting threats—even those never
            seen before.
          </p>

          {/* Key Advantages */}
          <h2 className="text-white text-xl font-semibold mb-2">
            Key Advantages
          </h2>

          <ul className="text-white/70 space-y-3 mb-10 pl-4 list-disc">
            <li>
              Real-Time Protection: Continuous monitoring across networks,
              cloud, and endpoints.
            </li>
            <li>
              Behavioral Analysis: Identifies unusual patterns that indicate
              insider or external attacks.
            </li>
            <li>
              Automated Response: Reduces reaction time, minimizing damage and
              downtime.
            </li>
            <li>
              Adaptive Learning: Improves with each incident, strengthening
              enterprise resilience.
            </li>
          </ul>

          {/* Fortexa Approach */}
          <h2 className="text-white text-xl font-semibold mb-2">
            Fortexa’s Approach
          </h2>
          <p className="text-white/70 leading-relaxed">
            At Fortexa, we combine AI-powered monitoring with expert analysis.
            Our system processes massive data flows, flags anomalies, and
            provides actionable insights to keep enterprises secure, compliant,
            and resilient.
          </p>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="space-y-10">
          {/* Recent Posts */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Recent Post :
            </h3>

            <div className="space-y-5">
              <RecentPostItem
                title="Strengthening Cloud Security With Zero Trust"
                date="August 11, 2026"
                active={false}
              />
              <RecentPostItem
                title="AI-Driven Threat Detection For Enterprises"
                date="August 18, 2026"
                active={true}
              />
              <RecentPostItem
                title="Building Compliance Frameworks"
                date="August 19, 2026"
                active={false}
              />
              <RecentPostItem
                title="The Rising Cost of Cybercrime in 2026"
                date="August 21, 2026"
                active={false}
              />
            </div>
          </div>

          {/* Speak with experts */}
          <div className="bg-gradient-to-br from-[#152A21] to-[#0B0F0E] border border-white/10 rounded-2xl p-6 shadow-xl">
            <h3 className="text-white font-semibold text-lg mb-2">
              Speak With Our Experts
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Connect directly with Fortexa’s cybersecurity specialists for
              tailored recommendations.
            </p>

            <Link
              href="/contact"
              className="block text-center bg-white/10 border border-white/20 text-white py-3 rounded-xl hover:bg-white/20 transition"
            >
              Schedule a Call
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

function RecentPostItem({
  title,
  date,
  active,
}: {
  title: string;
  date: string;
  active: boolean;
}) {
  return (
    <Link href="#" className="block group">
      <h4
        className={`text-sm font-medium mb-1 group-hover:text-[#39FF88] transition ${
          active ? "text-[#39FF88]" : "text-white"
        }`}
      >
        {title}
      </h4>

      <div className="flex items-center gap-2 text-white/50 text-xs">
        <Image src="/icons/calendar.svg" alt="" width={14} height={14} />
        <span>{date}</span>

        <Image src="/icons/user.svg" alt="" width={14} height={14} />
        <span>by : RTM</span>
      </div>
    </Link>
  );
}
