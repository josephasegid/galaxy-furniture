const PHONE = "0911599541";
const WHATSAPP = "https://wa.me/251911599541";

const branches = [
  {
    name: "Semit 72",
    address: "In front of Getas Real Estate",
    phones: ["0967333435"],
  },
  {
    name: "Figa",
    address: "Around traffic light",
    phones: ["0965333435", "0964333435"],
  },
  {
    name: "Goro",
    address: "In front of Sunrise Real Estate",
    phones: ["0966333435"],
  },
];

export default function Footer() {
  const chipBaseStyle = { height: "100%", alignSelf: "stretch" };

  return (
    <footer
      style={{
        marginTop: 30,
        borderTop: "1px solid rgba(184,199,221,.14)",
        background: "rgba(2, 20, 35, .55)",
      }}
    >
      <div className="container" style={{ padding: "22px 0" }}>
        <div className="grid cols-3" style={{ alignItems: "stretch", gap: 16 }}>
          <div
            className="chip"
            style={{ ...chipBaseStyle, display: "flex", gap: 12, alignItems: "center" }}
          >
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

          <div className="chip" style={{ ...chipBaseStyle, display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 900 }}>Branches</div>
            <div className="small" style={{ marginTop: 6 }}>
              {branches.map((branch) => (
                <div key={branch.name} style={{ marginBottom: 8 }}>
                  <div style={{ fontWeight: 800 }}>{branch.name} Branch</div>
                  <div>{branch.address}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="chip" style={{ ...chipBaseStyle, display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 900 }}>Contact</div>
            <div className="small" style={{ marginTop: 6 }}>
              Main:{" "}
              <a href={`tel:${PHONE}`} style={{ color: "#FFD700", fontWeight: 900 }}>
                {PHONE}
              </a>
              <br />
              WhatsApp:{" "}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ color: "#FFD700", fontWeight: 900 }}>
                Chat with us
              </a>
              <div style={{ marginTop: 8 }}>
                {branches.map((branch) => (
                  <div key={`${branch.name}-phones`} style={{ marginBottom: 6 }}>
                    <div style={{ fontWeight: 800 }}>{branch.name} phones</div>
                    <div>
                      {branch.phones.map((p, idx) => (
                        <span key={p}>
                          <a href={`tel:${p}`} style={{ color: "#FFD700", fontWeight: 900 }}>
                            {p}
                          </a>
                          {idx < branch.phones.length - 1 ? " / " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <hr className="hr" />

        <div className="small" style={{ textAlign: "center", color: "rgba(184,199,221,.92)" }}>
          (c) {new Date().getFullYear()} Galaxy Furniture. All rights reserved. Built in Addis Ababa.
        </div>
      </div>
    </footer>
  );
}
