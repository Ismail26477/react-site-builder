import { NavLink, Link } from "react-router-dom";
import { Compass, MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="logo">
          <span className="logo-icon"><Compass size={18} color="#fff" /></span>
          CareerCompass
        </Link>
        <nav style={{ display: "flex", gap: 4 }}>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/compare">Compare</NavLink>
          <NavLink to="/book">Book Session</NavLink>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "grid", gap: 32, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <div>
          <div className="logo" style={{ color: "var(--text)" }}>
            <span className="logo-icon"><Compass size={18} color="#fff" /></span>
            CareerCompass
          </div>
          <p style={{ marginTop: 12, fontSize: 14 }}>India's #1 college discovery for 12th science students.</p>
        </div>
        <div>
          <h4 style={{ color: "var(--text)", margin: "0 0 12px" }}>Quick Links</h4>
          <div style={{ display: "grid", gap: 8, fontSize: 14 }}>
            <Link to="/">Home</Link>
            <Link to="/compare">Compare Colleges</Link>
            <Link to="/book">Book Session</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: "var(--text)", margin: "0 0 12px" }}>Contact</h4>
          <p style={{ fontSize: 14, margin: 0 }}>hello@careercompass.in<br />+91 98765 43210</p>
        </div>
      </div>
      <div className="container" style={{ marginTop: 32, fontSize: 12, opacity: .7 }}>© 2026 CareerCompass. All rights reserved.</div>
    </footer>
  );
}

export function ChatBubble() {
  return (
    <button className="chat" aria-label="Chat with us">
      <MessageCircle size={24} color="#fff" />
    </button>
  );
}
