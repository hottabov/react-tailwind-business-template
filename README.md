# React & Tailwind CSS Small Business Template 🚀

A modern, fast, and fully responsive website template designed specifically for small service businesses (painters, plumbers, landscapers, consultants, etc.). Built with React, Vite, and Tailwind CSS, featuring an integrated Netlify CMS for easy content management.

## ✨ Features

- **Modern Stack**: React 18, Vite, and Tailwind CSS v3.
- **Built-in Content Management**: Integrated with Netlify CMS for managing Blog posts and Portfolio projects without touching code.
- **Fully Responsive**: Mobile-first design that looks great on all screen sizes.
- **Dark/Light Mode**: User-toggleable theme with local storage persistence.
- **SEO Optimized**: Dynamic meta tags using `react-helmet-async`.
- **Ready-to-use Pages**:
  - Home (Landing Page)
  - Services (Grid & Detail pages)
  - Portfolio (Filterable gallery & Detail pages)
  - Customer Reviews (Star ratings & testimonials)
  - Blog (Articles with sidebar)
  - Contact (Form with validation using `react-hook-form`)
- **Fast Performance**: Statically analyzed markdown loading using Vite's `import.meta.glob`.

## 🛠️ Quick Start

### 1. Clone the repository
```bash
  git clone https://github.com/hottabov/react-business-starter.git
  cd react-business-starter
```

### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
```bash
npm run dev
```
Open http://localhost:5173 to view it in the browser.

### 📁 Project Structure
```bash
text
├── public/
│   └── admin/               # Netlify CMS configuration
├── src/
│   ├── assets/              # Local images and static files
│   ├── components/          # Reusable UI components (Header, Footer, CTA, etc.)
│   ├── content/             # Markdown files for Blog and Portfolio (managed by CMS)
│   ├── context/             # React Context (Theme settings)
│   ├── data/                # Static data (Services, Reviews, SEO)
│   ├── hooks/               # Custom hooks for parsing markdown & scroll events
│   ├── pages/               # React Router page components
│   └── styles/              # Global SCSS and Tailwind directives
```
### 🌐 Deployment & CMS Setup
This template is optimized for Netlify.

Push your repository to GitHub.

Log into Netlify and click "Add new site" -> "Import from Git".

Use the following build settings (automatically handled by netlify.toml):

Build command: npm run build

Publish directory: dist

Enable Netlify CMS:

Go to Site Settings > Identity > Enable Identity.

Scroll down to Services > Git Gateway > Enable Git Gateway.

Navigate to https://your-site.netlify.app/admin/ to log in and start adding blog posts and portfolio items!

### 🎨 Customization
Colors & Branding: Update the brand color palette in tailwind.config.js and src/styles/_variables.scss.

Static Content: Update business info, services, and reviews in the src/data/ folder.

Images: Replace the demo images in src/assets/images/ with your own.

### 📝 License
This project is open-source and available under the MIT License.
