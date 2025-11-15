'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import BrandHero from '@/components/brand-hero'
import BrandStory from '@/components/brand-story'
import BrandValues from '@/components/brand-values'
import BrandProducts from '@/components/brand-products'

// Mock brand data
const mockBrands: Record<string, any> = {
  'hmns': {
    id: 'hmns',
    name: 'HMNS',
    slug: 'hmns',
    tagline: 'Contemporary Luxury Fragrance House',
    heroImage: '/perfume-bottle-luxury-minimalist.jpg',
    storyTitle: 'Crafted for the Modern Connoisseur',
    storyContent: `HMNS represents a new generation of luxury perfumery—one that respects tradition while embracing innovation. Founded on the principle that every scent tells a story, we meticulously blend rare ingredients sourced from around the world.

Our master perfumers collaborate with artists and designers to create fragrances that transcend mere scent. Each composition is a symphony of carefully balanced notes, designed to evoke emotion and memory.

We believe that luxury is not about excess, but about intention. Every bottle, every note, every experience is crafted with purpose. Whether you're drawn to floral elegance or woody sophistication, HMNS offers fragrances for those who appreciate the finer things in life.

Our commitment extends beyond fragrance. We're dedicated to sustainable sourcing, ethical production, and creating experiences that enrich lives.`,
    storyImage: '/perfume-bottle-luxury-minimalist.jpg',
    values: [
      {
        icon: '✨',
        title: 'Innovation',
        description: 'We push boundaries in fragrance creation, blending traditional techniques with modern artistry to craft unforgettable scents.'
      },
      {
        icon: '🌿',
        title: 'Sustainability',
        description: 'Ethically sourced ingredients and eco-conscious production methods ensure our fragrances are as responsible as they are beautiful.'
      },
      {
        icon: '💎',
        title: 'Quality',
        description: 'Every ingredient is carefully selected, every composition meticulously tested. We never compromise on excellence.'
      }
    ],
    products: [
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
        id: '5',
        name: 'Jasmine Dream',
        brand: 'HMNS',
        category: 'Floral',
        price: 88,
        notes: ['Jasmine', 'Tuberose', 'Musk'],
        image_url: '/floral-perfume-elegant-pink.jpg'
      }
    ]
  },
  'mykonos': {
    id: 'mykonos',
    name: 'Mykonos',
    slug: 'mykonos',
    tagline: 'Mediterranean Inspired Luxury',
    heroImage: '/perfume-bottle-blue-water.jpg',
    storyTitle: 'Essence of Island Living',
    storyContent: `Mykonos captures the spirit of the Mediterranean—where azure waters meet white-washed villages, and ancient traditions blend seamlessly with contemporary elegance.

Inspired by the enchanting island of Mykonos, our fragrances evoke the warmth of golden sunsets, the freshness of coastal breezes, and the mystique of evening celebrations under the stars.

Each fragrance is a journey. From the invigorating top notes that capture the salty sea air to the warm base notes that linger like memories of summer, Mykonos fragrances transport you to paradise.

We believe in the transformative power of scent. Our mission is to create fragrances that become part of your story, that accompany you through life's most beautiful moments.

Crafted with the finest Mediterranean botanicals and complemented by exotic ingredients from around the world, Mykonos represents the intersection of tradition and innovation.`,
    storyImage: '/perfume-bottle-blue-water.jpg',
    values: [
      {
        icon: '🌊',
        title: 'Authenticity',
        description: 'Our fragrances are inspired by real places and genuine experiences, creating authentic scents that tell meaningful stories.'
      },
      {
        icon: '🌅',
        title: 'Elegance',
        description: 'Timeless beauty meets contemporary sophistication in every creation. We craft fragrances for those with refined taste.'
      },
      {
        icon: '🎨',
        title: 'Artistry',
        description: 'Perfumery is an art form. We approach each composition as a masterpiece, balancing creativity with technical precision.'
      }
    ],
    products: [
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
        id: '6',
        name: 'Oud Mystery',
        brand: 'Mykonos',
        category: 'Oriental',
        price: 110,
        notes: ['Oud', 'Rose', 'Saffron'],
        image_url: '/oriental-perfume-luxury-gold.jpg'
      }
    ]
  }
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const brand = mockBrands[params.slug] || mockBrands['hmns']

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <BrandHero
          brandName={brand.name}
          tagline={brand.tagline}
          backgroundImage={brand.heroImage}
        />

        <div className="mt-16">
          <BrandStory
            title={brand.storyTitle}
            content={brand.storyContent}
            image={brand.storyImage}
          />
        </div>

        <div className="mt-16">
          <BrandValues values={brand.values} />
        </div>

        <div className="mt-16">
          <BrandProducts
            products={brand.products}
            brandName={brand.name}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
