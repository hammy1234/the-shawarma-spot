import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE } from "@/data/site";

const highlights = [
  { title: "Fresh ingredients", description: "We source quality ingredients for every dish." },
  { title: "Made to order", description: "Your meal is prepared fresh when you order." },
  { title: "Generous portions", description: "Hearty, satisfying portions that hit the spot." },
  { title: "Fast service", description: "Quick turnaround without sacrificing quality." },
  { title: "Family-owned", description: "A local spot run by people who care." },
];

export function TrustSection() {
  return (
    <Section variant="muted">
      <SectionHeader
        title="Authentic halal food, done right"
        subtitle={SITE.description}
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ title, description }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-muted">{description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
