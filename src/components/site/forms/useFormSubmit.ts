import { useState } from "react";

// Static, frontend-only submit handler. POSTs JSON to the SmartSense
// Cloudflare Worker, which handles Turnstile verification and Brevo
// delivery server-side. No secrets live in the frontend.
const WORKER_URL = "https://smartsense-form-handler.smartsensetech.workers.dev/submit";

export type SubmitStatus = "idle" | "loading" | "success" | "error";

export function useFormSubmit() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  async function submit(payload: Record<string, unknown>): Promise<boolean> {
    setStatus("loading");
    setError(null);
    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      let data: { success?: boolean; error?: string } = {};
      try {
        data = await res.json();
      } catch {
        /* non-JSON response */
      }
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Submission failed");
      }
      setStatus("success");
      return true;
    } catch {
      setStatus("error");
      setError(
        "We couldn't submit your enquiry right now. Please try again, or email us directly if the problem persists.",
      );
      return false;
    }
  }

  function reset() {
    setStatus("idle");
    setError(null);
  }

  return { submit, status, error, reset };
}
