import Container from "../../components/Container";

export default function ContactPage({ searchParams }: { searchParams?: { plan?: string } }) {
  const selectedPlan = searchParams?.plan;

  return (
    <Container>
      <section className="card mt-8 px-8 py-10 text-center">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="mt-4 text-white/70">Questions, feedback, or support—reach out anytime.</p>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-2">
        {/* Details */}
        <article className="card px-6 py-8 text-center">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <div className="mt-6 space-y-3">
            <p>Talal</p>
            <p>+1 (000) 000-0000</p>
            <p>contact@example.com</p>
            {selectedPlan ? (
              <p className="mt-2 text-sm">
                <span className="badge">Selected plan: {selectedPlan}</span>
              </p>
            ) : null}

            <p className="muted mt-2 text-sm">We usually reply within 24–48 hours.</p>
          </div>
        </article>

        {/* Form (visual only) */}
        <article className="card px-6 py-8">
          <h2 className="text-center text-xl font-semibold">Send a message</h2>
          <form className="mt-6 space-y-4" aria-describedby="form-note" noValidate>

            <div>
              <label htmlFor="name" className="sr-only">Your name</label>
              <input id="name" name="name" type="text" placeholder="Your name"
                className="w-full rounded-lg border border-border bg-[#141414] px-3 py-3 outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your email</label>
              <input id="email" name="email" type="email" placeholder="Your email"
                className="w-full rounded-lg border border-border bg-[#141414] px-3 py-3 outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your message</label>
              <textarea id="message" name="message" placeholder="Your message..."
                className="h-28 w-full rounded-lg border border-border bg-[#141414] px-3 py-3 outline-none" />
            </div>
            <p id="form-note" className="muted text-xs">This demo form is non-functional.</p>
            <div className="pt-1">
              <button type="button" className="btn btn-primary" aria-disabled="true">
                Send
              </button>

            </div>
          </form>
        </article>
      </section>
    </Container>
  );
}
