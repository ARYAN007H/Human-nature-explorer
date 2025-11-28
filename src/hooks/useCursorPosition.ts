import { useEffect, useState } from "react";

export interface CursorPosition {
  x: number;
  y: number;
  normalized: {
    x: number; // 0 to 1
    y: number; // 0 to 1
  };
}

/**
 * Tracks current cursor/touch position
 * Returns normalized coordinates (0-1 range)
 */
export function useCursorPosition(): CursorPosition {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({
    x: 0,
    y: 0,
    normalized: { x: 0, y: 0 },
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const normalizedX = window.innerWidth ? x / window.innerWidth : 0.5;
      const normalizedY = window.innerHeight ? y / window.innerHeight : 0.5;

      setCursorPosition({
        x,
        y,
        normalized: { x: normalizedX, y: normalizedY },
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      try {
        if (!e.touches || e.touches.length === 0) return;
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        const normalizedX = window.innerWidth ? x / window.innerWidth : 0.5;
        const normalizedY = window.innerHeight ? y / window.innerHeight : 0.5;

        setCursorPosition({
          x,
          y,
          normalized: { x: normalizedX, y: normalizedY },
        });
      } catch (err) {
        // Defensive: ignore touch events that are malformed during rapid viewport changes
        // (some browsers/devtools may emit inconsistent events when toggling device mode)
        return;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return cursorPosition;
}
