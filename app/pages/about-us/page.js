// app/about/page.js
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Us — Hill Groove Coffee',
  description: 'Our story, craft, and spaces at Hill Groove Coffee (Groove Coffee Roasters LLP).'
}

export default function AboutPage(){
  return (
    <main className="section container m-auto my-10 px-4">
      {/* Hero */}
      <section className="section grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-[2.25rem] md:text-[2.5rem] leading-[1.05] font-semibold">About Hill Groove Coffee</h1>
          <p className="note mt-2 max-w-prose">Mountain calm meets music’s rhythm. We’re a roastery and listening room from Dehradun, pairing specialty coffee with curated vinyl so your cup and your track land on the same beat.</p>
        </div>
        <div className="rounded-lg overflow-hidden border border-border">
          <Image src="/photo-1517705008128-361805f42e86.jpg" alt="Pour-over coffee beside a spinning vinyl" width={1400} height={934} />
        </div>
      </section>

      {/* Our Story */}
      <section className="section my-20">
        <h2 className="h2">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <p className="note max-w-prose">Hill Groove began with a small drum roaster, a crate of well‑worn records, and an idea: that flavour and sound could tune each other. What started as weekend cuppings and vinyl sessions in Dehradun has grown into a roastery and café experience designed for deep work, play, and conversation.</p>
          <p className="note max-w-prose">We roast with intention—clean profiles that highlight origin character and sweetness—then pair each roast with playlists and albums that amplify those notes. The result? Brews that feel balanced and alive, in spaces that stay warm, simple, and unhurried.</p>
        </div>
      </section>

      {/* Three pillars */}
      <section className="section my-20">
        <div className="grid sm:grid-cols-3 gap-4">
          <article className="rounded-lg border border-border bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold">The Hill</h3>
            <p className="note mt-1">Rooted in the quiet of the Himalayas, our spaces are built for clarity—natural light, warm wood, and just enough hum from the needle.</p>
          </article>
          <article className="rounded-lg border border-border bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold">The Groove</h3>
            <p className="note mt-1">Jazz, indie, blues, and fusion shape our pairings and weekend sessions—soundtracks that sharpen focus and invite flow.</p>
          </article>
          <article className="rounded-lg border border-border bg-white p-5 shadow-sm">
            <h3 className="text-xl font-semibold">The Cup</h3>
            <p className="note mt-1">High‑altitude Indian coffees roasted for sweetness and clarity—notes you can taste, calm you can feel.</p>
          </article>
        </div>
      </section>

      {/* Craft & Sourcing */}
      <section className="section my-20">
        <h2 className="h2">Our Craft</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-lg overflow-hidden border border-border order-last md:order-first">
            <Image src="/highaltitudecoffeebeans.jpg" alt="Roast sample and record sleeves" width={1400} height={934} />
          </div>
          <ul className="note space-y-3">
            <li><span className="font-semibold">Small‑batch roasting:</span> measured heat application for even development and clean finishes.</li>
            <li><span className="font-semibold">Thoughtful profiles:</span> we aim for clarity, layered sweetness, and a tactile, creamy mouthfeel.</li>
            <li><span className="font-semibold">Brew bar standards:</span> filtered water, dialled‑in grinders, and recipes you can repeat at home.</li>
            <li><span className="font-semibold">Sourcing:</span> seasonal lots from acclaimed Indian estates—carefully screened for density and moisture.</li>
          </ul>
        </div>
      </section>

    </main>
  )
}
