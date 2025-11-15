'use client'

interface Value {
  icon: string
  title: string
  description: string
}

interface BrandValuesProps {
  values: Value[]
}

export default function BrandValues({ values }: BrandValuesProps) {
  return (
    <section className="py-16 border-y border-border">
      <div className="mb-12">
        <p className="text-primary text-sm tracking-widest mb-3 uppercase">What We Stand For</p>
        <h2 className="font-serif text-4xl font-bold text-foreground">
          Our Values
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="border border-border rounded-lg p-8 hover:border-primary/50 transition-colors">
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              {value.title}
            </h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
