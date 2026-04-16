const SHOWROOM_LINKS = {
  showroom1: "https://maps.app.goo.gl/VvLXM2jKVd5ydQh68",
  showroom2: "https://maps.app.goo.gl/du81BJJQPMWMm2pg7",
  showroom3: "https://maps.app.goo.gl/1igSiRC25AmoKtCx7",
};

function createEmbedSrc(mapLink) {
  return `https://www.google.com/maps?q=${encodeURIComponent(mapLink)}&output=embed`;
}

const BRANCHES = [
  {
    name: "Showroom 1 - Semit 72",
    phone: "0967333435",
    image: "/products/Branches/Branch 1 - Semit 72 Branch.jpg",
    desc: "Galaxy Furniture showroom at Semit 72 area for customers searching for Addis Ababa furniture with easy map access.",
    hours: "Mon-Sat: 8:30-7:00",
    mapLink: SHOWROOM_LINKS.showroom1,
    embedSrc: createEmbedSrc(SHOWROOM_LINKS.showroom1),
  },
  {
    name: "Showroom 2 - Figa",
    phone: "0965333435",
    image: "/products/Branches/Branch 2 - Figa Branch.jpg",
    desc: "Galaxy Furniture showroom at Figa area serving customers looking for nearby sofas, bedroom sets, and modern furniture.",
    hours: "Mon-Sat: 8:30-7:00",
    mapLink: SHOWROOM_LINKS.showroom2,
    embedSrc: createEmbedSrc(SHOWROOM_LINKS.showroom2),
  },
  {
    name: "Showroom 3 - Goro",
    phone: "0966333435",
    image: "/products/Branches/Branch 3- Goro Branch.jpg",
    desc: "Galaxy Furniture Showroom No 3 at Goro, convenient for customers searching for Galaxy Furniture near Bole, Addis Ababa.",
    hours: "Mon-Sat: 8:30-7:00",
    mapLink: SHOWROOM_LINKS.showroom3,
    embedSrc: createEmbedSrc(SHOWROOM_LINKS.showroom3),
  },
];

export default function Branches() {
  return (
    <div className="grid" style={{ gap: 18 }}>
      <section className="card glow reveal" style={{ padding: 22 }}>
        <span className="badge">Branches</span>
        <h1 className="h1">Visit our showrooms</h1>
        <p className="p">
          Galaxy Furniture has three showrooms across Addis Ababa to serve you better, including
          Showroom No 3 in Goro for customers searching for Galaxy Furniture near me or near Bole.
        </p>
      </section>

      <section className="grid cols-3">
        {BRANCHES.map((branch) => (
          <div key={branch.name} className="card hover-lift" style={{ padding: 18 }}>
            <img
              src={branch.image}
              alt={branch.name}
              style={{ width: "100%", height: 220, objectFit: "cover", display: "block", borderRadius: 18, marginBottom: 14 }}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 16 }}>{branch.name}</div>
              <span className="badge" style={{ fontSize: 12, padding: "6px 10px" }}>
                Map Available
              </span>
            </div>

            <div style={{ color: "rgba(184,199,221,.92)", marginTop: 8 }}>
              {branch.desc}
            </div>

            <div
              style={{
                marginTop: 10,
                color: "rgba(255,215,0,.85)",
                fontWeight: 700,
              }}
            >
              {branch.hours}
            </div>

            <div
              style={{
                marginTop: 14,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              <a className="btn ghost" href={`tel:${branch.phone}`} style={{ borderRadius: 999 }}>
                Call
              </a>
              <a
                className="btn"
                href={branch.mapLink}
                target="_blank"
                rel="noreferrer"
                style={{ borderRadius: 999 }}
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </section>

      {BRANCHES.map((branch) => (
        <section key={`${branch.name}-map`} className="card glow reveal" style={{ padding: 22 }}>
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
                {branch.name} Map
              </h2>
              <p className="p">{branch.desc}</p>
            </div>

            <a
              className="btn primary"
              href={branch.mapLink}
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 999 }}
            >
              Open in Google Maps
            </a>
          </div>

          <img
            src={branch.image}
            alt={`${branch.name} showroom`}
            style={{ width: "100%", height: 280, objectFit: "cover", display: "block", borderRadius: 18, marginTop: 14 }}
          />

          <div style={{ marginTop: 14 }} className="mapWrap">
            <iframe
              className="mapFrame"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={branch.embedSrc}
              title={`${branch.name} Map`}
            />
          </div>
        </section>
      ))}

      <section className="card reveal" style={{ padding: 22 }}>
        <h2 className="h2">Workshop</h2>
        <p className="p">
          Our central workshop produces custom and standard furniture with high-quality
          craftsmanship for sofas, bedroom sets, and other Ethiopian furniture collections.
        </p>
      </section>
    </div>
  );
}
