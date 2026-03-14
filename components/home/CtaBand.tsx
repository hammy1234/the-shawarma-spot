import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ORDER_ONLINE_URL } from "@/data/site";

export function CtaBand() {
  return (
    <Section variant="dark">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
          Hungry? Stop by The Shawarma Spot today.
        </h2>
        <p className="mt-3 text-lg text-white/80">
          Order online for pickup or delivery, or drop in for dine-in and takeout.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={ORDER_ONLINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm h-12 px-8 text-lg rounded-xl min-h-[48px] w-full sm:w-auto"
          >
            Order Online
          </a>
          <Button href="/menu" variant="outlineLight" size="lg" className="w-full sm:w-auto">
            View Menu
          </Button>
        </div>
      </div>
    </Section>
  );
}
