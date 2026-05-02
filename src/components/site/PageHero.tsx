export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl container-px py-20 md:py-28">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{eyebrow}</p>
        )}
        <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
