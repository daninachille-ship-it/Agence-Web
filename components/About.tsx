interface AboutProps {
  nom: string
  description1: string
  description2: string
  annee: string
  noteGoogle: string
  nombreAvis: string
  anneesExistence: string
  aboutPrincipale: string
  aboutSecondaire: string
}

export default function About({
  nom,
  description1,
  description2,
  annee,
  noteGoogle,
  nombreAvis,
  anneesExistence,
  aboutPrincipale,
  aboutSecondaire,
}: AboutProps) {
  return (
    <section id="histoire" className="bg-[#FDFAF4] py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ── Left: Photos ─────────────────────────────────────── */}
        <div className="relative r d1">
          {/* Main photo */}
          <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img
              src={aboutPrincipale}
              alt="Intérieur du café"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Vertical year tag — outside overflow-hidden to avoid clipping */}
          <div className="absolute top-8 -left-4 flex items-center">
            <div className="bg-terra px-3 py-6 flex items-center justify-center"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
            >
              <span className="font-jost text-xs tracking-[0.3em] text-[#FDFAF4] uppercase">
                Depuis {annee}
              </span>
            </div>
          </div>

          {/* Floating secondary photo */}
          <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-56 md:h-56 overflow-hidden border-4 border-[#FDFAF4] shadow-xl">
            <img
              src={aboutSecondaire}
              alt="Détail café"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative square */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border border-border opacity-50 -z-10" />
        </div>

        {/* ── Right: Text ──────────────────────────────────────── */}
        <div>
          {/* Eyebrow */}
          <p className="r d1 font-jost text-xs tracking-[0.3em] uppercase text-terra mb-4">
            Notre histoire
          </p>

          {/* Title */}
          <h2 className="r d2 font-playfair text-4xl md:text-5xl font-light text-ink leading-tight mb-8">
            L'art du café,{' '}
            <em className="italic text-terra font-light">chaque matin</em>
          </h2>

          {/* Paragraphs */}
          <p className="r d2 font-jost font-light text-muted leading-relaxed mb-5 text-[1.0625rem]">
            {description1}
          </p>
          <p className="r d3 font-jost font-light text-muted leading-relaxed text-[1.0625rem]">
            {description2}
          </p>

          {/* Separator */}
          <div className="r d3 my-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-terra text-lg">✦</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Stats */}
          <div className="r d4 grid grid-cols-3 gap-6">
            {[
              { value: noteGoogle, label: 'Note Google', suffix: '★' },
              { value: nombreAvis, label: 'Avis clients', suffix: '' },
              { value: anneesExistence, label: 'Au service du quartier', suffix: '' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-playfair text-3xl font-light text-terra">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-2xl ml-1">{stat.suffix}</span>
                  )}
                </p>
                <p className="font-jost text-xs font-light text-muted mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
