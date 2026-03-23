import { client } from '@/tina/__generated__/client'
import HomeClient from './HomeClient'
import configData from '@/content/config.json'

// Revalidate every 60 seconds — page is cached and refreshes automatically
export const revalidate = 60

export default async function Home() {
  try {
    const { data, query, variables } = await client.queries.config({
      relativePath: 'config.json',
    })
    return <HomeClient data={data} query={query} variables={variables} />
  } catch {
    // Fallback to static JSON if TinaCloud unavailable
    return (
      <HomeClient
        data={{ config: configData as any }}
        query=""
        variables={{}}
      />
    )
  }
}
