import { TRUST_LOGOS, UI } from "../../lib/constants";
import { Reveal } from "../ui/Reveal";

export function Trust() {
  return (
    <section className="border-y border-border/50 bg-bg-secondary/30 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-text-muted">
            {UI.trustHeadline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {TRUST_LOGOS.map((name) => (
              <span
                key={name}
                className="text-center text-base font-semibold text-text-muted/60 transition-colors hover:text-text-muted sm:text-lg"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
