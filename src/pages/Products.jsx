import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { CATEGORY_PAGES } from "../data/categories.js";

const WHATSAPP_PHONE = "251965333435";
const PHONE_DISPLAY = "0965333435";
const TELEGRAM_URL = "tg://resolve?phone=251965333435";

const DEFAULT_NOTE_KEYS = [
  "custom_size_color",
  "delivery_ask_price",
  "high_quality_finishing",
];

const INITIAL_VISIBLE_PRODUCTS = 12;

let PRODUCT_SEQUENCE = 0;

const BEDS_2_FILES = [
  "31.webp",
  "32.webp",
  "33.webp",
  "34.webp",
  "35.webp",
  "36.webp",
  "37.webp",
  "38.webp",
  "39.webp",
  "40.webp",
  "41.webp",
  "42.webp",
  "43.webp",
  "44.webp",
  "45.webp",
  "46.webp",
  "47.webp",
  "48.webp",
  "49.webp",
  "50.webp",
  "51.webp",
  "52.webp",
  "53.webp",
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
];

const DOUBLE_BED_FILES = [
  "Double gray 1.webp",
  "Double gray.webp",
  "Double Pink.webp",
  "Double Purple.webp",
  "Double Sky blue.webp",
  "Triple Green.webp",
  "Triple Purple 1.webp",
  "Triple purpple.webp",
];

const BEDS_WEB_FILES = [
  "Batman-Bed-kid.jpg",
  "Blue-Leather-Bed.jpg",
  "boys-Kid-Bed.jpg",
  "Brown-Bed.jpg",
  "Brown-Bed1.jpg",
  "Cream-Square.jpg",
  "Cream-Texture-bed.jpg",
  "Cream-Textured-bed.jpg",
  "Dotted--Cream-bed.jpg",
  "Dotted--Cream-bed1.jpg",
  "Dotted--Cream-bed2.jpg",
  "Double-Bed.jpg",
  "Double-bed1.jpg",
  "Kids-bed-2.jpg",
  "Kids-bed-3.jpg",
  "Kids-Bed.jpg",
  "O-Shaped-Bed.jpg",
  "Odhaped-Bed-2.jpg",
  "Square-Bed-2.jpg",
  "Square-bed.jpg",
  "Square-Cream.jpg",
  "Square-Leather-bed-1.jpg",
  "Square-leather-Bed.jpg",
  "T-shabe-black-bed.jpg",
  "T-Shape-Black-Bed-2.jpg",
  "T-Shape-Black-Bed.jpg",
  "T-Shaped-cream-bed.jpg",
  "V-Shape-Cream-bed.jpg",
  "V-shape-Cream-bed1.jpg",
];

