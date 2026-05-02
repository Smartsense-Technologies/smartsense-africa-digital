import { FormEvent, useState } from "react";
import { Field, TextInput, TextArea, Select, CONSENT_TEXT } from "./FormFields";
import { TurnstilePlaceholder } from "./Turnstile";
import { useFormSubmit } from "./useFormSubmit";

export function DemoForm() {
  const { submit, status, error } = useFormSubmit("request-demo");
  const [consent, setConsent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    const f = new FormData(e.currentTarget);
    submit(Object.fromEntries(f.entries()));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Field label="Full Name" htmlFor="d-name" required><TextInput id="d-name" name="fullName" required /></Field>
      <Field label="Organization" htmlFor="d-org" required><TextInput id="d-org" name="organization" required /></Field>
      <Field label="Role / Designation" htmlFor="d-role"><TextInput id="d-role" name="role" /></Field>
      <Field label="Email" htmlFor="d-email" required><TextInput id="d-email" name="email" type="email" required /></Field>
      <Field label="Phone / WhatsApp" htmlFor="d-phone"><TextInput id="d-phone" name="phone" /></Field>
      <Field label="Sector" htmlFor="d-sector">
        <Select id="d-sector" name="sector" defaultValue="">
          <option value="" disabled>Select sector</option>
          {["Government","Telecoms","Media & Advertising","Retail / FMCG","Financial Services","Education","Events","Other"].map(s => <option key={s}>{s}</option>)}
        </Select>
      </Field>
      <Field label="Demo Interest" htmlFor="d-interest" required>
        <Select id="d-interest" name="demoInterest" defaultValue="" required>
          <option value="" disabled>Select demo</option>
          <option>Mixed Reality / Flam-powered Experience</option>
          <option>Government Communication</option>
          <option>Smart Cards</option>
          <option>Event Activation</option>
          <option>Product / Packaging Experience</option>
          <option>Other</option>
        </Select>
      </Field>
      <div className="md:col-span-2">
        <Field label="Message" htmlFor="d-msg"><TextArea id="d-msg" name="message" placeholder="Tell us briefly about your goals" /></Field>
      </div>
      <div className="md:col-span-2"><TurnstilePlaceholder /></div>
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-muted-foreground">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" required />
        <span>{CONSENT_TEXT}</span>
      </label>
      {error && <p className="md:col-span-2 text-sm text-destructive">{error}</p>}
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "loading" || !consent} className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Request a Demo"}
        </button>
      </div>
    </form>
  );
}
