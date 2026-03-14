import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FEATURED_ITEMS } from "@/data/menu";
import { ORDER_ONLINE_URL } from "@/data/site";

export function FeaturedItems() {
  return (
    <Section>
      <SectionHeader
        title="Customer favorites"
        subtitle="Some of our most-loved dishes — fresh off the grill and made to order."
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURED_ITEMS.map((item) => (
          <article
            key={item.id}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted-bg">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
              <p className="mt-1 text-sm text-muted line-clamp-2">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button href="/menu" variant="outline" size="sm">
                  View Menu
                </Button>
                <a
                  href={ORDER_ONLINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm h-9 px-4 text-sm rounded-lg"
                >
                  Order Online
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
