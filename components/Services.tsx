'use client'

import { useState } from 'react'

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Gestion Complète',
      category: 'GESTION PROPRIÉTÉ',
      description: 'Nous commençons par comprendre vos objectifs, votre public cible et les défis actuels. Cette phase implique recherche, analyse et planification stratégique pour identifier les opportunités de maximisation de vos revenus.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Nettoyage Professionnel',
      category: 'ENTRETIEN',
      description: 'Service de nettoyage approfondi après chaque séjour pour garantir la propreté parfaite et maintenir les standards de qualité de votre propriété.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Accueil des Voyageurs',
      category: 'SERVICE CLIENT',
      description: 'Accueil personnalisé et assistance 24/7 pour vos invités tout au long de leur séjour, garantissant une expérience exceptionnelle.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 4,
      title: 'Photographie Professionnelle',
      category: 'MARKETING',
      description: 'Photos haute qualité pour mettre en valeur votre propriété et maximiser vos réservations avec un visuel attractif et professionnel.',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop',
    },
    {
      id: 5,
      title: 'Optimisation des Revenus',
      category: 'STRATÉGIE',
      description: 'Stratégies de tarification dynamique pour maximiser vos revenus et votre taux d\'occupation grâce à une analyse continue du marché.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    },
  ]

  const [activeService, setActiveService] = useState(services[0])

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 xl:gap-20">
          {/* Left Column - Image and Description */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Container */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
              />
              {/* Geometric accent block */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-500 opacity-20"></div>
            </div>

            {/* Category Sub-heading */}
            <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 font-medium mt-4">
              {activeService.category}
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-2">
              {activeService.description}
            </p>
          </div>

          {/* Right Column - Service List */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            {services.map((service, index) => {
              const isActive = service.id === activeService.id
              return (
                <div key={service.id}>
                  <button
                    onClick={() => setActiveService(service)}
                    className={`w-full text-left py-5 md:py-6 lg:py-8 transition-all duration-300 ${
                      isActive
                        ? 'text-black font-bold'
                        : 'text-gray-400 font-normal hover:text-gray-600'
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                        {service.title}
                      </span>
                      <span className="text-red-600 font-normal flex-shrink-0 relative">
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg relative top-[-0.3em]">{'{'}</span>
                        <span className="text-sm sm:text-base md:text-lg lg:text-xl relative top-[-0.2em]">{String(service.id).padStart(2, '0')}</span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-lg relative top-[-0.3em]">{'}'}</span>
                      </span>
                    </div>
                  </button>
                  {index < services.length - 1 && (
                    <div className="border-t border-gray-200"></div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
