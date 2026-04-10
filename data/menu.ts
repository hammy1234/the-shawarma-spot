/**
 * Menu data for The Shawarma Spot - Grayson.
 * Edit categories and items here; keep pricing in sync with your real menu.
 */

export type MenuCategoryId = "bowls" | "wraps" | "sandwich" | "sides";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: "bowls",
    name: "Bowls",
    items: [
      { id: "bowl-chicken-shawarma", name: "Chicken Shawarma", price: "$12.95" },
      { id: "bowl-falafel", name: "Falafel", price: "$12.95" },
      { id: "bowl-steak", name: "Steak", price: "$14.95" },
      { id: "bowl-crispy-chicken", name: "Crispy Chicken", price: "$14.95" },
      { id: "bowl-butter-chicken", name: "Butter Chicken", price: "$14.95" },
      { id: "bowl-chicken-tikka", name: "Chicken Tikka Masala", price: "$14.95" },
    ],
  },
  {
    id: "wraps",
    name: "Wraps",
    items: [
      { id: "wrap-chicken-shawarma", name: "Chicken Shawarma", price: "$10.95" },
      { id: "wrap-falafel", name: "Falafel", price: "$10.95" },
      { id: "wrap-steak", name: "Steak", price: "$12.95" },
      { id: "wrap-crispy-chicken", name: "Crispy Chicken", price: "$12.95" },
      { id: "wrap-butter-chicken", name: "Butter Chicken", price: "$12.95" },
      { id: "wrap-chicken-kebab", name: "Chicken Kebab", price: "$12.99" },
      { id: "wrap-chicken-tenders", name: "Chicken Tenders", price: "$11.95" },
    ],
  },
  {
    id: "sandwich",
    name: "Sandwich",
    items: [
      { id: "sandwich-philly", name: "Philly Cheese Steak", price: "$11.95" },
      { id: "sandwich-crispy-chicken", name: "Crispy Chicken", price: "$11.95" },
    ],
  },
  {
    id: "sides",
    name: "Sides",
    items: [
      { id: "side-fries", name: "Fries", price: "$3.95" },
      { id: "side-4-falafel", name: "4 Falafel", price: "$3.95" },
      { id: "side-baklava", name: "Baklava", price: "$2.75" },
      {
        id: "side-samosa",
        name: "Samosa (3 piece)",
        price: "$5.95",
        description: "Crispy fried samosas filled with savory spiced filling",
      },
      { id: "side-chicken-kebab", name: "Chicken Kebab (2 skewers)", price: "$9.99" },
      { id: "side-steak-loaded", name: "Steak Loaded Fries", price: "$11.95" },
      { id: "side-shawarma-loaded", name: "Shawarma Loaded Fries", price: "$10.95" },
      { id: "side-tacos", name: "Tacos", price: "$11.99" },
    ],
  },
];

/** Featured items for home page — use ids that exist in MENU_CATEGORIES. */
export const FEATURED_ITEMS = [
  {
    id: "featured-butter-chicken",
    name: "Butter Chicken",
    description: "Creamy, spiced butter chicken over rice or in a wrap.",
    image: "/images/butter-chicken.jpg",
    cta: "View Menu",
  },
  {
    id: "featured-shawarma-fries",
    name: "Shawarma Loaded Fries",
    description: "Crispy fries topped with shawarma, sauce, and fresh toppings.",
    image: "/images/shawarma-loaded-fries.jpg",
    cta: "View Menu",
  },
  {
    id: "featured-philly",
    name: "Philly Cheesesteak Burger",
    description: "Hearty Philly-style cheesesteak sandwich, made to order.",
    image: "/images/philly-cheesesteak-burger.jpg",
    cta: "View Menu",
  },
  {
    id: "featured-tacos",
    name: "Tacos",
    description: "Fresh tacos with your choice of protein and toppings.",
    image: "/images/tacos.jpg",
    cta: "View Menu",
  },
];
