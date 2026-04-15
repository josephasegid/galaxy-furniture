import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CATEGORY_PAGES } from "../data/categories.js";

const SITE_NAME = "Galaxy Furniture";
const DEFAULT_DESCRIPTION =
  "Galaxy Furniture is a premium furniture showroom in Addis Ababa offering sofas, beds, dining tables, storage solutions, and office furniture.";
const DEFAULT_IMAGE = "/brand/logo.png";
const PHONE_DISPLAY = "0965333435";
const PHONE_E164 = "+251965333435";
const SOCIAL_LINKS = [
  "https://www.tiktok.com/@galaxyfurniture4?_r=1&_t=ZS-9534VLbGl1h",
  "https://www.facebook.com/share/1E4SqiYmMn/",
  "https://www.instagram.com/galax.yfurniture?igsh=MWdwY2kxd3JuenY5YQ==",
  "https://t.me/Galaxy_furniture",
];

const PAGE_META = {
  "/": {
    title: "Galaxy Furniture | Addis Ababa Furniture Showroom for Sofas and Bedroom Sets",
    description:
      "Shop sofas, bedroom sets, beds, dining tables, and modern Ethiopian furniture at Galaxy Furniture in Addis Ababa.",
    keywords:
      "Galaxy Furniture, Addis Ababa furniture, Ethiopian furniture, Galaxy furniture sofas, Galaxy furniture bedroom sets, furniture in Ethiopia price",
    type: "WebSite",
    image: "/hero/images/optimized.jpg",
  },
  "/products": {
    title: "Furniture in Ethiopia Price | Galaxy Furniture Addis Ababa Collection",
    description:
      "Browse Galaxy Furniture sofas, bedroom sets, beds, dining furniture, wardrobes, dressing tables, and TV stands with direct price requests.",
    keywords:
      "furniture in Ethiopia price, Addis Ababa furniture, Galaxy furniture sofas, Galaxy furniture bedroom sets, Ethiopian furniture price",
    type: "CollectionPage",
    image: "/products/sofa%20(7).webp",
  },
  "/branches": {
    title: "Galaxy Furniture Near Me | Showroom Branches in Addis Ababa",
    description:
      "Find Galaxy Furniture showrooms in Addis Ababa, including Showroom 3 in Goro, with maps for customers searching for Galaxy Furniture near me or near Bole.",
    keywords:
      "Galaxy furniture near me, Galaxy furniture near bole addis ababa, Galaxy furniture showroom no 3, furniture showroom Addis Ababa, Goro furniture",
    type: "WebPage",
    image: "/products/sofa%20(5).webp",
  },
  "/about": {
    title: "About Galaxy Furniture | Premium Furniture Brand",
    description:
      "Learn about Galaxy Furniture, our owner, workshop, showroom vision, and commitment to quality furniture in Addis Ababa.",
    keywords:
      "about Galaxy Furniture, furniture brand Addis Ababa, furniture workshop Ethiopia, premium furniture showroom",
    type: "AboutPage",
    image: "/products/sofa%20(4).webp",
  },
  "/contact": {
    title: "Contact Galaxy Furniture | Call, WhatsApp, and Social Links",
    description:
      "Contact Galaxy Furniture for product pricing, custom orders, showroom visits, and furniture recommendations in Addis Ababa.",
    keywords:
      "contact Galaxy Furniture, WhatsApp furniture Addis Ababa, custom furniture Ethiopia, furniture prices Addis Ababa",
    type: "ContactPage",
    image: "/products/sofa%20(8).webp",
  },
};

function ensureMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function ensureLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function ensureJsonLd(id, data) {
  let element = document.head.querySelector(`#${id}`);

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.id = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function buildBreadcrumbs(origin, pathname, title) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${origin}/`,
    },
  ];

  if (pathname !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: title.replace(` | ${SITE_NAME}`, ""),
      item: `${origin}${pathname}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

function getPageMeta(pathname) {
  const categoryPage = CATEGORY_PAGES.find((page) => `/${page.slug}` === pathname);

  if (categoryPage) {
    return {
      title: `${categoryPage.title} | ${SITE_NAME} Addis Ababa`,
      description:
        categoryPage.slug === "beds"
          ? `${categoryPage.description} Explore Galaxy Furniture bedroom sets and beds in Addis Ababa with direct price requests.`
          : categoryPage.slug === "sofas"
            ? `${categoryPage.description} Browse Galaxy Furniture sofas in Addis Ababa and request prices directly.`
            : categoryPage.description,
      keywords:
        categoryPage.slug === "beds"
          ? "Galaxy furniture bedroom sets, beds Addis Ababa, bedroom furniture Ethiopia, Addis Ababa furniture"
          : categoryPage.slug === "sofas"
            ? "Galaxy furniture sofas, sofas Addis Ababa, Ethiopian furniture sofas, Addis Ababa furniture"
            : `${categoryPage.label} Addis Ababa, ${categoryPage.label.toLowerCase()} Ethiopia, Galaxy Furniture ${categoryPage.label.toLowerCase()}`,
      type: "CollectionPage",
      image:
        categoryPage.slug === "beds"
          ? "/hero/images/optimized.jpg"
          : categoryPage.slug === "dining"
            ? "/products/sofa%20(2).webp"
            : "/products/sofa%20(1).webp",
    };
  }

  return (
    PAGE_META[pathname] || {
      title: `${SITE_NAME} | Premium Furniture Showroom`,
      description: DEFAULT_DESCRIPTION,
      keywords:
        "Galaxy Furniture, premium furniture, sofas, beds, dining tables, Addis Ababa furniture showroom",
      type: "WebPage",
      image: DEFAULT_IMAGE,
    }
  );
}

export default function Seo() {
  const location = useLocation();
  const pathname = location.pathname || "/";

  const meta = useMemo(() => getPageMeta(pathname), [pathname]);

  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = `${origin}${pathname}`;
    const imageUrl = new URL(meta.image || DEFAULT_IMAGE, origin).toString();

    document.title = meta.title;
    document.documentElement.lang = "en";

    ensureMeta('meta[name="description"]', {
      name: "description",
      content: meta.description || DEFAULT_DESCRIPTION,
    });
    ensureMeta('meta[name="keywords"]', {
      name: "keywords",
      content: meta.keywords,
    });
    ensureMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });
    ensureMeta('meta[name="theme-color"]', {
      name: "theme-color",
      content: "#081728",
    });
    ensureMeta('meta[property="og:title"]', {
      property: "og:title",
      content: meta.title,
    });
    ensureMeta('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description || DEFAULT_DESCRIPTION,
    });
    ensureMeta('meta[property="og:type"]', {
      property: "og:type",
      content: pathname === "/" ? "website" : "article",
    });
    ensureMeta('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
    ensureMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: SITE_NAME,
    });
    ensureMeta('meta[property="og:image"]', {
      property: "og:image",
      content: imageUrl,
    });
    ensureMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: meta.title,
    });
    ensureMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: meta.description || DEFAULT_DESCRIPTION,
    });
    ensureMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: imageUrl,
    });
    ensureLink('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": meta.type,
      name: meta.title,
      description: meta.description || DEFAULT_DESCRIPTION,
      url: canonicalUrl,
      isPartOf: {
        "@type": "WebSite",
        name: SITE_NAME,
        url: origin,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    };

    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "FurnitureStore",
      name: SITE_NAME,
      image: imageUrl,
      url: origin,
      telephone: PHONE_E164,
      areaServed: "Addis Ababa, Ethiopia",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
      sameAs: SOCIAL_LINKS,
      department: [
        {
          "@type": "Store",
          name: "Galaxy Furniture - Semit 72",
        },
        {
          "@type": "Store",
          name: "Galaxy Furniture - Figa",
        },
        {
          "@type": "Store",
          name: "Galaxy Furniture - Goro",
        },
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE_E164,
          contactType: "customer service",
          areaServed: "ET",
          availableLanguage: ["en"],
        },
      ],
    };

    ensureJsonLd("seo-webpage-schema", webPageSchema);
    ensureJsonLd("seo-business-schema", businessSchema);
    ensureJsonLd("seo-breadcrumb-schema", buildBreadcrumbs(origin, pathname, meta.title));
  }, [meta, pathname]);

  return null;
}
