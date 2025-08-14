'use client'
import { useMemo, useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FiltersGrid({ products = [] }){
  const [query, setQuery] = useState('')
  const [process, setProcess] = useState('All')
  const [roast, setRoast] = useState('All')
  const [selected, setSelected] = useState(null) // modal item

  // lock scroll when modal open
  useEffect(()=>{
    if(typeof document === 'undefined') return
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selected])

  // options from data
  const processes = ['All', ...Array.from(new Set(products.map(p=>p.process).filter(Boolean)))]
  const roasts = ['All', ...Array.from(new Set(products.map(p=>p.roast).filter(Boolean)))]

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase()
    let list = products
    if(q){
      list = list.filter(p => [p.title, p.notes, p.process, p.roast, p.bean, p.state, p.producer]
        .filter(Boolean)
        .some(v => v.toLowerCase().includes(q)))
    }
    if(process !== 'All') list = list.filter(p => p.process === process)
    if(roast !== 'All') list = list.filter(p => p.roast === roast)
    return list
  }, [products, query, process, roast])

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
            placeholder="Search by estate, flavor, roast…"
            className="w-full h-10 rounded-lg border border-border bg-white px-3 text-base outline-none focus:ring-2 focus:ring-sun"
          />
        </div>
        <Select label="Process" value={process} onChange={setProcess} options={processes} />
        <Select label="Roast" value={roast} onChange={setRoast} options={roasts} />
        <Button variant="outline" onClick={()=>{ setQuery(''); setProcess('All'); setRoast('All') }}>Reset</Button>
      </div>

      {/* Count */}
      <div className="flex items-center justify-between gap-4 mt-4">
        <p className="note">{filtered.length} {filtered.length===1 ? 'coffee' : 'coffees'}</p>
      </div>

      {/* Grid */}
      <div className="mt-4 grid gap-4 grid-cols-2 lg:grid-cols-4">
        {filtered.map(p => (
          <Card key={p.id} className=' pt-0 ' >
            <div className="rounded-t-lg overflow-hidden">
              <Image src={p.image} alt={p.title} width={1200} height={900} className="w-full rounded-t-2xl h-auto object-cover" />
            </div>
            <CardHeader>
              <CardTitle className="text-lg">{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {p.notes && <p className="note">{p.notes}</p>}
              <div className="mt-3 text-xs uppercase tracking-[.14em]">
                {[p.bean, p.process, p.roast].filter(Boolean).join(' • ')}
              </div>
              <div className="mt-3 flex items-center gap-3">
                {/* Removed Add to Cart as requested */}
                <Button variant="outline" onClick={()=>setSelected(p)}>Know More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <Modal onClose={()=>setSelected(null)}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden border border-border">
              <Image src={selected.image} alt={selected.title} width={1200} height={900} className="w-full h-auto object-cover" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">{selected.title}</h3>
              {selected.notes && <p className="note mt-1">{selected.notes}</p>}
              <dl className="mt-3 grid grid-cols-[auto,1fr] gap-x-4 gap-y-2 text-sm">
                {row('Process', selected.process)}
                {row('Roast', selected.roast)}
                {row('Bean', selected.bean)}
                {row('Producer', selected.producer)}
                {row('State', selected.state)}
                {row('Altitude', selected.altitude)}
              </dl>
              <div className="mt-4 flex gap-2">
                <Button onClick={()=>setSelected(null)}>Close</Button>
              </div>
            </div>
          </div>
        </Modal>
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

function Modal({ children, onClose }){
  useEffect(()=>{
    const onKey = (e)=>{ if(e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return ()=> window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/40 backdrop-blur-sm" onClick={onClose}>
      <div className="max-w-3xl w-full rounded-lg border border-border bg-white p-4 shadow-xl" onClick={(e)=>e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

function row(k, v){ if(!v) return null; return (<><dt className="">{k}</dt><dd>{v}</dd></>) }
