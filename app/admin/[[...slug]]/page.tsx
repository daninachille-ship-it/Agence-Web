'use client'

import { useEffect } from 'react'

// Redirect all /admin/* routes to the TinaCMS admin SPA
export default function AdminPage() {
  useEffect(() => {
    window.location.replace('/admin/index.html')
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
      <div className="text-center">
        <p className="text-gray-500 text-sm">Redirection vers l'administration…</p>
      </div>
    </div>
  )
}

