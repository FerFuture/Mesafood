import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalDocumentProps = {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  sections: LegalSection[];
};

export function LegalDocument({ title, subtitle, lastUpdated, sections }: LegalDocumentProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-bg-primary text-text-primary antialiased">
      <Navbar />
      <main className="pb-16 pt-28 sm:pt-32">
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Volver al inicio
          </Link>

          <header className="mt-8 border-b border-border pb-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
            <p className="mt-3 text-base text-text-muted sm:text-lg">{subtitle}</p>
            {lastUpdated && (
              <p className="mt-3 text-sm text-text-muted">Última actualización: {lastUpdated}</p>
            )}
          </header>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-semibold text-text-primary">{section.title}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-relaxed text-text-muted">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-text-muted">
                    {section.bullets.map((item) => (
                      <li key={item} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
