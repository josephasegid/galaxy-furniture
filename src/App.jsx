import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Analytics } from "@vercel/analytics/react"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import Branches from "./pages/Branches.jsx";
import Contact from "./pages/Contact.jsx";
import { CATEGORY_PAGES } from "./data/categories.js";

export default function App() {
  return (
    <div className="app">
      {/* Premium announcement bar */}
      <div className="announce">
        <div className="container announce-inner">
          <div className="announce-left">
            <span className="dot" />
            <span>
              Premium furniture • Custom orders • Fast delivery
              <span className="small"> — Addis Ababa</span>
            </span>
          </div>

          <div className="announce-right">
            <a className="btn ghost" href="tel:0965333435" style={{ borderRadius: 999 }}>
              Call: 0965333435
            </a>
            <a
              className="btn primary"
              href="https://wa.me/251965333435?text=Hello%20Galaxy%20Furniture%2C%20I%20want%20to%20ask%20about%20furniture."
              target="_blank"
              rel="noreferrer"
              style={{ borderRadius: 999 }}
            >
              WhatsApp
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
    </div>
  );
}
