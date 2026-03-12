/**
 * Site-wide constants for The Shawarma Spot - Grayson.
 * Update ordering links, map URL, and social links here.
 */

export const SITE = {
  name: "The Shawarma Spot",
  location: "Grayson",
  fullName: "The Shawarma Spot - Grayson",
  tagline: "Fresh Shawarma, Bold Flavor, Right Here in Grayson",
  description:
    "At The Shawarma Spot, we serve fresh, authentic halal food with a commitment to quality and community. Our goal is to bring people together through delicious food and a welcoming experience.",
  address: "1417 Grayson Hwy Ste C, Lawrenceville, GA 30045",
  phone: "(678) 580-2516",
  phoneRaw: "6785802516",
  email: "", // optional, for contact form or display
} as const;

export const HOURS = [
  { day: "Sunday", hours: "11 AM – 9 PM" },
  { day: "Monday", hours: "11 AM – 9 PM" },
  { day: "Tuesday", hours: "11 AM – 9 PM" },
  { day: "Wednesday", hours: "11 AM – 9 PM" },
  { day: "Thursday", hours: "11 AM – 9 PM" },
  { day: "Friday", hours: "11 AM – 9 PM" },
  { day: "Saturday", hours: "11 AM – 9 PM" },
] as const;

/** Replace with your actual ordering URL (Uber Eats, DoorDash, Grubhub, or your own). */
export const ORDER_ONLINE_URL = "https://www.ubereats.com/store/the-shawarma-spot-grayson"; // placeholder

/** Google Maps URL for directions. Replace with your exact place link. */
export const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=1417+Grayson+Hwy+Ste+C+Lawrenceville+GA+30045";

/** Google Maps embed iframe src (optional). Get from Google Maps → Share → Embed. */
export const MAP_EMBED_SRC = ""; // e.g. "https://www.google.com/maps/embed?pb=..."

/** Social links — replace # with your profiles. Leave as # for placeholder. */
export const SOCIAL = {
  facebook: "https://www.facebook.com/theshawarmaspot",
  instagram: "https://www.instagram.com/theshawarmaspot",
  twitter: "",
} as const;

/** Delivery / ordering platform links — replace with your store links when ready. */
export const ORDERING_LINKS = {
  uberEats: "https://www.ubereats.com/store/the-shawarma-spot-grayson", // placeholder
  doorDash: "https://www.doordash.com/store/the-shawarma-spot-grayson", // placeholder
  grubhub: "https://www.grubhub.com/restaurant/the-shawarma-spot-grayson", // placeholder
} as const;

export const OFFERS = [
  "Dine-in",
  "Takeout",
  "Delivery",
  "Catering",
  "Online ordering",
] as const;
