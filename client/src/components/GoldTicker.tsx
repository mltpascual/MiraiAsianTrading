/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Real-time gold price ticker bar — full-width scrolling marquee
 * Shows Gold, Silver, Platinum, Palladium with change indicators
 * Animated price updates with green/red coloring
 */

import { useState, useEffect, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useGoldPrices } from "@/hooks/useGoldPrices";

const nameMap: Record<string, string> = {
  Gold: "ticker.gold",
  Silver: "ticker.silver",
  Platinum: "ticker.platinum",
  Palladium: "ticker.palladium",
};

export default function GoldTicker() {
  const { t } = useLanguage();
  const { metals, refetch } = useGoldPrices(60000);
  const [flashMap, setFlashMap] = useState<Record<string, "up" | "down" | null>>({});
  const prevPricesRef = useRef<Record<string, number>>({});

  // Detect price changes for flash animation
  useEffect(() => {
    const newFlash: Record<string, "up" | "down" | null> = {};
    for (const m of metals) {
      const prev = prevPricesRef.current[m.symbol];
      if (prev !== undefined && prev !== m.pricePerOz) {
        newFlash[m.symbol] = m.pricePerOz > prev ? "up" : "down";
      }
      prevPricesRef.current[m.symbol] = m.pricePerOz;
    }
    if (Object.keys(newFlash).length > 0) {
      setFlashMap(newFlash);
      const timer = setTimeout(() => setFlashMap({}), 600);
      return () => clearTimeout(timer);
    }
  }, [metals]);

  // Auto-refresh every 60s
  useEffect(() => {
    const interval = setInterval(refetch, 60000);
    return () => clearInterval(interval);
  }, [refetch]);

  // Build the ticker items — duplicate for seamless loop
  const renderTickerItems = () =>
    metals.map((m) => (
      <div key={m.symbol} className="flex items-center gap-2 sm:gap-3 shrink-0 px-4 sm:px-6 lg:px-8">
        <span className="font-[Montserrat] text-[12px] sm:text-[13px] uppercase tracking-widest text-[#8A8279] whitespace-nowrap">
          {t(nameMap[m.name] || m.name)} ({m.symbol})
        </span>
        <span
          className={`font-[Montserrat] text-[14px] sm:text-[16px] font-bold transition-colors duration-300 whitespace-nowrap ${
            flashMap[m.symbol] === "up"
              ? "text-emerald-300"
              : flashMap[m.symbol] === "down"
              ? "text-red-300"
              : "text-[#E8D5B7]"
          }`}
        >
          ${m.pricePerOz.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
        <span
          className={`flex items-center gap-0.5 font-[Montserrat] text-[12px] sm:text-[13px] font-semibold whitespace-nowrap ${
            m.change >= 0 ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {m.change >= 0 ? (
            <TrendingUp size={12} />
          ) : (
            <TrendingDown size={12} />
          )}
          {m.change >= 0 ? "+" : ""}
          {m.changePercent.toFixed(2)}%
        </span>
        {/* Gold separator dot */}
        <span className="text-[#C9A84C]/30 text-[10px] ml-2">●</span>
      </div>
    ));

  return (
    <div className="bg-[#0D0D0D] border-b border-[#C9A84C]/15 py-2.5 w-full overflow-hidden">
      <div className="ticker-scroll flex items-center w-full">
        <div className="flex items-center animate-ticker-scroll">
          {renderTickerItems()}
          {renderTickerItems()}
          {renderTickerItems()}
        </div>
      </div>

      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-ticker-scroll {
          animation: tickerScroll 30s linear infinite;
          will-change: transform;
        }
        .animate-ticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
