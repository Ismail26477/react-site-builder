const Link = ({ to, children, ...p }) => { const id = to.replace("/", "") || "home"; return <a href={"#" + id} onClick={e => { e.preventDefault(); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); }} {...p}>{children}</a>; };
import { ArrowRight, Sparkles } from "lucide-react";


export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
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
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, gap: 12 }}>
              <div>
                <h3 style={{ margin: 0, fontSize: 22 }}>PICT Pune</h3>
                <p className="muted" style={{ marginTop: 4, fontSize: 14 }}>Computer Science Engineering</p>
              </div>
              <span style={{ background: "rgba(34,197,94,.15)", color: "var(--success)", padding: "4px 12px", borderRadius: 999, fontSize: 12, fontWeight: 600, height: "fit-content", whiteSpace: "nowrap" }}>94% match</span>
            </div>
            <div className="match-stats">
              {[{ l: "FEES", v: "₹1.2L" }, { l: "PLACED", v: "94%", c: "var(--success)" }, { l: "PKG", v: "8.5L", c: "var(--warning)" }].map(s => (
                <div key={s.l} style={{ background: "rgba(10,18,40,.5)", border: "1px solid var(--border)", borderRadius: 12, padding: 14, textAlign: "center" }}>
                  <div style={{ fontSize: 10, letterSpacing: ".2em", color: "var(--muted)" }}>{s.l}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, marginTop: 8, color: s.c || "var(--text)" }}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: 64 }}>
          <div className="card stats-card">
            {[{ v: "100+", l: "COLLEGES" }, { v: "5,000+", l: "STUDENTS GUIDED" }, { v: "98%", l: "SATISFACTION" }, { v: "₹0", l: "HIDDEN FEES" }].map((s, i) => (
              <div key={s.l} className="stat">
                <div className="stat-v">{s.v}</div>
                <div className="stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  );
}
