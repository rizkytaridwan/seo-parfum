'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import AuthForm from '@/components/auth-form'

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock authentication - in production, this would call an API
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        email,
        name: email.split('@')[0],
        loggedIn: true
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
            <p className="text-primary text-sm tracking-widest mb-2 uppercase">Welcome Back</p>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-2">
              Sign In
            </h1>
            <p className="text-foreground/60">
              Sign in to access your account and personalized recommendations
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 mb-6">
            <AuthForm type="login" onSubmit={handleLogin} isLoading={isLoading} />
          </div>

          <div className="text-center">
            <p className="text-foreground/60 text-sm mb-4">
              Don't have an account?{' '}
              <Link href="/signup" className="text-primary hover:underline font-medium">
                Create one
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
