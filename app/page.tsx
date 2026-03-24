import { ConfigDocument } from '@/tina/__generated__/types'
import HomeClient from './HomeClient'
import configData from '@/content/config.json'

export const revalidate = 60

export default function Home() {
  return (
    <HomeClient
      data={{ config: configData as any }}
      query={ConfigDocument}
      variables={{ relativePath: 'config.json' }}
    />
  )
}
