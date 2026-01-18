export default function About() {
  return (
    <div className="grid" style={{ gap: 18 }}>
      <section className="card" style={{ padding: 22 }}>
        <span className="badge">About Galaxy Furniture</span>
        <h1 className="h1">Craftsmanship you can trust</h1>
        <p className="p">
          Galaxy Furniture is a furniture manufacturing and sales company with <strong>three branches</strong> and
          <strong> one central workshop</strong>. We focus on comfort, durability, and modern design.
        </p>

        <hr className="hr" />

        <div className="grid cols-2">
          <Info title="Owner" value="Seid Mohamed Taye" />
          <Info title="Phone" value="0911599541" />
          <Info title="Branches" value="3" />
          <Info title="Workshop" value="1" />
        </div>
      </section>

      <section className="grid cols-2">
        <div className="card" style={{ padding: 22 }}>
          <h2 className="h2">Vision</h2>
          <p className="p">To become the most trusted furniture brand in Ethiopia through quality and innovation.</p>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <h2 className="h2">Mission</h2>
          <p className="p">To deliver beautiful, durable furniture with strong customer service and fair pricing.</p>
        </div>
      </section>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div style={{ padding: 14, borderRadius: 16, border: "1px solid rgba(184,199,221,.16)", background: "rgba(255,255,255,.03)" }}>
      <div style={{ color: "rgba(184,199,221,.9)", fontSize: 13 }}>{title}</div>
      <div style={{ fontSize: 16, fontWeight: 800, marginTop: 6 }}>{value}</div>
    </div>
  );
}
