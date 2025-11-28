import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, toggleDark] = useDarkMode();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--color-bg-primary)" }}>
      {/* Skip to content for keyboard users */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only" style={{position: 'absolute', left: 8, top: 8, zIndex: 60}}>Skip to content</a>
      {/* Header/Navigation */}
      <nav
        className={`sticky top-0 z-50 px-4 py-3 transition-all backdrop-blur-sm ${scrolled ? "shadow-md" : ""}`}
        style={{
          backgroundColor: isHome ? (scrolled ? "rgba(255,255,255,0.8)" : "transparent") : "var(--color-surface-primary)",
          borderBottom: isHome || !scrolled ? "none" : `1px solid var(--color-border)`,
          color: isHome ? "#1A1A1C" : "white",
        }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-serif font-bold transition-all hover:opacity-80"
              style={{ color: "inherit" }}
              aria-label="Home"
            >
              HNE
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => toggleDark()}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
              className="ml-2 p-2 rounded-md transition-colors hover:bg-white/10 active:bg-white/20"
              style={{
                color: isHome ? "#1A1A1C" : "white",
              }}
            >
              {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5 5L3.5 3.5M20.5 20.5L19 19M5 19l-1.5 1.5M20.5 3.5L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </button>

            <div className="hidden md:flex items-center gap-3 ml-3">
              <button
                onMouseEnter={() => void import("../../pages/ExplorePage")}
                onFocus={() => void import("../../pages/ExplorePage")}
                onClick={() => navigate("/explore")}
                className="px-3 py-2 rounded-md font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "transparent", color: isHome ? "#1A1A1C" : "white" }}
                aria-label="Guided Exploration"
              >
                Explore
              </button>
              <button
                onMouseEnter={() => void import("../../pages/WanderPage")}
                onFocus={() => void import("../../pages/WanderPage")}
                onClick={() => navigate("/wander")}
                className="px-3 py-2 rounded-md font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "transparent", color: isHome ? "#1A1A1C" : "white" }}
                aria-label="Wander"
              >
                Wander
              </button>
              <button
                onMouseEnter={() => void import("../../pages/LibraryPage")}
                onFocus={() => void import("../../pages/LibraryPage")}
                onClick={() => navigate("/library")}
                className="px-3 py-2 rounded-md font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: "transparent", color: isHome ? "#1A1A1C" : "white" }}
                aria-label="Library"
              >
                Library
              </button>
            </div>
          </div>

          {/* mobile hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              {!isHome && (
                <div className="flex gap-4">
                  <button
                    onClick={() => navigate("/explore")}
                    className="px-4 py-2 rounded-lg font-semibold transition-all hover:opacity-80"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", color: "white" }}
                    aria-label="Go to guided exploration"
                  >
                    Explore
                  </button>
                  <button
                    onClick={() => navigate("/wander")}
                    className="px-4 py-2 rounded-lg font-semibold transition-all hover:opacity-80"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", color: "white" }}
                    aria-label="Go to free browsing"
                  >
                    Wander
                  </button>
                </div>
              )}
            </div>

            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke={isHome ? "#1A1A1C" : "white"} strokeWidth={2} strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {menuOpen && (
            <div className="md:hidden mt-2 px-2 pb-4">
            <div className="flex flex-col gap-2">
              <button onMouseEnter={() => void import('../../pages/ExplorePage')} onClick={() => { navigate('/explore'); setMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-md">Explore</button>
              <button onMouseEnter={() => void import('../../pages/WanderPage')} onClick={() => { navigate('/wander'); setMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-md">Wander</button>
              <button onMouseEnter={() => void import('../../pages/LibraryPage')} onClick={() => { navigate('/library'); setMenuOpen(false); }} className="w-full text-left px-3 py-2 rounded-md">Library</button>
            </div>
          </div>
        )}
      </nav>

  {/* Main Content */}
  <main id="main-content" className="flex-1 w-full">{children}</main>

      {/* Footer */}
      <footer
        className="mt-auto pt-16 px-4 py-12"
        style={{
          backgroundColor: "var(--color-surface-primary)",
          color: "white",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About */}
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">About</h4>
              <p className="opacity-80 leading-relaxed text-sm">
                Human Nature Explorer is a resource for understanding ourselves and each other through psychology,
                neuroscience, and human behavior.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => navigate("/explore")}
                    className="opacity-80 hover:opacity-100 transition-all underline"
                  >
                    Guided Exploration
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/wander")}
                    className="opacity-80 hover:opacity-100 transition-all underline"
                  >
                    Free Browsing
                  </button>
                </li>
              </ul>
            </div>

            {/* Privacy */}
            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Privacy</h4>
              <p className="opacity-80 text-sm leading-relaxed">
                All your data stays on your device. No tracking. No accounts. No servers. Your reflections are yours
                alone.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{
              borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
              paddingTop: "1.5rem",
            }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
              <p>© 2025 Human Nature Explorer. Made with care for curious minds.</p>
              <p>
                Psychology research grounded in peer-reviewed science.{" "}
                <a href="#" className="underline hover:opacity-100">
                  View citations.
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
