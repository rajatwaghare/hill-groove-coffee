import Image from 'next/image'
import Link from 'next/link'
import FiltersGrid from '@/app/components/Filters'

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
    image: '/photo-1517705008128-361805f42e86.jpeg'
  },
  {
    id: 'monsoon-malabar',
    title: 'Monsoon Malabar',
    price: 520,
    compareAt: null,
    process: 'Monsooned',
    roast: 'Medium-Dark',
    notes: 'Caramel, hazelnut, stone fruit.',
    image: '/photo-1517705008128-361805f42e86.jpeg'
  },
  {
    id: 'groove-espresso',
    title: 'Groove Espresso Blend',
    price: 480,
    compareAt: 620,
    process: 'Blend',
    roast: 'Dark',
    notes: 'Dark chocolate, toasted almond.',
    image: '/photo-1517705008128-361805f42e86.jpeg'
  },
  {
    id: 'ratnagiri-natural',
    title: 'Ratnagiri Estate — Natural',
    price: 560,
    compareAt: 840,
    process: 'Natural',
    roast: 'Medium',
    notes: 'Berry compote, panela, cacao.',
    image: '/photo-1517705008128-361805f42e86.jpeg'
  },
  {
    id: 'harley-natural',
    title: 'Harley Estate — Natural',
    price: 540,
    compareAt: 840,
    process: 'Natural',
    roast: 'Light-Medium',
    notes: 'Tropical fruit, honey, cocoa nib.',
    image: '/photo-1517705008128-361805f42e86.jpeg'
  },
  {
    id: 'house-medium',
    title: 'House Blend — Medium Roast',
    price: 480,
    compareAt: null,
    process: 'Blend',
    roast: 'Medium',
    notes: 'Balanced chocolate and citrus with a creamy finish.',
    image: '/photo-1517705008128-361805f42e86.jpeg'
  },
  {
    id: 'honey-process',
    title: 'Honey Process — Single Estate',
    price: 620,
    compareAt: 720,
    process: 'Honey',
    roast: 'Light',
    notes: 'Apricot, florals, cane sugar.',
    image: '/photo-1517705008128-361805f42e86.jpeg'
  },
  {
    id: 'washed-classic',
    title: 'Classic Washed — Single Estate',
    price: 520,
    compareAt: null,
    process: 'Washed',
    roast: 'Light-Medium',
    notes: 'Lemon zest, black tea, nougat.',
    image: '/photo-1517705008128-361805f42e86.jpeg'
  },
]

export default function ShopAllPage(){
  return (
    <main>
      {/* Header */}
      <section className="section container m-auto my-10 px-4">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-[2rem] md:text-[2.25rem] leading-tight font-semibold">Shop All</h1>
            <p className="note">All our current roasts — filter and sort to find your groove.</p>
          </div>
          <Link href="/#shop" className="underline underline-offset-4 text-sm">Back to Home</Link>
        </div>
      </section>
      <FiltersGrid products={PRODUCTS} />
    </main>
  )
}