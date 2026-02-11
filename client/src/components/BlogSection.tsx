/*
 * DESIGN: Noir Opulence — Dark Luxury Editorial
 * Blog/News section with 6 real articles based on current gold market data
 * Gold accents, editorial style, expanded grid layout
 */

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Calendar, ArrowRight, Clock, TrendingUp, BookOpen, Globe, Award, BarChart3, Lightbulb } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Article {
  title: string;
  excerpt: string;
  fullContent: string[];
  date: string;
  readTime: string;
  category: string;
  categoryIcon: React.ReactNode;
  image: string;
}

const articles: Article[] = [
  {
    title: "Gold Surges Past $5,100 as Rate Cut Expectations Fuel Rally",
    excerpt:
      "Gold prices have broken above $5,100 per troy ounce for the first time since January 30, marking a dramatic 72% year-over-year increase from $2,860 a year ago. Analysts cite geopolitical tensions, central bank demand, and anticipated Federal Reserve rate cuts as the primary catalysts driving this historic rally.",
    fullContent: [
      "Gold (XAU/USD) April futures opened at $5,126.40 per troy ounce on February 11, 2026 — a 1.9% jump from the previous session's close of $5,031. This marks gold's first move above $5,100 since January 30, signaling renewed bullish momentum in the precious metals market.",
      "The rally has been nothing short of extraordinary. Year-over-year, gold has gained approximately 72%, climbing from $2,860 in February 2025. In the past month alone, prices have risen over 10%, from $4,468 to current levels. Market pricing from CME Group's FedWatch tool indicates investors expect at least two 25-basis-point rate cuts in 2026, with the first adjustment possibly arriving in June.",
      "CIBC has raised its gold target to $6,000, while UBP maintains a constructive stance forecasting $5,200 per ounce by Q4 2026. Goldman Sachs analysts note that central bank purchases — averaging 60 metric tons per month — continue to provide a structural floor for prices.",
      "For investors and traders at Mirai Asian Trading, this environment presents both opportunity and the need for careful strategy. Our team of advisors is available to help clients navigate the current market dynamics and identify optimal entry points for gold bar, coin, and jewelry investments.",
    ],
    date: "February 11, 2026",
    readTime: "5 min read",
    category: "Market Analysis",
    categoryIcon: <TrendingUp size={12} />,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/MIH9YpTvkC8ONk607vw9So-img-1_1770831335000_na1fn_YmxvZy1nb2xkLXN1cmdl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L01JSDlZcFR2a0M4T05rNjA3dnc5U28taW1nLTFfMTc3MDgzMTMzNTAwMF9uYTFmbl9ZbXh2WnkxbmIyeGtMWE4xY21kbC5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=XbTxR42kdJ8eEruiFJt9v1aOWUjjud8JkG9qpACs5KjKDPewvbgiOXxW4HBD5h9LSPwSkFjOdJZ5h8OiDPJ80~CGtXLijkKVVEDs7RwdhrFWKHbZ93b8jibdowMidRUtq3olTvKGMx36gqAPacTp-zsMPTKI-egbymOKa6Dc1ENzQP-jVXnLtcWlFY~ZM5UsnEcHUYWw5v30tp9Pr31fSxYffR5Zml1cE0ciBserIAvW-akQ4zDimuDm1LsndaZyiVmNCxjf5hFBYIBS3hPvE3yxJMhmyilugBzYbMUPqLVgemi9CdMdqorYGk5CtsCGdKEN3~1rq77tYQbxpHYEcA__",
  },
  {
    title: "Central Banks Bought 863 Tonnes of Gold in 2025 — What It Means for 2026",
    excerpt:
      "Global central banks purchased 863.3 tonnes of gold in 2025, maintaining historically elevated levels despite a 21% year-on-year decline. Q4 2025 saw a rebound to 230 tonnes, up 6% quarter-on-quarter. The World Gold Council reports that buying remains geographically widespread, with Goldman Sachs forecasting continued purchases of 60 metric tons per month.",
    fullContent: [
      "The World Gold Council's latest Gold Demand Trends report reveals that central banks acquired 863.3 tonnes of gold in 2025 — down 21% from the previous year's record but still well above the historical average of approximately 500 tonnes annually. The fourth quarter showed particular strength, with 230 tonnes purchased, representing a 6% increase from Q3.",
      "This sustained institutional demand has been a cornerstone of the gold bull market. Central banks across Asia, the Middle East, and emerging markets have been diversifying away from dollar-denominated reserves, a trend accelerated by geopolitical realignments and sanctions concerns.",
      "Goldman Sachs forecasts that central bank gold purchases will average 60 metric tons per month through 2026, providing a structural floor for prices. Reuters analysts note that this buying pattern, combined with retail and ETF demand, creates a supply-demand dynamic that strongly favors continued price appreciation.",
      "At Mirai Asian Trading, we've observed increased interest from institutional clients seeking to align their portfolios with this global trend. Our team can facilitate large-volume gold bar transactions with competitive pricing benchmarked against international markets.",
    ],
    date: "February 9, 2026",
    readTime: "6 min read",
    category: "Industry Report",
    categoryIcon: <BarChart3 size={12} />,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/MIH9YpTvkC8ONk607vw9So-img-2_1770831328000_na1fn_YmxvZy1jZW50cmFsLWJhbmtz.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L01JSDlZcFR2a0M4T05rNjA3dnc5U28taW1nLTJfMTc3MDgzMTMyODAwMF9uYTFmbl9ZbXh2WnkxalpXNTBjbUZzTFdKaGJtdHouanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=nfRcj40twe0z-JEbV4I6qnUbQMyCvXy5zjTLUV60JtRi2eKvmHnnVV8vxtH6FFgmmqGB7NRO~oz2roEQKRczIaPRzJNxOKpo2o6urdn2JyKJqeD-RLb6DrVhVbbBWYzRCE3oJCzZzAYmsnBI0Wdc~EcMVJEXg0Pb-F~~HutyWiL6LsHra23TaIsW5s4JKjDXTbRD3etj-uaeX2IM8uP3lS23m51IyFYDV8PujpqScBlwQgTTMuH2CZy~4-Ebn4IrKcWOAEehmxK~SAxh9vuM-1bYi~7muGyrc~D6znBqUWGNX5mQFMA~sxCD5--p0m5ygixnqkRagnijPw7Iu4TJsg__",
  },
  {
    title: "Asian Gold Demand Surges: Philippines, China, and India Lead the Charge",
    excerpt:
      "Gold prices hit record highs across Asian markets in January 2026, with the Philippines and India experiencing notable increases amid global trade tensions. China's demand surged ahead of the Lunar New Year, while India's gold premiums halved from a decade-high, signaling renewed buying interest across the region.",
    fullContent: [
      "Asia continues to be the engine driving global gold demand. On January 20, 2026, gold prices surged to record highs across the region, with the Philippines and India experiencing particularly notable increases. Reuters reports that China's gold demand rose significantly ahead of the Lunar New Year celebrations, a period traditionally associated with strong gold buying.",
      "In India, gold premiums more than halved from a decade-high level, indicating that buyers are returning to the market after a period of price-driven caution. The World Gold Council's China market update shows that December 2025 demand rebounded strongly, with investment demand offsetting softer jewelry consumption.",
      "BCA Research has noted that momentum-driven buying from Asia has been a key factor in gold's rally, though they caution that a reversal in Asian demand could trigger a meaningful price pullback. This underscores the importance of the region in setting global gold price direction.",
      "For clients of Mirai Asian Trading based in the Philippines and across Southeast Asia, these dynamics create a compelling environment for both buying and selling gold. Our expertise in the Asian gold market allows us to offer competitive pricing and timely execution for clients looking to capitalize on regional demand trends.",
    ],
    date: "February 6, 2026",
    readTime: "5 min read",
    category: "Regional Focus",
    categoryIcon: <Globe size={12} />,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/MIH9YpTvkC8ONk607vw9So-img-3_1770831350000_na1fn_YmxvZy1hc2lhbi1kZW1hbmQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L01JSDlZcFR2a0M4T05rNjA3dnc5U28taW1nLTNfMTc3MDgzMTM1MDAwMF9uYTFmbl9ZbXh2WnkxaGMybGhiaTFrWlcxaGJtUS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eVl02CvYXTWxy92c0Hw3V6pOBNkU3cBoBq1P3zsR-fowFOrjjcz~7nJuBwQ7A4c0lzTbMNjhLpbwHCEn9Lmc6LAKeE1~H8kfBD~usrDTUfDEjU9Ux-3lU4V-6nvtvFmp4cH1QLZ0jxP1OrRVYEbfWZe4KplAzb2MUnnT9Bxk3LxLREVq84x7wzkj3s8PvmSqe~~TMFxoUJ8TQ7UReDKoFAcHQo4X0LD3n6mWecjVbwMM1-BvY~63OLog2ei8wdpC6zXsuM4mOJCsgEuSHnvO6QGMuVG1puixtSJKzbQ25d2JkJhKa9XAGnLZpeQSsU73mkmQtVSJST-KSo2Y9EkPRA__",
  },
  {
    title: "Understanding Gold Purity: A Complete Guide to 18K, 22K, and 24K Gold",
    excerpt:
      "Whether you're investing in gold bars or shopping for jewelry, understanding gold purity is essential. This comprehensive guide explains the differences between 18K, 22K, and 24K gold, how karat ratings work, and what to look for when making a purchase. Learn how purity affects value, durability, and investment potential.",
    fullContent: [
      "Gold purity is measured in karats (K), with 24K representing the purest form at 99.9% gold content. However, pure gold is extremely soft and malleable, which is why lower karat ratings are often preferred for jewelry and certain investment products. Understanding these distinctions is crucial for making informed purchasing decisions.",
      "24K Gold (99.9% pure) is the standard for investment-grade gold bars and is the purest form available commercially. It has a rich, deep yellow color and is the most valuable per gram. However, its softness makes it impractical for everyday jewelry. Most gold bars traded at Mirai Asian Trading are 24K, sourced from LBMA-accredited refineries.",
      "22K Gold (91.67% pure) strikes a balance between purity and durability. It's widely used in traditional Asian jewelry, particularly in India and Southeast Asia, where high-karat gold is culturally preferred. The remaining 8.33% typically consists of copper, silver, or zinc alloys that add strength without significantly altering the gold's appearance.",
      "18K Gold (75% pure) is the most popular choice for fine jewelry worldwide. It offers excellent durability for daily wear while maintaining a beautiful gold color. The 25% alloy content allows jewelers to create rose gold, white gold, and other color variations. When trading jewelry at Mirai Asian Trading, our pricing is transparently based on gold weight and current market rates, with clear documentation of karat and gram weight.",
    ],
    date: "February 3, 2026",
    readTime: "7 min read",
    category: "Education",
    categoryIcon: <BookOpen size={12} />,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/MIH9YpTvkC8ONk607vw9So-img-4_1770831350000_na1fn_YmxvZy1nb2xkLXB1cml0eQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L01JSDlZcFR2a0M4T05rNjA3dnc5U28taW1nLTRfMTc3MDgzMTM1MDAwMF9uYTFmbl9ZbXh2WnkxbmIyeGtMWEIxY21sMGVRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=TSwGCAOrBYsl7LDuvRc7SQM760XPlknTuoP2~~WYpe0~XI6~QSYFCszIu5l0JUt~wskko-Dsfl1DKyNbhpIEcnqh7SrI-MRLCVEQlKLZK5sPZejBZVySAkoaXsYFJYoXy3M0LBMKlboPEet8HVXPLbhHdcvcCktyGF1-~JP0-UXvyxo4F2eu0Iltk2nQOgiTRNyq0GeCe4hRldc2MRf5SfESLf3pH9CaUwn0nJuq1-LgIDL95xl-Dc83bv0fXOEL7djJfuCejwmrWp~QkiVzomQ8HcME2vEHI~q0-hpInlGzW1qg9t6jC6YXadtNe6SE0jUOJcJxe9OwFdjJve-jdQ__",
  },
  {
    title: "How to Start Investing in Physical Gold: A Beginner's Guide",
    excerpt:
      "Physical gold remains one of the most accessible and tangible investment options available. From 1-gram bars to sovereign coins, this guide walks you through the essentials of building a gold portfolio — including how much to allocate, what products to buy, and how to verify authenticity before making your first purchase.",
    fullContent: [
      "Investing in physical gold doesn't require a fortune to get started. With fractional products like 1-gram bars and 1/10-ounce coins, even investors with modest budgets can begin building a gold portfolio. Financial advisors generally recommend allocating 5% to 15% of your net worth to gold, though some experts suggest up to 20% for risk-tolerant investors.",
      "Gold bars (also called bullion) are the most straightforward investment option. They're sold by weight — from 1 gram to 1 kilogram — with purity, weight, and manufacturer details stamped directly on the bar. Investment-grade bars are 24K (99.9% pure) and typically come from LBMA-accredited refineries. At Mirai Asian Trading, every bar we sell includes a certificate of authenticity and assay documentation.",
      "Gold coins offer an alternative with added collectible value. Sovereign mint coins like the American Gold Eagle, South African Krugerrand, and Canadian Maple Leaf carry a small premium over the spot gold price but are widely recognized and highly liquid. Their collectible status and government backing provide an additional layer of trust for investors.",
      "When purchasing physical gold, always verify the seller's credentials, request certificates of authenticity, and understand the difference between spot price and the retail premium. At Mirai Asian Trading, we provide transparent pricing based on real-time international gold rates, with clear documentation of all fees and premiums. Our team is available to guide first-time investors through every step of the process.",
    ],
    date: "January 28, 2026",
    readTime: "8 min read",
    category: "Investment Guide",
    categoryIcon: <Lightbulb size={12} />,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/MIH9YpTvkC8ONk607vw9So-img-5_1770831344000_na1fn_YmxvZy1pbnZlc3RtZW50LWd1aWRl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L01JSDlZcFR2a0M4T05rNjA3dnc5U28taW1nLTVfMTc3MDgzMTM0NDAwMF9uYTFmbl9ZbXh2WnkxcGJuWmxjM1J0Wlc1MExXZDFhV1JsLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=F8euA27bWI9d-CNjyCc~oALKJIaYhZ3CvPKYEMwAcMabd0av4kqYGv6hNzr2Zoh65~P9q1p7gZQCWH1CUZuOwKyXzvkNiD56MjJ8-VXtwVrppOvk6wqsw30qr2Ufyb3FBAYBu4oZL6J6UThmzG9uOGCZAP2mSIrc91DRZjrPVhvD4kYaTboLStFP355TT6zUkdIZYOYYQu0nf2fRv3rg0~RlFveIpBBA8uNBw0sVJn~BeBqeaElNo3piH9q3zodcGURG36pxObvAfTW0huwG4hlwOTW9MpidjJPCHS7I8Bqrh3uN2M7abSzFj51kPujNERtDe-u6jYcvlG-DlbgUXQ__",
  },
  {
    title: "Gold Bull Market Outlook 2026: Analysts Forecast $5,200 to $6,000+",
    excerpt:
      "Major financial institutions are raising their gold price targets for 2026, with forecasts ranging from $5,200 to $6,000 per ounce. VanEck confirms the gold bull market endures despite early-year volatility, while Franklin Templeton estimates prices would need to fall below $3,500 for a meaningful sentiment shift. Here's what investors should watch.",
    fullContent: [
      "The consensus among major financial institutions is clear: the gold bull market has further room to run. UBP maintains a constructive stance on gold, anticipating prices will reach approximately $5,200 per ounce by Q4 2026. CIBC has gone further, hiking its gold target to $6,000 — a level that would represent a 19% gain from current prices.",
      "VanEck's latest analysis confirms that the gold bull market endures despite early 2026 volatility. The firm notes that most gold mining companies will report Q4 2025 and full-year results in February, along with 2026 guidance that could serve as additional catalysts for the sector.",
      "Franklin Templeton's research suggests that gold prices would need to fall below approximately $3,500 per ounce for a meaningful sentiment shift — a decline of over 30% from current levels. The firm identifies rising rates, easing inflation, or declining geopolitical tensions as potential headwinds, but views these scenarios as unlikely in the near term.",
      "For gold traders and investors, the outlook suggests continued opportunity in physical gold accumulation. At Mirai Asian Trading, we encourage clients to take a long-term perspective, building positions gradually through regular purchases. Our advisory team can help develop a personalized strategy aligned with your investment goals and risk tolerance.",
    ],
    date: "January 22, 2026",
    readTime: "6 min read",
    category: "Market Outlook",
    categoryIcon: <Award size={12} />,
    image: "https://private-us-east-1.manuscdn.com/sessionFile/sJVdgMEqXZwHzMq5rCowpR/sandbox/QUGtjh0BqERafnhZu7XFgy-img-1_1770831403000_na1fn_YmxvZy1vdXRsb29rLTIwMjY.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvc0pWZGdNRXFYWndIek1xNXJDb3dwUi9zYW5kYm94L1FVR3RqaDBCcUVSYWZuaFp1N1hGZ3ktaW1nLTFfMTc3MDgzMTQwMzAwMF9uYTFmbl9ZbXh2WnkxdmRYUnNiMjlyTFRJd01qWS5qcGc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=bBVbk3eGAX8I9Q50uq3-HdGkkxga4-UgzLcyc84v9Vw8TgukWRONjammC8xhZq-W9iMmQtNkS-9tqkGrd2zBOKVNu362QckrmvC21Sph2Op~A~X2rIQEvodWhN7wX9WqkW84nQXBR~qqnjYzaC5S3cAmSJYnuEfQ0xTUBl9SaKRBYlYSsI4FpZpBPcALftKSo4JBnwPXmfUH2uDfceofTHtRNY~2o41QifHoY4I6HMCyy35HhhsZUFO6qdqC1LCiMk00IX77tnwMEJcaDdvUBqoZQGX6PykLe~BrdX4W9hT64tMPLt7Zv1yu38RpwDQ3NkJUwv23ut7yJKRUkN2vEQ__",
  },
];

