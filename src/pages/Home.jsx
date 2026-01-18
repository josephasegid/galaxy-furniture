import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal.js";
import useCountUp from "../hooks/useCountUp.js";
import useInView from "../hooks/useInView.js";

const PHONE = "0911599541";

export default function Home() {
  const hero = useReveal();
  const stats = useReveal();
  const services = useReveal();
  const workshop = useReveal();
  const trust = useReveal();

  return (
    <div className="grid" style={{ gap: 18 }}>
      {/* ================= HERO (BIG IMAGE) ================= */}
      <section
        ref={hero}
      className="card glow reveal hero-fix"

        style={{
          padding: 0,
          overflow: "hidden",
          minHeight: "72vh",
          position: "relative",
          display: "grid",
          alignItems: "center",
        }}
      >
        {/* Background image */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(0,41,81,.96),
                rgba(0,41,81,.72),
                rgba(0,41,81,.22)
              ),
              url(/hero/hero-main.jpg)
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.03)",
            filter: "saturate(1.05) contrast(1.02)",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="hero-safe">
            <div className="hero-frame">
              <div
                className="card"
                style={{
                  background: "rgba(0,0,0,.10)",
                  border: "1px solid rgba(255,255,255,.10)",
                  boxShadow: "0 10px 36px rgba(0,0,0,.18)",
                  overflow: "hidden",
                  borderRadius: 22,
                  padding: 20,
                 
              
                  
                 
              
                }}
              >
                <div className="hero-inner">
                  <div className="container" style={{ display: "grid", gap: 18 }}>
                    {/* Text */}
                    <div style={{ maxWidth: 860 }}>
                      <span className="badge">Galaxy Furniture • Addis Ababa</span>

                      <h1 className="h1" style={{ marginTop: 16 }}>
                        Furnish your home with{" "}
                        <span style={{ color: "#FFD700" }}>style</span>,{" "}
                        <span style={{ color: "#FFD700" }}>comfort</span> &{" "}
                        <span style={{ color: "#FFD700" }}>confidence</span>
                      </h1>

                      <p
                        className="p"
                        style={{
                          marginTop: 12,
                          maxWidth: 680,
                          fontSize: 16,
                          lineHeight: 1.8,
                        }}
                      >
                        Galaxy Furniture designs and manufactures premium sofas, beds, wardrobes,
                        dining tables, and office furniture. Trusted by{" "}
                        <strong>thousands of customers</strong>, we deliver quality finishing,
                        durable materials, and reliable service.
                      </p>

                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                        <Link className="btn primary" to="/products">
                          Explore Products
                        </Link>
                        <Link className="btn" to="/branches">
                          Visit Branches
                        </Link>
                        <a className="btn ghost" href={`tel:${PHONE}`}>
                          Call: {PHONE}
                        </a>
                      </div>

                      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                        <HeroStat label="Customers" value="1000+" />
                        <HeroStat label="Branches" value="3" />
                        <HeroStat label="Workshop" value="1" />
                      </div>
                    </div>

                    {/* Promise cards */}
                    <div
                      className="grid cols-3"
                      style={{
                        alignItems: "stretch",
                        marginTop: 14,
                        marginBottom: 6,
                        maxWidth: 900, // keeps it away from far-right edge
                        gap: 12,
                        padding:50,
                      }}
                    >
                      <MiniPromise
                        title="Free Delivery"
                        desc="Free delivery available for selected areas in Addis Ababa."
                      />
                      <MiniPromise
                        title="Warranty Support"
                        desc="Warranty options available depending on product type and materials."
                      />
                      <MiniPromise
                        title="Custom Orders"
                        desc="Choose size, color, and finishing that fits your home or office."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section ref={stats} className="grid cols-3 reveal">
        <StatCard
          title="Customers Served"
          value="Thousands +"
          note="Trusted by families and businesses across Addis Ababa."
        />
        <StatCard title="Branches" value="3" note="Semit 72 • Figa • Goro" />
        <StatCard
          title="Workshop"
          value="1"
          note="Central production with modern tools and skilled craftsmen."
        />
      </section>

      {/* ================= SERVICES ================= */}
      <section ref={services} className="card reveal" style={{ padding: 22 }}>
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <h2 className="h2" style={{ marginBottom: 6 }}>
              What we offer
            </h2>
            <p className="p">
              We focus on comfort, durability and premium finishing — with a service experience that customers love.
            </p>
          </div>

          <Link className="btn ghost" to="/products">
            View Categories
          </Link>
        </div>

        <hr className="hr" />

        <div className="grid cols-3">
          <Feature title="Free Delivery" desc="Free delivery available for selected areas. Fast, careful handling." />
          <Feature title="Warranty" desc="Warranty support available depending on product type and materials." />
          <Feature title="After-Sales Support" desc="Quick response for maintenance, fixes, and customer questions." />
          <Feature title="Premium Materials" desc="Quality wood, foam, fabric, and finishing that lasts." />
          <Feature title="Modern Design" desc="Trendy styles for living rooms, bedrooms, and offices." />
          <Feature title="Custom Orders" desc="We can create furniture to match your space and style." />
        </div>
      </section>

      {/* ================= WORKSHOP / MACHINERY ================= */}
      <section ref={workshop} className="grid cols-2 reveal" style={{ alignItems: "stretch" }}>
        <div className="card glow" style={{ padding: 22 }}>
          <span className="badge">Workshop & Machinery</span>
          <h2 className="h2" style={{ marginTop: 12 }}>
            Made with skill + modern production
          </h2>

          <p className="p" style={{ marginTop: 10 }}>
            Our central workshop is designed for consistent quality. We use professional tools and machinery to ensure
            clean finishing, strong structure, and reliable output for both standard and custom orders.
          </p>

          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            <Bullet text="Precision cutting & measuring for accurate fitting" />
            <Bullet text="Strong frame building for long-term durability" />
            <Bullet text="Premium finishing for a clean, modern look" />
            <Bullet text="Quality checks before delivery" />
          </div>

          <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn primary" to="/about">
              Learn About Us
            </Link>
            <a className="btn ghost" href={`tel:${PHONE}`}>
              Ask About Custom Orders
            </a>
          </div>
        </div>

        <div className="card hover-lift" style={{ padding: 22, display: "grid", gap: 12 }}>
          <h2 className="h2" style={{ marginBottom: 0 }}>
            Popular categories
          </h2>
          <p className="p">Explore our best-selling categories. New designs are added regularly.</p>

          <div className="grid cols-2">
            <CategoryChip title="Sofas" />
            <CategoryChip title="Beds" />
            <CategoryChip title="Dining Tables" />
            <CategoryChip title="Wardrobes" />
            <CategoryChip title="Office Furniture" />
            <CategoryChip title="Custom Orders" />
          </div>

          <Link className="btn" to="/products" style={{ justifySelf: "start" }}>
            Browse Products
          </Link>
        </div>
      </section>

      {/* ================= TRUST / CTA ================= */}
      <section ref={trust} className="card reveal" style={{ padding: 22 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <h2 className="h2" style={{ marginBottom: 6 }}>
              Trusted by thousands of customers
            </h2>
            <p className="p">
              We help families furnish homes beautifully and support businesses with reliable office furniture.
              Tell us what you need — we’ll recommend the best option.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn primary" to="/contact">
              Contact & Get Quote
            </Link>
            <Link className="btn ghost" to="/branches">
              Find Nearest Branch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===== Small components ===== */

function HeroStat({ label, value }) {
  const number = parseInt(String(value).replace(/\D/g, "")) || 0;
  const { ref, inView } = useInView({ threshold: 0.35, once: true });

  const count = useCountUp({
    end: number,
    duration: 1400,
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
        padding: "10px 12px",
        background: "rgba(255,255,255,.06)",
        borderColor: "rgba(255,215,0,.25)",
      }}
    >
      <strong style={{ color: "#FFD700", fontSize: 18, fontWeight: 950 }}>
        {number ? `${count}+` : value}
      </strong>
      <span className="small" style={{ whiteSpace: "nowrap" }}>
        {label}
      </span>
    </div>
  );
}

function MiniPromise({ title, desc }) {
  return (
    <div className="card hover-lift" style={{ padding: 16, borderRadius: 22 }}>
      <div style={{ fontWeight: 950, color: "#FFD700" }}>{title}</div>
      <div className="small" style={{ marginTop: 6, color: "rgba(184,199,221,.95)", lineHeight: 1.6 }}>
        {desc}
      </div>
    </div>
  );
}

function StatCard({ title, value, note }) {
  const numeric = parseInt(String(value).replace(/\D/g, "")) || 0;
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

function Feature({ title, desc }) {
  return (
    <div className="card hover-lift" style={{ padding: 16, borderRadius: 22 }}>
      <div style={{ fontWeight: 900 }}>{title}</div>
      <div className="small" style={{ marginTop: 6, lineHeight: 1.6, color: "rgba(184,199,221,.95)" }}>
        {desc}
      </div>
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
      <div className="small" style={{ color: "rgba(184,199,221,.95)", lineHeight: 1.65 }}>
        {text}
      </div>
    </div>
  );
}

function CategoryChip({ title }) {
  return (
    <div className="chip hover-lift" style={{ justifyContent: "space-between", display: "flex", alignItems: "center" }}>
      <span style={{ fontWeight: 900 }}>{title}</span>
      <span style={{ color: "#FFD700", fontWeight: 900 }}>→</span>
    </div>
  );
}
