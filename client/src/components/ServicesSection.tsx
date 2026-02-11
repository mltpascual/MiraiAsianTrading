/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Three service cards with distinct images, i18n
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const COINS_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/h8zwkf8UJ0XdQ5iGPfBf0a-img-2_1770802581000_na1fn_Z29sZC1jb2lucy1jb2xsZWN0aW9u.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2g4endrZjhVSjBYZFE1aUdQZkJmMGEtaW1nLTJfMTc3MDgwMjU4MTAwMF9uYTFmbl9aMjlzWkMxamIybHVjeTFqYjJ4c1pXTjBhVzl1LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fwIktB-LutRuFkvtsHeKvwX8OBtKrxOp00pUwJJ2X6wMRQv5BO1yLMZXLfwoyNOojY7KYP5W81GdIQyatx1bITnwD6nR06e6YXfJkPEk7B7mnWuw31BX6oP61gMOe-dI7jFzu~C2lcfOSmHFKL7DFnDf1SIMWLukztbN8g~4xY3TXHzfaPHFs~WsqXgFDh8z3MAy0yeQMwdZJMqOqcjnXFoHnspfb0TW8aiZ16Nz65hG3vnEdmNefHu2qq7y8DewlnhwfWtccmiPpAoYNtc~h8pNo0TdR84GfulgiKIWT47ScGIMTz6TDEnwyR7BLOQNnlggAS32Tr52VOD6Kd25Hw__";
const JEWELRY_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/h8zwkf8UJ0XdQ5iGPfBf0a-img-3_1770802598000_na1fn_Z29sZC1qZXdlbHJ5LWx1eHVyeQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2g4endrZjhVSjBYZFE1aUdQZkJmMGEtaW1nLTNfMTc3MDgwMjU5ODAwMF9uYTFmbl9aMjlzWkMxcVpYZGxiSEo1TFd4MWVIVnllUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=idoLhJdxC1WGMZDC8cJBlmXxz5T4RTjYECN36UoUou-6K6ZZUyYRV9qfrWofMRLi2wOgxR4ZJJT7u0IT8J3jzpNTHvLVyFvssc6eW43r3UWVNntyM-H7CqOqSx~hOpl4JRDDkNuBMpBDTZJNl4PmXIjX3pnf2BEPBORqv76ds6d-vsrEduX0FOjpfwkHQ8pDgnvNjKBHvUE0nDWoTW08Qr5E1Qa2xob1NuIzuwbTDNDr5V37-FPVhnlwsS1TNqTgk~o5K2xGp2sidyMhOpPSuZLe8idZJx7qfQsuS1RUy1e56EuS9slmKAGhwHE5YjkEuUFOOd6NIUsEMbhci8RlVQ__";
const GOLD_TEXTURE = "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/h8zwkf8UJ0XdQ5iGPfBf0a-img-5_1770802597000_na1fn_Z29sZC1hYnN0cmFjdC10ZXh0dXJl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L2g4endrZjhVSjBYZFE1aUdQZkJmMGEtaW1nLTVfMTc3MDgwMjU5NzAwMF9uYTFmbl9aMjlzWkMxaFluTjBjbUZqZEMxMFpYaDBkWEpsLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kAqQkRAmmkjUqglhfZ13dYtt-vtYMCyjZQ-a49k3ASy5Wbiy6zb-T8lTAYg937e9XZthCXnZGWWh~WtmpUbVhRCRKQq6wtFh3rJALZTl1I0p9VF1Mj0zVlnUJWtZ-aeUFhOAo~VREpOYczO8YslZqD7MR5zAUearMmRErCix1aBV4dPEZm43sAHXjAqUofImo2QnJK6bKBrEjhy3KdrUjc8k7QNNWBtzF2wRQsgCzmPWB3RhgpFCVn9LCEdtA8Gr-wHzvJcqMV2DZXhDhtn7DjF1gOVHjK1FOtL26LdPBE78CpJhXGtCCgv7AKaYeLnTRIayzVkbEZRuEv-gHECioA__";

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
