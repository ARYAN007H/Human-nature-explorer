import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ChapterCard from "../components/Chapters/ChapterCard";
import { chapters } from "../constants/chapters";

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
      {/* Header */}
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-neutral-light mb-6">
            Wander Freely
          </h1>
          <p className="text-lg md:text-xl text-neutral-light opacity-90 max-w-2xl mx-auto">
            No guided structure. No suggested order. Browse all chapters and choose your own path through human
            psychology.
          </p>
        </div>
      </section>

      {/* Search & Sort */}
      <section className="py-12 px-4 bg-neutral-light border-b" style={{ borderColor: "var(--color-border)" }}>
        <div className="max-w-6xl mx-auto">
          {/* Search */}
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Search Chapters
            </label>
            <input
              type="text"
              placeholder="Search by title, topic, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none"
              style={{
                borderColor: "var(--color-accent)",
              }}
              aria-label="Search chapters by title or keyword"
            />
          </div>

          {/* Sort */}
          <div>
            <label className="block text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
              Sort By
            </label>
            <div className="flex flex-wrap gap-3">
              {[
                { value: "order" as const, label: "Default Order" },
                { value: "alphabetical" as const, label: "A-Z" },
                { value: "category" as const, label: "Category" },
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className="px-4 py-2 rounded-lg font-medium transition-all"
                  style={{
                    backgroundColor: sortBy === option.value ? "var(--color-accent)" : "white",
                    color: sortBy === option.value ? "white" : "var(--color-primary)",
                    border: `2px solid var(--color-accent)`,
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredChapters.length > 0 ? (
            <>
              <p className="mb-8 text-center" style={{ color: "var(--color-text-secondary)" }}>
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
            <div className="text-center py-12">
              <p className="text-2xl font-serif mb-4" style={{ color: "var(--color-primary)" }}>
                No chapters found
              </p>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Try a different search term or browse all chapters by clearing the search.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-6 px-6 py-2 rounded-lg font-semibold transition-all"
                style={{ backgroundColor: "var(--color-accent)", color: "white" }}
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Browse Tips */}
      <section
        className="py-20 px-4"
        style={{
          backgroundColor: "var(--color-accent-light)",
          borderTop: `2px solid var(--color-primary)`,
        }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-8" style={{ color: "var(--color-primary)" }}>
            Tip: Start With Your Curiosity
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                💭 Wondering About Yourself?
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Try <strong>Attachment & Relationships</strong> to understand your relationship patterns, or{" "}
                <strong>Memory & Learning</strong> to understand how you absorb information.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                🎯 Understanding Others?
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Explore <strong>Empathy & Mirror Neurons</strong> to understand social connection, or{" "}
                <strong>Social Roles</strong> to see why people behave differently in different contexts.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                ⚙️ Decision-Making?
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Read <strong>Cognitive Biases</strong> to see how your thinking can fool you, or{" "}
                <strong>Motivation & Goals</strong> to align your actions with your values.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                😔 Working Through Challenges?
              </h3>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Consider <strong>Fear & Threat Response</strong> if anxiety is present, or{" "}
                <strong>Emotions & Feelings</strong> to better understand your inner world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 text-center" style={{ backgroundColor: "var(--color-bg-secondary)" }}>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105 inline-block"
          style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-text)" }}
        >
          Back to Home
        </button>
      </section>
    </div>
  );
};

export default WanderPage;
