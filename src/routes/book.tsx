import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Calendar, Check, MessageCircle, Star } from "lucide-react";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: "Book Free Session — CareerCompass" },
      { name: "description", content: "Get 1-on-1 guidance from India's top career counselors. No spam, no pressure." },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
});

const STREAMS = ["CSE", "Mechanical", "Civil", "IT", "ENTC", "Other"];
const SLOTS = ["10 AM", "12 PM", "3 PM", "5 PM", "7 PM"];
const MENTORS = [
  { i: "PS", name: "Priya Sharma", role: "Ex-IIT Counselor • 8 yrs", color: "from-blue-500 to-indigo-600" },
  { i: "RK", name: "Rajesh Kumar", role: "Engineering Advisor • 12 yrs", color: "from-orange-500 to-amber-500" },
  { i: "AV", name: "Anjali Verma", role: "Career Strategist • 6 yrs", color: "from-emerald-500 to-teal-600" },
];

function BookPage() {
  const [stream, setStream] = useState("CSE");
  const [slot, setSlot] = useState("12 PM");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center">Book Your Free Expert Session</h1>
        <p className="text-center text-muted-foreground mt-4">
          Get 1-on-1 guidance from India's top career counselors. No spam, no pressure.
        </p>

        <div className="mt-14 grid lg:grid-cols-3 gap-8">
          {/* FORM */}
          <form onSubmit={onSubmit} className="lg:col-span-2 rounded-2xl border border-border/60 bg-card/60 p-8 shadow-card space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="Full Name *" required />
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-primary-bright bg-primary/15 px-2 py-1 rounded">+91</span>
                <input required type="tel" placeholder="Phone Number *" className="w-full rounded-xl border border-border/60 bg-background/50 pl-16 pr-4 py-4 text-sm outline-none focus:border-primary" />
              </div>
            </div>
            <Input type="email" placeholder="Email Address *" required />
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <input type="number" placeholder="12th Percentage" className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-4 text-sm outline-none focus:border-primary" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">%</span>
              </div>
              <select defaultValue="" className="rounded-xl border border-border/60 bg-background/50 px-4 py-4 text-sm outline-none focus:border-primary">
                <option value="" disabled>Budget Range</option>
                <option>Under ₹1L</option><option>₹1L – ₹3L</option><option>₹3L – ₹6L</option><option>₹6L+</option>
              </select>
            </div>

            <div>
              <p className="text-xs tracking-widest text-muted-foreground mb-3">PREFERRED STREAM</p>
              <div className="flex flex-wrap gap-2">
                {STREAMS.map(s => (
                  <button type="button" key={s} onClick={() => setStream(s)}
                    className={`rounded-full px-5 py-2 text-sm border transition ${stream === s ? "border-primary text-primary-bright bg-primary/10" : "border-border/60 text-muted-foreground hover:border-border"}`}>
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs tracking-widest text-primary-bright mb-2">PREFERRED DATE</p>
                <input type="date" className="w-full rounded-xl border border-primary/40 bg-background/50 px-4 py-4 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <p className="text-xs tracking-widest text-muted-foreground mb-2">PREFERRED TIME SLOT</p>
                <div className="flex flex-wrap gap-2">
                  {SLOTS.map(s => (
                    <button type="button" key={s} onClick={() => setSlot(s)}
                      className={`rounded-full px-4 py-2 text-sm border transition ${slot === s ? "border-primary text-primary-bright bg-primary/10" : "border-border/60 text-muted-foreground"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <textarea placeholder="Message (optional)" rows={4} className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-4 text-sm outline-none focus:border-primary resize-none" />

            <button type="submit" className="w-full rounded-xl bg-gradient-warm px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition">
              {submitted ? "✓ Session Booked! We'll call you soon." : "Book My Free Session →"}
            </button>
          </form>

          {/* MENTORS */}
          <aside className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-card space-y-4 h-fit">
            <p className="text-xs tracking-widest text-muted-foreground">YOUR MENTORS</p>
            {MENTORS.map(m => (
              <div key={m.i} className="flex items-center gap-3 rounded-xl border border-border/40 bg-background/40 p-4">
                <div className={`size-12 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center font-bold`}>{m.i}</div>
                <div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-2 rounded-xl border border-warning/40 bg-warning/10 px-4 py-3">
              <Star className="size-4 fill-warning text-warning" />
              <span className="font-bold">4.9/5</span>
              <span className="text-sm text-muted-foreground">from 2,400+ students</span>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <Calendar className="size-4 text-primary-bright" />
              <span className="text-muted-foreground">Next available:</span>
              <span className="font-semibold">Tomorrow 11 AM</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="size-4 text-success" />
              <span>100% Free. No hidden charges.</span>
            </div>

            <button className="w-full rounded-xl bg-success px-5 py-4 font-semibold text-background flex items-center justify-center gap-2 hover:opacity-95">
              <MessageCircle className="size-4" /> Chat with us instantly
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-4 text-sm outline-none focus:border-primary" />;
}
