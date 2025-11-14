import Image from "next/image";
import Link from "next/link";

type Service = {
  icon: string;
  title: string;
  desc: string;
  ctaStyle: "solid" | "outline";
};

const services: Service[] = [
  {
    icon: "/images/icons/network-icon.png",
    title: "Network Security",
    desc: "Fortify your infrastructure with firewalls, intrusion detection, and secure access controls.",
    ctaStyle: "solid",
  },
  {
    icon: "/images/icons/cloud-icon.png",
    title: "Cloud Security",
    desc: "Keep your data safe in the cloud with advanced encryption and compliance-ready solutions.",
    ctaStyle: "outline",
  },
  {
    icon: "/images/icons/endpoint-icon.png",
    title: "Endpoint Protection",
    desc: "Safeguard every device in your organization from malware and ransomware.",
    ctaStyle: "outline",
  },
  {
    icon: "/images/icons/monitor-icon.png",
    title: "Threat Monitoring & Response",
    desc: "24/7 monitoring with rapid incident response to stop threats before they spread.",
    ctaStyle: "outline",
  },
];

export default function ServiceSection() {
  const serviceRows = services.reduce<Service[][]>((rows, service, index) => {
    if (index % 2 === 0) rows.push([service]);
    else rows[rows.length - 1].push(service);
    return rows;
  }, []);

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
        <div className="flex flex-col gap-4 lg:gap-6">
          {serviceRows.map((row, rowIndex) => (
            <div
              key={`service-row-${rowIndex}`}
              className="flex flex-col lg:flex-row gap-4 lg:gap-6"
            >
              {row.map((service, cardIndex) => {
                const wide =
                  rowIndex % 2 === 0
                    ? cardIndex === 0
                    : cardIndex === row.length - 1;

                return (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    desc={service.desc}
                    ctaStyle={service.ctaStyle}
                    className={`flex-1 ${
                      wide ? "lg:basis-[65%]" : "lg:basis-[35%]"
                    }`}
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
        <Image src={icon} alt={title} width={28} height={28} />
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
