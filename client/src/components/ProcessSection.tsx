/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Horizontal process steps with connecting gold lines, i18n
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageSquare, Search, Handshake, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  const steps = [
    { icon: MessageSquare, number: "01", title: t("process.step1.title"), description: t("process.step1.desc") },
    { icon: Search, number: "02", title: t("process.step2.title"), description: t("process.step2.desc") },
    { icon: Handshake, number: "03", title: t("process.step3.title"), description: t("process.step3.desc") },
    { icon: CheckCircle2, number: "04", title: t("process.step4.title"), description: t("process.step4.desc") },
  ];

  return (
    <section className="relative py-28 lg:py-36 bg-[#0A0A0A] overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[13px] uppercase tracking-[0.3em] text-[#C9A84C]">{t("process.tag")}</span>
            <div className="w-12 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E8D5B7] leading-[1.05]">
            {t("process.title")}
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className={`relative text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${400 + i * 200}ms` }}>
                  <div className="relative inline-flex items-center justify-center w-[104px] h-[104px] mb-8">
                    <div className="absolute inset-0 border border-[#C9A84C]/20 rotate-45" />
                    <div className="absolute inset-2 bg-[#0D0D0D] border border-[#C9A84C]/10" />
                    <Icon size={28} className="relative z-10 text-[#C9A84C]" strokeWidth={1.5} />
                  </div>
                  <div className="font-[Montserrat] text-[13px] tracking-[0.2em] text-[#C9A84C]/40 mb-2">Step {step.number}</div>
                  <h3 className="font-[Cormorant_Garamond] text-xl font-bold text-[#E8D5B7] mb-3">{step.title}</h3>
                  <p className="font-[Montserrat] text-[15px] leading-[1.8] text-[#8A8279] max-w-xs mx-auto">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
