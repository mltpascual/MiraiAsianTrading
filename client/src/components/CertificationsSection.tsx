/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Certifications & Partners section
 * Horizontal scrolling logos with gold accents
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Award, BadgeCheck, Globe, Gem, Scale } from "lucide-react";

const certifications = [
  { icon: Shield, name: "LBMA Accredited", desc: "London Bullion Market Association" },
  { icon: Award, name: "ISO 9001:2015", desc: "Quality Management Certified" },
  { icon: BadgeCheck, name: "BSP Registered", desc: "Bangko Sentral ng Pilipinas" },
  { icon: Globe, name: "WGC Member", desc: "World Gold Council" },
  { icon: Gem, name: "GIA Certified", desc: "Gemological Institute of America" },
  { icon: Scale, name: "Fair Trade Gold", desc: "Responsible Sourcing Certified" },
];

export default function CertificationsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  return (
    <section className="relative py-20 bg-[#0D0D0D]">
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
              {t("certs.tag")}
            </span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className={`font-[Cormorant_Garamond] text-3xl sm:text-4xl font-bold text-[#E8D5B7] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("certs.title")}
          </h2>
          <p
            className={`font-[Montserrat] text-[14px] text-[#8A8279] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("certs.desc")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <div
                key={cert.name}
                className={`group flex flex-col items-center text-center p-6 border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
              >
                <Icon
                  size={32}
                  className="text-[#C9A84C]/60 group-hover:text-[#C9A84C] transition-colors duration-300 mb-3"
                  strokeWidth={1.5}
                />
                <span className="font-[Montserrat] text-[12px] font-semibold text-[#E8D5B7] mb-1">
                  {cert.name}
                </span>
                <span className="font-[Montserrat] text-[10px] text-[#8A8279] leading-tight">
                  {cert.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
