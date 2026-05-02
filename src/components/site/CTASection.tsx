import { Link } from "@tanstack/react-router";

export function CTASection({
  title = "Ready to explore intelligent engagement?",
  subtitle = "Let's discuss how SmartSense can help your organization deploy measurable, immersive and AI-powered experiences.",
  primaryLabel = "Request a Demo",
  primaryTo = "/contact",
  secondaryLabel = "Discuss Partnership",
  secondaryTo = "/contact",
}: {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl container-px mt-24">
      <div className="relative overflow-hidden rounded-2xl bg-hero p-10 md:p-14 text-white shadow-elegant">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="mt-3 text-white/80">{subtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to={primaryTo as any} className="inline-flex items-center rounded-md bg-accent-gradient px-5 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:opacity-95">
              {primaryLabel}
            </Link>
            <Link to={secondaryTo as any} className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
