import type { Metadata } from 'next'
import './globals.css'
import configData from '@/content/config.json'

const seo = (configData as any).seo

export const metadata: Metadata = {
  title: seo?.titre || `${configData.etablissement.nom} — ${configData.etablissement.slogan}`,
  description: seo?.description || configData.etablissement.description1,
  openGraph: {
    title: seo?.titre || `${configData.etablissement.nom} — ${configData.etablissement.slogan}`,
    description: seo?.description || configData.etablissement.description1,
    images: seo?.ogImage ? [{ url: seo.ogImage }] : [],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Jost:wght@200;300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
