import { GraduationCap, Users, Target, BookOpen, Compass, Trophy, Star } from "lucide-react";

export function About() {
  return (
    <section className="container" style={{ padding: "100px 24px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">
        <div>
          <span className="tag tag-primary">ABOUT US</span>
          <h2 className="h2" style={{ marginTop: 20 }}>We turn confusion into clarity for <span style={{ color: "var(--primary-2)" }}>12th science students</span></h2>
          <p className="muted" style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7 }}>
            CareerCompass started in 2022 with one idea: no Indian student should pick a college based on rumours, coaching-class gossip, or random YouTube videos. We combine real placement data, alumni interviews and 1:1 expert sessions to help you choose with confidence.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginTop: 32 }}>
            {[
              { v: "5,000+", l: "Students guided" },
              { v: "100+", l: "Colleges tracked" },
              { v: "98%", l: "Satisfaction rate" },
              { v: "4.9★", l: "Average rating" },
            ].map(s => (
              <div key={s.l} className="card" style={{ padding: 18 }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "var(--primary-2)" }}>{s.v}</div>
                <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{ padding: 32, background: "linear-gradient(135deg, rgba(79,124,255,.15), rgba(122,162,255,.05))" }}>
          <div style={{ display: "grid", gap: 18 }}>
            {[
              { icon: Target, t: "Personalised match", d: "Stream, budget, location, ranks — we match you to colleges that actually fit." },
              { icon: Users, t: "Expert mentors", d: "Talk to ex-IIT counselors and industry advisors, not call-center reps." },
              { icon: BookOpen, t: "Honest data", d: "Real placement % and packages — no inflated marketing numbers." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg,var(--primary),var(--primary-2))", display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Icon size={20} color="#fff" />
                </div>
                <div>
                  <div style={{ fontWeight: 700 }}>{t}</div>
                  <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  { icon: Compass, t: "College Discovery", d: "Browse 100+ engineering colleges across India, filtered by stream, fees, location and rank." },
  { icon: GraduationCap, t: "1:1 Counseling", d: "Free 15-minute expert call to map your scores and aspirations to the right shortlist." },
  { icon: Target, t: "Side-by-side Compare", d: "Pick any two colleges and see fees, placements, NIRF, NAAC and recruiters at a glance." },
  { icon: BookOpen, t: "Cutoff Predictions", d: "Stream-wise cutoff trends from the past 3 years so you don't shoot in the dark." },
  { icon: Trophy, t: "Scholarship Guidance", d: "Find merit and need-based scholarships you actually qualify for." },
  { icon: Users, t: "Alumni Network", d: "Talk to current students of your shortlisted colleges before you commit." },
];

export function Services() {
  return (
    <section style={{ background: "linear-gradient(180deg, transparent, rgba(79,124,255,.04), transparent)", padding: "100px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <span className="tag tag-primary">WHAT WE DO</span>
          <h2 className="h2" style={{ marginTop: 16 }}>Everything you need to pick the right college</h2>
          <p className="muted" style={{ marginTop: 12 }}>Six services. Zero fluff. All free for students.</p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", marginTop: 56 }}>
          {SERVICES.map(({ icon: Icon, t, d }) => (
            <div key={t} className="card service-card">
              <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg,var(--primary),var(--primary-2))", display: "grid", placeItems: "center" }}>
                <Icon size={22} color="#fff" />
              </div>
              <h3 style={{ margin: "20px 0 8px", fontSize: 18 }}>{t}</h3>
              <p className="muted" style={{ fontSize: 14, margin: 0, lineHeight: 1.6 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { tag: "CASE STUDY", color: "tag-success", t: "Helped 1,200 Pune students in 2024", d: "Walked 1,200 students through MHT-CET counselling rounds — 94% landed their top-3 choice.", stat: "94%", statLabel: "Top-3 admits" },
  { tag: "PARTNERSHIP", color: "tag-info", t: "Official tie-ups with 40+ colleges", d: "Direct verified data feeds from college admin offices — fees, placements, hostels, no middlemen.", stat: "40+", statLabel: "Verified colleges" },
  { tag: "WORKSHOP", color: "tag-warning", t: "CareerCompass Live — Mumbai 2025", d: "300+ students attended our offline counselling expo with 12 college representatives.", stat: "300+", statLabel: "Attendees" },
  { tag: "TOOL", color: "tag-primary", t: "Built India's first open compare engine", d: "Open, free college comparison tool — no signup, no upsell, used by 50K+ students/month.", stat: "50K", statLabel: "Monthly users" },
];

export function Projects() {
  return (
    <section className="container" style={{ padding: "100px 24px" }}>
      <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
        <span className="tag tag-primary">OUR WORK</span>
        <h2 className="h2" style={{ marginTop: 16 }}>Projects & impact</h2>
        <p className="muted" style={{ marginTop: 12 }}>A few things we've shipped that we're proud of.</p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", marginTop: 56 }}>
        {PROJECTS.map(p => (
          <div key={p.t} className="card project-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
              <span className={`tag ${p.color}`}>{p.tag}</span>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 26, fontWeight: 800, color: "var(--primary-2)" }}>{p.stat}</div>
                <div className="muted" style={{ fontSize: 10, letterSpacing: ".15em" }}>{p.statLabel}</div>
              </div>
            </div>
            <h3 style={{ margin: "18px 0 8px", fontSize: 20 }}>{p.t}</h3>
            <p className="muted" style={{ fontSize: 14, margin: 0, lineHeight: 1.6 }}>{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  { name: "Rohan Iyer", college: "COEP Pune • Mech", stars: 5, quote: "No spam, no nonsense. Just real data and an honest expert who listened." },
  { name: "Priyanka Rao", college: "MIT Pune • ENTC", stars: 5, quote: "Came in confused, left with a 3-college shortlist. The compare tool is gold." },
  { name: "Karthik Nair", college: "VJTI Mumbai • AI", stars: 5, quote: "They explained NIRF, NAAC, placements like I was 17 — because I was. 10/10." },
  { name: "Aarav Mehta", college: "VJTI Mumbai • CSE", stars: 5, quote: "Compared 6 colleges in one sitting. Picked VJTI with full clarity." },
  { name: "Sneha Patil", college: "PICT Pune • IT", stars: 5, quote: "My counselor knew the cutoffs better than my school. Booked, called, admitted." },
  { name: "Devansh Joshi", college: "COEP Pune • CSE", stars: 5, quote: "The free session changed my entire shortlist. Honest, sharp, zero upsell." },
];

export function Testimonials() {
  return (
    <section style={{ background: "linear-gradient(180deg, transparent, rgba(79,124,255,.04), transparent)", padding: "100px 0" }}>
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <span className="tag tag-primary">TESTIMONIALS</span>
          <h2 className="h2" style={{ marginTop: 16 }}>Students who found their college with us</h2>
          <p className="muted" style={{ marginTop: 12 }}>Real stories. Real admits. Real students.</p>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", marginTop: 56 }}>
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="card">
              <div style={{ display: "flex", gap: 2 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill={i < t.stars ? "#f59e0b" : "none"} color={i < t.stars ? "#f59e0b" : "#444"} />
                ))}
              </div>
              <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6 }}>"{t.quote}"</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 18, borderTop: "1px solid var(--border)", paddingTop: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,var(--primary),var(--primary-2))", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 13 }}>
                  {t.name.split(" ").map(s => s[0]).join("")}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div className="muted" style={{ fontSize: 12 }}>{t.college}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
