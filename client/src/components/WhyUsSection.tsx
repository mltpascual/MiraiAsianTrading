/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Feature grid with SVG icons, i18n
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Eye, Scale, Award, Clock, Users } from "lucide-react";

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const { t } = useLanguage();

  const features = [
    { icon: Shield, title: t("whyUs.f1.title"), description: t("whyUs.f1.desc") },
    { icon: Eye, title: t("whyUs.f2.title"), description: t("whyUs.f2.desc") },
    { icon: Scale, title: t("whyUs.f3.title"), description: t("whyUs.f3.desc") },
    { icon: Award, title: t("whyUs.f4.title"), description: t("whyUs.f4.desc") },
    { icon: Clock, title: t("whyUs.f5.title"), description: t("whyUs.f5.desc") },
    { icon: Users, title: t("whyUs.f6.title"), description: t("whyUs.f6.desc") },
  ];

  return (
    <section id="why-us" className="relative py-28 lg:py-36 bg-[#0A0A0A]">
      <div className="gold-divider w-full absolute top-0" />
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`max-w-2xl mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">{t("whyUs.tag")}</span>
          </div>
          <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8D5B7] leading-[1.05] mb-6">
            {t("whyUs.title")}
          </h2>
          <p className="font-[Montserrat] text-[15px] leading-[1.8] text-[#8A8279]">{t("whyUs.desc")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C9A84C]/10">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className={`group bg-[#0A0A0A] p-8 lg:p-10 hover:bg-[#0D0D0D] transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${300 + i * 100}ms` }}>
                <div className="w-12 h-12 border border-[#C9A84C]/30 flex items-center justify-center mb-6 group-hover:border-[#C9A84C]/60 group-hover:bg-[#C9A84C]/5 transition-all duration-300">
                  <Icon size={22} className="text-[#C9A84C]" strokeWidth={1.5} />
                </div>
                <h3 className="font-[Cormorant_Garamond] text-xl font-bold text-[#E8D5B7] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300">{feature.title}</h3>
                <p className="font-[Montserrat] text-[13px] leading-[1.8] text-[#8A8279]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
