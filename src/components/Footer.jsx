import { useLanguage } from "../context/LanguageContext.jsx";

const PHONE = "0965333435";
const WHATSAPP = "https://wa.me/251965333435";
const SOCIAL_LINKS = [
  { label: "TikTok", href: "https://www.tiktok.com/@galaxyfurniture4?_r=1&_t=ZS-9534VLbGl1h", icon: "tiktok" },
  { label: "Facebook", href: "https://www.facebook.com/share/1E4SqiYmMn/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/galax.yfurniture?igsh=MWdwY2kxd3JuenY5YQ==", icon: "instagram" },
  { label: "Telegram", href: "https://t.me/Galaxy_furniture", icon: "telegram" },
];

const branches = [
  { name: "Semit 72", address: "In front of Getas Real Estate", phones: ["0967333435"] },
  { name: "Figa", address: "Around traffic light", phones: ["0965333435", "0964333435"] },
  { name: "Goro", address: "In front of Sunrise Real Estate", phones: ["0966333435"] },
];

export default function Footer() {
  const chipBaseStyle = { height: "100%", alignSelf: "stretch" };
  const { t } = useLanguage();

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
          <div className="chip" style={{ ...chipBaseStyle, display: "flex", gap: 12, alignItems: "center" }}>
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
              <div className="small">{t("footer_tagline")}</div>
            </div>
          </div>

          <div className="chip" style={{ ...chipBaseStyle, display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 900 }}>{t("branches")}</div>
            <div className="small" style={{ marginTop: 6 }}>
              {branches.map((branch) => (
                <div key={branch.name} style={{ marginBottom: 8 }}>
                  <div style={{ fontWeight: 800 }}>{branch.name} {t("branch_suffix")}</div>
                  <div>{branch.address}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="chip" style={{ ...chipBaseStyle, display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 900 }}>{t("contact_title")}</div>
            <div className="small" style={{ marginTop: 6 }}>
              {t("main")}:{" "}
              <a href={`tel:${PHONE}`} style={{ color: "#FFD700", fontWeight: 900 }}>
                {PHONE}
              </a>
              <br />
              {t("whatsapp")}:{" "}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ color: "#FFD700", fontWeight: 900 }}>
                {t("chat_with_us")}
              </a>
              <div style={{ marginTop: 8 }}>
                {branches.map((branch) => (
                  <div key={`${branch.name}-phones`} style={{ marginBottom: 6 }}>
                    <div style={{ fontWeight: 800 }}>{branch.name} {t("branch_phones")}</div>
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

              <div style={{ marginTop: 10 }}>
                <div style={{ fontWeight: 800, marginBottom: 6 }}>{t("follow_us")}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {SOCIAL_LINKS.map((social) => (
                    <SocialLink key={social.label} social={social} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr" />

        <div className="small" style={{ textAlign: "center", color: "rgba(184,199,221,.92)" }}>
          (c) {new Date().getFullYear()} Galaxy Furniture. {t("rights")}
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ social }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noreferrer"
      className="btn ghost"
      style={{
        borderRadius: 999,
        padding: "8px 12px",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
      }}
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
