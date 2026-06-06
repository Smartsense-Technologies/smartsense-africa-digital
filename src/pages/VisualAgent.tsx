import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Bot,
  Target,
  BookOpen,
  UserCog,
  Rocket,
  MessagesSquare,
  HelpCircle,
  Boxes,
  Megaphone,
  LifeBuoy,
  MousePointerClick,
  GraduationCap,
  Mic,
  Camera,
  Chrome,
  ShieldCheck,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "../components/site/SectionHeading";
import { CTASection } from "../components/site/CTASection";
import { PageMeta } from "../lib/PageMeta";

const STEPS = [
  { icon: Target, t: "Define the Agent's Role", b: "Decide whether the agent will support product education, onboarding, customer support, campaign engagement, public awareness, training or another use case." },
  { icon: BookOpen, t: "Build the Knowledge Base", b: "Provide approved materials the agent can learn from, such as FAQs, product information, service guides, campaign documents, policy documents, website copy or support content." },
  { icon: UserCog, t: "Configure the Avatar Identity", b: "Set up the visual identity, voice, tone and interaction style of the agent using approved avatar, face, voice or character assets." },
  { icon: Rocket, t: "Deploy the Experience", b: "The agent can be deployed through a webpage, campaign link, QR code, mixed reality journey, event page or digital activation." },
  { icon: MessagesSquare, t: "Users Interact With the Agent", b: "Visitors can ask questions, receive guided responses and continue to the next action, such as requesting a demo, learning more or joining a campaign." },
];

const CAPABILITIES = [
  { icon: HelpCircle, t: "Answer Approved FAQs", b: "Respond to common questions based on the organization's provided knowledge base." },
  { icon: Boxes, t: "Explain Products and Services", b: "Help users understand features, benefits, processes, eligibility or next steps." },
  { icon: Megaphone, t: "Guide Campaign Participation", b: "Support users through promotional, educational or engagement experiences." },
  { icon: LifeBuoy, t: "Support Customer Onboarding", b: "Explain setup steps, service usage or account activation journeys." },
  { icon: MousePointerClick, t: "Drive Calls to Action", b: "Direct users to links, forms, demo requests, campaign pages or other next steps." },
  { icon: GraduationCap, t: "Support Public Education", b: "Help institutions explain programmes, policies, services and citizen-facing information in a more interactive way." },
];

const USE_CASES = [
  "Brand campaigns",
  "Product launches",
  "Customer onboarding",
  "Government and public awareness campaigns",
  "Education and training",
  "Financial services education",
  "Retail and packaging engagement",
  "Event activations",
  "Internal policy and staff support",
  "Customer service and FAQ support",
];

const AVATAR_ASSETS = [
  "Clear face image or approved avatar identity",
  "Clean voice recording where voice cloning is required",
  "Optional talking video or source footage",
  "Preferred tone and expression",
  "Brand or character guidelines",
  "Usage rights and likeness permissions where a real person, ambassador, leader, celebrity or character is represented",
];

const KNOWLEDGE_MATERIALS = [
  "Company profile",
  "Product or service information",
  "FAQs",
  "Campaign documents",
  "Customer support documents",
  "Policy documents",
  "Terms, eligibility or participation rules",
  "Approved escalation/contact instructions",
  "Languages and tone of voice preferences",
];

const INTERACT_STEPS = [
  "Open this page in Chrome or Safari for the best experience.",
  "Click the Visual Agent or chat icon.",
  "Allow microphone access when prompted.",
  "Press and hold the mic button while speaking.",
  "Release the mic button when you finish your question.",
  "The agent will respond based on its available knowledge base.",
];

const FLAM_SCRIPT_SRC = "https://agents.flamapp.ai/v1/loader.js";

