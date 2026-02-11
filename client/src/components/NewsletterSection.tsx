/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Enhanced newsletter section with topic preferences,
 * success animation, and frequency selection
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Mail, ArrowRight, Check, TrendingUp, Newspaper, BookOpen, Bell } from "lucide-react";
import { toast } from "sonner";

const TOPICS = [
  { id: "market", icon: TrendingUp, labelKey: "newsletter.topic.market" },
  { id: "news", icon: Newspaper, labelKey: "newsletter.topic.news" },
  { id: "education", icon: BookOpen, labelKey: "newsletter.topic.education" },
  { id: "alerts", icon: Bell, labelKey: "newsletter.topic.alerts" },
];

export default function NewsletterSection() {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>(["market", "alerts"]);
  const [frequency, setFrequency] = useState<"daily" | "weekly" | "monthly">("weekly");
  const [subscribed, setSubscribed] = useState(false);

  const toggleTopic = (id: string) => {
    setSelectedTopics((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && selectedTopics.length > 0) {
      setSubscribed(true);
      toast.success(t("newsletter.success"));
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    } else if (selectedTopics.length === 0) {
      toast.error(t("newsletter.selectTopic"));
    }
  };

  return (
    <section className="relative py-20 bg-[#0D0D0D]">
      <div className="gold-divider w-full absolute top-0" />

      <div ref={ref as React.RefObject<HTMLDivElement>} className="max-w-4xl mx-auto px-6 lg:px-8">
        <div
          className={`relative border border-[#C9A84C]/15 p-8 sm:p-14 overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#C9A84C]/40" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#C9A84C]/40" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-[#C9A84C]/40" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#C9A84C]/40" />

          {/* Subtle gold gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/[0.02] to-transparent pointer-events-none" />

          {subscribed ? (
            /* Success state */
            <div className="text-center py-8 animate-in fade-in duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/15 mb-6">
                <Check size={28} className="text-[#C9A84C]" />
              </div>
              <h3 className="font-[Cormorant_Garamond] text-3xl font-bold text-[#E8D5B7] mb-3">
                {t("newsletter.thankYou")}
              </h3>
              <p className="font-[Montserrat] text-[16px] text-[#8A8279] max-w-md mx-auto">
                {t("newsletter.confirmMsg")}
              </p>
            </div>
          ) : (
            /* Form state */
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="font-[Montserrat] text-[13px] uppercase tracking-[0.3em] text-[#C9A84C]">
                  {t("newsletter.tag")}
                </span>
                <div className="w-8 h-px bg-[#C9A84C]" />
              </div>

              <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl font-bold text-[#E8D5B7] mb-4">
                {t("newsletter.title")}
              </h2>
              <p className="font-[Montserrat] text-[16px] text-[#8A8279] max-w-xl mx-auto mb-8">
                {t("newsletter.desc")}
              </p>

              {/* Topic selection */}
              <div className="mb-6">
                <p className="font-[Montserrat] text-[13px] uppercase tracking-wider text-[#8A8279] mb-3">
                  {t("newsletter.interests")}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {TOPICS.map((topic) => {
                    const Icon = topic.icon;
                    const isActive = selectedTopics.includes(topic.id);
                    return (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => toggleTopic(topic.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border font-[Montserrat] text-[13px] uppercase tracking-wider transition-all duration-200 ${
                          isActive
                            ? "border-[#C9A84C] bg-[#C9A84C]/15 text-[#C9A84C]"
                            : "border-[#C9A84C]/10 text-[#8A8279] hover:border-[#C9A84C]/30 hover:text-[#E8D5B7]"
                        }`}
                      >
                        <Icon size={13} />
                        {t(topic.labelKey)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Frequency selection */}
              <div className="mb-8">
                <p className="font-[Montserrat] text-[13px] uppercase tracking-wider text-[#8A8279] mb-3">
                  {t("newsletter.frequency")}
                </p>
                <div className="flex justify-center gap-2">
                  {(["daily", "weekly", "monthly"] as const).map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFrequency(f)}
                      className={`px-5 py-2 rounded-full border font-[Montserrat] text-[13px] uppercase tracking-wider transition-all duration-200 ${
                        frequency === f
                          ? "border-[#C9A84C] bg-[#C9A84C]/15 text-[#C9A84C]"
                          : "border-[#C9A84C]/10 text-[#8A8279] hover:border-[#C9A84C]/30 hover:text-[#E8D5B7]"
                      }`}
                    >
                      {t(`newsletter.freq.${f}`)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Email form */}
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
                    className="w-full pl-11 pr-4 py-3.5 bg-[#0A0A0A] border border-[#C9A84C]/20 text-[#E8D5B7] font-[Montserrat] text-[15px] placeholder:text-[#8A8279]/50 focus:border-[#C9A84C]/50 focus:outline-none transition-colors rounded-full"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C9A84C] hover:bg-[#E8D5B7] text-[#0A0A0A] font-[Montserrat] text-[14px] uppercase tracking-wider font-semibold rounded-full transition-colors duration-300"
                >
                  {t("newsletter.button")}
                  <ArrowRight size={14} />
                </button>
              </form>

              <p className="font-[Montserrat] text-[13px] text-[#8A8279]/50 mt-4">
                {t("newsletter.privacy")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
