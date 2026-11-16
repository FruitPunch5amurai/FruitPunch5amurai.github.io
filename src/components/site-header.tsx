import Link from "next/link";
import { site } from "@/content/site";
import { MobileNav } from "@/components/mobile-nav";
import { SocialLinks } from "@/components/social-links";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Work" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

const headshot = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/projects/CroppedHeadshot.png`;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 flex flex-col border-b border-line bg-canvas lg:h-svh lg:border-r lg:border-b-0">
      <div className="flex items-center justify-between px-6 py-5 lg:px-8 lg:pt-10">
        <Link href="/" className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element -- static public portrait, not the image optimizer */}
          <img
            src={headshot}
            alt=""
            className="size-20 rounded-full object-cover lg:size-56"
          />
          <span className="sr-only">{site.name}, home</span>
        </Link>
        <MobileNav links={links} />
      </div>

      <div className="px-6 pb-5 lg:px-8 lg:pt-6 lg:pb-0">
        <p className="text-sm text-muted">{site.role}</p>
        <p className="mt-6 text-[11px] uppercase tracking-[0.18em] text-muted">Socials</p>
        <SocialLinks className="mt-3" />
      </div>

      <nav aria-label="Primary" className="hidden px-8 lg:block">
        <ul className="mt-10 space-y-4">
          {links.map((link, index) => (
            <li key={link.href}>
              <Link href={link.href} className="group flex items-baseline gap-3 text-lg">
                <span className="font-mono text-[11px] tracking-wider text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="border-b border-transparent transition-colors group-hover:border-accent">
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto hidden px-8 pb-10 lg:block">
        {site.availability ? (
          <p className="flex items-center gap-2 text-sm text-muted">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            {site.availability}
          </p>
        ) : null}
        {site.location ? <p className="mt-2 text-sm text-muted">{site.location}</p> : null}
      </div>
    </header>
  );
}
