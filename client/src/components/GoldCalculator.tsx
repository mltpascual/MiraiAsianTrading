/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Gold Price Calculator — enter weight in grams, select karat, see estimated value
 * Uses real-time gold prices from useGoldPrices hook
 * Elegant dark card with gold accents, animated results
 */

import { useState, useMemo } from "react";
import { Calculator, Scale, Gem, ArrowRight, RefreshCw, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGoldPrices } from "@/hooks/useGoldPrices";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const KARAT_OPTIONS = [
  { value: 24, label: "24K", purity: "99.9%", desc: "Pure Gold" },
  { value: 22, label: "22K", purity: "91.6%", desc: "Jewelry Grade" },
  { value: 21, label: "21K", purity: "87.5%", desc: "Middle East Standard" },
  { value: 18, label: "18K", purity: "75.0%", desc: "Fine Jewelry" },
  { value: 14, label: "14K", purity: "58.3%", desc: "Everyday Jewelry" },
];

const WEIGHT_PRESETS = [1, 5, 10, 50, 100, 500];

const CURRENCY_OPTIONS = [
  { code: "USD", symbol: "$", rate: 1 },
  { code: "PHP", symbol: "₱", rate: 56.5 },
  { code: "JPY", symbol: "¥", rate: 149.8 },
  { code: "EUR", symbol: "€", rate: 0.92 },
  { code: "SGD", symbol: "S$", rate: 1.34 },
  { code: "AED", symbol: "د.إ", rate: 3.67 },
];

