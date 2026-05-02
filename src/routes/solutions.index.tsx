import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Building2, BarChart3, GraduationCap, ShieldCheck, Radio } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/solutions/")({
  head: () => ({
    meta: [
      { title: "Solutions | SmartSense Technologies" },
      { name: "description", content: "Explore SmartSense's portfolio of intelligent solutions: mixed reality, citizen engagement, SME intelligence, AI learning, smart access and media intelligence." },
      { property: "og:title", content: "Solutions | SmartSense Technologies" },
      { property: "og:description", content: "Intelligent, immersive and mobile-first solutions for brands, institutions and governments." },
    ],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  {
    icon: Sparkles,
    title: "Mixed Reality Experiences",
    body: "Flam-powered immersive experiences that turn static media, packaging, cards, billboards, events and digital links into interactive, measurable brand and public communication channels.",
    href: "/solutions/mixed-reality",
    status: "Now in Market",
  },
  {
    icon: Building2,
    title: "Government & Citizen Engagement",
    body: "Digital communication, public awareness, smart engagement and citizen-facing experiences for ministries, agencies, regulators and public institutions.",
    href: "/government",
    status: "Available",
  },
  {
    icon: BarChart3,
    title: "Smart Finance & SME Intelligence",
    body: "An emerging intelligence layer designed to support SME visibility, embedded business workflows, economic insight and data-driven decision-making.",
    href: "/innovation-portfolio",
    status: "Strategic Focus",
  },
  {
    icon: GraduationCap,
    title: "SmartLearn AI",
    body: "Mobile-first AI learning and workforce readiness solutions designed to support AI literacy, digital skills and accessible education.",
    href: "/innovation-portfolio",
    status: "In Development",
  },
  {
    icon: ShieldCheck,
    title: "SmartAccess",
    body: "Smart verification, QR-based access, visitor management and institutional access workflows for estates, schools, hospitals, ministries and facilities.",
    href: "/innovation-portfolio",
    status: "In Development",
  },
  {
    icon: Radio,
    title: "Media & Content Intelligence",
    body: "AI-powered media, trend, content and discovery tools that support smarter content creation, distribution and engagement.",
    href: "/innovation-portfolio",
    status: "Strategic Focus",
  },
];

function SolutionsPage() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="An intelligent solution stack for African organizations" subtitle="From flagship mixed reality experiences to emerging AI-powered platforms — explore the SmartSense solution portfolio." />
      <section className="mx-auto max-w-7xl container-px mt-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="group flex flex-col rounded-2xl border border-border bg-card p-7 hover:shadow-elegant hover:-translate-y-0.5 transition">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient text-accent-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 rounded-full px-2.5 py-1">{s.status}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{s.body}</p>
              <Link to={s.href as any} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary">
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
      <div className="pb-8" />
    </>
  );
}
