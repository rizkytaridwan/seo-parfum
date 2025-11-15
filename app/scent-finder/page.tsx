'use client'

import { useState } from 'react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import QuizQuestion from '@/components/quiz-question'
import QuizResults from '@/components/quiz-results'

interface Answer {
  [key: string]: string
}

const quizQuestions = [
  {
    id: 'preference',
    question: 'What\'s your fragrance preference?',
    description: 'Choose the scent family that appeals to you most',
    options: [
      { id: 'floral', label: 'Floral', icon: '🌸' },
      { id: 'woody', label: 'Woody', icon: '🌲' },
      { id: 'oriental', label: 'Oriental', icon: '✨' },
      { id: 'fresh', label: 'Fresh', icon: '🌿' }
    ]
  },
  {
    id: 'intensity',
    question: 'How intense do you like your fragrances?',
    description: 'What level of scent projection appeals to you?',
    options: [
      { id: 'light', label: 'Light & Fresh', icon: '☁️' },
      { id: 'moderate', label: 'Balanced', icon: '💫' },
      { id: 'intense', label: 'Bold & Powerful', icon: '🔥' }
    ]
  },
  {
    id: 'occasion',
    question: 'When do you wear fragrance?',
    description: 'What occasions matter most to you?',
    options: [
      { id: 'daily', label: 'Everyday Wear', icon: '☀️' },
      { id: 'professional', label: 'Work & Professional', icon: '💼' },
      { id: 'evening', label: 'Evening & Special', icon: '🌙' },
      { id: 'all', label: 'All Occasions', icon: '🎭' }
    ]
  },
  {
    id: 'notes',
    question: 'Which fragrance notes intrigue you?',
    description: 'Select the notes you\'re most drawn to',
    options: [
      { id: 'floral_notes', label: 'Rose & Jasmine', icon: '🌹' },
      { id: 'citrus_notes', label: 'Bergamot & Lemon', icon: '🍋' },
      { id: 'spice_notes', label: 'Spices & Warmth', icon: '🌶️' },
      { id: 'woods_notes', label: 'Cedar & Sandalwood', icon: '🪵' }
    ]
  },
  {
    id: 'duration',
    question: 'How long do you want fragrance to last?',
    description: 'Consider longevity and projection',
    options: [
      { id: 'short', label: 'Light & Ephemeral', icon: '✨' },
      { id: 'medium', label: 'Several Hours', icon: '⏱️' },
      { id: 'long', label: 'All Day Wear', icon: '🕐' }
    ]
  }
]

// Mock recommendation engine
const scentProfiles: Record<string, any> = {
  'floral-light-daily-floral_notes-short': {
    profile: 'Delicate Dreamer',
    description: 'You gravitate towards ethereal, elegant florals that are perfect for everyday sophistication. Light and memorable, your ideal fragrance whispers rather than shouts.',
    characteristics: ['Romantic', 'Elegant', 'Understated', 'Fresh'],
    products: ['1', '5']
  },
  'floral-moderate-evening-floral_notes-long': {
    profile: 'Romantic Enchantress',
    description: 'You prefer captivating floral compositions with lasting power. Your fragrances are meant to turn heads and linger in memory long after you leave.',
    characteristics: ['Sensual', 'Luxurious', 'Memorable', 'Sophisticated'],
    products: ['1', '5']
  },
  'woody-moderate-professional-woods_notes-long': {
    profile: 'Sophisticated Craftsperson',
    description: 'You appreciate the depth and stability of woody fragrances. Your scent is refined, professional, yet distinctly personal.',
    characteristics: ['Refined', 'Warm', 'Professional', 'Artistic'],
    products: ['3']
  },
  'oriental-intense-evening-spice_notes-long': {
    profile: 'Luxe Mystic',
    description: 'You embrace bold, sensual oriental fragrances with exotic spices. Your fragrance is a statement of confidence and mystique.',
    characteristics: ['Sensual', 'Exotic', 'Mysterious', 'Bold'],
    products: ['2', '6']
  },
  'fresh-light-daily-citrus_notes-medium': {
    profile: 'Coastal Wanderer',
    description: 'You love fresh, invigorating scents that energize your day. Bright citrus and clean notes are your signature.',
    characteristics: ['Fresh', 'Energetic', 'Clean', 'Uplifting'],
    products: ['4']
  }
}

