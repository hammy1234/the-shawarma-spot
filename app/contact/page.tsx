import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE, HOURS, MAP_URL, MAP_EMBED_SRC, ORDER_ONLINE_URL } from "@/data/site";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";

export const metadata: Metadata = {
  title: "Contact",
  description: `Find ${SITE.fullName}. Address, hours, phone. Call for takeout or catering. Order online for delivery. Grayson, Lawrenceville GA.`,
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <SectionHeader
          as="h1"
          title="Get in touch"
          subtitle="Visit us, call for takeout, or order online. For catering and general questions, give us a call."
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

            <div className="flex flex-wrap gap-3">
              <Button href={ORDER_ONLINE_URL} variant="primary" size="md">
                Order Online
              </Button>
              <Button href={`tel:${SITE.phoneRaw}`} variant="secondary" size="md">
                Call Now
              </Button>
              <Button href={MAP_URL} variant="outline" size="md">
                Get Directions
              </Button>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
            <MapPlaceholder embedSrc={MAP_EMBED_SRC} mapUrl={MAP_URL} />
          </div>
        </div>

        <div id="catering" className="mt-16 rounded-xl border border-border bg-muted-bg p-8 md:p-10">
          <h2 className="text-xl font-bold text-foreground">Catering & questions</h2>
          <p className="mt-3 text-muted">
            For catering orders and general questions, please call us at{" "}
            <a href={`tel:${SITE.phoneRaw}`} className="font-medium text-primary hover:underline">
              {SITE.phone}
            </a>
            . We'll be happy to help with menu options, timing, and pricing.
          </p>
          <Button href={`tel:${SITE.phoneRaw}`} variant="primary" size="md" className="mt-4">
            Book Catering
          </Button>
        </div>

        {/* Optional: placeholder form UI (no backend) */}
        <div className="mt-12 rounded-xl border border-dashed border-border bg-card p-8 text-center">
          <p className="text-sm text-muted">
            A contact form can be added here later. For now, call us for catering and any questions.
          </p>
        </div>
      </Section>
    </>
  );
}
