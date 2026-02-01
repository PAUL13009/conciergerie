'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null)
  const subtitleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current

    if (!title || !subtitle) return

    // Set initial state
    gsap.set([title, subtitle], {
      y: 50,
      opacity: 0
    })

    // Animate both at the same time
    gsap.to([title, subtitle], {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      delay: 0.3
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
          alt="Villa moderne"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50"></div>
      </div>

      {/* Text Content - Centered */}
      <div className="relative z-20 w-full px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6 leading-tight drop-shadow-lg tracking-tight font-display uppercase">
            <span 
              ref={titleRef}
              className="tracking-[-0.02em] inline-block whitespace-nowrap" 
              style={{ fontWeight: 300, letterSpacing: '-0.03em' }}
            >
              SOHO Conciergerie
            </span>
            <br />
            <span 
              ref={subtitleRef}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-normal inline-block whitespace-nowrap" 
              style={{ fontWeight: 200 }}
            >
              Conciergerie Aix-Marseille
            </span>
          </h1>

          {/* CTA Button - Below Title */}
          <div className="mt-8 md:mt-10">
            <button
              onClick={() => {
                const servicesSection = document.getElementById('services')
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 rounded-lg"
            >
              Découvrir nos services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
