// app/products/data.js
export const PRODUCTS = [
  {
    id: 'attikan-natural',
    title: 'Attikan Estate — Natural',
    price: 540,
    compareAt: 840,
    process: 'Natural',
    roast: 'Medium',
    notes: ['Orange zest', 'Toffee', 'Cocoa nib'],
    description:
      'Handpicked cherries from Attikan Estate, naturally processed and roasted for clarity and layered sweetness. A lively, balanced cup built for daily brews.',
    origin: 'Chikmagalur, Karnataka',
    altitude: '1,200–1,400 m',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553530979-7ee52c02c921?q=80&w=1600&auto=format&fit=crop',
    ],
    weightOptions: ['250g', '500g', '1kg'],
    grindOptions: ['Whole Bean', 'Espresso', 'Moka', 'Pour Over', 'French Press'],
  },
  {
    id: 'monsoon-malabar',
    title: 'Monsoon Malabar',
    price: 520,
    compareAt: null,
    process: 'Monsooned',
    roast: 'Medium-Dark',
    notes: ['Caramel', 'Hazelnut', 'Stone fruit'],
    description:
      'Classic monsooned profile with plush body and mellow acidity—comforting, syrupy and sweet.',
    origin: 'Malabar Coast, India',
    altitude: 'Sea level to 600 m',
    image:
      'https://images.unsplash.com/photo-1559058962-3701f607254e?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1559058962-3701f607254e?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
    ],
    weightOptions: ['250g', '500g', '1kg'],
    grindOptions: ['Whole Bean', 'Espresso', 'Moka', 'Pour Over', 'French Press'],
  },
  {
    id: 'groove-espresso',
    title: 'Groove Espresso Blend',
    price: 480,
    compareAt: 620,
    process: 'Blend',
    roast: 'Dark',
    notes: ['Dark chocolate', 'Toasted almond'],
    description:
      'Our house espresso—dense crema and chocolate‑forward sweetness that cuts through milk drinks with ease.',
    origin: 'Select Indian estates',
    altitude: 'Various',
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1587734195503-c489e50436a5?q=80&w=1600&auto=format&fit=crop',
    ],
    weightOptions: ['250g', '500g', '1kg'],
    grindOptions: ['Whole Bean', 'Espresso', 'Moka', 'Pour Over', 'French Press'],
  },
  {
    id: 'ratnagiri-natural',
    title: 'Ratnagiri Estate — Natural',
    price: 560,
    compareAt: 840,
    process: 'Natural',
    roast: 'Medium',
    notes: ['Berry compote', 'Panela', 'Cacao'],
    description:
      'A fruit‑forward natural from Ratnagiri with sparkling sweetness and a cocoa finish—playful yet composed.',
    origin: 'Chikmagalur, Karnataka',
    altitude: '1,200–1,400 m',
    image:
      'https://images.unsplash.com/photo-1587734195503-c489e50436a5?q=80&w=1600&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1587734195503-c489e50436a5?q=80&w=1600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
    ],
    weightOptions: ['250g', '500g', '1kg'],
    grindOptions: ['Whole Bean', 'Espresso', 'Moka', 'Pour Over', 'French Press'],
  },
]

export function getProductById(id){
  return PRODUCTS.find(p => p.id === id)
}

export function getRelated(id){
  return PRODUCTS.filter(p => p.id !== id).slice(0, 3)
}