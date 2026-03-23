'use client'

import { useEffect } from 'react'
import { useParams } from 'next/navigation'

export default function AdminPage() {
  const params = useParams()
  const slug = params?.slug as string[] | undefined
  const hasSlug = slug && slug.length > 0

  useEffect(() => {
    if (!hasSlug) {
      window.location.replace('/admin/index.html')
    }
  }, [hasSlug])

  if (hasSlug) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            Interface non disponible
          </h1>
          <p className="text-gray-500 text-sm mb-4">
            L'interface d'administration n'a pas pu être chargée.
          </p>
          <a
            href="/admin"
            className="inline-block bg-[#B5603E] text-white text-sm font-medium px-6 py-3 hover:bg-[#8C4228] transition-colors"
          >
            Réessayer →
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <div className="text-center">
        <p className="text-gray-500 text-sm">Redirection vers l'administration…</p>
      </div>
    </div>
  )
}
