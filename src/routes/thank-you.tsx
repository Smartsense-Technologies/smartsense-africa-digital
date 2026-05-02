import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You | SmartSense Technologies" },
      { name: "description", content: "Thank you for contacting SmartSense Technologies." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-3xl container-px py-32 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 border border-white/20">
          <CheckCircle2 className="h-8 w-8 text-cyan" />
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold">Thank You for Contacting SmartSense</h1>
        <p className="mt-4 text-white/80 text-lg">
          We have received your enquiry. A member of the SmartSense Technologies team will review your submission and respond as appropriate.
        </p>
        <Link to="/" className="mt-8 inline-flex items-center rounded-md bg-accent-gradient px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow hover:opacity-95">
          Return to Home
        </Link>
      </div>
    </section>
  );
}
