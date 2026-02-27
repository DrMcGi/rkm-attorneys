# RKM Attorneys - Development Guide

## Project Overview

**RKM Attorneys** is a luxury-grade legal practice website built with modern web technologies. The site showcases estate, litigation, labour, and RAF legal services with a premium, professional aesthetic.

### Key Features
- Responsive design optimized for all devices
- Interactive component library with smooth animations
- Premium dark theme with gold accents
- Client modal for attorney profiles
- Contact forms and consultation booking
- SEO optimized with Next.js
- Accessibility best practices with ARIA labels

---

## Technology Stack

### Core Framework & Runtime
| Package | Version | Purpose |
|---------|---------|---------|
| Next.js | 16.1.6 | React framework, SSR/SSG, routing |
| React | 19.2.4 | UI library and component framework |
| React-DOM | 19.2.4 | DOM rendering for React |
| TypeScript | 5.9.3 | Static type checking, IDE support |

### Styling & Design
| Package | Version | Purpose |
|---------|---------|---------|
| Tailwind CSS | 4.2.1 | Utility-first CSS framework |
| @tailwindcss/postcss | 4.2.1 | PostCSS plugin for Tailwind |
| PostCSS | 8.5.6 | CSS transformation tool |
| Autoprefixer | 10.4.27 | Add vendor prefixes to CSS |

### UI & Animation
| Package | Version | Purpose |
|---------|---------|---------|
| Framer Motion | 12.34.3 | Animation and motion library |
| React Icons | 5.5.0 | Icon library (Font Awesome, Feather, etc.) |

### Utilities
| Package | Version | Purpose |
|---------|---------|---------|
| clsx | 2.1.1 | Conditional CSS class binding |

### Development Tools
| Package | Version | Purpose |
|---------|---------|---------|
| ESLint | 10.0.2 | Code linting & quality |
| eslint-config-next | 16.1.6 | Next.js ESLint configuration |
| @types/node | 25.3.2 | Node.js type definitions |
| @types/react | 19.2.14 | React type definitions |

### Package Manager
- **pnpm** v10.20.0 (recommended)
- Lockfile: `pnpm-lock.yaml`

---

## Project Structure

```
rkm-attorneys/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable React components
│   │   │   ├── Accreditations.tsx      # Membership & legal credentials
│   │   │   ├── AttorneyCard.tsx        # Profile cards for attorneys
│   │   │   ├── BackToTop.tsx           # Scroll-to-top button
│   │   │   ├── ContactForm.tsx         # Contact form component
│   │   │   ├── CTA.tsx                 # Call-to-action sections
│   │   │   ├── Footer.tsx              # Footer with creator modal
│   │   │   ├── Hero.tsx                # Hero section with parallax
│   │   │   ├── InsightsCarousel.tsx    # News/insights slider
│   │   │   ├── LogoMark.tsx            # Logo component
│   │   │   ├── Navbar.tsx              # Navigation header
│   │   │   ├── OurSpace.tsx            # Office/space showcase
│   │   │   ├── PracticeGrid.tsx        # Practice areas grid
│   │   │   ├── SectionDivider.tsx      # Visual section dividers
│   │   │   ├── Testimonials.tsx        # Client testimonials
│   │   │   ├── VisitUs.tsx             # Office location/directions
│   │   │   ├── WhatsAppButton.tsx      # WhatsApp contact widget
│   │   │   └── WhyChooseUs.tsx         # Value proposition section
│   │   ├── fonts.ts             # Custom font imports (Fraunces, Inter)
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout wrapper
│   │   ├── page.tsx             # Homepage entry point
│   │   ├── robots.txt/route.ts  # Robots.txt generation
│   │   └── sitemap.ts           # Dynamic sitemap generation
│   └── global.d.ts              # Global type definitions
├── public/
│   ├── images/                  # Static images and brand assets
│   └── robots.txt               # SEO robots configuration
├── AUTHORS.md                   # Project authorship & credits
├── README.md                    # Project overview with authorship
├── DEVELOPMENT.md              # This file - development guide
├── package.json                # Project dependencies
├── pnpm-lock.yaml             # Dependency lockfile
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS theme & config
├── postcss.config.mjs         # PostCSS configuration
├── eslint.config.mjs          # ESLint configuration
└── .gitignore                 # Git ignore rules
```

