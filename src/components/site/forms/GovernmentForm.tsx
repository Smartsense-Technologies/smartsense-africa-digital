import { FormEvent, useState } from "react";
import { Field, TextInput, TextArea, Select, CONSENT_TEXT } from "./FormFields";
import { TurnstilePlaceholder } from "./Turnstile";
import { useFormSubmit } from "./useFormSubmit";

export function GovernmentForm() {
  const { submit, status, error } = useFormSubmit("government-partnership");
  const [consent, setConsent] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    submit(Object.fromEntries(new FormData(e.currentTarget).entries()));
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Field label="Full Name" htmlFor="g-name" required><TextInput id="g-name" name="fullName" required /></Field>
      <Field label="Ministry / Agency / Institution" htmlFor="g-org" required><TextInput id="g-org" name="institution" required /></Field>
      <Field label="Role / Designation" htmlFor="g-role"><TextInput id="g-role" name="role" /></Field>
      <Field label="Official Email" htmlFor="g-email" required><TextInput id="g-email" name="email" type="email" required /></Field>
      <Field label="Phone" htmlFor="g-phone"><TextInput id="g-phone" name="phone" /></Field>
      <Field label="Area of Interest" htmlFor="g-area" required>
        <Select id="g-area" name="areaOfInterest" defaultValue="" required>
          <option value="" disabled>Select area</option>
          <option>Citizen Engagement</option>
          <option>Public Awareness Campaign</option>
          <option>Smart Cards</option>
          <option>SME Intelligence</option>
          <option>AI-enabled Public Services</option>
          <option>Digital Transformation Partnership</option>
          <option>Other</option>
        </Select>
      </Field>
      <Field label="Preferred Meeting Format" htmlFor="g-format">
        <Select id="g-format" name="meetingFormat" defaultValue="">
          <option value="" disabled>Select format</option>
          <option>Virtual</option>
          <option>In-person</option>
          <option>Either</option>
        </Select>
      </Field>
      <div className="md:col-span-2"><Field label="Message" htmlFor="g-msg"><TextArea id="g-msg" name="message" /></Field></div>
      <div className="md:col-span-2"><TurnstilePlaceholder /></div>
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-muted-foreground">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" required />
        <span>{CONSENT_TEXT}</span>
      </label>
      {error && <p className="md:col-span-2 text-sm text-destructive">{error}</p>}
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "loading" || !consent} className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Submit Enquiry"}
        </button>
      </div>
    </form>
  );
}
