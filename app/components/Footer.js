// components/footer-signup.jsx
'use client'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function FooterSignup({
  brand = 'DIDRS',
  bg = '#3E4C65',
  accent = '#F8EFE2',
}) {
  const [email, setEmail] = useState('')
  const accentStyle = { color: accent }
  const borderStyle = { borderColor: accent }

  function onSubmit(e) {
    e.preventDefault()
    if (!email) return
    alert(`Subscribed: ${email}`)
    setEmail('')
  }

  return (
    <section className="w-full" style={{ backgroundColor: bg }}>
      <div className="container m-auto px-4 py-16 md:py-24">
        {/* Wordmark */}
        <div className="text-4xl md:text-[44px] font-semibold tracking-wide font-display" style={accentStyle}>

          <Image src="/hillgroove-whitelogo.svg" alt="Hillgroove Coffee" width={150} height={40} className=" h-24 " />
        </div>

        {/* Socials */}
        <div className="mt-6 flex items-center gap-6" aria-label="Social media">
          <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity" style={accentStyle}>
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" aria-label="X" className="hover:opacity-80 transition-opacity" style={accentStyle}>
            <XIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity" style={accentStyle}>
            <YouTube className="w-7 h-7" />
          </a>
          <a href="#" aria-label="TikTok" className="hover:opacity-80 transition-opacity" style={accentStyle}>
            <TikTok className="w-6 h-6" />
          </a>
        </div>

        {/* Bottom links */}
        <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-8 text-sm font-display" style={accentStyle}>
            <Link href="/pages/about-us" className="hover:underline underline-offset-4" style={accentStyle}>About Us</Link>
            <Link href="/pages/contact-us" className="hover:underline underline-offset-4" style={accentStyle}>Contact Us</Link>
            <Link href="/pages/privacy-policy" className="hover:underline underline-offset-4" style={accentStyle}>Privacy Policy</Link>
            <Link href="/pages/terms-conditions" className="hover:underline underline-offset-4" style={accentStyle}>Terms & Conditions</Link>
            <Link href="/pages/shipping-refund-policy" className="hover:underline underline-offset-4" style={accentStyle}>Shipping / Refund / Replacement Policy</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Inline brand icons (stroke/fill = currentColor) ---
function Instagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}
function XIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.3 3H21l-7.3 8.3L21.2 21h-5.2l-4.1-5-4.6 5H3.4l7.7-8.4L2.9 3h5.3l3.8 4.7L18.3 3z" />
    </svg>
  )
}
function YouTube({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23 12s0-3.4-.44-4.9a3 3 0 0 0-2.1-2.1C18.9 4.5 12 4.5 12 4.5s-6.9 0-8.46.5a3 3 0 0 0-2.1 2.1C1 8.6 1 12 1 12s0 3.4.44 4.9a3 3 0 0 0 2.1 2.1c1.56.5 8.46.5 8.46.5s6.9 0 8.46-.5a3 3 0 0 0 2.1-2.1C23 15.4 23 12 23 12Z" />
      <path d="M10 9.75v4.5L14.5 12 10 9.75Z" fill="#0F1F1C" />
    </svg>
  )
}
function TikTok({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21 8.5a6.7 6.7 0 0 1-4.4-1.6v6.8a6.7 6.7 0 1 1-6.7-6.6 6.5 6.5 0 0 1 1.3.13v3.3a3.4 3.4 0 1 0 2.2 3.2V2.9h3a6.8 6.8 0 0 0 4.6 3V8.5Z" />
    </svg>
  )
}