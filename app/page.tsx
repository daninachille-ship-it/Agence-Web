import { ConfigDocument } from '@/tina/__generated__/types'
import HomeClient from './HomeClient'
import configData from '@/content/config.json'

// Revalidate every 60 seconds — page is cached and refreshes automatically
export const revalidate = 60

const FALLBACK_VARIABLES = { relativePath: 'config.json' }

export default async function Home() {
  // Always use static JSON as data source.
  // TinaCMS Cloud is used only as a visual editing overlay via useTina.
  return (
    <HomeClient
      data={{ config: configData as any }}
      query={ConfigDocument}
      variables={FALLBACK_VARIABLES}
    />
  )
}
