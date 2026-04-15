import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const PHONE = "0965333435";
const WHATSAPP = "https://wa.me/251965333435";
const TELEGRAM = "tg://resolve?phone=251965333435";
const CURRENCY = "ETB";
const PRODUCTS_PER_PAGE = 9;

const BED_PRODUCTS = [
  {
    id: "bed-blue-leather",
    category: "Beds",
    name: "Blue Leather Bed",
    description: "Bold leather bed design with a premium headboard and a polished modern look.",
    price: 85000,
    image: "/products/beds%20web/images/Blue-Leather-Bed.jpg",
  },
  {
    id: "bed-brown",
    category: "Beds",
    name: "Brown Bed",
    description: "Warm brown finish with a clean profile designed for elegant and comfortable bedrooms.",
    price: 85000,
    image: "/products/beds%20web/images/Brown-Bed.jpg",
    variants: [
      { id: "bed-brown-1", label: "Brown Bed", color: "Brown", image: "/products/beds%20web/images/Brown-Bed.jpg" },
      { id: "bed-brown-2", label: "Brown Bed 2", color: "Brown", image: "/products/beds%20web/images/Brown-Bed1.jpg" },
    ],
  },
  {
    id: "bed-cream-square",
    category: "Beds",
    name: "Cream Square Bed",
    description: "Soft cream upholstery and squared detailing for a refined contemporary bedroom.",
    price: 85000,
    image: "/products/beds%20web/images/Cream-Square.jpg",
    variants: [
      { id: "bed-cream-square-1", label: "Cream Square", color: "Cream", image: "/products/beds%20web/images/Cream-Square.jpg" },
      { id: "bed-cream-square-2", label: "Square Cream", color: "Cream", image: "/products/beds%20web/images/Square-Cream.jpg" },
    ],
  },
  {
    id: "bed-cream-textured",
    category: "Beds",
    name: "Cream Textured Bed",
    description: "Textured cream upholstery with a luxury finish designed for soft, inviting interiors.",
    price: 85000,
    image: "/products/beds%20web/images/Cream-Texture-bed.jpg",
    variants: [
      { id: "bed-cream-textured-1", label: "Cream Texture", color: "Cream", image: "/products/beds%20web/images/Cream-Texture-bed.jpg" },
      { id: "bed-cream-textured-2", label: "Cream Textured", color: "Cream", image: "/products/beds%20web/images/Cream-Textured-bed.jpg" },
      { id: "bed-cream-textured-3", label: "Dotted Cream", color: "Cream", image: "/products/beds%20web/images/Dotted--Cream-bed.jpg" },
      { id: "bed-cream-textured-4", label: "Dotted Cream 2", color: "Cream", image: "/products/beds%20web/images/Dotted--Cream-bed1.jpg" },
      { id: "bed-cream-textured-5", label: "Dotted Cream 3", color: "Cream", image: "/products/beds%20web/images/Dotted--Cream-bed2.jpg" },
    ],
  },
  {
    id: "bed-double",
    category: "Beds",
    name: "Double Bed",
    description: "A spacious double bed with balanced structure and durable finishing for everyday comfort.",
    price: 85000,
    image: "/products/beds%20web/images/Double-Bed.jpg",
    variants: [
      { id: "bed-double-1", label: "Double Bed", image: "/products/beds%20web/images/Double-Bed.jpg" },
      { id: "bed-double-2", label: "Double Bed 2", image: "/products/beds%20web/images/Double-bed1.jpg" },
    ],
  },
  {
    id: "bed-kids",
    category: "Beds",
    name: "Kids Bed Collection",
    description: "Playful kids beds created to bring comfort, personality, and fun into children's rooms.",
    price: 85000,
    image: "/products/beds%20web/images/Kids-Bed.jpg",
    variants: [
      { id: "bed-kids-1", label: "Kids Bed", image: "/products/beds%20web/images/Kids-Bed.jpg" },
      { id: "bed-kids-2", label: "Kids Bed 2", image: "/products/beds%20web/images/Kids-bed-2.jpg" },
      { id: "bed-kids-3", label: "Kids Bed 3", image: "/products/beds%20web/images/Kids-bed-3.jpg" },
      { id: "bed-kids-4", label: "Boys Kid Bed", image: "/products/beds%20web/images/boys-Kid-Bed.jpg" },
      { id: "bed-kids-5", label: "Batman Bed Kid", image: "/products/beds%20web/images/Batman-Bed-kid.jpg" },
    ],
  },
  {
    id: "bed-o-shaped",
    category: "Beds",
    name: "O-Shaped Bed",
    description: "Distinctive rounded headboard styling for customers who want a bed with visual character.",
    price: 85000,
    image: "/products/beds%20web/images/O-Shaped-Bed.jpg",
    variants: [
      { id: "bed-o-shaped-1", label: "O-Shaped Bed", image: "/products/beds%20web/images/O-Shaped-Bed.jpg" },
      { id: "bed-o-shaped-2", label: "O-Shaped Bed 2", image: "/products/beds%20web/images/Odhaped-Bed-2.jpg" },
    ],
  },
  {
    id: "bed-square-leather",
    category: "Beds",
    name: "Square Leather Bed",
    description: "Square-profile leather bed crafted for a premium and structured bedroom setup.",
    price: 85000,
    image: "/products/beds%20web/images/Square-Leather-bed-1.jpg",
    variants: [
      { id: "bed-square-leather-1", label: "Square Leather Bed", image: "/products/beds%20web/images/Square-Leather-bed-1.jpg" },
      { id: "bed-square-leather-2", label: "Square Leather Bed 2", image: "/products/beds%20web/images/Square-leather-Bed.jpg" },
      { id: "bed-square-leather-3", label: "Square Bed", image: "/products/beds%20web/images/Square-bed.jpg" },
      { id: "bed-square-leather-4", label: "Square Bed 2", image: "/products/beds%20web/images/Square-Bed-2.jpg" },
    ],
  },
  {
    id: "bed-t-shape",
    category: "Beds",
    name: "T-Shape Bed",
    description: "Modern T-shape bed design available in rich dark tones and soft cream finishing.",
    price: 85000,
    image: "/products/beds%20web/images/T-Shape-Black-Bed.jpg",
    variants: [
      { id: "bed-t-shape-black-1", label: "T-Shape Black Bed", color: "Black", image: "/products/beds%20web/images/T-Shape-Black-Bed.jpg" },
      { id: "bed-t-shape-black-2", label: "T-Shape Black Bed 2", color: "Black", image: "/products/beds%20web/images/T-Shape-Black-Bed-2.jpg" },
      { id: "bed-t-shape-black-3", label: "T-Shape Black Bed 3", color: "Black", image: "/products/beds%20web/images/T-shabe-black-bed.jpg" },
      { id: "bed-t-shape-cream", label: "T-Shaped Cream Bed", color: "Cream", image: "/products/beds%20web/images/T-Shaped-cream-bed.jpg" },
    ],
  },
  {
    id: "bed-v-shape",
    category: "Beds",
    name: "V-Shape Cream Bed",
    description: "Elegant V-shape headboard styling with a soft cream tone and clean premium finish.",
    price: 85000,
    image: "/products/beds%20web/images/V-Shape-Cream-bed.jpg",
    variants: [
      { id: "bed-v-shape-1", label: "V-Shape Cream Bed", color: "Cream", image: "/products/beds%20web/images/V-Shape-Cream-bed.jpg" },
      { id: "bed-v-shape-2", label: "V-Shape Cream Bed 2", color: "Cream", image: "/products/beds%20web/images/V-shape-Cream-bed1.jpg" },
    ],
  },
];