export default function VisualAgent() {
  useEffect(() => {
    if (document.querySelector(`script[src="${FLAM_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = FLAM_SCRIPT_SRC;
    script.async = true;
    script.setAttribute("data-project-id", "6a1d90356cb5f6704f463457");
    script.setAttribute("data-client-key", "ak_266b05d48e3bf630");
    document.body.appendChild(script);
    return () => {
      document.querySelectorAll(`script[src="${FLAM_SCRIPT_SRC}"]`).forEach((el) => el.remove());
    };
  }, []);

  return (
    <>
      <PageMeta
        title="AI Visual Agents | SmartSense Technologies"
        description="SmartSense helps organizations deploy Flam-powered AI visual agents that answer questions, guide users and support interactive engagement based on curated knowledge bases."
        ogTitle="AI Visual Agents | SmartSense Technologies"
        ogDescription="Flam-powered AI visual agents deployed by SmartSense for African brand, institutional and campaign use cases."
      />

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl container-px py-20 md:py-28">
          <div className="flex items-center gap-3">
            <img src="/smartsense-atomic-icon.png" alt="SmartSense Technologies atomic icon" className="h-10 w-10 object-contain" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">AI Visual Agents</p>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            AI Visual Agents for Interactive Brand and Institutional Engagement
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/80">
            SmartSense works with Flam Technologies to help organizations deploy AI-powered visual agents that can guide, explain, educate and engage audiences through mobile-first interactive experiences.
          </p>
          <p className="mt-4 max-w-3xl text-base text-white/70">
            Each Visual Agent responds based on a curated knowledge base provided by the organization, such as product information, FAQs, campaign details, policy documents, service guides or customer support materials.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#try" className="inline-flex items-center gap-2 rounded-md bg-accent-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:opacity-95">
              Try the Visual Agent <ArrowRight className="h-4 w-4" />
            </a>
            <Link to="/contact" className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Request a Visual Agent Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-20">
        <SectionHeading eyebrow="Overview" title="What Is an AI Visual Agent?" />
        <div className="mt-6 max-w-3xl space-y-4 text-base text-muted-foreground leading-relaxed">
          <p>
            An AI Visual Agent is an interactive avatar or digital representative that can appear within a web or mobile experience to guide users, answer approved questions, explain products or services, and support richer audience interaction.
          </p>
          <p>
            Unlike a static chatbot, a Visual Agent combines conversational AI with a visual presence, creating a more engaging way for users to learn, ask questions and take action.
          </p>
          <p className="rounded-xl border border-border bg-surface p-5 text-sm text-foreground">
            The agent answers based on the knowledge base it has been trained on. If a question falls outside that knowledge base, the agent may not be able to provide a complete answer.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Process" title="How It Works" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <div key={s.t} className="rounded-xl border border-border bg-card p-6 hover:shadow-elegant transition">
              <div className="flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><s.icon className="h-5 w-5" /></div>
                <span className="font-display text-2xl font-bold text-muted-foreground/40">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="try" className="mx-auto max-w-7xl container-px mt-24 scroll-mt-24">
        <SectionHeading eyebrow="Live demo" title="Try the Visual Agent" subtitle="Use the Visual Agent demo to ask questions about SmartSense, Flam-powered mixed reality experiences, Scan & Win campaigns, or possible use cases for your organization." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><Mic className="h-5 w-5" /></div>
            <h3 className="mt-4 text-xl font-bold">How to interact</h3>
            <ul className="mt-4 space-y-3">
              {INTERACT_STEPS.map((s) => (
                <li key={s} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
                  <span className="text-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-surface p-6 flex items-start gap-3">
              <Camera className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                First-time users may need to grant microphone permission before speaking to the Visual Agent. Depending on the experience, camera permission may also be requested.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-6 flex items-start gap-3">
              <Chrome className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                This is a demonstration experience. The agent may only respond based on the information currently available in its knowledge base.
              </p>
            </div>
            <div className="rounded-2xl border border-dashed border-border bg-card p-6 flex items-start gap-3">
              <Bot className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Visual Agent loads on this page. Look for the agent or chat icon to begin your conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Capabilities" title="What Visual Agents Can Do" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-6 hover:border-secondary transition">
              <c.icon className="h-5 w-5 text-secondary" />
              <h3 className="mt-3 font-display text-base font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Use cases" title="Potential Use Cases" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((u) => (
            <div key={u} className="rounded-lg border border-border bg-surface px-5 py-4 text-sm font-medium text-foreground hover:border-secondary transition">
              {u}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Requirements" title="What We Need to Build a Visual Agent" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><UserCog className="h-5 w-5" /></div>
            <h3 className="mt-4 text-xl font-bold">Avatar Identity Assets</h3>
            <ul className="mt-5 space-y-3">
              {AVATAR_ASSETS.map((a) => (
                <li key={a} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
                  <span className="text-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><BookOpen className="h-5 w-5" /></div>
            <h3 className="mt-4 text-xl font-bold">Knowledge Base Materials</h3>
            <ul className="mt-5 space-y-3">
              {KNOWLEDGE_MATERIALS.map((m) => (
                <li key={m} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
                  <span className="text-foreground">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground leading-relaxed">
          The quality of the Visual Agent depends heavily on the quality and clarity of the knowledge base. The more structured and accurate the source materials are, the more useful the agent can be within its approved scope.
        </p>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-soft p-8 md:p-12 shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><ShieldCheck className="h-5 w-5" /></div>
          <h2 className="mt-4 text-2xl md:text-3xl font-bold">Responsible Use and Permissions</h2>
          <div className="mt-4 max-w-3xl space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              Where a Visual Agent represents a real person, brand ambassador, leader, public figure, employee, character or celebrity, the organization must provide the necessary usage rights, likeness permissions and approved knowledge materials.
            </p>
            <p>
              SmartSense does not recommend deploying agents that imitate real people, public figures, ambassadors or brand characters without documented authorization.
            </p>
            <p>
              For regulated sectors, organizations should ensure that the knowledge base, disclaimers and escalation paths are reviewed before deployment.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Partnership" title="SmartSense and Flam Technologies" />
        <div className="mt-6 max-w-3xl space-y-4 text-base text-muted-foreground leading-relaxed">
          <p>
            SmartSense Technologies works with Flam Technologies to help bring Flam-powered AI visual agent and mixed reality experiences to African markets. Flam provides the underlying technology, while SmartSense supports market adaptation, use-case development, client engagement and deployment for brands, institutions and campaign owners.
          </p>
          <p>
            This partnership-led approach allows African organizations to explore advanced interactive experiences without having to build the underlying technology from scratch.
          </p>
        </div>
        <Link to="/solutions/mixed-reality" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary">
          Explore Mixed Reality <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Get in touch" title="Contact SmartSense" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5 flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Address</h3>
              <address className="mt-1 not-italic text-sm text-foreground">20, Theophilus Oji Street, Lekki Phase One, Lagos, Nigeria.</address>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-5 flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-secondary shrink-0" />
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Email</h3>
              <p className="mt-1 text-sm">
                <a href="mailto:hello@smartsense.africa" className="text-secondary underline underline-offset-4">hello@smartsense.africa</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Explore a Visual Agent for Your Organization?"
        subtitle="Whether you are launching a campaign, educating customers, supporting staff, guiding citizens or creating a more interactive brand experience, SmartSense can help you define the right Visual Agent use case and knowledge base."
        primaryLabel="Request a Visual Agent Demo"
        primaryTo="/contact"
        secondaryLabel="Request a Demo"
        secondaryTo="/contact"
      />
      <div className="pb-12" />
    </>
  );
}