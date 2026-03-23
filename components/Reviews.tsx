interface Review {
  note: number
  texte: string
  auteur: string
  date: string
}

interface ReviewsProps {
  avis: Review[]
  noteGoogle: string
  nombreAvis: string
}

export default function Reviews({ avis, noteGoogle, nombreAvis }: ReviewsProps) {
  return (
    <section className="bg-cream2 py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="r flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="font-jost text-xs tracking-[0.3em] uppercase text-terra mb-3">
              Ce qu'ils en disent
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-light text-ink">
              Ils nous font <em className="italic text-terra">confiance</em>
            </h2>
          </div>
          <div className="text-right">
            <div className="font-playfair text-5xl text-terra">{noteGoogle}</div>
            <div className="text-terra text-xl mt-1">★★★★★</div>
            <p className="font-jost font-light text-muted text-sm mt-1">{nombreAvis} avis Google</p>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {avis.map((review, i) => (
            <div
              key={review.auteur}
              className={`r d${i + 1} bg-[#FDFAF4] p-8 relative`}
            >
              {/* Decorative quote mark */}
              <div className="font-playfair text-8xl text-terra/10 absolute top-4 left-6 leading-none select-none">
                "
              </div>

              {/* Stars */}
              <div className="text-terra text-sm mb-5">
                {'★'.repeat(review.note)}
              </div>

              {/* Review text */}
              <p className="font-playfair italic text-ink/80 leading-relaxed text-[1.0625rem] relative z-10 mb-8">
                « {review.texte} »
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div className="w-10 h-10 rounded-full bg-terra/20 flex items-center justify-center">
                  <span className="font-playfair text-terra font-semibold">
                    {review.auteur.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-jost font-medium text-ink text-sm">{review.auteur}</p>
                  <p className="font-jost font-light text-muted text-xs">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
