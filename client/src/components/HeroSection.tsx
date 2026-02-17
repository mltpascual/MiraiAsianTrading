/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Full-viewport hero with cinematic gold bar image
 * Minimal text overlay with gold accents, i18n support
 */

import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HERO_IMAGE = "/images/hero-gold-bars.webp";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden" id="hero">
      <div
        className="absolute inset-0 transition-transform duration-100"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img
          src={HERO_IMAGE}
          alt="Premium gold bullion bars in a luxury vault setting"
          className="w-full h-[120%] object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/85 via-[#0A0A0A]/50 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className={`transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-[#C9A84C]" />
                <span className="font-[Montserrat] text-[13px] uppercase tracking-[0.3em] text-[#C9A84C]">
                  {t("hero.tag")}
                </span>
              </div>
            </div>

            <h1 className={`transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
              <span className="block font-[Cormorant_Garamond] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#E8D5B7] leading-[0.95] mb-3">
                {t("hero.title1")}
              </span>
              <span className="block font-[Cormorant_Garamond] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95]">
                <span className="text-gold-gradient">{t("hero.title2")}</span>
              </span>
            </h1>

            <p className={`font-[Montserrat] text-[17px] leading-relaxed text-[#8A8279] mt-8 max-w-lg transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              {t("hero.desc")}
            </p>

            <div className={`flex flex-wrap gap-4 mt-10 transition-all duration-1000 delay-900 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              <a href="#services" className="inline-flex items-center font-[Montserrat] text-[14px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-8 py-3.5 rounded-full hover:bg-[#E8D5B7] transition-colors duration-300">
                {t("hero.cta1")}
              </a>
              <a href="#about" className="inline-flex items-center font-[Montserrat] text-[14px] uppercase tracking-[0.15em] text-[#C9A84C] border border-[#C9A84C]/40 px-8 py-3.5 rounded-full hover:border-[#C9A84C] hover:bg-[#C9A84C]/10 transition-all duration-300">
                {t("hero.cta2")}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#about" className="flex flex-col items-center gap-2 text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors duration-300 group" aria-label="Scroll down">
          <span className="font-[Montserrat] text-[12px] uppercase tracking-[0.3em]">{t("hero.scroll")}</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
