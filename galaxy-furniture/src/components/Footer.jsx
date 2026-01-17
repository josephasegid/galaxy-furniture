const PHONE = "0911599541";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 30,
        borderTop: "1px solid rgba(184,199,221,.14)",
        background: "rgba(2, 20, 35, .55)",
      }}
    >
      <div className="container" style={{ padding: "22px 0" }}>
        <div className="grid cols-3" style={{ alignItems: "start", gap: 16 }}>
          <div className="chip" style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <img
              src="/brand/logo.png"
              alt="Galaxy Furniture"
              style={{
                width: 46,
                height: 46,
                borderRadius: 999,
                border: "1px solid rgba(255,215,0,.35)",
                objectFit: "cover",
              }}
            />
            <div>
              <div style={{ fontWeight: 950 }}>Galaxy Furniture</div>
              <div className="small">Gold & Navy quality furniture.</div>
            </div>
          </div>

          <div className="chip">
            <div style={{ fontWeight: 900 }}>Branches</div>
            <div className="small" style={{ marginTop: 6 }}>
              Semit 72 • Figa • Goro
            </div>
          </div>

          <div className="chip">
            <div style={{ fontWeight: 900 }}>Contact</div>
            <div className="small" style={{ marginTop: 6 }}>
              Phone:{" "}
              <a href={`tel:${PHONE}`} style={{ color: "#FFD700", fontWeight: 900 }}>
                {PHONE}
              </a>
              <br />
              Addis Ababa, Ethiopia
            </div>
          </div>
        </div>

        <hr className="hr" />

        <div className="small" style={{ textAlign: "center", color: "rgba(184,199,221,.92)" }}>
          © {new Date().getFullYear()} Galaxy Furniture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
