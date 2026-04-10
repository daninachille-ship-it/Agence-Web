interface HoraireEntry {
  jour: string
  ouvert: boolean
  ouverture: string
  fermeture: string
}

interface FooterProps {
  nom: string
  description1: string
  adresse: string
  telephone: string
  email: string
  instagram: string
  horaires: HoraireEntry[]
  nomDomaine: string
}

export default function Footer({
  nom,
  description1,
  adresse,
  telephone,
  email,
  instagram,
  horaires,
  nomDomaine,
}: FooterProps) {
  const year = new Date().getFullYear()

  const navLinks = [
    { label: 'Notre histoire', href: '#histoire' },
    { label: 'La carte', href: '#carte' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Horaires', href: '#horaires' },
    { label: 'Nous trouver', href: '#trouver' },
  ]

  // Weekend hours summary
  const weekHours = horaires.slice(0, 5)
  const weekend = horaires.slice(5)

  return (
    <footer className="bg-ink pt-20 pb-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* ── 4-column grid ─────────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-12 pb-16 border-b border-[#FDFAF4]/10">

          {/* Col 1: Brand */}
          <div className="col-span-2 md:col-span-1 pb-4 md:pb-0 border-b border-[#FDFAF4]/10 md:border-none">
            <a href="#" className="font-playfair text-xl font-semibold text-[#FDFAF4] block mb-4">
              {nom}
            </a>
            <p className="font-jost font-light text-[#FDFAF4]/40 text-sm leading-relaxed mb-6">
              {description1.length > 120 ? description1.slice(0, 120) + '…' : description1}
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {instagram && (
                <a
                  href={`https://instagram.com/${instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-[#FDFAF4]/20 flex items-center justify-center text-[#FDFAF4]/50 hover:border-terra hover:text-terra transition-colors text-sm"
                  aria-label="Instagram"
                >
                  ◈
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-jost text-xs tracking-[0.25em] uppercase text-[#FDFAF4]/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-jost font-light text-[#FDFAF4]/60 text-sm hover:text-terra transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-jost text-xs tracking-[0.25em] uppercase text-[#FDFAF4]/40 mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <p className="font-jost font-light text-[#FDFAF4]/60 text-sm">{adresse}</p>
              </li>
              <li>
                <a href={`tel:${telephone.replace(/\s/g, '')}`}
                  className="font-jost font-light text-[#FDFAF4]/60 text-sm hover:text-terra transition-colors">
                  {telephone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`}
                  className="font-jost font-light text-[#FDFAF4]/60 text-sm hover:text-terra transition-colors">
                  {email}
                </a>
              </li>
              {instagram && (
                <li>
                  <p className="font-jost font-light text-[#FDFAF4]/60 text-sm">{instagram}</p>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4: Hours summary */}
          <div>
            <h4 className="font-jost text-xs tracking-[0.25em] uppercase text-[#FDFAF4]/40 mb-6">Horaires</h4>
            <ul className="space-y-2">
              {horaires.slice(0, 5).length > 0 && (
                <li className="flex justify-between gap-4">
                  <span className="font-jost font-light text-[#FDFAF4]/60 text-sm">Lun — Ven</span>
                  <span className="font-jost font-light text-[#FDFAF4]/40 text-sm">
                    {horaires[0]?.ouvert ? `${horaires[0].ouverture}–${horaires[0].fermeture}` : 'Fermé'}
                  </span>
                </li>
              )}
              {horaires[5] && (
                <li className="flex justify-between gap-4">
                  <span className="font-jost font-light text-[#FDFAF4]/60 text-sm">Samedi</span>
                  <span className="font-jost font-light text-[#FDFAF4]/40 text-sm">
                    {horaires[5].ouvert ? `${horaires[5].ouverture}–${horaires[5].fermeture}` : 'Fermé'}
                  </span>
                </li>
              )}
              {horaires[6] && (
                <li className="flex justify-between gap-4">
                  <span className="font-jost font-light text-[#FDFAF4]/60 text-sm">Dimanche</span>
                  <span className="font-jost font-light text-[#FDFAF4]/40 text-sm">
                    {horaires[6].ouvert ? `${horaires[6].ouverture}–${horaires[6].fermeture}` : 'Fermé'}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* ── Copyright ─────────────────────────────────────── */}
        <div className="pt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <p className="font-jost font-light text-[#FDFAF4]/30 text-xs">
              © {year} {nom} — {nomDomaine}. Tous droits réservés.
            </p>
            <a href="/mentions-legales" className="font-jost font-light text-[#FDFAF4]/30 text-xs hover:text-terra transition-colors">
              Mentions légales
            </a>
          </div>
          <p className="font-jost font-light text-[#FDFAF4]/20 text-xs">
            Site réalisé par{' '}
            <span className="text-terra/60">AURELYS STUDIO</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
