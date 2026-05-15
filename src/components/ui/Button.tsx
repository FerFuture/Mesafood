import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant?: Variant;
  children: ReactNode;
  href?: string;
  className?: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg-primary font-semibold hover:bg-accent-hover glow-green hover:scale-[1.02] active:scale-[0.98]",
  secondary:
    "border border-border bg-bg-card/80 text-text-primary hover:border-accent/50 hover:bg-bg-card",
  ghost: "text-text-muted hover:text-accent bg-transparent",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  href,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http");
    const { type: _type, ...anchorProps } = props as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
