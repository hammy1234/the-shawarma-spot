import { SITE } from "@/data/site";

/**
 * LocalBusiness + Restaurant structured data for SEO.
 * Rendered on the home page.
 */
export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.fullName,
    description: SITE.description,
    url: "https://theshawarmaspotgrayson.com", // Update with your real domain
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1417 Grayson Hwy Ste C",
      addressLocality: "Lawrenceville",
      addressRegion: "GA",
      postalCode: "30045",
    },
    openingHours: "Mo-Su 11:00-21:00",
    servesCuisine: ["Middle Eastern", "Mediterranean", "Halal"],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
