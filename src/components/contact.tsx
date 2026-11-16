import { site } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";

const mailtoScript = `
if (!window.__contactMailto) {
  window.__contactMailto = true;
  document.addEventListener("submit", function (event) {
    var form = event.target;
    if (!form || !form.hasAttribute || !form.hasAttribute("data-mailto")) return;
    event.preventDefault();
    var data = new FormData(form);
    var from = String(data.get("email") || "").trim();
    var subject = String(data.get("subject") || "").trim();
    var message = String(data.get("message") || "").trim();
    var body = "From: " + from + "\\n\\n" + message;
    var recipient = String(form.getAttribute("action") || "").split("?")[0];
    var link = document.createElement("a");
    link.href = recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, true);
}
`;

export function Contact() {
  return (
    <section id="contact" className="border-t border-line px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <script dangerouslySetInnerHTML={{ __html: mailtoScript }} />
      <SectionHeading index="05" title="Contact" />
      {site.email ? (
        <ContactForm />
      ) : (
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          Add your email in <code className="text-ink">src/content/site.ts</code> so people can
          reach you from this form.
        </p>
      )}
      {site.availability ? (
        <p className="mt-10 flex items-center gap-2 text-sm text-muted lg:hidden">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
          {site.availability}
        </p>
      ) : null}
    </section>
  );
}
