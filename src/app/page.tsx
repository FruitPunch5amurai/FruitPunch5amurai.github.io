import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { Skills } from "@/components/skills";
import { Work } from "@/components/work";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
