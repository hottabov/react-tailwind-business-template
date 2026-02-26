/**
 * Header — sticky on scroll-up, transparent at top, solid on scroll.
 * Mobile hamburger with animated icon (CSS lines, no SVG lib needed).
 * Light/dark logo swap + ThemeToggle.
 */
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Paintbrush } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import useScrollUp from "@/hooks/useScrollUp";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Interior Painting", href: "/services/interior-painting" },
      { label: "Exterior Painting", href: "/services/exterior-painting" },
      { label: "Commercial Painting", href: "/services/commercial-painting" },
      { label: "Roof Painting", href: "/services/roof-painting" },
      { label: "Fence & Deck", href: "/services/fence-deck-painting" },
      { label: "Colour Consultation", href: "/services/colour-consultation" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { visible, atTop } = useScrollUp();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const headerCls = `
    fixed top-0 left-0 right-0 z-50
    transition-all duration-300
    ${visible ? "translate-y-0" : "-translate-y-full"}
    ${
      atTop
        ? "bg-transparent py-5"
        : "bg-white/95 dark:bg-dark-bg/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100 dark:border-dark-border"
    }
  `;

  return (
    <header className={headerCls}>
      <div className="section-wrapper flex items-center justify-between">
        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2">
          {/* Icon */}
          <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
            <Paintbrush size={22} className="text-white" />
          </div>

          {/* Text */}
          <span
            className={`font-display font-bold text-2xl transition-colors duration-300
    ${atTop ? "text-white" : "text-gray-900 dark:text-white"}`}
          >
            Melbourne<span className="text-brand-500">Pro</span>Painters
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button
                  className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium text-base
                    transition-colors duration-200
                    ${
                      atTop
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-gray-700 dark:text-gray-200 hover:text-brand-500 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-dark-card"
                    }`}
                >
                  {link.label}
                  <ChevronDown
                    size={15}
                    className="group-hover:rotate-180 transition-transform duration-200"
                  />
                </button>
                {/* Dropdown */}
                <div
                  className="
                  absolute top-full left-0 mt-1 w-56
                  bg-white dark:bg-dark-card rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  translate-y-2 group-hover:translate-y-0
                  transition-all duration-200
                "
                >
                  {link.children.map((child) => (
                    <NavLink
                      key={child.href}
                      to={child.href}
                      className="block px-5 py-3 text-base text-gray-700 dark:text-gray-200
                        hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-dark-bg
                        first:rounded-t-2xl last:rounded-b-2xl transition-colors duration-150"
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                className={({
                  isActive,
                }) => `px-4 py-2 rounded-lg font-medium text-base transition-colors duration-200
                  ${
                    isActive
                      ? "text-brand-500 bg-brand-50 dark:bg-dark-card"
                      : atTop
                        ? "text-white/90 hover:text-white hover:bg-white/10"
                        : "text-gray-700 dark:text-gray-200 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-dark-card"
                  }`}
              >
                {link.label}
              </NavLink>
            ),
          )}
          <div className="ml-3">
            <ThemeToggle />
          </div>
          <Link
            to="/contact"
            className="ml-2 px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-600
              text-white font-semibold text-base transition-all duration-300 hover:scale-105 shadow-md shadow-brand-500/30"
          >
            Free Quote
          </Link>
        </nav>

        {/* ── Mobile: theme + hamburger ── */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          {/* Animated hamburger button */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle mobile menu"
            className="w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg
              bg-gray-100/80 dark:bg-dark-card border border-gray-200 dark:border-dark-border"
          >
            <span
              className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-200 rounded-full
              origin-center transition-all duration-300
              ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-200 rounded-full
              transition-all duration-300
              ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-700 dark:bg-gray-200 rounded-full
              origin-center transition-all duration-300
              ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile menu drawer ── */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
        ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav
          className="bg-white dark:bg-dark-card border-t border-gray-100 dark:border-dark-border
          shadow-xl px-4 py-4 flex flex-col gap-1"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => setServicesOpen((o) => !o)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl
                    text-gray-800 dark:text-gray-200 font-medium hover:bg-brand-50 dark:hover:bg-dark-bg"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="pl-4 flex flex-col gap-1 mt-1">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.href}
                        to={child.href}
                        className="block px-4 py-2.5 rounded-xl text-gray-600 dark:text-gray-300
                          hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-dark-bg font-medium"
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl font-medium transition-colors
                  ${
                    isActive
                      ? "bg-brand-50 text-brand-500 dark:bg-dark-bg dark:text-brand-400"
                      : "text-gray-800 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-dark-bg"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
          <Link
            to="/contact"
            className="mt-3 w-full py-3 rounded-full bg-brand-500 text-white font-bold
              text-center hover:bg-brand-600 transition-colors"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
