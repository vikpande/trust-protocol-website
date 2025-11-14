import Image from "next/image";

export default function TrustedBrands() {
  return (
    <section className="w-full py-12 bg-[#0A0D0C]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Tagline */}
        <p className="text-white/40 text-sm mb-8">
          Trusted by global enterprises across industries
        </p>

        {/* Logo Row */}
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-40">
          <Image
            src="/brands/saour.png"
            alt="Saour"
            width={110}
            height={40}
            className="object-contain grayscale"
          />

          <Image
            src="/brands/runway.png"
            alt="Runway"
            width={110}
            height={40}
            className="object-contain grayscale"
          />

          <Image
            src="/brands/unest.png"
            alt="Unest"
            width={110}
            height={40}
            className="object-contain grayscale"
          />

          <Image
            src="/brands/kariess.png"
            alt="Kariess"
            width={130}
            height={40}
            className="object-contain grayscale"
          />

          <Image
            src="/brands/uflyte.png"
            alt="Uflyte"
            width={110}
            height={40}
            className="object-contain grayscale"
          />

          <Image
            src="/brands/hydro.png"
            alt="Hydro"
            width={110}
            height={40}
            className="object-contain grayscale"
          />
        </div>
      </div>
    </section>
  );
}
