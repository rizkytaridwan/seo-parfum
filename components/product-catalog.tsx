'use client'

import { useState, useMemo } from 'react'
import { ChevronDown, X } from 'lucide-react'
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

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Rose Enigma',
    brand: 'HMNS',
    category: 'Floral',
    price: 89,
    notes: ['Rose', 'Peony', 'Sandalwood'],
    image_url: '/floral-perfume-elegant-pink.jpg'
  },
  {
    id: '2',
    name: 'Amber Essence',
    brand: 'HMNS',
    category: 'Oriental',
    price: 95,
    notes: ['Amber', 'Vanilla', 'Musk'],
    image_url: '/oriental-perfume-luxury-gold.jpg'
  },
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
  },
]

const brands = ['HMNS', 'Mykonos']
const categories = ['Floral', 'Woody', 'Oriental', 'Fresh', 'Gourmand']
const notes = ['Rose', 'Jasmine', 'Cedar', 'Sandalwood', 'Amber', 'Vanilla', 'Bergamot', 'Musk']

export default function ProductCatalog() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedNotes, setSelectedNotes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([50, 150])
  const [expandedFilters, setExpandedFilters] = useState<Record<string, boolean>>({
    brands: true,
    categories: true,
    notes: false,
    price: false
  })

  const filteredProducts = useMemo(() => {
    return mockProducts.filter(product => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) return false
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false
      if (selectedNotes.length > 0 && !selectedNotes.some(note => product.notes.includes(note))) return false
      return true
    })
  }, [selectedBrands, selectedCategories, priceRange, selectedNotes])

  const toggleFilter = (type: 'brands' | 'categories' | 'notes' | 'price', value?: string) => {
    if (type === 'brands' && value) {
      setSelectedBrands(prev =>
        prev.includes(value) ? prev.filter(b => b !== value) : [...prev, value]
      )
    } else if (type === 'categories' && value) {
      setSelectedCategories(prev =>
        prev.includes(value) ? prev.filter(c => c !== value) : [...prev, value]
      )
    } else if (type === 'notes' && value) {
      setSelectedNotes(prev =>
        prev.includes(value) ? prev.filter(n => n !== value) : [...prev, value]
      )
    }
  }

  const clearAllFilters = () => {
    setSelectedBrands([])
    setSelectedCategories([])
    setSelectedNotes([])
    setPriceRange([50, 150])
  }

  const activeFiltersCount = selectedBrands.length + selectedCategories.length + selectedNotes.length

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
          Fragrance Catalog
        </h1>
        <p className="text-foreground/60">
          {filteredProducts.length} of {mockProducts.length} fragrances
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-20 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Filters</h3>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="text-xs text-primary hover:underline"
                >
                  Clear all
                </button>
              )}
            </div>

            {/* Brands Filter */}
            <div className="border-b border-border pb-6">
              <button
                onClick={() => setExpandedFilters(prev => ({ ...prev, brands: !prev.brands }))}
                className="w-full flex items-center justify-between mb-3"
              >
                <span className="font-medium text-foreground">Brand</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedFilters.brands ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedFilters.brands && (
                <div className="space-y-3">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleFilter('brands', brand)}
                        className="w-4 h-4 rounded border-border bg-background"
                      />
                      <span className="text-sm text-foreground/80">{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Categories Filter */}
            <div className="border-b border-border pb-6">
              <button
                onClick={() => setExpandedFilters(prev => ({ ...prev, categories: !prev.categories }))}
                className="w-full flex items-center justify-between mb-3"
              >
                <span className="font-medium text-foreground">Category</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedFilters.categories ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedFilters.categories && (
                <div className="space-y-3">
                  {categories.map(category => (
                    <label key={category} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleFilter('categories', category)}
                        className="w-4 h-4 rounded border-border bg-background"
                      />
                      <span className="text-sm text-foreground/80">{category}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Notes Filter */}
            <div className="border-b border-border pb-6">
              <button
                onClick={() => setExpandedFilters(prev => ({ ...prev, notes: !prev.notes }))}
                className="w-full flex items-center justify-between mb-3"
              >
                <span className="font-medium text-foreground">Top Notes</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedFilters.notes ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedFilters.notes && (
                <div className="space-y-3">
                  {notes.map(note => (
                    <label key={note} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedNotes.includes(note)}
                        onChange={() => toggleFilter('notes', note)}
                        className="w-4 h-4 rounded border-border bg-background"
                      />
                      <span className="text-sm text-foreground/80">{note}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div>
              <button
                onClick={() => setExpandedFilters(prev => ({ ...prev, price: !prev.price }))}
                className="w-full flex items-center justify-between mb-3"
              >
                <span className="font-medium text-foreground">Price Range</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedFilters.price ? 'rotate-180' : ''}`}
                />
              </button>
              {expandedFilters.price && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/60">${priceRange[0]}</span>
                    <span className="text-foreground/60">${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="150"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="50"
                    max="150"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="lg:col-span-3">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center min-h-96">
              <p className="text-foreground/60 mb-4">No fragrances match your filters</p>
              <button
                onClick={clearAllFilters}
                className="text-primary hover:underline text-sm"
              >
                Clear filters and try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
