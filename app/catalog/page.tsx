import Header from '@/components/header'
import ProductCatalog from '@/components/product-catalog'
import Footer from '@/components/footer'

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ProductCatalog />
      <Footer />
    </div>
  )
}
