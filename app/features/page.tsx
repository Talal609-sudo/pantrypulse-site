import Link from "next/link";
import Container from "../../components/Container";
import KPICard from "../../components/KPICard";
import BarChart from "../../components/BarChart";
export default function FeaturesPage() {
  return (
    <Container>
      {/* Page header */}
      <section className="card mt-8 px-8 py-10 text-center">
        <h1 className="text-3xl font-bold">Features</h1>
        <p className="mt-4 text-white/70">
          Everything you need to track expiry and stock—simple, fast, and reliable.
        </p>
      </section>

      {/* Feature cards */}
      <section className="mt-16 grid gap-8 md:grid-cols-3">
        {[
          { title: "Fast Setup", desc: "Import your inventory via CSV and start receiving alerts the same day." },
          { title: "Email Reminders", desc: "A concise daily summary with clear actions for your team." },
          { title: "CSV Export", desc: "Keep tidy records and share updates with colleagues." },
        ].map((f) => (
          <article key={f.title} className="card px-6 py-8 text-center">
            <div className="mx-auto mb-3 h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
            <h2 className="text-xl font-semibold">{f.title}</h2>
            <p className="mt-3 text-sm text-white/70">{f.desc}</p>
          </article>
        ))}
      </section>

      {/* How it works */}
      <section className="card mt-16 px-8 py-10">
        <h2 className="text-center text-2xl font-semibold">How it works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { head: "Upload CSV", body: "One-time or recurring; columns like item, qty, expiry." },
            { head: "Get Alerts", body: "Daily email with expiring and low‑stock items." },
            { head: "Act & Save", body: "Restock in time and cut spoilage week by week." },
          ].map((s) => (
            <div key={s.head} className="text-center">
              <div className="mx-auto h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold">{s.head}</h3>
              <p className="mt-2 text-sm text-white/70">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard preview */}
      <section className="card mt-16 px-8 py-10">
        <h2 className="text-center text-2xl font-semibold">Dashboard preview</h2>
        <div className="mt-8 rounded-xl border border-border bg-[#141414] p-6">
          {/* KPIs */}
          <div className="grid gap-6 md:grid-cols-3">
            <KPICard label="Low Stock" value="7" />
            <KPICard label="Expiring Soon" value="3" />
            <KPICard label="Resolved" value="12" />
          </div>
          {/* Bars separated well below KPIs */}
          <div className="mt-10">
            <BarChart />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link href="/pricing" className="btn btn-primary" aria-label="See pricing plans">See Pricing</Link>
        </div>
      </section>
    </Container>
  );
}
