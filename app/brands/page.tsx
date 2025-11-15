'use client'

import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'

interface Brand {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

const brands: Brand[] = [
  {
    id: 'hmns',
    name: 'HMNS',
    slug: 'hmns',
    description: 'Contemporary luxury fragrance house known for innovative compositions and carefully curated ingredients from around the world.',
    image: '/perfume-bottle-luxury-minimalist.jpg',
    productCount: 3
  },
  {
    id: 'mykonos',
    name: 'Mykonos',
    slug: 'mykonos',
    description: 'Mediterranean inspired fragrances capturing the essence of island living with authentic botanicals and exotic ingredients.',
    image: '/perfume-bottle-blue-water.jpg',
    productCount: 3
  }
]

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <p className="text-primary text-sm tracking-widest mb-3 uppercase">Our Partners</p>
          <h1 className="font-serif text-5xl font-bold text-foreground mb-4">
            Featured Brands
          </h1>
          <p className="text-foreground/60 max-w-2xl">
            Discover our curated collection of luxury fragrance houses, each bringing unique artistry and craftsmanship to the world of perfumery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map(brand => (
            <Link key={brand.id} href={`/brand/${brand.slug}`}>
              <div className="group cursor-pointer h-full">
                <div className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={brand.image || "/placeholder.svg"}
                      alt={brand.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-8 flex flex-col flex-1">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {brand.name}
                    </h2>
                    <p className="text-foreground/60 leading-relaxed mb-6 flex-1">
                      {brand.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <span className="text-sm text-foreground/60">
                        {brand.productCount} fragrances
                      </span>
                      <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                        Explore →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
