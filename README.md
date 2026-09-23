# aispherevision.com

**Live site:** [https://aispherevision.com/](https://aispherevision.com/)

Premium AI domain for sale — **aispherevision.com** is a brandable, memorable .com at the intersection of artificial intelligence and human foresight. Listed at **$8,888 USD**, escrow-protected via [Escrow.com](https://www.escrow.com/), listed by [Desert Rich](https://desertrich.com/) premium domain brokerage.

## Stack

- [Astro](https://astro.build) 7 (static output) + Tailwind CSS 4
- Cloudflare Workers (`src/worker.js`) serving `dist/` with:
  - 301 canonical host redirects (`www` → apex, HTTP → HTTPS, `/index.html` → `/`)
  - `404-page` not-found handling (`public/404.html`, `noindex`)
- Security/caching headers via `public/_headers` (HSTS, nosniff, frame deny)

## SEO

- Single canonical URL: `https://aispherevision.com/` (canonical, `hreflang` `en` + `x-default`)
- Title/description target buyer intent: "Premium AI Domain For Sale", price in meta description for SERP CTR
- JSON-LD `@graph`: `WebSite`, `Organization`, `Product` + `Offer` ($8,888), `FAQPage` (matches visible FAQ)
- `robots.txt` + dynamic `sitemap.xml` (build-time `lastmod`)
- FAQ section (`#faq`) targets long-tail queries (price, transfer, how to buy)
- `max-image-preview:large` robots meta, hero image preload for LCP

## Conversion

- On-page inquiry form (`#inquire`) — name, email, offer, message → composes a pre-filled email to `sales@desertrich.com` (honeypot-protected)
- Sticky mobile CTA bar with price + "Inquire to Buy"
- Buy Now / Make an Offer CTAs in pricing section; all nav CTAs route to the form

## Domain authority (DA) — off-site checklist

In-repo signals (canonical URL, README backlink, schema, FAQ content) are covered. DA is earned through backlinks; recommended next steps:

1. **Verify & submit** sitemap in Google Search Console and Bing Webmaster Tools
2. **List the domain on marketplaces** (each listing = authority backlink): Sedo, Afternic, GoDaddy Auctions, Atom.com, DAN.com, BrandBucket
3. **DNJournal / NamePros / DomainHacks** — get the listing mentioned in domain-industry communities
4. **Escrow.com broker profile** and Desert Rich site link back to the listing
5. **HARO/Featured** for AI-branding commentary to earn editorial links
6. Keep content fresh (update `publishedDate` in `src/content/pages/home.md` when pricing/terms change)

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # build to dist/
npx wrangler deploy   # deploy to Cloudflare Workers
```
