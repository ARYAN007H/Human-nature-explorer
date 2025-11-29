import React, { useMemo, useState } from "react";
import { chapters } from "../constants/chapters";
import { useNavigate } from "react-router-dom";
import GlassSurface from "../components/ui/GlassSurface";
import GlassButton from "../components/ui/GlassButton";

const LibraryPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | "">("");
  const navigate = useNavigate();

  const categories = useMemo(() => {
    const set = new Set<string>();
    chapters.forEach((c) => set.add(c.category));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return chapters.filter((c) => {
      if (category && c.category !== category) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.teaser.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        (c.subtopics || []).some((s) => (s.title + " " + s.summary + " " + s.content).toLowerCase().includes(q))
      );
    });
  }, [query, category]);

  const goToChapter = (id: string) => navigate(`/chapter/${id}`);
  const goToDeep = (id: string) => navigate(`/chapter/${id}/deep`);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <header className="mb-8 md:mb-10 text-white">
        <h1 className="lg-heading-section mb-2">Knowledge library</h1>
        <p className="text-xs md:text-sm text-[rgba(245,245,247,0.82)] max-w-2xl">
          Browse every chapter, subtopic, and example in one place. Use search and filters to go
          directly to the ideas you care about most.
        </p>
      </header>

      <GlassSurface
        variant="panel"
        depth="2"
        className="mb-8 md:mb-10 px-4 md:px-6 py-4 md:py-5 text-xs md:text-sm text-white space-y-3"
      >
        <div className="flex flex-col md:flex-row gap-3 md:gap-4 md:items-center">
          <div className="flex-1">
            <label className="block text-[10px] uppercase tracking-[0.26em] mb-2 opacity-70">
              Search
            </label>
            <input
              aria-label="Search the library"
              className="w-full px-4 py-2 rounded-full bg-black/40 border border-white/16 text-xs md:text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[rgba(77,169,255,0.7)]"
              placeholder="Search topics, examples, subtopics..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="md:w-56">
            <label className="block text-[10px] uppercase tracking-[0.26em] mb-2 opacity-70">
              Category
            </label>
            <select
              aria-label="Filter by category"
              className="w-full px-3 py-2 rounded-full bg-black/40 border border-white/16 text-xs md:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[rgba(90,240,217,0.7)]"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="md:self-end">
            <GlassButton
              variant="secondary"
              accent="blue"
              className="px-4 py-2 text-xs"
              onClick={() => {
                setQuery("");
                setCategory("");
              }}
            >
              Clear
            </GlassButton>
          </div>
        </div>
      </GlassSurface>

      <div className="grid gap-5 md:gap-6">
        {filtered.map((ch) => (
          <GlassSurface
            key={ch.id}
            variant="card"
            depth="1"
            className="px-5 py-5 md:px-6 md:py-6 text-white"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <p className="text-[11px] uppercase tracking-[0.24em] mb-1 opacity-70">
                  {ch.category}
                </p>
                <h3 className="text-base md:text-lg font-semibold mb-1 tracking-tight">
                  {ch.title}
                </h3>
                <p className="opacity-80 text-xs md:text-sm mb-2">{ch.teaser}</p>
                <p className="text-xs md:text-sm opacity-75 mb-3 line-clamp-3">
                  {ch.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                  <GlassButton
                    variant="secondary"
                    accent="blue"
                    onMouseEnter={() => void import("./ChapterDetailPage")}
                    onClick={() => goToChapter(ch.id)}
                  >
                    Open
                  </GlassButton>
                  <GlassButton
                    variant="primary"
                    accent="purple"
                    onMouseEnter={() => void import("./DeepDetailPage")}
                    onClick={() => goToDeep(ch.id)}
                  >
                    Read in depth
                  </GlassButton>
                </div>
              </div>

              <div className="w-40 hidden md:block text-right text-[11px] text-[rgba(245,245,247,0.78)]">
                <p className="opacity-60">Category</p>
                <p className="font-medium mb-3">{ch.category}</p>
                <p className="opacity-60">Subtopics</p>
                <p className="font-medium">{(ch.subtopics || []).length}</p>
              </div>
            </div>

            {/* Subtopic previews */}
            {(ch.subtopics || []).length > 0 && (
              <div className="mt-4 pt-3 border-t border-white/10 grid gap-3">
                {(ch.subtopics || [])
                  .slice(0, 4)
                  .map((s) => (
                    <details
                      key={s.id}
                      className="rounded-[18px] bg-black/30 border border-white/12 px-4 py-3"
                    >
                      <summary className="cursor-pointer text-xs md:text-sm font-medium flex items-center justify-between gap-2">
                        <span>
                          {s.title}{" "}
                          <span className="ml-2 text-[10px] opacity-70">
                            — {s.summary}
                          </span>
                        </span>
                      </summary>
                      <div className="mt-2 text-[11px] md:text-sm leading-relaxed text-[rgba(245,245,247,0.9)]">
                        <div dangerouslySetInnerHTML={{ __html: s.svg || "" }} />
                        <div className="mt-2">{s.content}</div>
                        {s.examples && (
                          <ul className="list-disc pl-5 mt-2 space-y-1">
                            {s.examples.map((ex, idx) => (
                              <li key={idx}>{ex}</li>
                            ))}
                          </ul>
                        )}
                        <div className="mt-3 flex flex-wrap gap-2">
                          <GlassButton
                            variant="secondary"
                            accent="blue"
                            className="px-3 py-1 text-[11px]"
                            onMouseEnter={() => void import("./DeepDetailPage")}
                            onClick={() => goToDeep(ch.id)}
                          >
                            Read chapter
                          </GlassButton>
                          <GlassButton
                            variant="primary"
                            accent="blue"
                            className="px-3 py-1 text-[11px]"
                            onMouseEnter={() => void import("./DeepDetailPage")}
                            onClick={() => navigate(`/chapter/${ch.id}/deep#${s.id}`)}
                          >
                            Open subtopic
                          </GlassButton>
                        </div>
                      </div>
                    </details>
                  ))}
              </div>
            )}
          </GlassSurface>
        ))}

        {filtered.length === 0 && (
          <p className="opacity-70 text-xs md:text-sm text-white">
            No results found. Try a different search term or clear filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
