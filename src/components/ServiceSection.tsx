import Image from "next/image";
import Link from "next/link";

type Service = {
  icon: string;
  title: string;
  desc: string;
  ctaStyle: "solid" | "outline";
  size?: "wide" | "narrow" | "third";
};

const services: Service[] = [
  {
    icon: "/images/icons/network-icon.png",
    title: "Identity Assurance",
    desc: "Unique decentralised IDs (DIDs) for every AI agent and application.",
    ctaStyle: "solid",
    size: "wide",
  },
  {
    icon: "/images/icons/cloud-icon.png",
    title: "Credential Verification",
    desc: "Independently validated credentials (VCs) from trusted auditors and partners.",
    ctaStyle: "outline",
    size: "narrow",
  },
  {
    icon: "/images/icons/endpoint-icon.png",
    title: "Dynamic Trust Score",
    desc: "Live score calculated from infrastructure, data, audits and recency.",
    ctaStyle: "outline",
    size: "third",
  },
  {
    icon: "/images/icons/monitor-icon.png",
    title: "Audit & Compliance",
    desc: "Traceable audit trail, automated compliance checks and registry access.",
    ctaStyle: "outline",
    size: "third",
  },
  {
    icon: "/images/icons/monitor-icon.png",
    title: "Operational Monitoring",
    desc: "24/7 validation of agent permissions, tool usage and data integrity.",
    ctaStyle: "outline",
    size: "third",
  },
];

const serviceRowIndices = [
  [0, 1],
  [2, 3, 4],
];

export default function ServiceSection() {
  const serviceRows = serviceRowIndices
    .map((indices) => indices.map((i) => services[i]).filter(Boolean))
    .filter((row) => row.length > 0);

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
            <span className="text-white text-sm">TAP Core Services</span>
          </div>

          <h2 className="text-white text-4xl font-bold leading-snug mb-4">
            Verified Trust Infrastructure
          </h2>

          <p className="text-white/70 max-w-xl text-lg leading-relaxed">
            TAP continuously validates every layer of your AI ecosystem so you
            can prove compliance, preserve trust and engage confidently in new
            marketplaces.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="flex flex-col gap-4 lg:gap-6">
          {serviceRows.map((row, rowIndex) => (
            <div
              key={`service-row-${rowIndex}`}
              className="flex flex-col lg:flex-row gap-4 lg:gap-6"
            >
              {row.map((service) => {
                const sizeClass =
                  service.size === "wide"
                    ? "lg:basis-[60%]"
                    : service.size === "third"
                    ? "lg:basis-1/3"
                    : "lg:basis-[40%]";

                return (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                    ctaStyle={service.ctaStyle}
                    className={`flex-1 ${sizeClass}`}
                  />
                );
              })}
            </div>
          ))}
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
  ctaStyle = "solid",
  className = "",
}: {
  icon: string;
  title: string;
  desc: string;
  ctaStyle?: "solid" | "outline";
  className?: string;
}) {
  return (
    <div
      className={`bg-[#121614] rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:border-[#39FF88] ${className}`}
    >
      <div className="w-12 h-12 rounded-full bg-[#1A2822] flex items-center justify-center mb-6">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <h3 className="text-white text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-white/70 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="w-full h-px bg-white/10 mb-6"></div>
      <Link
        href="#"
        className={`inline-flex items-center gap-2 font-medium px-5 py-3 rounded-lg transition ${
          ctaStyle === "solid"
            ? "bg-[#39FF88] text-black hover:opacity-90"
            : "border border-[#39FF88] text-[#39FF88] hover:bg-[#39FF88]/10"
        }`}
      >
        Learn More →
      </Link>
    </div>
  );
}
