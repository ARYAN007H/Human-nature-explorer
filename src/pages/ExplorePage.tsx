import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChapterCard from "../components/Chapters/ChapterCard";
import { chapters, chaptersByCategory } from "../constants/chapters";
import GlassSurface from "../components/ui/GlassSurface";
import GlassButton from "../components/ui/GlassButton";

const ExplorePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Object.keys(chaptersByCategory);
  const displayedChapters = selectedCategory ? chaptersByCategory[selectedCategory] : chapters;

  return (
    <div className="w-full">
      {/* Header + Filter as a single glass stack */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <GlassSurface
            variant="hero"
            depth="3"
            className="px-6 md:px-10 py-10 md:py-12 text-white"
          >
            <p className="text-xs uppercase tracking-[0.32em] mb-3 opacity-70">
              Mode · Guided
            </p>
            <h1 className="lg-heading-section mb-3">Guided exploration</h1>
            <p className="text-sm md:text-base max-w-2xl text-[rgba(245,245,247,0.86)]">
              Move through 8 core chapters in a deliberate sequence. Each scene and reflection builds
              on what came before.
            </p>
          </GlassSurface>

          <GlassSurface
            variant="panel"
            depth="2"
            className="px-4 md:px-6 py-4 md:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-white/90"
          >
            <div>
              <p className="uppercase text-[10px] tracking-[0.26em] mb-1 opacity-70">
                Filter
              </p>
              <p className="text-xs md:text-sm opacity-80">
                Focus on one dimension of human nature at a time.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <GlassButton
                variant={selectedCategory === null ? "primary" : "secondary"}
                accent="cyan"
                className="px-4 py-1.5 text-xs"
                onClick={() => setSelectedCategory(null)}
              >
                All chapters
              </GlassButton>
              {categories.map((category) => (
                <GlassButton
                  key={category}
                  variant={selectedCategory === category ? "primary" : "secondary"}
                  accent="blue"
                  className="px-4 py-1.5 text-xs"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </GlassButton>
              ))}
            </div>
          </GlassSurface>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedChapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => navigate(`/chapter/${chapter.id}`)}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <ChapterCard chapter={chapter} />
              </div>
            ))}
          </div>

          {displayedChapters.length === 0 && (
            <div className="text-center py-12">
              <p style={{ color: "var(--color-fg-secondary)" }}>No chapters found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Learning Path Info */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto space-y-4 text-white">
          <h2 className="lg-heading-section mb-6">How this journey works</h2>
          <div className="space-y-5 text-sm md:text-base">
            {[
              {
                step: "01",
                title: "Explore the 3D scene",
                body: "Each chapter opens with an interactive visualization that reacts to your movement and scroll.",
              },
              {
                step: "02",
                title: "Read the idea clearly",
                body: "Short, precise explanations grounded in peer-reviewed psychology and neuroscience.",
              },
              {
                step: "03",
                title: "Reflect in your own words",
                body: "Prompts help you connect the idea to real moments in your life. Everything stays on your device.",
              },
              {
                step: "04",
                title: "Follow the citations",
                body: "When you’re ready, dive into the original papers and books that shaped each concept.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-[11px] tracking-[0.22em] uppercase">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold mb-1 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[rgba(245,245,247,0.86)]">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;
