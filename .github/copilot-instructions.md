# MediaPrestige AI Coding Agent Instructions

## Project Overview
**MediaPrestige** is a premium audio equipment distributor website built with React, TypeScript, Vite, and Tailwind CSS. It showcases Bose/JBL professional audio solutions for hotels, restaurants, events, and residential customers.

## Core Architecture

### App Structure (src/App.tsx)
- **Routing**: React Router v7 with **lazy-loaded pages** for code splitting
- **Context Providers**: Wrapped in this order: `ThemeProvider` → `LanguageProvider`
- **Suspense**: LoadingSpinner shows during page transitions
- **Key Routes**: `/`, `/products/:id`, `/categories`, `/about`, `/contact`, `/services`, `/solutions`
- ChatBot component available on all pages

### Context System
**Two core contexts** (avoid adding more without discussion):

1. **LanguageContext** (`src/contexts/LanguageContext.tsx`)
   - States: `language: 'fr' | 'en'`, `t: (key: string) => string`
   - Bilingual translations object with 50+ keys
   - Usage: `const { language, t } = useLanguage()`
   - Component access: `{language === 'fr' ? nameFr : nameEn}` for category/product bilingual fields

2. **ThemeContext** (`src/contexts/ThemeContext.tsx`)
   - States: `theme: 'light' | 'dark'`, `toggleTheme()`
   - Adds/removes `dark` class on `document.documentElement`
   - Less utilized currently; theme is primarily light-mode

### Data Models
**Use these TypeScript interfaces** (in [src/data](src/data)):

```typescript
// Category (src/data/categories.ts)
interface Category {
  id: string;
  nameFr/nameEn: string;  // Bilingual fields
  descriptionFr/descriptionEn: string;
  image: string;          // WebP path: /products/*.webp
  suitableProducts: string[];  // Product IDs
  features, featuresFr, featuresEn: string[];
}

// Product (src/data/products.ts)
interface Product {
  id: string;
  name: string;
  descriptionFr/descriptionEn: string;
  image: string;  // WebP path
}
```
Data is static; no backend API exists yet. Data lives in [src/data/](src/data/) files, not components.

## Development Workflow

### Build & Run
```bash
npm run dev      # Vite dev server on http://localhost:5173
npm run build    # Production build → dist/
npm run lint     # ESLint check
npm run typecheck # TypeScript validation
```

### Vite Configuration (vite.config.ts)
- **Code splitting**: vendor + router chunks
- **CSS**: Inlined (single stylesheet, no render-blocking)
- **Chunk size**: 1000KB limit
- **Image minification**: Via vite-plugin-imagemin

### TypeScript
- `tsconfig.app.json` for app code
- `tsconfig.node.json` for build config
- Strict mode enabled; avoid `any` types

## Component Patterns

### Page Components (src/pages/)
- **Lazy-loaded** via dynamic imports in App.tsx
- Use **LanguageContext** for translations (`t()` function)
- Compose smaller reusable components
- Example: [src/pages/Home.tsx](src/pages/Home.tsx) imports Header, Hero3D, Products, Footer

### Presentational Components (src/components/)
- **Header.tsx**: Navigation bar with language toggle, mobile menu, scroll detection
- **Footer.tsx**: Standard footer with contact info
- **Products.tsx**, **Services.tsx**: Reusable product/service card grids
- **Hero3D.tsx**: Hero section (3D/visual element)
- **AnimatedProductBar.tsx**: Scrolling carousel/animation
- **ChatBot.tsx**: Support widget available globally

### Styling Conventions
- **Tailwind CSS** for all styling (no CSS modules or styled-components)
- **Custom fonts**: Orbitron (`font-orbitron`) for headings
- **Color scheme**:
  - Primary accents: `teal-400`/`blue-400` (HEAD branch) or `yellow-400`/`yellow-600` (active branch)
  - Backgrounds: white, black, gray gradients
  - Hover effects: `-translate-y-3`, `shadow-2xl`, color transitions
- **Animations**: `animate-pulse`, `animate-slow-pulse`, `animate-slow-bounce` (defined in [src/index.css](src/index.css))
- Responsive: `md:`, `lg:` breakpoints standard

## Git & Merge Conflicts

### Current State
**Repository has unresolved merge conflicts** in:
- [src/pages/Home.tsx](src/pages/Home.tsx) (color scheme: teal vs yellow)
- [src/pages/Solutions.tsx](src/pages/Solutions.tsx)
- [src/data/categories.ts](src/data/categories.ts) (bilingual fields)

**Conflicts markers format**:
```
<<<<<<< HEAD          (current branch: teal theme)
...
=======
...                   (incoming: yellow theme, full i18n)
>>>>>>> 5234a5030048d41e46a3457db876356da86abd6a
```

**When resolving**: Prioritize the `HEAD` branch unless specifically asked otherwise. Test color scheme consistency after merge.

## Key Files Reference

| File | Purpose |
|------|---------|
| [src/App.tsx](src/App.tsx) | Router setup, lazy loading |
| [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx) | i18n translations |
| [src/data/categories.ts](src/data/categories.ts) | Category data + types |
| [src/data/products.ts](src/data/products.ts) | Product data + types |
| [src/components/Header.tsx](src/components/Header.tsx) | Navigation, theme toggle |
| [src/index.css](src/index.css) | Custom animations, Tailwind imports |
| [tailwind.config.js](tailwind.config.js) | Tailwind theme (fonts, spacing, etc.) |
| [vite.config.ts](vite.config.ts) | Build settings, code splitting |

## Common Tasks

### Adding a New Product
1. Add entry to `products` array in [src/data/products.ts](src/data/products.ts)
2. Add WebP image to `/public/products/`
3. Update category's `suitableProducts` array in [src/data/categories.ts](src/data/categories.ts)
4. If new translation keys needed, add to `translations.fr` and `translations.en` in [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx)

### Adding a New Page
1. Create page file in [src/pages/](src/pages/)
2. Add lazy-loaded import + route in [src/App.tsx](src/App.tsx)
3. Add navigation link in [src/components/Header.tsx](src/components/Header.tsx)
4. Add translation keys to context

### Styling Updates
- Modify Tailwind classes directly (no CSS files except animations)
- Check [tailwind.config.js](tailwind.config.js) for custom theme values
- Test responsive breakpoints: mobile-first, use `md:` and `lg:` prefixes

## Known Limitations & Notes

- **No backend**: All data is static (categories, products)
- **No testing framework**: Jest/Vitest not configured
- **ThemeContext underutilized**: Mostly light-mode theme
- **No CMS**: Content managed directly in `.ts` files
- **No analytics**: Google Analytics not integrated (ready for integration)
- **Mobile menu**: Header uses simple state toggle, consider animation library if enhancing

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react-router-dom | ^7.10.1 | Page routing |
| lucide-react | ^0.460.0 | Icons |
| tailwindcss | ^3.4.1 | Styling |
| vite | ^5.4.2 | Build tool |
| typescript | ^5.5.3 | Type checking |

## Quick Debugging Checklist

- **Page not loading?** Check lazy-loading in [src/App.tsx](src/App.tsx), ensure route exists
- **Translation missing?** Key must exist in both `translations.fr` and `translations.en`
- **Styling broken?** Check Tailwind class names, ensure CSS is in `index.css` or inline Tailwind
- **Merge conflict?** Check Home.tsx and Solutions.tsx for conflict markers, resolve to HEAD unless specified
- **Build error?** Run `npm run typecheck` to catch TypeScript issues before build

---
Last updated: January 27, 2026
