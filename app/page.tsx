import { ConfigDocument, MenuCategorieDocument } from '@/tina/__generated__/types'
import HomeClient from './HomeClient'
import configData from '@/content/config.json'
import cafesData from '@/content/menu/cafes.json'
import brunchData from '@/content/menu/brunch.json'
import boissonsData from '@/content/menu/boissons.json'
import douceursData from '@/content/menu/douceurs.json'

export const revalidate = 60

export default function Home() {
  return (
    <HomeClient
      data={{ config: configData as any }}
      query={ConfigDocument}
      variables={{ relativePath: 'config.json' }}
      menuQuery={MenuCategorieDocument}
      menuDataCafes={{ menuCategorie: cafesData as any }}
      menuDataBrunch={{ menuCategorie: brunchData as any }}
      menuDataBoissons={{ menuCategorie: boissonsData as any }}
      menuDataDouceurs={{ menuCategorie: douceursData as any }}
    />
  )
}
