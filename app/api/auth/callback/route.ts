import { NextRequest, NextResponse } from 'next/server'

function renderScript(status: 'success' | 'error', data: object): string {
  const msg = `authorization:github:${status}:${JSON.stringify(data)}`
  return `<!DOCTYPE html><html><body><script>
    function receiveMessage(e) {
      window.opener.postMessage('${msg.replace(/'/g, "\\'")}', e.origin);
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  </script></body></html>`
}

// Step 2: Exchange code for GitHub access token
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')

  if (!code) {
    return new NextResponse(renderScript('error', { error: 'No code provided' }), {
      headers: { 'Content-Type': 'text/html' },
    })
  }

  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    })

    const data = (await response.json()) as { access_token?: string; error?: string }

    if (data.error || !data.access_token) {
      return new NextResponse(
        renderScript('error', { error: data.error || 'Failed to get token' }),
        { headers: { 'Content-Type': 'text/html' } }
      )
    }

    return new NextResponse(
      renderScript('success', { token: data.access_token, provider: 'github' }),
      { headers: { 'Content-Type': 'text/html' } }
    )
  } catch (err) {
    return new NextResponse(
      renderScript('error', { error: 'Server error' }),
      { headers: { 'Content-Type': 'text/html' } }
    )
  }
}
