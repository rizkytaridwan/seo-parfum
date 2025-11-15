import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-xl font-serif font-bold text-primary mb-4">ESSENCE</p>
            <p className="text-foreground/60 text-sm">
              Curating the finest fragrances from luxury brands worldwide.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/catalog" className="text-foreground/60 hover:text-primary text-sm transition-colors">Catalog</Link></li>
              <li><Link href="/brands" className="text-foreground/60 hover:text-primary text-sm transition-colors">Brands</Link></li>
              <li><Link href="/scent-finder" className="text-foreground/60 hover:text-primary text-sm transition-colors">Scent Finder</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Customer</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Shipping</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Returns</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Privacy</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Terms</Link></li>
              <li><Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-foreground/50 text-sm">
          <p>&copy; 2025 Essence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
