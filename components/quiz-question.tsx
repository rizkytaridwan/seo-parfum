'use client'

interface Option {
  id: string
  label: string
  icon: string
}

interface QuizQuestionProps {
  question: string
  description?: string
  options: Option[]
  selectedOption?: string
  onSelect: (optionId: string) => void
  progress: number
}

export default function QuizQuestion({
  question,
  description,
  options,
  selectedOption,
  onSelect,
  progress
}: QuizQuestionProps) {
  return (
    <div className="w-full">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-foreground/60">Question {Math.round(progress * 100)}%</p>
          <p className="text-sm text-foreground/60">{Math.round(progress * 100)}% complete</p>
        </div>
        <div className="w-full h-1 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-12">
        <h2 className="font-serif text-4xl font-bold text-foreground mb-3">
          {question}
        </h2>
        {description && (
          <p className="text-foreground/60 text-lg">{description}</p>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map(option => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-300 text-center ${
              selectedOption === option.id
                ? 'border-primary bg-primary/10 text-foreground'
                : 'border-border bg-card hover:border-primary/50 text-foreground/70 hover:text-foreground'
            }`}
          >
            <div className="text-4xl mb-3">{option.icon}</div>
            <p className="font-medium">{option.label}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
