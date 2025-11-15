'use client'

interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
}

interface ProductReviewsProps {
  reviews: Review[]
}

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 0

  return (
    <div className="border-t border-border pt-12">
      <div className="mb-8">
        <div className="flex items-end gap-4 mb-6">
          <div>
            <p className="text-foreground/60 text-sm mb-1">Average Rating</p>
            <p className="font-serif text-4xl font-bold text-foreground">
              {averageRating}
            </p>
          </div>
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < Math.round(Number(averageRating))
                    ? 'bg-primary'
                    : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
        <p className="text-foreground/60 text-sm">
          Based on {reviews.length} reviews
        </p>
      </div>

      <div className="space-y-6">
        {reviews.map(review => (
          <div key={review.id} className="border-b border-border pb-6 last:border-0">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="font-medium text-foreground">{review.author}</p>
                <p className="text-xs text-foreground/60">{review.date}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-full ${
                      i < review.rating ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              {review.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
