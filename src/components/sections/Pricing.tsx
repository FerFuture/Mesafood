import { Check } from "lucide-react";
import { PRICING_PLANS, UI } from "../../lib/constants";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={UI.sections.pricing.eyebrow}
            title={UI.sections.pricing.title}
            subtitle={UI.sections.pricing.subtitle}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-accent bg-bg-card glow-green scale-[1.02] shadow-[0_0_60px_rgba(20,241,178,0.15)]"
                    : "border-border bg-bg-card/80 hover:border-accent/30"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-bg-primary">
                    {UI.mostPopular}
                  </span>
                )}
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{plan.description}</p>
                <p className="mt-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-text-muted">{plan.period}</span>}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  href="#demo"
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
