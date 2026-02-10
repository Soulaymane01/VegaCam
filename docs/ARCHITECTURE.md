# Architecture & Design

This document outlines the architectural decisions and design patterns used in the Viga Cam landing page.

## 🏗 System Architecture

The project is built using a modern, component-based architecture leveraging Next.js 15.

### 1. Framework: Next.js 15 (App Router)
- **Server Components**: Used for static content to improve performance and SEO.
- **Client Components**: Used for interactive elements (Nav, Hero slider, Contact form) using the `'use client'` directive.
- **Optimization**: Automatic image optimization and font loading.

### 2. Styling: Tailwind CSS
- **Design System**: A cohesive design system built using CSS variables in `globals.css`.
- **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities (`sm:`, `md:`, `lg:`).
- **Glassmorphism**: Applied to navigation and overlay elements for a modern look.

### 3. Animations: Framer Motion
- **Scroll Reveal**: Components animate into view as the user scrolls.
- **Micro-interactions**: Subtle hover effects and button transitions.
- **Page Transitions**: Smooth entering animations for the main sections.

## 🧩 Component Breakdown

- **Navigation (`Nav.tsx`)**: Fixed, translucent header with mobile menu support.
- **Hero Slider (`Hero.tsx`)**: High-impact visual introduction using Swiper.js.
- **Services (`Services.tsx`)**: Feature cards highlighting core business offerings.
- **Projects (`Projects.tsx`)**: Visual showcase of past work.
- **Contact (`Contact.tsx`)**: User engagement point with form validation.

## 🎨 Design Principles

1.  **Clarity**: Clear typography and high-contrast elements for readability.
2.  **Professionalism**: A color palette reflecting trust (Blue) and energy (Orange).
3.  **Performance**: Minimal hydration and optimized asset loading.

## 🛠 Future Enhancements

-   [ ] Internationalization (i18n) for Arabic and French.
-   [ ] CMS integration for dynamic project management.
-   [ ] Dark mode support.
