import { Bot, Globe, Mail, MessageCircle } from "lucide-react";
import { FOOTER_LINKS, UI } from "../../lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
                <Bot className="h-4 w-4 text-accent" />
              </span>
              <span className="font-bold">Mesafood</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-text-muted">{UI.footerTagline}</p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label={UI.aria.website} className="text-text-muted hover:text-accent">
                <Globe className="h-5 w-5" />
              </a>
              <a href="mailto:demo@mesafood.app" aria-label={UI.aria.email} className="text-text-muted hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" aria-label={UI.aria.whatsapp} className="text-text-muted hover:text-accent">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {UI.footerSections.product}
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.product.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-text-muted hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {UI.footerSections.company}
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-text-muted hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              {UI.footerSections.legal}
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_LINKS.legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-text-muted hover:text-accent">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-center text-sm text-text-muted">
          © {new Date().getFullYear()} Mesafood. {UI.footerRights}
        </p>
      </div>
    </footer>
  );
}
