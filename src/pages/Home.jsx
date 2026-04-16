import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal.js";
import useCountUp from "../hooks/useCountUp.js";
import useInView from "../hooks/useInView.js";

const PHONE = "0965333435";
const WHATSAPP =
  "https://wa.me/251965333435?text=Hello%20Galaxy%20Furniture%2C%20I%20want%20to%20ask%20about%20furniture.";

const CATEGORY_CARDS = [
  {
    title: "Sofas",
    to: "/sofas",
    description: "Premium seating for modern living rooms, family spaces, and elegant interiors.",
    image: "/products/Royal%20L-Shape%20Sofa.jpg",
  },
  {
    title: "Beds",
    to: "/beds",
    description: "Comfort-first bedroom furniture with strong structure, clean lines, and refined finishing.",
    image: "/products/Luxury%20Bedroom%20Set.webp",
  },
  {
    title: "Dining Tables",
    to: "/dining",
    description: "Stylish dining sets made for everyday family use and memorable gatherings.",
    image: "/products/Dining%20table/6%20chair%20dining%20table%20,%20with%20strong%20woods%20,%20uv%20top%20,%20hd%20sponge%20(1).webp",
  },
  {
    title: "Coffee Tables",
    to: "/products",
    description: "Compact accent pieces that complete living spaces with practicality and style.",
    image: "/products/Sofas%20_2/King%20Golden%20coffee%20table.webp",
  },
  {
    title: "TV Stands",
    to: "/storage",
    description: "Functional media units with a polished look, smart storage, and durable build quality.",
    image: "/products/TV%20Stands/4.webp",
  },
  {
    title: "Wardrobes",
    to: "/storage",
    description: "Modern storage solutions designed to organize bedrooms beautifully.",
    image: "/products/Closets/2.webp",
  },
  {
    title: "Office Furniture",
    to: "/office",
    description: "Professional desks and work furniture built for productivity and presentation.",
    image: "/products/Dressing%20Table/Kids%20Studying%20table.webp",
  },
];

const FEATURED_PRODUCTS = [
  {
    name: "Royal L-Shape Sofa",
    description: "A statement sofa with premium fabric, rich cushioning, and a spacious modern silhouette.",
    image: "/products/Royal L-Shape Sofa.jpg",
  },
  {
    name: "Classic 3-Seater",
    description: "Balanced comfort and clean design for living rooms that need timeless elegance.",
    image: "/products/Classic 3-Seater.webp",
  },
  {
    name: "Luxury Bedroom Set",
    description: "Strong structure, refined detailing, and a premium look for restful modern bedrooms.",
    image: "/products/Luxury Bedroom Set.webp",
  },
];

const BRANCH_HIGHLIGHTS = [
  {
    name: "Showroom 1 - Semit 72",
    image: "/products/Branches/Branch 1 - Semit 72 Branch.jpg",
    note: "Accessible showroom with direct map support.",
  },
  {
    name: "Showroom 2 - Figa",
    image: "/products/Branches/Branch 2 - Figa Branch.jpg",
    note: "A practical stop for sofas, beds, and family furniture.",
  },
  {
    name: "Showroom 3 - Goro",
    image: "/products/Branches/Branch 3- Goro Branch.jpg",
    note: "Convenient for customers around Goro and nearby Bole areas.",
  },
];

const FURNITURE_COLOR_OPTIONS = {
  Sofas: [
    { name: "Cream", hex: "#e8dcc8" },
    { name: "Charcoal", hex: "#3b4048" },
    { name: "Olive", hex: "#6e7754" },
    { name: "Navy", hex: "#1d3557" },
    { name: "Coffee", hex: "#6f4e37" },
    { name: "Sand", hex: "#c8b79c" },
  ],
  Beds: [
    { name: "Ivory", hex: "#f4efe6" },
    { name: "Walnut", hex: "#7a5230" },
    { name: "Grey", hex: "#8e97a1" },
    { name: "Midnight", hex: "#22324a" },
    { name: "Rose Beige", hex: "#c9a79a" },
    { name: "Black", hex: "#1b1d21" },
  ],
  Dining: [
    { name: "Oak", hex: "#b98952" },
    { name: "Espresso", hex: "#4e342e" },
    { name: "Stone", hex: "#9ea7ad" },
    { name: "Forest", hex: "#556b57" },
    { name: "Slate", hex: "#4f5d75" },
    { name: "Pearl", hex: "#ddd7ce" },
  ],
  Office: [
    { name: "Graphite", hex: "#495057" },
    { name: "Natural Oak", hex: "#b6854f" },
    { name: "White", hex: "#f7f7f5" },
    { name: "Deep Blue", hex: "#16324f" },
    { name: "Clay", hex: "#a8765b" },
    { name: "Ash", hex: "#a8b0b8" },
  ],
};

