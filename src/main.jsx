import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar, Footer, ChatBubble } from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Compare from "./pages/Compare.jsx";
import Book from "./pages/Book.jsx";
import { About, Services, Projects, Testimonials } from "./pages/Portfolio.jsx";
import "./styles.css";

function App() {
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
