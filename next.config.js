/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tina.io',
      },
    ],
  },
  async rewrites() {
    return [
      // Serve TinaCMS admin SPA for all /admin/* routes
      {
        source: '/admin/:path*',
        destination: '/admin/index.html',
      },
    ]
  },
}

module.exports = nextConfig
