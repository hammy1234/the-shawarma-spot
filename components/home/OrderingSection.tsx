import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE, ORDER_ONLINE_URL, MAP_URL } from "@/data/site";
import { OFFERS } from "@/data/site";

const ctaCards = [
  { title: "Order Online", href: ORDER_ONLINE_URL, description: "Get delivery or pickup" },
  { title: "Call Now", href: `tel:${SITE.phoneRaw}`, description: SITE.phone },
  { title: "Get Directions", href: MAP_URL, description: "Find us in Grayson" },
  { title: "Book Catering", href: "/contact#catering", description: "Inquire about catering" },
];

export function OrderingSection() {
  return (
    <Section variant="muted">
      <SectionHeader
        title="How to enjoy The Shawarma Spot"
        subtitle="Dine in, take out, get it delivered, or order catering for your next event."
      />
      <p className="mt-4 text-center text-muted">
        We offer {OFFERS.join(", ").toLowerCase()}.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ctaCards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            target={card.href.startsWith("http") ? "_blank" : undefined}
            rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
          >
            <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
            <p className="mt-2 text-sm text-muted">{card.description}</p>
            <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
              Go →
            </span>
          </a>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href={ORDER_ONLINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm h-11 px-6 text-base rounded-xl min-h-[44px]"
        >
          Order Online
        </a>
        <Button href={`tel:${SITE.phoneRaw}`} variant="secondary" size="md">
          Call Now
        </Button>
        <Button href={MAP_URL} variant="outline" size="md" className="inline-flex">
          Get Directions
        </Button>
        <Button href="/contact" variant="outline" size="md">
          Book Catering
        </Button>
      </div>
    </Section>
  );
}
