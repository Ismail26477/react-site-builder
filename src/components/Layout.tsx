import { Link } from "@tanstack/react-router";
import { Compass, Mail, MapPin, MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="size-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
            <Compass className="size-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">CareerCompass</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>Home</Link>
          <Link to="/compare" className="hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>Compare</Link>
          <Link to="/book" className="hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>Book</Link>
        </nav>
        <Link
          to="/book"
          className="rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition"
        >
          Book Free Session
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="size-10 rounded-full bg-gradient-primary flex items-center justify-center">
              <Compass className="size-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">CareerCompass</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Helping Indian students find their right college since 2022.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted-foreground mb-4">QUICK LINKS</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-foreground text-muted-foreground">Home</Link></li>
            <li><Link to="/compare" className="hover:text-foreground text-muted-foreground">Compare</Link></li>
            <li><Link to="/book" className="hover:text-foreground text-muted-foreground">Book Session</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-widest text-muted-foreground mb-4">CONTACT</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MessageCircle className="size-4 text-success" /> WhatsApp: +91 99999 99999</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-info" /> hello@careercompass.in</li>
            <li className="flex items-center gap-2"><MapPin className="size-4 text-warning" /> Pune, Maharashtra</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-sm text-muted-foreground">
        © 2025 CareerCompass • Made with <span className="text-destructive">♥</span> for Indian students
      </div>
    </footer>
  );
}

export function ChatBubble() {
  return (
    <button
      aria-label="Chat with us"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-success flex items-center justify-center shadow-glow hover:scale-105 transition"
    >
      <MessageCircle className="size-6 text-background" />
    </button>
  );
}
