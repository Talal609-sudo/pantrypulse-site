import Link from "next/link";
import Container from "../components/Container";


export default function HomePage() {
  return (
    <Container>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="card mt-8 px-8 py-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight md:text-5xl">
            Keep shelves full and waste low.
          </h1>
          <p className="mt-6 text-xl font-semibold">
            Timely alerts for expiring and low‑stock items.
          </p>
          {/* no paragraph per your direction; generous space above CTA */}
          <div className="mt-12">
            <Link href="/pricing" className="btn btn-primary" aria-label="Explore Pricing plans">
              Explore Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing summary on home */}
      <section aria-labelledby="pricing-heading" className="mt-16">
        <h2 id="pricing-heading" className="sr-only">Pricing</h2>
        <div className="mb-8 text-center text-2xl font-semibold">Pricing</div>
        <div className="grid gap-10 md:grid-cols-3">
          {[
            { name: "Starter", price: "$9/mo", items: ["Single shop", "CSV import", "Daily email summary", "Basic expiry alerts"] },
            { name: "Pro", price: "$19/mo", items: ["Growing stores", "Low‑stock thresholds", "Weekly CSV export", "Email reminders"] },
            { name: "Business", price: "$49/mo", items: ["Multi‑branch", "Multi‑user", "Priority support", "Advanced alert rules"] },
          ].map((t) => (
            <article key={t.name} className="card px-6 py-6">
              <h3 className="text-center text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-center text-2xl font-bold">{t.price}</p>
              <ul className="mt-6 space-y-3 text-center text-sm text-white/80">
                {t.items.map((it) => (
                  <li key={it} className="">
                    <span aria-hidden="true">• </span>{it}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-center">
                <Link href="/pricing" className="btn btn-primary" aria-label={`Choose ${t.name} plan`}>
                  Choose Plan
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section aria-labelledby="testimonials-heading" className="mt-24">
        <h2 id="testimonials-heading" className="text-center text-2xl font-semibold">What customers say</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[
            { quote: "PantryPulse cut our weekly waste by half within a month.", name: "Ayesha, FreshMart" },
            { quote: "Simple CSV upload and the emails tell us exactly what to restock.", name: "Hamza, City Grocer" },
            { quote: "Affordable and effective. We rely on the daily summary.", name: "Sana, Little Basket" },
          ].map((t) => (
            <figure key={t.name} className="card px-6 py-6">
              <blockquote className="text-lg italic">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-sm text-white/70">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </Container>
  );
}
