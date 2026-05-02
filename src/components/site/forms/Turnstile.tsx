// Cloudflare Turnstile placeholder.
// Reads site key from VITE_TURNSTILE_SITE_KEY at build time.
// Server-side: validate the token returned in `cf-turnstile-response`
// against https://challenges.cloudflare.com/turnstile/v0/siteverify
// using the private TURNSTILE_SECRET_KEY (do NOT expose in client).
export function TurnstilePlaceholder() {
  const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
  return (
    <div className="rounded-md border border-dashed border-border bg-muted/40 p-3 text-xs text-muted-foreground">
      <span className="font-medium text-foreground">Cloudflare Turnstile</span> — anti-spam check
      {siteKey ? " (configured)" : " placeholder. Set VITE_TURNSTILE_SITE_KEY to enable."}
    </div>
  );
}
