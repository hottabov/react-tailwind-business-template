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
          className="relative flex items-center justify-center text-white transition-all duration-300 rounded-full shadow-2xl w-14 h-14 bg-brand-500 hover:bg-brand-600 hover:scale-110 hover:shadow-brand-500/50 animate-fade-up group"
          aria-label="Open Special Offer"
        >
          {/* Subtle ping animation indicating there's something to click */}
          <span className="absolute inset-0 rounded-full bg-brand-400 animate-ping opacity-20"></span>
          <Phone
            size={24}
            className="transition-transform group-hover:rotate-12"
          />
        </button>
      ) : (
        <div className="w-[300px] md:w-[320px] bg-white dark:bg-dark-card rounded-2xl shadow-xl dark:shadow-2xl border border-brand-100 dark:border-brand-900/40 p-5 transform origin-top-right transition-all duration-300 animate-fade-up overflow-hidden relative">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 rounded-full pointer-events-none bg-brand-500/10 dark:bg-brand-500/5 blur-2xl" />

          {/* Close button */}
          <button
            onClick={() => setState("collapsed")}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors bg-gray-50 dark:bg-dark-elem rounded-full p-1.5 focus:outline-none z-20 group"
            aria-label="Collapse"
          >
            <X
              size={14}
              strokeWidth={2.5}
              className="transition-transform group-hover:scale-110"
            />
          </button>

          <div className="relative z-10 flex items-start gap-4 mt-1 mb-5">
            <div className="bg-brand-100 dark:bg-brand-900/30 p-2.5 rounded-xl text-brand-600 dark:text-brand-400 shrink-0 mt-0.5 shadow-sm">
              <Rocket size={22} className="opacity-90" />
            </div>
            <div className="pr-4">
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg leading-tight mb-1.5">
                Get This Site
                <br />
                For Just $199/m
              </h3>
              <p className="text-sm leading-snug text-gray-600 dark:text-gray-400">
                Fully customised for your business with premium support.
              </p>
            </div>
          </div>

          <a
            href="tel:0434179988"
            className="block w-full py-2.5 px-4 bg-brand-500 hover:bg-brand-600 text-white font-bold text-center rounded-xl shadow-md hover:shadow-lg transition-all text-sm relative z-10 group overflow-hidden"
          >
            <span className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <span className="relative z-10 inline-block transition-transform group-hover:scale-105">
              Get It Now
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