---

## Setup & Installation

### Prerequisites
- **Node.js** 18.17 or later (LTS recommended)
- **pnpm** v10.20.0+ (or npm/yarn as fallback)
- Git for version control

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/DrMcGi/rkm-attorneys.git
   cd rkm-attorneys
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Verify installation**
   ```bash
   pnpm list next react react-dom
   ```

---

## Development Workflow

### Running the Development Server

```bash
pnpm dev
# or
npm run dev
```

Server runs on **http://localhost:3000**

Features:
- Hot module reloading (HMR)
- Fast refresh for instant feedback
- TypeScript compilation on-the-fly
- Linting warnings in terminal

### Building for Production

```bash
pnpm build
pnpm start
```

This generates an optimized production build in the `.next/` directory.

### Linting & Code Quality

```bash
pnpm lint
```

Runs ESLint on all source files. Configuration is in `eslint.config.mjs`.

---

## Styling System

### Theme Configuration
The project uses a **luxury dark theme** with custom colors defined in `tailwind.config.js`:

```javascript
colors: {
  onyx: "#0b0b0b",        // Deep black background
  charcoal: "#1a1a1a",    // Lighter black accents
  bone: "#f8f3e9",        // Cream/off-white text
  gold: "#c6a15b",        // Primary accent color
  'gold-light': "#d4b878", // Lighter gold shade
  'gold-dark': "#97783c", // Darker gold shade
  ash: "#b2a89f",         // Neutral gray
  glass: "rgba(255,255,255,0.04)" // Frosted glass effect
}
```

### Typography
- **Display Font**: Fraunces (elegant serif for headings)
- **Body Font**: Inter (clean sans-serif for body text)
- Fonts imported in `src/app/fonts.ts`

### Custom Shadows
```javascript
boxShadow: {
  soft: "0 10px 40px rgba(0,0,0,0.35)",    // Subtle drop shadow
  glow: "0 0 0 1px rgba(198,161,91,0.4), 0 10px 30px rgba(198,161,91,0.2)" // Gold glow
}
```

### Tailwind Classes
All components use Tailwind utilities. Key custom classes:
- `bg-onyx` - Main background
- `text-gold` - Primary accent text
- `shadow-glow` - Gold glow effect
- `shadow-soft` - Soft drop shadow
- `bg-glass` - Frosted glass background

---

## Key Components

### Footer (with Creator Modal)
**File**: `src/app/components/Footer.tsx`

Features:
- Interactive creator attribution modal
- Clickable contact methods (phone, email, website)
- Smooth animations and hover effects
- Mobile responsive design

**Usage**: Automatically imported in root layout.

### Hero Section
**File**: `src/app/components/Hero.tsx`

Features:
- Parallax scrolling effect with Framer Motion
- Responsive image sizing
- Full-screen height design

### Navbar
**File**: `src/app/components/Navbar.tsx`

Features:
- Sticky navigation header
- Smooth scroll anchors to page sections
- Mobile menu toggle

### Contact Form
**File**: `src/app/components/ContactForm.tsx`

Features:
- Client-side form validation
- Interactive input fields
- Accessible form structure

---

## Page Structure

### Homepage (`src/app/page.tsx`)
Main page sections (in order):
1. **Hero** - Attention-grabbing introduction
2. **Why Choose Us** - Value propositions
3. **Practice Areas** - Service grid
4. **Accreditations** - Memberships & credentials
5. **Testimonials** - Client feedback
6. **Insights Carousel** - News/articles
7. **Our Space** - Office showcase
8. **Visit Us** - Location & directions
9. **Contact Form** - Inquiry submission
10. **Footer** - Attribution & links

