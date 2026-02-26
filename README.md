# React & Tailwind CSS — Small Business Template

A fast, responsive website template for small service businesses (painters, plumbers, landscapers, consultants, etc.). Built with React, Vite and Tailwind CSS, with optional Netlify CMS support for managing blog and portfolio content.

## Highlights

- Modern stack: React 18, Vite, Tailwind CSS v3
- Optional Netlify CMS for content editing
- Mobile-first, fully responsive layout
- Dark / light theme toggle with localStorage
- SEO-ready meta tags via `react-helmet-async`
- Ready-made pages: Home, Services, Portfolio, Reviews, Blog, Contact
- Fast markdown-driven content using `import.meta.glob`

## Example
https://melbourne-pro-painters.netlify.app/

---

## Quick Start

1. Clone the repo

```bash
git clone https://github.com/hottabov/react-tailwind-business-template.git
cd react-tailwind-business-template
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Project Structure

```
public/
└─ admin/                  # Netlify CMS configuration (optional)

src/
├─ assets/                 # Images and static assets
├─ components/             # Reusable UI components
├─ content/                # Markdown content (blog, portfolio)
├─ context/                # React context (ThemeContext)
├─ data/                   # Static data: services, reviews, seo
├─ hooks/                  # Custom hooks for parsing & scroll behavior
├─ pages/                  # Route components
└─ styles/                 # Global SCSS + Tailwind directives
```

---

## Deployment & Netlify CMS

This template is optimized for Netlify. Basic steps:

- Push the repository to GitHub.
- In Netlify: Add new site → Import from Git.
- Build command: `npm run build`
- Publish directory: `dist`

To enable Netlify CMS:

1. In Netlify site settings, enable Identity.
2. Enable Git Gateway under Services.
3. Visit `https://your-site.netlify.app/admin/` to access the CMS.

---

## Customization

- Colors & branding: edit `tailwind.config.js` and `src/styles/_variables.scss`.
- Static content: update `src/data/` for services, reviews and site text.
- Images: replace files in `src/assets/images/` with your assets.
- Content: add or edit Markdown files in `src/content/` (blog & portfolio).

---

## License

MIT License — feel free to use and adapt this template for your projects.

