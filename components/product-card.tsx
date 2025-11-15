'use client'

import Link from 'next/link'
import { Heart } from 'lucide-react'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  brand: string
  category: string
  price: number
  notes: string[]
  image_url: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorited, setIsFavorited] = useState(false)

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 mb-4">
          <div className="aspect-square overflow-hidden bg-muted">
            <img
              src={product.image_url || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsFavorited(!isFavorited)
              }}
              className="p-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
            >
              <Heart
                className={`w-6 h-6 ${isFavorited ? 'fill-current' : ''}`}
              />
            </button>
          </div>

          {/* Badge */}
          <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {product.category}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-primary text-xs tracking-widest uppercase">
            {product.brand}
          </p>
          <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          <div className="flex flex-wrap gap-1 mb-3">
            {product.notes.slice(0, 2).map(note => (
              <span
                key={note}
                className="text-xs bg-muted text-foreground/70 px-2 py-1 rounded"
              >
                {note}
              </span>
            ))}
            {product.notes.length > 2 && (
              <span className="text-xs bg-muted text-foreground/70 px-2 py-1 rounded">
                +{product.notes.length - 2}
              </span>
            )}
          </div>

          <div className="flex items-baseline justify-between">
            <p className="text-foreground/60 text-sm">From</p>
            <p className="font-serif text-xl font-bold text-foreground">
              ${product.price}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
