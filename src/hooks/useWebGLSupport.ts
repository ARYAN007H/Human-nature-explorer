import { useEffect, useState } from "react";

/**
 * Detects WebGL 2.0 support in the browser
 * Returns true if WebGL is available, false otherwise
 */
export function useWebGLSupport(): boolean {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("webgl2");
      setIsSupported(!!context);
    } catch {
      setIsSupported(false);
    }
  }, []);

  return isSupported;
}
