import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-3 border-t border-line px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
      <p>© {site.name}</p>
      <p>Next.js, TypeScript, and Node.js. Hosted on GitHub Pages.</p>
    </footer>
  );
}
