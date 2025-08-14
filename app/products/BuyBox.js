'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function BuyBox({ product }){
  const [weight, setWeight] = useState(product.weightOptions?.[0] || '250g')
  const [grind, setGrind] = useState(product.grindOptions?.[0] || 'Whole Bean')
  const [qty, setQty] = useState(1)

  const price = product.price
  const compareAt = product.compareAt

  function add(){ setQty(q => Math.min(10, q + 1)) }
  function sub(){ setQty(q => Math.max(1, q - 1)) }
  function addToCart(){
    alert(`Added to cart: ${qty} × ${product.title} (${weight}, ${grind}) — ₹${price * qty}`)
  }

  return (
    <div className="rounded-lg border border-border bg-white p-5 shadow-sm">
      <div className="flex items-baseline gap-2">
        <p className="text-2xl font-semibold">₹{price}</p>
        {compareAt && <p className="text-sm text-muted line-through">₹{compareAt}</p>}
      </div>
      <p className="note mt-1">Free delivery on orders ₹400 and above</p>

      <div className="mt-4 grid gap-3">
        <Field label="Weight">
          <Select value={weight} onChange={setWeight} options={product.weightOptions} />
        </Field>
        <Field label="Grind">
          <Select value={grind} onChange={setGrind} options={product.grindOptions} />
        </Field>
        <Field label="Quantity">
          <div className="inline-flex items-center gap-2">
            <button onClick={sub} className="w-9 h-9 rounded-md border border-border">−</button>
            <span className="min-w-[2ch] text-center font-semibold">{qty}</span>
            <button onClick={add} className="w-9 h-9 rounded-md border border-border">+</button>
          </div>
        </Field>
      </div>

      <div className="mt-4 flex gap-3">
        <Button onClick={addToCart}>Add to Cart</Button>
        <Button variant="outline">Buy Now</Button>
      </div>

      <p className="note mt-3">Roast: {product.roast} • Process: {product.process}</p>
    </div>
  )
}

function Field({ label, children }){
  return (
    <label className="block">
      <div className="text-xs uppercase tracking-[.18em] text-muted">{label}</div>
      <div className="mt-1">{children}</div>
    </label>
  )
}

function Select({ value, onChange, options = [] }){
  return (
    <select
      className="h-10 rounded-lg border border-border bg-white px-3 text-base outline-none focus:ring-2 focus:ring-sun"
      value={value}
      onChange={(e)=>onChange(e.target.value)}
    >
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  )
}
