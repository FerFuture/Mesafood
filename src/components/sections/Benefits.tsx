import { BENEFITS, STATS, UI } from "../../lib/constants";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Benefits() {
  return (
    <section id="benefits" className="relative py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,241,178,0.06),transparent_70%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={UI.sections.benefits.eyebrow}
            title={UI.sections.benefits.title}
            subtitle={UI.sections.benefits.subtitle}
          />
        </Reveal>

        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((b) => (
            <Reveal key={b.title}>
              <GlowCard>
                <h3 className="font-semibold text-accent">{b.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{b.description}</p>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="grid gap-10 rounded-2xl border border-border bg-bg-card/50 p-8 sm:grid-cols-3 lg:p-12">
            {STATS.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
