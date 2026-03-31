import { useEffect, useMemo, useRef, useState } from "react";

const PHONE = "0965333435";
const WHATSAPP = "https://wa.me/251965333435";
const CURRENCY = "ETB";

const BED_PRODUCTS = [
  {
    id: "bed-blue-leather",
    category: "Beds",
    name: "Blue Leather Bed",
    description: "Bold leather bed design with a premium headboard and a polished modern look.",
    price: 84000,
    image: "/products/beds%20web/images/Blue-Leather-Bed.jpg",
  },
  {
    id: "bed-brown",
    category: "Beds",
    name: "Brown Bed",
    description: "Warm brown finish with a clean profile designed for elegant and comfortable bedrooms.",
    price: 79000,
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
    price: 81000,
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
    price: 83500,
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
    price: 76000,
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
    price: 54000,
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
    price: 88000,
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
    price: 86000,
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
    price: 89000,
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
    price: 84500,
    image: "/products/beds%20web/images/V-Shape-Cream-bed.jpg",
    variants: [
      { id: "bed-v-shape-1", label: "V-Shape Cream Bed", color: "Cream", image: "/products/beds%20web/images/V-Shape-Cream-bed.jpg" },
      { id: "bed-v-shape-2", label: "V-Shape Cream Bed 2", color: "Cream", image: "/products/beds%20web/images/V-shape-Cream-bed1.jpg" },
    ],
  },
];

// ✅ Edit your products here
const PRODUCTS = [
  // Sofas
  {
    id: "sofa-1",
    category: "Sofas",
    name: "Royal L-Shape Sofa",
    description: "Modern L-shape sofa with premium fabric and strong foam for daily comfort.",
    price: 85000,
    image: "/src/assets/products/sofa-1.jpg",
  },
  {
    id: "sofa-2",
    category: "Sofas",
    name: "Classic 3-Seater Sofa",
    description: "Elegant design with durable frame and soft cushions—perfect for living rooms.",
    price: 62000,
    image: "/src/assets/products/sofa-2.jpg",
  },
  {
    id: "sofa-3",
    category: "Sofas",
    name: "Sofa Collection 1",
    description: "Spacious sofa set with soft cushions and a clean, modern silhouette.",
    price: 70000,
    image: "/products/sofa%20(1).jpg",
  },
  {
    id: "sofa-4",
    category: "Sofas",
    name: "Sofa Collection 2",
    description: "Comfort-first seating with sturdy build and premium upholstery.",
    price: 72000,
    image: "/products/sofa%20(2).JPG",
  },
  {
    id: "sofa-5",
    category: "Sofas",
    name: "Sofa Collection 3",
    description: "Balanced design with deep seating and supportive back cushions.",
    price: 68000,
    image: "/products/sofa%20(3).JPG",
  },
  {
    id: "sofa-6",
    category: "Sofas",
    name: "Sofa Collection 4",
    description: "Elegant living room set with durable fabric and smooth finishing.",
    price: 76000,
    image: "/products/sofa%20(4).JPG",
  },
  {
    id: "sofa-7",
    category: "Sofas",
    name: "Sofa Collection 5",
    description: "Cozy seating with strong frame and premium foam comfort.",
    price: 74000,
    image: "/products/sofa%20(5).JPG",
  },
  {
    id: "sofa-8",
    category: "Sofas",
    name: "Sofa Collection 6",
    description: "Modern profile with wide seats and a refined look.",
    price: 71000,
    image: "/products/sofa%20(6).jpg",
  },
  {
    id: "sofa-9",
    category: "Sofas",
    name: "Sofa Collection 7",
    description: "Soft-touch upholstery with supportive cushions for daily use.",
    price: 73000,
    image: "/products/sofa%20(7).jpg",
  },
  {
    id: "sofa-10",
    category: "Sofas",
    name: "Sofa Collection 8",
    description: "Premium sofa set designed for style and long-lasting comfort.",
    price: 78000,
    image: "/products/sofa%20(8).jpg",
  },

  // Beds
  ...BED_PRODUCTS,

  // Tables
  {
    id: "table-1",
    category: "Dining",
    name: "Dining Table (6 Seats)",
    description: "Solid, spacious dining table set designed for family meals and gatherings.",
    price: 69000,
    image: "/src/assets/products/table-1.jpg",
  },

  // Wardrobes
  {
    id: "wardrobe-1",
    category: "Storage",
    name: "Modern Wardrobe",
    description: "Smart storage with smooth finishing, strong hinges, and clean modern look.",
    price: 74000,
    image: "/src/assets/products/wardrobe-1.jpg",
  },

  // Office
  {
    id: "office-1",
    category: "Office",
    name: "Executive Office Desk",
    description: "Professional desk with storage and premium finishing for offices.",
    price: 52000,
    image: "/src/assets/products/office-1.jpg",
  },
  {
    id: "outdoor-1",
    category: "Outdoor",
    name: "Patio Lounge Set",
    description: "Comfortable outdoor seating set made for balconies, patios, and open-air spaces.",
    price: 58000,
    image: "/products/outdoor-1.jpg",
  },
  {
    id: "outdoor-2",
    category: "Outdoor",
    name: "Garden Dining Set",
    description: "Outdoor dining setup with durable construction and a clean contemporary look.",
    price: 64000,
    image: "/products/outdoor-2.jpg",
  },
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
  return str.length > max ? str.slice(0, max - 1) + "…" : str;
}

