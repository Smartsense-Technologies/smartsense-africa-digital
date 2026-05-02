export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-3 text-base md:text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
