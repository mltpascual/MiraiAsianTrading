/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Feature grid with SVG icons
 * Gold accent borders and hover effects
 * Asymmetric layout with large feature highlight
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Eye, Scale, Award, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Secure Transactions",
    description:
      "Every trade is protected by industry-leading security protocols. Your assets and data are safeguarded at every step of the process.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Real-time pricing, clear fee structures, and detailed documentation. No hidden charges, no surprises — just honest trading.",
  },
  {
    icon: Scale,
    title: "Fair Pricing",
    description:
      "Our prices are benchmarked against international gold markets. We ensure competitive rates for both buyers and sellers.",
  },
  {
    icon: Award,
    title: "Certified Authenticity",
    description:
      "All gold products are verified for purity and authenticity. We work exclusively with LBMA-accredited sources and certified assayers.",
  },
  {
    icon: Clock,
    title: "Swift Settlement",
    description:
      "Efficient processing with rapid settlement times. We understand the value of time in precious metals trading.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Personal account managers and expert advisors available to guide you through every transaction with care and professionalism.",
  },
];

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="why-us" className="relative py-28 lg:py-36 bg-[#0A0A0A]">
      {/* Gold divider at top */}
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`max-w-2xl mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
              Why Choose Us
            </span>
          </div>
          <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8D5B7] leading-[1.05] mb-6">
            Trading with{" "}
            <span className="text-gold-gradient">Confidence</span>
          </h2>
          <p className="font-[Montserrat] text-[15px] leading-[1.8] text-[#8A8279]">
            At Mirai Asian Trading, we have built our reputation on the
            principles that matter most in precious metals trading: security,
            transparency, and unwavering commitment to our clients.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A84C]/10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group bg-[#0A0A0A] p-8 lg:p-10 hover:bg-[#0D0D0D] transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mb-6 group-hover:border-[#C9A84C]/60 group-hover:bg-[#C9A84C]/5 transition-all duration-300">
                  <Icon
                    size={22}
                    className="text-[#C9A84C]"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="font-[Cormorant_Garamond] text-xl font-bold text-[#E8D5B7] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="font-[Montserrat] text-[13px] leading-[1.8] text-[#8A8279]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
