# Product Context — Mirai Asian Trading

## Product Name

**Mirai Asian Trading** — A premium gold trading company landing page.

## One-Line Description

A dark luxury editorial landing page for a gold trading company specializing in the purchase and sale of gold bars, coins, and jewelry in the Philippines and across Asia.

## Problem Statement

Gold trading companies in the Philippines and Southeast Asia often lack a professional, trust-building online presence. Potential clients need a way to evaluate a company's credibility, understand its services, and make informed decisions about gold transactions — all before making first contact.

## Solution Approach

A visually striking, information-rich landing page that communicates trust, expertise, and luxury through its design while providing practical tools (gold price calculator, live market data) and comprehensive information about services, processes, and company credentials.

## Target Users

### Primary: High-Net-Worth Individuals (HNWIs)

- Age: 35–65
- Location: Philippines, Japan, Singapore, UAE
- Needs: Secure gold transactions, transparent pricing, trustworthy dealer
- Behavior: Research-heavy, value reputation and credentials

### Secondary: First-Time Gold Investors

- Age: 25–45
- Location: Philippines and broader Asia
- Needs: Education about gold types and purity, simple price estimation tools
- Behavior: Price-conscious, need guidance and reassurance

### Tertiary: Jewelry Buyers/Sellers

- Age: 25–55
- Location: Metro Manila, Parañaque City area
- Needs: Fair market pricing for gold jewelry, convenient local service
- Behavior: Walk-in or phone inquiry, value proximity and personal service

## Core Features

| Feature | Status | Description |
|---------|--------|-------------|
| Hero Section | Implemented | Cinematic parallax hero with gold bar imagery and dual CTAs |
| Live Gold Ticker | Implemented | Real-time gold, silver, platinum, palladium prices from free APIs |
| Gold Calculator | Implemented | Weight/karat/type/currency calculator with premium adjustments |
| Services Overview | Implemented | Gold bars, coins, and jewelry trading cards |
| About Us | Implemented | Company story with vault interior photography |
| How It Works | Implemented | 4-step process (Consult → Evaluate → Transact → Deliver) |
| Certifications | Implemented | Industry partner and accreditation badges |
| Photo Gallery | Implemented | 4-image gallery with lightbox viewer |
| Client Testimonials | Implemented | 3 client quotes with ratings |
| Blog/News | Implemented | 6 data-driven gold market articles with full-content modals |
| FAQ | Implemented | 8-question accordion covering common inquiries |
| Newsletter Signup | Implemented | Email subscription with topic preferences and frequency options |
| Contact Form | Implemented | Inquiry form with Google Maps embed |
| Multi-Language | Implemented | English, Filipino, Japanese language switcher |
| Floating Chat | Implemented | Messenger chat button for instant contact |

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Page Load Time | < 3 seconds | Lighthouse Performance score |
| Mobile Responsiveness | 100% sections usable | Manual testing at 375px, 768px, 1024px |
| Contact Form Submissions | Baseline TBD | Form submission count (requires backend) |
| Newsletter Signups | Baseline TBD | Signup count (requires backend) |
| Bounce Rate | < 50% | Analytics (post-deployment) |
| Average Session Duration | > 2 minutes | Analytics (post-deployment) |

## Product Roadmap

### Phase 1 — Static Landing Page (Current)

All features listed above are implemented as a client-side only React application. Contact form and newsletter show success toasts but do not persist data.

### Phase 2 — Full-Stack Upgrade (Planned)

- Backend API for contact form submissions (email delivery)
- Newsletter subscription management with database storage
- Admin dashboard for managing blog articles
- Real gold price API integration via backend proxy (avoid CORS)

### Phase 3 — E-Commerce (Future)

- Online gold price quoting with live rates
- Appointment booking system
- Client portal for transaction history
- Payment integration for deposits

## Business Context

- **Company:** Mirai Asian Trading
- **Location:** Parañaque City, Manila, Philippines
- **Industry:** Precious metals trading (gold bars, coins, jewelry)
- **Market:** Philippines, Japan, Singapore, UAE
- **Facebook:** [Mirai Asian Trading](https://www.facebook.com/share/1CUnXiMKeG/)
