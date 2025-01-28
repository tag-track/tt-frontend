

import { useRef, useEffect, useState, useCallback } from "react";

export function useMeasureHeight<T extends HTMLElement>() {
  const elementRef = useRef<T | null>(null);
  const [height, setHeight] = useState(0);

  const updateHeight = useCallback(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    // Measure height initially
    updateHeight();

    // Add event listeners for resize and orientation change
    window.addEventListener("resize", updateHeight);
    window.addEventListener("orientationchange", updateHeight);

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("orientationchange", updateHeight);
    };
  }, [updateHeight]);

  return { ref: elementRef, height };
}
