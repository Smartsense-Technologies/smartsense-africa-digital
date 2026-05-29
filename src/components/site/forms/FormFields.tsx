import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

export function Field({ label, htmlFor, required, children }: { label: string; htmlFor: string; required?: boolean; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
    </div>
  );
}

const baseInput =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring transition";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${baseInput} ${props.className ?? ""}`} />;
}
export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea rows={4} {...props} className={`${baseInput} ${props.className ?? ""}`} />;
}
export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={`${baseInput} ${props.className ?? ""}`} />;
}

export const CONSENT_TEXT =
  "By submitting this form, you agree that SmartSense Technologies may use the information provided to respond to your enquiry and manage related communications.";

export const MARKETING_TEXT =
  "I agree to receive occasional updates, insights and announcements from SmartSense Technologies.";

export function ConsentCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="md:col-span-2 flex items-start gap-2 text-sm text-muted-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1"
        required
      />
      <span>
        {CONSENT_TEXT}{" "}
        <Link to="/privacy-policy" className="font-medium text-primary underline underline-offset-2">
          Privacy Policy
        </Link>
      </span>
    </label>
  );
}

export function MarketingCheckbox({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="md:col-span-2 flex items-start gap-2 text-sm text-muted-foreground">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1"
      />
      <span>{MARKETING_TEXT}</span>
    </label>
  );
}

export function SuccessMessage({ children }: { children?: ReactNode }) {
  return (
    <div className="md:col-span-2 flex items-start gap-3 rounded-lg border border-secondary/40 bg-secondary/10 p-4 text-sm text-foreground">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
      <p>
        {children ??
          "Thank you — your enquiry has been received. A member of the SmartSense Technologies team will be in touch."}
      </p>
    </div>
  );
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
