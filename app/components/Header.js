'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function SiteHeader(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-[#3E4C65] backdrop-blur mb-5">
      <div className="container m-auto h-14 py-10 px-6 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
            <Image src="/hillgroove-whitelogo.svg" alt="Hillgroove Coffee" width={150} height={40} className=" h-24 " />
        </Link>
        <nav className="flex items-center gap-4 text-[#F8EFE2]">
          <Link href="/collections/all">Shop</Link>
          <Link href="/pages/about-us">About</Link>
          <Link href="/pages/contact-us">Contact</Link>
        </nav>
        <button className="hidden flex-col gap-1.5 p-2 border border-border rounded-lg" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          <span className="w-6 h-[2px] bg-text"/>
          <span className="w-6 h-[2px] bg-text"/>
          <span className="w-6 h-[2px] bg-text"/>
        </button>
      </div>
      {open && (
        <div className="!hidden border-t border-border bg-white">
          <div className="container py-3 grid gap-2 text-lg">
            {['shop','groove','about','visit','contact'].map(k=> (
              <a key={k} href={`#${k}`} onClick={()=>setOpen(false)} className="py-1">{k[0].toUpperCase()+k.slice(1)}</a>
            ))}
            <Button asChild className="mt-2"><a href="#groove" onClick={()=>setOpen(false)}>Find Your Groove</a></Button>
          </div>
        </div>
      )}
    </header>
  )
}