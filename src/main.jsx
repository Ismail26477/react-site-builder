import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Navbar, Footer, ChatBubble } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Compare from "./pages/Compare.jsx";
import Book from "./pages/Book.jsx";
import { About, Services, Projects, Testimonials } from "./pages/Portfolio.jsx";
import "./styles.css";

function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".card, .h1, .h2, .tag, .stat, .marquee, .hero-grid > div, .compare-row");
    targets.forEach(el => el.classList.add("reveal"));
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("reveal-in"); io.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function App() {
  useScrollReveal();
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="compare"><Compare /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="book"><Book /></section>
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
