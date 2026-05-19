import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const COLLEGES = {
  "PICT Pune": { name: "PICT Pune", tag: "BEST VALUE", tagClass: "tag-warning", location: "Pune", fees: "₹1.2L", topCourse: "CSE", pkg: "₹8.5 LPA", nirf: "#45", naac: "A+", facilities: "Hostel, Gym, Lab", placement: "94%", recruiter: "TCS, Infosys", rating: "4.6/5" },
  "VJTI Mumbai": { name: "VJTI Mumbai", tag: "BEST PLACEMENT", tagClass: "tag-success", location: "Mumbai", fees: "₹1.8L", topCourse: "CS + AI", pkg: "₹12 LPA", nirf: "#18", naac: "A++", facilities: "Hostel, R&D Lab", placement: "97%", recruiter: "Google, Amazon", rating: "4.8/5" },
  "COEP Pune": { name: "COEP Pune", tag: "TOP RANKED", tagClass: "tag-info", location: "Pune", fees: "₹95K", topCourse: "Mech", pkg: "₹9 LPA", nirf: "#22", naac: "A++", facilities: "Hostel, Workshop", placement: "93%", recruiter: "L&T, Tata", rating: "4.7/5" },
  "MIT Pune": { name: "MIT Pune", tag: "MODERN CAMPUS", tagClass: "tag-primary", location: "Pune", fees: "₹2.4L", topCourse: "ENTC", pkg: "₹7.5 LPA", nirf: "#62", naac: "A+", facilities: "Hostel, Sports", placement: "89%", recruiter: "Cognizant, Wipro", rating: "4.4/5" },
};

const ROWS = [
  { icon: "📍", key: "location", label: "Location" },
  { icon: "💰", key: "fees", label: "Annual Fees", highlight: "min" },
  { icon: "🎓", key: "topCourse", label: "Top Course" },
  { icon: "📦", key: "pkg", label: "Avg Package", highlight: "max" },
  { icon: "🏆", key: "nirf", label: "NIRF Ranking", highlight: "min" },
  { icon: "✅", key: "naac", label: "NAAC Grade" },
  { icon: "🏗️", key: "facilities", label: "Facilities" },
  { icon: "📊", key: "placement", label: "Placement Rate", highlight: "max" },
  { icon: "🥇", key: "recruiter", label: "Top Recruiter" },
  { icon: "⭐", key: "rating", label: "Student Rating", highlight: "max" },
];

export default function Compare() {
  const [a, setA] = useState("PICT Pune");
  const [b, setB] = useState("VJTI Mumbai");
  const A = COLLEGES[a], B = COLLEGES[b];

  const isBest = (row, side) => {
    if (!row.highlight) return false;
    const p = v => parseFloat(String(v).replace(/[^\d.]/g, "")) || 0;
    const va = p(A[row.key]), vb = p(B[row.key]);
    return row.highlight === "min" ? (side === "a" ? va < vb : vb < va) : (side === "a" ? va > vb : vb > va);
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 className="h2" style={{ textAlign: "center" }}>Compare Colleges Side by Side</h1>
        <p className="muted" style={{ textAlign: "center", marginTop: 12, maxWidth: 600, margin: "12px auto 0" }}>
          Select any 2 colleges and instantly see how they stack up.
        </p>

        <div className="row" style={{ marginTop: 48 }}>
          {[["COLLEGE A", a, setA], ["COLLEGE B", b, setB]].map(([label, val, set]) => (
            <div key={label} className="card" style={{ borderColor: "rgba(79,124,255,.3)" }}>
              <div style={{ fontSize: 11, letterSpacing: ".2em", color: "var(--primary-2)" }}>{label}</div>
              <select value={val} onChange={e => set(e.target.value)} style={{ marginTop: 8, width: "100%", background: "transparent", border: 0, color: "var(--text)", fontSize: 22, fontWeight: 700, outline: "none" }}>
                {Object.keys(COLLEGES).map(c => <option key={c} value={c} style={{ background: "var(--card)" }}>{c}</option>)}
              </select>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 32, padding: 0, overflow: "hidden" }}>
          <div className="compare-row">
            <span className="muted" style={{ fontSize: 11, letterSpacing: ".2em" }}>FEATURE</span>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{A.name}</div>
              <span className={`tag ${A.tagClass}`} style={{ marginTop: 8 }}>{A.tag}</span>
            </div>
            <div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{B.name}</div>
              <span className={`tag ${B.tagClass}`} style={{ marginTop: 8 }}>{B.tag}</span>
            </div>
          </div>
          {ROWS.map(r => (
            <div key={r.label} className="compare-row">
              <span className="muted">{r.icon} {r.label}</span>
              <div><span className={isBest(r, "a") ? "best" : ""}>{A[r.key]}</span></div>
              <div><span className={isBest(r, "b") ? "best" : ""}>{B[r.key]}</span></div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
          <div>
            <h3 style={{ margin: 0, fontSize: 22 }}>Still unsure which one suits you?</h3>
            <p className="muted" style={{ margin: "4px 0 0" }}>Talk to an expert. 15-minute call, zero pressure.</p>
          </div>
          <Link to="/book" className="btn-primary">Book Free Session <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
