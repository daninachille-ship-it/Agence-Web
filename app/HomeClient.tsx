'use client'

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

export default function HomeClient() {
  const { etablissement, contact, horaires, avis, images, style } = staticConfig as any
  const menu = MENU_DATA

  return (
    <>
      <ScrollReveal />
      <Nav nom={etablissement?.nom} />
      <Hero
        nom={etablissement?.nom}
        slogan={etablissement?.slogan}
        localisation={etablissement?.localisation}
        heroImage={images?.hero}
      />
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
      <Menu menu={menu} />
      <Gallery images={images?.galerie} nom={etablissement?.nom} />
      <Hours horaires={horaires} contact={contact} />
      <Reviews
        avis={avis}
        noteGoogle={etablissement?.noteGoogle}
        nombreAvis={etablissement?.nombreAvis}
      />
      <MapSection
        adresse={contact?.adresse}
        metro={contact?.metro}
        parking={contact?.parking}
        lienGoogleMaps={contact?.lienGoogleMaps}
        nom={etablissement?.nom}
      />
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
