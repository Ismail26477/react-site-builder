import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const MENTORS = [
  { name: "Aditi Sharma", role: "IIT Bombay • 8 yrs counseling", rating: "4.9" },
  { name: "Rohit Verma", role: "Ex-COEP • Placements expert", rating: "4.8" },
  { name: "Neha Kulkarni", role: "Career strategist • 500+ students", rating: "4.9" },
];

export default function Book() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", percent: "", budget: "", stream: "CSE", date: "", time: "10:00 AM", message: "" });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (done) {
    return (
      <section className="hero">
        <div className="container" style={{ maxWidth: 600, textAlign: "center" }}>
          <CheckCircle2 size={64} color="var(--success)" style={{ margin: "0 auto" }} />
          <h1 className="h2" style={{ marginTop: 16 }}>Session Booked!</h1>
          <p className="muted" style={{ marginTop: 12 }}>We'll call you on {form.phone} at {form.time} on {form.date}. Talk soon!</p>
          <button className="btn-primary" style={{ marginTop: 24 }} onClick={() => { setDone(false); setForm({ name: "", phone: "", email: "", percent: "", budget: "", stream: "CSE", date: "", time: "10:00 AM", message: "" }); }}>Book another</button>
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="container" style={{ display: "grid", gap: 32, gridTemplateColumns: "2fr 1fr" }}>
        <form className="card" onSubmit={e => { e.preventDefault(); setDone(true); }}>
          <h1 className="h2">Book Your Free Session</h1>
          <p className="muted" style={{ marginTop: 8 }}>15 minutes. One expert. Real answers.</p>
          <div className="grid" style={{ marginTop: 24, gap: 16 }}>
            <div className="row">
              <div><label>Full Name</label><input className="input" required value={form.name} onChange={e => upd("name", e.target.value)} /></div>
              <div><label>Phone</label><input className="input" required value={form.phone} onChange={e => upd("phone", e.target.value)} /></div>
            </div>
            <div className="row">
              <div><label>Email</label><input className="input" type="email" required value={form.email} onChange={e => upd("email", e.target.value)} /></div>
              <div><label>12th Percentage</label><input className="input" value={form.percent} onChange={e => upd("percent", e.target.value)} /></div>
            </div>
            <div className="row">
              <div><label>Annual Budget</label><input className="input" placeholder="e.g. ₹2L" value={form.budget} onChange={e => upd("budget", e.target.value)} /></div>
              <div><label>Preferred Stream</label>
                <select className="select" value={form.stream} onChange={e => upd("stream", e.target.value)}>
                  <option>CSE</option><option>IT</option><option>ENTC</option><option>Mechanical</option><option>Civil</option><option>AI/ML</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div><label>Date</label><input className="input" type="date" required value={form.date} onChange={e => upd("date", e.target.value)} /></div>
              <div><label>Time Slot</label>
                <select className="select" value={form.time} onChange={e => upd("time", e.target.value)}>
                  <option>10:00 AM</option><option>12:00 PM</option><option>3:00 PM</option><option>6:00 PM</option>
                </select>
              </div>
            </div>
            <div><label>Anything else?</label><textarea className="textarea" rows={3} value={form.message} onChange={e => upd("message", e.target.value)} /></div>
            <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>Confirm Booking</button>
          </div>
        </form>

        <div className="card">
          <h3 style={{ margin: 0 }}>Your mentors</h3>
          <p className="muted" style={{ marginTop: 4, fontSize: 13 }}>Hand-picked. Verified.</p>
          <div className="grid" style={{ marginTop: 16, gap: 12 }}>
            {MENTORS.map(m => (
              <div key={m.name} style={{ display: "flex", gap: 12, padding: 12, background: "rgba(10,18,40,.5)", border: "1px solid var(--border)", borderRadius: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--primary), var(--primary-2))", display: "grid", placeItems: "center", fontWeight: 700, flexShrink: 0 }}>{m.name.split(" ").map(s => s[0]).join("")}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{m.name}</div>
                  <div className="muted" style={{ fontSize: 12 }}>{m.role}</div>
                  <div style={{ fontSize: 12, color: "var(--warning)", marginTop: 2 }}>★ {m.rating}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
