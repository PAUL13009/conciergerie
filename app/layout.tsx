import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOHO Conciergerie - Conciergerie Aix-Marseille',
  description: 'Services de conciergerie premium pour vos locations Airbnb à Aix-Marseille',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
