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

export function GeneralForm() {
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
    if (!f.firstName?.trim() || !f.lastName?.trim() || !f.message?.trim()) {
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
    const message = [f.message?.trim(), f.enquiryType ? `Enquiry type: ${f.enquiryType}` : ""]
      .filter(Boolean)
      .join("\n\n");
    const ok = await submit({
      formType: "general_contact",
      firstName: f.firstName.trim(),
      lastName: f.lastName.trim(),
      email: f.email.trim(),
      phone: f.phone?.trim() || "",
      organization: f.organization?.trim() || "",
      role: "",
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
      <Field label="First Name" htmlFor="c-first" required><TextInput id="c-first" name="firstName" required /></Field>
      <Field label="Last Name" htmlFor="c-last" required><TextInput id="c-last" name="lastName" required /></Field>
      <Field label="Organization (optional)" htmlFor="c-org"><TextInput id="c-org" name="organization" /></Field>
      <Field label="Phone (optional)" htmlFor="c-phone"><TextInput id="c-phone" name="phone" /></Field>
      <Field label="Email" htmlFor="c-email" required><TextInput id="c-email" name="email" type="email" required /></Field>
      <Field label="Enquiry Type" htmlFor="c-type">
        <Select id="c-type" name="enquiryType" defaultValue="">
          <option value="">Select enquiry</option>
          <option>General Information</option>
          <option>Media / Press</option>
          <option>Careers</option>
          <option>Technology Partnership</option>
          <option>Other</option>
        </Select>
      </Field>
      <div className="md:col-span-2"><Field label="Message" htmlFor="c-msg" required><TextArea id="c-msg" name="message" required /></Field></div>
      <div className="md:col-span-2"><Turnstile ref={turnstileRef} onToken={setToken} /></div>
      <ConsentCheckbox checked={consent} onChange={setConsent} />
      <MarketingCheckbox checked={marketingOptIn} onChange={setMarketingOptIn} />
      {(formError || error) && <p className="md:col-span-2 text-sm text-destructive">{formError || error}</p>}
      <div className="md:col-span-2">
        <button type="submit" disabled={status === "loading"} className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant hover:opacity-90 disabled:opacity-60">
          {status === "loading" ? "Submitting…" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
