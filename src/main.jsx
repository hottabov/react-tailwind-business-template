import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './styles/index.scss';   // Global SCSS (imports Tailwind directives)

/**
 * main.jsx — вхідна точка React.
 * HelmetProvider -> для SEO, далі App з роутінгом.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* HelmetProvider enables per-page SEO meta tags */}
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
