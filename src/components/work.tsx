import { site } from "@/content/site";
import { EntrySection } from "@/components/entry-section";

export function Work() {
  return (
    <EntrySection
      id="work"
      index="02"
      title="Professional Work"
      intro="History of professional work"
      entries={site.experience}
    />
  );
}
