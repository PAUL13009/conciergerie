'use client'

import CardNav from './CardNav'

export default function Header() {
  const navItems = [
    {
      label: 'Services',
      bgColor: '#f8f9fa',
      textColor: '#212529',
      links: [
        { label: 'Gestion Complète', href: '#services', ariaLabel: 'Voir nos services de gestion' },
        { label: 'Nettoyage Professionnel', href: '#services', ariaLabel: 'Voir nos services de nettoyage' },
        { label: 'Accueil des Voyageurs', href: '#services', ariaLabel: 'Voir nos services d\'accueil' },
        { label: 'Photographie', href: '#services', ariaLabel: 'Voir nos services de photographie' },
      ]
    },
    {
      label: 'À propos',
      bgColor: '#e9ecef',
      textColor: '#212529',
      links: [
        { label: 'Notre équipe', href: '#about', ariaLabel: 'Découvrir notre équipe' },
        { label: 'Notre mission', href: '#about', ariaLabel: 'Découvrir notre mission' },
        { label: 'Nos valeurs', href: '#about', ariaLabel: 'Découvrir nos valeurs' },
      ]
    },
    {
      label: 'Propriétés',
      bgColor: '#dee2e6',
      textColor: '#212529',
      links: [
        { label: 'Nos propriétés', href: '#properties', ariaLabel: 'Voir nos propriétés' },
        { label: 'Témoignages', href: '#testimonials', ariaLabel: 'Voir les témoignages' },
      ]
    }
  ]

  return (
    <CardNav
      items={navItems}
      baseColor="rgba(255, 255, 255, 0.1)"
      menuColor="#fff"
      buttonBgColor="rgba(255, 255, 255, 0.2)"
      buttonTextColor="#fff"
      className="backdrop-blur-md"
    />
  )
}
