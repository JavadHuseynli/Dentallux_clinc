# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dentalux-i is a modern dental clinic website built with Astro 5, featuring server-side rendering, multi-language support (Azerbaijani, English, Russian), and dark mode theming. The site showcases clinic services, locations, doctors, gallery, and appointment booking functionality.

## Tech Stack

- **Framework**: Astro 5.14.7 (SSR mode with Node.js adapter)
- **Styling**: Tailwind CSS 4.x (via Vite plugin)
- **Internationalization**: Custom i18n system with localStorage persistence
- **Theming**: CSS variables-based dark mode with localStorage persistence

## Development Commands

### Running the Project
```bash
npm run dev          # Start development server (default: http://localhost:4321)
npm run build        # Build for production
npm run preview      # Preview production build
```

### Node.js Adapter Configuration
The project uses `@astrojs/node` adapter in standalone mode for SSR. Configuration is in `astro.config.mjs`.

## Architecture

### Component Structure
All UI components are Astro components (`.astro` files) located in `src/components/`:

**Primary Components**:
- `Navigation.astro` - Top navigation with language switcher and dark mode toggle
- `Hero.astro` - Hero section with main CTA and statistics
- `ClinicLocations.astro` - Clinic branches with doctor profiles and expandable details
- `Services.astro` - Dental services showcase with modals
- `Gallery.astro` - Before/After treatment gallery
- `WhyChooseUs.astro` - Features and advantages section
- `Appointment.astro` - Appointment booking form
- `Contact.astro` - Contact information and form
- `FAQ.astro` - Expandable FAQ section
- `Footer.astro` - Site footer with links and newsletter signup
- `FloatingActions.astro` - Floating action buttons (WhatsApp, phone)

**Utility Components**:
- `DarkModeToggle.astro` - Theme toggle with sun/moon icons
- `LanguageSwitcher.astro` - Language selection (AZ/EN/RU)

### Internationalization System

**Translation Files**:
- `src/i18n/translations.ts` - All translation strings for 3 languages
- `src/i18n/i18n.js` - Utility functions for language management

**How It Works**:
1. Translations are embedded in the HTML head as `window.__translations__` for immediate availability
2. Elements with `data-i18n="key"` attribute are automatically updated on language change
3. Language preference is stored in localStorage and persists across sessions
4. Default language is Azerbaijani (AZ)

**Adding New Translatable Text**:
1. Add translation keys to all three languages in `src/i18n/translations.ts`
2. Add `data-i18n="your_key"` attribute to HTML elements
3. The language switcher automatically updates all marked elements

### Dark Mode System

**Implementation**:
- Uses CSS variables defined in `src/styles/global.css`
- Dark mode class `.dark-mode` is toggled on `<body>` element
- Theme preference persists in localStorage
- Respects system preference if no manual selection exists

**Color Variables**:
- Light mode: `--bg-primary: #FFFFFF`, `--text-primary: #1F2937`, `--primary: #1954B3`
- Dark mode: `--bg-primary: #111827`, `--text-primary: #F9FAFB`, `--primary: #2563EB`

**Critical**: ALL components use CSS variables for colors. Never hardcode colors like `background: white` or `#F9FAFB` - always use `var(--bg-primary)` or appropriate variable. This ensures dark mode works across the entire site.

### Image Management

**Directory Structure**:
```
public/images/
├── doctors/      # Doctor profile photos
├── gallery/      # Before/After photos
├── hero/         # Hero section images
├── services/     # Service category images
├── logo/         # Clinic logos
└── testimonials/ # Patient testimonial photos
```

**Image Guidelines**:
- Doctors: 400x400px square format
- Gallery: 400x300px for before/after pairs
- Hero: Various sizes optimized for display
- Use JPG for photos, PNG for logos with transparency
- Images in `/public/` are accessible at `/images/...`

See `IMAGE_GUIDE.md` for comprehensive image specifications.

## Key Technical Details

### CSS Architecture
- Global styles use CSS variables for theming consistency
- Animations are defined with `@keyframes` and applied via utility classes
- Smooth transitions on color properties (0.3s ease)
- Animations excluded from dark mode transitions to prevent conflicts
- Responsive breakpoints: 968px, 768px, 640px
- Respects `prefers-reduced-motion` for accessibility

### State Management
- No external state management library
- LocalStorage used for:
  - Language preference (`language` key)
  - Dark mode preference (`theme` key)
- Client-side JavaScript handles:
  - Language switching (`updatePageLanguage()`)
  - Theme toggling (via DarkModeToggle component)
  - Dynamic form interactions

### Component Patterns

**Modal Pattern**:
Many components (Services, ClinicLocations) use inline modals with:
- Hidden by default with `display: none`
- Shown with inline JavaScript toggling display style
- Close on backdrop click or close button

**Expandable Sections**:
Gallery and FAQ use expand/collapse pattern:
- Initially show limited items
- "View All" / "Collapse" buttons toggle visibility
- Animation with `max-height` transitions

**Floating Actions**:
WhatsApp and phone buttons positioned fixed at bottom-right with stacking z-index.

## Important Implementation Notes

### Dark Mode - Critical Requirements
When modifying or creating components:
1. NEVER use hardcoded colors (`white`, `#FFFFFF`, `#F9FAFB`, etc.)
2. ALWAYS use CSS variables (`var(--bg-primary)`, `var(--text-primary)`, etc.)
3. Test both light and dark modes after changes
4. Gradients should use variables: `linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)`

### Translation Keys
- Follow existing naming convention: `section_element_description`
- Example: `hero_title`, `services_badge`, `appointment_submit`
- Add to all three languages simultaneously to avoid missing translations

### Astro-Specific Considerations
- Components are server-rendered by default
- Client-side interactivity requires `<script>` tags or `is:inline` directive
- Global scripts can use `is:inline` to execute immediately
- Style scoping is automatic unless using `:global()` selector

## Documentation Files

- `DARK_MODE_AND_LANGUAGE_GUIDE.md` - Comprehensive guide on dark mode and i18n implementation
- `IMAGE_GUIDE.md` - Image specifications and directory structure
- `ADDING_IMAGES_INSTRUCTIONS.md` - Quick reference for adding images

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires: LocalStorage, CSS custom properties, ES6+ JavaScript
- Responsive design supports mobile, tablet, and desktop viewports
