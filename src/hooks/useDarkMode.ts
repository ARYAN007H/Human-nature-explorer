import { useEffect, useState } from "react";

// CSS variables are applied via .dark class on document root
// This hook manages the dark mode state and applies/removes the .dark class

function applyDarkMode() {
  try {
    const root = document.documentElement;
    root.classList.add("dark");
    localStorage.setItem("hne_dark_mode", "1");
  } catch (err) {
    // ignore
  }
}

function applyLightMode() {
  try {
    const root = document.documentElement;
    root.classList.remove("dark");
    localStorage.setItem("hne_dark_mode", "0");
  } catch (err) {
    // ignore
  }
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
    if (isDark) {
      applyDarkMode();
    } else {
      applyLightMode();
    }
    
    // Dispatch custom event for components to listen to theme changes
    try {
      window.dispatchEvent(new CustomEvent("theme-change", { detail: { isDark } }));
    } catch (err) {
      // ignore
    }
  }, [isDark]);

  // Apply initial theme on mount
  useEffect(() => {
    const root = document.documentElement;
    if (isDark && !root.classList.contains("dark")) {
      applyDarkMode();
    } else if (!isDark && root.classList.contains("dark")) {
      applyLightMode();
    }
  }, []);

  const toggle = (next?: boolean) => {
    setIsDark((s) => (typeof next === "boolean" ? next : !s));
  };

  return [isDark, toggle];
}

export default useDarkMode;
