export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-b from-background via-background to-muted flex items-center justify-center py-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
        <p className="text-primary text-sm tracking-widest mb-4 uppercase">Discover Luxury</p>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          The Art of Fragrance
        </h1>
        <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Explore meticulously curated perfumes from the world's finest brands. Find your signature scent through our guided discovery experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            Explore Collection
          </button>
          <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors">
            Take Scent Quiz
          </button>
        </div>
      </div>
    </section>
  )
}
