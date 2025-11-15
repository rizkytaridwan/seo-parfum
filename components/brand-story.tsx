'use client'

interface BrandStoryProps {
  title: string
  content: string
  image: string
}

export default function BrandStory({ title, content, image }: BrandStoryProps) {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-primary text-sm tracking-widest mb-3 uppercase">Our Story</p>
          <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-foreground/70 leading-relaxed whitespace-pre-line">
            {content}
          </p>
        </div>
        <div className="rounded-lg overflow-hidden border border-border">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
