export default function Footer() {
  return (
    <footer className="bg-black py-16 lg:py-20">
      <div className="container-custom">
        {/* Top Row - Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 mb-5">
          <a href="#services" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
            Services
          </a>
          <a href="#about" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
            À propos
          </a>
          <a href="#properties" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
            Tarifs
          </a>
          <a href="#testimonials" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
            FAQ
          </a>
          <a href="#contact" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
            Contact
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1"
          >
            Twitter
            <svg
              className="w-3 h-3"
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
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base inline-flex items-center gap-1"
          >
            LinkedIn
            <svg
              className="w-3 h-3"
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
          </a>
        </div>

        {/* Bottom Row - Privacy Policy */}
        <div className="flex justify-center">
          <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm sm:text-base">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  )
}