function colorSwatch(color) {
  const palette = {
    black: "#191919",
    cream: "#e9dcc5",
    brown: "#6b4a2f",
    blue: "#2d5da8",
  };
  return palette[String(color || "").toLowerCase()] || "#8d96a8";
}

export default function Products({
  category: initialCategory = "All",
  title,
  description,
}) {
  // Filters
  const categories = useMemo(() => uniqCategories(PRODUCTS), []);
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("featured"); // featured | priceLow | priceHigh | name

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
      message: `${product.name} • ${formatMoney(product.price)}`,
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

  const orderText = encodeURIComponent(
    `Hello Galaxy Furniture, I want to order:\n` +
      (cart.length
        ? cart.map((x) => `- ${x.name} x${x.qty} (${formatMoney(x.price)})`).join("\n")
        : "- (No items yet)") +
      `\nTotal: ${formatMoney(cartTotal)}\nPhone: ${PHONE}`
  );

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
            <span className="badge">{initialCategory === "All" ? "Products" : initialCategory}</span>
            <h1 className="h1">{title || "Shop by category"}</h1>
            <p className="p">
              {description || "Filter items, open details, add to cart, then send your order on WhatsApp."}
            </p>
          </div>

          <div className="chip" style={{ alignSelf: "flex-start" }}>
            <span className="small">Cart</span>
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
            placeholder="Search products… (sofa, bed, wardrobe)"
            style={{ minWidth: 260 }}
          />

          <select className="select" value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="featured">Sort: Featured</option>
            <option value="priceLow">Sort: Price (Low → High)</option>
            <option value="priceHigh">Sort: Price (High → Low)</option>
            <option value="name">Sort: Name (A → Z)</option>
          </select>

          <a className="btn ghost" href={`tel:${PHONE}`} style={{ borderRadius: 999 }}>
            Call: {PHONE}
          </a>
        </div>
      </section>

      {/* Category sections (from filtered results) */}
      {Object.keys(grouped).length === 0 ? (
        <section className="card" style={{ padding: 22 }}>
          <h2 className="h2" style={{ marginBottom: 6 }}>No results</h2>
          <p className="p">Try changing the category or search text.</p>
        </section>
      ) : (
        Object.entries(grouped).map(([cat, items]) => (
          <section key={cat} className="grid" style={{ gap: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <h2 className="h2" style={{ margin: 0 }}>{cat}</h2>
              <div className="chip">
                <span className="small">{items.length} items</span>
              </div>
            </div>

            <div className="grid cols-3">
              {items.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onOpen={setActive}
                  onAdd={addToCart}
                />
              ))}
            </div>
          </section>
        ))
      )}

      {/* Cart summary */}
      <section className="card" style={{ padding: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h2 className="h2" style={{ marginBottom: 6 }}>Cart Summary</h2>
            <p className="p">Demo cart. You can send the order via WhatsApp or pay by bank transfer.</p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button className="btn ghost" onClick={clearCart} style={{ borderRadius: 999 }}>
              Clear Cart
            </button>
            <a
              className="btn primary"
              href={`${WHATSAPP}?text=${orderText}`}
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 999 }}
            >
              Send Order on WhatsApp
            </a>
          </div>
        </div>

        <hr className="hr" />

        {cart.length === 0 ? (
          <p className="p">Your cart is empty. Add products to see them here.</p>
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
                  <span className="small">
                    {formatMoney(x.price)} × {x.qty}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontWeight: 900 }}>{formatMoney(x.price * x.qty)}</span>
                  <button className="btn ghost" onClick={() => removeOne(x.id)} style={{ borderRadius: 999 }}>
                    Remove 1
                  </button>
                </div>
              </div>
            ))}

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 6 }}>
              <div className="chip" style={{ borderColor: "rgba(255,215,0,.30)" }}>
                <span className="small">Total</span>
                <strong style={{ marginLeft: 10, color: "#FFD700" }}>{formatMoney(cartTotal)}</strong>
              </div>
            </div>

            <div className="chip" style={{ justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <div>
                <strong>Bank transfer checkout</strong>
                <div className="small">Send your receipt via WhatsApp after transfer.</div>
              </div>
              <button
                className="btn ghost"
                onClick={() =>
                  pushToast({
                    title: "Bank transfer",
                    message: "Please use your preferred bank and send the receipt to WhatsApp.",
                  })
                }
                style={{ borderRadius: 999 }}
              >
                Bank Transfer
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Product detail modal */}
      {active && (
        <Modal title="Product Detail" onClose={() => setActive(null)}>
          <ProductDetail product={active} onAdd={addToCart} />
        </Modal>
      )}
    </div>
  );
}

