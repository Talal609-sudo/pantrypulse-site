import Container from "../../components/Container";

export default function PricingPage() {
  const tiers = [
    { name: "Starter", price: "$9/mo", items: ["Single shop", "CSV import", "Daily email summary", "Basic expiry alerts"] },
    { name: "Pro", price: "$19/mo", items: ["Growing stores", "Low‑stock thresholds", "Weekly CSV export", "Email reminders"] },
    { name: "Business", price: "$49/mo", items: ["Multi‑branch", "Multi‑user", "Priority support", "Advanced alert rules"] },
  ];
  const rows: [string, [string, string, string]][] = [
    ["CSV import", ["✓", "✓", "✓"]],
    ["Daily summary email", ["✓", "✓", "✓"]],
    ["Low‑stock thresholds", ["—", "✓", "✓"]],
    ["Weekly CSV export", ["—", "✓", "✓"]],
    ["Multi‑user", ["—", "—", "✓"]],
    ["Priority support", ["—", "—", "✓"]],
    ["Advanced alert rules", ["—", "—", "✓"]],
  ];

  return (
    <Container>
      {/* Page header */}
      <section className="card mt-8 px-8 py-10 text-center">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <p className="mt-4 text-white/70">Simple plans for single shops to multi‑branch teams.</p>
      </section>

      {/* Tiers */}
      <section className="mt-16 grid gap-8 md:grid-cols-3">
        {tiers.map((t) => (
          <article key={t.name} className="card px-6 py-8 text-center">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="mt-2 text-2xl font-bold">{t.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {t.items.map((it) => (
                <li key={it}><span aria-hidden="true">• </span>{it}</li>
              ))}
            </ul>
            <div className="mt-8">
              <a href={`/contact?plan=${encodeURIComponent(t.name)}`} className="btn btn-primary">
                Choose Plan
              </a>

            </div>
          </article>
        ))}
      </section>

      {/* Comparison table */}
      <section className="card mt-16 px-6 py-8">
        <h2 className="text-center text-2xl font-semibold">Plan comparison</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Feature comparison across plans</caption>
            <thead>
              <tr className="bg-[#141414]">
                <th scope="col" className="px-4 py-3">Feature</th>
                <th scope="col" className="px-4 py-3 text-center">Starter</th>
                <th scope="col" className="px-4 py-3 text-center">Pro</th>
                <th scope="col" className="px-4 py-3 text-center">Business</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([feat, marks], i) => (
                <tr key={feat} className="border-t border-border">
                  <th scope="row" className="px-4 py-3 text-white/80">{feat}</th>
                  {marks.map((m, j) => (
                    <td key={j} className="px-4 py-3 text-center">{m}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="mt-10 text-center">
        <a href="/contact?plan=Trial" className="btn btn-primary">
          Start Free Trial
        </a>

      </div>
    </Container>
  );
}
