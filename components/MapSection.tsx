interface MapSectionProps {
  adresse: string
  metro: string
  transportLabel?: string
  parking: string
  lienGoogleMaps: string
  nom: string
  mapTitre?: string
}

export default function MapSection({ adresse, metro, transportLabel, parking, lienGoogleMaps, nom, mapTitre }: MapSectionProps) {
  // Build an embed URL using the address
  const encodedAddr = encodeURIComponent(adresse)
  const embedUrl = `https://maps.google.com/maps?q=${encodedAddr}&output=embed`

  return (
    <section id="trouver" className="w-full grid md:grid-cols-2 h-[480px] md:h-[520px]">

      {/* ── Left: Map iframe ─────────────────────────────────── */}
      <div className="relative h-full">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Carte Google Maps"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* ── Right: Info panel ────────────────────────────────── */}
      <div className="bg-wood flex flex-col justify-center px-12 md:px-16 py-14">
        <p className="r font-jost text-xs tracking-[0.3em] uppercase text-terra mb-4">
          Nous trouver
        </p>
        <h2 className="r d1 font-playfair text-3xl md:text-4xl font-light text-[#FDFAF4] mb-10 leading-tight">
          {mapTitre || 'Venez nous rendre visite'}
        </h2>

        <ul className="space-y-6 mb-10">
          <li className="r d2 flex items-start gap-4">
            <span className="text-terra text-lg mt-0.5">⌖</span>
            <div>
              <p className="font-jost text-xs tracking-widest uppercase text-[#FDFAF4]/40 mb-1">Adresse</p>
              <p className="font-jost font-light text-[#FDFAF4]/80 text-sm">{adresse}</p>
            </div>
          </li>

          <li className="r d3 flex items-start gap-4">
            <span className="text-terra text-lg mt-0.5">⊞</span>
            <div>
              <p className="font-jost text-xs tracking-widest uppercase text-[#FDFAF4]/40 mb-1">{transportLabel || 'Métro'}</p>
              <p className="font-jost font-light text-[#FDFAF4]/80 text-sm">{metro}</p>
            </div>
          </li>

          <li className="r d3 flex items-start gap-4">
            <svg className="text-terra mt-0.5 shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.5" y="1.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M7.5 14V6.5H11a2.75 2.75 0 0 1 0 5.5H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className="font-jost text-xs tracking-widest uppercase text-[#FDFAF4]/40 mb-1">Parking</p>
              <p className="font-jost font-light text-[#FDFAF4]/80 text-sm">{parking}</p>
            </div>
          </li>
        </ul>

        <div className="r d4">
          <a
            href={lienGoogleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-fill inline-block border border-[#FDFAF4]/30 text-[#FDFAF4] font-jost font-light text-sm tracking-widest uppercase px-10 py-4 transition-colors duration-300 hover:border-terra"
          >
            Ouvrir dans Maps
          </a>
        </div>
      </div>
    </section>
  )
}
