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
    <div style={{ display: "grid", gap: 18 }}>
      {/* ================= HERO (BIG IMAGE) ================= */}
      <section
        ref={hero}
        className="card glow reveal"
        style={{
          padding: 0,
          overflow: "hidden",
          minHeight: "72vh",
          position: "relative",
          display: "grid",
          alignItems: "center",
        }}
      >
        {/* Background image with gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
           backgroundImage: `
  linear-gradient(
    to right,
    rgba(0,41,81,.94),
    rgba(0,41,81,.72),
    rgba(0,41,81,.28)
  ),
  url(/hero/hero-main.jpg)
`,

            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.03)",
            filter: "saturate(1.05) contrast(1.02)",
          }}
        />

        {/* Content wrapper with correct padding */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            padding: "96px 24px",
          }}
        >
          <div
            className="container"
            style={{
              display: "grid",
              gap: 22,
            }}
          >
            <div style={{ maxWidth: 780 }}>
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
                  fontSize: 16,
                  maxWidth: 640,
                  lineHeight: 1.75,
                }}
              >
                Galaxy Furniture designs and manufactures premium sofas, beds, wardrobes,
                dining tables, and office furniture. Trusted by <strong>thousands of customers</strong>,
                we deliver quality finishing, durable materials, and reliable service.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  marginTop: 22,
                }}
              >
                <Link className="btn primary" to="/products" style={{ borderRadius: 999 }}>
                  Explore Products
                </Link>
                <Link className="btn" to="/branches" style={{ borderRadius: 999 }}>
                  Visit Branches
                </Link>
                <a className="btn ghost" href={`tel:${PHONE}`} style={{ borderRadius: 999 }}>
                  Call: {PHONE}
                </a>
              </div>

              {/* Quick trust stats */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
                <HeroStat label="Customers" value="1000+" />
                <HeroStat label="Branches" value="3" />
                <HeroStat label="Workshop" value="1" />
              </div>
            </div>

            {/* Promise cards */}
            <div className="grid cols-3" style={{ alignItems: "stretch" }}>
              <MiniPromise title="Free Delivery" desc="Free delivery available for selected areas in Addis Ababa." />
              <MiniPromise title="Warranty Support" desc="Warranty options available depending on product type and materials." />
              <MiniPromise title="Custom Orders" desc="Choose size, color, and finishing that fits your home or office." />
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
        <StatCard
          title="Branches"
          value="3"
          note="Semit 72 • Figa • Goro"
        />
        <StatCard
          title="Workshop"
          value="1"
          note="Central production with modern tools and skilled craftsmen."
        />
      </section>

      {/* ================= SERVICES ================= */}
      <section ref={services} className="card reveal" style={{ padding: 22 }}>
        <div style={{ display: "flex", alignItems: "end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <h2 className="h2" style={{ marginBottom: 6 }}>What we offer</h2>
            <p className="p">
              We focus on comfort, durability and premium finishing — with a service experience that customers love.
            </p>
          </div>
          <Link className="btn ghost" to="/products" style={{ borderRadius: 999 }}>
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
          <h2 className="h2" style={{ marginTop: 12 }}>Made with skill + modern production</h2>

          <p className="p">
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
            <Link className="btn primary" to="/about" style={{ borderRadius: 999 }}>
              Learn About Us
            </Link>
            <a className="btn ghost" href={`tel:${PHONE}`} style={{ borderRadius: 999 }}>
              Ask About Custom Orders
            </a>
          </div>
        </div>

        <div className="card hover-lift" style={{ padding: 22, display: "grid", gap: 12 }}>
          <h2 className="h2" style={{ marginBottom: 0 }}>Popular categories</h2>
          <p className="p">Explore our best-selling categories. New designs are added regularly.</p>

          <div className="grid cols-2">
            <CategoryChip title="Sofas" />
            <CategoryChip title="Beds" />
            <CategoryChip title="Dining Tables" />
            <CategoryChip title="Wardrobes" />
            <CategoryChip title="Office Furniture" />
            <CategoryChip title="Custom Orders" />
          </div>

          <Link className="btn" to="/products" style={{ borderRadius: 999, justifySelf: "start" }}>
            Browse Products
          </Link>
        </div>
      </section>

      {/* ================= TRUST / CTA ================= */}
      <section ref={trust} className="card reveal" style={{ padding: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
          <div>
            <h2 className="h2" style={{ marginBottom: 6 }}>Trusted by thousands of customers</h2>
            <p className="p">
              We help families furnish homes beautifully and support businesses with reliable office furniture.
              Tell us what you need — we’ll recommend the best option.
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn primary" to="/contact" style={{ borderRadius: 999 }}>
              Contact & Get Quote
            </Link>
            <Link className="btn ghost" to="/branches" style={{ borderRadius: 999 }}>
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
        background: "rgba(255,255,255,.06)",
        borderColor: "rgba(255,215,0,.25)",
      }}
    >
      <strong style={{ color: "#FFD700", fontSize: 20 }}>
        {number ? `${count}+` : value}
      </strong>
      <span className="small">{label}</span>
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
      <p className="p" style={{ marginTop: 8, fontSize: 14 }}>{note}</p>
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
    <div className="chip hover-lift" style={{ justifyContent: "space-between" }}>
      <span style={{ fontWeight: 900 }}>{title}</span>
      <span style={{ color: "#FFD700", fontWeight: 900 }}>→</span>
    </div>
  );
}

