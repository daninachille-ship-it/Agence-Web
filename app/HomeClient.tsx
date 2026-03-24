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
import staticConfig from '@/content/config.json'
import cafes from '@/content/menu/cafes.json'
import brunch from '@/content/menu/brunch.json'
import boissons from '@/content/menu/boissons.json'
import douceurs from '@/content/menu/douceurs.json'

const MENU_DATA = [cafes, brunch, boissons, douceurs] as any[]

interface HomeClientProps {
  data: any
  query: string
  variables: object
}

function HomeContent({ tina }: { tina?: any }) {
  const { etablissement, contact, horaires, avis, images, style } = staticConfig as any
  const menu = MENU_DATA

  return (
    <>
      <ScrollReveal />
      <Nav nom={etablissement?.nom} />
      <div data-tina-field={tina ? tinaField(tina, 'etablissement') : undefined}>
        <Hero
          nom={etablissement?.nom}
          slogan={etablissement?.slogan}
          localisation={etablissement?.localisation}
          heroImage={images?.hero}
        />
      </div>
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
        />
      </div>
      <Menu menu={menu} />
      <div data-tina-field={tina ? tinaField(tina, 'images') : undefined}>
        <Gallery images={images?.galerie} nom={etablissement?.nom} />
      </div>
      <div data-tina-field={tina ? tinaField(tina, 'horaires') : undefined}>
        <Hours horaires={horaires} contact={contact} />
      </div>
      <div data-tina-field={tina ? tinaField(tina, 'avis') : undefined}>
        <Reviews
          avis={avis}
          noteGoogle={etablissement?.noteGoogle}
          nombreAvis={etablissement?.nombreAvis}
        />
      </div>
      <div data-tina-field={tina ? tinaField(tina, 'contact') : undefined}>
        <MapSection
          adresse={contact?.adresse}
          metro={contact?.metro}
          parking={contact?.parking}
          lienGoogleMaps={contact?.lienGoogleMaps}
          nom={etablissement?.nom}
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

function HomeWithTina({ data, query, variables }: HomeClientProps) {
  const { data: tinaData } = useTina({ query, variables, data })
  return <HomeContent tina={tinaData.config} />
}

export default function HomeClient({ data, query, variables }: HomeClientProps) {
  return <HomeWithTina data={data} query={query} variables={variables} />
}
