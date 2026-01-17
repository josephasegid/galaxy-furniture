const BRANCHES = [
  {
    name: "Branch 1 — Semit 72",
    desc: "Galaxy Furniture showroom at Semit 72 area",
    hours: "Mon–Sat: 8:30–7:00",
  },
  {
    name: "Branch 2 — Figa",
    desc: "Galaxy Furniture showroom at Figa area",
    hours: "Mon–Sat: 8:30–7:00",
    mapLink:
      "https://www.google.com/maps?q=9.011822,38.834043&z=16",
    embedSrc:
      "https://www.google.com/maps?q=9.011822,38.834043&z=16&output=embed",
    highlight: true,
  },
  {
    name: "Branch 3 — Goro",
    desc: "Galaxy Furniture showroom at Goro area",
    hours: "Mon–Sat: 8:30–7:00",
  },
];

export default function Branches() {
  const branchWithMap = BRANCHES.find((b) => b.highlight);

  return (
    <div className="grid" style={{ gap: 18 }}>
      {/* Header */}
      <section className="card glow reveal" style={{ padding: 22 }}>
        <span className="badge">Branches</span>
        <h1 className="h1">Visit our showrooms</h1>
        <p className="p">
          Galaxy Furniture has three showrooms across Addis Ababa to serve you
          better.
        </p>
      </section>

      {/* Branch cards */}
      <section className="grid cols-3">
        {BRANCHES.map((b) => (
          <div key={b.name} className="card hover-lift" style={{ padding: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 16 }}>{b.name}</div>

              {b.highlight && (
                <span
                  className="badge"
                  style={{ fontSize: 12, padding: "6px 10px" }}
                >
                  Map Available
                </span>
              )}
            </div>

            <div style={{ color: "rgba(184,199,221,.92)", marginTop: 8 }}>
              {b.desc}
            </div>

            <div
              style={{
                marginTop: 10,
                color: "rgba(255,215,0,.85)",
                fontWeight: 700,
              }}
            >
              {b.hours}
            </div>

            <div
              style={{
                marginTop: 14,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a
                className="btn ghost"
                href="tel:0911599541"
                style={{ borderRadius: 999 }}
              >
                Call
              </a>

              {b.mapLink && (
                <a
                  className="btn"
                  href={b.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{ borderRadius: 999 }}
                >
                  View on Map
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Embedded Google Map — Branch 2 (Figa) */}
      {branchWithMap && (
        <section className="card glow reveal" style={{ padding: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2 className="h2" style={{ marginBottom: 6 }}>
                Branch 2 — Figa (Google Map)
              </h2>
              <p className="p">
                Exact location of Galaxy Furniture showroom at Figa.
              </p>
            </div>

            <a
              className="btn primary"
              href={branchWithMap.mapLink}
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 999 }}
            >
              Open in Google Maps
            </a>
          </div>

          <div style={{ marginTop: 14 }} className="mapWrap">
            <iframe
              className="mapFrame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={branchWithMap.embedSrc}
              title="Galaxy Furniture Figa Branch Map"
            />
          </div>
        </section>
      )}

      {/* Workshop */}
      <section className="card reveal" style={{ padding: 22 }}>
        <h2 className="h2">Workshop</h2>
        <p className="p">
          Our central workshop produces custom and standard furniture with
          high-quality craftsmanship.
        </p>
      </section>
    </div>
  );
}
