import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChapterCard from "../components/Chapters/ChapterCard";
import { chapters, chaptersByCategory } from "../constants/chapters";
import { colors } from "../constants/designTokens";

const ExplorePage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Object.keys(chaptersByCategory);
  const displayedChapters = selectedCategory ? chaptersByCategory[selectedCategory] : chapters;

  return (
    <div className="w-full">
      {/* Header */}
      <section
        className="py-20 px-4"
        style={{
          background: `linear-gradient(135deg, ${colors.primary.main} 0%, ${colors.secondary.main} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-light mb-6">
            Guided Exploration
          </h1>
          <p className="text-lg md:text-xl text-neutral-light opacity-90 max-w-2xl mx-auto">
            Follow a structured path through 8 core concepts in psychology and human behavior. Each chapter builds on
            the last.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-neutral-light border-b" style={{ borderColor: colors.border }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold uppercase mb-6" style={{ color: colors.neutral.gray }}>
            Filter by Category
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-4 py-2 rounded-full font-medium transition-all"
              style={{
                backgroundColor: selectedCategory === null ? colors.primary.main : "white",
                color: selectedCategory === null ? "white" : colors.primary.main,
                border: `2px solid ${colors.primary.main}`,
              }}
            >
              All Chapters
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 rounded-full font-medium transition-all"
                style={{
                  backgroundColor: selectedCategory === category ? colors.primary.main : "white",
                  color: selectedCategory === category ? "white" : colors.primary.main,
                  border: `2px solid ${colors.primary.main}`,
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-20 px-4">
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
              <p style={{ color: colors.neutral.gray }}>No chapters found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Learning Path Info */}
      <section
        className="py-20 px-4"
        style={{
          backgroundColor: `${colors.secondary.main}15`,
          borderTop: `2px solid ${colors.secondary.main}`,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: colors.primary.main }}>
            How This Works
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: colors.accent.main }}
              >
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary.main }}>
                  Explore the 3D Scene
                </h3>
                <p style={{ color: colors.neutral.gray }}>
                  Each chapter features an interactive 3D visualization that reacts to your cursor and scroll. Hover
                  and interact to discover visual metaphors of the concept.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: colors.accent.main }}
              >
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary.main }}>
                  Read the Content
                </h3>
                <p style={{ color: colors.neutral.gray }}>
                  Thoughtfully written explanations grounded in peer-reviewed psychology research. Each explanation
                  balances accuracy with accessibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: colors.accent.main }}
              >
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary.main }}>
                  Reflect & Respond
                </h3>
                <p style={{ color: colors.neutral.gray }}>
                  Three reflection prompts help you connect the concept to your own life. Your responses are saved
                  locally—no tracking, no servers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white"
                style={{ backgroundColor: colors.accent.main }}
              >
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary.main }}>
                  Review Citations
                </h3>
                <p style={{ color: colors.neutral.gray }}>
                  All claims are backed by research. Every chapter includes citations and links to source material so
                  you can dive deeper.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-center" style={{ backgroundColor: colors.neutral.light }}>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block"
          style={{ backgroundColor: colors.primary.main, color: "white" }}
        >
          Back to Home
        </button>
      </section>
    </div>
  );
};

export default ExplorePage;
