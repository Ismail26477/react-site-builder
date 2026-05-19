const Link = ({ to, children, ...p }) => { const id = to.replace("/", "") || "home"; return <a href={"#" + id} onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }} {...p}>{children}</a>; };
import { ArrowRight, Sparkles, Star } from "lucide-react";

const testimonials = [
  { name: "Rohan Iyer", college: "COEP Pune • Mech", stars: 4, quote: "No spam, no nonsense. Just real data and an honest expert who listened." },
  { name: "Priyanka Rao", college: "MIT Pune • ENTC", stars: 5, quote: "Came in confused, left with a 3-college shortlist. The compare tool is gold." },
  { name: "Karthik Nair", college: "VJTI Mumbai • AI", stars: 5, quote: "They explained NIRF, NAAC, placements like I was 17 — because I was. 10/10." },
  { name: "Aarav Mehta", college: "VJTI Mumbai • CSE", stars: 5, quote: "Compared 6 colleges in one sitting. Picked VJTI with full clarity." },
  { name: "Sneha Patil", college: "PICT Pune • IT", stars: 5, quote: "My counselor knew the cutoffs better than my school. Booked, called, admitted." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ display: "grid", gap: 48, gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
          <div>
            <span className="tag tag-primary"><Sparkles size={12} style={{ verticalAlign: "middle" }} /> India's #1 college discovery for 12th science</span>
            <h1 className="h1" style={{ marginTop: 24 }}>Find Your <span style={{ color: "var(--primary-2)" }}>Dream</span><br />Engineering College</h1>
            <p className="muted" style={{ marginTop: 20, fontSize: 18, maxWidth: 520 }}>
              Compare 100+ colleges in seconds. Book a free expert session today and walk in with clarity, not confusion.
            </p>
            <div style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link to="/compare" className="btn-primary">Compare Colleges <ArrowRight size={16} /></Link>
              <Link to="/book" className="btn-outline">Book Free Session</Link>
            </div>
          </div>
          <div className="card">
            <div style={{ fontSize: 11, letterSpacing: ".2em", color: "var(--muted)" }}>
              <Sparkles size={12} color="var(--warning)" style={{ verticalAlign: "middle" }} /> YOUR TOP MATCH
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 24 }}>PICT Pune</h3>
                <p className="muted" style={{ marginTop: 4, fontSize: 14 }}>Computer Science Engineering</p>
              </div>
              <span style={{ background: "rgba(34,197,94,.15)", color: "var(--success)", padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, height: "fit-content" }}>94% match</span>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 24 }}>
              {[{ l: "FEES", v: "₹1.2L" }, { l: "PLACED", v: "94%", c: "var(--success)" }, { l: "PKG", v: "8.5L", c: "var(--warning)" }].map(s => (
                <div key={s.l} style={{ background: "rgba(10,18,40,.5)", border: "1px solid var(--border)", borderRadius: 12, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 10, letterSpacing: ".2em", color: "var(--muted)" }}>{s.l}</div>
                  <div style={{ fontSize: 22, fontWeight: 700, marginTop: 8, color: s.c || "var(--text)" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: 64 }}>
          <div className="card" style={{ padding: 0, display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
            {[{ v: "100+", l: "COLLEGES" }, { v: "5,000+", l: "STUDENTS GUIDED" }, { v: "98%", l: "SATISFACTION" }, { v: "₹0", l: "HIDDEN FEES" }].map((s, i) => (
              <div key={s.l} className="stat" style={{ borderLeft: i ? "1px solid var(--border)" : "none" }}>
                <div className="stat-v">{s.v}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: "80px 24px" }}>
        <h2 className="h2" style={{ textAlign: "center" }}>Students Who Found Their College with Us</h2>
        <p className="muted" style={{ textAlign: "center", marginTop: 12 }}>Real stories from students just like you.</p>
        <div className="grid" style={{ marginTop: 48, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {testimonials.map(t => (
            <div key={t.name} className="card">
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--primary), var(--primary-2))", display: "grid", placeItems: "center", fontWeight: 700 }}>
                  {t.name.split(" ").map(s => s[0]).join("")}
                </div>
                <div>
                  <div style={{ fontWeight: 600 }}>{t.name}</div>
                  <div className="muted" style={{ fontSize: 12 }}>{t.college}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 2, marginTop: 12 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < t.stars ? "#f59e0b" : "none"} color={i < t.stars ? "#f59e0b" : "#444"} />
                ))}
              </div>
              <p className="muted" style={{ marginTop: 16, fontSize: 14 }}>"{t.quote}"</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
