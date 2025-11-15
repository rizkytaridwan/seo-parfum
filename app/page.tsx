import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import FeaturedCollections from '@/components/featured-collections'
import BrandSpotlight from '@/components/brand-spotlight'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <BrandSpotlight />
      </main>
      <Footer />
    </div>
  )
}
