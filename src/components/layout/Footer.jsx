import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import logoImg from "@/assets/images/logo-light.avif";

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
    <footer className="pt-16 pb-8 text-gray-300 bg-gray-900 dark:bg-dark-bg">
      <div className="grid grid-cols-1 gap-10 mb-12 section-wrapper md:grid-cols-2 lg:grid-cols-4">
        {/* Brand column */}
        <div>
          <Link to="/" className="inline-block mb-1">
            <img
              src={logoImg}
              alt="Melbourne Pro Painters Logo"
              className="w-auto h-10 md:h-12"
            />
          </Link>
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
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-gray-800 rounded-full hover:bg-brand-500 dark:hover:bg-brand-600 hover:scale-110"
              >
                <Icon size={17} className="text-gray-300 hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            {quickLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-brand-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-2">
            {serviceLinks.map(({ label, href }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-sm text-gray-400 transition-colors duration-200 hover:text-brand-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold text-white">Contact Us</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="tel:0391234567"
                className="flex items-center gap-3 text-gray-400 transition-colors hover:text-brand-400 group"
              >
                <Phone size={16} className="flex-shrink-0 text-brand-500" />
                <span className="text-sm">(03) 9123 4567</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@propainterscompany.com.au"
                className="flex items-start gap-3 text-gray-400 transition-colors hover:text-brand-400"
              >
                <Mail
                  size={16}
                  className="text-brand-500 flex-shrink-0 mt-0.5"
                />
                <span className="text-sm break-all">
                  hello@propainterscompany.com.au
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
      <div className="flex flex-col justify-between gap-3 pt-6 text-xs text-gray-500 border-t border-gray-800 section-wrapper sm:flex-row">
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
            className="text-gray-400 transition-colors hover:text-brand-400"
          >
            🇺🇦 Leonov Design
          </a>
        </p>
      </div>
    </footer>
  );
}