const allProducts: Record<string, any> = {
  '1': { id: '1', name: 'Rose Enigma', brand: 'HMNS', category: 'Floral', price: 89, notes: ['Rose', 'Peony', 'Sandalwood'], image_url: '/floral-perfume-elegant-pink.jpg' },
  '2': { id: '2', name: 'Amber Essence', brand: 'HMNS', category: 'Oriental', price: 95, notes: ['Amber', 'Vanilla', 'Musk'], image_url: '/oriental-perfume-luxury-gold.jpg' },
  '3': { id: '3', name: 'Cedar Soul', brand: 'Mykonos', category: 'Woody', price: 85, notes: ['Cedar', 'Sandalwood', 'Patchouli'], image_url: '/woody-perfume-amber-dark.jpg' },
  '4': { id: '4', name: 'Coastal Breeze', brand: 'Mykonos', category: 'Fresh', price: 79, notes: ['Bergamot', 'Sea Salt', 'Driftwood'], image_url: '/perfume-bottle-blue-water.jpg' },
  '5': { id: '5', name: 'Jasmine Dream', brand: 'HMNS', category: 'Floral', price: 88, notes: ['Jasmine', 'Tuberose', 'Musk'], image_url: '/floral-perfume-elegant-pink.jpg' },
  '6': { id: '6', name: 'Oud Mystery', brand: 'Mykonos', category: 'Oriental', price: 110, notes: ['Oud', 'Rose', 'Saffron'], image_url: '/oriental-perfume-luxury-gold.jpg' }
}

export default function ScentFinderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Answer>({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [quizQuestions[currentStep].id]: optionId
    }))
  }

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleRetake = () => {
    setAnswers({})
    setCurrentStep(0)
    setShowResults(false)
  }

  const getRecommendation = () => {
    const answerKey = Object.values(answers).join('-')
    const profile = scentProfiles[answerKey]

    if (profile) {
      return {
        profile: profile.profile,
        description: profile.description,
        characteristics: profile.characteristics,
        products: profile.products.map((id: string) => allProducts[id])
      }
    }

    // Fallback to random recommendation
    const randomProfile = Object.values(scentProfiles)[0]
    return {
      profile: randomProfile.profile,
      description: randomProfile.description,
      characteristics: randomProfile.characteristics,
      products: randomProfile.products.map((id: string) => allProducts[id])
    }
  }

  const recommendation = getRecommendation()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {!showResults ? (
          <>
            {/* Quiz Header */}
            <div className="text-center mb-16">
              <p className="text-primary text-sm tracking-widest mb-3 uppercase">Interactive Quiz</p>
              <h1 className="font-serif text-5xl font-bold text-foreground mb-4">
                Find Your Signature Scent
              </h1>
              <p className="text-foreground/60">
                Answer a few questions and discover fragrances perfectly tailored to your preferences
              </p>
            </div>

            {/* Quiz Question */}
            <div className="mb-12">
              <QuizQuestion
                question={quizQuestions[currentStep].question}
                description={quizQuestions[currentStep].description}
                options={quizQuestions[currentStep].options}
                selectedOption={answers[quizQuestions[currentStep].id]}
                onSelect={handleAnswer}
                progress={(currentStep + 1) / quizQuestions.length}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  currentStep === 0
                    ? 'text-foreground/30 cursor-not-allowed'
                    : 'text-foreground border border-border hover:border-primary/50'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="text-sm text-foreground/60">
                {currentStep + 1} of {quizQuestions.length}
              </div>

              <button
                onClick={handleNext}
                disabled={!answers[quizQuestions[currentStep].id]}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  !answers[quizQuestions[currentStep].id]
                    ? 'bg-muted text-foreground/30 cursor-not-allowed'
                    : 'bg-primary text-primary-foreground hover:opacity-90'
                }`}
              >
                {currentStep === quizQuestions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </>
        ) : (
          <>
            <QuizResults
              scentProfile={recommendation.profile}
              scentDescription={recommendation.description}
              characteristics={recommendation.characteristics}
              recommendedProducts={recommendation.products}
            />

            {/* Retake Button */}
            <div className="text-center mt-16">
              <button
                onClick={handleRetake}
                className="text-primary hover:underline font-medium"
              >
                ← Start Over
              </button>
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  )
}
