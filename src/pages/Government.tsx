import { Megaphone, Users2, ShieldCheck, BarChart3, GraduationCap, Smartphone, BrainCircuit, CreditCard } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { SectionHeading } from "../components/site/SectionHeading";
import { PageMeta } from "../lib/PageMeta";

const HELP = [
  { i: Megaphone, t: "Interactive public communication" },
  { i: Users2, t: "Citizen engagement tools" },
  { i: Megaphone, t: "Smart awareness campaigns" },
  { i: GraduationCap, t: "Digital service education" },
  { i: CreditCard, t: "Smart cards & identity-linked experiences" },
  { i: BarChart3, t: "SME intelligence & economic visibility" },
  { i: BrainCircuit, t: "AI-enabled public service support" },
  { i: Smartphone, t: "Mobile-first & WhatsApp-first engagement" },
];

const USE_CASES = [
  "Public awareness campaigns",
  "Taxpayer / SME education",
  "Youth and workforce readiness",
  "Government service explainers",
  "Event and townhall engagement",
  "Digital ID / smart card experiences",
  "Public program measurement",
  "SME data and intelligence layer",
];

const MODELS = [
  { t: "Pilot programs", b: "Time-bound deployments to validate impact." },
  { t: "Public-private partnerships", b: "Co-designed initiatives with shared outcomes." },
  { t: "Technology localization", b: "Adapting global platforms to local context." },
  { t: "Managed deployment", b: "End-to-end delivery and operations support." },
  { t: "Strategic innovation partnerships", b: "Long-term collaboration on transformation roadmaps." },
  { t: "Agency-specific transformation", b: "Targeted programs for ministries and agencies." },
];

export default function Government() {
  return (
    <>
      <PageMeta
        title="Government & Public Sector | SmartSense Technologies"
        description="SmartSense partners with public institutions to design, pilot and scale practical digital solutions for communication, citizen engagement and economic intelligence."
        ogTitle="Government & Public Sector | SmartSense"
        ogDescription="Digital innovation for public communication, citizen engagement and economic intelligence."
      />
      <PageHero eyebrow="Government & Public Sector" title="Digital Innovation for Public Communication, Citizen Engagement and Economic Intelligence" subtitle="SmartSense works with public institutions to design, pilot and scale practical digital solutions that improve communication, access, visibility and service delivery." />

      <section className="mx-auto max-w-7xl container-px mt-20">
        <SectionHeading eyebrow="The challenge" title="Public institutions need better tools to engage" subtitle="Governments need real-time communication, citizen education, program visibility, public awareness and digital service interaction — all at scale and on mobile-first channels." />
      </section>

      <section className="mx-auto max-w-7xl container-px mt-20">
        <SectionHeading eyebrow="How we help" title="Practical capabilities for public communication and engagement" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HELP.map((h) => (
            <div key={h.t} className="rounded-xl border border-border bg-card p-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><h.i className="h-5 w-5" /></div>
              <p className="mt-4 font-medium">{h.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Priority use cases" title="Where we focus" />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((u) => (
            <div key={u} className="rounded-lg border border-border bg-surface px-5 py-4 text-sm font-medium text-foreground">{u}</div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Engagement models" title="Partnership pathways" subtitle="We engage public stakeholders through appropriate, transparent structures." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {MODELS.map((m) => (
            <div key={m.t} className="rounded-xl border border-border bg-card p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10 text-secondary"><ShieldCheck className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold">{m.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-16">
        <p className="rounded-lg border border-dashed border-border bg-surface p-5 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Note:</span> SmartSense works with public and private stakeholders through appropriate engagement, approval and partnership structures.
        </p>
      </section>

      <CTASection title="Discuss Government Partnership" subtitle="Let's explore how SmartSense can support your institution's digital transformation goals." primaryLabel="Discuss Partnership" secondaryLabel="Request a Demo" />
      <div className="pb-8" />
    </>
  );
}