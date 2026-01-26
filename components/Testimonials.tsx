export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sophie Martin',
      role: 'Propriétaire à Paris',
      content: 'Service exceptionnel ! Ils gèrent ma propriété depuis 2 ans et mes revenus ont augmenté de 40%. Je recommande vivement.',
      rating: 5,
    },
    {
      name: 'Jean Dupont',
      role: 'Investisseur immobilier',
      content: 'Équipe professionnelle et réactive. Ils ont transformé ma location en une source de revenus stable et sans stress.',
      rating: 5,
    },
    {
      name: 'Marie Leclerc',
      role: 'Propriétaire à Lyon',
      content: 'Leur service de nettoyage est impeccable et leurs hôtes sont toujours ravis. Un vrai gain de temps pour moi !',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-primary-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité absolue
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-primary-50 rounded-2xl p-8 border border-primary-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-primary-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-primary-200 pt-4">
                <div className="font-bold text-primary-900">{testimonial.name}</div>
                <div className="text-sm text-primary-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
