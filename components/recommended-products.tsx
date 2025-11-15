'use client'

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

interface RecommendedProductsProps {
  products: Product[]
}

export default function RecommendedProducts({ products }: RecommendedProductsProps) {
  return (
    <section className="border-t border-border pt-12 mt-12">
      <div className="mb-8">
        <p className="text-primary text-sm tracking-widest mb-2 uppercase">You Might Like</p>
        <h3 className="font-serif text-3xl font-bold text-foreground">
          Recommended Fragrances
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
