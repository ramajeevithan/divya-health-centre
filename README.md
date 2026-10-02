# Divya Health Centre — Astro rebuild

Pixel-faithful migration of the Divya Health Care Centre clinic website
(`https://divyahealthcentre.in`) from plain HTML to Astro. Same visuals, same
content, same behavior — components underneath instead of one 1,285-line HTML
file.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Installs dependencies                       |
| `npm run dev`     | Starts local dev server at `localhost:4321` |
| `npm run build`   | Builds the static site to `./dist/`         |
| `npm run preview` | Preview the production build locally        |

## Project structure

```text
/
├── public/                    # static assets, copied verbatim to dist/
│   ├── assets/                # vendor libs (bootstrap, swiper, glightbox, aos…), css, js, img
│   ├── Tile/                  # digestive-health tile images
│   ├── Doctor/favicon.ico
│   ├── Animate.js             # stat-card counters
│   ├── feedback.js            # Google sign-in → feedback form logic
│   ├── about.css / feedback.css / images.css
│   ├── doc.jpeg / whatsapp.png / robots.txt
├── src/
│   ├── layouts/Layout.astro   # <head> (fixed SEO tags), header scripts, footer scripts, WhatsApp widget
│   ├── pages/
│   │   ├── index.astro        # assembles all sections
│   │   └── Doctor/index.astro # doctor login page (static remnant, as before)
│   └── components/
│       ├── Header.astro       # top bar + nav
│       ├── Hero.astro         # hero carousel (Bootstrap)
│       ├── Cta.astro          # emergency WhatsApp CTA
│       ├── About.astro        # clinic + doctor profile
│       ├── Counts.astro       # animated stat cards
│       ├── Services.astro     # services grid
│       ├── AppointmentTiles.astro # digestive-health tiles
│       ├── Departments.astro  # gastroenterology article
│       ├── Testimonials.astro # testimonials slider (Swiper)
│       ├── Gallery.astro      # gallery slider + lightbox
│       ├── Faq.astro          # FAQ accordion
│       ├── Interactive.astro  # education center + virtual tour + symptom checker + feedback
│       ├── Footer.astro       # footer, address, map
│       ├── SymptomChecker.jsx # React island (client:visible)
│       ├── VirtualTour.jsx    # React island (client:visible)
│       └── EducationCenter.jsx# React island (client:visible)
└── package.json
```

## Notes

- The three interactive widgets (symptom checker, virtual tour, education
  center) were inline React 17 + Babel in the original. They are now proper
  React components hydrated as Astro islands (`client:visible`) — same logic,
  same styling (Tailwind CDN kept in `<head>`).
- All original CSS (Bootstrap 5.3.3, `style.css`, `about.css`, `feedback.css`,
  `images.css`) and vendor JS load exactly as before.
- SEO head fix vs. the original: exactly one `<title>` and one
  `meta[name=description]` (the original stacked ~20 of each; browsers only
  honored the last). The kept title/description are the ones that were
  effective in the original.
- Template JS (`assets/js/main.js`: nav, sliders, lightbox, counters,
  back-to-top, preloader) runs unchanged.
- `npm run build` produces a fully static `dist/` — deployable to Cloudflare
  Pages, Netlify, or Vercel as-is (no adapter).
