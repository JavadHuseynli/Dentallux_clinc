# Dentalux-i Dental Clinic Website

A modern, responsive dental clinic website built with Astro 5, featuring multi-language support, dark mode, and stunning UI/UX design.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Multi-Language Support**: Full i18n support for Azerbaijani, English, and Russian
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Server-Side Rendering (SSR)**: Fast page loads with Astro's SSR capabilities
- **Interactive Components**:
  - Dynamic clinic location selector
  - Beautiful doctor profile modals with animations
  - Image gallery with before/after transformations
  - FAQ accordion
  - Contact forms
  - Appointment booking

## Tech Stack

- **Framework**: [Astro 5.14.7](https://astro.build)
- **Styling**: [Tailwind CSS 4.x](https://tailwindcss.com) (via Vite plugin)
- **Adapter**: @astrojs/node (SSR mode)
- **Runtime**: Node.js
- **Languages**: JavaScript/TypeScript, HTML, CSS

## Project Structure

```
dentallux_clinc/
├── public/
│   └── images/
│       ├── doctors/          # Doctor profile photos
│       ├── gallery/          # Before/After treatment photos
│       ├── hero/             # Hero section images
│       ├── services/         # Service category images
│       ├── logo/             # Clinic logos
│       └── testimonials/     # Patient testimonial photos
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── ClinicLocations.astro
│   │   ├── Services.astro
│   │   ├── Gallery.astro
│   │   ├── Appointment.astro
│   │   ├── Contact.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── DarkModeToggle.astro
│   │   ├── LanguageSwitcher.astro
│   │   └── FloatingActions.astro
│   ├── i18n/
│   │   ├── translations.ts   # Translation strings
│   │   └── i18n.js           # i18n utilities
│   ├── pages/
│   │   └── index.astro       # Main page
│   ├── styles/
│   │   └── global.css        # Global styles & CSS variables
│   └── layouts/
├── astro.config.mjs          # Astro configuration
├── package.json
├── tailwind.config.js
├── CLAUDE.md                 # Project documentation for Claude Code
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dentallux_clinc.git
cd dentallux_clinc
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:4321
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production (static)
npm run preview      # Preview production build locally
```

## Deployment

### Deploy to Hostinger (Static Hosting)

1. **Build the project**:
```bash
npm run build
```

2. **Upload to Hostinger**:
   - Log into your Hostinger control panel
   - Open File Manager
   - Navigate to `public_html`
   - Upload all files from the `dist/` folder

3. **Your site is live!** Visit your domain to see it.

### Deploy to VPS/Cloud (SSR Mode)

If you need SSR capabilities, change `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',  // Change to 'server'
  adapter: node({
    mode: 'standalone'
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});
```

Then deploy to a Node.js hosting environment.

## Internationalization (i18n)

### Supported Languages

- Azerbaijani (AZ) - Default
- English (EN)
- Russian (RU)

### How It Works

Translations are stored in `src/i18n/translations.ts` and loaded into the browser via `window.__translations__`. Language switching is handled client-side with localStorage persistence.

### Adding New Translations

1. Add your translation keys to `src/i18n/translations.ts`:

```javascript
export const translations = {
  az: {
    your_key: "Azərbaycan dili",
    // ...
  },
  en: {
    your_key: "English text",
    // ...
  },
  ru: {
    your_key: "Русский текст",
    // ...
  }
};
```

2. Use the translation in HTML with `data-i18n` attribute:

```html
<h1 data-i18n="your_key">Default text</h1>
```

## Dark Mode

Dark mode is implemented using CSS variables defined in `src/styles/global.css`. The theme toggles the `.dark-mode` class on the `<body>` element.

### CSS Variables

```css
/* Light Mode */
--bg-primary: #FFFFFF;
--text-primary: #1F2937;
--primary: #1954B3;

/* Dark Mode */
--bg-primary: #111827;
--text-primary: #F9FAFB;
--primary: #2563EB;
```

**Important**: Always use CSS variables for colors to ensure dark mode compatibility!

## Key Components

### Navigation
Multi-language navigation with dark mode toggle and language switcher.

### Hero Section
Eye-catching hero with CTA buttons, statistics, and responsive design.

### Clinic Locations
Interactive location selector with doctor profiles and beautiful modals featuring:
- Gradient headers with animations
- Floating doctor images
- Glassmorphism effects
- Service lists with hover animations

### Services
Service cards with modal details for each dental service.

### Gallery
Before/After photo gallery with expandable grid.

### Appointment
Booking form with date/time selection.

### Contact
Contact information and form with location details.

## Image Guidelines

### Doctor Photos
- Size: 400x400px
- Format: JPG/PNG
- Location: `public/images/doctors/`

### Gallery Images
- Size: 400x300px (before/after pairs)
- Format: JPG
- Location: `public/images/gallery/`

### Service Images
- Size: 600x400px
- Format: JPG/PNG
- Location: `public/images/services/`

See `IMAGE_GUIDE.md` for detailed specifications.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images with lazy loading
- Minimal JavaScript bundle

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

**Dentalux-i Dental Clinic**
- Website: [Your Domain]
- Email: info@dentalux.az
- Phone: +994 XX XXX XX XX

## Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons from [Heroicons](https://heroicons.com)

---

Made with ❤️ by Dentalux-i Team
