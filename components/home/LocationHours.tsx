import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE, HOURS, MAP_URL, MAP_EMBED_SRC } from "@/data/site";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";

export function LocationHours() {
  return (
    <Section variant="muted">
      <SectionHeader
        title="Find us"
        subtitle="We're on Grayson Highway in Lawrenceville. Stop by for dine-in or call ahead for takeout."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Address</h3>
            <p className="mt-2 text-lg font-medium text-foreground">{SITE.address}</p>
            <Button href={MAP_URL} variant="outline" size="sm" className="mt-3">
              Get Directions
            </Button>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Phone</h3>
            <a href={`tel:${SITE.phoneRaw}`} className="mt-2 block text-lg font-medium text-primary hover:underline">
              {SITE.phone}
            </a>
            <Button href={`tel:${SITE.phoneRaw}`} variant="outline" size="sm" className="mt-3">
              Call Now
            </Button>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">Hours</h3>
            <ul className="mt-2 space-y-1 text-foreground">
              {HOURS.map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span>{day}</span>
                  <span>{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
          <MapPlaceholder embedSrc={MAP_EMBED_SRC} mapUrl={MAP_URL} />
        </div>
      </div>
    </Section>
  );
}
