import type { ReactNode } from "react";
import { SHOWCASE_ITEMS, UI } from "../../lib/constants";
import { AnalyticsMockup } from "../mockups/AnalyticsMockup";
import { InventoryMockup } from "../mockups/InventoryMockup";
import { KitchenScreenMockup } from "../mockups/KitchenScreenMockup";
import { WaiterPanelMockup } from "../mockups/WaiterPanelMockup";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

const mockups: Record<string, ReactNode> = {
  waiter: <WaiterPanelMockup />,
  kitchen: <KitchenScreenMockup />,
  analytics: <AnalyticsMockup />,
  inventory: <InventoryMockup />,
};

export function Showcase() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={UI.sections.showcase.eyebrow}
            title={UI.sections.showcase.title}
            subtitle={UI.sections.showcase.subtitle}
          />
        </Reveal>

        <div className="space-y-24 lg:space-y-32">
          {SHOWCASE_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <div
                className={`grid min-w-0 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
                  item.reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={`min-w-0 ${item.reverse ? "lg:[direction:ltr]" : ""}`}>
                  <h3 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-text-muted">{item.description}</p>
                  <ul className="mt-6 space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-text-muted">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`flex min-w-0 w-full max-w-full justify-center px-0 ${item.reverse ? "lg:[direction:ltr]" : ""}`}
                >
                  <div className="w-full max-w-full min-w-0">{mockups[item.id]}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
