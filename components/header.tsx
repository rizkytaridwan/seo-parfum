import Link from 'next/link'
import { Menu, Search, ShoppingCart } from 'lucide-react'
import UserMenu from './user-menu'

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-serif font-bold text-primary">
          ESSENCE
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/catalog" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Catalog
          </Link>
          <Link href="/brands" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Brands
          </Link>
          <Link href="/scent-finder" className="text-sm text-foreground/80 hover:text-primary transition-colors">
            Scent Finder
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-muted rounded-lg transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <UserMenu />
          <button className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
