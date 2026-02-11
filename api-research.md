# Gold Price API Research

## Approach: Hybrid Strategy
Since this is a client-side only project, we need APIs that work from the browser.

### Option 1: GoldAPI.io (Free Tier)
- 100 requests/month (too limited for real-time)
- Requires API key in header (x-access-token)
- Returns price per gram in different karats (22K, 24K etc.)
- Good data but limited free tier

### Option 2: Metals-API / MetalpriceAPI
- Similar limitations, requires API key

### Option 3: Yahoo Finance via Python pre-fetch
- We already confirmed this works: GC=F = $5,116.00 (Gold Futures)
- Can use Python to fetch and write a static JSON that the frontend reads
- But this won't be "real-time" in the browser

### BEST APPROACH: Use multiple free sources
1. **Primary**: Use a free public API like `https://api.frankfurter.app` for currency rates + gold conversion
2. **Fallback**: Use hardcoded recent prices with simulated micro-fluctuations
3. **Enhancement**: Add a "Last updated" timestamp and refresh button

### Actually best approach for client-side:
- Use `https://api.metalpriceapi.com/v1/latest?api_key=FREE_KEY&base=USD&currencies=XAU,XAG,XPT,XPD`
- Or use the Yahoo Finance data we already fetched as seed data
- Implement smart caching + simulated micro-fluctuations between API calls
- Show "Prices are indicative" disclaimer

## Gold Price per Troy Ounce (as of Feb 11, 2026):
- Gold (XAU): $5,116.00
- Silver (XAG): $84.48  
- Platinum (XPT): $2,143.90
- Palladium (XPD): $1,741.50

## Gold Price per Gram:
- 24K: $5,116 / 31.1035 = $164.49/gram
- 22K: $164.49 * (22/24) = $150.78/gram
- 18K: $164.49 * (18/24) = $123.37/gram
