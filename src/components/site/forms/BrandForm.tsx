import { FormEvent, useRef, useState } from "react";
import {
  Field,
  TextInput,
  TextArea,
  Select,
  ConsentCheckbox,
  MarketingCheckbox,
  SuccessMessage,
  EMAIL_RE,
} from "./FormFields";
import { Turnstile, TurnstileHandle } from "./Turnstile";
import { useFormSubmit } from "./useFormSubmit";

const CHANNELS = ["OOH", "Print", "TV", "Social Media", "Event", "Packaging", "Retail / POS", "Other"];
const SOURCE_PAGE = "https://smartsense.africa/contact";

export function BrandForm() {
  const { submit, status, error, reset } = useFormSubmit();
  const [consent, setConsent] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [channels, setChannels] = useState<string[]>([]);
  const [token, setToken] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileHandle>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function toggleChannel(c: string) {
    setChannels((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    const f = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    if (!f.firstName?.trim() || !f.lastName?.trim() || !f.organization?.trim() || !f.message?.trim()) {
      setFormError("Please complete all required fields.");
      return;
    }
    if (!EMAIL_RE.test(f.email?.trim() || "")) {
      setFormError("Please enter a valid email address.");
      return;
    }
    if (!consent) {
      setFormError("Please accept the consent statement to continue.");
      return;
    }
    if (!token) {
      setFormError("Please complete the verification before submitting.");
      return;
    }
    const message = [
      f.message?.trim(),
      f.campaignType ? `Campaign type: ${f.campaignType}` : "",
      f.targetAudience ? `Target audience: ${f.targetAudience}` : "",
      channels.length ? `Channels: ${channels.join(", ")}` : "",
      f.timeline ? `Timeline: ${f.timeline}` : "",
      f.budget ? `Estimated budget: ${f.budget}` : "",
    ]
      .filter(Boolean)
      .join("\n\n");
    const ok = await submit({
      formType: "brand_agency_campaign",
      firstName: f.firstName.trim(),
      lastName: f.lastName.trim(),
      email: f.email.trim(),
      phone: f.phone?.trim() || "",
      organization: f.organization.trim(),
      role: f.role?.trim() || "",
      sector: "",
      message,
      marketingOptIn,
      sourcePage: SOURCE_PAGE,
      turnstileToken: token,
    });
    turnstileRef.current?.reset();
    setToken("");
    if (ok) {
      formRef.current?.reset();
      setConsent(false);
      setMarketingOptIn(false);
      setChannels([]);
    }
  }

  if (status === "success") {
    return (
      <div className="grid gap-4">
        <SuccessMessage />
        <button onClick={reset} className="justify-self-start text-sm font-medium text-primary underline underline-offset-2">
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Field label="Brand / Agency Name" htmlFor="b-org" required><TextInput id="b-org" name="organization" required /></Field>
      <Field label="Role / Designation" htmlFor="b-role"><TextInput id="b-role" name="role" /></Field>
      <Field label="First Name" htmlFor="b-first" required><TextInput id="b-first" name="firstName" required /></Field>
      <Field label="Last Name" htmlFor="b-last" required><TextInput id="b-last" name="lastName" required /></Field>
      <Field label="Email" htmlFor="b-email" required><TextInput id="b-email" name="email" type="email" required /></Field>
      <Field label="Phone" htmlFor="b-phone"><TextInput id="b-phone" name="phone" /></Field>
      <Field label="Campaign Type" htmlFor="b-type"><TextInput id="b-type" name="campaignType" placeholder="e.g. product launch, awareness" /></Field>
      <Field label="Target Audience" htmlFor="b-aud"><TextInput id="b-aud" name="targetAudience" /></Field>
      <div className="md:col-span-2">
        <p className="text-sm font-medium text-foreground mb-2">Channels</p>
        <div className="flex flex-wrap gap-2">
          {CHANNELS.map((c) => (
            <button type="button" key={c} onClick={() => toggleChannel(c)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${channels.includes(c) ? "border-secondary bg-secondary text-secondary-foreground" : "border-border bg-background text-muted-foreground hover:border-secondary"}`}>
              {c}
            </button>
          ))}
        </div>
      </div>
      <Field label="Campaign Timeline" htmlFor="b-time"><TextInput id="b-time" name="timeline" placeholder="e.g. Q1 2026" /></Field>
      <Field label="Estimated Budget Range (optional)" htmlFor="b-budget">
        <Select id="b-budget" name="budget" defaultValue="">
          <option value="">Prefer not to say</option>
          <option>Under $10k</option>
          <option>$10k – $50k</option>
          <option>$50k – $250k</option>
          <option>$250k+</option>
        </Select>
      </Field>
      <div className="md:col-span-2"><Field label="Message" htmlFor="b-msg" required><TextArea id="b-msg" name="message" required /></Field></div>
      <div className="md:col-span-2"><Turnstile ref={turnstileRef} onToken={setToken} /></div>
      <ConsentCheckbox checked={consent} onChange={setConsent} />
      <MarketingCheckbox checked={marketingOptIn} onChange={setMarketingOptIn} />
      {(formError || error) && <p className="md:col-span-2 text-sm text-destructive">{formError || error}</p>}
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "loading"} className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Submit Campaign Brief"}
        </button>
      </div>
    </form>
  );
}
