import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  // useLocation returns the current route object, from which we take the pathname (e.g., '/about').
  const { pathname } = useLocation();

  useEffect(() => {
    // Every time the pathname changes, scroll the page to coordinates (0, 0)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // 'instant' does it instantly. If you want it to be smooth, replace it with 'smooth'.
    });
  }, [pathname]);

  // This component does not draw anything on the screen.
  return null;
}
