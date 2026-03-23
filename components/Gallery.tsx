interface GalleryProps {
  images: string[]
  nom: string
  galerieSousTitre?: string
}

export default function Gallery({ images, nom, galerieSousTitre }: GalleryProps) {
  const [img1, img2, img3, img4, img5] = images

  return (
    <section id="galerie" className="bg-ink py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="r flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-light text-[#FDFAF4] leading-tight">
            L'atmosphère{' '}
            <em className="italic text-[#D9C9AE]">Maison Blend</em>
          </h2>
          <p className="font-jost font-light text-muted text-sm max-w-xs md:text-right leading-relaxed">
            {galerieSousTitre || 'Un espace pensé pour que chaque moment soit mémorable.'}
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 h-[520px] md:h-[600px]">

          {/* Large image — spans 2 rows on left */}
          <div className="gallery-item relative overflow-hidden row-span-2 r d1">
            <img
              src={img1 || '/images/gallery-1.jpg'}
              alt="Galerie 1"
              className="w-full h-full object-cover"
            />
            <div className="overlay" />
          </div>

          {/* Top-right: 2 images side by side on medium+ */}
          <div className="gallery-item relative overflow-hidden r d2">
            <img
              src={img2 || '/images/gallery-2.jpg'}
              alt="Galerie 2"
              className="w-full h-full object-cover"
            />
            <div className="overlay" />
          </div>

          <div className="gallery-item relative overflow-hidden r d3">
            <img
              src={img3 || '/images/gallery-3.jpg'}
              alt="Galerie 3"
              className="w-full h-full object-cover"
            />
            <div className="overlay" />
          </div>

          {/* Bottom-right: 2 images side by side */}
          <div className="gallery-item relative overflow-hidden r d3">
            <img
              src={img4 || '/images/gallery-4.jpg'}
              alt="Galerie 4"
              className="w-full h-full object-cover"
            />
            <div className="overlay" />
          </div>

          <div className="gallery-item relative overflow-hidden r d4">
            <img
              src={img5 || '/images/gallery-5.jpg'}
              alt="Galerie 5"
              className="w-full h-full object-cover"
            />
            <div className="overlay" />
          </div>
        </div>
      </div>
    </section>
  )
}
