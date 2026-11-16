import type { Project } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

function publicSrc(src: string) {
  if (/^(?:[a-z]+:)?\/\//i.test(src) || src.startsWith("data:")) {
    return src;
  }

  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const path = src.startsWith("/") ? src : `/${src}`;
  return `${base}${path}`;
}

function EntryRow({ entry, index }: { entry: Project; index: number }) {
  const image = entry.image?.trim();
  const body = (
    <>
      <span className="font-mono text-[11px] tracking-[0.18em] text-muted">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-serif text-4xl tracking-tight sm:text-5xl">{entry.title}</h3>
        <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
          {entry.summary.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        {entry.tags.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted">
            {entry.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        ) : null}
        {entry.note ? (
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-accent">{entry.note}</p>
        ) : null}
      </div>
      <span className="text-sm text-muted md:text-right">{entry.year}</span>
    </>
  );

  const textClassName =
    "grid gap-4 md:grid-cols-[3.5rem_minmax(0,1fr)_auto] md:items-start md:gap-8";
  const className = image
    ? "grid grid-cols-[8.5rem_minmax(0,1fr)] items-start gap-4 px-6 py-10 transition-colors hover:bg-raised sm:grid-cols-[14rem_minmax(0,1fr)] sm:gap-6 sm:px-10 md:grid-cols-[18rem_minmax(0,1fr)] md:gap-10 lg:px-16"
    : `${textClassName} px-6 py-10 transition-colors sm:px-10 lg:px-16 hover:bg-raised`;
  const content = image ? (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element -- public file or external URL, not the image optimizer */}
      <img
        src={publicSrc(image)}
        alt={entry.imageAlt?.trim() || entry.title}
        className="h-auto w-full border border-line"
      />
      <div className={textClassName}>{body}</div>
    </>
  ) : (
    body
  );

  return (
    <li className="border-t border-line">
      {entry.href ? (
        <a href={entry.href} className={className} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <article className={className}>{content}</article>
      )}
    </li>
  );
}

export function EntrySection({
  id,
  index,
  title,
  intro,
  entries,
  empty,
}: {
  id: string;
  index: string;
  title: string;
  intro?: string;
  entries: Project[];
  empty?: string;
}) {
  return (
    <section id={id} className="pb-8">
      <div className="px-6 sm:px-10 lg:px-16">
        <SectionHeading index={index} title={title} intro={intro} />
      </div>
      {entries.length > 0 ? (
        <ol>
          {entries.map((entry, entryIndex) => (
            <EntryRow key={entry.title} entry={entry} index={entryIndex} />
          ))}
        </ol>
      ) : empty ? (
        <p className="max-w-xl px-6 text-base leading-relaxed text-muted sm:px-10 lg:px-16">
          {empty}
        </p>
      ) : null}
    </section>
  );
}
