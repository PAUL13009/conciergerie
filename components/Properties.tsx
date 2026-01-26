export default function Properties() {
  const properties = [
    {
      id: 1,
      category: 'VILLA PREMIUM',
      title: 'Villa Méditerranée',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
    },
    {
      id: 2,
      category: 'MAISON DE CHARME',
      title: 'Résidence Provençale',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    },
    {
      id: 3,
      category: 'APPARTEMENT LUXE',
      title: 'Loft Moderne',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    },
    {
      id: 4,
      category: 'MAISON CONTEMPORAINE',
      title: 'Villa Design',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    },
  ]

  return (
    <section id="properties" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium">
              NOS PROPRIÉTÉS
            </span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L3 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.734.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-1.254.145a1 1 0 11-.992-1.736L14.984 6l-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.723V12a1 1 0 11-2 0v-1.277l-1.246-.855a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.277l1.246.855a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.277V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Découvrir nos
            <br />
            propriétés
          </h2>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Text Overlay - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 font-medium mb-2">
                  {property.category}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {property.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
