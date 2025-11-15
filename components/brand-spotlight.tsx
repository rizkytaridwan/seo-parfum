'use client'

interface Brand {
  id: string
  name: string
  description: string
  featured_product: string
  image_url: string
}

const brands: Brand[] = [
  {
    id: 'hmns',
    name: 'HMNS',
    description: 'Contemporary luxury fragrance house known for innovative compositions',
    featured_product: 'Amber Essence',
    image_url: '/perfume-bottle-luxury-minimalist.jpg'
  },
  {
    id: 'mykonos',
    name: 'Mykonos',
    description: 'Mediterranean inspired fragrances capturing the essence of island living',
    featured_product: 'Coastal Breeze',
    image_url: '/perfume-bottle-blue-water.jpg'
  }
]

export default function BrandSpotlight() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <p className="text-primary text-sm tracking-widest mb-3 uppercase">Featured Brands</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
          Premium Brands
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="group border border-border rounded-lg bg-card overflow-hidden hover:border-primary/50 transition-colors duration-300"
          >
            <div className="grid grid-cols-2 gap-6 p-6">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={brand.image_url || "/placeholder.svg"}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {brand.description}
                  </p>
                </div>
                
                <div>
                  <p className="text-primary text-xs tracking-widest uppercase mb-2">Featured</p>
                  <p className="text-foreground font-medium">
                    {brand.featured_product}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
