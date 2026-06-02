## Problem

The header and footer atomic icon works in the Lovable preview but is broken on the live GitHub Pages site. Both `Header.tsx` and `Footer.tsx` import `src/assets/atomic-icon.png.asset.json` and use its `url` field, which resolves to `/__l5e/assets-v1/...` — a Lovable preview-only internal URL. That path does not exist in the GitHub Pages build output, so the image 404s and shows a broken icon.

The favicon already works because it references a real static file at `public/favicon.png` (which is the same atomic icon image).

## Fix (limited scope)

Serve the atomic icon as a normal static file in `public/` with a web-safe filename, and point the header/footer at that path instead of the preview-only asset URL.

### Step 1 — Add static icon file
- Create `public/smartsense-atomic-icon.png` from the existing atomic icon (copy of the current `public/favicon.png`, which is the atomic icon). This guarantees it ships in the `dist` build output deployed by GitHub Actions.

### Step 2 — Update Header
In `src/components/site/Header.tsx`:
- Remove the `import atomicIcon from "../../assets/atomic-icon.png.asset.json";` line.
- Change the `<img src={atomicIcon.url} ...>` to `<img src="/smartsense-atomic-icon.png" ...>`.
- Keep the existing layout, classes (`h-9 w-9 object-contain`), alt text, and the "SmartSense Technologies" text exactly as-is.

### Step 3 — Update Footer
In `src/components/site/Footer.tsx`:
- Remove the same `.asset.json` import.
- Change the `<img src={atomicIcon.url} ...>` to `<img src="/smartsense-atomic-icon.png" ...>`.
- Keep everything else unchanged.

### Step 4 — Clean up (optional)
- The now-unused `src/assets/atomic-icon.png.asset.json` can be left in place or removed; it will no longer be referenced. Favicon config in `index.html` stays untouched (still uses the atomic icon).

## QA
- Build and confirm `dist/smartsense-atomic-icon.png` exists in the output.
- Verify header icon + "SmartSense Technologies" renders on desktop and mobile.
- Verify footer icon renders.
- Confirm no remaining references to `__l5e` or `atomic-icon.png.asset.json` in `src`.
- Favicon still resolves to the atomic icon.

## Out of scope (untouched)
Design, colour scheme, Flam/Mixed Reality page, contact forms, Turnstile, Brevo, Cloudflare Worker, GitHub Actions workflow, env vars, domain, deployment config. No Supabase/backend/secrets added.

After changes, push to the connected GitHub repo so the existing GitHub Actions workflow redeploys.
