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
        <button className="nav-burger" aria-label="Toggle menu" onClick={() => setOpen(o => !o)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <a href="#home" onClick={scrollTo("home", () => setOpen(false))} className="logo nav-logo">
          <span className="logo-icon"><Compass size={18} color="#fff" /></span>
          CareerCompass
        </a>
        <nav className="nav-links-desktop">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={scrollTo(id)}>{label}</a>
          ))}
        </nav>
        <a href="#book" onClick={scrollTo("book")} className="btn-primary nav-cta">Book</a>
      </div>
      {open && (
        <div className="nav-drawer">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={scrollTo(id, () => setOpen(false))}>{label}</a>
          ))}
          <a href="#book" onClick={scrollTo("book", () => setOpen(false))} className="btn-primary" style={{ justifyContent: "center", marginTop: 8 }}>Book Free Session</a>
        </div>
      )}
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
      <svg viewBox="0 0 24 24" width="30" height="30" fill="#fff" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/>
      </svg>
    </a>
  );
}
