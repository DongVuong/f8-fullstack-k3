import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window && window.scroll(0, 0);
    console.log("1");
  }, [pathname]);
  return null;
}

export default ScrollToTop;
