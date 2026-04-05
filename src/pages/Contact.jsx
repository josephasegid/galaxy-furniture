import { useLanguage } from "../context/LanguageContext.jsx";

const SOCIAL_LINKS = [
  { label: "TikTok", href: "https://www.tiktok.com/@galaxyfurniture4?_r=1&_t=ZS-9534VLbGl1h", icon: "tiktok" },
  { label: "Facebook", href: "https://www.facebook.com/share/1E4SqiYmMn/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/galax.yfurniture?igsh=MWdwY2kxd3JuenY5YQ==", icon: "instagram" },
  { label: "Telegram", href: "https://t.me/Galaxy_furniture", icon: "telegram" },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="grid cols-2" style={{ alignItems: "start" }}>
      <section className="card" style={{ padding: 22 }}>
        <span className="badge">{t("contact_title")}</span>
        <h1 className="h1">{t("contact_heading")}</h1>
        <p className="p">{t("contact_body")}</p>

        <hr className="hr" />

        <div className="grid" style={{ gap: 12 }}>
          <ContactRow label={t("phone")} value="0965333435" />
          <ContactRow label={t("owner")} value="Seid Mohamed Taye" />
          <a className="btn primary" href="tel:0965333435">{t("call_now")}</a>
          <a
            className="btn"
            href="https://wa.me/251965333435?text=Hello%20Galaxy%20Furniture%2C%20I%20want%20to%20ask%20about%20furniture."
            target="_blank"
            rel="noreferrer"
          >
            {t("whatsapp_message")}
          </a>

          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: 13, color: "rgba(184,199,221,.9)", marginBottom: 8 }}>{t("social_media")}</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map((social) => (
                <SocialLink key={social.label} social={social} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="card" style={{ padding: 22 }}>
        <h2 className="h2">{t("send_request")}</h2>
        <p className="p">{t("demo_form")}</p>

        <form onSubmit={(e) => e.preventDefault()} style={{ marginTop: 14, display: "grid", gap: 12 }}>
          <Input label={t("full_name")} placeholder={t("your_name")} />
          <Input label={t("phone_number")} placeholder="09..." />
          <Input label={t("what_do_you_need")} placeholder={t("custom_order_placeholder")} />

          <label style={{ display: "grid", gap: 6 }}>
            <span style={{ fontSize: 13, color: "rgba(184,199,221,.95)" }}>{t("message")}</span>
            <textarea rows="5" placeholder={t("write_message")} style={fieldStyle} />
          </label>

          <button className="btn primary" type="submit">{t("submit_demo")}</button>
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

function SocialLink({ social }) {
  return (
    <a
      className="btn ghost"
      href={social.href}
      target="_blank"
      rel="noreferrer"
      style={{ borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 8 }}
      aria-label={social.label}
    >
      <SocialIcon type={social.icon} />
      <span>{social.label}</span>
    </a>
  );
}

function SocialIcon({ type }) {
  const baseProps = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true,
    style: { display: "block" },
  };

  if (type === "facebook") {
    return (
      <svg {...baseProps}>
        <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.6 1.6-1.6H16V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 4V11H7.5v3H10v7h3.5Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg {...baseProps}>
        <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9a4.5 4.5 0 0 1-4.5 4.5h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.8A2.7 2.7 0 0 0 4.8 7.5v9a2.7 2.7 0 0 0 2.7 2.7h9a2.7 2.7 0 0 0 2.7-2.7v-9a2.7 2.7 0 0 0-2.7-2.7h-9Zm9.75 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 1.8A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Z" />
      </svg>
    );
  }

  if (type === "telegram") {
    return (
      <svg {...baseProps}>
        <path d="M21.4 4.6 18.3 19c-.2 1-.8 1.2-1.6.8l-4.4-3.2-2.1 2c-.2.2-.4.4-.8.4l.3-4.5 8.3-7.5c.4-.3-.1-.5-.6-.2L7.2 13.2l-4.3-1.3c-.9-.3-.9-.9.2-1.3L20 4.1c.8-.3 1.6.2 1.4 1.5Z" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <path d="M16.6 5.8A3.7 3.7 0 0 0 14 3v11.5a2.8 2.8 0 1 1-2-2.7V9.2a6.8 6.8 0 0 1-4.6-2v5.8a4.8 4.8 0 1 0 4.8 4.8V12c1.4 1 3 1.5 4.8 1.5V9.9a3.7 3.7 0 0 1-.4-4.1Z" />
    </svg>
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
