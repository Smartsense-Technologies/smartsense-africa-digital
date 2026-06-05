import { Link } from "react-router-dom";
import {
  QrCode,
  Smartphone,
  MessageSquare,
  ShieldCheck,
  ClipboardCheck,
  Gift,
  CheckCircle2,
  Package,
  Store,
  CalendarHeart,
  BadgePercent,
  Signal,
  Megaphone,
  CreditCard,
  Newspaper,
  Lock,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "../components/site/PageHero";
import { SectionHeading } from "../components/site/SectionHeading";
import { CTASection } from "../components/site/CTASection";
import { PageMeta } from "../lib/PageMeta";

const STEPS = [
  { icon: QrCode, t: "Scan the Campaign QR Code", b: "Participants scan a QR code from packaging, print, outdoor media, event material, cards, or another campaign touchpoint." },
  { icon: Smartphone, t: "Enter a Mobile Number", b: "The participant provides a valid mobile number for verification and campaign participation." },
  { icon: MessageSquare, t: "Receive a Verification Code by SMS", b: "A time-limited verification code is sent to the participant's mobile number." },
  { icon: ShieldCheck, t: "Verify the Mobile Number", b: "The participant enters the verification code to confirm access to the number." },
  { icon: ClipboardCheck, t: "Complete the Campaign Action", b: "The participant completes the relevant activity, such as answering a question, interacting with content, or submitting an entry." },
  { icon: Gift, t: "Receive Entry or Reward Confirmation", b: "The participant receives confirmation of a successful entry or any applicable reward, subject to the campaign terms." },
];

const BENEFITS = [
  { icon: ShieldCheck, t: "Verified participant access", b: "Confirm that entries come from reachable, verified mobile numbers." },
  { icon: CheckCircle2, t: "Reduced duplicate entries", b: "Mobile verification helps limit repeated or fraudulent submissions." },
  { icon: ClipboardCheck, t: "Better campaign accountability", b: "Cleaner participation data supports transparent administration." },
  { icon: Gift, t: "More reliable reward fulfilment", b: "Verified contacts make it easier to confirm and deliver rewards." },
];

const USE_CASES = [
  { icon: Package, t: "Product packaging promotions", b: "Turn on-pack QR codes into verified entry and reward journeys." },
  { icon: Store, t: "Retail and in-store campaigns", b: "Drive participation at shelf, till and point-of-sale." },
  { icon: CalendarHeart, t: "Event activations", b: "Engage attendees with scan-to-enter experiences on the day." },
  { icon: BadgePercent, t: "Consumer rewards and loyalty", b: "Reward repeat engagement with verified participation." },
  { icon: Signal, t: "Telecom-led promotions", b: "Run high-volume, mobile-first promotional campaigns." },
  { icon: Megaphone, t: "Public awareness campaigns", b: "Encourage verified responses to public-interest messaging." },
  { icon: CreditCard, t: "Smart cards and membership programmes", b: "Link identity, loyalty and membership cards to campaign actions." },
  { icon: Newspaper, t: "Print, outdoor, and digital media", b: "Make print, OOH and digital channels measurable and interactive." },
];

export default function ScanAndWin() {
  return (
    <>
      <PageMeta
        title="Scan & Win Promotional Experiences | SmartSense Technologies"
        description="SmartSense Scan & Win connects QR-enabled campaigns with verified mobile participation, SMS verification codes, promotional engagement and reward confirmation."
        ogTitle="Scan & Win Promotional Experiences | SmartSense Technologies"
        ogDescription="Connect QR-enabled campaigns with verified mobile participation, SMS verification codes and reward confirmation."
      />

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl container-px py-20 md:py-28">
          <div className="flex items-center gap-3">
            <img src="/smartsense-atomic-icon.png" alt="SmartSense Technologies atomic icon" className="h-10 w-10 object-contain" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan">Scan &amp; Win</p>
          </div>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Turn Every Scan Into an Opportunity to Engage and Reward
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-white/80">
            SmartSense Scan &amp; Win enables brands, institutions and campaign owners to connect packaging, print, outdoor media, events and digital channels with verified mobile participation.
          </p>
          <p className="mt-4 max-w-3xl text-base text-white/70">
            Participants scan a campaign QR code, enter their mobile number, receive a verification code by SMS, and complete the required action to enter a promotion or receive a reward.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-accent-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:opacity-95">
              Discuss a Scan &amp; Win Campaign <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#how-it-works" className="inline-flex items-center rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              How It Works
            </a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl container-px mt-20 scroll-mt-24">
        <SectionHeading eyebrow="Process" title="How Scan & Win Works" />
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
        <p className="mt-6 text-sm font-medium text-secondary">
          Verification codes are time-limited and should not be shared with anyone.
        </p>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Why it matters" title="Supporting Fair and Verified Participation" subtitle="Mobile-number verification helps campaign owners confirm participation, reduce duplicate or fraudulent entries, and support more reliable campaign administration." />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b) => (
            <div key={b.t} className="rounded-xl bg-surface p-6 border border-border">
              <b.icon className="h-5 w-5 text-secondary" />
              <h3 className="mt-3 font-display text-base font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Use cases" title="Built for Different Campaign Environments" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((u) => (
            <div key={u.t} className="rounded-xl border border-border bg-card p-6 hover:border-secondary transition">
              <u.icon className="h-5 w-5 text-secondary" />
              <h3 className="mt-3 font-display text-base font-semibold">{u.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <div className="overflow-hidden rounded-2xl border border-border bg-soft p-8 md:p-12 shadow-elegant">
          <SectionHeading eyebrow="Mixed reality" title="Connecting Physical Touchpoints to Mobile Engagement" />
          <p className="mt-4 max-w-3xl text-base text-muted-foreground leading-relaxed">
            Scan &amp; Win can be deployed alongside Flam-powered mixed reality experiences to turn packaging, cards, print, outdoor media and event materials into interactive campaign journeys. SmartSense works with technology partners to adapt these experiences for African markets and campaign requirements.
          </p>
          <Link to="/solutions/mixed-reality" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary">
            Explore Mixed Reality <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><Lock className="h-5 w-5" /></div>
          <h2 className="mt-4 text-2xl font-bold">Verification and Security</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            To support fair participation and reduce duplicate or fraudulent entries, participants may be required to verify their mobile number using a verification code sent by SMS. Verification codes are time-limited and should not be shared with anyone.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">
            SmartSense will never ask participants to share their verification code with another person.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-elegant">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-gradient text-accent-foreground"><ShieldCheck className="h-5 w-5" /></div>
          <h2 className="mt-4 text-2xl font-bold">Privacy and Consent</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Mobile numbers and other information submitted through Scan &amp; Win campaigns may be used for participant verification, campaign administration, entry confirmation, reward fulfilment and related campaign communications. Marketing communication is only sent where the participant has provided consent.
          </p>
          <p className="mt-4 text-sm font-medium text-foreground">
            Participants should review the specific campaign terms and privacy notice before entering.
          </p>
          <Link to="/privacy-policy" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-primary">
            Read our Privacy Policy <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl container-px mt-24">
        <SectionHeading eyebrow="Availability" title="Campaign Availability" subtitle="Scan & Win campaigns are deployed for approved brand, institutional and promotional campaigns. Availability, eligibility, rewards and participation terms may vary by campaign." />
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
        title="Discuss a Scan & Win Campaign"
        subtitle="Talk to our team about connecting your packaging, print, outdoor, event and digital touchpoints with verified mobile participation."
        primaryLabel="Discuss a Scan & Win Campaign"
        primaryTo="/contact"
        secondaryLabel="Request a Demo"
        secondaryTo="/contact"
      />
      <div className="pb-8" />
    </>
  );
}