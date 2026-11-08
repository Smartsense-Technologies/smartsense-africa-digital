import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageMeta } from "../../lib/PageMeta";
import NotFound from "../NotFound";
import { DEMOS } from "./demoConfig";

const REDIRECT_DELAY_MS = 1800;

export default function DemoRedirect() {
  const { slug = "" } = useParams();
  const demo = DEMOS[slug];

  useEffect(() => {
    if (!demo) return;
    const t = window.setTimeout(() => window.location.replace(demo.destinationUrl), REDIRECT_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [demo]);

  if (!demo) return <NotFound />;

  const launch = () => window.location.assign(demo.destinationUrl);

  return (
    <>
      <PageMeta
        title={`${demo.recipient} — Experience Preview | SmartSense Technologies`}
        description={`An experience preview prepared for the ${demo.recipient} by SmartSense Technologies in collaboration with MSR.`}
        robots="noindex, nofollow"
      />
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-3xl flex-col justify-center container-px py-10 md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Experience Preview</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {demo.recipient}
            <br />
            {demo.experience}
          </h1>
          <p className="mt-4 text-base font-medium text-white/90 md:text-lg">{demo.supporting}</p>
          <p className="mt-3 text-sm text-white/70 md:text-base">{demo.explanation}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
            SmartSense Technologies + MSR
          </p>

          <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm md:p-6">
            <div className="flex items-center gap-3" role="status" aria-live="polite">
              <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white/25 border-t-cyan" />
              <span className="text-sm md:text-base">Opening your interactive experience…</span>
            </div>
            <p className="mt-5 text-sm text-white/70">Having trouble opening the experience?</p>
            <button
              type="button"
              onClick={launch}
              className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 sm:w-auto"
            >
              Launch Experience
            </button>
          </div>

          <p className="mt-5 text-xs text-white/50">
            For the best experience, open this link on a mobile device. Your browser may request camera permission to activate the interactive experience.
          </p>
        </div>
      </section>
    </>
  );
}
