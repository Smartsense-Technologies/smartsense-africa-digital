import { createFileRoute, Link } from "@tanstack/react-router";
import { QrCode, Smartphone, Sparkles, Send, BarChart3, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/solutions/mixed-reality")({
  head: () => ({
    meta: [
      { title: "Mixed Reality Experiences | SmartSense Technologies" },
      { name: "description", content: "Flam-powered mixed reality experiences that turn print, OOH, TV, packaging, smart cards and events into interactive, measurable channels." },
      { property: "og:title", content: "Mixed Reality Experiences | SmartSense" },
      { property: "og:description", content: "Turn static media into interactive, measurable experiences." },
    ],
  }),
  component: MixedRealityPage,
});

const STEPS = [
  { icon: QrCode, t: "Scan or tap", b: "Audience scans a QR code, taps a link or opens a camera experience." },
  { icon: Smartphone, t: "Open instantly", b: "Web-based — no app download required." },
  { icon: Sparkles, t: "Engage immersively", b: "Interact with 3D, video, animation and product content." },
  { icon: Send, t: "Take action", b: "Visit, register, download, enquire, share." },
  { icon: BarChart3, t: "Measure", b: "Track every scan, engagement and conversion." },
];

const USE_CASES = [
  "TV second-screen engagement",
  "Outdoor advertising / billboards",
  "Newspapers, magazines, brochures and flyers",
  "Product packaging",
  "Retail and point-of-sale activations",
  "Event stands and branded experiences",
  "Smart cards: ID, loyalty, membership, fan, government",
  "Government & public awareness campaigns",
  "Celebrity / leader / photo experiences",
  "Product visualization and explainers",
];

const BENEFITS = [
  "Makes offline media measurable",
  "Increases audience engagement",
  "Supports lead generation",
  "Drives app and website traffic",
  "Enables richer storytelling",
  "Supports campaign analytics",
  "Works across multiple channels",
  "Creates memorable brand experiences",
];

const SECTORS = ["Telecoms", "Government", "Retail / FMCG", "Financial Services", "Media & Advertising", "Events & Entertainment", "Education", "Institutions"];

const DEMOS = [
  "TV-to-Mobile Experience",
  "Interactive Billboard",
  "Smart Card Experience",
  "Product Packaging Experience",
  "Public Awareness Campaign",
  "Event Activation",
];

function MixedRealityPage() {
  return (
    <>
      <PageHero eyebrow="Flagship Solution · Now in Market" title="Turn Static Media Into Interactive, Measurable Experiences" subtitle="Through Flam-powered mixed reality technology, SmartSense helps brands, agencies, media owners and public institutions transform print, OOH, TV, packaging, smart cards, events and digital channels into immersive audience experiences." />

      <section className="mx-auto max-w-7xl container-px mt-20">
        <SectionHeading eyebrow="What it is" title="Mixed Reality Publishing, simply explained" subtitle="Mixed reality publishing allows people to access interactive digital experiences from physical or digital media using a QR code, web link or mobile camera interaction — no app downloads required." />
      </section>

      <section className="mx-auto max-w-7xl container-px mt-16">
        <SectionHeading eyebrow="How it works" title="Five simple steps" />
        <div className="mt-10 grid gap-5 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <div key={s.t} className="rounded-xl border border-border bg-card p-5">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><s.icon className="h-5 w-5" /></div>
                <span className="font-display text-2xl font-bold text-muted-foreground/40">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24 grid lg:grid-cols-2 gap-10">
        <div>
          <SectionHeading eyebrow="Use cases" title="What you can build" />
          <ul className="mt-8 space-y-3">
            {USE_CASES.map((u) => (
              <li key={u} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
                <span className="text-foreground">{u}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading eyebrow="Benefits" title="Why brands and institutions adopt it" />
          <ul className="mt-8 space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
                <span className="text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Sector fit" title="Where it works best" />
        <div className="mt-8 flex flex-wrap gap-2">
          {SECTORS.map((s) => (
            <span key={s} className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground">{s}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Demo gallery" title="Experiences we deliver" subtitle="Reach out for live demonstrations of any of the experiences below." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {DEMOS.map((d) => (
            <div key={d} className="group relative aspect-video overflow-hidden rounded-xl bg-hero grid-pattern shadow-elegant">
              <div className="absolute inset-0 flex items-end p-5">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-cyan">Demo</p>
                  <p className="font-display text-lg font-semibold text-white">{d}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] uppercase tracking-wider text-white">Preview</div>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Request a Mixed Reality Demo" subtitle="See how Flam-powered experiences can transform your next campaign or public communication." primaryLabel="Request a Demo" />
      <div className="pb-8" />
    </>
  );
}