const SOFA_FILES = [
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

const DINING_FILES = [
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
];

const KIDS_BED_FILES = [
  "ball Kids.webp",
  "Butter Fly.webp",
  "Kitty and Batman.webp",
  "Kitty.webp",
  "Kitty1.webp",
  "Spider man and Butter Fly 2.webp",
  "Spider man and Butter Fly.webp",
  "Spider Man.webp",
];

const CLOSETS_FILES = [
  "1.webp",
  "2.webp",
  "3.webp",
];

const DRESSING_TABLE_FILES = [
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
];

const TV_STAND_FILES = [
  "1 (1).webp",
  "2 (1).webp",
  "3 (1).webp",
  "4.webp",
  "5.webp",
];

const FEATURED_LOOSE_FILES = [
  "sofa (1).webp",
  "sofa (3).webp",
  "sofa (4).webp",
  "sofa (5).webp",
  "sofa (6).webp",
  "sofa (7).webp",
  "sofa (8).webp",
  "sofa (9).webp",
];

const PRODUCT_CATALOG = [
  ...createProductsFromFiles(SOFA_FILES, "Sofas", "/products/Sofas _2", ["Custom", "Fabric", "Available"]),
  ...createProductsFromFiles(BEDS_2_FILES, "Beds", "/products/Beds_2", ["Custom", "Headboard", "Available"]),
  ...createProductsFromFiles(DOUBLE_BED_FILES, "Beds", "/products/Double Bed", ["Custom", "Color", "Available"]),
  ...createProductsFromFiles(BEDS_WEB_FILES, "Beds", "/products/beds web/images", ["Custom", "Size", "Available"]),
  ...createProductsFromFiles(KIDS_BED_FILES, "Kids Bed", "/products/Kids Bed", ["Custom", "Theme", "Available"]),
  ...createProductsFromFiles(DINING_FILES, "Dining", "/products/Dining table", ["Custom", "Size", "Available"]),
  ...createProductsFromFiles(
    DRESSING_TABLE_FILES.filter((fileName) => /studying|table/i.test(fileName)),
    "Office",
    "/products/Dressing Table",
    ["Custom", "Finish", "Available"],
  ),
  ...createProductsFromFiles(CLOSETS_FILES, "Storage", "/products/Closets", ["Custom", "Layout", "Available"]),
  ...createProductsFromFiles(TV_STAND_FILES, "Storage", "/products/TV Stands", ["Custom", "Finish", "Available"]),
  ...createProductsFromFiles(
    DRESSING_TABLE_FILES.filter((fileName) => !/studying|table/i.test(fileName)),
    "Others",
    "/products/Dressing Table",
    ["Custom", "Finish", "Available"],
  ),
  ...createProductsFromFiles(
    FEATURED_LOOSE_FILES.slice(0, 2),
    "Outdoor",
    "/products",
    ["Custom", "Material", "Available"],
  ),
  ...createProductsFromFiles(
    FEATURED_LOOSE_FILES.slice(2),
    "Others",
    "/products",
    ["Custom", "Design", "Available"],
  ),
];

export default function Products({
  category: forcedCategory,
  title,
  description,
}) {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [cart, setCart] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [requestOptionsId, setRequestOptionsId] = useState(null);
  const [zoom, setZoom] = useState(1);
  const [toast, setToast] = useState(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PRODUCTS);

  const selectedProduct = useMemo(
    () => PRODUCT_CATALOG.find((item) => item.id === selectedProductId) ?? null,
    [selectedProductId],
  );

  useEffect(() => {
    if (!toast) return undefined;

    const timeout = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    if (!selectedProduct) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProductId(null);
        setRequestOptionsId(null);
        setZoom(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProduct]);

  const currentCategory = forcedCategory || "All";

  const availableCategories = useMemo(() => {
    if (forcedCategory) {
      return CATEGORY_PAGES.filter((page) => page.label === forcedCategory);
    }

    return CATEGORY_PAGES;
  }, [forcedCategory]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    let items = PRODUCT_CATALOG.filter((item) => {
      const matchesCategory = currentCategory === "All" || item.category === currentCategory;
      const matchesSearch =
        !normalizedSearch ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.description.toLowerCase().includes(normalizedSearch) ||
        item.category.toLowerCase().includes(normalizedSearch) ||
        item.colors.some((color) => color.toLowerCase().includes(normalizedSearch));

      return matchesCategory && matchesSearch;
    });

    items = [...items].sort((left, right) => {
      switch (sort) {
        case "name":
          return left.name.localeCompare(right.name);
        default:
          return left.order - right.order;
      }
    });

    return items;
  }, [currentCategory, search, sort]);

  const cartItems = useMemo(() => {
    return cart
      .map((entry) => {
        const product = PRODUCT_CATALOG.find((item) => item.id === entry.id);
        if (!product) return null;

        return {
          ...product,
          quantity: entry.quantity,
        };
      })
      .filter(Boolean);
  }, [cart]);

  const whatsappCartUrl = useMemo(() => {
    const lines = [
      "Hello Galaxy Furniture, I want to place this order:",
      "",
      ...cartItems.map(
        (item, index) => `${index + 1}. ${item.name} x${item.quantity}`,
      ),
    ];

    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [cartItems]);

  const pageTitle = title || t("products");
  const pageDescription = description || t("products_intro");
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMoreProducts = filteredProducts.length > visibleCount;

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_PRODUCTS);
  }, [currentCategory, search, sort]);

  return (
    <div className="page">
      <div className="container" style={{ display: "grid", gap: 22 }}>
        <section
          className="card"
          style={{
            padding: "26px clamp(18px, 3vw, 30px)",
            display: "grid",
            gap: 16,
            background:
              "linear-gradient(135deg, rgba(255,215,0,.08), rgba(255,255,255,.03) 40%, rgba(10,25,47,.98))",
          }}
        >
          <span className="badge">{t("shop_by_category")}</span>
          <div className="products-hero-layout" style={{ gap: 18, alignItems: "start" }}>
            <div style={{ display: "grid", gap: 12 }}>
              <h1 className="h1">{pageTitle}</h1>
              <p className="p">{pageDescription}</p>
              {!forcedCategory && (
                <div className="filters">
                  <Link className="btn ghost" to="/products">
                    {t("products")}
                  </Link>
                  {availableCategories.map((page) => (
                    <Link key={page.slug} className="btn ghost" to={`/${page.slug}`}>
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="card" style={{ padding: 18, display: "grid", gap: 10 }}>
              <strong>{t("cart_summary")}</strong>
              <div className="small">{t("cart_demo")}</div>
              <div className="chip" style={{ justifyContent: "space-between" }}>
                <span>{filteredProducts.length} {t("items")}</span>
                <span>{cartItems.length} {t("cart")}</span>
              </div>
              <div className="small">
                {forcedCategory ? `${t("products")}: ${forcedCategory}` : pageDescription}
              </div>
            </div>
          </div>
        </section>

        <section className="products-layout" style={{ alignItems: "start", gap: 18 }}>
          <div className="products-main" style={{ display: "grid", gap: 18 }}>
            <div className="card" style={{ padding: 18, display: "grid", gap: 14 }}>
              <div className="filters" style={{ justifyContent: "space-between" }}>
                <input
                  className="field"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder={t("search_products")}
                  style={{ flex: "1 1 280px" }}
                />
                <select
                  className="select"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="featured">{t("sort_featured")}</option>
                  <option value="name">{t("sort_name")}</option>
                </select>
              </div>

              {!forcedCategory && (
                <div className="filters">
                  {CATEGORY_PAGES.map((page) => (
                    <Link
                      key={page.slug}
                      className="btn ghost"
                      to={`/${page.slug}`}
                      style={{ paddingInline: 14 }}
                    >
                      {page.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="card" style={{ padding: 22, display: "grid", gap: 8 }}>
                <strong>{t("no_results")}</strong>
                <div className="small">{t("try_changing")}</div>
              </div>
            ) : (
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                  gap: 18,
                }}
              >
                {visibleProducts.map((product) => (
                  <article
                    key={product.id}
                    className="card hover-lift"
                    style={{ overflow: "hidden", display: "grid", gridTemplateRows: "220px auto" }}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProductId(product.id);
                        setZoom(1);
                      }}
                      style={imageButtonStyle}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </button>

                    <div style={{ padding: 18, display: "grid", gap: 12 }}>
                      <div style={{ display: "grid", gap: 8 }}>
                        <div className="badge" style={{ width: "fit-content" }}>
                          {product.category}
                        </div>
                        <h2 className="h2" style={{ fontSize: 22, marginBottom: 0 }}>
                          {product.name}
                        </h2>
                        <p className="small">{product.description}</p>
                      </div>

                      <div className="small">{t("colors")}: {product.colors.join(", ")}</div>

                      <div style={{ display: "grid", gap: 8 }}>
                        <button
                          type="button"
                          className="btn primary"
                          onClick={() => addToCart(product, setCart, setToast, t)}
                        >
                          {t("add_to_cart")}
                        </button>
                        <div style={{ display: "grid", gap: 8 }}>
                          <div className="filters">
                            <button
                              type="button"
                              className="btn ghost"
                              onClick={() =>
                                setRequestOptionsId((current) =>
                                  current === product.id ? null : product.id,
                                )
                              }
                            >
                              {t("request_price")}
                            </button>
                            <button
                              type="button"
                              className="btn ghost"
                              onClick={() => {
                                setSelectedProductId(product.id);
                                setRequestOptionsId(null);
                                setZoom(1);
                              }}
                            >
                              {t("magnify")}
                            </button>
                          </div>

                          {requestOptionsId === product.id && (
                            <div className="filters">
                              <a
                                className="btn ghost"
                                href={TELEGRAM_URL}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {t("telegram")}
                              </a>
                              <a
                                className="btn ghost"
                                href={buildWhatsAppInquiryUrl(product)}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {t("whatsapp")}
                              </a>
                              <a
                                className="btn ghost"
                                href={`tel:${PHONE_DISPLAY}`}
                              >
                                {t("call")}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {hasMoreProducts && (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => setVisibleCount((current) => current + INITIAL_VISIBLE_PRODUCTS)}
                >
                  More
                </button>
              </div>
            )}
          </div>

          <aside className="card products-cart" style={{ padding: 18, display: "grid", gap: 14, position: "sticky", top: 16 }}>
            <div style={{ display: "grid", gap: 6 }}>
              <strong>{t("cart_summary")}</strong>
              <div className="small">{t("cart_demo")}</div>
            </div>

            {cartItems.length === 0 ? (
              <div className="small">{t("cart_empty")}</div>
            ) : (
              <div style={{ display: "grid", gap: 10 }}>
                {cartItems.map((item) => (
                  <div key={item.id} className="chip" style={{ display: "grid", gap: 6 }}>
                    <strong style={{ fontSize: 15 }}>{item.name}</strong>
                    <div className="small">{item.quantity} {t("items")}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="products-cart-actions" style={{ display: "grid", gap: 10 }}>
              <a
                className="btn primary"
                href={cartItems.length ? whatsappCartUrl : undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={!cartItems.length}
                style={!cartItems.length ? disabledButtonStyle : undefined}
              >
                {t("send_order_whatsapp")}
              </a>
              <a
                className="btn ghost"
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  `${t("bank_transfer_checkout")}\n${t("send_receipt")}`,
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                {t("bank_transfer")}
              </a>
              <button
                type="button"
                className="btn ghost"
                onClick={() => setCart([])}
                disabled={!cartItems.length}
                style={!cartItems.length ? disabledButtonStyle : undefined}
              >
                {t("clear_cart")}
              </button>
            </div>
          </aside>
        </section>
      </div>

      {toast && (
        <div className="toast-wrap">
          <div className="toast">
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "var(--gold)", marginTop: 6 }} />
            <div>
              <strong>{toast.title}</strong>
              <div className="small">{toast.description}</div>
            </div>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div
          className="modal-overlay"
          role="presentation"
          onClick={() => {
            setSelectedProductId(null);
            setRequestOptionsId(null);
            setZoom(1);
          }}
        >
          <div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.name}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-top">
              <div style={{ display: "grid", gap: 4 }}>
                <strong>{t("product_detail")}</strong>
                <div className="small">
                  {t("esc_to_close")} | {selectedProduct.category}
                </div>
              </div>
              <button
                type="button"
                className="btn ghost"
                onClick={() => {
                  setSelectedProductId(null);
                  setRequestOptionsId(null);
                  setZoom(1);
                }}
              >
                {t("close")}
              </button>
            </div>

            <div className="modal-body">
              <div className="grid cols-2" style={{ gap: 18, alignItems: "start" }}>
                <div className="card" style={{ overflow: "hidden", background: "#091223" }}>
                  <div style={{ overflow: "auto", maxHeight: "68vh" }}>
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      style={{
                        width: "100%",
                        transform: `scale(${zoom})`,
                        transformOrigin: "center center",
                        transition: "transform .15s ease",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gap: 14 }}>
                  <div style={{ display: "grid", gap: 8 }}>
                    <div className="badge" style={{ width: "fit-content" }}>
                      {selectedProduct.category}
                    </div>
                    <h2 className="h2" style={{ marginBottom: 0 }}>
                      {selectedProduct.name}
                    </h2>
                    <p className="p">{selectedProduct.description}</p>
                    <p className="small">{t("zoom_help")}</p>
                  </div>

                  <div className="filters">
                    <button
                      type="button"
                      className="btn ghost"
                      onClick={() => setZoom((value) => Math.max(1, Number((value - 0.2).toFixed(2))))}
                    >
                      {t("zoom_out")}
                    </button>
                    <button
                      type="button"
                      className="btn ghost"
                      onClick={() => setZoom(1)}
                    >
                      {t("reset")}
                    </button>
                    <button
                      type="button"
                      className="btn ghost"
                      onClick={() => setZoom((value) => Math.min(2.6, Number((value + 0.2).toFixed(2))))}
                    >
                      {t("zoom_in")}
                    </button>
                  </div>

                  <div className="card" style={{ padding: 16, display: "grid", gap: 10 }}>
                    <strong>{t("included_notes")}</strong>
                    {selectedProduct.noteKeys.map((noteKey) => (
                      <div key={noteKey} className="small">
                        - {t(noteKey)}
                      </div>
                    ))}
                  </div>

                  <div className="card" style={{ padding: 16, display: "grid", gap: 8 }}>
                    <strong>{t("colors")}</strong>
                    <div className="small">{selectedProduct.colors.join(", ")}</div>
                  </div>

                  <div className="filters">
                    <button
                      type="button"
                      className="btn primary"
                      onClick={() => addToCart(selectedProduct, setCart, setToast, t)}
                    >
                      {t("add_to_cart")}
                    </button>
                    <button
                      type="button"
                      className="btn ghost"
                      onClick={() =>
                        setRequestOptionsId((current) =>
                          current === selectedProduct.id ? null : selectedProduct.id,
                        )
                      }
                    >
                      {t("request_price")}
                    </button>
                  </div>

                  {requestOptionsId === selectedProduct.id && (
                    <div className="filters">
                      <a
                        className="btn ghost"
                        href={TELEGRAM_URL}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("telegram")}
                      </a>
                      <a
                        className="btn ghost"
                        href={buildWhatsAppInquiryUrl(selectedProduct)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t("whatsapp")}
                      </a>
                      <a
                        className="btn ghost"
                        href={`tel:${PHONE_DISPLAY}`}
                      >
                        {t("call")}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function createProduct(id, name, category, image, _price, colors, noteKeys = DEFAULT_NOTE_KEYS) {
  return {
    id,
    name,
    category,
    image,
    description: buildDescription(name, category),
    colors,
    noteKeys,
    order: PRODUCT_SEQUENCE++,
  };
}

function createProductsFromFiles(files, category, basePath, colors) {
  return files.map((fileName) =>
    createProduct(
      `${slugify(category)}-${slugify(fileName)}`,
      labelFromFileName(fileName, category),
      category,
      `${basePath}/${fileName}`,
      0,
      colors,
    ),
  );
}

function addToCart(product, setCart, setToast, t) {
  setCart((current) => {
    const existing = current.find((entry) => entry.id === product.id);

    if (existing) {
      return current.map((entry) =>
        entry.id === product.id
          ? { ...entry, quantity: entry.quantity + 1 }
          : entry,
      );
    }

    return [...current, { id: product.id, quantity: 1 }];
  });

  setToast({
    title: product.name,
    description: t("add_to_cart"),
  });
}

function buildWhatsAppInquiryUrl(product) {
  const message = [
    "Hello Galaxy Furniture,",
    `I want to ask about: ${product.name}`,
    `Category: ${product.category}`,
    `Image: ${product.image}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function labelFromFileName(fileName, category = "") {
  const cleaned = fileName
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\((\d+)\)/g, "$1")
    .trim();

  if (category === "Dining") {
    const variantMatch = cleaned.match(/(\d+)$/);
    const variant = variantMatch ? ` ${variantMatch[1]}` : "";

    if (/metal frame/i.test(cleaned)) {
      const chairMatch = cleaned.match(/(\d+)\s*chair/i);
      const chairLabel = chairMatch ? `${chairMatch[1]} Chair ` : "";
      return `${chairLabel}Metal Frame Dining Set${variant}`.trim();
    }

    if (/(\d+)\s*chair/i.test(cleaned)) {
      const chairCount = cleaned.match(/(\d+)\s*chair/i)?.[1];
      return `${chairCount} Chair Dining Table${variant}`.trim();
    }

    return `Dining Set${variant}`.trim();
  }

  if (/^\d+(\s+\d+)?$/.test(cleaned)) {
    return `${category} Design ${cleaned}`;
  }

  return cleaned;
}

function buildDescription(name, category) {
  switch (category) {
    case "Sofas":
      return `${name} features a stylish sofa layout with comfortable seating, premium finishing, and customization options for modern living spaces.`;
    case "Beds":
      return `${name} is designed for comfort, strong structure, and a refined bedroom look, with customization available for size, headboard, and finish.`;
    case "Kids Bed":
      return `${name} brings a playful design, comfortable sleeping space, and family-friendly styling for children's bedrooms.`;
    case "Dining":
      return `${name} is built for everyday dining, family gatherings, and a polished dining-room setup with practical finishing and durable construction.`;
    case "Office":
      return `${name} supports productive workspaces with a clean professional look, practical surface area, and a finish suited for daily use.`;
    case "Storage":
      return `${name} helps organize the home with a practical layout, clean lines, and a finish designed to suit modern interiors.`;
    case "Outdoor":
      return `${name} offers a relaxed seating style and a durable finish suited for balconies, patios, and casual outdoor settings.`;
    default:
      return `${name} showcases Galaxy Furniture craftsmanship with a distinctive design, quality finishing, and flexible customization options.`;
  }
}

const imageButtonStyle = {
  padding: 0,
  border: 0,
  background: "transparent",
  cursor: "pointer",
  width: "100%",
  height: "100%",
};

const disabledButtonStyle = {
  opacity: 0.45,
  pointerEvents: "none",
};
