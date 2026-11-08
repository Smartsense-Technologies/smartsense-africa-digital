## Enugu State Airboard demo page (unlisted)

Add one private demo page at `/demo/enugu-state-airboard`. It uses the existing SmartSense look, names only SmartSense Technologies and MSR as presenters, and opens the Airboard experience after a short pause. No other page, form or deployment setting changes.

### 1. Reusable demo config — `src/pages/demos/demoConfig.ts`
- One clearly labelled entry for `enugu-state-airboard`: recipient ("Enugu State Government"), experience name ("Airboard Experience"), short explanation, and `destinationUrl: "https://c.flamapp.com/e?o=b5e5y6"`.
- To change where the link goes later, edit only this one value. The public SmartSense link stays the same.
- Future pages like `/demo/mtn-airboard` only need a new entry here. No others are added now.

### 2. Page — `src/pages/demos/DemoRedirect.tsx`
- Reads the client and experience from the address and looks it up in the config. If there is no match, it shows the existing Not Found page.
- `PageMeta` with `robots="noindex, nofollow"` and a neutral title ("Enugu State Government — Experience Preview | SmartSense Technologies").
- Compact, full-height navy hero layout (existing `bg-hero`, grid pattern, cyan eyebrow), sized so everything fits on a phone screen without scrolling:
  - Eyebrow: EXPERIENCE PREVIEW
  - Heading: Enugu State Government / Airboard Experience
  - Supporting line and short explanation (exact copy from the request)
  - Small "SmartSense Technologies + MSR" presenter line
  - Status: small spinner + "Opening your interactive experience…"
  - "Having trouble opening the experience?" + **Launch Experience** button
  - Small, muted mobile/camera note
- After 1.8 seconds it calls `window.location.replace(destinationUrl)`. The timer is cleared if the visitor leaves the page first. The button sends the visitor to the same place.
- The destination address and provider name are never shown on screen, and there is no "powered by" text.

### 3. Routing — `src/App.tsx`
- Add one route: `/demo/:slug` → `DemoRedirect`. Existing routes stay as they are.

### Not touched
Header, footer, homepage, product pages, Contact, forms, Turnstile, Worker, Brevo, environment variables, GitHub Actions, CNAME/DNS. No sitemap entry and no links to the page anywhere. No new dependencies.

### Checks before completion
- In the preview, open `/demo/enugu-state-airboard` at desktop and phone sizes and confirm the content and the noindex tag.
- Confirm the automatic redirect and the button both go to the destination.
- Search the code to confirm nothing links to `/demo/`.
- Confirm the home page and `/contact` still work.
