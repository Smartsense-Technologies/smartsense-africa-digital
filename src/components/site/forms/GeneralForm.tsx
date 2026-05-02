import { FormEvent, useState } from "react";
import { Field, TextInput, TextArea, Select, CONSENT_TEXT } from "./FormFields";
import { TurnstilePlaceholder } from "./Turnstile";
import { useFormSubmit } from "./useFormSubmit";

export function GeneralForm() {
  const { submit, status, error } = useFormSubmit("general-contact");
  const [consent, setConsent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    submit(Object.fromEntries(new FormData(e.currentTarget).entries()));
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Field label="Full Name" htmlFor="c-name" required><TextInput id="c-name" name="fullName" required /></Field>
      <Field label="Organization (optional)" htmlFor="c-org"><TextInput id="c-org" name="organization" /></Field>
      <Field label="Email" htmlFor="c-email" required><TextInput id="c-email" name="email" type="email" required /></Field>
      <Field label="Phone (optional)" htmlFor="c-phone"><TextInput id="c-phone" name="phone" /></Field>
      <Field label="Enquiry Type" htmlFor="c-type" required>
        <Select id="c-type" name="enquiryType" defaultValue="" required>
          <option value="" disabled>Select enquiry</option>
          <option>General Information</option>
          <option>Media / Press</option>
          <option>Careers</option>
          <option>Technology Partnership</option>
          <option>Other</option>
        </Select>
      </Field>
      <div className="md:col-span-2"><Field label="Message" htmlFor="c-msg" required><TextArea id="c-msg" name="message" required /></Field></div>
      <div className="md:col-span-2"><TurnstilePlaceholder /></div>
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-muted-foreground">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" required />
        <span>{CONSENT_TEXT}</span>
      </label>
      {error && <p className="md:col-span-2 text-sm text-destructive">{error}</p>}
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "loading" || !consent} className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
