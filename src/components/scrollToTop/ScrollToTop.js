import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll window to Top
    // Exclude nested routes in "/movie/" and "/series-info/"
    if (
      !pathname.startsWith("/movie/") &&
      !pathname.startsWith("/series-info/")
    ) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
