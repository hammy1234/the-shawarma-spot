import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.fullName}: family-owned halal restaurant in Grayson. Fresh ingredients, authentic flavor, and a welcoming community spot.`,
};

const values = [
  { title: "Halal & fresh", description: "We use halal ingredients and prepare food fresh to order every time." },
  { title: "Authentic flavor", description: "Recipes and techniques that honor traditional Middle Eastern and South Asian flavors." },
  { title: "Community first", description: "We're a local spot for Grayson and Lawrenceville — families, friends, and late-night cravings." },
  { title: "Catering ready", description: "From office lunches to events, we can help with catering — just give us a call." },
];

export default function AboutPage() {
  return (
    <>
      <Section variant="dark" fullWidth noPadding>
        <div className="relative min-h-[280px] py-20 md:py-28">
          <Image
            src="/images/mezze-platter.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/65" />
          <div className="relative z-10 text-center text-background px-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our story</h1>
            <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
              Family-owned halal food in the heart of Grayson.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">Who we are</h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            {SITE.description}
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            We opened The Shawarma Spot to bring fresh, authentic halal food to the Grayson area.
            From our shawarma and butter chicken to loaded fries and tacos, every dish is made to order
            with quality ingredients. We offer dine-in, takeout, delivery, and catering — whether you
            need a quick wrap at lunch or a platter for the family, we're here for you.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            As a family-owned restaurant, we care about the community we serve. We're proud to be
            a local favorite and a go-to spot for late-night eats and weekend meals alike.
          </p>
        </div>

        <div className="mt-16">
          <SectionHeader title="What we stand for" subtitle="Quality, authenticity, and a welcoming experience." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-muted">{v.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/menu" variant="primary" size="lg">
            View Menu
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact & catering
          </Button>
        </div>
      </Section>
    </>
  );
}
