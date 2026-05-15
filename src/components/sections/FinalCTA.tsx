import { UI } from "../../lib/constants";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  return (
    <section id="demo" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-bg-card px-4 py-12 text-center sm:rounded-3xl sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {UI.sections.finalCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-text-muted sm:text-lg">
                {UI.sections.finalCta.subtitle}
              </p>
              <Button href="#demo" variant="primary" className="mt-8 w-full max-w-xs !px-8 !py-3.5 text-base glow-green sm:mt-10 sm:w-auto sm:!px-10 sm:!py-4">
                {UI.requestDemo}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
