/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Sticky gold price ticker bar below the navbar
 * Simulated live prices with animated updates
 */

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PriceData {
  label: string;
  key: string;
  price: number;
  change: number;
  changePercent: number;
}

const basePrices = [
  { key: "ticker.gold", base: 2645.30 },
  { key: "ticker.silver", base: 31.42 },
  { key: "ticker.platinum", base: 1024.50 },
  { key: "ticker.palladium", base: 1087.20 },
];

function randomFluctuation(base: number, range: number) {
  return base + (Math.random() - 0.5) * range;
}

export default function GoldTicker() {
  const { t } = useLanguage();
  const [prices, setPrices] = useState<PriceData[]>(() =>
    basePrices.map((p) => ({
      label: p.key,
      key: p.key,
      price: p.base,
      change: 0,
      changePercent: 0,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) =>
        prev.map((p, i) => {
          const newPrice = randomFluctuation(basePrices[i].base, basePrices[i].base * 0.005);
          const change = newPrice - basePrices[i].base;
          const changePercent = (change / basePrices[i].base) * 100;
          return { ...p, price: newPrice, change, changePercent };
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0D0D0D] border-b border-[#C9A84C]/10 py-2 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
          <div className="flex items-center gap-8 animate-ticker">
            {prices.map((p) => (
              <div key={p.key} className="flex items-center gap-3 shrink-0">
                <span className="font-[Montserrat] text-[11px] uppercase tracking-wider text-[#8A8279]">
                  {t(p.key)}
                </span>
                <span className="font-[Montserrat] text-[13px] font-semibold text-[#E8D5B7]">
                  ${p.price.toFixed(2)}
                </span>
                <span
                  className={`flex items-center gap-1 font-[Montserrat] text-[11px] font-medium ${
                    p.change >= 0 ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {p.change >= 0 ? (
                    <TrendingUp size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}
                  {p.change >= 0 ? "+" : ""}
                  {p.changePercent.toFixed(2)}%
                </span>
              </div>
            ))}
          </div>
          <span className="font-[Montserrat] text-[9px] text-[#8A8279]/50 shrink-0 hidden lg:block">
            {t("ticker.note")}
          </span>
        </div>
      </div>
    </div>
  );
}
