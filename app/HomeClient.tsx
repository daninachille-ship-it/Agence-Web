'use client'

import { useTina, tinaField } from 'tinacms/dist/react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Menu from '@/components/Menu'
import Gallery from '@/components/Gallery'
import Hours from '@/components/Hours'
import Reviews from '@/components/Reviews'
import MapSection from '@/components/MapSection'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

interface HomeClientProps {
  data: any
  query: string
  variables: object
}

// Renders all sections from a config object
function HomeContent({ config, tina }: { config: any; tina?: any }) {
  const { etablissement, contact, horaires, menu, avis, images, style, textes } = config

  return (
    <>
      <ScrollReveal />

      <Nav nom={etablissement?.nom} />

      {/* Hero */}
      <div data-tina-field={tina ? tinaField(tina, 'etablissement') : undefined}>
        <Hero
          nom={etablissement?.nom}
          slogan={etablissement?.slogan}
          localisation={etablissement?.localisation}
          heroImage={images?.hero}
          heroCta={textes?.heroCta}
        />
      </div>

      {/* À propos */}
      <div data-tina-field={tina ? tinaField(tina, 'etablissement') : undefined}>
        <About
          nom={etablissement?.nom}
          description1={etablissement?.description1}
          description2={etablissement?.description2}
          annee={etablissement?.annee}
          noteGoogle={etablissement?.noteGoogle}
          nombreAvis={etablissement?.nombreAvis}
          anneesExistence={etablissement?.anneesExistence}
          aboutPrincipale={images?.aboutPrincipale}
          aboutSecondaire={images?.aboutSecondaire}
          aboutTitre={textes?.aboutTitre}
        />
      </div>

      {/* Menu */}
      <div data-tina-field={tina ? tinaField(tina, 'menu') : undefined}>
        <Menu menu={menu} menuTitre={textes?.menuTitre} />
      </div>

      {/* Galerie */}
      <div data-tina-field={tina ? tinaField(tina, 'images') : undefined}>
        <Gallery images={images?.galerie} nom={etablissement?.nom} galerieSousTitre={textes?.galerieSousTitre} />
      </div>

      {/* Horaires */}
      <div data-tina-field={tina ? tinaField(tina, 'horaires') : undefined}>
        <Hours horaires={horaires} contact={contact} horairesCta={textes?.horairesCta} />
      </div>

      {/* Avis */}
      <div data-tina-field={tina ? tinaField(tina, 'avis') : undefined}>
        <Reviews
          avis={avis}
          noteGoogle={etablissement?.noteGoogle}
          nombreAvis={etablissement?.nombreAvis}
          avisTitre={textes?.avisTitre}
        />
      </div>

      {/* Localisation */}
      <div data-tina-field={tina ? tinaField(tina, 'contact') : undefined}>
        <MapSection
          adresse={contact?.adresse}
          metro={contact?.metro}
          parking={contact?.parking}
          lienGoogleMaps={contact?.lienGoogleMaps}
          nom={etablissement?.nom}
          mapTitre={textes?.mapTitre}
        />
      </div>

      <Footer
        nom={etablissement?.nom}
        description1={etablissement?.description1}
        adresse={contact?.adresse}
        telephone={contact?.telephone}
        email={contact?.email}
        instagram={contact?.instagram}
        horaires={horaires}
        nomDomaine={style?.nomDomaine}
      />
    </>
  )
}

// Inner component — always has a valid query, safe to call useTina
function HomeWithTina({ data, query, variables }: HomeClientProps) {
  const { data: tinaData } = useTina({ query, variables, data })
  return <HomeContent config={tinaData.config} tina={tinaData.config} />
}

// Entry point — always delegates to HomeWithTina (query is always valid)
export default function HomeClient({ data, query, variables }: HomeClientProps) {
  return <HomeWithTina data={data} query={query} variables={variables} />
}
