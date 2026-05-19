import { useState } from "react";
import { CheckCircle2, Calendar, Star } from "lucide-react";
import { WHATSAPP_URL } from "../components/Layout.jsx";

const MENTORS = [
  { name: "Priya Sharma", role: "Ex-IIT Counselor • 8 yrs", color: "linear-gradient(135deg,#6366f1,#8b5cf6)" },
  { name: "Rajesh Kumar", role: "Engineering Advisor • 12 yrs", color: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  { name: "Anjali Verma", role: "Career Strategist • 6 yrs", color: "linear-gradient(135deg,#10b981,#06b6d4)" },
];

const STREAMS = ["CSE", "Mechanical", "Civil", "IT", "ENTC", "Other"];
const SLOTS = ["10 AM", "12 PM", "3 PM", "5 PM", "7 PM"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[6-9]\d{9}$/;

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Please enter your full name";
  else if (f.name.trim().length < 2) e.name = "Name is too short";
  if (!f.phone.trim()) e.phone = "Phone number is required";
  else if (!PHONE_RE.test(f.phone.trim())) e.phone = "Enter a valid 10-digit Indian mobile number";
  if (!f.email.trim()) e.email = "Email is required";
  else if (!EMAIL_RE.test(f.email.trim())) e.email = "Enter a valid email address";
  if (f.percent && (isNaN(+f.percent) || +f.percent < 0 || +f.percent > 100)) e.percent = "Enter % between 0 and 100";
  if (!f.date) e.date = "Pick a preferred date";
  else if (new Date(f.date) < new Date(new Date().toDateString())) e.date = "Date can't be in the past";
  return e;
}

export default function Book() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", percent: "", budget: "", stream: "CSE", date: "", time: "10 AM", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const upd = (k, v) => {
    const next = { ...form, [k]: v };
    setForm(next);
    if (touched) setErrors(validate(next));
  };

  const onSubmit = e => {
    e.preventDefault();
    const eMap = validate(form);
    setErrors(eMap);
    setTouched(true);
    if (Object.keys(eMap).length === 0) setDone(true);
    else {
      const first = document.querySelector(".field-error");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  if (done) {
    return (
      <section className="hero">
        <div className="container" style={{ maxWidth: 600, textAlign: "center" }}>
          <CheckCircle2 size={64} color="var(--success)" style={{ margin: "0 auto" }} />
          <h1 className="h2" style={{ marginTop: 16 }}>Session Booked!</h1>
          <p className="muted" style={{ marginTop: 12 }}>We'll call you on +91 {form.phone} at {form.time} on {form.date}.</p>
          <button className="btn-primary" style={{ marginTop: 24 }} onClick={() => { setDone(false); setTouched(false); setErrors({}); }}>Book another</button>
        </div>
      </section>
    );
  }

  const err = k => errors[k] ? <div className="field-error">{errors[k]}</div> : null;
  const inputCls = k => `input${errors[k] ? " input-error" : ""}`;

  return (
    <section className="hero">
      <div className="container">
        <h1 className="h2" style={{ textAlign: "center" }}>Book Your Free Expert Session</h1>
        <p className="muted" style={{ textAlign: "center", marginTop: 12 }}>Get 1-on-1 guidance from India's top career counselors. No spam, no pressure.</p>

        <div className="book-grid">
          <form className="card" onSubmit={onSubmit} noValidate>
            <div className="grid" style={{ gap: 18 }}>
              <div className="row">
                <div>
                  <label>FULL NAME *</label>
                  <input className={inputCls("name")} value={form.name} onChange={e => upd("name", e.target.value)} placeholder="Your name" maxLength={100} />
                  {err("name")}
                </div>
                <div>
                  <label>PHONE NUMBER *</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span className="input" style={{ width: 60, background: "rgba(79,124,255,.1)", color: "var(--primary-2)", fontWeight: 700, textAlign: "center" }}>+91</span>
                    <input className={inputCls("phone")} value={form.phone} onChange={e => upd("phone", e.target.value.replace(/\D/g, "").slice(0, 10))} placeholder="98765 43210" inputMode="numeric" />
                  </div>
                  {err("phone")}
                </div>
              </div>
              <div>
                <label>EMAIL ADDRESS *</label>
                <input className={inputCls("email")} type="email" value={form.email} onChange={e => upd("email", e.target.value)} placeholder="you@example.com" maxLength={255} />
                {err("email")}
              </div>
              <div className="row">
                <div>
                  <label>12TH PERCENTAGE</label>
                  <input className={inputCls("percent")} placeholder="%" value={form.percent} onChange={e => upd("percent", e.target.value)} inputMode="decimal" />
                  {err("percent")}
                </div>
                <div>
                  <label>BUDGET RANGE</label>
                  <select className="select" value={form.budget} onChange={e => upd("budget", e.target.value)}>
                    <option value="">Select budget</option><option>Under ₹1L</option><option>₹1L - ₹2L</option><option>₹2L - ₹5L</option><option>₹5L+</option>
                  </select>
                </div>
              </div>
              <div>
                <label>PREFERRED STREAM</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {STREAMS.map(s => (
                    <button key={s} type="button" onClick={() => upd("stream", s)} className={`pill ${form.stream === s ? "pill-active" : ""}`}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="row">
                <div>
                  <label>PREFERRED DATE *</label>
                  <input className={inputCls("date")} type="date" value={form.date} onChange={e => upd("date", e.target.value)} min={new Date().toISOString().split("T")[0]} />
                  {err("date")}
                </div>
                <div>
                  <label>PREFERRED TIME SLOT</label>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {SLOTS.map(s => (
                      <button key={s} type="button" onClick={() => upd("time", s)} className={`pill pill-sm ${form.time === s ? "pill-active" : ""}`}>{s}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <label>MESSAGE (OPTIONAL)</label>
                <textarea className="textarea" rows={3} maxLength={1000} value={form.message} onChange={e => upd("message", e.target.value)} />
              </div>
              {touched && Object.keys(errors).length > 0 && (
                <div className="form-banner">Please fix the highlighted fields and try again.</div>
              )}
              <button type="submit" className="btn-cta">Book My Free Session →</button>
            </div>
          </form>

          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <div className="card">
              <div style={{ fontSize: 11, letterSpacing: ".2em", color: "var(--muted)" }}>YOUR MENTORS</div>
              <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
                {MENTORS.map(m => (
                  <div key={m.name} style={{ display: "flex", gap: 12, padding: 14, background: "rgba(10,18,40,.5)", border: "1px solid var(--border)", borderRadius: 14, alignItems: "center" }}>
                    <div style={{ width: 42, height: 42, borderRadius: "50%", background: m.color, display: "grid", placeItems: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{m.name.split(" ").map(s => s[0]).join("")}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{m.name}</div>
                      <div className="muted" style={{ fontSize: 12 }}>{m.role}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 16, padding: 14, background: "rgba(245,158,11,.08)", border: "1px solid rgba(245,158,11,.3)", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
                <Star size={18} fill="#f59e0b" color="#f59e0b" />
                <div style={{ fontSize: 14 }}><b>4.9/5</b> <span className="muted">from 2,400+ students</span></div>
              </div>
              <div style={{ marginTop: 14, display: "grid", gap: 10, fontSize: 13 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}><Calendar size={16} color="var(--primary-2)" /> Next available: <b>Tomorrow 11 AM</b></div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}><CheckCircle2 size={16} color="var(--success)" /> 100% Free. No hidden charges.</div>
              </div>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-chat" style={{ textAlign: "center", textDecoration: "none" }}>💬 Chat with us instantly</a>
          </div>
        </div>
      </div>
    </section>
  );
}
