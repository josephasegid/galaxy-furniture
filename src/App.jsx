import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Seo from "./components/Seo.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Branches from "./pages/Branches.jsx";
import Contact from "./pages/Contact.jsx";
import { CATEGORY_PAGES } from "./data/categories.js";
import { LanguageProvider, useLanguage } from "./context/LanguageContext.jsx";

export default function App() {
  return (
    <LanguageProvider>
      <AppShell />
    </LanguageProvider>
  );
}

function AppShell() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const finishLoading = () => {
      window.setTimeout(() => {
        if (!cancelled) setLoading(false);
      }, 700);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return (
    <div className="app">
      <Seo />
      {loading && (
        <div className="app-loader" role="status" aria-live="polite" aria-label="Loading website">
          <div className="app-loader-card">
            <img className="app-loader-logo" src="/brand/logo.png" alt="Galaxy Furniture" />
            <div className="app-loader-ring" />
            <strong>Galaxy Furniture</strong>
            <div className="small">{t("shop_by_category")}</div>
            <div className="app-loader-text">Loading...</div>
          </div>
        </div>
      )}

      <div className="announce">
        <div className="container announce-inner">
          <div className="announce-left">
            <span className="dot" />
            <span>
              {t("app_announcement")}
              <span className="small"> - {t("app_city")}</span>
            </span>
          </div>

          <div className="announce-right">
            <a className="btn ghost" href="tel:0965333435" style={{ borderRadius: 999 }}>
              {t("call")}: 0965333435
            </a>
            <a
              className="btn primary"
              href="https://wa.me/251965333435?text=Hello%20Galaxy%20Furniture%2C%20I%20want%20to%20ask%20about%20furniture."
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 999 }}
            >
              {t("whatsapp")}
            </a>
          </div>
        </div>
      </div>

      <Navbar />

      <main className="container page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          {CATEGORY_PAGES.map((page) => (
            <Route
              key={page.slug}
              path={`/${page.slug}`}
              element={<CategoryPage category={page.label} />}
            />
          ))}
          <Route path="/branches" element={<Branches />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}
