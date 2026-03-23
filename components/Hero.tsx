'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  nom: string
  slogan: string
  localisation: string
  heroImage: string
  heroCta?: string
}

export default function Hero({ nom, slogan, localisation, heroImage, heroCta }: HeroProps) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with zoom animation */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-end pb-20 px-8 md:px-16">
        <div className="flex w-full items-end justify-between max-w-7xl mx-auto">
          {/* Left: title block */}
          <div className="max-w-2xl">
            {/* Location tag */}
            <div
              className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="text-[#FDFAF4]/60 font-jost text-xs tracking-[0.25em] uppercase">
                ✦ {localisation}
              </span>
            </div>

            {/* H1 */}
            <h1
              className={`font-playfair text-5xl md:text-7xl font-light text-[#FDFAF4] leading-tight mb-4 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              {nom.split(' ').slice(0, 1)}{' '}
              <span className="italic text-[#D9C9AE]">
                {nom.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            {/* Slogan */}
            <p
              className={`font-jost font-light text-[#FDFAF4]/70 text-lg md:text-xl tracking-wide transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              {slogan}
            </p>
          </div>

          {/* Right: CTA button */}
          <div
            className={`hidden md:block transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.8s' }}
          >
            <a
              href="#carte"
              className="btn-fill inline-block bg-terra text-[#FDFAF4] font-jost font-light text-sm tracking-widest uppercase px-10 py-4 border border-terra transition-colors duration-300"
            >
              {heroCta || 'Voir la carte'}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.2s' }}
      >
        <span className="text-[#FDFAF4]/40 font-jost text-xs tracking-widest uppercase">Scroll</span>
        <div className="animate-scroll-bounce w-px h-8 bg-gradient-to-b from-[#FDFAF4]/40 to-transparent" />
      </div>
    </section>
  )
}
