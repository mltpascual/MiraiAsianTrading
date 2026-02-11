/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Asymmetric two-column layout
 * Vault interior image on right, text on left
 * Gold line dividers and scroll-triggered animations
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VAULT_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/h8zwkf8UJ0XdQ5iGPfBf0a-img-4_1770802604000_na1fn_dmF1bHQtaW50ZXJpb3I.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2g4endrZjhVSjBYZFE1aUdQZkJmMGEtaW1nLTRfMTc3MDgwMjYwNDAwMF9uYTFmbl9kbUYxYkhRdGFXNTBaWEpwYjNJLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=j79bljyLbHzSllE16NxSed3sLl~JqFfdqGra5eM40OgCAKqgkgN0tFPyz6QHaVNHv6qMODOu4Lfd02~gwml2c2yis8PXuC8xo-B91jX3BS5K8wTxPG-zDyd9DhZCxqakrO9jVUW8p1qVmaAar7Imhg1kETPASbe~DDoze4ci2xI9sOP~tA0PBIE0pW9dxtV-B2TJmIyDQINHvmaCCUktf1B~5Ka5Z~CX4~at14k54~9CgCrP~wbmgSMFJpoQ2HmwxGV-Nr1BnYva2PE66kVIFQRrxhdLxWENFQF6k7T6uqc7QU57A7hDWvbwn3TSHeKpJz7e2b-YUlZT4717GdereA__";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5,000+", label: "Satisfied Clients" },
  { value: "99.9%", label: "Gold Purity Guaranteed" },
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="about" className="relative py-28 lg:py-36 bg-[#0A0A0A]">
      {/* Gold divider at top */}
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
                About Us
              </span>
            </div>

            <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8D5B7] leading-[1.05] mb-8">
              Built on Trust,{" "}
              <span className="text-gold-gradient">Driven by Integrity</span>
            </h2>

            <p className="font-[Montserrat] text-[15px] leading-[1.8] text-[#8A8279] mb-6">
              Mirai Asian Trading is a premier gold trading company dedicated to
              providing secure, transparent, and reliable transactions. Our name,
              "Mirai" — meaning "future" in Japanese — reflects our
              forward-thinking approach to the precious metals market.
            </p>

            <p className="font-[Montserrat] text-[15px] leading-[1.8] text-[#8A8279] mb-10">
              We specialize in the purchase and sale of gold bars, coins, and
              fine jewelry, serving both individual investors and institutional
              clients across Asia and beyond. Every transaction is backed by our
              commitment to fair pricing, verified authenticity, and exceptional
              client service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${600 + i * 150}ms` }}
                >
                  <div className="font-[Cormorant_Garamond] text-3xl sm:text-4xl font-bold text-[#C9A84C]">
                    {stat.value}
                  </div>
                  <div className="font-[Montserrat] text-[11px] uppercase tracking-[0.1em] text-[#8A8279] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Column */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t border-l border-[#C9A84C]/40" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b border-r border-[#C9A84C]/40" />

              <img
                src={VAULT_IMAGE}
                alt="Secure gold vault interior with rows of gold bars"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
