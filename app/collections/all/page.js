// app/shop/page.js
import Image from 'next/image'
import Link from 'next/link'
import FiltersGrid from './filters'

export const metadata = {
  title: 'Shop All — Hill Groove Coffee',
  description: 'Explore all our coffees in one place — filter by process, roast, and more.'
}

// Static demo data — swap with your CMS/Shopify later
const PRODUCTS = [
  {
    id: 'attikan-natural',
    title: 'Attikan Estate — Natural',
    price: 540,
    compareAt: 840,
    process: 'Natural',
    roast: 'Medium',
    notes: 'Orange zest, toffee, cocoa nib.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 'monsoon-malabar',
    title: 'Monsoon Malabar',
    price: 520,
    compareAt: null,
    process: 'Monsooned',
    roast: 'Medium-Dark',
    notes: 'Caramel, hazelnut, stone fruit.',
    image: 'https://images.unsplash.com/photo-1559058962-3701f607254e?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 'groove-espresso',
    title: 'Groove Espresso Blend',
    price: 480,
    compareAt: 620,
    process: 'Blend',
    roast: 'Dark',
    notes: 'Dark chocolate, toasted almond.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 'ratnagiri-natural',
    title: 'Ratnagiri Estate — Natural',
    price: 560,
    compareAt: 840,
    process: 'Natural',
    roast: 'Medium',
    notes: 'Berry compote, panela, cacao.',
    image: 'https://images.unsplash.com/photo-1587734195503-c489e50436a5?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 'harley-natural',
    title: 'Harley Estate — Natural',
    price: 540,
    compareAt: 840,
    process: 'Natural',
    roast: 'Light-Medium',
    notes: 'Tropical fruit, honey, cocoa nib.',
    image: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 'house-medium',
    title: 'House Blend — Medium Roast',
    price: 480,
    compareAt: null,
    process: 'Blend',
    roast: 'Medium',
    notes: 'Balanced chocolate and citrus with a creamy finish.',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 'honey-process',
    title: 'Honey Process — Single Estate',
    price: 620,
    compareAt: 720,
    process: 'Honey',
    roast: 'Light',
    notes: 'Apricot, florals, cane sugar.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1400&auto=format&fit=crop'
  },
  {
    id: 'washed-classic',
    title: 'Classic Washed — Single Estate',
    price: 520,
    compareAt: null,
    process: 'Washed',
    roast: 'Light-Medium',
    notes: 'Lemon zest, black tea, nougat.',
    image: 'https://images.unsplash.com/photo-1553530979-7ee52c02c921?q=80&w=1400&auto=format&fit=crop'
  },
]

export default function ShopAllPage(){
  return (
    <main>
      {/* Header */}
      <section className="section">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-[2rem] md:text-[2.25rem] leading-tight font-semibold">Shop All</h1>
            <p className="note">All our current roasts — filter and sort to find your groove.</p>
          </div>
          <Link href="/#shop" className="underline underline-offset-4 text-sm">Back to Home</Link>
        </div>
      </section>

      {/* Filters + Grid */}
      <FiltersGrid products={PRODUCTS} />
    </main>
  )
}

// app/shop/filters.jsx
'use client'
import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const currency = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })

export default function FiltersGrid({ products }){
  const [query, setQuery] = useState('')
  const [process, setProcess] = useState('All')
  const [roast, setRoast] = useState('All')
  const [sort, setSort] = useState('featured')

  const processes = ['All', ...Array.from(new Set(products.map(p=>p.process)))]
  const roasts = ['All', ...Array.from(new Set(products.map(p=>p.roast)))]

  const filtered = useMemo(()=>{
    let list = products
    if(query.trim()){
      const q = query.toLowerCase()
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.notes.toLowerCase().includes(q) ||
        p.process.toLowerCase().includes(q) ||
        p.roast.toLowerCase().includes(q)
      )
    }
    if(process !== 'All') list = list.filter(p => p.process === process)
    if(roast !== 'All') list = list.filter(p => p.roast === roast)

    if(sort === 'price-asc') list = [...list].sort((a,b)=>a.price-b.price)
    if(sort === 'price-desc') list = [...list].sort((a,b)=>b.price-a.price)
    // featured = original order
    return list
  }, [products, query, process, roast, sort])

  return (
    <section className="section pt-0">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3 border-b border-border pb-4">
        <div className="flex-1 min-w-[220px]">
          <label className="sr-only" htmlFor="q">Search</label>
          <input
            id="q"
            value={query}
            onChange={e=>setQuery(e.target.value)}
            placeholder="Search coffees…"
            className="w-full h-10 rounded-lg border border-border bg-white px-3 text-base outline-none focus:ring-2 focus:ring-sun"
          />
        </div>
        <Select label="Process" value={process} onChange={setProcess} options={processes} />
        <Select label="Roast" value={roast} onChange={setRoast} options={roasts} />
        <Select label="Sort" value={sort} onChange={setSort} options={[
          { label:'Featured', value:'featured' },
          { label:'Price: Low to High', value:'price-asc' },
          { label:'Price: High to Low', value:'price-desc' },
        ]} />
        <Button variant="outline" onClick={()=>{ setQuery(''); setProcess('All'); setRoast('All'); setSort('featured') }}>Reset</Button>
      </div>

      {/* Count */}
      <div className="flex items-center justify-between gap-4 mt-4">
        <p className="note">{filtered.length} {filtered.length===1 ? 'product' : 'products'}</p>
      </div>

      {/* Grid */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(p => (
          <Card key={p.id}>
            <div className="rounded-t-lg overflow-hidden">
              <Image src={p.image} alt={p.title} width={1200} height={900} className="w-full h-auto object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="note">{p.notes}</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-base font-semibold">{currency.format(p.price)}</span>
                {p.compareAt && (
                  <span className="text-sm text-muted line-through">{currency.format(p.compareAt)}</span>
                )}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Button className="">Add to Cart</Button>
                <Link href={`#`} className="text-sm underline underline-offset-4">Know More</Link>
              </div>
              <div className="mt-3 text-xs uppercase tracking-[.14em] text-muted">{p.process} • {p.roast}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="mt-10 text-center">
          <p className="text-lg font-semibold">No coffees match your filters</p>
          <p className="note">Try clearing one or more filters.</p>
          <Button className="mt-4" onClick={()=>{ setQuery(''); setProcess('All'); setRoast('All'); setSort('featured') }}>Clear All</Button>
        </div>
      )}
    </section>
  )
}

function Select({ label, value, onChange, options }){
  const opts = Array.isArray(options)
    ? options.map(o => typeof o === 'string' ? ({ label:o, value:o }) : o)
    : []
  return (
    <label className="text-sm">
      <span className="sr-only">{label}</span>
      <select
        className="h-10 rounded-lg border border-border bg-white px-3 text-base outline-none focus:ring-2 focus:ring-sun"
        value={value}
        onChange={e=>onChange(e.target.value)}
        aria-label={label}
      >
        {opts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  )
}