function ProductCard({ product, onOpen, onAdd }) {
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
            <div style={{ color: "#FFD700", fontWeight: 950 }}>{formatMoney(product.price)}</div>
          </div>

          <div style={{ color: "rgba(184,199,221,.92)", fontSize: 13, lineHeight: 1.55 }}>
            {clampText(product.description, 110)}
          </div>

          {colors.length > 1 && (
            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <span className="small">Colors:</span>
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
          Add to Cart
        </button>
        <a className="btn ghost" href={`tel:${PHONE}`} style={{ borderRadius: 999 }}>
          Call
        </a>
      </div>
    </div>
  );
}

function ProductDetail({ product, onAdd }) {
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

  const selectColor = (color) => {
    const nextIndex = variants.findIndex((variant) => variant.color === color);
    if (nextIndex >= 0) setActiveIndex(nextIndex);
  };

  return (
    <div className="grid cols-2" style={{ gap: 16 }}>
      <div style={{ display: "grid", gap: 10 }}>
        <div className="mapWrap" style={{ borderRadius: 22 }}>
          <img
            src={activeImage}
            alt={activeName}
            style={{ width: "100%", height: "100%", minHeight: 320, objectFit: "cover", display: "block" }}
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=60";
            }}
          />
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
                <span className="small">Colors:</span>
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
        <div style={{ color: "#FFD700", fontWeight: 950, fontSize: 18 }}>
          {formatMoney(product.price)}
        </div>

        <p className="p" style={{ fontSize: 14 }}>
          {product.description}
        </p>

        <div className="card" style={{ padding: 14, borderRadius: 18, borderColor: "rgba(255,215,0,.16)" }}>
          <div className="small">Included / Notes</div>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "rgba(184,199,221,.95)", lineHeight: 1.7 }}>
            <li>Custom size & color available</li>
            <li>Delivery available (ask for price)</li>
            <li>High-quality materials & finishing</li>
          </ul>
        </div>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 4 }}>
          <button className="btn primary" style={{ borderRadius: 999 }} onClick={() => onAdd(detailProduct)}>
            Add to Cart
          </button>
          <a className="btn ghost" style={{ borderRadius: 999 }} href={`tel:${PHONE}`}>
            Call
          </a>
          <a
            className="btn"
            style={{ borderRadius: 999 }}
            href={`${WHATSAPP}?text=${encodeURIComponent(`Hello Galaxy Furniture, I want this product: ${detailProduct.name} (${formatMoney(detailProduct.price)})`)}`}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function Modal({ title, onClose, children }) {
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
            <span className="kbd">ESC to close</span>
          </div>

          <button className="btn ghost" onClick={onClose} style={{ borderRadius: 999 }}>
            Close
          </button>
        </div>

        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
