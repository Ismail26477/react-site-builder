import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/compare")({
  component: ComparePage,
  head: () => ({
    meta: [
      { title: "Compare Colleges — CareerCompass" },
      { name: "description", content: "Select any 2 colleges and instantly see how they stack up — fees, placements, rankings, the whole picture." },
    ],
    links: [{ rel: "canonical", href: "/compare" }],
  }),
});

type College = {
  name: string; tag: string; tagColor: string;
  location: string; fees: string; topCourse: string; pkg: string;
  nirf: string; naac: string; facilities: string; placement: string;
  recruiter: string; rating: string;
};

const COLLEGES: Record<string, College> = {
  "PICT Pune": {
    name: "PICT Pune", tag: "BEST VALUE", tagColor: "text-warning border-warning/40 bg-warning/10",
    location: "Pune", fees: "₹1.2L", topCourse: "CSE", pkg: "₹8.5 LPA",
    nirf: "#45", naac: "A+", facilities: "Hostel, Gym, Lab", placement: "94%",
    recruiter: "TCS, Infosys", rating: "4.6/5",
  },
  "VJTI Mumbai": {
    name: "VJTI Mumbai", tag: "BEST PLACEMENT", tagColor: "text-success border-success/40 bg-success/10",
    location: "Mumbai", fees: "₹1.8L", topCourse: "CS + AI", pkg: "₹12 LPA",
    nirf: "#18", naac: "A++", facilities: "Hostel, R&D Lab", placement: "97%",
    recruiter: "Google, Amazon", rating: "4.8/5",
  },
  "COEP Pune": {
    name: "COEP Pune", tag: "TOP RANKED", tagColor: "text-info border-info/40 bg-info/10",
    location: "Pune", fees: "₹95K", topCourse: "Mech", pkg: "₹9 LPA",
    nirf: "#22", naac: "A++", facilities: "Hostel, Workshop", placement: "93%",
    recruiter: "L&T, Tata", rating: "4.7/5",
  },
  "MIT Pune": {
    name: "MIT Pune", tag: "MODERN CAMPUS", tagColor: "text-primary-bright border-primary/40 bg-primary/10",
    location: "Pune", fees: "₹2.4L", topCourse: "ENTC", pkg: "₹7.5 LPA",
    nirf: "#62", naac: "A+", facilities: "Hostel, Sports", placement: "89%",
    recruiter: "Cognizant, Wipro", rating: "4.4/5",
  },
};

const ROWS: { icon: string; key: keyof College; label: string; highlight?: "min" | "max" }[] = [
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

function ComparePage() {
  const [a, setA] = useState("PICT Pune");
  const [b, setB] = useState("VJTI Mumbai");
  const A = COLLEGES[a]; const B = COLLEGES[b];

  const isBetter = (row: typeof ROWS[number], side: "a" | "b") => {
    if (!row.highlight) return false;
    const parse = (v: string) => parseFloat(v.replace(/[^\d.]/g, "")) || 0;
    const va = parse(A[row.key]); const vb = parse(B[row.key]);
    if (row.highlight === "min") return side === "a" ? va < vb : vb < va;
    return side === "a" ? va > vb : vb > va;
  };

  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Compare Colleges Side by Side</h1>
        <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
          Select any 2 colleges and instantly see how they stack up — fees, placements, rankings, the whole picture.
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {[["COLLEGE A", a, setA], ["COLLEGE B", b, setB]].map(([label, val, set]) => (
            <div key={label as string} className="rounded-2xl border border-primary/30 bg-card/60 p-5 shadow-card">
              <p className="text-xs tracking-widest text-primary-bright">{label as string}</p>
              <select
                value={val as string}
                onChange={(e) => (set as (v: string) => void)(e.target.value)}
                className="mt-2 w-full bg-transparent text-2xl font-bold focus:outline-none"
              >
                {Object.keys(COLLEGES).map(c => <option key={c} value={c} className="bg-card">{c}</option>)}
              </select>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-border/60 bg-card/40 overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-5 border-b border-border/60 text-sm">
            <span className="text-xs tracking-widest text-muted-foreground self-center">FEATURE</span>
            <div>
              <p className="text-xl font-bold">{A.name}</p>
              <span className={`mt-2 inline-block rounded-full border px-3 py-1 text-[10px] tracking-widest font-semibold ${A.tagColor}`}>{A.tag}</span>
            </div>
            <div>
              <p className="text-xl font-bold">{B.name}</p>
              <span className={`mt-2 inline-block rounded-full border px-3 py-1 text-[10px] tracking-widest font-semibold ${B.tagColor}`}>{B.tag}</span>
            </div>
          </div>

          {ROWS.map((r) => (
            <div key={r.label} className="grid grid-cols-3 px-6 py-5 border-b border-border/40 last:border-0 items-center text-sm">
              <span className="text-muted-foreground">{r.icon} {r.label}</span>
              <div>
                <span className={`px-3 py-2 rounded-lg inline-block ${isBetter(r, "a") ? "border border-success/50 bg-success/10 text-success font-semibold" : ""}`}>
                  {A[r.key]}
                </span>
              </div>
              <div>
                <span className={`px-3 py-2 rounded-lg inline-block ${isBetter(r, "b") ? "border border-success/50 bg-success/10 text-success font-semibold" : ""}`}>
                  {B[r.key]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-primary/30 bg-card/60 p-8 flex flex-wrap gap-6 items-center justify-between shadow-card">
          <div>
            <h3 className="text-2xl font-bold">Still unsure which one suits you?</h3>
            <p className="text-muted-foreground mt-1">Talk to an expert. 15-minute call, zero pressure.</p>
          </div>
          <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow">
            Book Free Session <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
