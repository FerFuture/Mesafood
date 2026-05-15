import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className = "" }: GlowCardProps) {
  return (
    <div
      className={`group rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_32px_rgba(20,241,178,0.12)] ${className}`}
    >
      {children}
    </div>
  );
}
