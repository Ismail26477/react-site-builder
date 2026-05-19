import { NavLink, Link } from "react-router-dom";
import { Compass, MessageCircle, MessageSquare, Mail, MapPin } from "lucide-react";

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
          <NavLink to="/book">Book</NavLink>
        </nav>
        <Link to="/book" className="btn-primary" style={{ padding: "10px 22px", fontSize: 14 }}>Book Free Session</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container" style={{ display: "grid", gap: 32, gridTemplateColumns: "1.2fr 1fr 1.4fr" }}>
        <div>
          <div className="logo" style={{ color: "var(--text)" }}>
            <span className="logo-icon"><Compass size={18} color="#fff" /></span>
            CareerCompass
          </div>
          <p style={{ marginTop: 12, fontSize: 14 }}>Helping Indian students find their right college since 2022.</p>
        </div>
        <div>
          <h4 style={{ color: "var(--muted)", margin: "0 0 14px", fontSize: 11, letterSpacing: ".2em" }}>QUICK LINKS</h4>
          <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
            <Link to="/">Home</Link>
            <Link to="/compare">Compare</Link>
            <Link to="/book">Book Session</Link>
          </div>
        </div>
        <div>
          <h4 style={{ color: "var(--muted)", margin: "0 0 14px", fontSize: 11, letterSpacing: ".2em" }}>CONTACT</h4>
          <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}><MessageSquare size={16} color="var(--success)" /> WhatsApp: +91 99999 99999</div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Mail size={16} color="var(--primary-2)" /> hello@careercompass.in</div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}><MapPin size={16} color="var(--warning)" /> Pune, Maharashtra</div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: 32, fontSize: 12, opacity: .7, textAlign: "center", borderTop: "1px solid var(--border)", paddingTop: 20 }}>© 2025 CareerCompass • Made with ❤ for Indian students</div>
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
