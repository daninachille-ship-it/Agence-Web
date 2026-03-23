'use client'

interface HoraireEntry {
  jour: string
  ouvert: boolean
  ouverture: string
  fermeture: string
}

interface HoursProps {
  horaires: HoraireEntry[]
  contact: {
    adresse: string
    telephone: string
    email: string
    instagram: string
    lienReservation: string
  }
  horairesCta?: string
}

const DAYS_FR_TO_IDX: Record<string, number> = {
  Dimanche: 0, Lundi: 1, Mardi: 2, Mercredi: 3,
  Jeudi: 4, Vendredi: 5, Samedi: 6,
}

export default function Hours({ horaires, contact, horairesCta }: HoursProps) {
  const todayIdx = new Date().getDay() // 0=Sun … 6=Sat
  const todayName = Object.entries(DAYS_FR_TO_IDX).find(([, v]) => v === todayIdx)?.[0] ?? ''

  return (
    <section id="horaires" className="bg-[#FDFAF4] py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="r text-center mb-16">
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-terra mb-3">
            Informations pratiques
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            Horaires &{' '}
            <em className="italic text-terra">Contact</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-border">

          {/* ── Left: Hours ─────────────────────────────────── */}
          <div className="r d1 p-10 md:p-14 border-b md:border-b-0 md:border-r border-border">
            <h3 className="font-playfair text-2xl font-light text-ink mb-8">
              Nos horaires
            </h3>
            <ul className="space-y-4">
              {horaires.map((h) => {
                const isToday = h.jour === todayName
                return (
                  <li
                    key={h.jour}
                    className={`flex items-center justify-between pb-4 border-b border-border/50 last:border-0 last:pb-0 ${
                      isToday ? 'text-ink' : 'text-muted'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-jost font-light w-24">{h.jour}</span>
                      {isToday && (
                        <span className="bg-terra text-[#FDFAF4] text-[10px] font-jost tracking-widest uppercase px-2 py-0.5">
                          Aujourd'hui
                        </span>
                      )}
                    </div>
                    <span className="font-jost font-light text-sm">
                      {h.ouvert
                        ? `${h.ouverture} — ${h.fermeture}`
                        : <span className="text-muted/60 italic">Fermé</span>}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ── Right: Contact ──────────────────────────────── */}
          <div className="r d2 p-10 md:p-14">
            <h3 className="font-playfair text-2xl font-light text-ink mb-8">
              Nous contacter
            </h3>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-terra mt-0.5 text-lg">⌖</span>
                <div>
                  <p className="font-jost text-xs tracking-widest uppercase text-muted mb-1">Adresse</p>
                  <p className="font-jost font-light text-ink">{contact.adresse}</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-terra mt-0.5 text-lg">☎</span>
                <div>
                  <p className="font-jost text-xs tracking-widest uppercase text-muted mb-1">Téléphone</p>
                  <a href={`tel:${contact.telephone.replace(/\s/g, '')}`}
                    className="font-jost font-light text-ink hover:text-terra transition-colors">
                    {contact.telephone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="text-terra mt-0.5 text-lg">✉</span>
                <div>
                  <p className="font-jost text-xs tracking-widest uppercase text-muted mb-1">Email</p>
                  <a href={`mailto:${contact.email}`}
                    className="font-jost font-light text-ink hover:text-terra transition-colors">
                    {contact.email}
                  </a>
                </div>
              </li>

              {contact.instagram && (
                <li className="flex items-start gap-4">
                  <span className="text-terra mt-0.5 text-lg">◈</span>
                  <div>
                    <p className="font-jost text-xs tracking-widest uppercase text-muted mb-1">Instagram</p>
                    <p className="font-jost font-light text-ink">{contact.instagram}</p>
                  </div>
                </li>
              )}
            </ul>

            {contact.lienReservation && (
              <div className="mt-10">
                <a
                  href={contact.lienReservation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-fill inline-block bg-terra text-[#FDFAF4] font-jost font-light text-sm tracking-widest uppercase px-10 py-4 border border-terra transition-colors duration-300"
                >
                  {horairesCta || 'Réserver une table'}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
