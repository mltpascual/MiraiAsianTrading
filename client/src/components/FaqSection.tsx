/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * FAQ section with elegant accordion
 * Gold accents, smooth animations
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of gold products do you trade?",
    a: "We specialize in investment-grade gold bars (1g to 1kg), gold coins from sovereign mints worldwide (Krugerrands, American Eagles, Maple Leafs, etc.), and fine gold jewelry in 18K, 22K, and 24K. All products are certified for purity and authenticity.",
  },
  {
    q: "How do you ensure the authenticity of gold products?",
    a: "Every gold product undergoes rigorous verification by certified assayers. We use advanced testing methods including X-ray fluorescence (XRF) analysis, ultrasonic testing, and specific gravity measurements. We only source from LBMA-accredited refineries and trusted suppliers.",
  },
  {
    q: "What is the minimum investment amount?",
    a: "Our minimum investment starts at 1 gram of gold, making precious metals accessible to all investors. For larger transactions, we offer preferential rates and personalized advisory services. Contact us for a custom quote based on your investment goals.",
  },
  {
    q: "How are your prices determined?",
    a: "Our prices are benchmarked against the London Bullion Market Association (LBMA) gold fix and international spot prices. We apply a transparent premium that covers authentication, insurance, and handling. There are no hidden fees — what you see is what you pay.",
  },
  {
    q: "Do you offer storage and delivery services?",
    a: "Yes, we offer both insured delivery and secure vault storage options. Delivery is available nationwide with full insurance coverage. Our vault storage is managed in partnership with licensed security facilities, providing 24/7 monitoring and comprehensive insurance.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, cashier's checks, and cash payments (subject to regulatory limits). For large transactions, we can arrange escrow services for added security. All transactions are fully documented and compliant with local regulations.",
  },
  {
    q: "Can I sell my gold back to you?",
    a: "Absolutely. We offer competitive buyback rates for all gold products, whether purchased from us or elsewhere. Our buyback prices are based on current market rates with transparent pricing. The process is quick — typically settled within 24-48 hours.",
  },
  {
    q: "Do you provide certificates of authenticity?",
    a: "Yes, every gold product sold comes with a certificate of authenticity detailing the weight, purity, serial number (for bars), and assay results. For coins, we provide grading certificates from recognized numismatic authorities when applicable.",
  },
];

export default function FaqSection() {
  const { ref, isVisible } = useScrollAnimation(0.08);
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-28 lg:py-36 bg-[#0A0A0A]">
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
              {t("faq.tag")}
            </span>
            <div className="w-8 h-px bg-[#C9A84C]" />
          </div>
          <h2
            className={`font-[Cormorant_Garamond] text-4xl sm:text-5xl font-bold text-[#E8D5B7] mb-4 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("faq.title")}
          </h2>
          <p
            className={`font-[Montserrat] text-[15px] text-[#8A8279] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t("faq.desc")}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border border-[#C9A84C]/10 hover:border-[#C9A84C]/20 transition-all duration-500 ${
                openIndex === i ? "border-[#C9A84C]/25 bg-[#0D0D0D]" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${300 + i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-[Montserrat] text-[14px] sm:text-[15px] font-medium text-[#E8D5B7] pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#C9A84C] shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ${
                  openIndex === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <div className="w-full h-px bg-[#C9A84C]/10 mb-4" />
                  <p className="font-[Montserrat] text-[13px] sm:text-[14px] leading-relaxed text-[#8A8279]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
