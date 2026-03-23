'use client'

import { TinaProvider, TinaCMS } from 'tinacms'

export default function AdminPage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">
            Interface d'administration
          </h1>
          <p className="text-gray-500 mb-6 text-sm leading-relaxed">
            L'interface Tina CMS est accessible via la route <code className="bg-gray-100 px-1 py-0.5 rounded">/admin/index.html</code> après avoir lancé le serveur de développement avec <code className="bg-gray-100 px-1 py-0.5 rounded">npm run dev</code>.
          </p>
          <a
            href="/admin/index.html"
            className="inline-block bg-[#B5603E] text-white text-sm font-medium px-6 py-3 hover:bg-[#8C4228] transition-colors"
          >
            Accéder à l'administration →
          </a>
        </div>
      </div>
    </div>
  )
}
