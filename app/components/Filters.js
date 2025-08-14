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
    <section className="section pt-0 container m-auto my-10 px-4">
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
      <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
        {filtered.map(p => (
          <Card key={p.id} className=' py-0 pb-2 '>
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
                  <span className="text-sm line-through">{currency.format(p.compareAt)}</span>
                )}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <Button className="">Add to Cart</Button>
                <Link href={`#`} className="text-sm underline underline-offset-4">Know More</Link>
              </div>
              <div className="mt-3 text-xs uppercase tracking-[.14em]">{p.process} • {p.roast}</div>
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
