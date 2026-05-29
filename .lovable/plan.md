## Goal

Connect the four Contact page forms (Request a Demo, Government Partnership, Brand / Agency Campaign, General Contact) to the secure Cloudflare Worker, add a real Cloudflare Turnstile widget, and standardize the submit payload — while keeping the site fully static and secret-free.

Worker endpoint: `https://smartsense-form-handler.smartsensetech.workers.dev/submit`

## 1. Real Turnstile widget (`src/components/site/forms/Turnstile.tsx`)

Replace the current placeholder with a working widget:
- Inject the Cloudflare Turnstile script (`https://challenges.cloudflare.com/turnstile/v0/api.js`) once.
- Render the widget explicitly using `VITE_TURNSTILE_SITE_KEY`.
- Expose the token to the parent via an `onToken(token)` callback, and a `reset()` method via `forwardRef`/`useImperativeHandle` so forms can reload the widget after each submission attempt.
- If `VITE_TURNSTILE_SITE_KEY` is unset, keep a visible dev placeholder so local builds don't break.
- No secret key anywhere.

## 2. Shared submit hook (`src/components/site/forms/useFormSubmit.ts`)

Rework into a generic JSON POST helper:
- `submit(payload)` does `fetch(WORKER_URL, { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) })`.
- On `success: true` → set `status = "success"` (no localStorage).
- On failure/non-2xx/`success:false` → set `status = "error"` with a friendly message.
- Expose `status` (`idle | loading | success | error`), `error`, and a `reset()`.
- Remove the `/thank-you` navigation in favor of an inline success state (form is reset and a success message shown). Keep `ThankYou.tsx` route untouched.

## 3. Standard payload shape

Every form builds this exact JSON body:

```text
{
  formType, firstName, lastName, email, phone,
  organization, role, sector, message,
  marketingOptIn, sourcePage, turnstileToken
}
```

- `sourcePage`: `"https://smartsense.africa/contact"`
- `formType` per form: `demo_request`, `government_partnership`, `brand_agency_campaign`, `general_contact`.
- Form-specific extras that don't map to the schema (e.g. Demo Interest, Area of Interest, campaign channels/type, enquiry type, meeting format) get appended into the `message` field as readable labelled lines, so no information is lost.

## 4. Shared form fields (`src/components/site/forms/FormFields.tsx`)

- Add a reusable `ConsentCheckbox` block with the required consent text plus a `<Link to="/privacy-policy">Privacy Policy</Link>` next to it.
- Add a `MarketingOptInCheckbox` with the marketing text.
- Add a `SuccessMessage` and shared validation helpers (required-field check + email regex).
- Keep existing `Field`, `TextInput`, `TextArea`, `Select`.

## 5. Update each form

For all four forms (`DemoForm`, `GovernmentForm`, `BrandForm`, `GeneralForm`):
- Replace single "Full Name" / "Contact Person" with **First Name** + **Last Name** (both required).
- Required: firstName, lastName, email, organization (optional only in General Contact), message, consent checkbox, Turnstile token.
- Optional: phone, role, sector, marketingOptIn.
- Add the Turnstile widget (with ref) and the marketing opt-in checkbox.
- Client-side validation before submit: required fields filled + valid email; if Turnstile token missing, block and show **"Please complete the verification before submitting."**
- Disable submit + show loading label while `status === "loading"`.
- On success: show success message and reset the form fields and Turnstile widget.
- On error: show friendly error text; reset/reload Turnstile so the user can retry.

Per-form field mapping to the schema:
- **Demo** → organization (required), role, sector; Demo Interest folded into message.
- **Government** → organization = institution (required), role, sector = Area of Interest; meeting format folded into message.
- **Brand/Agency** → organization = brand/agency (required), role = contact role; campaign type, channels, timeline, budget, audience folded into message.
- **General** → organization optional; enquiry type folded into message.

## 6. Environment / security

- Use `VITE_TURNSTILE_SITE_KEY` (frontend-safe) only.
- No Supabase, no databases, no backend routes, no secret keys, no Brevo key, no Turnstile secret — nothing secret added to the repo or code.
- Site stays static / frontend-only.

## 7. Deployment

Changes sync to the connected GitHub repository automatically, triggering the existing GitHub Actions Pages workflow to rebuild and deploy `dist` to `smartsense.africa`. You'll need to ensure `VITE_TURNSTILE_SITE_KEY` is available to the GitHub Actions build (as a repo variable/secret used at build time) for the live widget to render with your real site key.

## Out of scope

No content redesign, no file uploads, no direct Brevo calls, no new backend. `ThankYou` page left as-is (forms now use inline success instead of redirecting).
