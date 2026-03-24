import { NextRequest, NextResponse } from 'next/server'

// Step 1: Redirect user to GitHub OAuth
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const provider = searchParams.get('provider')

  if (provider !== 'github') {
    return NextResponse.json({ error: 'Unknown provider' }, { status: 400 })
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agenceweb-nine.vercel.app'
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    redirect_uri: `${siteUrl}/api/auth/callback`,
    scope: 'repo,user',
  })

  return NextResponse.redirect(
    `https://github.com/login/oauth/authorize?${params.toString()}`
  )
}
