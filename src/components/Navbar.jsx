import { NavLink } from "react-router-dom";

const navLinkStyle = ({ isActive }) => ({
  padding: "10px 12px",
  borderRadius: 14,
  border: isActive ? "1px solid rgba(255,215,0,.45)" : "1px solid transparent",
  background: isActive ? "rgba(255,215,0,.10)" : "transparent",
  color: "inherit",
  fontWeight: 800,
});

export default function Navbar() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <div
        style={{
          backdropFilter: "blur(12px)",
          background: "rgba(2, 20, 35, .72)",
          borderBottom: "1px solid rgba(184,199,221,.14)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            padding: "12px 0",
          }}
        >
          <NavLink to="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img
              src="/brand/logo.png"
              alt="Galaxy Furniture Logo"
              style={{
                width: 44,
                height: 44,
                borderRadius: 999,
                border: "1px solid rgba(255,215,0,.35)",
                background: "rgba(255,255,255,.03)",
                objectFit: "cover",
              }}
            />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 950, letterSpacing: 0.2 }}>Galaxy Furniture</div>
              <div className="small" style={{ color: "rgba(184,199,221,.92)" }}>
                Premium Furniture • Addis Ababa
              </div>
            </div>
          </NavLink>

          <nav style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
            <NavLink to="/" style={navLinkStyle}>Home</NavLink>
            <NavLink to="/products" style={navLinkStyle}>Products</NavLink>
            <NavLink to="/branches" style={navLinkStyle}>Branches</NavLink>
            <NavLink to="/about" style={navLinkStyle}>About</NavLink>
            <NavLink to="/contact" style={navLinkStyle}>Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
