export const CATEGORY_PAGES = [
  {
    slug: "sofas",
    label: "Sofas",
    title: "Sofa Collection",
    description:
      "Explore modern sofas built for comfort, durability, and everyday living. Choose from compact sets, large family seating, and premium statement pieces.",
  },
  {
    slug: "beds",
    label: "Beds",
    title: "Bed Collection",
    description:
      "Browse strong, elegant beds designed for comfort and clean bedroom styling. Ask about custom sizing, headboards, and finishing options.",
  },
  {
    slug: "dining",
    label: "Dining",
    title: "Dining Collection",
    description:
      "Discover dining sets made for family meals, hosting, and everyday use. Built with practical layouts, durable materials, and polished finishing.",
  },
  {
    slug: "office",
    label: "Office",
    title: "Office Furniture",
    description:
      "Find office desks and workspace furniture made for productivity, professional presentation, and long-term use in business environments.",
  },
  {
    slug: "storage",
    label: "Storage",
    title: "Storage Collection",
    description:
      "Shop wardrobes and storage pieces that help organize your space without giving up a modern, premium look.",
  },
  {
    slug: "outdoor",
    label: "Outdoor",
    title: "Outdoor Furniture",
    description:
      "See outdoor-ready furniture for balconies, patios, and garden spaces. Designed to balance comfort, style, and practical use.",
  },
];

export const CATEGORY_LINKS = CATEGORY_PAGES.map(({ slug, label }) => ({
  to: `/${slug}`,
  label,
}));
