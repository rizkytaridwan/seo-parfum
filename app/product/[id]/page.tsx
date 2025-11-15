'use client'

import { useState } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import FragrancePyramid from '@/components/fragrance-pyramid'
import ProductReviews from '@/components/product-reviews'
import RecommendedProducts from '@/components/recommended-products'
import { Heart, Share2, ShoppingCart } from 'lucide-react'

// Mock data for product details
const mockProductDetails: Record<string, any> = {
  '1': {
    id: '1',
    name: 'Rose Enigma',
    brand: 'HMNS',
    category: 'Floral',
    price: 89,
    concentration: 'Eau de Parfum',
    volume: '100ml',
    image_url: '/floral-perfume-elegant-pink.jpg',
    description: 'A sophisticated blend of modern florals and timeless elegance. Rose Enigma captures the essence of blooming petals in an urban garden, where tradition meets contemporary allure.',
    topNotes: [
      { name: 'Bergamot', description: 'Bright and citrusy opening' },
      { name: 'Pink Pepper', description: 'Spicy and vibrant notes' }
    ],
    middleNotes: [
      { name: 'Rose Absolute', description: 'Rich and velvety heart' },
      { name: 'Peony', description: 'Delicate floral middle' }
    ],
    baseNotes: [
      { name: 'Sandalwood', description: 'Warm and creamy base' },
      { name: 'Musk', description: 'Sensual finishing touch' }
    ],
    reviews: [
      {
        id: '1',
        author: 'Elena M.',
        rating: 5,
        text: 'Absolutely stunning fragrance. The rose is so refined and not overpowering. Perfect for everyday wear.',
        date: '2 weeks ago'
      },
      {
        id: '2',
        author: 'James K.',
        rating: 4,
        text: 'Great scent with excellent longevity. The bergamot opening is refreshing.',
        date: '1 month ago'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'Amber Essence',
    brand: 'HMNS',
    category: 'Oriental',
    price: 95,
    concentration: 'Eau de Parfum',
    volume: '100ml',
    image_url: '/oriental-perfume-luxury-gold.jpg',
    description: 'An opulent composition that celebrates the warmth of amber with exotic spices. Amber Essence is a sensual journey through golden dunes and mysterious nights.',
    topNotes: [
      { name: 'Saffron', description: 'Exotic and precious opening' },
      { name: 'Cardamom', description: 'Warm spice notes' }
    ],
    middleNotes: [
      { name: 'Amber', description: 'Luxurious heart' },
      { name: 'Vanilla', description: 'Sweet and creamy' }
    ],
    baseNotes: [
      { name: 'Musk', description: 'Sensual base' },
      { name: 'Patchouli', description: 'Deep earthiness' }
    ],
    reviews: [
      {
        id: '1',
        author: 'Sofia R.',
        rating: 5,
        text: 'This is luxury in a bottle. The amber is so well-balanced and doesn\'t feel heavy.',
        date: '3 weeks ago'
      }
    ]
  }
}

const recommendedProducts = [
  {
    id: '3',
    name: 'Cedar Soul',
    brand: 'Mykonos',
    category: 'Woody',
    price: 85,
    notes: ['Cedar', 'Sandalwood', 'Patchouli'],
    image_url: '/woody-perfume-amber-dark.jpg'
  },
  {
    id: '4',
    name: 'Coastal Breeze',
    brand: 'Mykonos',
    category: 'Fresh',
    price: 79,
    notes: ['Bergamot', 'Sea Salt', 'Driftwood'],
    image_url: '/perfume-bottle-blue-water.jpg'
  },
  {
    id: '5',
    name: 'Jasmine Dream',
    brand: 'HMNS',
    category: 'Floral',
    price: 88,
    notes: ['Jasmine', 'Tuberose', 'Musk'],
    image_url: '/floral-perfume-elegant-pink.jpg'
  },
  {
    id: '6',
    name: 'Oud Mystery',
    brand: 'Mykonos',
    category: 'Oriental',
    price: 110,
    notes: ['Oud', 'Rose', 'Saffron'],
    image_url: '/oriental-perfume-luxury-gold.jpg'
  }
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorited, setIsFavorited] = useState(false)
  const product = mockProductDetails[params.id] || mockProductDetails['1']

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex items-center justify-center">
            <div className="w-full aspect-square rounded-lg border border-border overflow-hidden bg-muted">
              <img
                src={product.image_url || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <p className="text-primary text-sm tracking-widest uppercase font-semibold mb-2">
                {product.brand}
              </p>
              <h1 className="font-serif text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-foreground/60 leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-border mb-6">
              <div>
                <p className="text-foreground/60 text-sm mb-1">Concentration</p>
                <p className="font-medium text-foreground">{product.concentration}</p>
              </div>
              <div>
                <p className="text-foreground/60 text-sm mb-1">Volume</p>
                <p className="font-medium text-foreground">{product.volume}</p>
              </div>
              <div>
                <p className="text-foreground/60 text-sm mb-1">Category</p>
                <p className="font-medium text-foreground">{product.category}</p>
              </div>
              <div>
                <p className="text-foreground/60 text-sm mb-1">Price</p>
                <p className="font-serif text-2xl font-bold text-primary">${product.price}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-foreground/60 hover:text-foreground transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-l border-r border-border bg-background text-foreground"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-foreground/60 hover:text-foreground transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-colors border ${
                    isFavorited
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'border-border text-foreground hover:border-primary/50'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorited ? 'fill-current' : ''}`} />
                </button>
                <button className="px-6 py-3 border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Fragrance Pyramid */}
        <section className="py-16 border-b border-border">
          <div className="mb-12">
            <p className="text-primary text-sm tracking-widest mb-2 uppercase">Scent Profile</p>
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Fragrance Notes
            </h2>
          </div>
          <FragrancePyramid
            topNotes={product.topNotes}
            middleNotes={product.middleNotes}
            baseNotes={product.baseNotes}
          />
        </section>

        {/* Reviews */}
        <section className="py-16">
          <ProductReviews reviews={product.reviews} />
        </section>

        {/* Recommended Products */}
        <RecommendedProducts products={recommendedProducts} />
      </main>

      <Footer />
    </div>
  )
}
