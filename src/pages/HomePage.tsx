import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Canvas3D from "../components/3D/Canvas3D";
import { typography } from "../constants/designTokens";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <div className="w-full">
      {/* Hero Section with 3D Background */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--color-surface-primary)" }}
      >
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 opacity-60">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-primary to-secondary" />}>
            <Canvas3D chapterId="emotions" autoRotate={true} />
          </Suspense>
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(45, 62, 80, 0.7) 0%, rgba(232, 180, 184, 0.3) 100%)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
          <h1
            className="text-6xl md:text-7xl font-serif font-bold text-white mb-6"
            style={{ fontFamily: typography.fontFamily.serif }}
          >
            Human Nature Explorer
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-xl mx-auto">
            Explore the psychology of human behavior through immersive, interactive experiences.
          </p>

          {/* Onboarding */}
          {showOnboarding && (
            <div className="hero-content-glass mb-12">
              <p className="text-sm md:text-base text-white mb-4 max-w-md mx-auto leading-relaxed">
                <strong>Welcome.</strong> Choose your path: follow a guided journey or wander freely through
                psychology's greatest insights. No accounts, no tracking—just curious minds exploring.
              </p>
              <button
                onClick={() => setShowOnboarding(false)}
                className="text-accent underline hover:no-underline transition-all"
              >
                Got it
              </button>
            </div>
          )}

          {/* Entry Points */}
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              onClick={() => navigate("/explore")}
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-fg-primary)",
                boxShadow: `0 10px 25px var(--color-glow, rgba(244, 162, 97, 0.3))`,
              }}
              aria-label="Start guided exploration of human psychology chapters"
            >
              <span className="block text-lg">Explore</span>
              <span className="text-sm opacity-80">Guided journey</span>
            </button>

            <button
              onClick={() => navigate("/wander")}
              className="px-8 py-4 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: `2px solid var(--color-surface-secondary)`,
              }}
              aria-label="Browse chapters freely without guided structure"
            >
              <span className="block text-lg">Wander</span>
              <span className="text-sm opacity-80">Free exploration</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-70 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-4 bg-white dark:bg-black" style={{ backgroundColor: "var(--color-bg-primary)" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center mb-16" style={{ color: "var(--color-surface-primary)" }}>
            Why Explore Human Nature?
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Understand Yourself",
                description: "Learn why you think, feel, and act the way you do. Self-awareness is the first step to change.",
                icon: "🧠",
              },
              {
                title: "Improve Relationships",
                description:
                  "Understand attachment styles, social roles, and empathy. Connect more deeply with others.",
                icon: "🤝",
              },
              {
                title: "Make Better Decisions",
                description:
                  "Discover cognitive biases that fool your brain. Think more clearly about choices that matter.",
                icon: "✨",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6"
                style={{
                  backgroundColor: `var(--color-surface-secondary)`,
                  opacity: 0.15,
                  borderRadius: "1rem",
                }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-serif font-bold mb-3" style={{ color: "var(--color-surface-primary)" }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-fg-secondary)" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
