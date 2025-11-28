import { useEffect, useState } from "react";
import { colors as designColors } from "../constants/designTokens";

const DARK_PALETTE = {
  primary: {
    main: "#121826",
    light: "#273044",
    lighter: "#3b4a5f",
    dark: "#0b1020",
  },
  secondary: {
    main: "#DB9EA2",
    light: "#EFB7BB",
    dark: "#C47F84",
  },
  accent: {
    main: "#F4A261",
    light: "#F7B48A",
    dark: "#D68240",
  },
  neutral: {
    light: "#0D0F12",
    lighter: "#111318",
    dark: "#F5F2ED",
    darker: "#FFFFFF",
    gray: "#9AA4AC",
  },
  success: "#06A77D",
  warning: "#E8B4B8",
  error: "#C1121F",
  info: "#2D5F8D",
  background: "#0D0F12",
  foreground: "#F5F2ED",
  border: "#273044",
  divider: "#1F2937",
  overlay: {
    dark: "rgba(0,0,0,0.6)",
    light: "rgba(255,255,255,0.06)",
  },
};

function applyDarkPalette() {
  try {
    // mutate exported designColors in-place so components using it pick up new values
    Object.assign(designColors, DARK_PALETTE as any);
    // also set CSS vars for surfaces and text
    const root = document.documentElement;
    root.style.setProperty("--hn-bg", DARK_PALETTE.background as string);
    root.style.setProperty("--hn-fg", DARK_PALETTE.foreground as string);
    root.style.setProperty("--hn-primary", (DARK_PALETTE as any).primary.main);
    root.style.setProperty("--hn-accent", (DARK_PALETTE as any).accent.main);
    root.style.setProperty("--hn-border", DARK_PALETTE.border as string);
  } catch (err) {
    // ignore
  }
}

function applyLightPalette() {
  try {
    // Restore by reloading original module values - simple approach: set a few CSS vars back
    const root = document.documentElement;
    root.style.setProperty("--hn-bg", designColors.background);
    root.style.setProperty("--hn-fg", designColors.foreground);
    root.style.setProperty("--hn-primary", designColors.primary.main);
    root.style.setProperty("--hn-accent", designColors.accent.main);
    root.style.setProperty("--hn-border", designColors.border);
  } catch (err) {}
}

export function useDarkMode(): [boolean, (next?: boolean) => void] {
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem("hne_dark_mode");
      if (saved !== null) return saved === "1";
      // Default to system preference if not saved
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (err) {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("hne_dark_mode", isDark ? "1" : "0");
    } catch (err) {
      // localStorage unavailable, ignore
    }

    // Apply theme
    const root = document.documentElement;
    
    if (isDark) {
      // Ensure .dark class is present
      if (!root.classList.contains("dark")) {
        root.classList.add("dark");
      }
      applyDarkPalette();
    } else {
      // Ensure .dark class is removed
      root.classList.remove("dark");
      applyLightPalette();
    }
    
    // Dispatch custom event for components to listen to theme changes
    window.dispatchEvent(new CustomEvent("theme-change", { detail: { isDark } }));
  }, [isDark]);

  // Apply initial theme on mount
  useEffect(() => {
    const root = document.documentElement;
    if (isDark && !root.classList.contains("dark")) {
      root.classList.add("dark");
      applyDarkPalette();
    }
  }, []);

  const toggle = (next?: boolean) => {
    setIsDark((s) => (typeof next === "boolean" ? next : !s));
  };

  return [isDark, toggle];
}

export default useDarkMode;
