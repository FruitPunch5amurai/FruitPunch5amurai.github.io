import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  const [first, ...rest] = site.name.split(" ");
  const last = rest.join(" ");

  return (
    <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-28">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">{site.role}</p>
      <h1 className="mt-6 max-w-5xl font-serif text-[clamp(4.25rem,11vw,8rem)] leading-[0.84] tracking-[-0.04em]">
        {first}
        {last ? <span className="mt-1 block italic">{last}</span> : null}
      </h1>
      <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
        {site.summary}
      </p>
      <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-xs uppercase tracking-[0.18em]">
        <Link href="/#work" className="inline-flex items-center gap-2 hover:text-accent">
          Professional work <span aria-hidden="true">→</span>
        </Link>
        <Link href="/#projects" className="inline-flex items-center gap-2 hover:text-accent">
          Projects <span aria-hidden="true">→</span>
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 text-muted hover:text-ink"
        >
          Contact <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
