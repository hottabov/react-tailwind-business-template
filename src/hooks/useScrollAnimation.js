import { useEffect, useRef, useState } from 'react';

/**
 * Hook to trigger animations when an element scrolls into view.
 * @param {Object} options - Intersection Observer options (threshold, rootMargin)
 * @returns {Array} [ref, isVisible]
 */
export function useScrollAnimation(options = { threshold: 0.1, triggerOnce: true }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px',
  } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // If we only want it to animate once, unobserve after it becomes visible
        if (triggerOnce) {
          observer.unobserve(element);
        }
      } else if (!triggerOnce) {
        // Optional: fade out when scrolling away (usually not recommended for performance)
        setIsVisible(false);
      }
    }, { threshold, rootMargin });

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [rootMargin, threshold, triggerOnce]);

  return [ref, isVisible];
}