function ArticleModal({
  article,
  onClose,
}: {
  article: Article;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0A0A0A] border border-[#C9A84C]/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/60 border border-[#C9A84C]/20 text-[#E8D5B7] hover:bg-[#C9A84C]/20 transition-colors"
        >
          ✕
        </button>

        {/* Hero image */}
        <div className="relative aspect-[2/1] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6">
            <span className="inline-flex items-center gap-1.5 font-[Montserrat] text-[12px] uppercase tracking-wider bg-[#C9A84C] text-[#0A0A0A] px-3 py-1 font-semibold">
              {article.categoryIcon}
              {article.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-10">
          <div className="flex items-center gap-4 mb-5">
            <span className="flex items-center gap-1.5 font-[Montserrat] text-[13px] text-[#8A8279]">
              <Calendar size={12} />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5 font-[Montserrat] text-[13px] text-[#8A8279]">
              <Clock size={12} />
              {article.readTime}
            </span>
          </div>

          <h2 className="font-[Cormorant_Garamond] text-2xl lg:text-3xl font-bold text-[#E8D5B7] mb-6 leading-tight">
            {article.title}
          </h2>

          <div className="space-y-5">
            {article.fullContent.map((paragraph, i) => (
              <p
                key={i}
                className="font-[Montserrat] text-[16px] text-[#A89B8C] leading-[1.8]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 pt-6 border-t border-[#C9A84C]/10">
            <p className="font-[Montserrat] text-[15px] text-[#8A8279] mb-4">
              Interested in discussing how these market trends affect your gold
              trading strategy?
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 font-[Montserrat] text-[14px] uppercase tracking-wider text-[#0A0A0A] bg-[#C9A84C] hover:bg-[#B8973F] px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Contact Our Advisors
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogSection() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedArticles = showAll ? articles : articles.slice(0, 3);

  return (
    <>
      <section id="news" className="relative py-28 lg:py-36 bg-[#080808]">
        <div className="gold-divider w-full absolute top-0" />

        <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div
              className={`flex items-center justify-center gap-4 mb-6 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-[Montserrat] text-[13px] uppercase tracking-[0.3em] text-[#C9A84C]">
                {t("blog.tag")}
              </span>
              <div className="w-8 h-px bg-[#C9A84C]" />
            </div>
            <h2
              className={`font-[Cormorant_Garamond] text-4xl sm:text-5xl font-bold text-[#E8D5B7] mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {t("blog.title")}
            </h2>
            <p
              className={`font-[Montserrat] text-[16px] text-[#8A8279] max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Stay informed with our latest market analysis, educational guides,
              and industry insights to make smarter gold trading decisions.
            </p>
          </div>

          {/* Featured article (first one, large) */}
          <div
            className={`mb-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <article
              className="group grid lg:grid-cols-2 gap-0 border border-[#C9A84C]/10 hover:border-[#C9A84C]/25 bg-[#0A0A0A] transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedArticle(articles[0])}
            >
              <div className="relative overflow-hidden aspect-[3/2] lg:aspect-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 font-[Montserrat] text-[12px] uppercase tracking-wider bg-[#C9A84C] text-[#0A0A0A] px-3 py-1 font-semibold">
                    {articles[0].categoryIcon}
                    <span className="ml-1">{articles[0].category}</span>
                  </span>
                </div>
              </div>

              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-5">
                  <span className="flex items-center gap-1.5 font-[Montserrat] text-[13px] text-[#8A8279]">
                    <Calendar size={12} />
                    {articles[0].date}
                  </span>
                  <span className="flex items-center gap-1.5 font-[Montserrat] text-[13px] text-[#8A8279]">
                    <Clock size={12} />
                    {articles[0].readTime}
                  </span>
                </div>

                <h3 className="font-[Cormorant_Garamond] text-2xl lg:text-3xl font-bold text-[#E8D5B7] mb-4 group-hover:text-[#C9A84C] transition-colors duration-300 leading-tight">
                  {articles[0].title}
                </h3>

                <p className="font-[Montserrat] text-[15px] text-[#8A8279] leading-relaxed mb-6">
                  {articles[0].excerpt}
                </p>

                <span className="inline-flex items-center gap-2 font-[Montserrat] text-[14px] uppercase tracking-wider text-[#C9A84C] font-medium group-hover:gap-3 transition-all duration-300">
                  {t("blog.readMore")}
                  <ArrowRight size={14} />
                </span>
              </div>
            </article>
          </div>

          {/* Remaining articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.slice(1).map((article, i) => (
              <article
                key={i}
                className={`group border border-[#C9A84C]/10 hover:border-[#C9A84C]/25 bg-[#0A0A0A] transition-all duration-500 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
                onClick={() => setSelectedArticle(article)}
              >
                <div className="relative overflow-hidden aspect-[3/2]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 font-[Montserrat] text-[12px] uppercase tracking-wider bg-[#C9A84C] text-[#0A0A0A] px-3 py-1 font-semibold">
                      {article.categoryIcon}
                      <span className="ml-1">{article.category}</span>
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="flex items-center gap-1.5 font-[Montserrat] text-[13px] text-[#8A8279]">
                      <Calendar size={12} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-[Montserrat] text-[13px] text-[#8A8279]">
                      <Clock size={12} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-[Cormorant_Garamond] text-xl font-bold text-[#E8D5B7] mb-3 group-hover:text-[#C9A84C] transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>

                  <p className="font-[Montserrat] text-[15px] text-[#8A8279] leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2 font-[Montserrat] text-[14px] uppercase tracking-wider text-[#C9A84C] font-medium group-hover:gap-3 transition-all duration-300">
                    {t("blog.readMore")}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Show More / Show Less button */}
          {!showAll && articles.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-2 font-[Montserrat] text-[14px] uppercase tracking-wider text-[#C9A84C] border border-[#C9A84C]/30 hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/5 px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                View All Articles
                <ArrowRight size={14} />
              </button>
            </div>
          )}
          {showAll && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center gap-2 font-[Montserrat] text-[14px] uppercase tracking-wider text-[#8A8279] border border-[#8A8279]/30 hover:border-[#C9A84C]/60 hover:text-[#C9A84C] px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </>
  );
}
