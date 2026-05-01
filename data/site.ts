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
  phone: "(470) 478-3389",
  phoneRaw: "+14704783389",
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

/** Uber Eats store link (kept for backwards compatibility; prefer ORDERING_PLATFORMS). */
export const ORDER_ONLINE_URL =
  "https://www.ubereats.com/store/the-shawarma-spot-grayson/X5sq8ZTpQPasndC-L48cCA";

/** Delivery platform URLs — edit here to update links across the order modal. */
export const ORDERING_PLATFORMS = [
  {
    name: "Uber Eats",
    url: "https://www.ubereats.com/store/the-shawarma-spot-grayson/X5sq8ZTpQPasndC-L48cCA",
  },
  {
    name: "Grubhub",
    url: "https://www.grubhub.com/restaurant/the-shawarma-spot-1417-grayson-hwy-lawrenceville/12987248?utm_source=grubhub_iosapp&utm_medium=content_owned&utm_campaign=menushare&utm_content=share-link",
  },
  {
    name: "DoorDash",
    url: "https://www.doordash.com/store/the-shawarma-spot-grayson-1417-grayson-hwy-ste-c-ste-c-lawrenceville-35828421/79356579/?aw=QGJElAVdC1fDRGdG&utm_source=mx_share",
  },
] as const;

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

/** @deprecated Use ORDERING_PLATFORMS instead. */
export const ORDERING_LINKS = {
  uberEats: ORDER_ONLINE_URL,
  doorDash: ORDERING_PLATFORMS[2].url,
  grubhub: ORDERING_PLATFORMS[1].url,
} as const;

export const OFFERS = [
  "Dine-in",
  "Takeout",
  "Delivery",
  "Catering",
  "Online ordering",
] as const;
