import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { FeaturedItems } from "@/components/home/FeaturedItems";
import { AboutPreview } from "@/components/home/AboutPreview";
import { OrderingSection } from "@/components/home/OrderingSection";
import { Gallery } from "@/components/home/Gallery";
import { LocationHours } from "@/components/home/LocationHours";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustSection />
      <FeaturedItems />
      <AboutPreview />
      <OrderingSection />
      <Gallery />
      <LocationHours />
      <CtaBand />
    </>
  );
}
