export function SectionHeading({
  index,
  title,
  intro,
}: {
  index: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="font-serif text-4xl tracking-tight sm:text-5xl">{title}</h2>
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted">{index}</span>
      </div>
      {intro ? <p className="mt-5 text-base leading-relaxed text-muted">{intro}</p> : null}
    </div>
  );
}
