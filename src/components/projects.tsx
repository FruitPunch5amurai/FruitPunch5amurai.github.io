import { site } from "@/content/site";
import { EntrySection } from "@/components/entry-section";

export function Projects() {
  return (
    <EntrySection
      id="projects"
      index="03"
      title="Projects"
      entries={site.projects}
      empty="Add projects in src/content/site.ts. Each string in summary becomes a bullet. Set image to a file in public, such as /projects/photo.jpg, to show it on the left."
    />
  );
}
