import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import GlassSurface from "../ui/GlassSurface";
import GlassButton from "../ui/GlassButton";

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
    <div
      className="min-h-screen flex flex-col"
      style={{
        background:
          "radial-gradient(circle at 0% -10%, rgba(90,240,217,0.18) 0%, transparent 55%), radial-gradient(circle at 100% 110%, rgba(77,169,255,0.22) 0%, transparent 55%), #000000",
      }}
    >
      {/* Skip to content for keyboard users */}
      <a href="#main-content" className="skip-link sr-only focus:not-sr-only" style={{position: 'absolute', left: 8, top: 8, zIndex: 60}}>Skip to content</a>
      {/* Header/Navigation */}
      <header className="sticky top-0 z-[var(--z-sticky)] px-4 pt-4 pb-3 pointer-events-none">
        <GlassSurface
          as="nav"
          variant="nav"
          depth="3"
          className={`pointer-events-auto max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 transition-transform duration-300 ${
            scrolled ? "translate-y-0" : "translate-y-[2px]"
          }`}
          aria-label="Primary"
        >
          <div className="flex items-center gap-4">
            <GlassButton
              variant="ghost"
              accent="cyan"
              className="px-3 py-1.5 rounded-full text-sm tracking-tight"
              onClick={() => navigate("/")}
              aria-label="Home"
            >
              HNE
            </GlassButton>

            {/* Dark mode toggle */}
            <GlassButton
              variant="icon"
              accent="purple"
              onClick={() => toggleDark()}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Light mode" : "Dark mode"}
            >
              {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5 5L3.5 3.5M20.5 20.5L19 19M5 19l-1.5 1.5M20.5 3.5L19 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </GlassButton>

            <div className="hidden md:flex items-center gap-2 ml-3">
              <GlassButton
                variant="ghost"
                accent="blue"
                onMouseEnter={() => void import("../../pages/ExplorePage")}
                onFocus={() => void import("../../pages/ExplorePage")}
                onClick={() => navigate("/explore")}
                aria-label="Guided Exploration"
              >
                Explore
              </GlassButton>
              <GlassButton
                variant="ghost"
                accent="blue"
                onMouseEnter={() => void import("../../pages/WanderPage")}
                onFocus={() => void import("../../pages/WanderPage")}
                onClick={() => navigate("/wander")}
                aria-label="Wander"
              >
                Wander
              </GlassButton>
              <GlassButton
                variant="ghost"
                accent="blue"
                onMouseEnter={() => void import("../../pages/LibraryPage")}
                onFocus={() => void import("../../pages/LibraryPage")}
                onClick={() => navigate("/library")}
                aria-label="Library"
              >
                Library
              </GlassButton>
            </div>
          </div>

          {/* mobile hamburger */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              {!isHome && (
                <div className="flex gap-4">
                  <GlassButton
                    onClick={() => navigate("/explore")}
                    aria-label="Go to guided exploration"
                  >
                    Explore
                  </GlassButton>
                  <GlassButton
                    onClick={() => navigate("/wander")}
                    aria-label="Go to free browsing"
                  >
                    Wander
                  </GlassButton>
                </div>
              )}
            </div>

            <button
              className="md:hidden p-2 rounded-full bg-transparent text-white"
              onClick={() => setMenuOpen((s) => !s)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke={isHome ? "#1A1A1C" : "white"} strokeWidth={2} strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </GlassSurface>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden mt-3">
            <GlassSurface
              variant="panel"
              depth="2"
              className="flex flex-col gap-1 py-2 px-2 text-sm"
            >
              <button
                onMouseEnter={() => void import("../../pages/ExplorePage")}
                onClick={() => {
                  navigate("/explore");
                  setMenuOpen(false);
                }}
                className="w-full text-left rounded-full px-3 py-2 hover:bg-white/8 transition-colors"
              >
                Explore
              </button>
              <button
                onMouseEnter={() => void import("../../pages/WanderPage")}
                onClick={() => {
                  navigate("/wander");
                  setMenuOpen(false);
                }}
                className="w-full text-left rounded-full px-3 py-2 hover:bg-white/8 transition-colors"
              >
                Wander
              </button>
              <button
                onMouseEnter={() => void import("../../pages/LibraryPage")}
                onClick={() => {
                  navigate("/library");
                  setMenuOpen(false);
                }}
                className="w-full text-left rounded-full px-3 py-2 hover:bg-white/8 transition-colors"
              >
                Library
              </button>
            </GlassSurface>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="mt-auto pt-16 px-4 pb-10 text-[rgba(245,245,247,0.76)]">
        <div className="max-w-6xl mx-auto space-y-10">
          <GlassSurface
            as="div"
            variant="panel"
            depth="1"
            className="grid gap-10 md:grid-cols-3 px-6 md:px-8 py-8"
          >
            {/* About */}
            <div>
              <h4 className="text-sm font-semibold tracking-[0.04em] uppercase mb-3 text-[rgba(245,245,247,0.86)]">
                About
              </h4>
              <p className="opacity-80 leading-relaxed text-xs md:text-sm">
                Human Nature Explorer is a resource for understanding ourselves and each other through psychology,
                neuroscience, and human behavior.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-semibold tracking-[0.04em] uppercase mb-3 text-[rgba(245,245,247,0.86)]">
                Explore
              </h4>
              <ul className="space-y-2 text-xs md:text-sm">
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
              <h4 className="text-sm font-semibold tracking-[0.04em] uppercase mb-3 text-[rgba(245,245,247,0.86)]">
                Privacy
              </h4>
              <p className="opacity-80 text-xs md:text-sm leading-relaxed">
                All your data stays on your device. No tracking. No accounts. No servers. Your reflections are yours
                alone.
              </p>
            </div>
          </GlassSurface>

          {/* Divider & legal row */}
          <div className="border-t border-[rgba(255,255,255,0.08)] pt-4 text-[11px] md:text-xs opacity-70 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p>© 2025 Human Nature Explorer. Made with care for curious minds.</p>
            <p>
              Psychology research grounded in peer-reviewed science.{" "}
              <a href="#" className="underline hover:opacity-100">
                View citations.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
