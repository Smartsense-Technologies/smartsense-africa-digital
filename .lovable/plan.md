## AI Visual Agents Page

Create a dedicated `/visual-agent` page positioning Flam-powered AI Visual Agents, deployed by SmartSense, with the live Flam demo script loaded only on that route. No backend, no infrastructure, no design-system changes.

### 1. New page: `src/pages/VisualAgent.tsx`

Built with existing components (`PageMeta`, `SectionHeading`, `CTASection`) and the same hero pattern used on Scan & Win (atomic icon + `bg-hero` + grid pattern), reusing existing semantic tokens. Flam-green accents used sparingly via a small inline accent only where relevant; no new global tokens.

Sections, using the exact copy provided:
- **Hero** — headline, subheadline, supporting copy. Primary CTA "Try the Visual Agent" anchors to `#try` on the page; secondary CTA "Request a Visual Agent Demo" links to `/contact`.
- **What Is an AI Visual Agent?** — three copy blocks including the knowledge-base limitation note.
- **How It Works** — five-step numbered card flow (same card style as Scan & Win steps).
- **Try the Visual Agent** (`id="try"`) — intro copy, a "How to interact" instruction box, microphone/camera permission note, and demo-limitation text. This section hosts the Flam script (see section 2).
- **What Visual Agents Can Do** — six cards.
- **Potential Use Cases** — ten concise cards.
- **What We Need to Build a Visual Agent** — two columns (Avatar Identity Assets / Knowledge Base Materials) plus the quality-of-knowledge-base copy.
- **Responsible Use and Permissions** — three copy blocks.
- **SmartSense and Flam Technologies** — partnership copy clarifying SmartSense does not own Flam tech.
- **Contact details** — email `hello@smartsense.africa` and the Lagos address (same card pattern as Scan & Win).
- **CTA section** — final CTA via `CTASection` linking to `/contact`.

SEO via `PageMeta`: title "AI Visual Agents | SmartSense Technologies" and the provided meta description.

### 2. Flam script — page-scoped only

Inside `VisualAgent.tsx`, a `useEffect` injects the script tag on mount and removes it on unmount, so it loads only when `/visual-agent` is open and never duplicates:

```text
on mount:
  create <script src="https://agents.flamapp.ai/v1/loader.js"
                 data-project-id="6a1d90356cb5f6704f463457"
                 data-client-key="ak_266b05d48e3bf630" async>
  guard against duplicates (skip if a script with same src already present)
  append to document.body
on unmount:
  remove that script node
```

This keeps it off the global layout, off every other route, and specifically off `/contact` and `/scan-and-win`. The keys here are public client-side loader identifiers supplied in the request (not secrets), placed directly in code as instructed. Layout reserves bottom spacing so the widget does not cover CTAs.

### 3. Routing — `src/App.tsx`

Add `import VisualAgent` and `<Route path="/visual-agent" element={<VisualAgent />} />`. GitHub Pages SPA routing already works for existing routes (e.g. `/scan-and-win`), so no extra config needed.

### 4. Supporting cards

- **Homepage** (`src/pages/Home.tsx`): add one "AI Visual Agents" card with the provided copy and "Explore Visual Agents" → `/visual-agent`, placed next to the existing Scan & Win card block.
- **Mixed Reality** (`src/pages/SolutionsMixedReality.tsx`): add one concise "AI Visual Agents" reference card (same card style as the existing Scan & Win card there) → `/visual-agent`. No other changes to that page.
- **Footer** (`src/components/site/Footer.tsx`): add an "AI Visual Agents" link under Explore, alongside Scan & Win. No main-nav change to avoid header crowding.

### 5. Privacy Policy — `src/pages/PrivacyPolicy.tsx`

Add one new section with the suggested wording about third-party interactive experience tools (including Flam) and browser permission requests. Existing sections unchanged.

### What is NOT touched
Cloudflare Worker, contact form logic, Turnstile, Brevo, GitHub Actions workflow, env vars, domain/deploy settings, overall design. No Supabase, no database, no backend routes, no secrets. Script is not added sitewide, nor to `/contact` or `/scan-and-win`.

### QA before completion
Verify `/visual-agent` renders, the Flam script is present only there (absent on `/`, `/contact`, `/scan-and-win`), no duplicate script on navigation, existing routes and forms unaffected, and responsive layout on desktop and mobile.
