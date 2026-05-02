import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

// Generic submit handler stub — designed to later POST to Brevo (or a
// server endpoint that proxies to Brevo) and verify the Turnstile token.
export function useFormSubmit(formName: string) {
  const navigate = useNavigate();
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(payload: Record<string, unknown>) {
    setStatus("loading");
    setError(null);
    try {
      // TODO: integrate with Brevo + verify Turnstile server-side
      // const res = await fetch("/api/forms/" + formName, { method: "POST", body: JSON.stringify(payload) });
      // if (!res.ok) throw new Error("Submission failed");
      await new Promise((r) => setTimeout(r, 700));
      console.info("[SmartSense form]", formName, payload);
      navigate({ to: "/thank-you" });
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  }

  return { submit, status, error };
}
