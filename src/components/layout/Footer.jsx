import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Interior Painting", href: "/services/interior-painting" },
  { label: "Exterior Painting", href: "/services/exterior-painting" },
  { label: "Commercial Painting", href: "/services/commercial-painting" },
  { label: "Roof Painting", href: "/services/roof-painting" },
  { label: "Fence & Deck", href: "/services/fence-deck-painting" },
  { label: "Colour Consultation", href: "/services/colour-consultation" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-dark-bg text-gray-300 pt-16 pb-8">
      <div className="section-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Brand column */}
        <div>
          <span className="font-display text-2xl font-bold text-white">
            Melbourne<span className="text-brand-500">Pro</span>Painters
          </span>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Melbourne's most trusted interior and exterior painters. Premium
            results, transparent pricing, guaranteed workmanship.
          </p>
          <div className="flex gap-3 mt-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-brand-500 dark:hover:bg-brand-600
                  flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Icon size={17} className="text-gray-300 hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Services</h3>
          <ul className="space-y-2">
            {serviceLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-gray-400 hover:text-brand-400 transition-colors duration-200 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-5">Contact Us</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="tel:0391234567"
                className="flex items-center gap-3 text-gray-400
                hover:text-brand-400 transition-colors group"
              >
                <Phone size={16} className="text-brand-500 flex-shrink-0" />
                <span className="text-sm">(03) 9123 4567</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@melbournepropainters.com.au"
                className="flex items-start gap-3 text-gray-400 hover:text-brand-400 transition-colors"
              >
                <Mail
                  size={16}
                  className="text-brand-500 flex-shrink-0 mt-0.5"
                />
                <span className="text-sm break-all">
                  hello@melbournepropainters.com.au
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-gray-400">
              <MapPin
                size={16}
                className="text-brand-500 flex-shrink-0 mt-0.5"
              />
              <span className="text-sm">
                Serving All Melbourne Suburbs
                <br />
                VIC 3000, Australia
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="section-wrapper border-t border-gray-800 pt-6 flex flex-col sm:flex-row
        items-center justify-between gap-3 text-xs text-gray-500"
      >
        <p>
          © {new Date().getFullYear()} Melbourne Pro Painters. All rights
          reserved.
        </p>
        <p>
          Lic. No. DB-12345 | ABN 12 345 678 901 <br />
          Created by{" "}
          <a
            href="https://leonovdesign.com"
            target="_blank"
            className="text-gray-400 hover:text-brand-400 transition-colors"
          >
            🇺🇦 Leonov Design
          </a>
        </p>
      </div>
    </footer>
  );
}
