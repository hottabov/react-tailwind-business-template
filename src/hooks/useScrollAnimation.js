import { useEffect, useRef, useState } from 'react';

/**
 * Hook to trigger animations when an element scrolls into view.
 * @param {Object} options - Intersection Observer options (threshold, rootMargin)
 * @returns {Array} [ref, isVisible]
 */
export function useScrollAnimation(options = { threshold: 0.1, triggerOnce: true }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // If we only want it to animate once, unobserve after it becomes visible
        if (options.triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!options.triggerOnce) {
        // Optional: fade out when scrolling away (usually not recommended for performance)
        setIsVisible(false);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, options.threshold, options.triggerOnce]);

  return [ref, isVisible];
}
