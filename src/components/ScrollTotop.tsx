import { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollTotop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

export default ScrollTotop;
