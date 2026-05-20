import { useState, useEffect } from "react";
import { Compass, MessageSquare, Mail, MapPin, Menu, X } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_MESSAGE = "Hi CareerCompass! I'd like to book a free expert session and get help choosing my engineering college.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const scrollTo = (id, cb) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  cb && cb();
};

const NAV = [
  ["home", "Home"], ["about", "About"], ["services", "Services"],
  ["projects", "Projects"], ["compare", "Compare"], ["testimonials", "Reviews"], ["book", "Book"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" onClick={scrollTo("home", () => setOpen(false))} className="logo">
          <span className="logo-icon"><Compass size={18} color="#fff" /></span>
          CareerCompass
        </a>
        <nav className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={scrollTo(id, () => setOpen(false))}>{label}</a>
          ))}
          <a href="#book" onClick={scrollTo("book", () => setOpen(false))} className="btn-primary nav-cta nav-cta-mobile">Book Free Session</a>
        </nav>
        <a href="#book" onClick={scrollTo("book")} className="btn-primary nav-cta nav-cta-desktop">Book Free Session</a>
        <button className="nav-burger" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
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
            <a href="#about" onClick={scrollTo("about")}>About</a>
            <a href="#services" onClick={scrollTo("services")}>Services</a>
            <a href="#projects" onClick={scrollTo("projects")}>Projects</a>
            <a href="#compare" onClick={scrollTo("compare")}>Compare</a>
            <a href="#book" onClick={scrollTo("book")}>Book Session</a>
          </div>
        </div>
        <div>
          <h4 style={{ color: "var(--muted)", margin: "0 0 14px", fontSize: 11, letterSpacing: ".2em" }}>CONTACT</h4>
          <div style={{ display: "grid", gap: 10, fontSize: 14 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: 10, alignItems: "center" }}><MessageSquare size={16} color="var(--success)" /> WhatsApp: +91 99999 99999</a>
            <a href="mailto:hello@careercompass.in" style={{ display: "flex", gap: 10, alignItems: "center" }}><Mail size={16} color="var(--primary-2)" /> hello@careercompass.in</a>
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
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="chat" aria-label="Chat with us on WhatsApp" title="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" width="28" height="28" fill="#fff" aria-hidden="true">
        <path d="M19.11 17.39c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM16 3C8.82 3 3 8.82 3 16c0 2.31.62 4.48 1.7 6.36L3 29l6.81-1.66A12.93 12.93 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3zm0 23.6c-1.95 0-3.78-.55-5.34-1.5l-.38-.23-4.04.98 1-3.94-.25-.4A10.6 10.6 0 1 1 26.6 16c0 5.85-4.75 10.6-10.6 10.6z"/>
      </svg>
    </a>
  );
}
