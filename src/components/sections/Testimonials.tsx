import { TESTIMONIALS, UI } from "../../lib/constants";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={UI.sections.testimonials.eyebrow}
            title={UI.sections.testimonials.title}
            subtitle={UI.sections.testimonials.subtitle}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <blockquote className="glass-card flex h-full flex-col rounded-2xl p-6 transition-shadow hover:shadow-[0_8px_40px_rgba(20,241,178,0.1)]">
                <p className="flex-1 text-sm leading-relaxed text-text-muted">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 flex items-center gap-3 border-t border-border pt-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                    {t.initials}
                  </span>
                  <div>
                    <cite className="not-italic font-semibold text-sm">{t.name}</cite>
                    <p className="text-xs text-text-muted">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
