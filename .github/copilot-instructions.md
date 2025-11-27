# Copilot Instructions - Dentalux-i Dental Clinic

## Project Architecture

**Stack**: Astro 5 SSR (Node.js adapter) + Tailwind CSS 4 (via Vite plugin)  
**Structure**: Component-based with custom i18n system (no framework)  
**Deployment**: Static site with SSR capabilities for dynamic content

### Key Files
- `src/pages/index.astro` - Single-page app assembling all components
- `src/i18n/translations.ts` - All translation strings (AZ/EN/RU)
- `src/i18n/i18n.js` - Language utilities (`getCurrentLanguage()`, `setLanguage()`, `t()`)
- `src/styles/global.css` - CSS variables for theming (light/dark mode)
- `astro.config.mjs` - SSR config with Tailwind Vite plugin

## Critical Conventions
## Never run the dev server it's always running in the background 
### Dark Mode (Non-Negotiable)
**NEVER hardcode colors**. Always use CSS variables from `global.css`:
```css
/* ❌ Wrong */
background: white;
color: #1F2937;

/* ✅ Correct */
background: var(--bg-primary);
color: var(--text-primary);
```

**Variables**: `--bg-primary`, `--bg-secondary`, `--text-primary`, `--text-secondary`, `--primary`, `--border`, etc.  
**How it works**: `.dark-mode` class on `<body>` toggles theme via `DarkModeToggle.astro`. Preference persists in localStorage.

### Internationalization Pattern
1. **Add translations** to all 3 languages in `src/i18n/translations.ts` following `section_element_description` naming
2. **Mark HTML** with `data-i18n="translation_key"` attribute
3. **Embed translations** in HTML `<head>` as `window.__translations__` (see `index.astro` line 30)
4. **Auto-update**: `LanguageSwitcher.astro` changes all marked elements via `i18n.js`

Example:
```astro
<button data-i18n="hero_book_now">İndi Sifariş Et</button>
```

### Component Patterns
**Modal Pattern** (Services, ClinicLocations):
- Hidden by default (`display: none`)
- Toggled via inline `<script>` blocks in Astro components
- Close on backdrop click or button

**Expandable Sections** (Gallery, FAQ):
- Show limited items initially
- "View All"/"Collapse" buttons toggle visibility
- Use `max-height` transitions for smooth animation

**Client-side State**:
- No external state library
- LocalStorage for preferences: `language`, `theme`
- Vanilla JavaScript in `<script>` tags within `.astro` files

## Development Workflow

### Commands
```bash
npm run dev      # http://localhost:4321
npm run build    # Production build
npm run preview  # Preview production
```

### Image Management
Place images in `/public/images/{doctors,gallery,hero,services,logo,testimonials}/`  
Reference as `/images/...` (no `/public/` prefix)

**Specs**:
- Doctors: 400x400px square
- Gallery before/after: 400x300px pairs
- Hero: optimized for display size
- Use JPG for photos, PNG for logos

See `IMAGE_GUIDE.md` for comprehensive specs.

### Adding Components
1. Create `.astro` file in `src/components/`
2. Import in `src/pages/index.astro`
3. Use CSS variables for all colors
4. Add translations to `translations.ts` + `data-i18n` attributes
5. Test light/dark modes and all 3 languages

## Technical Details

**Tailwind CSS 4**: Uses new `@tailwindcss/vite` plugin (not PostCSS)  
**CSS Architecture**: Global styles in `global.css` with CSS variables; component styles in `<style>` blocks  
**Animations**: Defined with `@keyframes`, excluded from dark mode transitions to prevent conflicts  
**Accessibility**: Respects `prefers-reduced-motion`

## Common Tasks

**Add new translatable text**:
1. Add key to all languages in `translations.ts`
2. Add `data-i18n="your_key"` to element
3. Provide Azerbaijani as default text content

**Create new service/doctor**:
1. Add data object to component array
2. Add image to appropriate `/public/images/` folder
3. Update translations for new entries

**Modify colors/theme**:
1. Update variables in `:root` and `.dark-mode` in `global.css`
2. Test both themes thoroughly

## Anti-Patterns to Avoid
- ❌ Hardcoded colors (breaks dark mode)
- ❌ Missing `data-i18n` on user-facing text
- ❌ External routing (single-page design with anchor links)
- ❌ Heavy JavaScript frameworks (keep vanilla)
- ❌ Forgetting to test all 3 languages + both themes
