type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  /** Use on dark sections so subtitle is muted but visible. */
  dark?: boolean;
  /** Heading level. Use "h1" for the main page title (one per page). */
  as?: "h1" | "h2";
};

export function SectionHeader({ title, subtitle, dark, as: Tag = "h2" }: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Tag className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</Tag>
      {subtitle && (
        <p
          className={`mt-3 text-lg ${
            dark ? "text-white/80" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