function encodeImagePath(path) {
  return path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
}

function toTitleCase(value) {
  return value
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\(\s*\d+\s*\)/g, "")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function cleanProductStem(filename) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[_-]+/g, " ")
    .replace(/\(\s*\d+\s*\)/g, "")
    .replace(/\s+\d+$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeProductText(value) {
  return value
    .replace(/\bkidds\b/gi, "Kids")
    .replace(/\brectanglar\b/gi, "Rectangular")
    .replace(/\bpurpple\b/gi, "Purple")
    .replace(/\bqhite\b/gi, "White")
    .replace(/\bwoods\b/gi, "wood")
    .replace(/\bhd sponges\b/gi, "HD sponge seats")
    .replace(/\bhd sponge\b/gi, "HD sponge seats")
    .replace(/\bwater proof\b/gi, "waterproof")
    .replace(/\buv top\b/gi, "UV top")
    .replace(/\bmetal frame\b/gi, "metal frame")
    .replace(/\bstrong wood\b/gi, "strong wood construction")
    .replace(/\bstrong woods\b/gi, "strong wood construction")
    .replace(/\bsky blue\b/gi, "Sky Blue");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function numberFileRange(start, end, extension = "png") {
  return Array.from({ length: end - start + 1 }, (_, index) => `${start + index}.${extension}`);
}

const PRODUCT_NAME_OVERRIDES = {
  Closets: {
    "1.webp": "Mirrored Panel Wardrobe",
    "2.webp": "Two Tone Wardrobe Closet",
    "3.webp": "Multi Door Wardrobe Closet",
  },
  "TV Stands": {
    "1 (1).webp": "White Marble Top TV Stand",
    "2 (1).webp": "Gold Frame TV Stand",
    "3 (1).webp": "Black Top Gold Frame TV Stand",
    "4.webp": "Fluted White TV Stand",
    "5.webp": "Modern Fluted TV Stand",
  },
};

const PRODUCT_DESCRIPTION_OVERRIDES = {
  Closets: {
    "1.webp":
      "Mirrored panel wardrobe with full-height storage, lower drawers, and a bright modern finish for organized bedrooms.",
    "2.webp":
      "Two tone wardrobe closet with overhead cabinets, lower drawers, and durable daily storage for compact rooms.",
    "3.webp":
      "Multi door wardrobe closet with upper compartments, drawer storage, and a clean minimalist finish for everyday use.",
  },
  "TV Stands": {
    "1 (1).webp":
      "White marble top TV stand with side cabinets, a center drawer, and gold-finished legs for a polished living-room setup.",
    "2 (1).webp":
      "Gold frame TV stand with a black top, twin drawers, and open side shelving for a light modern look.",
    "3 (1).webp":
      "Black top gold frame TV stand with two drawers and wide display space for media devices and decor.",
    "4.webp":
      "Fluted white TV stand with a glossy top, open center shelf, and smooth drawer storage for contemporary interiors.",
    "5.webp":
      "Modern fluted TV stand with a central drawer, display shelf, and elegant metallic base for stylish media storage.",
  },
};

function formatDiningTitle(baseName) {
  const normalized = normalizeProductText(baseName);
  const leadingChairMatch = normalized.match(/^(\d+)\s*chair\s*dining table$/i);
  if (leadingChairMatch) return `${leadingChairMatch[1]} Chair Dining Table`;

  const trailingChairMatch = normalized.match(/^dining table\s*(\d+)\s*chair$/i);
  if (trailingChairMatch) return `${trailingChairMatch[1]} Chair Dining Table`;

  return toTitleCase(normalized);
}

function deriveProductName(folder, filename) {
  const override = PRODUCT_NAME_OVERRIDES[folder]?.[filename];
  if (override) return override;

  const baseName = cleanProductStem(filename);

  if (folder === "Dining table") {
    const primaryLabel = baseName.split(",")[0].trim();
    return formatDiningTitle(primaryLabel);
  }

  let title = toTitleCase(normalizeProductText(baseName));

  if (folder === "Double Bed" && !/\bbed\b/i.test(title)) {
    title = `${title} Bed`;
  }

  if (folder === "Dressing Table") {
    if (!/\btable\b/i.test(title)) {
      if (/\bdressing\b/i.test(title) || /\bstudying\b/i.test(title)) {
        title = `${title} Table`;
      } else {
        title = `${title} Dressing Table`;
      }
    }
  }

  return title;
}

function joinFeatureList(features) {
  if (features.length === 0) return "";
  if (features.length === 1) return features[0];
  if (features.length === 2) return `${features[0]} and ${features[1]}`;
  return `${features.slice(0, -1).join(", ")}, and ${features[features.length - 1]}`;
}

function deriveProductDescription(folder, filename, name) {
  const override = PRODUCT_DESCRIPTION_OVERRIDES[folder]?.[filename];
  if (override) return override;

  if (folder === "Dining table") {
    const parts = normalizeProductText(cleanProductStem(filename))
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
    const features = parts.slice(1);
    const featureText = joinFeatureList(features);

    return featureText
      ? `${name} with ${featureText} for durable everyday dining and comfortable family gatherings.`
      : `${name} with durable construction and comfortable seating for everyday dining and hosting.`;
  }

  if (folder === "Double Bed") {
    return `${name} with spacious comfort, durable upholstery, and a polished bedroom finish for daily use.`;
  }

  if (folder === "Closets") {
    return `${name} with practical wardrobe storage, a clean finish, and dependable organization for modern bedrooms.`;
  }

  if (folder === "Dressing Table") {
    if (/\bstudying\b/i.test(name)) {
      return `${name} with practical workspace, useful storage, and a clean modern look for study corners and bedrooms.`;
    }

    return `${name} with practical storage, a polished surface, and an elegant finish for everyday bedroom use.`;
  }

  if (folder === "TV Stands") {
    return `${name} with media storage, display space, and a modern finish for stylish living-room setups.`;
  }

  return null;
}

function createFolderProducts({ folder, category, prefix, filenames, price, description }) {
  return filenames.map((filename, index) => {
    const name = deriveProductName(folder, filename);
    return {
      id: `${prefix}-${slugify(name)}-${index + 1}`,
      category,
      name,
      description: deriveProductDescription(folder, filename, name) || description,
      price,
      image: encodeImagePath(`/products/${folder}/${filename}`),
    };
  });
}

const SOFA_FILENAMES = [
  "88.webp",
  "Bronze king  coffee.webp",
  "Bronze king 1 (2).webp",
  "Bronze king 1.webp",
  "Bronze king 14.webp",
  "Bronze king 2.webp",
  "Bronze king centere table.webp",
  "Bronze king corner.webp",
  "Cube Handle dark Green 1.webp",
  "Cube Handle dark Green 2.webp",
  "Cube Handle dark Green 3.webp",
  "Cube Handle Gray 1.webp",
  "Cube Handle Gray 2 (2).webp",
  "Cube Handle Gray 2.webp",
  "Cube Handle Gray.webp",
  "Cube Handle Green 1.webp",
  "Cube Handle Green 2.webp",
  "Cube Handle Green 3.webp",
  "Cube Handle Green.webp",
  "dark blue king 1.webp",
  "For Homepage as a show finishing.webp",
  "Golden  king.webp",
  "Golden 2 king 1.webp",
  "Golden 2 king 2.webp",
  "Golden 2 king 3.webp",
  "Golden 2 king coffee.webp",
  "Golden 2 king corner tabel.webp",
  "Golden 2 king.webp",
  "Golden king 2.webp",
  "Gray sky-blue king.webp",
  "Inclined  brown Textured  2.webp",
  "Inclined blue.webp",
  "Inclined orange Textured  2.webp",
  "Inclined orange Textured  3.webp",
  "Inclined orange Textured.webp",
  "Inclined qhite.webp",
  "Inclined Textured  2.webp",
  "Inclined Textured  3.webp",
  "Inclined Textured 1.webp",
  "Inclined textured brown.webp",
  "Inclined Textured.webp",
  "Key Dark Gray.webp",
  "Key sofa 2.webp",
  "Key sofa 3.webp",
  "Key sofa 4.webp",
  "Key sofa cream  1.webp",
  "Key sofa cream  3.webp",
  "Key sofa cream 2.webp",
  "Key sofa cream 3.webp",
  "Key sofa cream 4.webp",
  "Key sofa cream 5.webp",
  "Key sofa cream.webp",
  "Key sofa skyblue.webp",
  "Key sofa.webp",
  "King Blue.webp",
  "king Dining And sofa.webp",
  "King golden 1.webp",
  "King Golden 3.webp",
  "King Golden coffee table.webp",
  "King Golden corner.webp",
  "King Golden.webp",
  "model 00 gray 1.webp",
  "model 00 gray 2.webp",
  "model 00 gray 3.webp",
  "model 00 gray.webp",
  "model 1 brown and cream 2.webp",
  "model 1 cream and brown.webp",
  "model 1 cream and gray.webp",
  "model 1 textured brown 1.webp",
  "model 1 textured brown.webp",
  "Model 1 white and black.webp",
  "Model 10 dark gray  Textured.webp",
  "Model 10 Textured.webp",
  "Model 11 Cream  1.webp",
  "Model 11 Cream 2.webp",
  "Model 11 Cream 3.webp",
  "Model 11 Cream.webp",
  "Model 11 dark grey 1.webp",
  "Model 11 dark grey 2.webp",
  "Model 11 dark grey 3.webp",
  "Model 11 dark grey.webp",
  "Model 11 grey 1.webp",
  "Model 11 grey 2.webp",
  "Model 11 grey 3.webp",
  "Model 11 grey.webp",
  "Model 2 Gray.webp",
  "model 3 skyblue.webp",
  "model 5 black (2).webp",
  "model 5 black 2.webp",
  "model 5 black 3.webp",
  "model 5 black.webp",
  "model 6 blu3.webp",
  "model 6 blue 1.webp",
  "model 6 blue 2.webp",
  "model 6 blue.webp",
  "Rectangular c Textured.webp",
  "Rectangular gray Textured.webp",
  "Rectangular light gray Textured.webp",
];

const SOFA_GROUP_NAMES = {
  "88": "Model 88 Sofa Set",
  "bronze-king": "Bronze King Sofa Set",
  "cube-handle": "Cube Handle Sofa Set",
  "finishing-detail": "Finishing Detail Sofa",
  "golden-2-king": "Golden 2 King Sofa Set",
  "golden-king": "Golden King Sofa Set",
  inclined: "Inclined Sofa Set",
  key: "Key Sofa Set",
  king: "King Sofa Set",
  "model-00": "Model 00 Sofa Set",
  "model-1": "Model 1 Sofa Set",
  "model-10": "Model 10 Sofa Set",
  "model-11": "Model 11 Sofa Set",
  "model-2": "Model 2 Sofa Set",
  "model-3": "Model 3 Sofa Set",
  "model-5": "Model 5 Sofa Set",
  "model-6": "Model 6 Sofa Set",
  rectangular: "Rectangular Sofa Set",
};

const SOFA_COLOR_PATTERNS = [
  { label: "Black", pattern: /\bblack\b/i },
  { label: "Blue", pattern: /\b(blue|blu3|skyblue|sky-blue)\b/i },
  { label: "Bronze", pattern: /\bbronze\b/i },
  { label: "Brown", pattern: /\bbrown\b/i },
  { label: "Cream", pattern: /\bcream\b/i },
  { label: "Golden", pattern: /\bgolden\b/i },
  { label: "Gray", pattern: /\b(gray|grey)\b/i },
  { label: "Green", pattern: /\bgreen\b/i },
  { label: "Orange", pattern: /\borange\b/i },
  { label: "White", pattern: /\b(white|qhite)\b/i },
];

function getSofaGroupKey(filename) {
  const value = filename.toLowerCase();

  if (/\bfor homepage as a show finishing\b/.test(value)) return "finishing-detail";
  if (/\bbronze king\b/.test(value)) return "bronze-king";
  if (/\bgolden 2 king\b/.test(value)) return "golden-2-king";
  if (/\b(golden king|king golden)\b/.test(value)) return "golden-king";
  if (/\bcube handle\b/.test(value)) return "cube-handle";
  if (/\binclined\b/.test(value)) return "inclined";
  if (/\bkey\b/.test(value)) return "key";
  if (/\bmodel 00\b/.test(value)) return "model-00";
  if (/\bmodel 10\b/.test(value)) return "model-10";
  if (/\bmodel 11\b/.test(value)) return "model-11";
  if (/\bmodel 1\b/.test(value)) return "model-1";
  if (/\bmodel 2\b/.test(value)) return "model-2";
  if (/\bmodel 3\b/.test(value)) return "model-3";
  if (/\bmodel 5\b/.test(value)) return "model-5";
  if (/\bmodel 6\b/.test(value)) return "model-6";
  if (/\brectangular\b/.test(value)) return "rectangular";
  if (/\bking\b/.test(value)) return "king";
  if (/^88\.(png|webp)$/i.test(filename)) return "88";

  return slugify(toTitleCase(filename));
}

function getSofaVariantColor(filename) {
  const match = SOFA_COLOR_PATTERNS.find(({ pattern }) => pattern.test(filename));
  return match?.label || null;
}

function getSofaDescription(name, colors, imageCount) {
  const colorsText =
    colors.length > 0
      ? ` Available in ${colors.join(", ")} tones with matching set pieces and multiple viewing angles.`
      : " Multiple photos show the full set from different directions so customers can inspect the shape and finishing.";

  return `${name} with premium stitching, deep seating comfort, and polished showroom finishing.${colorsText} This gallery includes ${imageCount} photo${imageCount === 1 ? "" : "s"} for closer inspection of the arms, backrest, and fabric details.`;
}

function buildSofaProducts(filenames) {
  const grouped = filenames.reduce((acc, filename) => {
    const key = getSofaGroupKey(filename);
    const color = getSofaVariantColor(filename);
    const image = encodeImagePath(`/products/Sofas _2/${filename}`);

    acc[key] = acc[key] || [];
    acc[key].push({
      id: `sofa-${key}-${acc[key].length + 1}`,
      label: toTitleCase(filename),
      color,
      image,
    });

    return acc;
  }, {});

  return Object.entries(grouped)
    .map(([key, variants]) => {
      const colors = Array.from(new Set(variants.map((variant) => variant.color).filter(Boolean)));
      const name = SOFA_GROUP_NAMES[key] || toTitleCase(key);

      return {
        id: `sofa-${key}`,
        category: "Sofas",
        name,
        description: getSofaDescription(name, colors, variants.length),
        price: 150000,
        image: variants[0].image,
        variants,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

const SOFA_PRODUCTS = buildSofaProducts(SOFA_FILENAMES);

const EXTRA_BED_PRODUCTS = [
  ...createFolderProducts({
    folder: "Beds_2",
    category: "Beds",
    prefix: "bed-gallery",
    filenames: [
      ...numberFileRange(31, 53, "webp"),
      "Double Bed with Stairs.webp",
      "I Shape  1.webp",
      "I Shape (2).webp",
      "I shape Z.webp",
      "I Shape.webp",
      "II Shape Blue.webp",
      "II Shape Brown z.webp",
      "II Shape Brown.webp",
      "II Shape Grey.webp",
      "II Shape z.webp",
      "Kids Ball Bed Blue.webp",
      "Kids Can and Batman 2.webp",
      "Kids Can and Batman.webp",
      "Kids Cat Pink z.webp",
      "Kids Cat Pink.webp",
      "O Shape Blue z.webp",
      "O Shape Blue.webp",
      "Square (2).webp",
      "Square Blue z.webp",
      "Square.webp",
      "T Shape black.webp",
      "T Shape cream z.webp",
      "T Shape Cream.webp",
      "T shape white Z.webp",
      "V shape z.webp",
      "V shape.webp",
      "W Shape Z.webp",
      "W shape.webp",
    ],
    price: 85000,
    description: "Modern bed design with bold headboard styling, quality upholstery, and a premium bedroom finish.",
  }),
  ...createFolderProducts({
    folder: "Double Bed",
    category: "Beds",
    prefix: "double-bed",
    filenames: [
      "Double gray 1.webp",
      "Double gray.webp",
      "Double Pink.webp",
      "Double Purple.webp",
      "Double Sky blue.webp",
      "Triple Green.webp",
      "Triple Purple 1.webp",
      "Triple purpple.webp",
    ],
    price: 90000,
    description: "Spacious double and triple bed options built for comfort, statement styling, and daily durability.",
  }),
];

const DINING_PRODUCTS = createFolderProducts({
  folder: "Dining table",
  category: "Dining",
  prefix: "dining",
  filenames: [
    "6 chair dining table , with strong woods , uv top , hd sponge (1).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (11).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (12).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (13).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (15).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (17).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (2).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (3).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (5).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (6).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (7).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (8).webp",
    "6 chair dining table , with strong woods , uv top , hd sponge (9).webp",
    "8 chair dining table , with strong woods , uv top , hd sponge (10).webp",
    "8 chair dining table , with strong woods , uv top , hd sponge (14).webp",
    "8 chair dining table , with strong woods , uv top , hd sponge (16).webp",
    "8 chair dining table , with strong woods , uv top , hd sponge (4).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (1).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (10).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (11).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (12).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (13).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (14).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (15).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (16).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (17).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (18).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (19).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (2).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (20).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (21).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (22).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (23).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (24).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (25).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (26).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (3).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (4).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (5).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (6).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (7).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (8).webp",
    "Dining Table 6 chair , metal frame, uv top , water proof , hd sponges (9).webp",
    "Dining Table 8 chair , metal frame, uv top , water proof , hd sponges (27).webp",
  ],
  price: 69000,
  description: "Dining table set designed for family meals, hosting, and durable everyday use.",
});

const STORAGE_PRODUCTS = [
  ...createFolderProducts({
    folder: "Closets",
    category: "Storage",
    prefix: "closet",
    filenames: ["1.webp", "2.webp", "3.webp"],
    price: 74000,
    description: "Closet and wardrobe storage built for clean organization and a polished room finish.",
  }),
  ...createFolderProducts({
    folder: "Dressing Table",
    category: "Storage",
    prefix: "dressing-table",
    filenames: [
      "A Shaped Dressing.webp",
      "Cube and Rectangular.webp",
      "Kidds Studying.webp",
      "Kids Studying table.webp",
      "Kids Studying table1.webp",
      "Oval Dressing.webp",
      "Rectanglar Dressing 1.webp",
      "Rectangular 2.webp",
      "Rectangular 4.webp",
      "Rectangular dressing 3.webp",
      "Rectangular Dressing.webp",
    ],
    price: 54000,
    description: "Dressing and study table collection with practical storage and a clean modern look.",
  }),
  ...createFolderProducts({
    folder: "TV Stands",
    category: "Storage",
    prefix: "tv-stand",
    filenames: ["1 (1).webp", "2 (1).webp", "3 (1).webp", "4.webp", "5.webp"],
    price: 48000,
    description: "TV stand collection with sleek storage, display space, and durable finishing for modern homes.",
  }),
];

const PRODUCTS = [
  ...SOFA_PRODUCTS,
  ...BED_PRODUCTS,
  ...EXTRA_BED_PRODUCTS,
  ...DINING_PRODUCTS,
  ...STORAGE_PRODUCTS,
];

function formatMoney(value) {
  try {
    return new Intl.NumberFormat("en-ET", {
      style: "currency",
      currency: "ETB",
      maximumFractionDigits: 0,
    }).format(value);
  } catch {
    return `${value.toLocaleString()} ${CURRENCY}`;
  }
}

function uniqCategories(items) {
  const s = new Set(items.map((x) => x.category));
  return ["All", ...Array.from(s)];
}

function clampText(str, max = 120) {
  if (!str) return "";
  return str.length > max ? str.slice(0, max - 1) + "..." : str;
}

function colorSwatch(color) {
  const palette = {
    black: "#191919",
    cream: "#e9dcc5",
    brown: "#6b4a2f",
    blue: "#2d5da8",
    gray: "#7c8593",
    green: "#2d6a4f",
    white: "#f5f2ea",
    orange: "#cd6f32",
    golden: "#c6a14a",
    bronze: "#9c6a3d",
  };
  return palette[String(color || "").toLowerCase()] || "#8d96a8";
}

function getProductInquiryMessage(product) {
  return `Hello Galaxy Furniture, I want to ask about this product: ${product.name}. Please send me the price.`;
}

function getWhatsAppInquiryLink(product) {
  return `${WHATSAPP}?text=${encodeURIComponent(getProductInquiryMessage(product))}`;
}

function getTelegramInquiryLink(product) {
  return `${TELEGRAM}&text=${encodeURIComponent(getProductInquiryMessage(product))}`;
}

export default function Products({
  category: initialCategory = "All",
  title,
  description,
}) {
  const { t } = useLanguage();
  const cartSectionRef = useRef(null);
  // Filters
  const categories = useMemo(() => uniqCategories(PRODUCTS), []);
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured"); // featured | priceLow | priceHigh | name
  const [visibleByCategory, setVisibleByCategory] = useState({});

  // Cart
  const [cart, setCart] = useState([]); // [{...product, qty}]
  const cartCount = cart.reduce((sum, x) => sum + x.qty, 0);
  const cartTotal = cart.reduce((sum, x) => sum + x.price * x.qty, 0);

  // Toast
  const [toasts, setToasts] = useState([]);
  const toastTimers = useRef(new Map());

  // Modal (product detail)
  const [active, setActive] = useState(null);

  useEffect(() => {
    setCategory(initialCategory);
    setQuery("");
    setSort("featured");
    setActive(null);
    setVisibleByCategory({});
  }, [initialCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = PRODUCTS.filter((p) => {
      const matchCat = category === "All" ? true : p.category === category;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    if (sort === "priceLow") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    // featured = as-is (your order)
    return list;
  }, [category, query, sort]);

  const grouped = useMemo(() => {
    // group the filtered list
    const map = {};
    for (const p of filtered) {
      map[p.category] = map[p.category] || [];
      map[p.category].push(p);
    }
    return map;
  }, [filtered]);

  useEffect(() => {
    setVisibleByCategory((prev) => {
      const next = {};
      for (const cat of Object.keys(grouped)) {
        next[cat] = prev[cat] || PRODUCTS_PER_PAGE;
      }
      return next;
    });
  }, [grouped]);

  function pushToast({ title, message }) {
    const id = crypto.randomUUID?.() || String(Date.now()) + Math.random();
    setToasts((prev) => [{ id, title, message }, ...prev].slice(0, 3));

    // auto-remove after 2.4s
    const t = setTimeout(() => {
      setToasts((prev) => prev.filter((x) => x.id !== id));
      toastTimers.current.delete(id);
    }, 2400);

    toastTimers.current.set(id, t);
  }

  useEffect(() => {
    // ESC closes modal
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === product.id);
      if (found) return prev.map((x) => (x.id === product.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...product, qty: 1 }];
    });

    pushToast({
      title: "Added to cart",
      message: `${product.name} added to your cart request.`, 
    });
  };

  const removeOne = (id) => {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  };

  const clearCart = () => {
    setCart([]);
    pushToast({ title: "Cart cleared", message: "Your cart is now empty." });
  };

  const showMoreProducts = (categoryName) => {
    setVisibleByCategory((prev) => ({
      ...prev,
      [categoryName]: (prev[categoryName] || PRODUCTS_PER_PAGE) + PRODUCTS_PER_PAGE,
    }));
  };

  const orderMessage =
    `Hello Galaxy Furniture, I want to ask about these products:\n` +
      (cart.length
        ? cart.map((x) => `- ${x.name} x${x.qty}`).join("\n")
        : "- (No items yet)") +
      `\nPlease send me the prices and availability.\nPhone: ${PHONE}`;
  const orderText = encodeURIComponent(orderMessage);
  const telegramOrderLink = `${TELEGRAM}&text=${encodeURIComponent(orderMessage)}`;

  return (
    <div className="grid" style={{ gap: 18, marginTop: 8 }}>
      {/* Toasts */}
      <div className="toast-wrap" aria-live="polite" aria-atomic="true">
        {toasts.map((t) => (
          <div key={t.id} className="toast">
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                marginTop: 5,
                background: "var(--gold)",
                boxShadow: "0 0 0 4px rgba(255,215,0,.12)",
              }}
            />
            <div>
              <strong>{t.title}</strong>
              <div className="small">{t.message}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Header + Filters */}
      <section className="card glow" style={{ padding: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <span className="badge">{initialCategory === "All" ? t("products") : initialCategory}</span>
            <h1 className="h1">{title || t("shop_by_category")}</h1>
            <p className="p">
              {description ||
                "Browse Galaxy Furniture sofas, bedroom sets, beds, dining tables, wardrobes, and other Addis Ababa furniture collections. Use WhatsApp or Telegram to request furniture prices in Ethiopia directly from our sales team."}
            </p>
          </div>

          <div className="chip" style={{ alignSelf: "flex-start" }}>
            <span className="small">{t("cart")}</span>
            <span
              style={{
                background: "rgba(255,215,0,.18)",
                border: "1px solid rgba(255,215,0,.30)",
                color: "#FFD700",
                padding: "6px 10px",
                borderRadius: 999,
                fontWeight: 900,
              }}
            >
              {cartCount}
            </span>
            <button
              className="btn ghost"
              type="button"
              onClick={() => cartSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
              style={{ borderRadius: 999, marginLeft: 8, padding: "8px 12px" }}
            >
              Open Cart
            </button>
          </div>
        </div>

        <hr className="hr" />

        <div className="filters">
          <select className="select" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <input
            className="field"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("search_products")}
            style={{ minWidth: 260 }}
          />

          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">{t("sort_featured")}</option>
            <option value="priceLow">Sort: Price (Low → High)</option>
            <option value="priceHigh">Sort: Price (High → Low)</option>
            <option value="name">Sort: Name (A → Z)</option>
          </select>

          <a className="btn ghost" href={`tel:${PHONE}`} style={{ borderRadius: 999 }}>
            {t("call")}: {PHONE}
          </a>
        </div>
      </section>

      {/* Category sections (from filtered results) */}
      {Object.keys(grouped).length === 0 ? (
        <section className="card" style={{ padding: 22 }}>
          <h2 className="h2" style={{ marginBottom: 6 }}>{t("no_results")}</h2>
          <p className="p">{t("try_changing")}</p>
        </section>
      ) : (
        Object.entries(grouped).map(([cat, items]) => (
          <section key={cat} className="grid" style={{ gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <h2 className="h2" style={{ margin: 0 }}>{cat}</h2>
              <div className="chip">
                <span className="small">{items.length} {t("items")}</span>
              </div>
            </div>

            <div className="grid cols-3">
              {items.slice(0, visibleByCategory[cat] || PRODUCTS_PER_PAGE).map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onOpen={setActive}
                  onAdd={addToCart}
                />
              ))}
            </div>

            {items.length > (visibleByCategory[cat] || PRODUCTS_PER_PAGE) && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn ghost"
                  onClick={() => showMoreProducts(cat)}
                  style={{ borderRadius: 999 }}
                >
                  {t("see_more_products")}
                </button>
              </div>
            )}
          </section>
        ))
      )}

      {/* Cart summary */}
      <section ref={cartSectionRef} className="card" style={{ padding: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h2 className="h2" style={{ marginBottom: 6 }}>{t("cart_summary")}</h2>
            <p className="p">Review your selected products and send the list to sales on WhatsApp or Telegram.</p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn ghost" onClick={clearCart} style={{ borderRadius: 999 }}>
              {t("clear_cart")}
            </button>
            <a
              className="btn primary"
              href={`${WHATSAPP}?text=${orderText}`}
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 999 }}
            >
              {t("send_order_whatsapp")}
            </a>
            <a
              className="btn ghost"
              href={telegramOrderLink}
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 999 }}
            >
              Send on Telegram
            </a>
          </div>
        </div>

        <hr className="hr" />

        {cart.length === 0 ? (
          <p className="p">{t("cart_empty")}</p>
        ) : (
          <div className="grid" style={{ gap: 10 }}>
            {cart.map((x) => (
              <div
                key={x.id}
                className="chip"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <div style={{ display: "grid", gap: 2 }}>
                  <strong>{x.name}</strong>
                  <span className="small">Quantity: {x.qty}</span>
                  <span className="small cart-price-hidden" style={{ display: "none" }}>
                    {formatMoney(x.price)} × {x.qty}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <button className="btn ghost" onClick={() => removeOne(x.id)} style={{ borderRadius: 999 }}>
                    Remove 1
                  </button>
                </div>
              </div>
            ))}

            <div className="cart-total-hidden" style={{ display: "none", justifyContent: "flex-end", marginTop: 6 }}>
              <div className="chip" style={{ borderColor: "rgba(255,215,0,.30)" }}>
                <span className="small">{t("total")}</span>
                <strong style={{ marginLeft: 10, color: "#FFD700" }}>{formatMoney(cartTotal)}</strong>
              </div>
            </div>

            <div className="chip" style={{ justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <div>
                <strong>Send your request to sales</strong>
                <div className="small">We will reply with prices, delivery, and availability details.</div>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a
                  className="btn primary"
                  href={`${WHATSAPP}?text=${orderText}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ borderRadius: 999 }}
                >
                  WhatsApp Sales
                </a>
                <a
                  className="btn ghost"
                  href={telegramOrderLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ borderRadius: 999 }}
                >
                  Telegram Sales
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Product detail modal */}
      {active && (
        <Modal title={t("product_detail")} onClose={() => setActive(null)}>
          <ProductDetail product={active} onAdd={addToCart} />
        </Modal>
      )}
    </div>
  );
}

function ProductCard({ product, onOpen, onAdd }) {
  const { t } = useLanguage();
  const variants = product.variants || [];
  const hasVariants = variants.length > 0;
  const colors = Array.from(new Set(variants.map((variant) => variant.color).filter(Boolean)));
  const [activeIndex, setActiveIndex] = useState(0);
  const selectedVariant = hasVariants ? variants[activeIndex] || variants[0] : null;
  const image = selectedVariant?.image || product.image;
  const displayName = selectedVariant?.label || product.name;
  const displayProduct = selectedVariant
    ? {
        ...product,
        id: selectedVariant.id || `${product.id}-${activeIndex}`,
        name: selectedVariant.color ? `${product.name} - ${selectedVariant.color}` : selectedVariant.label,
        image: selectedVariant.image,
      }
    : product;
  const whatsappInquiryLink = getWhatsAppInquiryLink(displayProduct);
  const telegramInquiryLink = getTelegramInquiryLink(displayProduct);

  useEffect(() => {
    if (!hasVariants || variants.length < 2) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % variants.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [hasVariants, variants.length]);

  const selectColor = (color) => {
    const nextIndex = variants.findIndex((variant) => variant.color === color);
    if (nextIndex >= 0) setActiveIndex(nextIndex);
  };

  return (
    <div className="card hover-lift fade-up" style={{ padding: 14 }}>
      {/* clickable image + title area opens modal */}
      <button
        onClick={() => onOpen(displayProduct)}
        style={{
          width: "100%",
          textAlign: "left",
          padding: 0,
          border: 0,
          background: "transparent",
          cursor: "pointer",
        }}
        aria-label={`Open details for ${displayName}`}
      >
        <div
          style={{
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid rgba(184,199,221,.14)",
            background: "rgba(255,255,255,.02)",
            position: "relative",
          }}
        >
          <img
            src={image}
            alt={displayName}
            style={{ width: "100%", height: 190, objectFit: "cover", display: "block" }}
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1200&q=60";
            }}
          />
          {hasVariants && (
            <div
              style={{
                position: "absolute",
                left: 10,
                right: 10,
                bottom: 10,
                display: "flex",
                gap: 6,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              {variants.map((variant, index) => (
                <span
                  key={variant.id || `${product.id}-${index}`}
                  style={{
                    width: activeIndex === index ? 22 : 8,
                    height: 8,
                    borderRadius: 999,
                    background: activeIndex === index ? "#FFD700" : "rgba(255,255,255,.55)",
                    transition: "all .2s ease",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "start" }}>
            <div style={{ fontWeight: 950, fontSize: 16 }}>{displayName}</div>
            <a
              className="btn ghost"
              href={whatsappInquiryLink}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ borderRadius: 999, padding: "8px 12px", fontSize: 12, whiteSpace: "nowrap" }}
            >
              {t("request_price")}
            </a>
          </div>

          <div style={{ color: "rgba(184,199,221,.92)", fontSize: 13, lineHeight: 1.55 }}>
            {clampText(product.description, 110)}
          </div>

          {colors.length > 1 && (
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <span className="small">{t("colors")}:</span>
              {colors.map((color) => {
                const isActive = selectedVariant?.color === color;
                return (
                  <button
                    key={color}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      selectColor(color);
                    }}
                    aria-label={`Select ${color}`}
                    title={color}
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      border: isActive ? "2px solid #FFD700" : "1px solid rgba(184,199,221,.35)",
                      background: colorSwatch(color),
                      cursor: "pointer",
                      boxShadow: isActive ? "0 0 0 3px rgba(255,215,0,.12)" : "none",
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>
      </button>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
        <button className="btn primary" onClick={() => onAdd(displayProduct)} style={{ borderRadius: 999 }}>
          {t("add_to_cart")}
        </button>
        <a
          className="btn ghost"
          href={whatsappInquiryLink}
          target="_blank"
          rel="noreferrer"
          style={{ borderRadius: 999 }}
        >
          {t("whatsapp")}
        </a>
        <a
          className="btn ghost"
          href={telegramInquiryLink}
          target="_blank"
          rel="noreferrer"
          style={{ borderRadius: 999 }}
        >
          {t("telegram")}
        </a>
        <a className="btn ghost" href={`tel:${PHONE}`} style={{ borderRadius: 999 }}>
          {t("call")}
        </a>
      </div>
    </div>
  );
}

function ProductDetail({ product, onAdd }) {
  const { t } = useLanguage();
  const variants = product.variants || [];
  const hasVariants = variants.length > 0;
  const colors = Array.from(new Set(variants.map((variant) => variant.color).filter(Boolean)));
  const initialIndex = hasVariants
    ? Math.max(
        0,
        variants.findIndex((variant) => variant.image === product.image)
      )
    : 0;
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const selectedVariant = hasVariants ? variants[activeIndex] || variants[0] : null;
  const activeImage = selectedVariant?.image || product.image;
  const activeName = selectedVariant?.label || product.name;
  const detailProduct = selectedVariant
    ? {
        ...product,
        id: selectedVariant.id || `${product.id}-${activeIndex}`,
        name: selectedVariant.color ? `${product.name} - ${selectedVariant.color}` : selectedVariant.label,
        image: selectedVariant.image,
      }
    : product;
  const whatsappInquiryLink = getWhatsAppInquiryLink(detailProduct);
  const telegramInquiryLink = getTelegramInquiryLink(detailProduct);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(2);

  const selectColor = (color) => {
    const nextIndex = variants.findIndex((variant) => variant.color === color);
    if (nextIndex >= 0) setActiveIndex(nextIndex);
  };

  return (
    <>
      <div className="grid cols-2" style={{ gap: 16 }}>
        <div style={{ display: "grid", gap: 10 }}>
          <div className="mapWrap" style={{ borderRadius: 22, position: "relative" }}>
            <img
              src={activeImage}
              alt={activeName}
              style={{
                width: "100%",
                height: "100%",
                minHeight: 320,
                objectFit: "cover",
                display: "block",
                cursor: "zoom-in",
              }}
              onClick={() => setZoomOpen(true)}
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=60";
              }}
            />
            <button
              className="btn ghost"
              type="button"
              onClick={() => setZoomOpen(true)}
              style={{
                position: "absolute",
                right: 12,
                bottom: 12,
                borderRadius: 999,
                backdropFilter: "blur(10px)",
              }}
            >
              {t("magnify")}
            </button>
          </div>

          <div className="small" style={{ color: "rgba(184,199,221,.88)" }}>
            {t("magnify_help")}
          </div>

          {hasVariants && (
            <div style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "flex", gap: 10, overflowX: "auto", paddingBottom: 4 }}>
                {variants.map((variant, index) => (
                  <button
                    key={variant.id || `${product.id}-${index}`}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    style={{
                      border: activeIndex === index
                        ? "2px solid #FFD700"
                        : "1px solid rgba(184,199,221,.18)",
                      borderRadius: 16,
                      padding: 0,
                      overflow: "hidden",
                      background: "rgba(255,255,255,.03)",
                      cursor: "pointer",
                      minWidth: 86,
                      boxShadow: activeIndex === index ? "0 0 0 3px rgba(255,215,0,.12)" : "none",
                    }}
                    aria-label={`Show ${variant.label}`}
                  >
                    <img
                      src={variant.image}
                      alt={variant.label}
                      style={{ width: 86, height: 72, objectFit: "cover", display: "block" }}
                    />
                  </button>
                ))}
              </div>

              {colors.length > 1 && (
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <span className="small">{t("colors")}:</span>
                  {colors.map((color) => {
                    const isActive = selectedVariant?.color === color;
                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => selectColor(color)}
                        aria-label={`Select ${color}`}
                        title={color}
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          border: isActive ? "2px solid #FFD700" : "1px solid rgba(184,199,221,.35)",
                          background: colorSwatch(color),
                          cursor: "pointer",
                          boxShadow: isActive ? "0 0 0 3px rgba(255,215,0,.12)" : "none",
                        }}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        <div style={{ display: "grid", gap: 10 }}>
          <div className="badge">{product.category}</div>
          <div style={{ fontSize: 26, fontWeight: 950, letterSpacing: -0.4 }}>{activeName}</div>
          <a
            className="btn ghost"
            href={whatsappInquiryLink}
            target="_blank"
            rel="noreferrer"
            style={{ borderRadius: 999, width: "fit-content" }}
          >
            {t("request_price")}
          </a>

          <p className="p" style={{ fontSize: 14 }}>
            {product.description}
          </p>

          <div className="card" style={{ padding: 14, borderRadius: 18, borderColor: "rgba(255,215,0,.16)" }}>
            <div className="small">{t("included_notes")}</div>
            <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "rgba(184,199,221,.95)", lineHeight: 1.7 }}>
              <li>{t("custom_size_color")}</li>
              <li>{t("delivery_ask_price")}</li>
              <li>{t("high_quality_finishing")}</li>
            </ul>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
            <button className="btn primary" style={{ borderRadius: 999 }} onClick={() => onAdd(detailProduct)}>
              {t("add_to_cart")}
            </button>
            <a className="btn ghost" style={{ borderRadius: 999 }} href={`tel:${PHONE}`}>
              {t("call")}
            </a>
            <a
              className="btn"
              style={{ borderRadius: 999 }}
              href={whatsappInquiryLink}
              target="_blank"
              rel="noreferrer"
            >
              {t("whatsapp")}
            </a>
            <a
              className="btn ghost"
              style={{ borderRadius: 999 }}
              href={telegramInquiryLink}
              target="_blank"
              rel="noreferrer"
            >
              {t("telegram")}
            </a>
          </div>
        </div>
      </div>
      {zoomOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onMouseDown={(e) => {
            if (e.target.classList.contains("modal-overlay")) setZoomOpen(false);
          }}
        >
          <div className="modal" style={{ maxWidth: 980 }}>
            <div className="modal-top">
              <div style={{ display: "grid", gap: 4 }}>
                <strong style={{ fontSize: 15 }}>{activeName}</strong>
                <span className="small">{t("zoom_help")}</span>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button
                  className="btn ghost"
                  type="button"
                  onClick={() => setZoomScale((value) => Math.max(1, Number((value - 0.25).toFixed(2))))}
                  style={{ borderRadius: 999 }}
                >
                  {t("zoom_out")}
                </button>
                <button
                  className="btn ghost"
                  type="button"
                  onClick={() => setZoomScale(2)}
                  style={{ borderRadius: 999 }}
                >
                  {t("reset")}
                </button>
                <button
                  className="btn primary"
                  type="button"
                  onClick={() => setZoomScale((value) => Math.min(4, Number((value + 0.25).toFixed(2))))}
                  style={{ borderRadius: 999 }}
                >
                  {t("zoom_in")}
                </button>
                <button className="btn ghost" type="button" onClick={() => setZoomOpen(false)} style={{ borderRadius: 999 }}>
                  {t("close")}
                </button>
              </div>
            </div>

            <div className="modal-body">
              <div
                style={{
                  overflow: "auto",
                  borderRadius: 22,
                  border: "1px solid rgba(184,199,221,.16)",
                  background: "rgba(255,255,255,.03)",
                  maxHeight: "75vh",
                }}
              >
                <img
                  src={activeImage}
                  alt={activeName}
                  style={{
                    display: "block",
                    width: `${zoomScale * 100}%`,
                    maxWidth: "none",
                    minWidth: "100%",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Modal({ title, onClose, children }) {
  const { t } = useLanguage();
  // close when clicking overlay
  const onOverlay = (e) => {
    if (e.target.classList.contains("modal-overlay")) onClose();
  };

  return (
    <div className="modal-overlay" onMouseDown={onOverlay} role="dialog" aria-modal="true">
      <div className="modal">
        <div className="modal-top">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <strong style={{ fontSize: 15 }}>{title}</strong>
            <span className="kbd">{t("esc_to_close")}</span>
          </div>

          <button className="btn ghost" onClick={onClose} style={{ borderRadius: 999 }}>
            {t("close")}
          </button>
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

