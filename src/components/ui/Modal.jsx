import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-2xl dark:border-dark-border dark:bg-dark-card"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-6 py-5 dark:border-dark-border md:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-500">
              Free Quote
            </p>
            <h2 className="mt-2 font-display text-3xl text-gray-900 dark:text-white">
              {title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote form"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-colors hover:border-brand-500 hover:text-brand-500 dark:border-dark-border dark:bg-dark-bg dark:text-gray-300"
          >
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[85vh] overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
}
