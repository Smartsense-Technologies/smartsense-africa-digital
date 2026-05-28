import { Link } from "react-router-dom";
import { Sparkles, BrainCircuit, Building2, Globe2, ArrowRight, Smartphone, BarChart3, Handshake } from "lucide-react";
import { CTASection } from "../components/site/CTASection";
import { SectionHeading } from "../components/site/SectionHeading";
import { PageMeta } from "../lib/PageMeta";

const PILLARS = [
  { icon: Sparkles, title: "Immersive Engagement", body: "Mixed reality and interactive media that turn audiences into participants." },
  { icon: BrainCircuit, title: "AI-Powered Intelligence", body: "Decision-grade insight across content, media, SMEs and citizens." },
  { icon: Building2, title: "Digital Public Infrastructure", body: "Mobile-first tools for ministries, agencies and public institutions." },
  { icon: Globe2, title: "Africa-Ready Deployment", body: "Designed for local realities — networks, devices, languages and channels." },
];

const USE_CASES = [
  "Interactive public awareness campaigns",
  "Measurable OOH and print advertising",
  "TV-to-mobile second-screen experiences",
  "Product packaging activations",
  "Smart cards and identity-linked experiences",
  "SME intelligence and finance workflows",
  "Events and experiential marketing",
];

const WHY = [
  { icon: Globe2, title: "Local market understanding", body: "Built around African audiences, devices and behaviours." },
  { icon: Handshake, title: "Global technology partnerships", body: "We localize and deploy world-class platforms." },
  { icon: Building2, title: "Government & enterprise readiness", body: "Programs structured for compliance, scale and impact." },
  { icon: Smartphone, title: "Mobile-first & WhatsApp-first", body: "Designed where audiences and citizens actually are." },
  { icon: BarChart3, title: "Measurement & analytics", body: "Every interaction is observable and improvable." },
  { icon: ArrowRight, title: "Concept → pilot → scale", body: "We move from idea to deployment without losing momentum." },
];

export default function Home() {
  return (
    <>
      <PageMeta
        title="SmartSense Technologies | Intelligent Digital Experiences for Africa"
        description="SmartSense Technologies helps brands, institutions and governments deploy AI-powered, immersive and mobile-first digital solutions across Africa."
        ogTitle="SmartSense Technologies | Get Smarter"
        ogDescription="AI-powered, immersive and mobile-first digital solutions for African brands, institutions and governments."
      />
      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl container-px py-24 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">Get Smarter</p>
          <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] max-w-5xl">
            Intelligent Digital Experiences for <span className="text-cyan">Brands, Institutions</span> and <span className="text-cyan">Governments</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            SmartSense Technologies helps organizations deploy AI-powered, immersive and mobile-first solutions that transform communication, engagement, access and decision-making across Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:opacity-95">
              Request a Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/solutions" className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-20">
        <div className="grid gap-10 md:grid-cols-3 items-start">
          <SectionHeading eyebrow="Who we are" title="Africa's intelligent infrastructure & digital innovation partner" />
          <div className="md:col-span-2 text-base md:text-lg text-muted-foreground leading-relaxed">
            SmartSense helps African brands, institutions and governments turn communication, engagement and digital service delivery into intelligent, measurable and interactive experiences. We build, localize and scale practical AI and digital technologies for African markets — starting with Nigeria.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-20">
        <div className="overflow-hidden rounded-2xl border border-border bg-soft p-8 md:p-12 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary uppercase tracking-wider">Now in Market</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">Flam-Powered Mixed Reality Experiences</h2>
              <p className="mt-3 text-muted-foreground">
                Through strategic technology partnership, SmartSense delivers immersive mixed reality experiences that transform print, OOH, TV, packaging, smart cards and events into interactive, measurable channels.
              </p>
              <Link to="/solutions/mixed-reality" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary">
                Explore Mixed Reality <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative aspect-video rounded-xl bg-hero grid-pattern overflow-hidden shadow-elegant">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-cyan">Live demo</p>
                  <p className="font-display text-2xl font-semibold">Scan · Engage · Measure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Core Pillars" title="Four pillars of intelligent engagement" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="group rounded-xl border border-border bg-card p-6 hover:shadow-elegant transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Key use cases" title="Where SmartSense delivers impact" />
        <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u) => (
            <div key={u} className="rounded-lg border border-border bg-surface px-5 py-4 text-sm font-medium text-foreground hover:border-secondary transition">
              {u}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Why SmartSense" title="Built for African scale, designed for global standards" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((w) => (
            <div key={w.title} className="rounded-xl bg-surface p-6 border border-border">
              <w.icon className="h-5 w-5 text-secondary" />
              <h3 className="mt-3 font-display text-base font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to explore what intelligent engagement can do for your organization?"
        subtitle="Talk to our team about your communication, engagement or digital service delivery goals."
      />
      <div className="pb-8" />
    </>
  );
}