import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MENU_CATEGORIES } from "@/data/menu";
import { SITE, ORDER_ONLINE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Menu",
  description: `Full menu at ${SITE.fullName}: halal shawarma bowls, wraps, sandwiches, sides, and more. Fresh and made to order in Grayson.`,
};

export default function MenuPage() {
  return (
    <>
      {/* Featured highlight */}
      <Section variant="dark" fullWidth noPadding>
        <div className="relative h-48 md:h-64">
          <Image
            src="/images/mezze-platter.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-background">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Menu</h1>
            <p className="mt-2 text-white/90">Halal bowls, wraps, sandwiches & sides — made to order in Grayson.</p>
            <Button href={ORDER_ONLINE_URL} variant="primary" size="md" className="mt-4">
              Order Online
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          title="Full menu"
          subtitle="Everything is made fresh when you order. Dine in, takeout, or get it delivered."
        />

        {MENU_CATEGORIES.map((category) => (
          <div key={category.id} id={category.id} className="mt-14 scroll-mt-24">
            <h2 className="text-2xl font-bold text-foreground border-b border-primary pb-2 mb-6">
              {category.name}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col rounded-xl border border-border bg-card p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
                >
                  <div>
                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                    {item.description && (
                      <p className="mt-1 text-sm text-muted">{item.description}</p>
                    )}
                  </div>
                  <span className="mt-2 font-semibold text-primary sm:mt-0 sm:shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={ORDER_ONLINE_URL} variant="primary" size="lg">
            Order Online
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Catering inquiries
          </Button>
        </div>
      </Section>
    </>
  );
}
