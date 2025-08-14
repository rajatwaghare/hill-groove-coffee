// app/shop/page.js
import Image from 'next/image'
import Link from 'next/link'
import FiltersGrid from '@/app/components/Filters'

export const metadata = {
  title: 'Shop All — Hill Groove Coffee',
  description: 'Explore all our coffees in one place — filter by process, roast, and more.'
}

// ✅ Data sourced from your Excel: /mnt/data/productinfofordummysite (1).xlsx
//    Parsed into a JS array (id, title, process, roast, bean, producer, state, altitude, notes, image)
//    Prices were not present in the sheet, so this list intentionally omits price/compareAt.
//    Update images per-item as you get real assets.

const PRODUCTS = [
  {
    id: "madhu-agro-black-honey",
    title: "Madhu Agro — Black Honey",
    process: "Black Honey",
    roast: "Light Medium",
    bean: "Arabica",
    producer: "Rajeshwari Reddy",
    state: "Koraput, OD",
    altitude: "1000 m",
    notes: "Citrusy, Spicy, Caramel",
    image: "/product.jpg",
  },
  {
    id: "madhu-agro-washed",
    title: "Madhu Agro — Washed",
    process: "Washed",
    roast: "Light",
    bean: "Arabica",
    producer: "Rajeshwari Reddy",
    state: "Koraput, OD",
    altitude: "1000 m",
    notes: "Juicy, Zesty, Bright with hints of milk chocolate",
    image: "/product.jpg",
  },
  {
    id: "harley-saccharobrew",
    title: "Harley — Saccharobrew",
    process: "Saccharobrew",
    roast: "Medium",
    bean: "Arabica",
    producer: "Purnesh DM",
    state: "Sakleshpur, KA",
    altitude: "1040 m",
    notes: "Dark fruits, berries & sugarcane",
    image: "/product.jpg",
  },
  {
    id: "harley-anaerobic-natural",
    title: "Harley — Anaerobic Natural",
    process: "Anaerobic Natural",
    roast: "Light Medium",
    bean: "Arabica",
    producer: "Purnesh DM",
    state: "Sakleshpur, KA",
    altitude: "1040 m",
    notes: "Tropical Fruit, Vanilla & Milk Chocolate",
    image: "/product.jpg",
  },
  {
    id: "narmada-honey",
    title: "Narmada — Honey",
    process: "Honey",
    roast: "Light",
    bean: "Arabica",
    producer: "Sohan Shetty",
    state: "Chikmagalur, KA",
    altitude: "1100 m",
    notes: "Citrus, Tropical, Berries",
    image: "/product.jpg",
  },
  {
    id: "mooleh-maney",
    title: "Mooleh Maney",
    process: "",
    roast: "",
    bean: "Excelsa",
    producer: "Komal Sable",
    state: "Coorg, KA",
    altitude: "1000 m",
    notes: null,
    image: "/product.jpg",
  },
  {
    id: "sai-ashirwad",
    title: "Sai Ashirwad",
    process: "",
    roast: "",
    bean: "Robusta",
    producer: "Sohan Shetty",
    state: "Chikmagalur, KA",
    altitude: "1100 m",
    notes: "Bold, Earthy, Fruit forward - Cherry, Fig, Plum, Berries",
    image: "/product.jpg",
  },
  {
    id: "biccode",
    title: "Biccode",
    process: "",
    roast: "",
    bean: "Arabica",
    producer: "Hamsini Appadurai",
    state: "Huskur, KA",
    altitude: "1180 m",
    notes: null,
    image: "/product.jpg",
  },
  {
    id: "biccode-anaerobic-washed",
    title: "Biccode — Anaerobic Washed",
    process: "Anaerobic Washed",
    roast: "Light",
    bean: "Arabica",
    producer: "Hamsini Appadurai",
    state: "Huskur, KA",
    altitude: "1180 m",
    notes: "Citrus, Raisin, Honey",
    image: "/product.jpg",
  },
  {
    id: "ratnagiri",
    title: "Ratnagiri",
    process: "",
    roast: "",
    bean: "Arabica",
    producer: "Ashok Patre",
    state: "Chikmagalur, KA",
    altitude: "1350 m",
    notes: null,
    image: "/product.jpg",
  },
  {
    id: "ratnagiri-yeast-fermentation-natural",
    title: "Ratnagiri — Yeast Fermentation Natural",
    process: "Yeast Fermentation Natural",
    roast: "Light Medium",
    bean: "Arabica",
    producer: "Ashok Patre",
    state: "Chikmagalur, KA",
    altitude: "1350 m",
    notes: "Stonefruit, Pink Guava, Lychee & Vanilla",
    image: "/product.jpg",
  },
  {
    id: "salawar",
    title: "Salawar",
    process: "",
    roast: "",
    bean: "Arabica",
    producer: "Somasundaram",
    state: "Chikmagalur, KA",
    altitude: "1100 m",
    notes: null,
    image: "/product.jpg",
  },
  {
    id: "ratnagiri-washed",
    title: "Ratnagiri — Washed",
    process: "Washed",
    roast: "Light",
    bean: "Arabica",
    producer: "Ashok Patre",
    state: "Chikmagalur, KA",
    altitude: "1350 m",
    notes: "Lemon, Lime, Citrus, Chocolate & Caramel",
    image: "/product.jpg",
  },
  {
    id: "salawar-honey",
    title: "Salawar — Honey",
    process: "Honey",
    roast: "Medium",
    bean: "Arabica",
    producer: "Somasundaram",
    state: "Chikmagalur, KA",
    altitude: "1100 m",
    notes: "Caramel & Dark Chocolate",
    image: "/product.jpg",
  },
  {
    id: "salawar-anaerobic-natural",
    title: "Salawar — Anaerobic Natural",
    process: "Anaerobic Natural",
    roast: "Light Medium",
    bean: "Arabica",
    producer: "Somasundaram",
    state: "Chikmagalur, KA",
    altitude: "1100 m",
    notes: "Pineapple, Caramel, Marshmallow, Dark Chocolate",
    image: "/product.jpg",
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