export default function GoldCalculator() {
  const { t } = useLanguage();
  const { goldPerGram24K, isLive, lastUpdated, refetch } = useGoldPrices(60000);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const [weight, setWeight] = useState<string>("10");
  const [karat, setKarat] = useState(24);
  const [currency, setCurrency] = useState("USD");
  const [showDetails, setShowDetails] = useState(false);

  const selectedCurrency = CURRENCY_OPTIONS.find((c) => c.code === currency) || CURRENCY_OPTIONS[0];
  const selectedKarat = KARAT_OPTIONS.find((k) => k.value === karat) || KARAT_OPTIONS[0];

  const calculation = useMemo(() => {
    const w = parseFloat(weight) || 0;
    const pricePerGramAtKarat = goldPerGram24K * (karat / 24);
    const totalUSD = w * pricePerGramAtKarat;
    const totalLocal = totalUSD * selectedCurrency.rate;
    const pricePerGramLocal = pricePerGramAtKarat * selectedCurrency.rate;

    return {
      weight: w,
      pricePerGramUSD: pricePerGramAtKarat,
      pricePerGramLocal,
      totalUSD,
      totalLocal,
      purity: selectedKarat.purity,
    };
  }, [weight, karat, currency, goldPerGram24K, selectedCurrency.rate, selectedKarat.purity]);

  const formatNumber = (n: number, decimals: number = 2) =>
    n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

  return (
    <section id="calculator" className="relative py-24 sm:py-32 bg-[#0A0A0A]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #C9A84C 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`relative max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A84C]/40" />
            <span className="font-[Montserrat] text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
              {t("calc.tag")}
            </span>
            <div className="w-12 h-px bg-[#C9A84C]/40" />
          </div>
          <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl font-bold text-[#E8D5B7] mb-4">
            {t("calc.title")}
          </h2>
          <p className="font-[Montserrat] text-[14px] text-[#8A8279] max-w-xl mx-auto leading-relaxed">
            {t("calc.desc")}
          </p>
        </div>

        {/* Calculator card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#111111] border border-[#C9A84C]/15 rounded-2xl overflow-hidden">
            {/* Top status bar */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#0D0D0D] border-b border-[#C9A84C]/10">
              <div className="flex items-center gap-2">
                <Calculator size={14} className="text-[#C9A84C]" />
                <span className="font-[Montserrat] text-[11px] uppercase tracking-wider text-[#C9A84C]">
                  {t("calc.liveCalc")}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-[Montserrat] text-[10px] text-[#8A8279]/60">
                  24K: {selectedCurrency.symbol}{formatNumber(goldPerGram24K * selectedCurrency.rate)}/g
                </span>
                <div className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
                <button onClick={refetch} className="p-1 hover:bg-[#C9A84C]/10 rounded transition-colors" aria-label="Refresh">
                  <RefreshCw size={11} className="text-[#8A8279]/40 hover:text-[#C9A84C]" />
                </button>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Input controls */}
                <div className="space-y-6">
                  {/* Weight input */}
                  <div>
                    <label className="flex items-center gap-2 font-[Montserrat] text-[11px] uppercase tracking-wider text-[#8A8279] mb-3">
                      <Scale size={13} className="text-[#C9A84C]" />
                      {t("calc.weight")}
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        min="0"
                        step="0.1"
                        className="w-full bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-xl px-5 py-4 font-[Montserrat] text-2xl font-semibold text-[#E8D5B7] focus:outline-none focus:border-[#C9A84C]/60 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="0"
                      />
                      <span className="absolute right-5 top-1/2 -translate-y-1/2 font-[Montserrat] text-[13px] text-[#8A8279]">
                        grams
                      </span>
                    </div>
                    {/* Weight presets */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {WEIGHT_PRESETS.map((w) => (
                        <button
                          key={w}
                          onClick={() => setWeight(String(w))}
                          className={`font-[Montserrat] text-[11px] px-3 py-1.5 rounded-full border transition-all duration-200 ${
                            weight === String(w)
                              ? "border-[#C9A84C] bg-[#C9A84C]/15 text-[#C9A84C]"
                              : "border-[#C9A84C]/10 text-[#8A8279] hover:border-[#C9A84C]/30 hover:text-[#E8D5B7]"
                          }`}
                        >
                          {w}g
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Karat selection */}
                  <div>
                    <label className="flex items-center gap-2 font-[Montserrat] text-[11px] uppercase tracking-wider text-[#8A8279] mb-3">
                      <Gem size={13} className="text-[#C9A84C]" />
                      {t("calc.karat")}
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {KARAT_OPTIONS.map((k) => (
                        <button
                          key={k.value}
                          onClick={() => setKarat(k.value)}
                          className={`flex flex-col items-center py-3 px-2 rounded-xl border transition-all duration-200 ${
                            karat === k.value
                              ? "border-[#C9A84C] bg-[#C9A84C]/10"
                              : "border-[#C9A84C]/10 hover:border-[#C9A84C]/30"
                          }`}
                        >
                          <span
                            className={`font-[Montserrat] text-[13px] font-bold ${
                              karat === k.value ? "text-[#C9A84C]" : "text-[#E8D5B7]"
                            }`}
                          >
                            {k.label}
                          </span>
                          <span className="font-[Montserrat] text-[9px] text-[#8A8279] mt-0.5">
                            {k.purity}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Currency selection */}
                  <div>
                    <label className="font-[Montserrat] text-[11px] uppercase tracking-wider text-[#8A8279] mb-3 block">
                      {t("calc.currency")}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {CURRENCY_OPTIONS.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => setCurrency(c.code)}
                          className={`font-[Montserrat] text-[11px] px-4 py-2 rounded-full border transition-all duration-200 ${
                            currency === c.code
                              ? "border-[#C9A84C] bg-[#C9A84C]/15 text-[#C9A84C]"
                              : "border-[#C9A84C]/10 text-[#8A8279] hover:border-[#C9A84C]/30 hover:text-[#E8D5B7]"
                          }`}
                        >
                          {c.symbol} {c.code}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Results */}
                <div className="flex flex-col">
                  <div className="bg-gradient-to-br from-[#1A1508] via-[#151005] to-[#0D0D0D] border border-[#C9A84C]/20 rounded-xl p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    {/* Main result */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-[Montserrat] text-[11px] uppercase tracking-wider text-[#C9A84C]/70">
                          {t("calc.estimated")}
                        </span>
                      </div>
                      <div className="mb-6">
                        <span className="font-[Cormorant_Garamond] text-5xl sm:text-6xl font-bold text-[#E8D5B7] leading-none">
                          {selectedCurrency.symbol}
                          {calculation.totalLocal >= 1000000
                            ? `${(calculation.totalLocal / 1000000).toFixed(2)}M`
                            : formatNumber(calculation.totalLocal)}
                        </span>
                        <span className="font-[Montserrat] text-[13px] text-[#8A8279] ml-2">
                          {selectedCurrency.code}
                        </span>
                      </div>

                      {currency !== "USD" && (
                        <div className="font-[Montserrat] text-[13px] text-[#8A8279] mb-6">
                          ≈ ${formatNumber(calculation.totalUSD)} USD
                        </div>
                      )}

                      {/* Breakdown */}
                      <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="flex items-center gap-2 font-[Montserrat] text-[11px] uppercase tracking-wider text-[#C9A84C]/60 hover:text-[#C9A84C] transition-colors mb-4"
                      >
                        <Info size={12} />
                        {showDetails ? t("calc.hideDetails") : t("calc.showDetails")}
                      </button>

                      {showDetails && (
                        <div className="space-y-3 border-t border-[#C9A84C]/10 pt-4 animate-in fade-in duration-300">
                          <div className="flex justify-between font-[Montserrat] text-[12px]">
                            <span className="text-[#8A8279]">{t("calc.pricePerGram")}</span>
                            <span className="text-[#E8D5B7]">
                              {selectedCurrency.symbol}{formatNumber(calculation.pricePerGramLocal)}
                            </span>
                          </div>
                          <div className="flex justify-between font-[Montserrat] text-[12px]">
                            <span className="text-[#8A8279]">{t("calc.weightLabel")}</span>
                            <span className="text-[#E8D5B7]">{calculation.weight}g</span>
                          </div>
                          <div className="flex justify-between font-[Montserrat] text-[12px]">
                            <span className="text-[#8A8279]">{t("calc.purityLabel")}</span>
                            <span className="text-[#E8D5B7]">{selectedKarat.label} ({calculation.purity})</span>
                          </div>
                          <div className="flex justify-between font-[Montserrat] text-[12px]">
                            <span className="text-[#8A8279]">{t("calc.goldPer24K")}</span>
                            <span className="text-[#E8D5B7]">
                              ${formatNumber(goldPerGram24K)}/g
                            </span>
                          </div>
                          <div className="border-t border-[#C9A84C]/10 pt-3 flex justify-between font-[Montserrat] text-[12px]">
                            <span className="text-[#8A8279]">{t("calc.formula")}</span>
                            <span className="text-[#C9A84C] text-[11px]">
                              {calculation.weight}g × {selectedCurrency.symbol}{formatNumber(calculation.pricePerGramLocal)}/g
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-[#C9A84C]/10">
                      <a
                        href="#contact"
                        className="flex items-center justify-center gap-2 w-full font-[Montserrat] text-[12px] uppercase tracking-[0.15em] text-[#0A0A0A] bg-[#C9A84C] px-6 py-3.5 rounded-full hover:bg-[#E8D5B7] transition-colors duration-300"
                      >
                        {t("calc.getQuote")}
                        <ArrowRight size={14} />
                      </a>
                      <p className="font-[Montserrat] text-[9px] text-[#8A8279]/50 text-center mt-3">
                        {t("calc.disclaimer")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
