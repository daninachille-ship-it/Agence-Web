'use client'

import { useState } from 'react'

interface MenuItem {
  nom: string
  description: string
  prix: string
}

interface MenuCategory {
  categorie: string
  note: string
  items: MenuItem[]
}

interface MenuProps {
  menu: MenuCategory[]
  menuTitre?: string
}

export default function Menu({ menu, menuTitre }: MenuProps) {
  const [activeTab, setActiveTab] = useState(0)

  const current = menu[activeTab]

  return (
    <section id="carte" className="bg-cream py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="r text-center mb-14">
          <p className="font-jost text-xs tracking-[0.3em] uppercase text-terra mb-3">
            À la carte
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
            {menuTitre || 'Ce que nous préparons'}
          </h2>
        </div>

        {/* Tabs */}
        <div className="r d1 flex flex-wrap justify-center gap-1 mb-12">
          {menu.map((cat, i) => (
            <button
              key={cat.categorie}
              onClick={() => setActiveTab(i)}
              className={`relative font-jost text-sm font-light tracking-widest uppercase px-8 py-3 transition-colors duration-300 ${
                activeTab === i
                  ? 'bg-terra text-[#FDFAF4]'
                  : 'text-muted hover:text-ink border border-border hover:border-terra/50'
              }`}
            >
              {cat.categorie}
            </button>
          ))}
        </div>

        {/* Grid */}
        {current && (
          <div key={current.categorie}>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {current.items.map((item, i) => (
                <div
                  key={item.nom}
                  className={`menu-card relative bg-[#FDFAF4] p-6 flex justify-between items-start gap-4 overflow-hidden r d${Math.min(i + 1, 4)}`}
                >
                  <div className="flex-1">
                    <h3 className="font-playfair text-lg font-medium text-ink mb-1">
                      {item.nom}
                    </h3>
                    <p className="font-jost font-light text-muted text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-playfair text-terra font-medium whitespace-nowrap">
                    {item.prix}
                  </span>
                </div>
              ))}
            </div>

            {/* Category note */}
            {current.note && (
              <div className="r bg-wood px-6 py-4 mt-2">
                <p className="font-jost font-light text-cream text-sm leading-relaxed">
                  <span className="text-terra mr-2">✦</span>
                  {current.note}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
