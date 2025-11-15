'use client'

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import Header from '@/components/header'
import Footer from '@/components/footer'

interface UserData {
  email: string
  name: string
  loggedIn: boolean
  createdAt?: string
}

export default function AccountPage() {
  const [user, setUser] = useState<UserData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      setUser(JSON.parse(userData))
    }
    setIsLoading(false)
  }, [])

  if (!isLoading && (!user?.loggedIn)) {
    return redirect('/login')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground/60">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-8">
          <p className="text-primary text-sm tracking-widest mb-2 uppercase">Your Account</p>
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Welcome, {user?.name}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-2 bg-card border border-border rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              Profile Information
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-foreground/60 text-sm mb-2">Full Name</label>
                <p className="text-foreground font-medium">{user?.name}</p>
              </div>

              <div>
                <label className="block text-foreground/60 text-sm mb-2">Email Address</label>
                <p className="text-foreground font-medium">{user?.email}</p>
              </div>

              {user?.createdAt && (
                <div>
                  <label className="block text-foreground/60 text-sm mb-2">Member Since</label>
                  <p className="text-foreground font-medium">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </p>
                </div>
              )}

              <button className="px-6 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-serif font-bold text-primary mb-2">0</p>
              <p className="text-foreground/60 text-sm">Saved Favorites</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-serif font-bold text-primary mb-2">0</p>
              <p className="text-foreground/60 text-sm">Orders</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <p className="text-4xl font-serif font-bold text-primary mb-2">0</p>
              <p className="text-foreground/60 text-sm">Quiz Completions</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
