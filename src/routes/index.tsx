import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "CareerCompass — Find Your Dream Engineering College" },
      { name: "description", content: "Compare 100+ colleges in seconds. Book a free expert session today and walk in with clarity." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const testimonials = [
  { name: "Rohan Iyer", college: "COEP Pune • Mech", color: "from-emerald-400 to-emerald-600", stars: 4, quote: "No spam, no nonsense. Just real data and an honest expert who listened." },
  { name: "Priyanka Rao", college: "MIT Pune • ENTC", color: "from-pink-500 to-rose-600", stars: 5, quote: "Came in confused, left with a 3-college shortlist. The compare tool is gold." },
  { name: "Karthik Nair", college: "VJTI Mumbai • AI", color: "from-purple-500 to-fuchsia-600", stars: 5, quote: "They explained NIRF, NAAC, placements like I was 17 — because I was. 10/10." },
  { name: "Aarav Mehta", college: "VJTI Mumbai • CSE", color: "from-blue-500 to-indigo-600", stars: 5, quote: "Compared 6 colleges in one sitting. Picked VJTI with full clarity — best decision ever." },
  { name: "Sneha Patil", college: "PICT Pune • IT", color: "from-orange-400 to-amber-500", stars: 5, quote: "My counselor knew the cutoffs better than my school. Booked, called, admitted." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/40 px-4 py-2 text-xs text-muted-foreground">
              <Sparkles className="size-3.5 text-warning" />
              India's #1 college discovery for 12th science
            </div>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-[1.05]">
              Find Your <span className="text-primary-bright">Dream</span><br />
              Engineering College
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Compare 100+ colleges in seconds. Book a free expert session today and walk in with clarity, not confusion.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/compare" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition">
                Compare Colleges <ArrowRight className="size-4" />
              </Link>
              <Link to="/book" className="rounded-full border border-primary/60 px-7 py-4 text-sm font-semibold text-primary-bright hover:bg-primary/10 transition">
                Book Free Session
              </Link>
            </div>
          </div>

          {/* Top match card */}
          <div className="lg:justify-self-end w-full max-w-md">
            <div className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur p-6 shadow-card">
              <div className="flex items-center gap-2 text-xs tracking-widest text-muted-foreground">
                <Sparkles className="size-3.5 text-warning" /> YOUR TOP MATCH
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-bold">PICT Pune</h3>
                  <p className="text-sm text-muted-foreground mt-1">Computer Science Engineering</p>
                </div>
                <span className="rounded-full bg-success/15 text-success px-3 py-1 text-xs font-semibold">94% match</span>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { l: "FEES", v: "₹1.2L", c: "text-foreground" },
                  { l: "PLACED", v: "94%", c: "text-success" },
                  { l: "PKG", v: "8.5L", c: "text-warning" },
                ].map((s) => (
                  <div key={s.l} className="rounded-xl bg-background/60 border border-border/40 p-4 text-center">
                    <p className="text-[10px] tracking-widest text-muted-foreground">{s.l}</p>
                    <p className={`mt-2 text-xl font-bold ${s.c}`}>{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur grid grid-cols-2 md:grid-cols-4 divide-x divide-border/40">
            {[
              { v: "100+", l: "COLLEGES" },
              { v: "5,000+", l: "STUDENTS GUIDED" },
              { v: "98%", l: "SATISFACTION" },
              { v: "₹0", l: "HIDDEN FEES" },
            ].map((s) => (
              <div key={s.l} className="px-6 py-10 text-center">
                <p className="text-4xl md:text-5xl font-bold">{s.v}</p>
                <p className="mt-2 text-xs tracking-widest text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center">Students Who Found Their College with Us</h2>
        <p className="text-center text-muted-foreground mt-4">Real stories from students just like you.</p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border/60 bg-card/60 p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className={`size-12 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold`}>
                  {t.name.split(" ").map(s => s[0]).join("")}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.college}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-4 ${i < t.stars ? "fill-warning text-warning" : "text-muted-foreground/40"}`} />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
