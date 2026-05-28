import { useState } from "react";
import { PageHero } from "../components/site/PageHero";
import { DemoForm } from "../components/site/forms/DemoForm";
import { GovernmentForm } from "../components/site/forms/GovernmentForm";
import { BrandForm } from "../components/site/forms/BrandForm";
import { GeneralForm } from "../components/site/forms/GeneralForm";
import { PageMeta } from "../lib/PageMeta";

const TABS = [
  { id: "demo", label: "Request a Demo" },
  { id: "gov", label: "Government Partnership" },
  { id: "brand", label: "Brand / Agency Campaign" },
  { id: "general", label: "General Contact" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function Contact() {
  const [tab, setTab] = useState<TabId>("demo");
  return (
    <>
      <PageMeta
        title="Contact / Request Demo | SmartSense Technologies"
        description="Request a demo, discuss government partnership, brief us on a campaign or send a general enquiry to SmartSense Technologies."
        ogTitle="Contact SmartSense Technologies"
        ogDescription="Talk to our team about intelligent digital experiences for your organization."
      />
      <PageHero eyebrow="Contact" title="Let's Get Smarter, together" subtitle="Choose the path that fits your enquiry. Our team will respond within typical business hours." />

      <section className="mx-auto max-w-5xl container-px mt-12">
        <div className="flex flex-wrap gap-2 rounded-xl border border-border bg-surface p-1.5">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 min-w-[160px] rounded-lg px-4 py-2.5 text-sm font-medium transition ${tab === t.id ? "bg-primary text-primary-foreground shadow-elegant" : "text-muted-foreground hover:text-foreground"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6 md:p-8 shadow-elegant">
          {tab === "demo" && <DemoForm />}
          {tab === "gov" && <GovernmentForm />}
          {tab === "brand" && <BrandForm />}
          {tab === "general" && <GeneralForm />}
        </div>

        <p className="mt-6 text-xs text-muted-foreground text-center">
          Please do not submit sensitive personal, identity, financial or confidential government information through this public form.
        </p>
      </section>
      <div className="pb-16" />
    </>
  );
}