const WHY_CHOOSE_US = [
  {
    title: "Premium Materials",
    description: "We focus on solid structure, durable foam, quality wood, and finishing that lasts.",
    icon: "spark",
  },
  {
    title: "Modern Showroom Style",
    description: "Our collections are selected for elegant homes, stylish offices, and contemporary living.",
    icon: "shape",
  },
  {
    title: "Custom Order Options",
    description: "Adjust size, color, and finishing to match your space and your taste.",
    icon: "measure",
  },
  {
    title: "Trusted Service",
    description: "From consultation to delivery, we aim for fast support and a smooth customer experience.",
    icon: "shield",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The sofa quality was excellent and the finishing looked exactly like a premium showroom piece.",
    name: "Family Customer",
    note: "Living room order",
  },
  {
    quote:
      "They helped us choose office furniture that looks professional and feels durable for daily use.",
    name: "Business Client",
    note: "Office setup",
  },
  {
    quote:
      "Good service, clear communication, and furniture that made our new home feel complete.",
    name: "Homeowner",
    note: "Bedroom and dining order",
  },
];

const SHOWROOM_SLIDES = [
  {
    badge: "Showroom Highlight",
    title: "Best sellers that define the living room",
    description:
      "Our best-selling pieces combine strong presence, deep comfort, and premium finishing for homes that want warmth and elegance.",
    image: "/products/sofa%20(5).webp",
    imageAlt: "Galaxy Furniture best seller collection",
    lines: [
      { label: "Best sellers", text: "Popular living room designs selected for comfort and visual impact." },
      { label: "Customer favorite", text: "Balanced layouts that suit both family homes and premium apartments." },
      { label: "Finishing", text: "Polished upholstery and detailing that feels ready for a showroom." },
    ],
    primaryCta: "Explore Best Sellers",
    primaryTo: "/products",
  },
  {
    badge: "New Arrivals",
    title: "Fresh arrivals for a more refined home",
    description:
      "New arrivals introduce updated silhouettes, modern proportions, and elegant styling for customers who want something current and distinctive.",
    image: "/products/sofa%20(7).webp",
    imageAlt: "Galaxy Furniture new arrival sofa",
    lines: [
      { label: "New arrivals", text: "Fresh looks for customers who want current styling and premium details." },
      { label: "Modern comfort", text: "Designed to feel soft, inviting, and visually clean in contemporary spaces." },
      { label: "Easy pairing", text: "Works beautifully with statement tables, rugs, and accent pieces." },
    ],
    primaryCta: "See New Arrivals",
    primaryTo: "/products",
  },
  {
    badge: "Special Collection",
    title: "Statement pieces for elegant interiors",
    description:
      "Special collections help transform a room with richer textures, warm tones, and furniture selected to create a premium showroom feel at home.",
    image: "/products/sofa%20(8).webp",
    imageAlt: "Galaxy Furniture special collection sofa",
    lines: [
      { label: "Special collection", text: "Pieces that elevate modern homes with warm tones and refined finishing." },
      { label: "Signature look", text: "A stronger visual identity for customers who want furniture with presence." },
      { label: "Recommended", text: "Ideal for feature spaces, formal seating, and stylish family rooms." },
    ],
    primaryCta: "View Collection",
    primaryTo: "/products",
  },
];

const SOCIAL_LINKS = [
  { label: "TikTok", href: "https://www.tiktok.com/@galaxyfurniture4?_r=1&_t=ZS-9534VLbGl1h" },
  { label: "Facebook", href: "https://www.facebook.com/share/1E4SqiYmMn/" },
  { label: "Instagram", href: "https://www.instagram.com/galax.yfurniture?igsh=MWdwY2kxd3JuenY5YQ==" },
  { label: "Telegram", href: "https://t.me/Galaxy_furniture" },
];

