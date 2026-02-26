/**
 * CTA (Call to Action) — reusable full-width amber banner.
 * Insert on any page: <CTA />
 */
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function CTA({ 
  title      = "Ready for a Free Quote?",
  subtitle   = "Melbourne's most trusted painters — no obligation, no pressure.",
  btnText    = "Get a Free Quote",
  btnLink    = "/contact",
  phone      = "(03) 9123 4567"
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-500 to-brand-700 py-20 px-4">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/5  rounded-full blur-3xl" />

      <div className="section-wrapper relative text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4 animate-fade-up">
          {title}
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to={btnLink}
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-full
              bg-white text-brand-600 font-bold text-lg
              hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl
            "
          >
            {btnText}
          </Link>
          <a
            href={`tel:${phone.replace(/\s/g,'')}`}
            className="
              inline-flex items-center gap-2 px-8 py-4 rounded-full
              border-2 border-white text-white font-bold text-lg
              hover:bg-white/10 transition-all duration-300 hover:scale-105
            "
          >
            <Phone size={20} />
            {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
