import Image from "next/image";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="w-full scroll-mt-24 py-28 lg:py-32 bg-[#0A0D0C]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Block */}
        <div className="mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#131715] border border-white/10 px-4 py-2 rounded-full mb-5">
            <span className="w-3 h-3 rounded-full bg-[#39FF88]"></span>
            <span className="text-white text-sm">Our Service</span>
          </div>

          <h2 className="text-white text-4xl font-bold leading-snug mb-4">
            Comprehensive <br /> Cybersecurity Service
          </h2>

          <p className="text-white/70 max-w-xl text-lg leading-relaxed">
            Scalable, reliable, and intelligent cybersecurity designed to
            protect organizations of every size across industries.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <ServiceCard
            icon="/images/icons/network-icon.png"
            title="Network Security"
            desc="Fortify your infrastructure with firewalls, intrusion detection, and secure access controls."
          />

          <ServiceCard
            icon="/images/icons/cloud-icon.png"
            title="Cloud Security"
            desc="Keep your data safe in the cloud with advanced encryption and compliance-ready solutions."
          />

          <ServiceCard
            icon="/images/icons/endpoint-icon.png"
            title="Endpoint Protection"
            desc="Safeguard every device in your organization from malware and ransomware."
          />

          <ServiceCard
            icon="/images/icons/monitor-icon.png"
            title="Threat Monitoring & Response"
            desc="24/7 monitoring with rapid incident response to stop threats before they spread."
          />
        </div>
      </div>
    </section>
  );
}

/* Service Card Component */
function ServiceCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-[#121614] rounded-3xl p-8 border border-white/10 shadow-lg hover:shadow-[0_0_40px_#1b4727] transition">
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-[#1A2822] flex items-center justify-center mb-6">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-white/70 text-sm leading-relaxed mb-6">{desc}</p>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-6"></div>

      {/* Button */}
      <Link
        href="#"
        className="inline-flex items-center gap-2 bg-[#39FF88] text-black font-medium px-5 py-3 rounded-lg hover:opacity-90 transition"
      >
        Learn More →
      </Link>
    </div>
  );
}
