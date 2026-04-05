import { useLanguage } from "../context/LanguageContext.jsx";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="grid" style={{ gap: 18 }}>
      <section className="card" style={{ padding: 22 }}>
        <span className="badge">{t("about_badge")}</span>
        <h1 className="h1">{t("about_heading")}</h1>
        <p className="p">{t("about_body")}</p>

        <hr className="hr" />

        <div className="grid cols-2">
          <Info title={t("owner")} value="Seid Mohamed Taye" />
          <Info title={t("phone")} value="0965333435" />
          <Info title={t("branches")} value="3" />
          <Info title={t("workshop")} value="1" />
        </div>
      </section>

      <section className="grid cols-2">
        <div className="card" style={{ padding: 22 }}>
          <h2 className="h2">{t("vision")}</h2>
          <p className="p">{t("vision_body")}</p>
        </div>
        <div className="card" style={{ padding: 22 }}>
          <h2 className="h2">{t("mission")}</h2>
          <p className="p">{t("mission_body")}</p>
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
