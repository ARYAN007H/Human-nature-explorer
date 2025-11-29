import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ChapterCard from "../components/Chapters/ChapterCard";
import { chapters } from "../constants/chapters";
import GlassSurface from "../components/ui/GlassSurface";
import GlassButton from "../components/ui/GlassButton";

const WanderPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"alphabetical" | "category" | "order">("order");

  const filteredChapters = useMemo(() => {
    let result = chapters;

    // Filter by search
    if (searchQuery) {
      result = result.filter(
        (chapter) =>
          chapter.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          chapter.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          chapter.teaser.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    if (sortBy === "alphabetical") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "category") {
      result = [...result].sort((a, b) => a.category.localeCompare(b.category));
    }

    return result;
  }, [searchQuery, sortBy]);

  return (
    <div className="w-full">
      {/* Header + Control Bar */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <GlassSurface
            variant="hero"
            depth="3"
            className="px-6 md:px-10 py-10 md:py-12 text-white"
          >
            <p className="text-xs uppercase tracking-[0.32em] mb-3 opacity-70">
              Mode · Wander
            </p>
            <h1 className="lg-heading-section mb-3">Choose your own path</h1>
            <p className="text-sm md:text-base max-w-2xl text-[rgba(245,245,247,0.86)]">
              Browse every chapter without order or expectation. Let curiosity, not a syllabus, decide
              where you go next.
            </p>
          </GlassSurface>

          <GlassSurface
            variant="panel"
            depth="2"
            className="px-4 md:px-6 py-4 md:py-5 space-y-4 text-xs md:text-sm text-white"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 md:items-center">
              <div className="flex-1">
                <label className="block text-[10px] uppercase tracking-[0.26em] mb-2 opacity-70">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search by title, topic, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 rounded-full bg-black/40 border border-white/16 text-xs md:text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[rgba(77,169,255,0.7)]"
                  aria-label="Search chapters by title or keyword"
                />
              </div>

              <div className="md:w-56">
                <label className="block text-[10px] uppercase tracking-[0.26em] mb-2 opacity-70">
                  Sort
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: "order" as const, label: "Default" },
                    { value: "alphabetical" as const, label: "A–Z" },
                    { value: "category" as const, label: "Category" },
                  ].map((option) => (
                    <GlassButton
                      key={option.value}
                      variant={sortBy === option.value ? "primary" : "secondary"}
                      accent="cyan"
                      className="px-3 py-1 text-[11px]"
                      onClick={() => setSortBy(option.value)}
                    >
                      {option.label}
                    </GlassButton>
                  ))}
                </div>
              </div>
            </div>
          </GlassSurface>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredChapters.length > 0 ? (
            <>
              <p className="mb-8 text-center text-xs md:text-sm text-[rgba(245,245,247,0.76)]">
                Showing {filteredChapters.length} of {chapters.length} chapters
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredChapters.map((chapter) => (
                  <div
                    key={chapter.id}
                    onClick={() => navigate(`/chapter/${chapter.id}`)}
                    className="cursor-pointer transition-transform hover:scale-105"
                  >
                    <ChapterCard chapter={chapter} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 text-white">
              <p className="text-2xl font-serif mb-4">
                No chapters found
              </p>
              <p className="text-sm text-[rgba(245,245,247,0.76)]">
                Try a different search term or browse all chapters by clearing the search.
              </p>
              <div className="mt-6">
                <GlassButton variant="primary" accent="blue" onClick={() => setSearchQuery("")}>
                  Clear search
                </GlassButton>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Browse Tips */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <GlassSurface variant="panel" depth="2" className="px-6 md:px-7 py-7 text-white">
            <h2 className="lg-heading-section mb-6 text-white">
              Not sure where to begin?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-xs md:text-sm text-[rgba(245,245,247,0.9)]">
              <div>
                <h3 className="font-semibold mb-2">💭 Wondering about yourself?</h3>
                <p>
                  Try <strong>Attachment & Relationships</strong> to map your patterns, or{" "}
                  <strong>Memory & Learning</strong> to see how you absorb information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">🎯 Understanding others?</h3>
                <p>
                  Visit <strong>Empathy & Mirror Neurons</strong> or{" "}
                  <strong>Social Roles</strong> to see why behavior shifts between contexts.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">⚙️ Decision-making?</h3>
                <p>
                  Read <strong>Cognitive Biases</strong> or{" "}
                  <strong>Motivation & Goals</strong> to align choices with your values.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">😔 Working through challenges?</h3>
                <p>
                  Explore <strong>Fear & Threat Response</strong> or{" "}
                  <strong>Emotions & Feelings</strong> to better understand your inner world.
                </p>
              </div>
            </div>
          </GlassSurface>
        </div>
      </section>
    </div>
  );
};

export default WanderPage;
