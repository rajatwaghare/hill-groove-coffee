// app/contact/page.js

export const metadata = {
  title: 'Contact Us — Hill Groove Coffee',
  description: 'Phone, email, and address for Hill Groove Coffee (Groove Coffee Roasters LLP).'
}

export default function ContactPage(){
  return (
    <main>
      <section className="section container m-auto my-10 px-4">
        <h1 className="text-3xl font-semibold tracking-wide">Contact Us</h1>
        <p className="note mt-1">We’re here to help — reach us using the details below.</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Phone */}
          <div className="rounded-lg border border-border p-4">
            <div className="text-xs uppercase tracking-[0.18em]">Phone</div>
            <a href="tel:+917455054459" className="mt-1 block text-xl font-semibold">+91‑7455054459</a>
          </div>

          {/* Email */}
          <div className="rounded-lg border border-border p-4">
            <div className="text-xs uppercase tracking-[0.18em]">Email</div>
            <a href="mailto:hillgroovecoffee@gmail.com" className="mt-1 block text-xl font-semibold">hillgroovecoffee@gmail.com</a>
          </div>

          {/* Address */}
          <div className="rounded-lg border border-border p-4">
            <div className="text-xs uppercase tracking-[0.18em]">Address</div>
            <div className="mt-1 text-xl font-semibold leading-snug">
              Hill Groove Coffee Roasters<br/>
              Dehradun, Uttarakhand, India
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Hill+Groove+Coffee+Roasters%2C+Dehradun%2C+Uttarakhand"
              className="mt-2 inline-block text-sm underline underline-offset-4"
              target="_blank" rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
