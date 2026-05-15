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
    <div className={`max-w-2xl ${alignClass} mb-14`}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
