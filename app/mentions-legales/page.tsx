import configData from '@/content/config.json'
import Link from 'next/link'

export const metadata = {
  title: `Mentions légales — ${configData.etablissement.nom}`,
}

export default function MentionsLegales() {
  const { etablissement, mentionsLegales: ml } = configData as any
  const year = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-[#FDFAF4]">

      {/* ── Header ──────────────────────────────────────────── */}
      <header className="bg-ink py-6 px-6 md:px-16">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-playfair text-xl font-semibold text-[#FDFAF4] hover:text-terra transition-colors">
            {etablissement.nom}
          </Link>
          <Link href="/" className="font-jost text-xs tracking-widest uppercase text-[#FDFAF4]/50 hover:text-terra transition-colors">
            ← Retour
          </Link>
        </div>
      </header>

      {/* ── Content ─────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 md:px-16 py-20">

        <p className="font-jost text-xs tracking-[0.3em] uppercase text-terra mb-4">Informations légales</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-light text-ink mb-16 leading-tight">
          Mentions légales
        </h1>

        <div className="space-y-12">

          {/* Éditeur */}
          <section>
            <h2 className="font-jost text-xs tracking-[0.25em] uppercase text-ink/40 mb-5 pb-3 border-b border-ink/10">
              Éditeur du site
            </h2>
            <dl className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:gap-8">
                <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">Raison sociale</dt>
                <dd className="font-jost font-light text-sm text-ink/80">{ml?.editeurNom || etablissement.nom}</dd>
              </div>
              {ml?.editeurStatut && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">Forme juridique</dt>
                  <dd className="font-jost font-light text-sm text-ink/80">{ml.editeurStatut}</dd>
                </div>
              )}
              {ml?.editeurCapital && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">Capital social</dt>
                  <dd className="font-jost font-light text-sm text-ink/80">{ml.editeurCapital}</dd>
                </div>
              )}
              {ml?.editeurSiret && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">SIRET</dt>
                  <dd className="font-jost font-light text-sm text-ink/80">{ml.editeurSiret}</dd>
                </div>
              )}
              {ml?.editeurAdresse && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">Adresse</dt>
                  <dd className="font-jost font-light text-sm text-ink/80">{ml.editeurAdresse}</dd>
                </div>
              )}
              {ml?.directeurPublication && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">Directeur de publication</dt>
                  <dd className="font-jost font-light text-sm text-ink/80">{ml.directeurPublication}</dd>
                </div>
              )}
            </dl>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="font-jost text-xs tracking-[0.25em] uppercase text-ink/40 mb-5 pb-3 border-b border-ink/10">
              Hébergement
            </h2>
            <dl className="space-y-3">
              {ml?.hebergeurNom && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">Hébergeur</dt>
                  <dd className="font-jost font-light text-sm text-ink/80">{ml.hebergeurNom}</dd>
                </div>
              )}
              {ml?.hebergeurAdresse && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">Adresse</dt>
                  <dd className="font-jost font-light text-sm text-ink/80">{ml.hebergeurAdresse}</dd>
                </div>
              )}
              {ml?.hebergeurSite && (
                <div className="flex flex-col sm:flex-row sm:gap-8">
                  <dt className="font-jost text-sm text-ink/40 sm:w-48 shrink-0">Site web</dt>
                  <dd className="font-jost font-light text-sm text-ink/80">
                    <a href={ml.hebergeurSite} target="_blank" rel="noopener noreferrer"
                      className="hover:text-terra transition-colors">
                      {ml.hebergeurSite}
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="font-jost text-xs tracking-[0.25em] uppercase text-ink/40 mb-5 pb-3 border-b border-ink/10">
              Propriété intellectuelle
            </h2>
            <p className="font-jost font-light text-sm text-ink/70 leading-relaxed">
              L'ensemble des contenus présents sur ce site (textes, images, visuels) sont la propriété exclusive de {ml?.editeurNom || etablissement.nom} et sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est strictement interdite.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="font-jost text-xs tracking-[0.25em] uppercase text-ink/40 mb-5 pb-3 border-b border-ink/10">
              Données personnelles
            </h2>
            <p className="font-jost font-light text-sm text-ink/70 leading-relaxed">
              Ce site ne collecte aucune donnée personnelle à des fins commerciales. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant en nous contactant à l'adresse indiquée ci-dessus.
            </p>
          </section>

          {/* Texte complémentaire */}
          {ml?.texteComplementaire && (
            <section>
              <h2 className="font-jost text-xs tracking-[0.25em] uppercase text-ink/40 mb-5 pb-3 border-b border-ink/10">
                Informations complémentaires
              </h2>
              <p className="font-jost font-light text-sm text-ink/70 leading-relaxed whitespace-pre-line">
                {ml.texteComplementaire}
              </p>
            </section>
          )}

        </div>

        {/* ── Footer mini ─────────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-ink/10">
          <p className="font-jost font-light text-xs text-ink/30">
            © {year} {etablissement.nom}. Tous droits réservés.
          </p>
        </div>

      </main>
    </div>
  )
}
