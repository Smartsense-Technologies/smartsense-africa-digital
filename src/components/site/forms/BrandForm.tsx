import { FormEvent, useState } from "react";
import { Field, TextInput, TextArea, Select, CONSENT_TEXT } from "./FormFields";
import { TurnstilePlaceholder } from "./Turnstile";
import { useFormSubmit } from "./useFormSubmit";

const CHANNELS = ["OOH", "Print", "TV", "Social Media", "Event", "Packaging", "Retail / POS", "Other"];

export function BrandForm() {
  const { submit, status, error } = useFormSubmit("brand-campaign");
  const [consent, setConsent] = useState(false);
  const [channels, setChannels] = useState<string[]>([]);

  function toggleChannel(c: string) {
    setChannels((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]));
  }
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) return;
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    submit({ ...data, channels });
  }
  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Field label="Brand / Agency Name" htmlFor="b-org" required><TextInput id="b-org" name="organization" required /></Field>
      <Field label="Contact Person" htmlFor="b-name" required><TextInput id="b-name" name="contactPerson" required /></Field>
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
      <div className="md:col-span-2"><Field label="Message" htmlFor="b-msg"><TextArea id="b-msg" name="message" /></Field></div>
      <div className="md:col-span-2"><TurnstilePlaceholder /></div>
      <label className="md:col-span-2 flex items-start gap-2 text-sm text-muted-foreground">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-1" required />
        <span>{CONSENT_TEXT}</span>
      </label>
      {error && <p className="md:col-span-2 text-sm text-destructive">{error}</p>}
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "loading" || !consent} className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Submit Campaign Brief"}
        </button>
      </div>
    </form>
  );
}
