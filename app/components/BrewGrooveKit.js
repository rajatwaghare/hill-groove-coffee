// components/brew-groove-kit-responsive.jsx
'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/**
 * Brew‑Groove Kit — Responsive + Modal (No Price)
 * - Mobile-safe horizontal carousel with precise stepping
 * - "Know More" opens a popup (modal) with the same info style as Shop All
 * - Shows: notes + (bean • process • roast); modal adds producer/state/altitude
 */
export default function BrewGrooveKitResponsive({
  title = 'Your First Brew‑Groove Kit',
  blurb = "On the go, or just can’t be bothered? Our drip bags are here for it. Pre‑filled with delicious coffee, they’re the easiest way to brew. No gear, no mess, just hot water and a mug.",
  viewAllHref = '#',
  products = DEFAULT_PRODUCTS,
}){
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState(null) // modal product

  // measure card + gap for precise stepping
  useEffect(()=>{
    const el = trackRef.current
    if(!el) return
    const card = el.querySelector('[data-card]')
    if(!card) return
    const gap = parseFloat(getComputedStyle(el).gap || '16') || 16
    setStep(card.offsetWidth + gap)
  }, [])

  // update active index on scroll
  useEffect(()=>{
    const el = trackRef.current
    if(!el || !step) return
    const onScroll = () => setActive(Math.round(el.scrollLeft / step))
    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [step])

  // lock body scroll while modal open
  useEffect(()=>{
    if(typeof document === 'undefined') return
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  const scrollToIndex = (i) => {
    const el = trackRef.current
    if(!el || !step) return
    const clamped = Math.max(0, Math.min(products.length - 1, i))
    el.scrollTo({ left: clamped * step, behavior: 'smooth' })
  }

  return (
    <section className="section py-14">
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left intro */}
        <aside className="lg:col-span-4 ml-0 md:ml-20">
          <h2 className="text-slateh text-[28px] md:text-[30px] font-semibold tracking-[.02em] uppercase">{title}</h2>
          <p className="mt-3 text-[15px] leading-7 text-[#6b768a] max-w-[44ch]">{blurb}</p>
          <a href={viewAllHref} className="mt-6 inline-flex items-center gap-2 text-[13px] tracking-[.18em] uppercase text-slateh hover:opacity-80">
            View All <span aria-hidden>→</span>
          </a>
        </aside>

        {/* Right carousel */}
        <div className="lg:col-span-8 min-w-0">
          <div className="relative">
            <div
              ref={trackRef}
              className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-3 scrollbar-none touch-pan-x"
              style={{ WebkitOverflowScrolling: 'touch', scrollPadding: '24px' }}
              aria-roledescription="carousel"
            >
              {/* left sentinel so first card can center on mobile */}
              <div aria-hidden className="shrink-0 w-6 md:w-0" />

              {products.map((p) => (
                <article key={p.id} data-card className="snap-center shrink-0 w-[84vw] sm:w-[460px] md:w-[360px]">
                  <div className="rounded-[14px] ring-1 ring-[#e7dfd6] bg-[#f6efe6] shadow-[0_8px_24px_rgba(0,0,0,.06)] overflow-hidden">
                    <div className="relative">
                      {p.badge && (
                        <span className="absolute left-3 top-3 z-10 text-[11px] px-2 py-1 rounded-full bg-white/85 ring-1 ring-[#d7d0c7] text-slateh uppercase tracking-wide">{p.badge}</span>
                      )}
                      <Image src={p.image} alt={p.alt || p.title} width={900} height={900} className="w-full h-auto object-cover" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-center text-[20px] font-semibold text-slateh">{p.title}</h3>
                  {/* notes */}
                  {p.notes && (
                    <p className="mt-1 text-center text-[14px] leading-6 text-[#6b768a] max-w-[36ch] mx-auto">{p.notes}</p>
                  )}
                  {/* meta line */}
                  <div className="mt-1 text-center text-xs uppercase tracking-[.14em] text-[#6b768a]">
                    {[p.bean, p.process, p.roast].filter(Boolean).join(' • ')}
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      onClick={()=>setSelected(p)}
                      className="px-6 h-10 rounded-full border border-[#c9cfd9] bg-white text-[13px] tracking-[.14em] uppercase text-slateh hover:shadow-sm"
                    >
                      Know More
                    </button>
                  </div>
                </article>
              ))}

              {/* right sentinel */}
              <div aria-hidden className="shrink-0 w-6 md:w-0" />
            </div>

            {/* mobile dots */}
            <div className="mt-5 flex justify-center gap-2 md:hidden">
              {products.map((_, i)=> (
                <button key={i} aria-label={`Go to slide ${i+1}`} onClick={()=>scrollToIndex(i)} className={`w-2.5 h-2.5 rounded-full ${i===active ? 'bg-slateh' : 'bg-[#cfd6df]'}`} />
              ))}
            </div>

            {/* desktop controls */}
            <div className="mt-6 hidden md:flex items-center justify-center gap-6">
              <button aria-label="Previous" onClick={()=>scrollToIndex(active-1)} className="grid place-items-center w-8 h-8 rounded-full border border-[#c9cfd9] text-[#2d3343] hover:bg-white">◀</button>
              <div className="relative w-56 h-[2px]"><span className="absolute inset-0 border-b border-dashed border-[#cfc7bd]"></span></div>
              <button aria-label="Next" onClick={()=>scrollToIndex(active+1)} className="grid place-items-center w-8 h-8 rounded-full border border-[#c9cfd9] text-[#2d3343] hover:bg-white">▶</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <Modal onClose={()=>setSelected(null)}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-[14px] overflow-hidden border border-[#e7dfd6] bg-[#f6efe6]">
              <Image src={selected.image} alt={selected.alt || selected.title} width={1200} height={1000} className="w-full h-auto object-cover" />
            </div>
            <div>
              <h3 className="text-[22px] font-semibold text-slateh">{selected.title}</h3>
              {selected.notes && <p className="mt-2 text-[15px] leading-7 text-[#6b768a]">{selected.notes}</p>}

              <dl className="mt-4 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
                {row('Process', selected.process)}
                {row('Roast', selected.roast)}
                {row('Bean', selected.bean)}
                {row('Producer', selected.producer)}
                {row('State', selected.state)}
                {row('Altitude', selected.altitude)}
              </dl>

              <div className="mt-4 flex gap-2">
                <button onClick={()=>setSelected(null)} className="px-5 h-10 rounded-full border border-[#c9cfd9] bg-white text-[13px] tracking-[.14em] uppercase text-slateh hover:shadow-sm">Close</button>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <style jsx global>{`
        /* hide native scrollbar (non‑essential) */
        .scrollbar-none{ scrollbar-width: none; }
        .scrollbar-none::-webkit-scrollbar{ display: none; }
      `}</style>
    </section>
  )
}

function Modal({ children, onClose }){
  useEffect(()=>{
    const onKey = (e)=>{ if(e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="max-w-3xl w-full rounded-[14px] border border-[#e7dfd6] bg-white p-4 shadow-xl" onClick={(e)=>e.stopPropagation()} role="dialog" aria-modal="true">
        <div className="flex justify-end">
          <button aria-label="Close" onClick={onClose} className="w-8 h-8 grid place-items-center rounded-full border border-[#c9cfd9]">✕</button>
        </div>
        {children}
      </div>
    </div>
  )
}

function row(k, v){ if(!v) return null; return (<><dt className="text-[#6b768a]">{k}</dt><dd>{v}</dd></>) }






// Example default data using Shop All fields (no price)
const DEFAULT_PRODUCTS = [
  {
    id: "madhu-agro-black-honey",
    title: "Madhu Agro — Black Honey",
    notes: "Citrusy, Spicy, Caramel",
    bean: "Arabica",
    process: "Black Honey",
    roast: "Light Medium",
    producer: "Rajeshwari Reddy",
    state: "Koraput, OD",
    altitude: "1000 m",
    image: "/madhu-agro-estate.jpg",
  },
  {
    id: "salawar-honey",
    title: "Salawar — Honey",
    notes: "Caramel & Dark Chocolate",
    bean: "Arabica",
    producer: "Somasundaram",
    roast: "Medium",
    producer: "Rajeshwari Reddy",
    state: "Chikmagalur, KA",
    altitude: "1100 m",
    image: "/salawara-estate.jpg",
  },
  {
    id: "harley-saccharobrew",
    title: "Harley — Saccharobrew",
    notes: "Dark fruits, berries & sugarcane",
    bean: "Arabica",
    process: "Saccharobrew",
    roast: "Medium",
    producer: "Purnesh DM",
    state: "Sakleshpur, KA",
    altitude: "1040 m",
    image: "/harley-estate.jpg",
  },
  {
    id: "narmada-honey",
    title: "Narmada — Honey",
    notes: "Citrus, Tropical, Berries",
    bean: "Arabica",
    process: "Honey",
    roast: "Light",
    producer: "Sohan Shetty",
    state: "Chikmagalur, KA",
    altitude: "1100 m",
    image: "/narmada-estate.jpg",
  },
]
