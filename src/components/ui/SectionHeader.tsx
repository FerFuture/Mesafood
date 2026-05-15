interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl px-0.5 ${alignClass} mb-10 sm:mb-14`}>
      {eyebrow && (
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-accent sm:text-xs">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-text-muted sm:mt-4 sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
