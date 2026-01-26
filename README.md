# Template Conciergerie Airbnb

Un template moderne et responsive pour un site de conciergerie Airbnb, construit avec Next.js, React et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne** : Interface élégante avec une palette de couleurs sobre
- **100% Responsive** : Optimisé pour mobile, tablette et desktop
- **Performance** : Construit avec Next.js 14 pour des performances optimales
- **TypeScript** : Code type-safe pour une meilleure maintenabilité
- **Tailwind CSS** : Styling moderne avec utilitaires CSS

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Structure du projet

```
template/
├── app/
│   ├── globals.css      # Styles globaux et Tailwind
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Page d'accueil
├── components/
│   ├── Header.tsx       # Navigation
│   ├── Hero.tsx         # Section hero
│   ├── Services.tsx     # Section services
│   ├── About.tsx        # Section à propos
│   ├── Testimonials.tsx # Témoignages
│   ├── Contact.tsx      # Formulaire de contact
│   └── Footer.tsx       # Pied de page
└── ...
```

## 🎨 Personnalisation

### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.ts` :

```typescript
colors: {
  primary: { ... },
  accent: { ... }
}
```

### Police

La police Inter est utilisée par défaut. Vous pouvez la modifier dans `app/globals.css`.

## 📱 Responsive

Le template est entièrement responsive avec des breakpoints :
- Mobile : < 640px
- Tablette : 640px - 1024px
- Desktop : > 1024px

## 🚀 Build pour production

```bash
npm run build
npm start
```

## 📄 Licence

Ce template est libre d'utilisation pour vos projets.
