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
      const normalizedX = x / window.innerWidth;
      const normalizedY = y / window.innerHeight;

      setCursorPosition({
        x,
        y,
        normalized: { x: normalizedX, y: normalizedY },
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      const normalizedX = x / window.innerWidth;
      const normalizedY = y / window.innerHeight;

      setCursorPosition({
        x,
        y,
        normalized: { x: normalizedX, y: normalizedY },
      });
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
