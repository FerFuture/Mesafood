import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { getPlanWhatsAppUrl, PRICING_PLANS, UI } from "../../lib/constants";
import {
  detectPricingRegion,
  formatPlanPrice,
  type PricingRegion,
} from "../../lib/pricing";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const DEFAULT_SELECTED_INDEX = PRICING_PLANS.findIndex((plan) => plan.highlighted);

function getDisplayedPrice(plan: (typeof PRICING_PLANS)[number], region: PricingRegion) {
  if (plan.priceKey === "custom") {
    return plan.price;
  }

  return formatPlanPrice(region, plan.priceKey);
}

export function Pricing() {
  const [selectedIndex, setSelectedIndex] = useState(
    DEFAULT_SELECTED_INDEX >= 0 ? DEFAULT_SELECTED_INDEX : 0,
  );
  const [region, setRegion] = useState<PricingRegion>("AR");

  useEffect(() => {
    let active = true;

    detectPricingRegion().then((detected) => {
      if (active) {
        setRegion(detected);
      }
    });

    return () => {
      active = false;
    };
  }, []);

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
          {PRICING_PLANS.map((plan, i) => {
            const isSelected = selectedIndex === i;
            const price = getDisplayedPrice(plan, region);

            return (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={`Seleccionar plan ${plan.name}`}
                  onClick={() => setSelectedIndex(i)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedIndex(i);
                    }
                  }}
                  className={`relative flex h-full cursor-pointer flex-col rounded-2xl border p-6 transition-all sm:p-8 ${
                    isSelected
                      ? "border-accent bg-bg-card shadow-[0_0_60px_rgba(20,241,178,0.15)] lg:scale-[1.02] lg:glow-green"
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
                    <span className="text-4xl font-bold">{price}</span>
                    {plan.period && <span className="text-text-muted">{plan.period}</span>}
                  </p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={getPlanWhatsAppUrl(plan.whatsappMessage)}
                    variant={isSelected ? "primary" : "secondary"}
                    className="mt-8 w-full"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
