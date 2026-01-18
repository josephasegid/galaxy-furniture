export default function Contact() {
  return (
    <div className="grid cols-2" style={{ alignItems: "start" }}>
      <section className="card" style={{ padding: 22 }}>
        <span className="badge">Contact</span>
        <h1 className="h1">Let’s talk about your furniture</h1>
        <p className="p">Call us, visit our branches, or send a message. We respond fast.</p>

        <hr className="hr" />

        <div className="grid" style={{ gap: 12 }}>
          <ContactRow label="Phone" value="0911599541" />
          <ContactRow label="Owner" value="Seid Mohamed Taye" />
          <a className="btn primary" href="tel:0911599541">Call Now</a>
          <a
            className="btn"
            href="https://wa.me/251911599541?text=Hello%20Galaxy%20Furniture%2C%20I%20want%20to%20ask%20about%20furniture."
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Message
          </a>
        </div>
      </section>

      <section className="card" style={{ padding: 22 }}>
        <h2 className="h2">Send a request</h2>
        <p className="p">Demo form (front-end). If you want it to send email, tell me and I’ll add it.</p>

        <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 14, display: "grid", gap: 12 }}>
          <Input label="Full Name" placeholder="Your name" />
          <Input label="Phone Number" placeholder="09..." />
          <Input label="What do you need?" placeholder="Sofa / Bed / Custom order..." />

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 13, color: "rgba(184,199,221,.95)" }}>Message</span>
            <textarea rows="5" placeholder="Write your message..." style={fieldStyle} />
          </label>

          <button className="btn primary" type="submit">Submit (demo)</button>
        </form>
      </section>
    </div>
  );
}

function ContactRow({ label, value }) {
  return (
    <div style={{ padding: 14, borderRadius: 16, border: "1px solid rgba(184,199,221,.16)", background: "rgba(255,255,255,.03)" }}>
      <div style={{ color: "rgba(184,199,221,.9)", fontSize: 13 }}>{label}</div>
      <div style={{ fontSize: 16, fontWeight: 800, marginTop: 6 }}>{value}</div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <label style={{ display: "grid", gap: 6 }}>
      <span style={{ fontSize: 13, color: "rgba(184,199,221,.95)" }}>{label}</span>
      <input placeholder={placeholder} style={fieldStyle} />
    </label>
  );
}

const fieldStyle = {
  width: "100%",
  padding: "12px 12px",
  borderRadius: 14,
  border: "1px solid rgba(184,199,221,.18)",
  outline: "none",
  background: "rgba(255,255,255,.03)",
  color: "rgba(234,242,255,.95)",
};
