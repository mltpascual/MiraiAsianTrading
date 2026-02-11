/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Newsletter signup section with gold texture background
 * Elegant form with gold accents
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function NewsletterSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const { t } = useLanguage();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing! You'll receive our next market update.");
      setEmail("");
    }
  };

  return (
    <section className="relative py-20 bg-[#0D0D0D]">
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className={`relative border border-[#C9A84C]/15 p-10 sm:p-14 overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#C9A84C]/40" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#C9A84C]/40" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[#C9A84C]/40" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#C9A84C]/40" />

          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
                {t("newsletter.tag")}
              </span>
              <div className="w-8 h-px bg-[#C9A84C]" />
            </div>

            <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl font-bold text-[#E8D5B7] mb-4">
              {t("newsletter.title")}
            </h2>
            <p className="font-[Montserrat] text-[14px] text-[#8A8279] max-w-xl mx-auto mb-8">
              {t("newsletter.desc")}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A8279]"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("newsletter.placeholder")}
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-[#0A0A0A] border border-[#C9A84C]/20 text-[#E8D5B7] font-[Montserrat] text-[13px] placeholder:text-[#8A8279]/50 focus:border-[#C9A84C]/50 focus:outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C9A84C] hover:bg-[#E8D5B7] text-[#0A0A0A] font-[Montserrat] text-[12px] uppercase tracking-wider font-semibold rounded-full transition-colors duration-300"
              >
                {t("newsletter.button")}
                <ArrowRight size={14} />
              </button>
            </form>

            <p className="font-[Montserrat] text-[11px] text-[#8A8279]/50 mt-4">
              {t("newsletter.privacy")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
