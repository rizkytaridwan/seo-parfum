'use client'

interface BrandHeroProps {
  brandName: string
  tagline: string
  backgroundImage: string
}

export default function BrandHero({ brandName, tagline, backgroundImage }: BrandHeroProps) {
  return (
    <section className="relative h-96 overflow-hidden rounded-lg border border-border">
      <img
        src={backgroundImage || "/placeholder.svg"}
        alt={brandName}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent flex flex-col justify-end p-8">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-3">
          {brandName}
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl">
          {tagline}
        </p>
      </div>
    </section>
  )
}
