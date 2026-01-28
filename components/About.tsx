export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Title - Top Right */}
        <div className="flex justify-center lg:justify-end mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Pourquoi nous choisir ?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Équipe SOHO Conciergerie"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 space-y-8 lg:space-y-10">
            {/* Top Text Block - Main Statement */}
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
                Nous sommes une équipe de professionnels passionnés qui croyons en la création d'expériences mémorables pour vos voyageurs. Notre histoire est construite sur l'excellence du service, l'innovation dans la gestion et la volonté de transformer chaque location en une expérience exceptionnelle.
              </p>
            </div>

            {/* Middle Text Block - Process/Inquiry */}
            <div className="pt-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Nous nous demandons : Quel est votre objectif de revenus ? Qui sont vos voyageurs cibles ? Comment rendre leur séjour parfait ? Nous commençons par comprendre vos besoins, vos attentes et votre vision pour optimiser votre propriété.
              </p>
            </div>

            {/* Bottom Text Block - Mission/Testimonial */}
            <div className="pt-4">
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                Nous visons à rassembler expertise locale, technologie moderne et service client d'exception, transformant chaque propriété en une source de revenus optimale et une expérience inoubliable pour vos invités.
              </p>

              {/* Author Section */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&w=100&h=100"
                    alt="Sophie Martin"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base sm:text-lg font-bold text-gray-900">
                    Sophie Martin
                  </div>
                  <div className="text-sm sm:text-base text-gray-600">
                    Directrice Générale
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
