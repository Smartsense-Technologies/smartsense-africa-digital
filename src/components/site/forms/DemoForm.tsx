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

const SOURCE_PAGE = "https://smartsense.africa/contact";

export function DemoForm() {
  const { submit, status, error, reset } = useFormSubmit();
  const [consent, setConsent] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [token, setToken] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileHandle>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    const message = [f.message?.trim(), f.demoInterest ? `Demo interest: ${f.demoInterest}` : ""]
      .filter(Boolean)
      .join("\n\n");
    const ok = await submit({
      formType: "demo_request",
      firstName: f.firstName.trim(),
      lastName: f.lastName.trim(),
      email: f.email.trim(),
      phone: f.phone?.trim() || "",
      organization: f.organization.trim(),
      role: f.role?.trim() || "",
      sector: f.sector?.trim() || "",
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
      <Field label="First Name" htmlFor="d-first" required><TextInput id="d-first" name="firstName" required /></Field>
      <Field label="Last Name" htmlFor="d-last" required><TextInput id="d-last" name="lastName" required /></Field>
      <Field label="Organization" htmlFor="d-org" required><TextInput id="d-org" name="organization" required /></Field>
      <Field label="Role / Designation" htmlFor="d-role"><TextInput id="d-role" name="role" /></Field>
      <Field label="Email" htmlFor="d-email" required><TextInput id="d-email" name="email" type="email" required /></Field>
      <Field label="Phone / WhatsApp" htmlFor="d-phone"><TextInput id="d-phone" name="phone" /></Field>
      <Field label="Sector" htmlFor="d-sector">
        <Select id="d-sector" name="sector" defaultValue="">
          <option value="">Select sector</option>
          {["Government","Telecoms","Media & Advertising","Retail / FMCG","Financial Services","Education","Events","Other"].map(s => <option key={s}>{s}</option>)}
        </Select>
      </Field>
      <Field label="Demo Interest" htmlFor="d-interest">
        <Select id="d-interest" name="demoInterest" defaultValue="">
          <option value="">Select demo</option>
          <option>Mixed Reality / Flam-powered Experience</option>
          <option>Government Communication</option>
          <option>Smart Cards</option>
          <option>Event Activation</option>
          <option>Product / Packaging Experience</option>
          <option>Other</option>
        </Select>
      </Field>
      <div className="md:col-span-2">
        <Field label="Message" htmlFor="d-msg" required><TextArea id="d-msg" name="message" required placeholder="Tell us briefly about your goals" /></Field>
      </div>
      <div className="md:col-span-2"><Turnstile ref={turnstileRef} onToken={setToken} /></div>
      <ConsentCheckbox checked={consent} onChange={setConsent} />
      <MarketingCheckbox checked={marketingOptIn} onChange={setMarketingOptIn} />
      {(formError || error) && <p className="md:col-span-2 text-sm text-destructive">{formError || error}</p>}
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "loading"} className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Request a Demo"}
        </button>
      </div>
    </form>
  );
}
