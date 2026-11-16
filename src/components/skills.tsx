import { site } from "@/content/site";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="border-t border-line px-6 py-20 transition-colors hover:bg-raised sm:px-10 lg:px-16 lg:py-28">
      <SectionHeading index="04" title="Skills" />
      <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
        {site.skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs uppercase tracking-[0.18em] text-muted">{group.title}</h3>
            {group.skills.length > 0 ? (
              <ul className="mt-6">
                {group.skills.map((skill) => (
                  <li key={skill} className="border-t border-line py-3 text-base">
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 text-base text-muted">Add skills in src/content/site.ts.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
