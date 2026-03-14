import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { OrderOnlineButton } from "@/components/order/OrderOnlineButton";

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
          <OrderOnlineButton size="lg" className="w-full sm:w-auto" />
          <Button href="/menu" variant="outlineLight" size="lg" className="w-full sm:w-auto">
            View Menu
          </Button>
        </div>
      </div>
    </Section>
  );
}
