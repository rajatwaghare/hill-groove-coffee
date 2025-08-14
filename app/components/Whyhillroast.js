"use client"
import Image from 'next/image'

export default function WhyHillRoast(){
  const items = [
    {
      title: 'High-Altitude Beans.',
      body: 'Picked on Himalayan slopes, roasted in small batches at 2 200 ft—clarity you can taste, rhythm you can feel.',
      cta: 'Know More',
      href: '#',
      img: '/photo-1517705008128-361805f42e86.jpeg',
      alt: 'Spoon dropping coffee beans into a bag'
    },
    {
      title: 'VINYL-INFUSED BREWS.',
      body: 'Every roast is paired with blues, jazz or soul records that amplify flavour and sharpen focus. Taste the notes, hear the nuances.',
      cta: 'Know More',
      href: '#',
      img: '/photo-1517705008128-361805f42e86.jpeg',
      alt: 'Hand holding a cup near a record player'
    },
    {
      title: 'Quiet Studios, Everywhere.',
      body: 'Our cafés are hushed sanctuaries for painters, writers and beat‑makers—each one tuned to its neighbourhood’s creative pulse.',
      cta: 'Coming Soon',
      href: '#',
      disabled: true,
      img: '/photo-1517705008128-361805f42e86.jpeg',
      alt: 'Person working in a calm plant-filled studio'
    }
  ]

  return (
    <section className="section container m-auto my-28 px-6">
      <h2 className="text-center text-slateh uppercase tracking-[0.14em] text-sm md:text-base font-semibold">Why Hill Roast Hits Different</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {items.map((it)=> (
          <article key={it.title} className="text-center max-w-[520px] mx-auto">
            {/* Image frame */}
            <div className="frame-vintage ring-1 ring-[#e9e1d8] rounded-[18px] overflow-hidden">
              <Image src={it.img} alt={it.alt} width={1200} height={800} className="w-full h-auto object-cover" />
            </div>
            {/* Orange dot */}
            <span className="block w-4 h-4 rounded-full bg-sun mx-auto -mt-3 relative z-10"></span>

            <h3 className="mt-4 text-[22px] md:text-[24px] font-semibold text-slateh">{it.title}</h3>
            <p className="note mt-2 max-w-[44ch] mx-auto">{it.body}</p>

            <a
              href={it.href}
              aria-disabled={it.disabled ? 'true' : 'false'}
              className={`mt-5 inline-block uppercase tracking-[0.18em] text-[12px] md:text-[13px] underline-offset-4 ${it.disabled ? 'text-muted/70' : 'text-slateh hover:underline'}`}
              onClick={(e)=>{ if(it.disabled){ e.preventDefault() } }}
            >
              {it.cta}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}