const FAQS = [
  {
    question: "Do you make custom furniture orders?",
    answer:
      "Yes. We make custom sofas, beds, dining sets, wardrobes, and other furniture based on your size, color, and finishing needs.",
  },
  {
    question: "Can I choose the color and material?",
    answer:
      "Yes. Many products can be ordered in different colors, fabrics, and finishing styles to match your home, office, or showroom.",
  },
  {
    question: "How can I ask for the price?",
    answer:
      "You can request the price from the product page, call us directly, or send the product name or photo on WhatsApp or Telegram. This makes it easy for customers searching for furniture in Ethiopia price information.",
  },
  {
    question: "Do you deliver furniture?",
    answer:
      "Yes. Delivery is available. The delivery cost depends on the product size, quantity, and location, so we confirm the exact amount when you order.",
  },
  {
    question: "Can I visit the showroom before ordering?",
    answer:
      "Yes. You can visit any of our showrooms to check the comfort, finishing, size, and overall quality before you place an order.",
  },
  {
    question: "Where can I find Galaxy Furniture near Bole, Addis Ababa?",
    answer:
      "Customers looking for Galaxy Furniture near Bole, Addis Ababa can use our branches page to choose the nearest showroom in Semit 72, Figa, or Goro and open the map directly.",
  },
  {
    question: "Do you have Galaxy Furniture sofas and bedroom sets?",
    answer:
      "Yes. Our collection includes Galaxy Furniture sofas, beds, and bedroom sets, along with dining tables, wardrobes, TV stands, and office furniture.",
  },
  {
    question: "How long do custom orders take?",
    answer:
      "The production time depends on the design and quantity. Ready-made items may be available immediately, while custom furniture needs workshop time.",
  },
  {
    question: "Do you make office and business furniture?",
    answer:
      "Yes. We supply furniture for homes, offices, waiting areas, showrooms, and other business spaces.",
  },
  {
    question: "What materials do you use?",
    answer:
      "We focus on durable structure, quality wood, strong foam, clean upholstery, and polished finishing for a premium long-lasting result.",
  },
];

