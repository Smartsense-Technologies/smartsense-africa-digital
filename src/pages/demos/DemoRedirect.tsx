import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { PageMeta } from "../../lib/PageMeta";
import NotFound from "../NotFound";
import { DEMOS, type DemoConfig } from "./demoConfig";
import { isPhone } from "./isPhone";

const REDIRECT_DELAY_MS = 1200;

export default function DemoRedirect() {
  const { slug = "" } = useParams();
  const demo = DEMOS[slug];
  // Detection runs once, before any redirect is scheduled. Default is the QR page.
  const [phone] = useState(() => isPhone());

  useEffect(() => {
    if (!demo || !phone || demo.maintenanceMode) return;
    const t = window.setTimeout(() => window.location.replace(demo.destinationUrl), demo.redirectDelayMs ?? REDIRECT_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [demo, phone]);

  if (!demo) return <NotFound />;

  const attributionBlock = demo.attribution ? (
    <div className="mt-5">
      <p className="text-lg font-semibold leading-tight text-white sm:text-xl">{demo.attribution.primary}</p>
      <p className="mt-1 text-base font-semibold leading-tight text-white/90 sm:text-lg">{demo.attribution.secondary}</p>
    </div>
  ) : null;
  const portraitImg = (cls: string) =>
    demo.portrait ? (
      <img
        src={demo.portrait.src}
        alt={demo.portrait.alt}
        width={600}
        height={600}
        className={`aspect-square rounded-2xl object-cover object-top shadow-xl ring-1 ring-white/20 ${cls}`}
      />
    ) : null;
  const launch = () => {
    if (demo.maintenanceMode) return;
    window.location.assign(demo.destinationUrl);
  };
  const maintenanceNotice = (cls: string) => (
    <div className={`rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm ${cls}`} role="status">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
        <p className="text-lg font-semibold leading-tight">Experience Temporarily Unavailable</p>
      </div>
      <p className="mt-3 text-sm text-white/85">We’re carrying out routine maintenance on this interactive experience.</p>
      <p className="mt-1 text-sm text-white/70">The experience will be back shortly.</p>
    </div>
  );

  return (
    <>
      <PageMeta
        title={demo.pageTitle ?? `${demo.recipient} — Experience Preview | SmartSense Technologies`}
        description={
          demo.metaDescription ??
          `An experience preview prepared for the ${demo.recipient} by SmartSense Technologies in collaboration with MSR.`
        }
        robots="noindex, nofollow"
      />
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {demo.disclaimer && demo.avatar ? (
          <DisclaimerDemo demo={demo} phone={phone} onLaunch={launch} />
        ) : phone ? (
          <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-3xl flex-col justify-center container-px py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{demo.eyebrow ?? "Experience Preview"}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
              {demo.heading ?? (<>{demo.recipient}<br />{demo.experience}</>)}
            </h1>
            {demo.attribution ? (
              <div className="mt-5 flex items-center gap-4">
                {portraitImg("w-28 shrink-0 sm:w-32")}
                <div>
                  <p className="text-base font-semibold leading-tight text-white sm:text-lg">{demo.attribution.primary}</p>
                  <p className="mt-1 text-sm font-semibold leading-tight text-white/90 sm:text-base">{demo.attribution.secondary}</p>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-base font-medium text-white/90">{demo.supporting}</p>
            )}
            {demo.maintenanceMode ? maintenanceNotice("mt-5 text-left") : (
            <>
            <div className={demo.attribution ? "mt-5 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm" : "mt-8 rounded-xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm"}>
              <div className="flex items-center gap-3" role="status" aria-live="polite">
                <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white/25 border-t-cyan" />
                <span className="text-sm">{demo.launchingText ?? "Opening your interactive experience…"}</span>
              </div>
              <p className="mt-5 text-sm text-white/70">Having trouble opening the experience?</p>
              <button
                type="button"
                onClick={launch}
                className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                {demo.launchLabel ?? "Launch Experience"}
              </button>
            </div>
            <p className="mt-5 text-xs text-white/50">
              Your browser may request camera permission to activate the interactive experience.
            </p>
            </>
            )}
          </div>
        ) : demo.attribution ? (
          <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 container-px py-10 md:grid-cols-2 md:gap-14">
            <div className="text-center md:text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{demo.eyebrow ?? "Experience Preview"}</p>
              <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                {demo.recipient} {demo.experience}
              </h1>
              {attributionBlock}
              {portraitImg("mx-auto mt-5 w-full max-w-[320px] md:mx-0")}
            </div>
            <div className="flex flex-col items-center text-center">
              {demo.maintenanceMode && maintenanceNotice("mb-8 w-full max-w-md text-left")}
              <p className="text-lg font-semibold md:text-xl">Scan with your mobile phone to launch the experience</p>
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
            </div>
          </div>
        ) : (
          <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-5xl flex-col items-center justify-center container-px py-12 text-center md:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{demo.eyebrow ?? "Experience Preview"}</p>
            <h1 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {demo.heading ?? (<>{demo.recipient}<br />{demo.experience}</>)}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{demo.desktopIntro}</p>
            <p className="mt-8 text-lg font-semibold md:text-xl">
              {demo.scanPrompt ?? "Scan with your mobile phone to launch the experience"}
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
              {demo.tagline ?? demo.supporting}
            </p>
          </div>
        )}
      </section>
    </>
  );
}

function DisclaimerDemo({ demo, phone, onLaunch }: { demo: DemoConfig; phone: boolean; onLaunch: () => void }) {
  const avatar = demo.avatar!;
  const disclaimer = (
    <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-left backdrop-blur-sm" role="note">
      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-cyan">Important disclaimer</p>
      {demo.disclaimer!.map((line) => (
        <p key={line} className="mt-2 text-sm leading-relaxed text-white/85">{line}</p>
      ))}
    </div>
  );
  const heading = (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{demo.eyebrow}</p>
      <h1 className="mt-2 text-2xl font-bold leading-tight sm:text-4xl md:text-5xl">{demo.heading}</h1>
    </>
  );
  if (phone) {
    return (
      <div className="relative mx-auto flex max-w-xl flex-col container-px py-5">
        {heading}
        <div className="mt-4 flex items-start gap-4">
          <img
            src={avatar.src}
            alt={avatar.alt}
            width={696}
            height={957}
            className="w-32 shrink-0 rounded-xl object-contain shadow-xl ring-1 ring-white/20 sm:w-40"
          />
          <p className="text-sm font-medium leading-relaxed text-white/90">{demo.supporting}</p>
        </div>
        <div className="mt-4">{disclaimer}</div>
        <div className="mt-4 rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
          <div className="flex items-center gap-3" role="status" aria-live="polite">
            <span className="h-5 w-5 shrink-0 animate-spin rounded-full border-2 border-white/25 border-t-cyan" />
            <span className="text-sm">{demo.launchingText}</span>
          </div>
          <button
            type="button"
            onClick={onLaunch}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            {demo.launchLabel}
          </button>
        </div>
        <p className="mt-3 text-xs text-white/50">Your browser may request camera permission to activate the interactive experience.</p>
      </div>
    );
  }
  return (
    <div className="relative mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-10 container-px py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14">
      <img
        src={avatar.src}
        alt={avatar.alt}
        width={696}
        height={957}
        className="mx-auto w-full max-w-[380px] rounded-2xl object-contain shadow-2xl ring-1 ring-white/20"
      />
      <div>
        {heading}
        <p className="mt-4 text-base text-white/85 md:text-lg">{demo.supporting}</p>
        <div className="mt-6">{disclaimer}</div>
        <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
          <div className="shrink-0 rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-white/20">
            <QRCodeSVG
              value={demo.publicUrl}
              size={220}
              level="M"
              marginSize={2}
              bgColor="#ffffff"
              fgColor="#0b1b33"
              title="QR code to open the demo experience on your phone"
              className="h-[200px] w-[200px] sm:h-[220px] sm:w-[220px]"
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold">{demo.scanPrompt}</p>
            <p className="mt-2 text-sm text-white/70">Open your phone camera and scan the QR code to continue.</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">SmartSense Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
