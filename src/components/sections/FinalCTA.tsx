import { UI } from "../../lib/constants";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export function FinalCTA() {
  return (
    <section id="demo" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-bg-card px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
              aria-hidden
            />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                {UI.sections.finalCta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
                {UI.sections.finalCta.subtitle}
              </p>
              <Button href="#demo" variant="primary" className="mt-10 !px-10 !py-4 text-base glow-green">
                {UI.requestDemo}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
