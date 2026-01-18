import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import Branches from "./pages/Branches.jsx";
import Contact from "./pages/Contact.jsx";

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
            <a className="btn ghost" href="tel:0911599541" style={{ borderRadius: 999 }}>
              Call: 0911599541
            </a>
            <a
              className="btn primary"
              href="https://wa.me/251911599541?text=Hello%20Galaxy%20Furniture%2C%20I%20want%20to%20ask%20about%20furniture."
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
          <Route path="/branches" element={<Branches />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
