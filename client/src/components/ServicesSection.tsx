/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Three service cards with distinct images, i18n
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const COINS_IMAGE = "/images/gold-coins-collection.webp";
const JEWELRY_IMAGE = "/images/gold-jewelry-luxury.webp";
const GOLD_TEXTURE = "/images/gold-abstract-texture.webp";

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const { t } = useLanguage();

  const services = [
    { number: "01", title: t("services.bars.title"), description: t("services.bars.desc"), image: GOLD_TEXTURE, alt: "Gold bars" },
    { number: "02", title: t("services.coins.title"), description: t("services.coins.desc"), image: COINS_IMAGE, alt: "Gold coins" },
    { number: "03", title: t("services.jewelry.title"), description: t("services.jewelry.desc"), image: JEWELRY_IMAGE, alt: "Gold jewelry" },
  ];

  return (
    <section id="services" className="relative py-28 lg:py-36 bg-[#070707]">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[13px] uppercase tracking-[0.3em] text-[#C9A84C]">{t("services.tag")}</span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8D5B7] leading-[1.05]">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <div key={service.number} className={`group relative bg-[#0D0D0D] border border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-all duration-500 overflow-hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`} style={{ transitionDelay: `${300 + i * 200}ms` }}>
              <div className="relative h-64 overflow-hidden">
                <img src={service.image} alt={service.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-[Cormorant_Garamond] text-5xl font-bold text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors duration-500">{service.number}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-[Cormorant_Garamond] text-2xl font-bold text-[#E8D5B7] mb-4 group-hover:text-[#C9A84C] transition-colors duration-300">{service.title}</h3>
                <p className="font-[Montserrat] text-[16px] leading-[1.8] text-[#8A8279]">{service.description}</p>
                <div className="mt-6 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#C9A84C] to-transparent transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
