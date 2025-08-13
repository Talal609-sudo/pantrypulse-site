import Container from "../../components/Container";

export default function FAQPage() {
  const faqs = [
    ["How do I import my inventory?", "Upload a CSV with columns like item, quantity, expiry date. We provide a sample file to start quickly."],
    ["How often are emails sent?", "By default once per day at 8 AM local time. You can adjust the schedule in settings."],
    ["Can I set low‑stock thresholds?", "Yes. For each item you can define a threshold and get alerts when the quantity drops below it."],
    ["Do you support multiple users?", "Pro supports one user; Business includes multi‑user access and role control."],
    ["What if I don’t have expiry dates?", "You can still use low‑stock reminders and later add expiry dates when available."],
    ["Is my data secure?", "We encrypt data in transit and at rest. You can export/delete your data any time."],
    ["Is there a free trial?", "Yes, a 14‑day free trial is available on all plans—no credit card required."],
    ["How do I cancel?", "Cancel any time from the billing page. Your account will remain active until the end of the period."],
  ] as const;

  return (
    <Container>
      <section className="card mt-8 px-8 py-10 text-center">
        <h1 className="text-3xl font-bold">FAQ</h1>
        <p className="mt-4 text-white/70">Answers to common questions about setup, alerts, and pricing.</p>
      </section>

      <section className="mt-12 space-y-4">
        {faqs.map(([q, a], i) => (
          <details key={q} className="card px-6 py-4" open={i < 3}>
            <summary className="cursor-pointer list-none text-lg font-semibold">{q}</summary>
            <div className="mt-3 text-sm text-white/70">{a}</div>
          </details>
        ))}
      </section>

      <section className="card mt-12 px-6 py-6 text-center">
        <h2 className="text-xl font-semibold">Still have questions?</h2>
        <p className="mt-2 text-sm text-white/70">We typically reply within 24–48 hours.</p>
        <a href="/contact" className="btn btn-primary mt-4">Contact Support</a>
      </section>
    </Container>
  );
}
