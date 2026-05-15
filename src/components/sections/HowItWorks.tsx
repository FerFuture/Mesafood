import { ClipboardList, LineChart, Printer, UtensilsCrossed } from "lucide-react";
import { STEPS, UI } from "../../lib/constants";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const icons = [UtensilsCrossed, ClipboardList, Printer, LineChart];

export function HowItWorks() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={UI.sections.howItWorks.eyebrow}
            title={UI.sections.howItWorks.title}
            subtitle={UI.sections.howItWorks.subtitle}
          />
        </Reveal>

        <div className="relative">
          <div
            className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-accent via-accent/40 to-transparent lg:left-1/2 lg:block lg:-translate-x-px"
            aria-hidden
          />
          <div className="grid gap-12 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step.step} delay={i * 0.1}>
                  <div className="relative flex gap-4 lg:flex-col lg:items-center lg:text-center">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 text-accent lg:mx-auto">
                      <Icon className="h-5 w-5" aria-hidden />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-bg-primary">
                        {step.step}
                      </span>
                    </div>
                    <div className="pt-1 lg:pt-4">
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="mt-2 text-sm text-text-muted">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
