import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GtmPageviewTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view",
      page_path: `${location.pathname}${location.search}${location.hash}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.hash, location.pathname, location.search]);

  return null;
}
