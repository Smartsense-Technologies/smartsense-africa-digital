# Limited Brand & Contact Update

Scope-locked changes only. No changes to forms, Turnstile, Worker endpoint, Brevo, secrets, Supabase, GitHub Actions, env vars, or deployment settings. The Mixed Reality/Flam page is untouched.

## Task 1 — Header logo (atomic icon + text)
- Add the uploaded atomic icon as a CDN asset (`lovable-assets`) so it isn't committed as a binary.
- In `src/components/site/Header.tsx`, replace the current "S" gradient square mark with the atomic icon image, keeping the text "SmartSense Technologies" beside it.
- Constrain icon size (~h-8/h-9) so the header stays compact on desktop and mobile.
- Keep existing colours, layout, sticky behavior, mobile menu, and the "Request a Demo" button as-is. The icon is already brand-blue and blends with the current palette, so no palette changes.

## Task 2 — Favicon
- Copy the atomic icon into `public/` (e.g. `public/favicon.png`).
- Add `<link rel="icon" type="image/png" href="/favicon.png" />` (plus apple-touch-icon) to `index.html`. No other head changes.

## Task 3 — Footer mark
- The footer currently uses the small "S" gradient square + text. Replace that square with the atomic icon + "SmartSense Technologies" text for consistency with the header. Footer stays on the existing dark primary background, unchanged otherwise.

## Task 4 — Address & contact details
Use exactly: **20, Theophilus Oji Street, Lekki Phase One, Lagos, Nigeria.** and keep email **hello@smartsense.africa**.
The address/email don't currently appear, so they will be added where appropriate:
- **Footer** (`Footer.tsx`): add a small contact block with the address and a `mailto:hello@smartsense.africa` link.
- **Contact page** (`Contact.tsx`): add a compact contact-details line/block (address + email) alongside the existing tabbed forms. Forms untouched.
- **Privacy Policy** (`PrivacyPolicy.tsx`): update the "Contact" section to reference `hello@smartsense.africa` and include the physical address (replacing the `privacy@smartsense.africa (placeholder)` text).

## Task 5 — QA
- Verify build succeeds and every route renders.
- Check header on desktop and mobile viewports (icon + text compact, menu works).
- Confirm favicon resolves to the atomic icon.
- Confirm the address/email appear consistently in footer, Contact, and Privacy.
- Confirm no "Smartcare" references exist (search shows none today; re-verify).
- Confirm forms still render Turnstile and submission logic is unchanged.

## Technical notes
- Files touched: `index.html`, `src/components/site/Header.tsx`, `src/components/site/Footer.tsx`, `src/pages/Contact.tsx`, `src/pages/PrivacyPolicy.tsx`, plus new asset pointer + `public/favicon.png`.
- No edits to any file under `src/components/site/forms/`, `vite.config.ts`, `.github/workflows/`, `public/CNAME`, or `public/.nojekyll`.
- After implementation, changes sync to the connected GitHub repo for the existing Actions deploy.
