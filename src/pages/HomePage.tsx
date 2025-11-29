import React, { Suspense, useState } from "react";
import { useNavigate } from "react-router-dom";
import Canvas3D from "../components/3D/Canvas3D";
import GlassSurface from "../components/ui/GlassSurface";
import GlassButton from "../components/ui/GlassButton";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <div className="w-full">
      {/* Hero Section with 3D Background */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Canvas Background */}
        <div className="absolute inset-0 opacity-70">
          <Suspense
            fallback={
              <div className="w-full h-full bg-gradient-to-br from-baseBlack via-[#050509] to-[#101016]" />
            }
          >
            <Canvas3D chapterId="emotions" autoRotate={true} />
          </Suspense>
        </div>

        {/* Dark atmospheric overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 0% 0%, rgba(90,240,217,0.2) 0%, transparent 55%), radial-gradient(circle at 100% 140%, rgba(77,169,255,0.4) 0%, transparent 60%), linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.96) 65%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full px-4">
          <GlassSurface
            variant="hero"
            depth="3"
            className="max-w-3xl mx-auto px-8 md:px-12 py-12 md:py-16 text-left text-white"
          >
            <p className="text-xs uppercase tracking-[0.32em] mb-4 opacity-70">
              Human Nature Explorer
            </p>
            <h1 className="lg-heading-hero mb-4">
              See your mind
              <br />
              through liquid glass.
            </h1>
            <p className="lg-body-text text-[rgba(245,245,247,0.86)] mb-10 max-w-xl">
              Explore psychology as a living landscape. Each chapter is a precise, interactive lens
              on how humans think, feel, and change.
            </p>

            {/* Onboarding */}
            {showOnboarding && (
              <div className="mb-10 space-y-3 text-sm md:text-base text-[rgba(245,245,247,0.9)]">
                <p className="max-w-md">
                  <strong>Welcome.</strong> Choose your path: follow a crafted journey or wander
                  freely through the concepts that pull you in.
                </p>
                <button
                  onClick={() => setShowOnboarding(false)}
                  className="text-[rgba(167,139,250,0.95)] underline hover:no-underline transition-colors"
                >
                  Got it
                </button>
              </div>
            )}

            {/* Entry Points */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center">
              <GlassButton
                variant="primary"
                accent="blue"
                onClick={() => navigate("/explore")}
                aria-label="Start guided exploration of human psychology chapters"
              >
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-sm md:text-base">Explore</span>
                  <span className="text-[11px] md:text-xs opacity-80">
                    Guided journey through 8 core chapters
                  </span>
                </div>
              </GlassButton>

              <GlassButton
                variant="secondary"
                accent="cyan"
                onClick={() => navigate("/wander")}
                aria-label="Browse chapters freely without guided structure"
              >
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-sm md:text-base">Wander</span>
                  <span className="text-[11px] md:text-xs opacity-80">
                    Free exploration — choose any topic
                  </span>
                </div>
              </GlassButton>
            </div>
          </GlassSurface>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80">
          <div className="h-10 w-[26px] rounded-full border border-white/30 flex items-start justify-center overflow-hidden relative">
            <div className="w-[2px] h-3 mt-2 rounded-full bg-white/70 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="lg-heading-section text-center mb-14 text-white">
            Why explore human nature?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Understand yourself",
                description:
                  "Trace the patterns behind your reactions, habits, and feelings with research-backed lenses.",
                icon: "🧠",
              },
              {
                title: "See others clearly",
                description:
                  "Decode attachment, roles, and empathy so relationships feel less chaotic and more intentional.",
                icon: "🤝",
              },
              {
                title: "Decide with clarity",
                description:
                  "Spot the cognitive biases that quietly steer choices that matter in work, love, and life.",
                icon: "✨",
              },
            ].map((item) => (
              <GlassSurface
                key={item.title}
                variant="card"
                depth="1"
                className="text-left px-5 py-6 md:px-6 md:py-7 text-white/90"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-[rgba(245,245,247,0.86)]">
                  {item.description}
                </p>
              </GlassSurface>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
