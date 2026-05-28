## Goal

Convert the SmartSense Technologies site from a TanStack Start (SSR / Cloudflare Workers) project into a fully static Vite + React SPA that builds to `dist/` and deploys to GitHub Pages at the custom root domain `smartsense.africa`.

All pages, routes, content, styling, and responsive design are preserved. No backend, no Supabase, no Turnstile secrets, no Brevo API — forms remain UI-only placeholders that already exist.

## Scope of changes

### 1. Dependencies (package.json)

Remove:
- `@tanstack/react-start`
- `@tanstack/router-plugin`
- `@cloudflare/vite-plugin`
- `@lovable.dev/vite-tanstack-config`

Keep `@tanstack/react-router` (used in client-side routing mode) and `@tanstack/react-query`.

Add:
- `react-router-dom` (simpler, well-known SPA router — chosen over keeping TanStack Router because the current setup is tightly coupled to the file-based generator and SSR plugin; swapping to react-router-dom is the cleanest static conversion).

Scripts: keep `dev`, `build`, `preview` mapped to plain `vite`.

### 2. Vite config (`vite.config.ts`)

Replace the `@lovable.dev/vite-tanstack-config` wrapper with a standard config:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: { outDir: "dist" },
});
```

### 3. Entry points

Create:
- `index.html` at project root with `<div id="root">` and `<script type="module" src="/src/main.tsx">`.
- `src/main.tsx` — mounts `<App />` inside `BrowserRouter`, imports `./styles.css`, and includes a small head-tag manager (react-helmet-async or a tiny custom effect) so each page can still set `<title>` / meta.
- `src/App.tsx` — defines `<Routes>` mapping every existing path to its page component, wrapped in shared `<Header />` / `<Footer />` layout.

### 4. Routes migration

Convert each file in `src/routes/` into a plain React component under `src/pages/`:

| Old file | New page | URL |
|---|---|---|
| `index.tsx` | `pages/Home.tsx` | `/` |
| `about.tsx` | `pages/About.tsx` | `/about` |
| `solutions.index.tsx` | `pages/Solutions.tsx` | `/solutions` |
| `solutions.mixed-reality.tsx` | `pages/SolutionsMixedReality.tsx` | `/solutions/mixed-reality` |
| `government.tsx` | `pages/Government.tsx` | `/government` |
| `innovation-portfolio.tsx` | `pages/InnovationPortfolio.tsx` | `/innovation-portfolio` |
| `industries.tsx` | `pages/Industries.tsx` | `/industries` |
| `contact.tsx` | `pages/Contact.tsx` | `/contact` |
| `privacy-policy.tsx` | `pages/PrivacyPolicy.tsx` | `/privacy-policy` |
| `thank-you.tsx` | `pages/ThankYou.tsx` | `/thank-you` |
| `__root.tsx` | `components/site/Layout.tsx` | wraps `<Outlet />` |

Add a catch-all `*` route rendering the existing 404 UI from `__root.tsx`.

For each page: strip `createFileRoute(...)` / `Route = ...` boilerplate, export the component as default, and convert `head: () => ({ meta: [...] })` into a small `<PageMeta title="..." description="..." />` helper that sets `document.title` and updates meta tags in `useEffect`.

### 5. Navigation primitives

Codemod across all components:
- `import { Link } from "@tanstack/react-router"` → `import { Link } from "react-router-dom"`
- `<Link to="/about">` stays the same (react-router-dom accepts identical `to` prop)
- `useNavigate` from `@tanstack/react-router` → from `react-router-dom`; replace `navigate({ to: "/thank-you" })` with `navigate("/thank-you")` in `useFormSubmit.ts`.

Files known to use these: `Header.tsx`, `Footer.tsx`, `CTASection.tsx`, `__root.tsx` (for 404), each route file, and `forms/useFormSubmit.ts`.

### 6. Delete server / SSR artifacts

Remove:
- `src/router.tsx`
- `src/routeTree.gen.ts`
- `src/routes/` directory (after migration)
- `wrangler.jsonc`
- Any `*.server.ts`, `*.functions.ts`, `start.ts`, server-entry references (none currently in tree beyond the standard template — verify and delete any that exist).

### 7. GitHub Pages SPA support

- Add `public/CNAME` containing `smartsense.africa` so Pages keeps the custom domain.
- Add `public/.nojekyll` (empty file) so asset paths starting with `_` are served.
- In the deploy workflow, copy `dist/index.html` → `dist/404.html` so deep-link refreshes work on Pages.

### 8. GitHub Actions workflow (`.github/workflows/deploy.yml`)

Replace the current placeholder workflow with one that publishes `dist/` to Pages:

```yaml
name: Deploy to GitHub Pages
on:
  push: { branches: [main] }
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 22, cache: npm }
      - run: npm ci
      - run: npm run build
      - run: cp dist/index.html dist/404.html
      - uses: actions/upload-pages-artifact@v3
        with: { path: dist }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### 9. Forms

Keep `BrandForm`, `DemoForm`, `GeneralForm`, `GovernmentForm`, `useFormSubmit.ts`, and `Turnstile.tsx` exactly as they are — they already simulate submission client-side and redirect to `/thank-you`. No backend wiring is added. The `TODO` for Brevo / Turnstile remains as a documented placeholder for future work.

### 10. Verification

After conversion:
- `npm run build` produces `dist/index.html` + `dist/assets/`.
- `npm run preview` serves the SPA; every listed route renders with correct content, header/footer, and updates `<title>`.
- 404 fallback renders the existing not-found UI for unknown URLs.

## Out of scope

- No new backend, database, auth, email, or Turnstile integration.
- No content, copy, or visual redesign — pure infrastructure conversion.
- Repository GitHub Pages settings (Settings → Pages → Source: GitHub Actions, custom domain `smartsense.africa`, enforce HTTPS) must be enabled once in the GitHub UI — this cannot be done from code.
