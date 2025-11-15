'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AuthForm from '@/components/auth-form'

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = async (email: string, password: string, name: string = '') => {
    setIsLoading(true)
    try {
      // Mock authentication - in production, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        email,
        name: name || email.split('@')[0],
        loggedIn: true,
        createdAt: new Date().toISOString()
      }))
      
      // Redirect to dashboard
      window.location.href = '/account'
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <p className="text-primary text-sm tracking-widest mb-2 uppercase">Join Us</p>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
              Create Account
            </h1>
            <p className="text-foreground/60">
              Sign up to discover personalized fragrances and save your favorites
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <AuthForm type="signup" onSubmit={handleSignup} isLoading={isLoading} />
          </div>

          <div className="text-center">
            <p className="text-foreground/60 text-sm mb-4">
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
            <Link href="/" className="text-foreground/60 hover:text-foreground text-sm transition-colors">
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
