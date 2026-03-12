import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <Section variant="dark">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white/10">
          <Image
            src="/images/mezze-platter.jpg"
            alt="The Shawarma Spot - Grayson interior or team"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
            A local favorite, built on quality and community
          </h2>
          <p className="mt-4 text-lg text-white/90">
            The Shawarma Spot is a family-owned halal restaurant in Grayson. We focus on fresh ingredients,
            authentic flavor, and a welcoming environment — whether you&apos;re grabbing a quick wrap,
            sitting down for a platter, or ordering late-night.
          </p>
          <p className="mt-4 text-white/80">
            From our shawarma and butter chicken to loaded fries and tacos, everything is made to order.
            We&apos;re proud to serve the Grayson and Lawrenceville area with dine-in, takeout, delivery,
            and catering.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/about" variant="primary" size="md">
              Our story
            </Button>
            <Button href="/menu" variant="outlineLight" size="md">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
