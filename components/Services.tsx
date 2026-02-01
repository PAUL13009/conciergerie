'use client'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Gestion Complète',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Nettoyage Professionnel',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Accueil des Voyageurs',
      image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Photographie Professionnelle',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Optimisation des Revenus',
      image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2125&auto=format&fit=crop',
    },
  ]

  return (
    <section id="services" className="section-padding bg-stone-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column - Text Content (First on mobile and desktop) */}
          <div className="flex flex-col justify-center order-1 lg:order-1">
            {/* Main Title */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-gray-900 mb-6 uppercase text-center lg:text-left">
              Services
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              De la mise en valeur visuelle à la gestion opérationnelle, nous déployons un savoir-faire complet pour maximiser vos revenus locatifs tout en offrant une expérience d'exception à vos voyageurs.
            </p>

            {/* CTA Button - Desktop only */}
            <button className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-normal rounded-lg transition-colors duration-300 w-fit">
              <span>Voir nos services</span>
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </button>
          </div>

          {/* Right Column - Service Cards Grid */}
          <div className="order-2 lg:order-2">
          <div className="grid grid-cols-6 gap-6 items-start">
            {/* Top Row - 2 Large Portrait Cards */}
            <div className="col-span-3 row-span-2">
              <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <h3 className="text-white font-semibold text-lg">{services[0].title}</h3>
                  <svg
                    className="w-5 h-5 text-white flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-span-3 row-span-2">
              <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={services[1].image}
                  alt={services[1].title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <h3 className="text-white font-semibold text-lg">{services[1].title}</h3>
                  <svg
                    className="w-5 h-5 text-white flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Row - 3 Smaller Square Cards */}
            <div className="col-span-2 row-span-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={services[2].image}
                  alt={services[2].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <h3 className="text-white font-semibold text-base">{services[2].title}</h3>
                  <svg
                    className="w-4 h-4 text-white flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-span-2 row-span-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={services[3].image}
                  alt={services[3].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <h3 className="text-white font-semibold text-base">{services[3].title}</h3>
                  <svg
                    className="w-4 h-4 text-white flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>

            <div className="col-span-2 row-span-1">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src={services[4].image}
                  alt={services[4].title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <h3 className="text-white font-semibold text-base">{services[4].title}</h3>
                  <svg
                    className="w-4 h-4 text-white flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Mobile only (below cards) */}
          <div className="lg:hidden flex justify-center mt-8">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-normal rounded-lg transition-colors duration-300">
            <span>Voir nos services</span>
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
