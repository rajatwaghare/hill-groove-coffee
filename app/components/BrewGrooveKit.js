// components/brew-groove-kit-responsive.jsx
'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

/**
 * Brew‑Groove Kit — Responsive v2
 * Fixes common mobile issues:
 *  - Grid overflow: parent gets `min-w-0` so the scroller can actually scroll
 *  - Center snapping on iOS/Android: `snap-center` + scroll padding sentinels
 *  - Peek card on mobile: card width uses vw
 *  - Exact prev/next step: measures first card + gap
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
        <aside className="lg:col-span-4 ml-20 ">
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
                  <div className="mt-1 text-center">
                    <span className="text-[20px] font-bold text-[#222]">{p.price}</span>
                    {p.compareAt && (
                      <span className="ml-2 text-[14px] text-[#8b92a3] line-through">{p.compareAt}</span>
                    )}
                  </div>
                  <p className="mt-2 text-center text-[14px] leading-6 text-[#6b768a] max-w-[36ch] mx-auto">{p.excerpt}</p>
                  <div className="mt-4 flex justify-center">
                    <button className="px-6 h-10 rounded-full border border-[#c9cfd9] bg-white text-[13px] tracking-[.14em] uppercase text-slateh hover:shadow-sm">
                      Add to Cart
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

      <style jsx global>{`
        /* hide native scrollbar (non‑essential) */
        .scrollbar-none{ scrollbar-width: none; }
        .scrollbar-none::-webkit-scrollbar{ display: none; }
      `}</style>
    </section>
  )
}

const DEFAULT_PRODUCTS = [
  {
    id: '1',
    title: 'Attikan Estate - Natural (Dry)',
    price: '₹540',
    compareAt: '₹840',
    badge: '40% OFF',
    excerpt: 'It symbolises the aromatic balance and roundness that defines our coffees and…',
    image: '/photo-1517705008128-361805f42e86.jpeg',
  },
  {
    id: '2',
    title: 'Harley Estate - Natural (Dry)',
    price: '₹540',
    compareAt: '₹840',
    badge: '40% OFF',
    excerpt: 'It symbolises the aromatic balance and roundness that defines our coffees and…',
    image: '/photo-1517705008128-361805f42e86.jpeg',
  },
  {
    id: '3',
    title: 'Ratnagiri Estate - Natural (Dry)',
    price: '₹540',
    compareAt: '₹840',
    badge: '40% OFF',
    excerpt: 'It symbolises the aromatic balance and roundness that defines our coffees and…',
    image: '/photo-1517705008128-361805f42e86.jpeg',
  },
  {
    id: '4',
    title: 'House Blend - Medium Roast',
    price: '₹480',
    compareAt: '₹620',
    badge: '20% OFF',
    excerpt: 'Balanced chocolate and citrus with a creamy finish.',
    image: '/photo-1517705008128-361805f42e86.jpeg',
  },
]