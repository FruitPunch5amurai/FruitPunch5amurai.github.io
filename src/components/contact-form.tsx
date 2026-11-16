import { site } from "@/content/site";

const fieldClassName =
  "mt-2 w-full border border-line bg-raised px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-accent";

export function ContactForm() {
  return (
    <form
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      data-mailto=""
      className="max-w-xl"
    >
      <p className="max-w-xl text-base leading-relaxed text-muted">
        Send a note to {site.email}. Submitting opens your email app with this message ready to send.
      </p>

      <div className="mt-8">
        <label htmlFor="email" className="text-[11px] uppercase tracking-[0.18em] text-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className={fieldClassName}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="subject" className="text-[11px] uppercase tracking-[0.18em] text-muted">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What is this about?"
          className={fieldClassName}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="text-[11px] uppercase tracking-[0.18em] text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Write your message"
          className={`${fieldClassName} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-8 border border-line px-5 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:border-accent hover:text-accent"
      >
        Send email
      </button>
    </form>
  );
}
