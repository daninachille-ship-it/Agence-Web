import { client } from '@/tina/__generated__/client'
import { ConfigDocument } from '@/tina/__generated__/types'
import HomeClient from './HomeClient'
import configData from '@/content/config.json'

// Revalidate every 60 seconds — page is cached and refreshes automatically
export const revalidate = 60

const FALLBACK_VARIABLES = { relativePath: 'config.json' }

export default async function Home() {
  try {
    const { data, query, variables } = await client.queries.config({
      relativePath: 'config.json',
    })
    return <HomeClient data={data} query={query} variables={variables} />
  } catch {
    // Fallback to static JSON — still pass the real query so useTina
    // can connect with the TinaCMS admin for visual editing
    return (
      <HomeClient
        data={{ config: configData as any }}
        query={ConfigDocument}
        variables={FALLBACK_VARIABLES}
      />
    )
  }
}
