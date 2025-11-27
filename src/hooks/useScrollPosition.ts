import { useEffect, useState } from "react";

export interface ScrollPosition {
  x: number;
  y: number;
  direction: "up" | "down" | "left" | "right" | "none";
}

/**
 * Tracks current scroll position and direction
 */
export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: "none",
  });

  useEffect(() => {
    let previousY = 0;
    let previousX = 0;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const currentX = window.scrollX;

      let direction: ScrollPosition["direction"] = "none";
      if (currentY > previousY) direction = "down";
      else if (currentY < previousY) direction = "up";
      else if (currentX > previousX) direction = "right";
      else if (currentX < previousX) direction = "left";

      setScrollPosition({
        x: currentX,
        y: currentY,
        direction,
      });

      previousY = currentY;
      previousX = currentX;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollPosition;
}
