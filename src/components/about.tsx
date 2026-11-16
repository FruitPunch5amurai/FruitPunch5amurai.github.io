import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-20 transition-colors hover:bg-raised sm:px-10 lg:px-16 lg:py-28">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.8fr)] lg:gap-20">
        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-muted">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] text-muted">Focus</h3>
          <ul className="mt-6 space-y-3">
            {site.focus.map((item, index) => (
              <li key={item} className="flex items-baseline gap-4 border-t border-line pt-3">
                <span className="font-mono text-[11px] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-2xl">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
