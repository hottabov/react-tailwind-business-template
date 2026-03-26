import { useState, useEffect } from "react";
import { X, Rocket, Phone } from "lucide-react";

export default function PromoPopup() {
  const [state, setState] = useState("hidden"); // 'hidden' | 'expanded' | 'collapsed'

  useEffect(() => {
    // Initial mount: show the full popup after 3 seconds
    const timer = setTimeout(() => {
      setState("expanded");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (state === "hidden") return null;

  return (
    <div className="fixed top-[100px] right-4 md:right-8 z-50 flex items-start justify-end drop-shadow-2xl">
      {state === "collapsed" ? (
        <button
          onClick={() => setState("expanded")}
          className="w-14 h-14 bg-brand-500 hover:bg-brand-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-brand-500/50 animate-fade-up group relative"
          aria-label="Open Special Offer"
        >
          {/* Subtle ping animation indicating there's something to click */}
          <span className="absolute inset-0 bg-brand-400 rounded-full animate-ping opacity-20"></span>
          <Phone size={24} className="group-hover:rotate-12 transition-transform" />
        </button>
      ) : (
        <div className="w-[300px] md:w-[320px] bg-white dark:bg-dark-card rounded-2xl shadow-xl dark:shadow-2xl border border-brand-100 dark:border-brand-900/40 p-5 transform origin-top-right transition-all duration-300 animate-fade-up overflow-hidden relative">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />
          
          {/* Close button */}
          <button 
            onClick={() => setState("collapsed")}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors bg-gray-50 dark:bg-dark-elem rounded-full p-1.5 focus:outline-none z-20 group"
            aria-label="Collapse"
          >
            <X size={14} strokeWidth={2.5} className="group-hover:scale-110 transition-transform" />
          </button>

          <div className="flex items-start gap-4 mb-5 mt-1 relative z-10">
            <div className="bg-brand-100 dark:bg-brand-900/30 p-2.5 rounded-xl text-brand-600 dark:text-brand-400 shrink-0 mt-0.5 shadow-sm">
              <Rocket size={22} className="opacity-90" />
            </div>
            <div className="pr-4">
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg leading-tight mb-1.5">
                Get This Site<br/>For Just $99
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-snug">
                Fully customised for your business with premium support.
              </p>
            </div>
          </div>

          <a 
            href="tel:0434179988"
            className="block w-full py-2.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-bold text-center rounded-xl shadow-md hover:shadow-lg transition-all text-sm relative z-10 group overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10 group-hover:scale-105 inline-block transition-transform">Get It Now</span>
          </a>
        </div>
      )}
    </div>
  );
}
