import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { UI, WHATSAPP_URL } from "../../lib/constants";
import { AdminDashboardMockup } from "../mockups/AdminDashboardMockup";
import { Button } from "../ui/Button";
import { Particles } from "../ui/Particles";
import { Reveal } from "../ui/Reveal";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 gradient-mesh" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-bg-secondary blur-3xl"
        aria-hidden
      />
      <Particles />

      <div className="relative mx-auto grid min-w-0 max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="min-w-0">
          <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent sm:px-4">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {UI.hero.badge}
          </p>
          <h1 className="text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {UI.hero.title}{" "}
            <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent">
              {UI.hero.titleHighlight}
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base text-text-muted sm:mt-6 sm:text-lg">{UI.hero.subtitle}</p>
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap">
            <Button href="#demo" variant="primary" className="w-full sm:w-auto">
              {UI.requestDemo}
            </Button>
            <Button href={WHATSAPP_URL} variant="secondary" className="!gap-2 w-full sm:w-auto">
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
              <span className="text-center">{UI.contactWhatsApp}</span>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full min-w-0 max-w-2xl lg:mx-0">
          <motion.div
            className="relative w-full"
            animate={reduced ? undefined : { y: [-6, 6, -6] }}
            transition={
              reduced ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div
              className="pointer-events-none absolute -inset-4 rounded-3xl bg-accent/[0.07] blur-2xl"
              aria-hidden
            />
            <AdminDashboardMockup />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
