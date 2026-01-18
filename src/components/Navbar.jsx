import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const PHONE = "0911599541";
const WHATSAPP = "https://wa.me/251911599541"; // Ethiopia: 251 + 911599541

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/branches", label: "Branches" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close menu on route link click handled in onClick
  // Close on outside click/touch
  useEffect(() => {
    function onDown(e) {
      if (!open) return;
      const panel = document.querySelector(".nav-mobile-panel");
      const btn = document.querySelector(".nav-mobile-btn");
      if (panel && panel.contains(e.target)) return;
      if (btn && btn.contains(e.target)) return;
      setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
    };
  }, [open]);

  // Close on escape
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="nav-root">
      {/* TOP STRIP (optional) */}
      <div className="nav-topbar">
        <div className="container nav-topbar-inner" />
      </div>

      {/* MAIN NAV */}
      <div className="nav-main">
        <div className="container nav-main-inner">
          {/* Brand */}
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className="nav-brand"
            aria-label="Galaxy Furniture Home"
          >
            <img className="nav-logo" src="/brand/logo.png" alt="Galaxy Furniture Logo" />
            <div className="nav-brand-text">
              <div className="nav-title">Galaxy Furniture</div>
              <div className="nav-subtitle">Premium Furniture | Addis Ababa</div>
            </div>
          </NavLink>

          {/* Desktop links */}
          <nav className="nav-desktop" aria-label="Primary navigation">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions (desktop) */}
          <div className="nav-actions">
            <a className="pill" href={`tel:${PHONE}`}>
              Call
            </a>
            <a className="pill gold" href={WHATSAPP} target="_blank" rel="noreferrer">
              WhatsApp
            </a>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-mobile-panel"
              onClick={() => setOpen((v) => !v)}
              className="nav-mobile-btn"
            >
              <span className="nav-icon">{open ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>

        {/* Mobile panel (smooth height + fade) */}
        <div
          id="nav-mobile-panel"
          className={`nav-mobile-panel ${open ? "open" : ""}`}
          aria-hidden={!open}
        >
          <div className="container nav-mobile-inner">
            <div className="nav-mobile-links">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => `nav-mobile-link ${isActive ? "active" : ""}`}
                >
                  <span>{l.label}</span>
                  <span className="arrow">{">"}</span>
                </NavLink>
              ))}
            </div>

            <div className="nav-mobile-cta">
              <a className="btn primary" href={`tel:${PHONE}`} style={{ width: "100%" }}>
                Call Now
              </a>
              <a className="btn" href={WHATSAPP} target="_blank" rel="noreferrer" style={{ width: "100%" }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CSS (navbar only) */}
      <style>{`
        .nav-root{
          position: sticky;
          top: 0;
          z-index: 60;
        }

        /* Topbar */
        .nav-topbar{
          background: rgba(0,0,0,.28);
          border-bottom: 1px solid rgba(184,199,221,.12);
          backdrop-filter: blur(12px);
        }
        .nav-topbar-inner{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:10px;
          padding: 8px 0;
        }
        .nav-topbar-text{
          display:flex;
          align-items:center;
          gap:10px;
          font-weight: 800;
          font-size: 13px;
          color: rgba(235,242,255,.85);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }
        .dot{
          width:10px; height:10px; border-radius:999px;
          background: rgba(255,215,0,.95);
          box-shadow: 0 0 0 4px rgba(255,215,0,.12);
          flex: 0 0 auto;
        }
        .nav-topbar-actions{
          display:flex; gap:10px; flex: 0 0 auto;
        }

        /* Main */
        .nav-main{
          background: linear-gradient(135deg, rgba(2, 20, 35, .88), rgba(8, 28, 48, .68));
          border-bottom: 1px solid rgba(184,199,221,.14);
          backdrop-filter: blur(12px);
        }
        .nav-main-inner{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:14px;
          padding: 12px 0;
        }
        .nav-brand{
          display:flex;
          align-items:center;
          gap:12px;
          text-decoration:none;
          color: inherit;
          min-width: 0;
        }
        .nav-logo{
          width: 44px;
          height: 44px;
          border-radius: 999px;
          border: 1px solid rgba(255,215,0,.35);
          background: rgba(255,255,255,.03);
          object-fit: cover;
          flex: 0 0 auto;
        }
        .nav-brand-text{
          line-height: 1.1;
          min-width: 0;
        }
        .nav-title{
          font-weight: 950;
          letter-spacing: .2px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 52vw;
        }
        .nav-subtitle{
          font-size: 13px;
          color: rgba(184,199,221,.92);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 52vw;
        }

        .nav-desktop{
          display:flex;
          gap:6px;
          flex-wrap: wrap;
          justify-content:flex-end;
        }
        .nav-link{
          padding: 10px 12px;
          border-radius: 14px;
          border: 1px solid transparent;
          background: transparent;
          color: inherit;
          font-weight: 850;
          text-decoration: none;
          transition: background .18s ease, border-color .18s ease, transform .18s ease;
        }
        .nav-link:hover{
          border-color: rgba(184,199,221,.25);
          background: rgba(255,255,255,.04);
          transform: translateY(-1px);
        }
        .nav-link.active{
          border-color: rgba(255,215,0,.45);
          background: rgba(255,215,0,.10);
        }

        .nav-actions{
          display:flex;
          align-items:center;
          gap:10px;
          flex: 0 0 auto;
        }

        .pill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(184,199,221,.16);
          background: rgba(255,255,255,.04);
          color: rgba(235,242,255,.95);
          font-weight: 900;
          text-decoration:none;
          white-space: nowrap;
        }
        .pill.gold{
          background: rgba(255,215,0,.14);
          border-color: rgba(255,215,0,.35);
        }

        /* Mobile button */
        .nav-mobile-btn{
          display:none;
          border-radius: 14px;
          border: 1px solid rgba(255,215,0,.28);
          background: rgba(255,215,0,.10);
          padding: 10px 12px;
          cursor: pointer;
          color: #fff;
          font-weight: 900;
          line-height: 1;
        }
        .nav-mobile-btn:active{
          transform: translateY(1px);
        }
        .nav-icon{
          font-size: 14px;
          display:block;
        }
        .nav-mobile-btn:focus-visible,
        .nav-link:focus-visible,
        .nav-mobile-link:focus-visible,
        .pill:focus-visible{
          outline: 2px solid rgba(255,215,0,.65);
          outline-offset: 2px;
        }

        /* Mobile panel: height animation */
        .nav-mobile-panel{
          display:none;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transform: translateY(-6px);
          transition: max-height .22s ease, opacity .18s ease, transform .18s ease;
          background: rgba(2, 20, 35, .92);
          border-top: 1px solid rgba(184,199,221,.14);
        }
        .nav-mobile-panel.open{
          max-height: 520px;
          opacity: 1;
          transform: translateY(0);
        }
        .nav-mobile-inner{
          padding: 12px 0 16px;
          display:grid;
          gap: 12px;
        }
        .nav-mobile-links{
          display:grid;
          gap: 8px;
        }
        .nav-mobile-link{
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding: 12px 14px;
          border-radius: 16px;
          border: 1px solid rgba(184,199,221,.16);
          background: rgba(255,255,255,.04);
          font-weight: 900;
          text-decoration:none;
          color: rgba(235,242,255,.95);
        }
        .nav-mobile-link.active{
          border-color: rgba(255,215,0,.40);
          background: rgba(255,215,0,.10);
        }
        .arrow{
          color: rgba(255,215,0,.9);
          font-weight: 950;
        }
        .nav-mobile-cta{
          display:grid;
          gap: 10px;
        }

        /* Responsive rules */
        @media (max-width: 820px){
          .nav-desktop{ display:none !important; }
          .nav-mobile-btn{ display:inline-flex !important; align-items:center; justify-content:center; }
          .nav-mobile-panel{ display:block !important; }
          .nav-actions .pill{ display:none !important; }

          /* make topbar actions smaller on mobile */
          .nav-topbar-actions .pill{
            padding: 9px 12px;
            font-size: 13px;
          }
        }

        @media (max-width: 520px){
          /* Hide topbar text if it overflows too much */
          .nav-topbar-text{ display:none; }
        }
      `}</style>
    </header>
  );
}
