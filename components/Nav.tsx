'use client'

import { useEffect, useState } from 'react'

interface NavProps {
  nom: string
}

export default function Nav({ nom }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Histoire', href: '#histoire' },
    { label: 'Carte', href: '#carte' },
    { label: 'Galerie', href: '#galerie' },
    { label: 'Horaires', href: '#horaires' },
    { label: 'Trouver', href: '#trouver' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={`font-playfair text-xl font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-ink' : 'text-[#FDFAF4]'
          }`}
        >
          {nom}
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-jost text-sm font-light tracking-widest uppercase transition-colors duration-300 hover:text-terra ${
                  scrolled ? 'text-ink' : 'text-[#FDFAF4]/80'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
