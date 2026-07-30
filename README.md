# Vivo Connect — Concept Landing Page

**Live Website:** [https://vivo-page.vercel.app/](https://vivo-page.vercel.app/)

A premium, responsive frontend landing page inspired by the visual language of Vivo, a Brazilian telecommunications company.

The project presents a conceptual digital experience for mobile plans, 5G connectivity, fiber internet, smartphones, entertainment, and integrated services. It was created as a frontend demonstration and is not affiliated with, endorsed by, or connected to Vivo.

## Project Overview

The landing page is designed to communicate speed, connectivity, technology, mobility, and simplicity through a modern visual system. It combines deep purple tones, violet and magenta gradients, translucent surfaces, controlled lighting effects, rounded layouts, and responsive imagery.

The page includes:

- A responsive header and animated mobile navigation
- An animated hero section
- Connectivity benefits
- Mobile and 5G plan cards
- An interactive smartphone showcase
- A Vivo Fibra-inspired section
- An integrated services ecosystem section
- Digital benefit cards
- An accessible FAQ accordion
- A final call-to-action section
- A complete responsive footer

All plan names, benefits, descriptions, and calls to action are demonstrative. The application does not contain real commercial offers or official product conditions.

## Main Technologies

### Next.js

The application uses Next.js with the App Router architecture.

Next.js provides:

- Static page generation
- Optimized production builds
- Local image optimization
- Metadata and Open Graph configuration
- Font optimization through `next/font`
- A clear separation between Server and Client Components

### React

React is used to build the component-based interface and manage interactive UI elements such as:

- Mobile navigation
- Smartphone filters
- FAQ accordion state
- Scroll and pointer interactions
- Motion preferences

### TypeScript

The entire application is written in TypeScript with strict type checking enabled.

TypeScript is used for:

- Component properties
- Landing page content models
- Animation variants
- Plan, FAQ, and benefit data
- Safer integration with React and animation libraries

### Tailwind CSS

Tailwind CSS is the primary styling solution.

It is used for:

- Responsive layouts
- Typography
- Color and gradient systems
- Spacing and sizing
- Borders and shadows
- Focus states
- Mobile-first breakpoints
- Reduced-motion behavior

The project also includes a small global stylesheet for document-level behavior, text selection, smooth scrolling, and accessibility preferences.

## Animation Libraries

### Motion for React

The main animation system uses the `motion` package with imports from:

```tsx
import { motion } from "motion/react";
```

The project does not import directly from the legacy `framer-motion` package.

Motion for React handles:

- Hero content sequencing
- Smartphone entrance and floating motion
- Pointer-based parallax
- Scroll-based transforms
- Section reveals
- Staggered card animations
- Header transitions
- Mobile menu transitions
- Interactive filters
- Button feedback
- Hover and tap interactions
- FAQ height and opacity transitions
- Background light movement

Reusable animation variants and components are located in:

```text
src/components/motion/
```

The reusable motion system includes:

- Fade-up animation
- Left and right entrance animations
- Scale-in animation
- Stagger containers and items
- Floating elements
- Viewport-based reveal components

### GSAP and ScrollTrigger

GSAP is intentionally limited to the fiber internet section, where scroll-controlled sequencing provides a more immersive effect.

GSAP and ScrollTrigger handle:

- Image zoom linked to scroll progress
- Sequential benefit-card reveals
- Visual progress indication
- Desktop-only scroll scrubbing

The ScrollTrigger integration uses scoped GSAP contexts and performs cleanup when the component is unmounted.

## Other Libraries

### Lucide React

Lucide React provides the interface icons used throughout the page, including:

- Connectivity icons
- Plan benefits
- Smartphone categories
- Digital services
- Navigation controls
- FAQ controls
- Social and support links

### Next Image

Local images are rendered with the Next.js `Image` component.

The assets are imported statically from a centralized module:

```text
src/data/images.ts
```

Static imports allow Next.js to generate content-based asset URLs. This prevents stale browser or deployment caches when an image is replaced and the application is rebuilt.

## Accessibility

The interface includes:

- Semantic HTML
- A single main heading
- Consistent heading hierarchy
- Keyboard-accessible navigation
- A skip-to-content link
- Visible focus states
- Semantic buttons and links
- `aria-expanded` and `aria-controls`
- Accessible FAQ regions
- Alternative text for meaningful images
- Empty alternative text for decorative images
- Adequate touch targets

### Reduced Motion

The project respects `prefers-reduced-motion`.

When reduced motion is enabled:

- Continuous floating animations are removed
- Pointer and scroll parallax are disabled
- Rotations are removed
- GSAP scroll scrubbing is not initialized
- Complex motion is replaced with simple opacity transitions

## Responsive Design

The layout is designed for:

- Small mobile devices
- Standard mobile devices
- Tablets
- Laptops
- Desktop displays
- Wide desktop displays

The page uses adaptive grids, responsive image sizing, controlled section spacing, and mobile-specific navigation. Horizontal page overflow is prevented at the document level.

## Project Structure

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── motion/
│   ├── sections/
│   └── ui/
├── data/
│   ├── images.ts
│   └── landing.ts
├── lib/
│   └── utils.ts
└── types/
    └── landing.ts

public/
└── images/
    ├── ecosystem/
    ├── fiber/
    ├── hero/
    └── mobile/
```

## Getting Started

### Requirements

- Node.js
- npm

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

```bash
npm run dev
```

Starts the Next.js development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Starts the production server after a successful build.

```bash
npm run lint
```

Runs ESLint across the project.

```bash
npm run typecheck
```

Runs TypeScript validation without generating output files.

## Deployment

The project is compatible with Vercel and other platforms that support Next.js.

For Vercel:

1. Push the project to a GitHub repository.
2. Import the repository into Vercel.
3. Keep the detected framework preset as Next.js.
4. Deploy the project.

No environment variables, database, API, or backend service are required.

## Project Scope

This is a frontend-only project.

It does not include:

- Authentication
- API routes
- Server Actions for persistence
- A database
- A CMS
- Payment processing
- Real plan availability
- External form integrations
- Customer account data

## Disclaimer

This is a conceptual interface project created for design and frontend development purposes. It has no official relationship with Vivo and should not be interpreted as an official website, commercial offer, or representation of current Vivo products and conditions.
