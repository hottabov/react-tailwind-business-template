import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { useTheme } from "@/context/ThemeContext";
import useScrollUp from "@/hooks/useScrollUp";
import logoDark from "@/assets/images/logo-dark.avif";
import logoLight from "@/assets/images/logo-light.avif";

const navLinks = [
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
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Reviews", href: "/reviews" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [isSystemDark, setIsSystemDark] = useState(false);
  const { visible, atTop } = useScrollUp();
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCompanyOpen(false);
  }, [location]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncTheme = () => setIsSystemDark(mediaQuery.matches);

    syncTheme();
    mediaQuery.addEventListener("change", syncTheme);

    return () => mediaQuery.removeEventListener("change", syncTheme);
  }, []);

  const isDarkTheme = theme === "dark" || (theme === "system" && isSystemDark);
  const logoSrc = atTop || isDarkTheme ? logoLight : logoDark;

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
      <div className="flex items-center justify-between section-wrapper">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src={logoSrc} 
            alt="Melbourne Pro Painters Logo" 
            className="h-10 md:h-12 w-auto transition-transform hover:scale-105 duration-300" 
          />
        </Link>

        <nav className="items-center hidden gap-1 lg:flex">
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
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>
                <div className="absolute left-0 invisible w-56 mt-1 transition-all duration-200 translate-y-2 bg-white border border-gray-100 shadow-xl opacity-0 top-full dark:bg-dark-card rounded-2xl dark:border-dark-border group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
                  {link.children.map((child) => (
                    <NavLink
                      key={child.href}
                      to={child.href}
                      className="block px-5 py-3 text-base text-gray-700 transition-colors duration-150 dark:text-gray-200 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-dark-bg first:rounded-t-2xl last:rounded-b-2xl"
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

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
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

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300
        ${mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4 bg-white border-t border-gray-100 shadow-xl dark:bg-dark-card dark:border-dark-border overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <button
                  onClick={() => {
                    if (link.label === "Services") {
                      setServicesOpen(!servicesOpen);
                      setCompanyOpen(false);
                    } else if (link.label === "Company") {
                      setCompanyOpen(!companyOpen);
                      setServicesOpen(false);
                    }
                  }}
                  className="flex items-center justify-between w-full px-4 py-3 font-medium text-gray-800 rounded-xl dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-dark-bg"
                >
                  {link.label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      (link.label === "Services" && servicesOpen) ||
                      (link.label === "Company" && companyOpen)
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>
                {((link.label === "Services" && servicesOpen) ||
                  (link.label === "Company" && companyOpen)) && (
                  <div className="flex flex-col gap-1 pl-4 mt-1">
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
            className="w-full py-3 mt-3 font-bold text-center text-white transition-colors rounded-full bg-brand-500 hover:bg-brand-600"
          >
            Get a Free Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
