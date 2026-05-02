import { createFileRoute } from "@tanstack/react-router";
import { Building2, Radio, Megaphone, ShoppingBag, Banknote, GraduationCap, PartyPopper, Bus } from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | SmartSense Technologies" },
      { name: "description", content: "Use cases across government, telecoms, media, retail, financial services, education, events and transport." },
      { property: "og:title", content: "Industries | SmartSense Technologies" },
      { property: "og:description", content: "Built for high-impact sectors across Africa." },
    ],
  }),
  component: IndustriesPage,
});

const SECTORS = [
  { icon: Building2, name: "Government & Public Sector", uses: ["Public campaigns", "Citizen engagement", "Digital service explainers", "SME intelligence"] },
  { icon: Radio, name: "Telecoms", uses: ["Product education", "App downloads", "Customer engagement", "Interactive campaigns"] },
  { icon: Megaphone, name: "Media & Advertising", uses: ["Measurable OOH", "Print-to-digital", "TV second screen", "Brand storytelling"] },
  { icon: ShoppingBag, name: "Retail & FMCG", uses: ["Packaging activations", "Product explainers", "Loyalty campaigns", "In-store experiences"] },
  { icon: Banknote, name: "Financial Services", uses: ["SME engagement", "Customer education", "Product explainers", "Embedded service journeys"] },
  { icon: GraduationCap, name: "Education", uses: ["AI literacy", "Workforce readiness", "Student engagement", "Digital learning"] },
  { icon: PartyPopper, name: "Events & Entertainment", uses: ["Immersive booths", "Sponsor activations", "Celebrity / leader content", "Fan cards"] },
  { icon: Bus, name: "Transport & Institutions", uses: ["Access systems", "Smart verification", "Public messaging", "QR-linked information"] },
];

function IndustriesPage() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Built for High-Impact Sectors" subtitle="From public institutions to consumer brands — SmartSense delivers measurable, intelligent experiences across the sectors that move African economies." />
      <section className="mx-auto max-w-7xl container-px mt-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s) => (
            <div key={s.name} className="group rounded-xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-0.5 transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {s.uses.map((u) => <li key={u}>· {u}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
      <div className="pb-8" />
    </>
  );
}
