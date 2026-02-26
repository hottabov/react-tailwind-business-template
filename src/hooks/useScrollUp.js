/**
 * useScrollUp — returns true when the user is scrolling UP.
 * Used by the Header to reveal itself on scroll-up (hide-on-scroll-down pattern).
 */
import { useState, useEffect, useRef } from 'react';

export default function useScrollUp() {
  const [visible, setVisible]     = useState(true);
  const [atTop,   setAtTop]       = useState(true);
  const lastScrollY               = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setAtTop(current < 10);
      setVisible(current < lastScrollY.current || current < 80);
      lastScrollY.current = current;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { visible, atTop };
}
