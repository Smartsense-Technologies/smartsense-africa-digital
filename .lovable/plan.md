# Scan & Win Landing Page + Supporting Cards

Add a new public-facing Scan & Win page and link to it from the homepage and Mixed Reality page, using the existing SmartSense visual language. No infrastructure, forms, Worker, Turnstile, Brevo, secrets, or deployment config is touched.

## 1. New page: `/scan-and-win`

Create `src/pages/ScanAndWin.tsx` reusing existing components (`PageHero`, `SectionHeading`, `CTASection`, `PageMeta`, lucide icons, `Card`-style divs) and existing tokens (`bg-hero`, `accent-gradient`, `text-cyan`, `text-secondary`, `grid-pattern`, etc.). The atomic icon (`/smartsense-atomic-icon.png`) is used as a visual motif.

Sections (in order):

- **Hero** — Headline "Turn Every Scan Into an Opportunity to Engage and Reward", the given subheadline and supporting copy. Primary CTA "Discuss a Scan & Win Campaign" → `/contact`. Secondary CTA "How It Works" → in-page anchor `#how-it-works`. No entry form.
- **How It Works** (`id="how-it-works"`) — title "How Scan & Win Works", six numbered step cards (Scan QR, Enter Mobile Number, Receive Verification Code by SMS, Verify the Mobile Number, Complete Campaign Action, Receive Entry/Reward Confirmation) using icons (QrCode, Smartphone, MessageSquare, ShieldCheck, ClipboardCheck, Gift). Note beneath: "Verification codes are time-limited and should not be shared with anyone."
- **Why Mobile Verification Matters** — title "Supporting Fair and Verified Participation", intro copy, four benefit cards (Verified participant access, Reduced duplicate entries, Better campaign accountability, More reliable reward fulfilment).
- **Use Cases** — title "Built for Different Campaign Environments", eight concise cards (packaging promotions, retail/in-store, event activations, consumer rewards/loyalty, telecom-led, public awareness, smart cards/membership, print/outdoor/digital media).
- **SmartSense and Flam-powered experiences** — title "Connecting Physical Touchpoints to Mobile Engagement" with the given copy (no ownership/required implications).
- **Verification and Security** — title + the exact given copy, plus the "SmartSense will never ask participants to share their verification code with another person." line. No sender ID / API details.
- **Privacy and Consent** — title + given copy, plus the review-terms line, with a link to `/privacy-policy`.
- **Campaign Availability** — title + copy, then `CTASection` (or matching block) with CTA "Discuss a Scan & Win Campaign" → `/contact`.
- **Contact details** — show `hello@smartsense.africa` and the Lagos address where relevant (footer already shows these; will also surface in availability/CTA area).

Copy uses the phrase **"verification code"** throughout; never "OTP", "PIN", or "one-time password". Positioned as a promotional/engagement solution, not a live running promotion, lottery, betting, gambling, or financial-reward platform.

**SEO** via `PageMeta`:
- title: "Scan & Win Promotional Experiences | SmartSense Technologies"
- description: "SmartSense Scan & Win connects QR-enabled campaigns with verified mobile participation, SMS verification codes, promotional engagement and reward confirmation."

## 2. Routing

Edit `src/App.tsx`: import `ScanAndWin` and add `<Route path="/scan-and-win" element={<ScanAndWin />} />`. SPA fallback already handles GitHub Pages deep links (`.nojekyll` + existing setup).

## 3. Homepage supporting card

In `src/pages/Home.tsx`, add a single Scan & Win card to the existing "Flam-Powered Mixed Reality / Now in Market" area (matching its style, no redesign):
- Title "Scan & Win"
- Copy "Connect QR-enabled campaigns with verified mobile participation, rewards and promotional engagement."
- CTA "Explore Scan & Win" → `/scan-and-win`

## 4. Mixed Reality page reference

In `src/pages/SolutionsMixedReality.tsx`, add one concise Scan & Win reference card/CTA (matching existing style, no other changes):
- Title "Scan & Win Campaigns"
- Copy "Connect mixed reality and QR-enabled touchpoints with verified mobile participation and promotional rewards."
- CTA "Explore Scan & Win" → `/scan-and-win`

## 5. Navigation

Header stays as-is to avoid overcrowding. The page is reached via the homepage card, the Mixed Reality card, and optionally a Footer link under "Explore" (will add a single "Scan & Win" footer link, which fits cleanly).

## Out of scope / preserved unchanged
Cloudflare Worker endpoint, contact form logic, Turnstile, Brevo, all secrets/credentials, Supabase/database/backend routes, GitHub Actions workflow, env vars, domain/deployment settings, overall design and colour scheme, and the rest of the Mixed Reality page. No working Scan & Win entry form is added.

## QA before pushing
- `/scan-and-win` loads on desktop and mobile.
- Page clearly explains the SMS verification-code flow; uses "verification code", no "OTP"/"PIN"/"one-time password" (grep check).
- Homepage and Mixed Reality cards link to `/scan-and-win`.
- All existing routes still work; header/footer/logo/forms/Turnstile/Worker untouched.
- Push to the connected GitHub repository for deployment.