'use client'

import Link from 'next/link'
import ProductCard from './product-card'

interface Product {
  id: string
  name: string
  brand: string
  category: string
  price: number
  notes: string[]
  image_url: string
}

interface QuizResultsProps {
  scentProfile: string
  scentDescription: string
  characteristics: string[]
  recommendedProducts: Product[]
}

export default function QuizResults({
  scentProfile,
  scentDescription,
  characteristics,
  recommendedProducts
}: QuizResultsProps) {
  return (
    <div className="w-full">
      {/* Results Header */}
      <div className="text-center mb-12">
        <p className="text-primary text-sm tracking-widest uppercase mb-3">Your Results</p>
        <h1 className="font-serif text-5xl font-bold text-foreground mb-4">
          Your Scent Profile
        </h1>
      </div>

      {/* Profile Card */}
      <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-lg p-12 mb-12">
        <div className="text-center mb-8">
          <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
            {scentProfile}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {scentDescription}
          </p>
        </div>

        {/* Characteristics */}
        <div className="flex flex-wrap gap-3 justify-center">
          {characteristics.map(char => (
            <span
              key={char}
              className="px-4 py-2 bg-primary/30 text-primary rounded-full text-sm font-medium"
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mb-12">
        <div className="mb-8">
          <p className="text-primary text-sm tracking-widest mb-2 uppercase">Perfect Match</p>
          <h3 className="font-serif text-4xl font-bold text-foreground">
            Recommended for You
          </h3>
        </div>

        {recommendedProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border border-border rounded-lg bg-muted/30">
            <p className="text-foreground/60">No products match your profile yet.</p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/catalog">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Browse All Fragrances
          </button>
        </Link>
        <Link href="/scent-finder">
          <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
            Retake Quiz
          </button>
        </Link>
      </div>
    </div>
  )
}
