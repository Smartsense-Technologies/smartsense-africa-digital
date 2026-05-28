import { PageHero } from "../components/site/PageHero";
import { CTASection } from "../components/site/CTASection";
import { SectionHeading } from "../components/site/SectionHeading";
import { PageMeta } from "../lib/PageMeta";

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-7">
      <h3 className="font-display text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

export default function About() {
  return (
    <>
      <PageMeta
        title="About | SmartSense Technologies"
        description="SmartSense is an AI-driven innovation and digital transformation company building intelligent technology solutions for Africa."
        ogTitle="About SmartSense Technologies"
        ogDescription="An AI-driven innovation company localizing intelligent technology for Africa."
      />
      <PageHero eyebrow="About SmartSense" title="An AI-driven innovation and digital transformation company for Africa" subtitle="We build, localize and scale intelligent technology solutions — starting with Nigeria — to expand access, efficiency, inclusion and economic opportunity." />

      <section className="mx-auto max-w-7xl container-px mt-20 grid md:grid-cols-2 gap-10">
        <Block title="Company Overview" body="SmartSense Technologies is an Africa-focused intelligent infrastructure and digital innovation company. We help brands, institutions and governments deploy AI-powered, immersive and mobile-first solutions for communication, engagement, access, learning, media intelligence and economic intelligence." />
        <Block title="Our Vision" body="To become Africa's leading AI-powered intelligent infrastructure and digital ecosystem company." />
        <Block title="Our Mission" body="To localize and deploy practical AI and digital technologies that improve access, efficiency, inclusion and economic opportunity across Africa." />
        <Block title={'What "Get Smarter" Means'} body="Get Smarter is our promise: every channel, every campaign, every public service interaction can be made more intelligent, measurable and human-centered." />
        <Block title="Africa-First Technology Localization" body="We adapt global technology platforms to local realities — networks, devices, languages, regulatory contexts and cultural nuance — so solutions actually work at scale." />
        <Block title="Partnership and Deployment Model" body="SmartSense operates through strategic technology partnerships, public-private collaborations and managed deployments. We move from concept to pilot to scale alongside our partners." />
        <Block title="Why We Exist" body="African organizations deserve modern tools to communicate, engage, learn and decide. We exist to make the most useful technologies of this decade accessible, contextual and impactful here." />
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Core values" title="Principles that shape how we build" align="center" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { t: "Practical innovation", b: "We prioritize solutions that ship, scale and measurably improve outcomes." },
            { t: "Inclusive by design", b: "Mobile-first, low-bandwidth-aware, multilingual where it matters." },
            { t: "Trusted partnership", b: "We engage public and private stakeholders through proper channels and structures." },
          ].map((v) => (
            <div key={v.t} className="rounded-xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection title="Partner With Us" subtitle="If your organization is exploring AI, immersive engagement or digital transformation — we'd like to talk." primaryLabel="Discuss Partnership" />
      <div className="pb-8" />
    </>
  );
}