### Root Layout (`src/app/layout.tsx`)
Houses:
- Meta tags (title, description, icons)
- Font imports
- Global styles
- Navigation bar
- Footer
- WhatsApp button widget

---

## Configuration Files

### TypeScript (`tsconfig.json`)
- **Target**: ES2022
- **Strict Mode**: Enabled (strict type checking)
- **Module Resolution**: Bundler (Modern module resolution)
- **JSX**: React 17+ (react-jsx)

### Next.js (`next.config.ts`)
- **Typed Routes**: Enabled for type-safe route references

### Tailwind (`tailwind.config.js`)
- Custom color palette
- Custom fonts (Fraunces, Inter)
- Custom shadows (soft, glow)
- Content scanning paths configured

---

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Select project root directory
3. Environment variables (if needed) configured in dashboard
4. Deploy on push to `main` branch

**Status**: Production-ready with latest dependencies

### Building Locally for Production
```bash
pnpm build
# Verify build success
pnpm start
```

Check `.next/` directory for optimized output.

---

## Accessibility & SEO

### Accessibility
- Semantic HTML elements
- ARIA labels on interactive components
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Focus indicators on interactive elements

### SEO
- Dynamic sitemap generation (`src/app/sitemap.ts`)
- Robots.txt file (`src/app/robots.txt/route.ts`)
- Meta tags in layout
- Open Graph tags for social sharing
- Semantic heading hierarchy

---

## Environment Variables

Currently, no `.env.local` file is required. If needed in future:
- Create `.env.local` in project root
- Variables must be prefixed with `NEXT_PUBLIC_` to be accessible in browser
- Restart dev server after changes

Example:
```env
NEXT_PUBLIC_SITE_URL=https://rkm-attorneys.com
```

---

## Git Workflow

### Recent Changes
```bash
git log --oneline -n 5
```

### Making Changes
1. Create feature branch: `git checkout -b feature/name`
2. Make changes and commit: `git add . && git commit -m "message"`
3. Push: `git push origin feature/name`
4. Create PR on GitHub

### Commit Standards
- Use clear, descriptive commit messages
- Start with action verb: "Add", "Fix", "Update", "Remove"
- Example: "Add interactive creator modal to footer"

---

## Authorship & Contact

**Created by**: DrMcGi's SaaS Atelier (Pty) Ltd.

**Founder & Managing Director**: Gift Rantho

**Contact**:
- 📞 **Call/WhatsApp**: [064 921 1745](tel:+27649211745)
- 📧 **Email**: [Giftk.rantho@gmail.com](mailto:Giftk.rantho@gmail.com)
- 🌐 **Website**: [www.drmcgi.co.za](https://www.drmcgi.co.za)

See `AUTHORS.md` for complete attribution details.

---

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows: Find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux: Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Build Errors
1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `pnpm install`
3. Rebuild: `pnpm build`

### TypeScript Errors
- Run `pnpm lint` to see all type errors
- Check `tsconfig.json` for strict mode settings
- Hover over errors in VS Code for quick fixes

### Dependency Issues
```bash
# Check for duplicate packages
pnpm ls

# Audit for vulnerabilities
pnpm audit

# Update all packages safely
pnpm update
```

---

## Performance Optimization

### Next.js Features Used
- **SSR** (Server-Side Rendering) for dynamic content
- **Image Optimization** with `next/image`
- **Code Splitting** - automatic per-page bundles
- **Typed Routes** - compile-time safety on links

### Monitoring
- Use Vercel Analytics on deployed site
- Chrome DevTools Lighthouse for local testing
- Next.js Speed Insights in production

---

## Further Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated**: February 27, 2026  
**Latest Next.js**: 16.1.6  
**Latest React**: 19.2.4
