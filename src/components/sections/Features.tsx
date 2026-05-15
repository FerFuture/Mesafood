import { motion, useReducedMotion } from "framer-motion";
import { FEATURES, UI } from "../../lib/constants";
import { staggerContainer, viewportOnce } from "../../lib/motion";
import { GlowCard } from "../ui/GlowCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";

export function Features() {
  const reduced = useReducedMotion();

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            eyebrow={UI.sections.features.eyebrow}
            title={UI.sections.features.title}
            subtitle={UI.sections.features.subtitle}
          />
        </Reveal>

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={reduced ? undefined : staggerContainer}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={reduced ? undefined : { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <GlowCard className="h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{feature.description}</p>
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