export default function Home() {
  const hero = useReveal();
  const story = useReveal();
  const categories = useReveal();
  const products = useReveal();
  const about = useReveal();
  const reasons = useReveal();
  const highlight = useReveal();
  const trust = useReveal();
  const faq = useReveal();
  const contact = useReveal();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeFurnitureType, setActiveFurnitureType] = useState("Sofas");
  const showroomSlide = SHOWROOM_SLIDES[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % SHOWROOM_SLIDES.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="grid" style={{ gap: 24 }}>
      <style>{`
        .hero-backdrop{
          background-image:
            linear-gradient(90deg, rgba(10,25,47,.84) 0%, rgba(10,25,47,.62) 42%, rgba(10,25,47,.14) 100%),
            url(/hero/images/optimized.jpg);
        }

        @media (max-width: 860px){
          .hero-backdrop{
            background-image:
              linear-gradient(180deg, rgba(10,25,47,.76) 0%, rgba(10,25,47,.48) 45%, rgba(10,25,47,.16) 100%),
              url(/hero/images/hero%20for%20mobile.jpg);
            background-position: center top;
          }
        }
      `}</style>
      <section
        ref={hero}
        className="reveal"
        style={{
          width: "100vw",
          maxWidth: "100vw",
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          padding: "clamp(32px, 6vw, 68px) 0",
          overflow: "hidden",
          background: "var(--navy)",
          borderBottom: "1px solid rgba(184,199,221,.12)",
        }}
      >
        <div
          className="hero-backdrop"
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.03)",
            filter: "saturate(1.08) contrast(1.02)",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div
            className="grid cols-2"
            style={{ alignItems: "center", gap: 28 }}
          >
            <div style={{ display: "grid", gap: 18, maxWidth: 640 }}>
              <span className="badge">Galaxy Furniture | Premium Showroom in Addis Ababa</span>

              <div>
                <h1 className="h1" style={{ margin: 0, fontSize: "clamp(38px, 5.8vw, 72px)" }}>
                  Elegant furniture for
                  <span style={{ color: "#FFD700" }}> modern living</span>
                </h1>
                <p
                  className="p"
                  style={{
                    marginTop: 16,
                    fontSize: 17,
                    lineHeight: 1.85,
                    maxWidth: 620,
                    color: "rgba(234,242,255,.9)",
                  }}
                >
                  Discover sofas, bedroom sets, beds, dining sets, wardrobes, and office furniture
                  that blend comfort, style, and long-term quality. Galaxy Furniture is an Addis
                  Ababa furniture showroom serving customers who want refined Ethiopian furniture
                  for everyday living.
                </p>
              </div>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link className="btn primary" to="/products">
                  Shop Now
                </Link>
                <Link className="btn" to="/products">
                  Explore Collection
                </Link>
                <Link className="btn ghost" to="/branches">
                  Visit Showroom
                </Link>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <HeroStat label="Happy customers" value="1000+" />
                <HeroStat label="Branches" value="3" />
                <HeroStat label="Trusted workshop" value="1" />
              </div>

              <div
                className="card"
                style={{
                  padding: 16,
                  borderRadius: 24,
                  background: "rgba(6, 24, 39, .66)",
                  borderColor: "rgba(255,215,0,.16)",
                  boxShadow: "0 20px 50px rgba(0,0,0,.24)",
                }}
              >
                <div
                  className="grid cols-3"
                  style={{ gap: 12, alignItems: "stretch" }}
                >
                  <MiniPromise title="Premium finishing" desc="Clean workmanship and elegant details across every collection." />
                  <MiniPromise title="Custom orders" desc="Choose your color, size, and layout to fit your home or office." />
                  <MiniPromise title="Fast support" desc="Get quick guidance, showroom help, and delivery information when you need it." />
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              <div
                className="card glow hover-lift"
                style={{
                  minHeight: 420,
                  padding: 0,
                  display: "grid",
                  gridTemplateRows: "1fr auto",
                  borderRadius: 30,
                }}
              >
                <img
                  src="/products/sofa%20(1).webp"
                  alt="Luxury sofa collection"
                  style={{ width: "100%", height: "100%", minHeight: 280, objectFit: "cover", display: "block" }}
                />
                <div style={{ padding: 20, display: "grid", gap: 8 }}>
                  <div className="badge" style={{ width: "fit-content" }}>Best Seller</div>
                  <h2 className="h2" style={{ margin: 0 }}>Showroom-ready comfort</h2>
                  <p className="p">
                    Discover living room pieces designed to feel luxurious, practical, and inviting.
                  </p>
                </div>
              </div>

              <div className="grid cols-2" style={{ gap: 14 }}>
                <ColorSelectionTile
                  activeFurnitureType={activeFurnitureType}
                  setActiveFurnitureType={setActiveFurnitureType}
                />
                <ImageTile
                  src="/products/sofa%20(8).webp"
                  title="Refined finishing"
                  note="Built for modern interiors"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={story} className="reveal">
        <div className="grid cols-2" style={{ alignItems: "stretch", gap: 18 }}>
          <div className="card glow hover-lift" style={{ padding: 0, minHeight: 420 }}>
            <img
              src="/products/Designed%20to%20make%20every%20room%20feel%20complete.webp"
              alt="Galaxy Furniture interior collection"
              style={{ width: "100%", height: "100%", minHeight: 420, objectFit: "cover", display: "block" }}
            />
          </div>

          <div className="card" style={{ padding: 26, display: "grid", gap: 16, alignContent: "center" }}>
            <span className="badge">Furniture with presence</span>
            <h2 className="h1" style={{ fontSize: "clamp(28px, 4vw, 44px)", margin: 0 }}>
              Designed to make every room feel complete
            </h2>
            <p className="p">
              A premium showroom should do more than display furniture. It should help customers
              imagine how comfort, proportion, and style will come together in their own space.
              That is why our collections are presented with strong visual balance, practical
              details, and clear guidance for real homes and offices across Addis Ababa.
            </p>
            <div style={{ display: "grid", gap: 12 }}>
              <Bullet text="Living room, bedroom, dining, and office collections in one trusted brand." />
              <Bullet text="Professional consultation for standard orders and customized requests." />
              <Bullet text="A showroom experience focused on quality, elegance, and everyday function." />
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn primary" to="/about">
                Learn About Us
              </Link>
              <a className="btn ghost" href={`tel:${PHONE}`}>
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section ref={categories} className="card reveal" style={{ padding: 24 }}>
        <SectionHeader
          badge="Featured Categories"
          title="Browse furniture by collection"
          description="Explore core categories that define the Galaxy Furniture showroom experience, from living room highlights to practical storage and office essentials."
          action={<Link className="btn ghost" to="/products">View All Products</Link>}
        />

        <div className="grid" style={{ gap: 16, marginTop: 18, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {CATEGORY_CARDS.map((item, index) => (
            <CategoryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      <section ref={products} className="reveal">
        <SectionHeader
          badge="Featured Products"
          title="Showroom favorites"
          description="A curated preview of Addis Ababa furniture customers love for comfort, impact, clean modern styling, and strong value."
        />

        <div className="grid cols-3" style={{ gap: 18 }}>
          {FEATURED_PRODUCTS.map((item, index) => (
            <ProductShowcase key={item.name} item={item} index={index} />
          ))}
        </div>
      </section>

      <section ref={about} className="reveal">
        <div className="grid cols-2" style={{ gap: 18, alignItems: "stretch" }}>
          <div className="card" style={{ padding: 26, display: "grid", gap: 14, alignContent: "center" }}>
            <span className="badge">About Galaxy Furniture</span>
            <h2 className="h1" style={{ fontSize: "clamp(28px, 4vw, 44px)", margin: 0 }}>
              A brand built around quality, comfort, and trusted service
            </h2>
            <p className="p">
              We serve customers who want furniture that looks impressive and performs well every
              day. From family living rooms to bedrooms, dining areas, and office setups, our team
              focuses on strong materials, thoughtful design, and helpful customer care from the
              first conversation to final delivery, with collections that reflect modern Ethiopian furniture needs.
            </p>
            <div className="grid cols-2" style={{ gap: 12 }}>
              <StatCard title="Branches" value="3" note="Serving customers through accessible showroom locations." />
              <StatCard title="Customer focus" value="1000+" note="Trusted by homeowners, families, and business clients." />
            </div>
          </div>

          <div className="card glow hover-lift" style={{ padding: 0, minHeight: 420 }}>
            <img
              src="/products/sofa%20(4).webp"
              alt="Premium furniture showroom display"
              style={{ width: "100%", height: "100%", minHeight: 420, objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      <section ref={reasons} className="card reveal" style={{ padding: 24 }}>
        <SectionHeader
          badge="Why Choose Us"
          title="Why customers trust Galaxy Furniture"
          description="A premium furniture experience depends on more than attractive products. It depends on workmanship, guidance, and consistency."
        />

        <div className="grid cols-2" style={{ gap: 16, marginTop: 18 }}>
          {WHY_CHOOSE_US.map((item) => (
            <ReasonCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section ref={highlight} className="reveal">
        <div className="grid cols-2" style={{ gap: 18, alignItems: "stretch" }}>
          <div className="card glow hover-lift" style={{ padding: 0, minHeight: 460, position: "relative" }}>
            <img
              key={showroomSlide.image}
              src={showroomSlide.image}
              alt={showroomSlide.imageAlt}
              style={{ width: "100%", height: "100%", minHeight: 460, objectFit: "cover", display: "block" }}
            />
            <div
              style={{
                position: "absolute",
                left: 18,
                right: 18,
                bottom: 18,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {SHOWROOM_SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${slide.title}`}
                  style={{
                    width: activeSlide === index ? 36 : 12,
                    height: 12,
                    borderRadius: 999,
                    border: activeSlide === index
                      ? "1px solid rgba(255,215,0,.7)"
                      : "1px solid rgba(255,255,255,.28)",
                    background: activeSlide === index ? "#FFD700" : "rgba(255,255,255,.28)",
                    cursor: "pointer",
                    transition: "all .22s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

          <div
            className="card"
            style={{
              padding: 28,
              display: "grid",
              gap: 16,
              alignContent: "center",
              background: "var(--navy)",
            }}
          >
            <span className="badge">{showroomSlide.badge}</span>
            <h2 className="h1" style={{ fontSize: "clamp(28px, 4vw, 46px)", margin: 0 }}>
              {showroomSlide.title}
            </h2>
            <p className="p">
              {showroomSlide.description}
            </p>
            <div className="grid" style={{ gap: 10 }}>
              {showroomSlide.lines.map((line) => (
                <HighlightLine key={line.label} label={line.label} text={line.text} />
              ))}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Link className="btn primary" to={showroomSlide.primaryTo}>
                {showroomSlide.primaryCta}
              </Link>
              <Link className="btn ghost" to="/contact">
                Request a Recommendation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={trust} className="card reveal" style={{ padding: 24 }}>
        <SectionHeader
          badge="Customer Trust"
          title="Experience that builds confidence"
          description="Visitors should immediately feel that Galaxy Furniture is a dependable place to browse, ask questions, and choose with confidence."
        />

        <div className="grid cols-3" style={{ gap: 16, marginTop: 18 }}>
          {TESTIMONIALS.map((item) => (
            <TestimonialCard key={item.name + item.note} item={item} />
          ))}
        </div>
      </section>

      <section ref={faq} className="reveal">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Basic answers for common customer questions"
          description="These are the questions customers usually ask before ordering furniture, visiting the showroom, or requesting delivery."
        />

        <div className="grid cols-2" style={{ gap: 16, alignItems: "stretch" }}>
          {FAQS.map((item) => (
            <div key={item.question} className="card hover-lift" style={{ padding: 20 }}>
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 900,
                  color: "rgba(234,242,255,.98)",
                }}
              >
                {item.question}
              </h3>
              <p className="p" style={{ marginTop: 10 }}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="card reveal" style={{ padding: 24 }}>
        <SectionHeader
          badge="Our Branches"
          title="Visit the showroom closest to you"
          description="Explore our three branch locations across Addis Ababa and get a quick visual feel for each showroom before you visit."
          action={<Link className="btn ghost" to="/branches">View All Branches</Link>}
        />

        <div className="grid cols-3" style={{ gap: 16, marginTop: 18 }}>
          {BRANCH_HIGHLIGHTS.map((branch) => (
            <Link
              key={branch.name}
              to="/branches"
              className="card hover-lift"
              style={{ padding: 0, textDecoration: "none", color: "inherit" }}
            >
              <img
                src={branch.image}
                alt={branch.name}
                style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
              />
              <div style={{ padding: 18, display: "grid", gap: 8 }}>
                <strong style={{ fontSize: 18 }}>{branch.name}</strong>
                <p className="p" style={{ fontSize: 14 }}>{branch.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section ref={contact} className="reveal">
        <div
          className="card glow"
          style={{
            padding: 28,
            background: "var(--navy)",
          }}
        >
          <div className="grid cols-2" style={{ gap: 20, alignItems: "center" }}>
            <div style={{ display: "grid", gap: 14 }}>
              <span className="badge">Visit or Contact Us</span>
              <h2 className="h1" style={{ fontSize: "clamp(28px, 4vw, 46px)", margin: 0 }}>
                Ready to furnish your space?
              </h2>
              <p className="p" style={{ color: "rgba(234,242,255,.88)" }}>
                Visit our branches, call our team, or message us on WhatsApp and social media. We
                will help you choose the right furniture for your home, showroom project, or office,
                whether you are searching for Galaxy Furniture sofas, bedroom sets, or general
                Addis Ababa furniture options.
              </p>

              <div className="grid" style={{ gap: 10 }}>
                <ContactMiniRow label="Phone" value={PHONE} href={`tel:${PHONE}`} />
                <ContactMiniRow label="Showrooms" value="Semit 72 | Figa | Goro" />
                <ContactMiniRow label="Support" value="Fast response on WhatsApp and Telegram" href={WHATSAPP} external />
              </div>
            </div>

            <div className="card" style={{ padding: 20, display: "grid", gap: 14, borderColor: "rgba(255,215,0,.16)" }}>
              <div style={{ fontWeight: 900, fontSize: 18 }}>Connect with Galaxy Furniture</div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link className="btn primary" to="/branches">
                  Visit Showroom
                </Link>
                <Link className="btn" to="/contact">
                  Contact Us
                </Link>
                <a className="btn ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>

              <div style={{ marginTop: 4 }}>
                <div className="small" style={{ marginBottom: 8 }}>Follow us</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {SOCIAL_LINKS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="btn ghost"
                      style={{ borderRadius: 999 }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ badge, title, description, action }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        gap: 14,
        flexWrap: "wrap",
      }}
    >
      <div style={{ maxWidth: 760, display: "grid", gap: 10 }}>
        <span className="badge">{badge}</span>
        <h2 className="h1" style={{ fontSize: "clamp(28px, 4vw, 46px)", margin: 0 }}>
          {title}
        </h2>
        <p className="p">{description}</p>
      </div>
      {action}
    </div>
  );
}

function HeroStat({ label, value }) {
  const number = parseInt(String(value).replace(/\D/g, ""), 10) || 0;
  const { ref, inView } = useInView({ threshold: 0.35, once: true });

  const count = useCountUp({
    end: number,
    duration: 1500,
    enabled: inView,
  });

  return (
    <div
      ref={ref}
      className="chip hover-lift"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 14px",
        borderRadius: 18,
        background: "rgba(255,255,255,.06)",
        borderColor: "rgba(255,215,0,.26)",
      }}
    >
      <strong style={{ color: "#FFD700", fontSize: 19, fontWeight: 950 }}>
        {number ? `${count}+` : value}
      </strong>
      <span className="small" style={{ color: "rgba(234,242,255,.88)" }}>
        {label}
      </span>
    </div>
  );
}

function MiniPromise({ title, desc }) {
  return (
    <div
      className="card hover-lift"
      style={{
        padding: 16,
        borderRadius: 22,
        background: "rgba(255,255,255,.04)",
        borderColor: "rgba(255,255,255,.08)",
      }}
    >
      <div style={{ fontWeight: 950, color: "#FFD700" }}>{title}</div>
      <div className="small" style={{ marginTop: 6, color: "rgba(234,242,255,.8)", lineHeight: 1.65 }}>
        {desc}
      </div>
    </div>
  );
}

function ImageTile({ src, title, note }) {
  return (
    <div className="card hover-lift" style={{ padding: 0, minHeight: 180 }}>
      <div style={{ position: "relative", height: "100%" }}>
        <img
          src={src}
          alt={title}
          style={{ width: "100%", height: "100%", minHeight: 180, objectFit: "cover", display: "block" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 20%, rgba(2,16,30,.88) 100%)",
            display: "flex",
            alignItems: "end",
            padding: 16,
          }}
        >
          <div>
            <div style={{ fontWeight: 900 }}>{title}</div>
            <div className="small">{note}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColorSelectionTile({ activeFurnitureType, setActiveFurnitureType }) {
  const activeColors = FURNITURE_COLOR_OPTIONS[activeFurnitureType];

  return (
    <div className="card hover-lift" style={{ padding: 18, minHeight: 180, display: "grid", gap: 14 }}>
      <div style={{ display: "grid", gap: 6 }}>
        <div style={{ fontWeight: 900 }}>Color selection</div>
        <div className="small">Choose a furniture type and explore popular finish options.</div>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {Object.keys(FURNITURE_COLOR_OPTIONS).map((type) => (
          <button
            key={type}
            type="button"
            className="btn ghost"
            onClick={() => setActiveFurnitureType(type)}
            style={{
              borderRadius: 999,
              padding: "8px 12px",
              borderColor: activeFurnitureType === type ? "rgba(255,215,0,.5)" : undefined,
              background: activeFurnitureType === type ? "rgba(255,215,0,.08)" : undefined,
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: 10,
        }}
      >
        {activeColors.map((color) => (
          <div key={`${activeFurnitureType}-${color.name}`} style={{ display: "grid", gap: 6 }}>
            <div
              style={{
                height: 28,
                borderRadius: 999,
                background: color.hex,
                border: "1px solid rgba(255,255,255,.16)",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.08)",
              }}
            />
            <div className="small" style={{ lineHeight: 1.25 }}>{color.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ item, index }) {
  return (
    <Link
      to={item.to}
      className={`card hover-lift fade-up fade-delay-${(index % 4) + 1}`}
      style={{ padding: 0, textDecoration: "none", color: "inherit" }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: 18, display: "grid", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
          <strong style={{ fontSize: 18 }}>{item.title}</strong>
          <span style={{ color: "#FFD700", fontWeight: 900 }}>View</span>
        </div>
        <p className="p" style={{ fontSize: 14 }}>{item.description}</p>
      </div>
    </Link>
  );
}

function ProductShowcase({ item, index }) {
  return (
    <div className={`card hover-lift fade-up fade-delay-${(index % 4) + 1}`} style={{ padding: 0 }}>
      <img
        src={item.image}
        alt={item.name}
        style={{ width: "100%", height: 260, objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: 20, display: "grid", gap: 10 }}>
        <div style={{ fontWeight: 950, fontSize: 18 }}>{item.name}</div>
        <p className="p" style={{ fontSize: 14 }}>{item.description}</p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link className="btn primary" to="/products">
            View Product
          </Link>
          <a className="btn ghost" href={WHATSAPP} target="_blank" rel="noreferrer">
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, note }) {
  const numeric = parseInt(String(value).replace(/\D/g, ""), 10) || 0;
  const { ref, inView } = useInView({ threshold: 0.25, once: true });

  const count = useCountUp({
    end: numeric,
    duration: 1600,
    enabled: inView,
  });

  return (
    <div ref={ref} className="card hover-lift" style={{ padding: 18 }}>
      <div className="small">{title}</div>
      <div style={{ fontSize: 30, fontWeight: 950, marginTop: 6, color: "#FFD700" }}>
        {numeric ? `${count}+` : value}
      </div>
      <p className="p" style={{ marginTop: 8, fontSize: 14 }}>
        {note}
      </p>
    </div>
  );
}

function ReasonCard({ item }) {
  return (
    <div className="card hover-lift" style={{ padding: 20, borderRadius: 24 }}>
      <div style={{ display: "flex", gap: 14, alignItems: "start" }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 16,
            display: "grid",
            placeItems: "center",
            background: "rgba(255,215,0,.12)",
            border: "1px solid rgba(255,215,0,.24)",
            color: "#FFD700",
            flex: "0 0 auto",
          }}
        >
          <FeatureIcon type={item.icon} />
        </div>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ fontWeight: 900, fontSize: 18 }}>{item.title}</div>
          <p className="p" style={{ fontSize: 14 }}>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function HighlightLine({ label, text }) {
  return (
    <div className="chip" style={{ display: "grid", gap: 4, padding: 14, alignItems: "start" }}>
      <strong style={{ color: "#FFD700" }}>{label}</strong>
      <span className="small" style={{ lineHeight: 1.65 }}>{text}</span>
    </div>
  );
}

function TestimonialCard({ item }) {
  return (
    <div className="card hover-lift" style={{ padding: 20 }}>
      <div style={{ color: "#FFD700", fontSize: 24, lineHeight: 1 }}>"</div>
      <p className="p" style={{ marginTop: 10, fontSize: 15 }}>
        {item.quote}
      </p>
      <div style={{ marginTop: 16 }}>
        <div style={{ fontWeight: 900 }}>{item.name}</div>
        <div className="small">{item.note}</div>
      </div>
    </div>
  );
}

function ContactMiniRow({ label, value, href, external = false }) {
  const content = href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      style={{ color: "#FFD700", fontWeight: 900 }}
    >
      {value}
    </a>
  ) : (
    <span style={{ fontWeight: 900 }}>{value}</span>
  );

  return (
    <div className="chip" style={{ justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
      <span className="small">{label}</span>
      {content}
    </div>
  );
}

function Bullet({ text }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: 999,
          background: "#FFD700",
          marginTop: 6,
          boxShadow: "0 0 0 4px rgba(255,215,0,.12)",
          flex: "0 0 auto",
        }}
      />
      <div className="small" style={{ color: "rgba(184,199,221,.95)", lineHeight: 1.7 }}>
        {text}
      </div>
    </div>
  );
}

function FeatureIcon({ type }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (type === "shape") {
    return (
      <svg {...props}>
        <path d="M4 6.5 12 3l8 3.5v11L12 21l-8-3.5Z" />
        <path d="M12 3v18" />
        <path d="m4 6.5 8 4 8-4" />
      </svg>
    );
  }

  if (type === "measure") {
    return (
      <svg {...props}>
        <path d="M4 7h16" />
        <path d="M7 7v4" />
        <path d="M11 7v3" />
        <path d="M15 7v4" />
        <path d="M19 7v3" />
        <rect x="3" y="7" width="18" height="10" rx="2" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg {...props}>
        <path d="m12 3 7 3v5c0 4.5-3 7.8-7 10-4-2.2-7-5.5-7-10V6l7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.3-3.4" />
      </svg>
    );
  }

  return (
    <svg {...props}>
      <path d="m12 3 2.2 4.7 5.2.8-3.8 3.8.9 5.4-4.5-2.5-4.5 2.5.9-5.4L4.6 8.5l5.2-.8Z" />
    </svg>
  );
}
