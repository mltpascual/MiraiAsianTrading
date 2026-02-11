/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Real-time gold price ticker bar using live API data
 * Shows Gold, Silver, Platinum, Palladium with change indicators
 * Animated price updates with green/red coloring
 */

import { useState, useEffect, useRef } from "react";
import { TrendingUp, TrendingDown, RefreshCw, Wifi, WifiOff } from "lucide-react";
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
  const { metals, isLive, lastUpdated, refetch } = useGoldPrices(60000);
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

  const formatTime = (date: Date | null) => {
    if (!date) return "";
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="bg-[#0D0D0D] border-b border-[#C9A84C]/10 py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide">
          {/* Metal prices */}
          <div className="flex items-center gap-5 sm:gap-8">
            {metals.map((m) => (
              <div key={m.symbol} className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="font-[Montserrat] text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A8279]">
                  {t(nameMap[m.name] || m.name)}
                </span>
                <span
                  className={`font-[Montserrat] text-[12px] sm:text-[13px] font-semibold transition-colors duration-300 ${
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
                  className={`flex items-center gap-0.5 font-[Montserrat] text-[10px] sm:text-[11px] font-medium ${
                    m.change >= 0 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {m.change >= 0 ? (
                    <TrendingUp size={11} />
                  ) : (
                    <TrendingDown size={11} />
                  )}
                  {m.change >= 0 ? "+" : ""}
                  {m.changePercent.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>

          {/* Status indicator */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            {isLive ? (
              <Wifi size={10} className="text-emerald-400" />
            ) : (
              <WifiOff size={10} className="text-[#8A8279]/50" />
            )}
            <span className="font-[Montserrat] text-[9px] text-[#8A8279]/60 hidden lg:block">
              {isLive ? "LIVE" : t("ticker.note")}
              {lastUpdated && ` · ${formatTime(lastUpdated)}`}
            </span>
            <button
              onClick={refetch}
              className="p-1 hover:bg-[#C9A84C]/10 rounded transition-colors"
              aria-label="Refresh prices"
            >
              <RefreshCw size={10} className="text-[#8A8279]/40 hover:text-[#C9A84C]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
