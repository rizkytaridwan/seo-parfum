'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { User, LogOut, Heart, Settings } from 'lucide-react'

interface UserData {
  email: string
  name: string
  loggedIn: boolean
}

export default function UserMenu() {
  const [user, setUser] = useState<UserData | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('user')
    window.location.href = '/'
  }

  if (!user?.loggedIn) {
    return (
      <Link href="/login" className="px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors text-sm">
        Sign In
      </Link>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-muted rounded-lg transition-colors"
      >
        <User className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-border">
            <p className="font-medium text-foreground text-sm">{user.name}</p>
            <p className="text-foreground/60 text-xs">{user.email}</p>
          </div>

          <div className="p-2 space-y-1">
            <Link
              href="/account"
              className="flex items-center gap-3 px-3 py-2 text-foreground/70 hover:text-foreground hover:bg-muted rounded transition-colors text-sm"
            >
              <User className="w-4 h-4" />
              My Account
            </Link>

            <Link
              href="/favorites"
              className="flex items-center gap-3 px-3 py-2 text-foreground/70 hover:text-foreground hover:bg-muted rounded transition-colors text-sm"
            >
              <Heart className="w-4 h-4" />
              Saved Favorites
            </Link>

            <Link
              href="/settings"
              className="flex items-center gap-3 px-3 py-2 text-foreground/70 hover:text-foreground hover:bg-muted rounded transition-colors text-sm"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>

            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-3 py-2 text-destructive hover:bg-destructive/10 rounded transition-colors text-sm text-left"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
