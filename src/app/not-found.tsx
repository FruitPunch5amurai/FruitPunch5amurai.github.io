import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 py-24 sm:px-10 lg:px-16">
      <p className="text-xs uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-4 max-w-xl font-serif text-5xl tracking-tight sm:text-6xl">
        This page is not on the site.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
        The address may be out of date. The rest of the portfolio is still here.
      </p>
      <Link href="/" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] hover:text-accent">
        Back home <span aria-hidden="true">→</span>
      </Link>
    </main>
  );
}
