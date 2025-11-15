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

interface BrandProductsProps {
  products: Product[]
  brandName: string
}

export default function BrandProducts({ products, brandName }: BrandProductsProps) {
  return (
    <section className="py-16">
      <div className="mb-12">
        <p className="text-primary text-sm tracking-widest mb-3 uppercase">Collection</p>
        <h2 className="font-serif text-4xl font-bold text-foreground">
          {brandName} Fragrances
        </h2>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-border rounded-lg bg-muted/30">
          <p className="text-foreground/60">No products available for this brand.</p>
        </div>
      )}
    </section>
  )
}
