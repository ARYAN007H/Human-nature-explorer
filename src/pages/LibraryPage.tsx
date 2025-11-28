import React, { useMemo, useState } from "react";
import { chapters } from "../constants/chapters";
import { useNavigate } from "react-router-dom";
import { colors } from "../constants/designTokens";

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
    <div className="max-w-6xl mx-auto p-6 md:p-12">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">Knowledge Library</h1>
        <p className="text-muted opacity-80">Browse topics and subtopics. Use search and filters to find what you want to read in depth — all inside the site.</p>
      </header>

      <div className="mb-6 flex flex-col md:flex-row gap-4 items-stretch md:items-center">
        <input
          aria-label="Search the library"
          className="flex-1 px-4 py-3 rounded-lg border focus:outline-none"
          placeholder="Search topics, examples, subtopics..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          aria-label="Filter by category"
          className="px-4 py-3 rounded-lg border"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button
          onClick={() => { setQuery(""); setCategory(""); }}
          className="px-4 py-3 rounded-lg border bg-white hover:opacity-90"
        >
          Clear
        </button>
      </div>

      <div className="grid gap-6">
        {filtered.map((ch) => (
          <article key={ch.id} className="p-6 rounded-lg shadow-sm bg-white border" style={{ borderColor: colors.border }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{ch.title}</h3>
                <p className="opacity-80 text-sm mb-3">{ch.teaser}</p>
                <p className="text-sm opacity-80 mb-4">{ch.description}</p>

                <div className="flex gap-3">
                  <button onMouseEnter={() => void import("./ChapterDetailPage")} onClick={() => goToChapter(ch.id)} className="px-3 py-2 rounded-md border">Open</button>
                  <button onMouseEnter={() => void import("./DeepDetailPage")} onClick={() => goToDeep(ch.id)} className="px-3 py-2 rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 text-white">Read in depth</button>
                </div>
              </div>

              <div className="w-48 hidden md:block text-right">
                <p className="text-xs opacity-60">Category</p>
                <p className="font-medium">{ch.category}</p>
                <p className="mt-4 text-xs opacity-60">Subtopics</p>
                <p className="font-medium">{(ch.subtopics || []).length}</p>
              </div>
            </div>

            {/* Subtopic previews */}
            {(ch.subtopics || []).length > 0 && (
              <div className="mt-6 border-t pt-4 grid gap-4">
                {(ch.subtopics || []).slice(0, 4).map((s) => (
                  <details key={s.id} className="rounded-md bg-gray-50 p-3">
                    <summary className="cursor-pointer font-medium">{s.title} <span className="ml-2 text-xs opacity-70">— {s.summary}</span></summary>
                    <div className="mt-3 text-sm leading-relaxed">
                      <div dangerouslySetInnerHTML={{ __html: s.svg || "" }} />
                      <div className="mt-2">{s.content}</div>
                      {s.examples && (
                        <ul className="list-disc pl-5 mt-2 text-sm">
                          {s.examples.map((ex, idx) => (
                            <li key={idx}>{ex}</li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-3 flex gap-2">
                        <button onMouseEnter={() => void import("./DeepDetailPage")} onClick={() => goToDeep(ch.id)} className="px-3 py-1 rounded-md text-sm border">Read chapter</button>
                        <button onMouseEnter={() => void import("./DeepDetailPage")} onClick={() => navigate(`/chapter/${ch.id}/deep#${s.id}`)} className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm">Open subtopic</button>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            )}
          </article>
        ))}

        {filtered.length === 0 && (
          <p className="opacity-60">No results found. Try a different search term or clear filters.</p>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
