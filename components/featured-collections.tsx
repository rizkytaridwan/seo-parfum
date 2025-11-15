'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Collection {
  id: string
  name: string
  description: string
  fragrance_count: number
  image_url: string
}

const collections: Collection[] = [
  {
    id: 'floral',
    name: 'Floral Dreams',
    description: 'Delicate and romantic fragrances with beautiful floral notes',
    fragrance_count: 12,
    image_url: '/floral-perfume-elegant-pink.jpg'
  },
  {
    id: 'woody',
    name: 'Woody Elegance',
    description: 'Deep, sophisticated scents with warm wooden undertones',
    fragrance_count: 8,
    image_url: '/woody-perfume-amber-dark.jpg'
  },
  {
    id: 'oriental',
    name: 'Oriental Mystique',
    description: 'Exotic and sensual fragrances with rich, complex layers',
    fragrance_count: 10,
    image_url: '/oriental-perfume-luxury-gold.jpg'
  }
]

export default function FeaturedCollections() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <p className="text-primary text-sm tracking-widest mb-3 uppercase">Collections</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Curated Collections
        </h2>
        <p className="text-foreground/60 max-w-2xl">
          Browse our expertly curated collections organized by fragrance family, allowing you to discover new favorites.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            href={`/catalog?category=${collection.id}`}
            className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={collection.image_url || "/placeholder.svg"}
                alt={collection.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                {collection.name}
              </h3>
              <p className="text-foreground/70 text-sm mb-4">
                {collection.description}
              </p>
              <div className="flex items-center text-primary">
                <span className="text-sm font-medium">{collection.fragrance_count} fragrances</span>
                <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
