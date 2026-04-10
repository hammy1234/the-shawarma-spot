import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Image paths match files in public/images/ */
const GALLERY_IMAGES = [
  { src: "/images/butter-chicken.jpg", alt: "Butter chicken at The Shawarma Spot" },
  { src: "/images/shawarma-loaded-fries.jpg", alt: "Shawarma loaded fries" },
  { src: "/images/philly-cheesesteak-burger.jpg", alt: "Philly cheesesteak burger" },
  { src: "/images/tacos.jpg", alt: "Tacos" },
  { src: "/images/pics/Drum-Sticks-2.jpg", alt: "Fried Drumsticks" },
  { src: "/images/pics/Tenders.jpg", alt: "Crispy Chicken Tenders" },
];

export function Gallery() {
  return (
    <Section>
      <SectionHeader
        title="See the food"
        subtitle="Fresh, authentic halal dishes made to order in Grayson."
      />
      <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {GALLERY_IMAGES.map((img, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-xl bg-muted-bg transition-transform hover:scale-[1.02]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
