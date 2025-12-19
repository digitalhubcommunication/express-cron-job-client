import { useState, useEffect } from "react";

export function useResponsivePageWindow() {
  const [windowSize, setWindowSize] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setWindowSize(3); // mobile
      else if (window.innerWidth < 1024) setWindowSize(5); // tablet
      else setWindowSize(7); // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
