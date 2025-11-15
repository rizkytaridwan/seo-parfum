'use client'

interface Note {
  name: string
  description: string
}

interface FragrancePyramidProps {
  topNotes: Note[]
  middleNotes: Note[]
  baseNotes: Note[]
}

export default function FragrancePyramid({
  topNotes,
  middleNotes,
  baseNotes
}: FragrancePyramidProps) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="space-y-8">
        {/* Top Notes */}
        <div className="text-center">
          <div className="mx-auto w-32 h-16 bg-gradient-to-b from-primary to-primary/60 rounded-t-3xl flex items-center justify-center mb-4 border border-primary/50">
            <div className="text-center">
              <p className="text-xs text-primary-foreground tracking-widest uppercase font-semibold">
                Top Notes
              </p>
              <p className="text-xs text-primary-foreground/80">0 - 15 min</p>
            </div>
          </div>
          <div className="space-y-2">
            {topNotes.map(note => (
              <div key={note.name} className="text-sm">
                <p className="font-medium text-foreground">{note.name}</p>
                <p className="text-xs text-foreground/60">{note.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-primary/30" />
          <div className="text-xs text-foreground/40 uppercase tracking-widest">Develops</div>
          <div className="flex-1 h-px bg-primary/30" />
        </div>

        {/* Middle Notes */}
        <div className="text-center">
          <div className="mx-auto w-48 bg-gradient-to-b from-primary/60 to-primary/30 flex items-center justify-center mb-4 py-6 border border-primary/40">
            <div className="text-center">
              <p className="text-xs text-primary-foreground tracking-widest uppercase font-semibold">
                Middle Notes (Heart)
              </p>
              <p className="text-xs text-primary-foreground/80">15 min - 2 hours</p>
            </div>
          </div>
          <div className="space-y-2">
            {middleNotes.map(note => (
              <div key={note.name} className="text-sm">
                <p className="font-medium text-foreground">{note.name}</p>
                <p className="text-xs text-foreground/60">{note.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-primary/30" />
          <div className="text-xs text-foreground/40 uppercase tracking-widest">Settles</div>
          <div className="flex-1 h-px bg-primary/30" />
        </div>

        {/* Base Notes */}
        <div className="text-center">
          <div className="mx-auto w-full bg-gradient-to-b from-primary/30 to-primary/10 rounded-b-3xl flex items-center justify-center mb-4 py-8 border border-primary/30">
            <div className="text-center">
              <p className="text-xs text-primary-foreground/90 tracking-widest uppercase font-semibold">
                Base Notes
              </p>
              <p className="text-xs text-primary-foreground/70">2+ hours</p>
            </div>
          </div>
          <div className="space-y-2">
            {baseNotes.map(note => (
              <div key={note.name} className="text-sm">
                <p className="font-medium text-foreground">{note.name}</p>
                <p className="text-xs text-foreground/60">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
