import { type ReactNode } from "react";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  /** Light (default), dark (dark bg + light text), or muted (subtle gray bg) */
  variant?: "light" | "dark" | "muted";
  /** If true, content is not wrapped in Container (e.g. full-bleed hero). */
  fullWidth?: boolean;
  /** If true, no vertical padding (use for full-bleed banners). */
  noPadding?: boolean;
};

export function Section({
  children,
  className = "",
  variant = "light",
  fullWidth = false,
  noPadding = false,
}: SectionProps) {
  const variants = {
    light: "bg-background text-foreground",
    dark: "bg-foreground text-background",
    muted: "bg-muted-bg text-foreground",
  };
  const padding = noPadding ? "py-0" : "py-16 md:py-24";
  return (
    <section
      className={`${padding} ${variants[variant]} ${className}`}
    >
      {fullWidth ? children : <Container>{children}</Container>}
    </section>
  );
}
