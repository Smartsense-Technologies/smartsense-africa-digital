import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { PageMeta } from "../../lib/PageMeta";
import NotFound from "../NotFound";
import { DEMOS } from "./demoConfig";
import { isPhone } from "./isPhone";

const REDIRECT_DELAY_MS = 1200;

export default function DemoRedirect() {
  const { slug = "" } = useParams();
  const demo = DEMOS[slug];
  // Detection runs once, before any redirect is scheduled. Default is the QR page.
  const [phone] = useState(() => isPhone());

  useEffect(() => {
    if (!demo || !phone) return;
    const t = window.setTimeout(() => window.location.replace(demo.destinationUrl), REDIRECT_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [demo, phone]);

  if (!demo) return <NotFound />;

  const launch = () => window.location.assign(demo.destinationUrl);

  return (
    <>
      <PageMeta
        title={`${demo.recipient} — Experience Preview | SmartSense Technologies`}
        description={
          demo.metaDescription ??
          `An experience preview prepared for the ${demo.recipient} by SmartSense Technologies in collaboration with MSR.`
        }
        robots="noindex, nofollow"
      />
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {phone ? (
          <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-3xl flex-col justify-center container-px py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Experience Preview</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              {demo.recipient}
              <br />
              {demo.experience}
            </h1>
            <p className="mt-4 text-base font-medium text-white/90">{demo.supporting}</p>
            <div className="mt-8 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3" role="status" aria-live="polite">
                <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white/25 border-t-cyan" />
                <span className="text-sm">Opening your interactive experience…</span>
              </div>
              <p className="mt-5 text-sm text-white/70">Having trouble opening the experience?</p>
              <button
                type="button"
                onClick={launch}
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Launch Experience
              </button>
            </div>
            <p className="mt-5 text-xs text-white/50">
              Your browser may request camera permission to activate the interactive experience.
            </p>
          </div>
        ) : (
          <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col items-center justify-center container-px py-12 text-center md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Experience Preview</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {demo.recipient}
              <br />
              {demo.experience}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{demo.desktopIntro}</p>
            <p className="mt-8 text-lg font-semibold md:text-xl">
              Scan with your mobile phone to launch the experience
            </p>
            <div className="mt-6 rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-white/20">
              <QRCodeSVG
                value={demo.publicUrl}
                size={264}
                level="M"
                marginSize={2}
                bgColor="#ffffff"
                fgColor="#0b1b33"
                title="QR code to open the experience on your phone"
                className="h-[220px] w-[220px] sm:h-[264px] sm:w-[264px]"
              />
            </div>
            <p className="mt-5 text-sm text-white/70">Open your phone camera and scan the QR code to continue.</p>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              {demo.supporting}
            </p>
          </div>
        )}
      </section>
    </>
  );
}
