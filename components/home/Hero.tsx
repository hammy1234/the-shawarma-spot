import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SITE, ORDER_ONLINE_URL } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Image
        src="/images/new-fresh-shawarma.jpg"
        alt="Fresh shawarma and halal food at The Shawarma Spot in Grayson"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/60" aria-hidden />
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center text-background">
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground">
            Halal
          </span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            Family-Owned
          </span>
          <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            Dine-In · Takeout · Delivery
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Fresh Shawarma, Bold Flavor, Right Here in Grayson
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
          Serving halal shawarma wraps, platters, burgers, fries, and more in a modern fast-casual setting.
        </p>
        <p className="mt-2 text-sm text-white/80">
          {SITE.location} / Lawrenceville area
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
          <Button href={`tel:${SITE.phoneRaw}`} variant="outlineLight" size="lg" className="w-full sm:w-auto">
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
}
