/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Full-width CTA banner with gold texture background, i18n
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const GOLD_TEXTURE = "/images/gold-abstract-texture.webp";

export default function CtaBanner() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const { t } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img src={GOLD_TEXTURE} alt="" className="w-full h-full object-cover" loading="lazy" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
      </div>
      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E8D5B7] leading-[1.1] mb-6">
          {t("cta.title")}
        </h2>
        <p className="font-[Montserrat] text-[17px] leading-[1.8] text-[#8A8279] max-w-2xl mx-auto mb-10">{t("cta.desc")}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contact" className="inline-flex items-center font-[Montserrat] text-[14px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-10 py-4 rounded-full hover:bg-[#E8D5B7] transition-colors duration-300">
            {t("cta.btn1")}
          </a>
          <a href="#services" className="inline-flex items-center font-[Montserrat] text-[14px] uppercase tracking-[0.15em] text-[#C9A84C] border border-[#C9A84C]/40 px-10 py-4 rounded-full hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300">
            {t("cta.btn2")}
          </a>
        </div>
      </div>
    </section>
  );
}
