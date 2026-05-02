import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { SectionHeading } from "../components/site/SectionHeading";

export const Route = createFileRoute("/innovation-portfolio")({
  head: () => ({
    meta: [
      { title: "Innovation Portfolio | SmartSense Technologies" },
      { name: "description", content: "An ecosystem of active deployments, partner-enabled technologies and platforms under development for African markets." },
      { property: "og:title", content: "Innovation Portfolio | SmartSense" },
      { property: "og:description", content: "Active deployments, strategic focus areas and platforms in development." },
    ],
  }),
  component: PortfolioPage,
});

type Item = { name: string; description: string; users: string; impact: string; status: "Now in Market" | "Strategic Focus" | "In Development" };

const NOW: Item[] = [
  {
    name: "Flam-Powered Mixed Reality Experiences",
    description: "Immersive interactive experiences across print, OOH, TV, packaging, smart cards and events.",
    users: "Brands, agencies, media owners, public institutions",
    impact: "Measurable engagement, richer storytelling, multi-channel campaign performance.",
    status: "Now in Market",
  },
];

const FOCUS: Item[] = [
  {
    name: "Smart Finance & SME Intelligence Layer",
    description: "An emerging intelligence layer for SME visibility, embedded workflows and economic insight.",
    users: "Financial institutions, public sector, SME ecosystems",
    impact: "Better data for finance, policy and SME growth decisions.",
    status: "Strategic Focus",
  },
  {
    name: "SmartLearn AI",
    description: "Mobile-first AI learning and workforce readiness solutions for AI literacy and digital skills.",
    users: "Students, workforce, public training programs",
    impact: "Accessible upskilling and AI fluency at scale.",
    status: "In Development",
  },
  {
    name: "SmartAccess",
    description: "Smart verification, QR-based access, visitor management and institutional access workflows.",
    users: "Estates, schools, hospitals, ministries, facilities",
    impact: "Safer, more efficient and trackable access management.",
    status: "In Development",
  },
  {
    name: "SenseHub / Media & Content Intelligence",
    description: "AI-powered media, trend, content and discovery tools for smarter creation and distribution.",
    users: "Media owners, brands, creators, public communicators",
    impact: "Smarter content strategies and audience reach.",
    status: "Strategic Focus",
  },
];

function badgeClass(status: Item["status"]) {
  if (status === "Now in Market") return "bg-secondary/10 text-secondary";
  if (status === "Strategic Focus") return "bg-accent/15 text-foreground";
  return "bg-muted text-muted-foreground";
}

function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Innovation Portfolio" title="Our Innovation Portfolio" subtitle="SmartSense is building an ecosystem of active deployments, partner-enabled technologies and platforms under development for African markets." />

      <section className="mx-auto max-w-7xl container-px mt-20">
        <SectionHeading eyebrow="Now in market" title="Available today" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {NOW.map((i) => <ItemCard key={i.name} item={i} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-20">
        <SectionHeading eyebrow="Strategic focus / In development" title="What we are building next" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {FOCUS.map((i) => <ItemCard key={i.name} item={i} />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-16">
        <p className="rounded-lg border border-dashed border-border bg-surface p-5 text-sm text-muted-foreground">
          Our innovation portfolio includes active deployments, partner-enabled technologies and platforms currently under development. Some solutions may be introduced through pilots, partnerships or sector-specific deployments.
        </p>
      </section>

      <CTASection />
      <div className="pb-8" />
    </>
  );
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-xl font-semibold">{item.name}</h3>
        <span className={`shrink-0 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${badgeClass(item.status)}`}>{item.status}</span>
      </div>
      <p className="mt-3 text-muted-foreground">{item.description}</p>
      <dl className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
        <div>
          <dt className="font-semibold text-foreground">Target users</dt>
          <dd className="text-muted-foreground">{item.users}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Potential impact</dt>
          <dd className="text-muted-foreground">{item.impact}</dd>
        </div>
      </dl>
    </div>
  );
}
