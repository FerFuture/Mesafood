import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

function formatValue(n: number, suffix: string): string {
  if (suffix === "%") return `${Math.round(n)}%`;
  if (suffix === "+") {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M+`;
    if (n >= 1_000) return `${Math.round(n / 1_000)}K+`;
    return `${Math.round(n)}+`;
  }
  return `${Math.round(n)}${suffix}`;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(`${prefix}0${suffix === "%" ? "%" : suffix}`);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(`${prefix}${formatValue(value, suffix)}`);
      return;
    }
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${prefix}${formatValue(v, suffix)}`),
    });
    return () => controls.stop();
  }, [inView, value, suffix, prefix, reduced]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-accent sm:text-5xl">{display}</p>
      <p className="mt-2 text-sm text-text-muted">{label}</p>
    </div>
  );
}
